#!/usr/bin/env bash
# =============================================================
# add-portfolio.sh — Add new portfolio images automatically
# Requires: brew install webp jq
# =============================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
NEW_DIR="$SCRIPT_DIR/img/portfolio/new"
PORTFOLIO_DIR="$SCRIPT_DIR/img/portfolio"
DATA_FILE="$SCRIPT_DIR/data/portfolio-data.json"

# --- Preflight checks ---
for cmd in cwebp jq; do
    if ! command -v "$cmd" &>/dev/null; then
        echo "Error: '$cmd' is not installed. Run: brew install webp jq"
        exit 1
    fi
done

if [ ! -d "$NEW_DIR" ]; then
    echo "Error: Directory $NEW_DIR does not exist."
    echo "Create it and add images + metadata.txt"
    exit 1
fi

METADATA="$NEW_DIR/metadata.txt"
if [ ! -f "$METADATA" ]; then
    echo "Error: $METADATA not found."
    echo ""
    echo "Create metadata.txt with one line per image:"
    echo "  filename.png | Category | Title | Description"
    echo ""
    echo "Example:"
    echo "  my-project.png | Reclames Luminosos | Café Central | Reclame luminoso em néon — Porto"
    exit 1
fi

# --- Get next ID ---
NEXT_ID=$(jq '[.projects[].id] | max + 1' "$DATA_FILE")
TODAY=$(date +%Y-%m-%d)
COUNT=0

echo "Processing new portfolio images..."
echo ""

while IFS='|' read -r filename category title description; do
    # Trim whitespace
    filename=$(echo "$filename" | xargs)
    category=$(echo "$category" | xargs)
    title=$(echo "$title" | xargs)
    description=$(echo "$description" | xargs)

    # Skip empty lines or comments
    [[ -z "$filename" || "$filename" == \#* ]] && continue

    SRC="$NEW_DIR/$filename"
    if [ ! -f "$SRC" ]; then
        echo "  SKIP: $filename (file not found)"
        continue
    fi

    # Generate slug from filename (remove extension)
    SLUG="${filename%.*}"
    SLUG=$(echo "$SLUG" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
    WEBP_NAME="${SLUG}.webp"
    DEST="$PORTFOLIO_DIR/$WEBP_NAME"

    # Convert to WebP 1536x1024
    echo "  Converting: $filename -> $WEBP_NAME"
    cwebp -resize 1536 1024 -q 80 "$SRC" -o "$DEST" 2>/dev/null

    # Generate alt text from title and category
    ALT="$title $category"

    # Add entry to JSON
    jq --arg img "img/portfolio/$WEBP_NAME" \
       --arg alt "$ALT" \
       --arg cat "$category" \
       --arg ttl "$title" \
       --arg desc "$description" \
       --arg date "$TODAY" \
       --argjson id "$NEXT_ID" \
       '.projects += [{id: $id, image: $img, alt: $alt, category: $cat, title: $ttl, description: $desc, date: $date}]' \
       "$DATA_FILE" > "${DATA_FILE}.tmp" && mv "${DATA_FILE}.tmp" "$DATA_FILE"

    # Add category if new
    jq --arg cat "$category" \
       'if (.categories | index($cat)) == null then .categories += [$cat] else . end' \
       "$DATA_FILE" > "${DATA_FILE}.tmp" && mv "${DATA_FILE}.tmp" "$DATA_FILE"

    NEXT_ID=$((NEXT_ID + 1))
    COUNT=$((COUNT + 1))
done < "$METADATA"

if [ "$COUNT" -eq 0 ]; then
    echo "No images processed. Check metadata.txt format."
    exit 1
fi

echo ""
echo "$COUNT image(s) added to portfolio."

# --- Minify CSS & JS ---
echo ""
echo "Minifying CSS and JS..."
cd "$SCRIPT_DIR"
npx clean-css-cli css/style.css -o css/style.min.css
npx terser js/main.js -c -m -o js/main.min.js
echo "Minification complete."

# --- Git commit & push ---
echo ""
echo "Committing and pushing..."
cd "$SCRIPT_DIR"
git add data/portfolio-data.json "img/portfolio/" css/style.min.css js/main.min.js
git commit -m "Add $COUNT new portfolio project(s)"
git push

echo ""
echo "Done! Vercel will auto-deploy shortly."

# --- Cleanup ---
echo "Cleaning up $NEW_DIR..."
rm -f "$NEW_DIR"/*.png "$NEW_DIR"/*.jpg "$NEW_DIR"/*.jpeg "$NEW_DIR"/metadata.txt
echo "Cleanup complete."
