#!/usr/bin/env python3
"""
Yes, We Do — Portfolio Telegram Bot

Receives photos via Telegram and automatically:
  1. Analyzes with Gemini AI (free) to detect category/title/description
  2. Enhances with Real-ESRGAN via upscayl-bin (free, local)
  3. Converts to optimized WebP
  4. Updates portfolio-data.json
  5. Commits & pushes to GitHub Pages

Usage:
  Just send a photo — AI does the rest!
  Optional: add a caption to override AI detection:
    Categoria | Título | Descrição

Commands:
  /start    — Instructions
  /status   — Portfolio stats
  /id       — Show your Telegram user ID
"""

import asyncio
import json
import logging
import os
import re
import subprocess
import unicodedata
from datetime import date
from pathlib import Path

from google import genai
from telegram import Update
from telegram.ext import (
    Application,
    CommandHandler,
    MessageHandler,
    filters,
)

# ── Configuration ──────────────────────────────────────────────────

BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "").strip()

PROJECT_DIR = Path("/Users/ryanalves/Yes-wedo")
PORTFOLIO_JSON = PROJECT_DIR / "data" / "portfolio-data.json"
PORTFOLIO_IMG_DIR = PROJECT_DIR / "img" / "portfolio"
PROCESSING_DIR = PROJECT_DIR / "img" / "portfolio" / "_processing"

UPSCAYL_BIN = "/Applications/Upscayl.app/Contents/Resources/bin/upscayl-bin"
UPSCAYL_MODELS = "/Applications/Upscayl.app/Contents/Resources/models"
UPSCAYL_MODEL = "ultrasharp-4x"

TARGET_WIDTH = 1536
TARGET_HEIGHT = 1024
WEBP_QUALITY = 82

# Restrict access — add Telegram user IDs here (empty = allow everyone)
AUTHORIZED_USERS = []

# Git account for pushing
GIT_PUSH_USER = "boni-3"
GIT_DEFAULT_USER = "ade-studio3"

# ── Logging ────────────────────────────────────────────────────────

logging.basicConfig(
    format="%(asctime)s [%(levelname)s] %(message)s",
    level=logging.INFO,
)
log = logging.getLogger("portfolio-bot")

# ── Gemini AI Setup ───────────────────────────────────────────────

gemini_client = None  # initialized in main()


def init_gemini():
    """Initialize Gemini client for image analysis."""
    if not GEMINI_API_KEY:
        log.warning("GEMINI_API_KEY not set — AI analysis disabled, captions required")
        return None
    client = genai.Client(api_key=GEMINI_API_KEY)
    log.info("Gemini AI initialized (google-genai SDK)")
    return client


def get_categories():
    """Get valid portfolio categories."""
    data = load_portfolio()
    return [c for c in data["categories"] if c != "Todos"]


def analyze_image(image_path):
    """Use Gemini to analyze an image and return (category, title, description)."""
    if not gemini_client:
        return None

    categories = get_categories()
    categories_str = ", ".join(f'"{c}"' for c in categories)

    # Load existing projects for context
    data = load_portfolio()
    examples = []
    for p in data["projects"][:10]:
        examples.append(f'  {p["category"]} | {p["title"]} | {p["description"]}')
    examples_str = "\n".join(examples)

    prompt = f"""Analyze this image from a marketing/advertising agency portfolio.
The agency "Yes, We Do" specializes in signage, stands, vehicle wraps, and printing.

Based on what you see, provide:
1. CATEGORY — must be exactly one of: {categories_str}
2. TITLE — short project name (brand/client name + type), in Portuguese, 2-5 words
3. DESCRIPTION — one-line description in Portuguese of what was made, max 80 chars

Here are examples of existing projects for reference:
{examples_str}

IMPORTANT RULES:
- The category MUST be exactly one from the list above
- Title should mention the brand/client if visible, otherwise describe the work
- Description should describe the physical product (letras, reclame, stand, lona, etc.)
- All text in Portuguese (pt-PT)
- If you see illuminated signs → "Reclames Luminosos"
- If you see 3D/cut letters without light → "Letras Recortadas"
- If you see event stands/booths → "Stands & Eventos"
- If you see directional/informational signs → "Sinaléticas"
- If you see large prints/banners/canvas → "Lonas & Impressão"
- If you see vehicle wraps/graphics → "Decoração de Viaturas"
- If you see window/storefront decoration → "Decoração de Montras"

Respond ONLY with this exact format, nothing else:
CATEGORY | TITLE | DESCRIPTION"""

    try:
        # Upload and analyze
        with open(image_path, "rb") as f:
            image_bytes = f.read()

        response = gemini_client.models.generate_content(
            model="gemini-2.0-flash",
            contents=[
                prompt,
                {"inline_data": {"mime_type": "image/jpeg", "data": image_bytes}},
            ],
        )
        text = response.text.strip()
        log.info(f"Gemini response: {text}")

        # Parse response
        parts = [p.strip() for p in text.split("|")]
        if len(parts) >= 3:
            category = parts[0]
            title = parts[1]
            description = " | ".join(parts[2:])

            # Validate category
            if category in categories:
                return category, title, description
            # Try fuzzy match
            for cat in categories:
                if cat.lower() in category.lower() or category.lower() in cat.lower():
                    return cat, title, description

        log.warning(f"Could not parse Gemini response: {text}")
        return None

    except Exception as e:
        log.exception(f"Gemini analysis failed: {e}")
        return None


# ── Helpers ────────────────────────────────────────────────────────


def slugify(text):
    """Convert text to URL-safe slug (handles Portuguese characters)."""
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-z0-9]+", "-", text.lower())
    return text.strip("-")


def load_portfolio():
    with open(PORTFOLIO_JSON, "r", encoding="utf-8") as f:
        return json.load(f)


def save_portfolio(data):
    with open(PORTFOLIO_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)


def next_id(data):
    if not data["projects"]:
        return 1
    return max(p["id"] for p in data["projects"]) + 1


def run(cmd, desc):
    """Run a shell command, raise on failure."""
    log.info(f"  {desc}: {' '.join(cmd[:3])}...")
    result = subprocess.run(cmd, capture_output=True, text=True, timeout=600)
    if result.returncode != 0:
        raise RuntimeError(f"{desc}: {result.stderr.strip()[:300]}")
    return result


def process_image(input_path, slug):
    """Resize → AI upscale → resize back → WebP."""
    PROCESSING_DIR.mkdir(parents=True, exist_ok=True)

    resized = PROCESSING_DIR / f"{slug}_1_resized.png"
    upscaled = PROCESSING_DIR / f"{slug}_2_upscaled.png"
    final = PROCESSING_DIR / f"{slug}_3_final.png"
    output = PORTFOLIO_IMG_DIR / f"{slug}.webp"

    # 1 — Resize to target dimensions (crop-to-fill)
    run(
        [
            "magick", str(input_path),
            "-resize", f"{TARGET_WIDTH}x{TARGET_HEIGHT}^",
            "-gravity", "center",
            "-extent", f"{TARGET_WIDTH}x{TARGET_HEIGHT}",
            "-quality", "95",
            str(resized),
        ],
        "Resize to 1536x1024",
    )

    # 2 — AI upscale with Real-ESRGAN (4x output)
    source = resized
    try:
        run(
            [
                UPSCAYL_BIN,
                "-i", str(resized),
                "-o", str(upscaled),
                "-s", "4",
                "-m", UPSCAYL_MODELS,
                "-n", UPSCAYL_MODEL,
                "-f", "png",
            ],
            f"AI enhance ({UPSCAYL_MODEL})",
        )

        # 3 — Resize back to target from 4x
        run(
            [
                "magick", str(upscaled),
                "-resize", f"{TARGET_WIDTH}x{TARGET_HEIGHT}!",
                "-quality", "95",
                str(final),
            ],
            "Resize back to 1536x1024",
        )
        source = final
    except Exception as e:
        log.warning(f"  AI upscale failed, using original resize: {e}")

    # 4 — Convert to WebP
    run(
        ["cwebp", "-q", str(WEBP_QUALITY), str(source), "-o", str(output)],
        "Convert to WebP",
    )

    # 5 — Cleanup temp files
    for f in PROCESSING_DIR.glob(f"{slug}_*"):
        f.unlink(missing_ok=True)
    try:
        PROCESSING_DIR.rmdir()
    except OSError:
        pass

    return output


def git_deploy(slug, title):
    """Stage, commit, push to GitHub Pages."""
    os.chdir(PROJECT_DIR)

    run(
        ["git", "add", f"img/portfolio/{slug}.webp", "data/portfolio-data.json"],
        "Git add",
    )
    run(
        ["git", "commit", "-m", f"feat(portfolio): add {title}"],
        "Git commit",
    )

    # Switch to push account
    run(["gh", "auth", "switch", "--user", GIT_PUSH_USER], "Auth switch")
    try:
        run(["git", "push"], "Git push")
    finally:
        run(["gh", "auth", "switch", "--user", GIT_DEFAULT_USER], "Auth restore")


def is_authorized(user_id):
    return not AUTHORIZED_USERS or user_id in AUTHORIZED_USERS


def parse_caption(caption):
    """Parse 'Category | Title | Description' from caption. Returns tuple or None."""
    if not caption or "|" not in caption:
        return None
    parts = [p.strip() for p in caption.split("|")]
    if len(parts) < 3:
        return None
    return parts[0], parts[1], " | ".join(parts[2:])


# ── Bot Handlers ───────────────────────────────────────────────────


async def cmd_start(update, context):
    user = update.effective_user
    log.info(f"/start from {user.first_name} (ID: {user.id})")

    ai_status = "Ativada (Gemini)" if gemini_client else "Desativada"

    await update.message.reply_text(
        "*Yes, We Do — Portfolio Bot*\n\n"
        "Envia uma foto e a IA faz tudo automaticamente!\n\n"
        "A IA analisa a imagem e detecta:\n"
        "  - Categoria\n"
        "  - Titulo\n"
        "  - Descricao\n\n"
        "*Opcional:* podes enviar com legenda para sobrepor a IA:\n"
        "`Categoria | Titulo | Descricao`\n\n"
        f"*Analise IA:* {ai_status}\n"
        f"*O teu ID:* `{user.id}`",
        parse_mode="Markdown",
    )


async def cmd_status(update, context):
    data = load_portfolio()
    total = len(data["projects"])
    cats = {}
    for p in data["projects"]:
        cats[p["category"]] = cats.get(p["category"], 0) + 1

    lines = [f"*Portfolio: {total} projetos*\n"]
    for cat, count in sorted(cats.items()):
        lines.append(f"  {cat}: {count}")

    await update.message.reply_text("\n".join(lines), parse_mode="Markdown")


async def cmd_id(update, context):
    await update.message.reply_text(f"`{update.effective_user.id}`", parse_mode="Markdown")


async def process_and_deploy(update, context, input_path, category, title, description):
    """Shared processing pipeline for photos and documents."""
    slug = slugify(title)

    # Check duplicate slug — append number if needed
    original_slug = slug
    counter = 2
    while (PORTFOLIO_IMG_DIR / f"{slug}.webp").exists():
        slug = f"{original_slug}-{counter}"
        counter += 1

    status_msg = await update.message.reply_text(
        f"1/5 — Foto recebida: *{title}*\n"
        f"Categoria: {category}\n"
        f"{description}",
        parse_mode="Markdown",
    )

    try:
        # Step 2: Process image
        await status_msg.edit_text(
            f"2/5 — A melhorar com IA *{title}*...\n(pode demorar ~30s)",
            parse_mode="Markdown",
        )

        loop = asyncio.get_event_loop()
        output = await loop.run_in_executor(None, process_image, input_path, slug)

        # Step 3: Update JSON
        await status_msg.edit_text(
            "3/5 — A atualizar portfolio...",
            parse_mode="Markdown",
        )

        data = load_portfolio()
        data["projects"].append(
            {
                "id": next_id(data),
                "image": f"img/portfolio/{slug}.webp",
                "alt": f"{title} — {description[:60]}",
                "category": category,
                "title": title,
                "description": description,
                "date": date.today().isoformat(),
            }
        )
        save_portfolio(data)

        # Step 4: Git deploy
        await status_msg.edit_text(
            f"4/5 — A publicar *{title}* no site...",
            parse_mode="Markdown",
        )

        await loop.run_in_executor(None, git_deploy, slug, title)

        # Done
        size_kb = output.stat().st_size // 1024
        input_path.unlink(missing_ok=True)

        await status_msg.edit_text(
            f"*{title}* adicionado!\n\n"
            f"`{slug}.webp` ({size_kb}KB)\n"
            f"*Categoria:* {category}\n"
            f"*Descricao:* {description}\n\n"
            f"https://yes-wedo.pt/portfolio",
            parse_mode="Markdown",
        )
        log.info(f"SUCCESS: {slug}.webp ({size_kb}KB) deployed")

    except Exception as e:
        log.exception(f"Error processing {title}")
        await status_msg.edit_text(
            f"Erro ao processar *{title}*:\n`{str(e)[:300]}`",
            parse_mode="Markdown",
        )
        # Cleanup
        for f in PROCESSING_DIR.glob(f"{slug}_*"):
            f.unlink(missing_ok=True)
        webp = PORTFOLIO_IMG_DIR / f"{slug}.webp"
        webp.unlink(missing_ok=True)


async def download_and_process(update, context, input_path):
    """Download image, analyze with AI if no caption, then process."""
    user = update.effective_user
    if not is_authorized(user.id):
        await update.message.reply_text("Nao autorizado.")
        return

    # Check if caption provided (manual override)
    parsed = parse_caption(update.message.caption)

    if parsed:
        category, title, description = parsed
        # Validate category
        valid = get_categories()
        if category not in valid:
            await update.message.reply_text(
                f"Categoria invalida: *{category}*\n\nValidas:\n"
                + "\n".join(f"  `{c}`" for c in valid),
                parse_mode="Markdown",
            )
            return
        log.info(f"Using manual caption: {category} | {title} | {description}")
    else:
        # No caption — use Gemini AI to analyze
        if not gemini_client:
            await update.message.reply_text(
                "Sem legenda e sem IA configurada.\n"
                "Envia com legenda:\n`Categoria | Titulo | Descricao`",
                parse_mode="Markdown",
            )
            return

        analyzing_msg = await update.message.reply_text(
            "A analisar a imagem com IA...",
        )

        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(None, analyze_image, input_path)

        if not result:
            await analyzing_msg.edit_text(
                "A IA nao conseguiu analisar a imagem.\n"
                "Envia com legenda:\n`Categoria | Titulo | Descricao`",
                parse_mode="Markdown",
            )
            return

        category, title, description = result
        await analyzing_msg.delete()
        log.info(f"AI detected: {category} | {title} | {description}")

    await process_and_deploy(update, context, input_path, category, title, description)


async def handle_photo(update, context):
    """Handle compressed photos."""
    PROCESSING_DIR.mkdir(parents=True, exist_ok=True)
    input_path = PROCESSING_DIR / f"temp_{update.message.message_id}.jpg"

    photo = update.message.photo[-1]  # highest resolution
    file = await context.bot.get_file(photo.file_id)
    await file.download_to_drive(str(input_path))

    await download_and_process(update, context, input_path)


async def handle_document(update, context):
    """Handle uncompressed images sent as files."""
    doc = update.message.document
    if not doc or not doc.mime_type or not doc.mime_type.startswith("image/"):
        return

    PROCESSING_DIR.mkdir(parents=True, exist_ok=True)
    ext = doc.file_name.rsplit(".", 1)[-1] if doc.file_name else "jpg"
    input_path = PROCESSING_DIR / f"temp_{update.message.message_id}.{ext}"

    file = await context.bot.get_file(doc.file_id)
    await file.download_to_drive(str(input_path))

    await download_and_process(update, context, input_path)


# ── Main ───────────────────────────────────────────────────────────


def main():
    global gemini_client

    if not BOT_TOKEN:
        print("ERROR: Set TELEGRAM_BOT_TOKEN environment variable")
        print("  export TELEGRAM_BOT_TOKEN='your-token-here'")
        print("  python3 bot.py")
        return

    gemini_client = init_gemini()

    log.info("Starting Yes, We Do Portfolio Bot...")

    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", cmd_start))
    app.add_handler(CommandHandler("status", cmd_status))
    app.add_handler(CommandHandler("id", cmd_id))
    app.add_handler(MessageHandler(filters.PHOTO, handle_photo))
    app.add_handler(MessageHandler(filters.Document.ALL, handle_document))

    log.info("Bot running — send /start in Telegram")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
