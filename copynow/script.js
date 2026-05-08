/********************************
 * I18N — TRADUÇÕES
 ********************************/
const I18N = {

  pt: {
    'lang.label': 'Idioma',
    'back.btn': 'Voltar ao site',
    'file.quote.btn': 'Pedir Orçamento',
    'back.instagram': 'Sair',
    title: 'DESENHA O TEU TEXTO NEON',
    cta: 'Personalize seu texto agora!',
    'placeholder.text': 'Escreve aqui o teu texto',
    'preview.placeholder': 'O teu texto',
    'sizes.title': 'Escolha o comprimento:',
    'sizes.subtitle': 'A altura da arte varia com a fonte escolhida',
    'sizes.block': (cm, max) => `${cm} cm — máx. ${max} caracteres`,
    'sizes.custom': 'Para tamanhos personalizados, envie ficheiro',
    'fonts.title': 'Escolha a fonte:',
    'fonts.note': '*Para outro tipo de fontes, envie ficheiro',
    'colors.title': 'Escolha a cor:',
    'upload.title': 'Carregar logotipo/personalizados (opcional):',
    'upload.accepted': 'Formatos aceites: JPG, PNG, SVG, PDF, AI',
    'upload.btn': 'Selecionar arquivo',
    'min.chars': 'Mínimo 3 caracteres.',
    'max.lines': 'Máximo 2 linhas por tamanho.',
    dimensions: (w, h) => `Dimensões aprox.: ${w}cm (L) × ${h}cm (A)`,
    price: v => `Preço Final: €${v}`,
    'cta.buy': 'Encomende Já',
    'extras.power.title': 'Fonte de alimentação',
    'extras.power.no':  'Sem fonte de alimentação / transformador',
    'extras.power.yes': 'Com fonte de alimentação / transformador (+10,00€)',
    'extras.shape.title':   'Forma da arte',
    'extras.shape.rect':    'Corte reto (retangular à volta da arte)',
    'extras.shape.contour': 'Corte contorno (seguindo as letras)',
    'extras.install.title':     'Instalação',
    'extras.install.wall':      'Fixação na parede (leva peças para fixação)',
    'extras.install.suspended': 'Suspenso (a arte leva 2 furos para suspender)',
    'checkout.title':    'Resumo da sua encomenda',
    'checkout.choose':   'Como pretende continuar?',
    'checkout.whatsapp': 'Enviar via WhatsApp',
    'checkout.email':    'Enviar por E-mail',
    colorsMap: { Branco:'Branco', Vermelho:'Vermelho', Verde:'Verde', Azul:'Azul', Rosa:'Rosa', Amarelo:'Amarelo', Laranja:'Laranja', Ciano:'Ciano' },
    checkoutLabels: { text:'Texto', line1:'Linha 1', line2:'Linha 2', size:'Tamanho', font:'Fonte', color:'Cor', power:'Transformador', shape:'Forma', install:'Instalação', price:'Preço Final' },
    waHeader: '*Pedido de Orçamento - LED Neon*',
    'vat.label': '+ IVA',
    'vat.note': 'Valor sem IVA. IVA à taxa legal em vigor não incluído.',
    'checkout.email.other': 'Outro cliente de email',
    'checkout.pdf': 'Descarregar PDF',
    'checkout.title.file': 'Pedido de orçamento',
    'checkout.file.msg': 'Vamos analisar o seu ficheiro e terá resposta nossa o mais breve possível.',
    'checkout.choose.file': 'Como pretende enviar o seu pedido?',
    powerMap: { no:'Sem transformador', yes:'Com transformador' },
    shapeMap: { rect:'Corte reto', contour:'Corte contorno' },
    installMap: { wall:'Fixação na parede', suspended:'Suspenso' }
  },

  en: {
    'lang.label': 'Language',
    'back.btn': 'Back to site',
    'file.quote.btn': 'Request a Quote',
    'back.instagram': 'Exit',
    title: 'DESIGN YOUR NEON TEXT',
    cta: 'Customize your text now!',
    'placeholder.text': 'Type your text here',
    'preview.placeholder': 'Your text',
    'sizes.title': 'Choose width:',
    'sizes.subtitle': 'Artwork height varies by the selected font',
    'sizes.block': (cm, max) => `${cm} cm — max ${max} characters`,
    'sizes.custom': 'For custom sizes, upload a file',
    'fonts.title': 'Choose a font:',
    'fonts.note': '*For other fonts, upload a file',
    'colors.title': 'Choose a color:',
    'upload.title': 'Upload logo/custom (optional):',
    'upload.accepted': 'Accepted: JPG, PNG, SVG, PDF, AI',
    'upload.btn': 'Select file',
    'min.chars': 'Minimum 3 characters.',
    'max.lines': 'Maximum 2 lines per size.',
    dimensions: (w, h) => `Approx. size: ${w}cm (W) × ${h}cm (H)`,
    price: v => `Final Price: €${v}`,
    'cta.buy': 'Order Now',
    'extras.power.title': 'Power supply',
    'extras.power.no':  'Without power supply / transformer',
    'extras.power.yes': 'With power supply / transformer (+€10.00)',
    'extras.shape.title':   'Artwork shape',
    'extras.shape.rect':    'Straight cut (rectangular around the artwork)',
    'extras.shape.contour': 'Contour cut (following the letters)',
    'extras.install.title':     'Installation',
    'extras.install.wall':      'Wall mounting (fixing hardware included)',
    'extras.install.suspended': 'Suspended (2 holes for hanging)',
    'checkout.title':    'Your order summary',
    'checkout.choose':   'How would you like to continue?',
    'checkout.whatsapp': 'Send via WhatsApp',
    'checkout.email':    'Send by E-mail',
    colorsMap: { Branco:'White', Vermelho:'Red', Verde:'Green', Azul:'Blue', Rosa:'Pink', Amarelo:'Yellow', Laranja:'Orange', Ciano:'Cyan' },
    checkoutLabels: { text:'Text', line1:'Line 1', line2:'Line 2', size:'Size', font:'Font', color:'Color', power:'Transformer', shape:'Shape', install:'Installation', price:'Final Price' },
    waHeader: '*Quote Request - LED Neon*',
    'vat.label': '+ VAT',
    'vat.note': 'Price excluding VAT. VAT at the applicable legal rate not included.',
    'checkout.email.other': 'Other email client',
    'checkout.pdf': 'Download PDF',
    'checkout.title.file': 'Quote request',
    'checkout.file.msg': 'We will analyse your file and get back to you as soon as possible.',
    'checkout.choose.file': 'How would you like to send your request?',
    powerMap: { no:'Without transformer', yes:'With transformer' },
    shapeMap: { rect:'Straight cut', contour:'Contour cut' },
    installMap: { wall:'Wall mounting', suspended:'Suspended' }
  },

  es: {
    'lang.label': 'Idioma',
    'back.btn': 'Volver al sitio',
    'file.quote.btn': 'Pedir Presupuesto',
    'back.instagram': 'Salir',
    title: 'DISEÑA TU TEXTO NEÓN',
    cta: '¡Personaliza tu texto ahora!',
    'placeholder.text': 'Escribe tu texto aquí',
    'preview.placeholder': 'Tu texto',
    'sizes.title': 'Elige el ancho:',
    'sizes.subtitle': 'La altura varía según la fuente elegida',
    'sizes.block': (cm, max) => `${cm} cm — máx. ${max} caracteres`,
    'sizes.custom': 'Para tamaños personalizados, sube un archivo',
    'fonts.title': 'Elige la fuente:',
    'fonts.note': '*Para otras fuentes, sube un archivo',
    'colors.title': 'Elige el color:',
    'upload.title': 'Subir logo/personalizado (opcional):',
    'upload.accepted': 'Formatos: JPG, PNG, SVG, PDF, AI',
    'upload.btn': 'Seleccionar archivo',
    'min.chars': 'Mínimo 3 caracteres.',
    'max.lines': 'Máximo 2 líneas por tamaño.',
    dimensions: (w, h) => `Tamaño aprox.: ${w}cm (A) × ${h}cm (H)`,
    price: v => `Precio Final: €${v}`,
    'cta.buy': 'Pedir Ya',
    'extras.power.title': 'Fuente de alimentación',
    'extras.power.no':  'Sin fuente de alimentación / transformador',
    'extras.power.yes': 'Con fuente de alimentación / transformador (+10,00€)',
    'extras.shape.title':   'Forma del arte',
    'extras.shape.rect':    'Corte recto (rectangular alrededor del arte)',
    'extras.shape.contour': 'Corte de contorno (siguiendo las letras)',
    'extras.install.title':     'Instalación',
    'extras.install.wall':      'Fijación a la pared (incluye accesorios)',
    'extras.install.suspended': 'Suspendido (2 orificios para colgar)',
    'checkout.title':    'Resumen de tu pedido',
    'checkout.choose':   '¿Cómo deseas continuar?',
    'checkout.whatsapp': 'Enviar por WhatsApp',
    'checkout.email':    'Enviar por E-mail',
    colorsMap: { Branco:'Blanco', Vermelho:'Rojo', Verde:'Verde', Azul:'Azul', Rosa:'Rosa', Amarelo:'Amarillo', Laranja:'Naranja', Ciano:'Cian' },
    checkoutLabels: { text:'Texto', line1:'Línea 1', line2:'Línea 2', size:'Tamaño', font:'Fuente', color:'Color', power:'Transformador', shape:'Forma', install:'Instalación', price:'Precio Final' },
    waHeader: '*Solicitud de presupuesto - LED Neón*',
    'vat.label': '+ IVA',
    'vat.note': 'Precio sin IVA. IVA al tipo legal vigente no incluido.',
    'checkout.email.other': 'Otro cliente de correo',
    'checkout.pdf': 'Descargar PDF',
    'checkout.title.file': 'Solicitud de presupuesto',
    'checkout.file.msg': 'Analizaremos tu archivo y te responderemos lo antes posible.',
    'checkout.choose.file': '¿Cómo deseas enviar tu solicitud?',
    powerMap: { no:'Sin transformador', yes:'Con transformador' },
    shapeMap: { rect:'Corte recto', contour:'Corte contorno' },
    installMap: { wall:'Fijación a pared', suspended:'Suspendido' }
  },

  fr: {
    'lang.label': 'Langue',
    'back.btn': 'Retour au site',
    'file.quote.btn': 'Demander un Devis',
    'back.instagram': 'Quitter',
    title: 'CRÉEZ VOTRE TEXTE NÉON',
    cta: 'Personnalisez votre texte maintenant !',
    'placeholder.text': 'Écrivez votre texte ici',
    'preview.placeholder': 'Votre texte',
    'sizes.title': 'Choisissez la largeur :',
    'sizes.subtitle': 'La hauteur varie selon la police choisie',
    'sizes.block': (cm, max) => `${cm} cm — max ${max} caractères`,
    'sizes.custom': 'Pour des tailles sur mesure, envoyez un fichier',
    'fonts.title': 'Choisissez la police :',
    'fonts.note': "*Pour d'autres polices, envoyez un fichier",
    'colors.title': 'Choisissez la couleur :',
    'upload.title': 'Téléverser logo/personnalisé (optionnel) :',
    'upload.accepted': 'Formats acceptés : JPG, PNG, SVG, PDF, AI',
    'upload.btn': 'Choisir un fichier',
    'min.chars': 'Minimum 3 caractères.',
    'max.lines': 'Maximum 2 lignes par taille.',
    dimensions: (w, h) => `Dimensions approx. : ${w}cm (L) × ${h}cm (H)`,
    price: v => `Prix Final : €${v}`,
    'cta.buy': 'Commander',
    'extras.power.title': 'Alimentation',
    'extras.power.no':  'Sans alimentation / transformateur',
    'extras.power.yes': 'Avec alimentation / transformateur (+10,00€)',
    'extras.shape.title':   'Forme de découpe',
    'extras.shape.rect':    "Découpe droite (rectangulaire autour de l'œuvre)",
    'extras.shape.contour': 'Découpe contour (suivant les lettres)',
    'extras.install.title':     'Installation',
    'extras.install.wall':      'Fixation murale (pièces incluses)',
    'extras.install.suspended': 'Suspendu (2 trous pour suspension)',
    'checkout.title':    'Résumé de votre commande',
    'checkout.choose':   'Comment souhaitez-vous continuer ?',
    'checkout.whatsapp': 'Envoyer via WhatsApp',
    'checkout.email':    'Envoyer par E-mail',
    colorsMap: { Branco:'Blanc', Vermelho:'Rouge', Verde:'Vert', Azul:'Bleu', Rosa:'Rose', Amarelo:'Jaune', Laranja:'Orange', Ciano:'Cyan' },
    checkoutLabels: { text:'Texte', line1:'Ligne 1', line2:'Ligne 2', size:'Taille', font:'Police', color:'Couleur', power:'Transformateur', shape:'Forme', install:'Installation', price:'Prix Final' },
    waHeader: '*Demande de devis - LED Néon*',
    'vat.label': '+ TVA',
    'vat.note': 'Prix hors TVA. TVA au taux légal en vigueur non incluse.',
    'checkout.email.other': "Autre client de messagerie",
    'checkout.pdf': 'Télécharger le PDF',
    'checkout.title.file': 'Demande de devis',
    'checkout.file.msg': 'Nous analyserons votre fichier et vous répondrons dans les plus brefs délais.',
    'checkout.choose.file': 'Comment souhaitez-vous envoyer votre demande ?',
    powerMap: { no:'Sans transformateur', yes:'Avec transformateur' },
    shapeMap: { rect:'Découpe droite', contour:'Découpe contour' },
    installMap: { wall:'Fixation murale', suspended:'Suspendu' }
  },

  de: {
    'lang.label': 'Sprache',
    'back.btn': 'Zurück zur Website',
    'file.quote.btn': 'Angebot anfordern',
    'back.instagram': 'Beenden',
    title: 'GESTALTE DEIN NEON-TEXT',
    cta: 'Personalisiere jetzt deinen Text!',
    'placeholder.text': 'Gib hier deinen Text ein',
    'preview.placeholder': 'Dein Text',
    'sizes.title': 'Breite auswählen:',
    'sizes.subtitle': 'Die Höhe variiert je nach Schriftart',
    'sizes.block': (cm, max) => `${cm} cm — max. ${max} Zeichen`,
    'sizes.custom': 'Für Sondergrößen, Datei hochladen',
    'fonts.title': 'Schriftart wählen:',
    'fonts.note': '*Für andere Schriftarten, Datei hochladen',
    'colors.title': 'Farbe wählen:',
    'upload.title': 'Logo/Datei hochladen (optional):',
    'upload.accepted': 'Formate: JPG, PNG, SVG, PDF, AI',
    'upload.btn': 'Datei auswählen',
    'min.chars': 'Mindestens 3 Zeichen.',
    'max.lines': 'Maximal 2 Zeilen pro Größe.',
    dimensions: (w, h) => `Ca.-Maße: ${w}cm (B) × ${h}cm (H)`,
    price: v => `Endpreis: €${v}`,
    'cta.buy': 'Jetzt bestellen',
    'extras.power.title': 'Stromversorgung',
    'extras.power.no':  'Ohne Stromversorgung / Transformator',
    'extras.power.yes': 'Mit Stromversorgung / Transformator (+10,00€)',
    'extras.shape.title':   'Form der Kontur',
    'extras.shape.rect':    'Gerader Schnitt (rechteckig um das Motiv)',
    'extras.shape.contour': 'Konturschnitt (den Buchstaben folgend)',
    'extras.install.title':     'Montage',
    'extras.install.wall':      'Wandmontage (Befestigungsmaterial inklusive)',
    'extras.install.suspended': 'Aufgehängt (2 Bohrungen zum Aufhängen)',
    'checkout.title':    'Ihre Bestellübersicht',
    'checkout.choose':   'Wie möchten Sie fortfahren?',
    'checkout.whatsapp': 'Per WhatsApp senden',
    'checkout.email':    'Per E-Mail senden',
    colorsMap: { Branco:'Weiß', Vermelho:'Rot', Verde:'Grün', Azul:'Blau', Rosa:'Pink', Amarelo:'Gelb', Laranja:'Orange', Ciano:'Cyan' },
    checkoutLabels: { text:'Text', line1:'Zeile 1', line2:'Zeile 2', size:'Größe', font:'Schriftart', color:'Farbe', power:'Transformator', shape:'Form', install:'Montage', price:'Endpreis' },
    waHeader: '*Angebotsanfrage - LED Neon*',
    'vat.label': '+ MwSt.',
    'vat.note': 'Preis ohne MwSt. MwSt. zum gesetzlichen Satz nicht enthalten.',
    'checkout.email.other': 'Anderer E-Mail-Client',
    'checkout.pdf': 'PDF herunterladen',
    'checkout.title.file': 'Angebotsanfrage',
    'checkout.file.msg': 'Wir analysieren Ihre Datei und melden uns so bald wie möglich bei Ihnen.',
    'checkout.choose.file': 'Wie möchten Sie Ihre Anfrage senden?',
    powerMap: { no:'Ohne Transformator', yes:'Mit Transformator' },
    shapeMap: { rect:'Gerader Schnitt', contour:'Konturschnitt' },
    installMap: { wall:'Wandmontage', suspended:'Aufgehängt' }
  },

  it: {
    'lang.label': 'Lingua',
    'back.btn': 'Torna al sito',
    'file.quote.btn': 'Richiedi Preventivo',
    'back.instagram': 'Esci',
    title: 'PROGETTA IL TUO TESTO AL NEON',
    cta: 'Personalizza subito il tuo testo!',
    'placeholder.text': 'Scrivi qui il tuo testo',
    'preview.placeholder': 'Il tuo testo',
    'sizes.title': 'Scegli la larghezza:',
    'sizes.subtitle': "L'altezza varia in base al font scelto",
    'sizes.block': (cm, max) => `${cm} cm — max ${max} caratteri`,
    'sizes.custom': 'Per misure personalizzate, carica un file',
    'fonts.title': 'Scegli il font:',
    'fonts.note': '*Per altri font, carica un file',
    'colors.title': 'Scegli il colore:',
    'upload.title': 'Carica logo/personalizzati (opzionale):',
    'upload.accepted': 'Formati accettati: JPG, PNG, SVG, PDF, AI',
    'upload.btn': 'Seleziona file',
    'min.chars': 'Minimo 3 caratteri.',
    'max.lines': 'Massimo 2 righe per misura.',
    dimensions: (w, h) => `Dimensioni approx.: ${w}cm (L) × ${h}cm (A)`,
    price: v => `Prezzo Finale: €${v}`,
    'cta.buy': 'Ordina Ora',
    'extras.power.title': 'Alimentazione',
    'extras.power.no':  'Senza alimentazione / trasformatore',
    'extras.power.yes': 'Con alimentazione / trasformatore (+10,00€)',
    'extras.shape.title':   'Forma del taglio',
    'extras.shape.rect':    "Taglio dritto (rettangolare attorno all'arte)",
    'extras.shape.contour': 'Taglio a contorno (seguendo le lettere)',
    'extras.install.title':     'Installazione',
    'extras.install.wall':      'Fissaggio a parete (accessori inclusi)',
    'extras.install.suspended': 'Sospeso (2 fori per sospensione)',
    'checkout.title':    'Riepilogo del tuo ordine',
    'checkout.choose':   'Come preferisci continuare?',
    'checkout.whatsapp': 'Invia via WhatsApp',
    'checkout.email':    'Invia per E-mail',
    colorsMap: { Branco:'Bianco', Vermelho:'Rosso', Verde:'Verde', Azul:'Blu', Rosa:'Rosa', Amarelo:'Giallo', Laranja:'Arancione', Ciano:'Ciano' },
    checkoutLabels: { text:'Testo', line1:'Riga 1', line2:'Riga 2', size:'Dimensione', font:'Font', color:'Colore', power:'Trasformatore', shape:'Forma', install:'Installazione', price:'Prezzo Finale' },
    waHeader: '*Richiesta preventivo - LED Neon*',
    'vat.label': '+ IVA',
    'vat.note': "Prezzo senza IVA. IVA all'aliquota legale vigente non inclusa.",
    'checkout.email.other': 'Altro client email',
    'checkout.pdf': 'Scarica PDF',
    'checkout.title.file': 'Richiesta preventivo',
    'checkout.file.msg': 'Analizzeremo il tuo file e ti risponderemo il prima possibile.',
    'checkout.choose.file': 'Come preferisci inviare la tua richiesta?',
    powerMap: { no:'Senza trasformatore', yes:'Con trasformatore' },
    shapeMap: { rect:'Taglio dritto', contour:'Taglio a contorno' },
    installMap: { wall:'Fissaggio a parete', suspended:'Sospeso' }
  }

};

/* Helpers i18n */
let currentLang = localStorage.getItem('micron_lang') || 'pt';
const t   = k => (I18N[currentLang] || I18N.pt)[k] ?? k;
const fmt = n => new Intl.NumberFormat(currentLang).format(n);

/********************************
 * CONTACTOS (checkout)
 ********************************/
const CONTACT = {
  whatsapp: '351919755990',          // número PT sem espaços, com indicativo
  email:    'info@copinow.pt'
};

/********************************
 * ELEMENTOS DOM
 ********************************/
const elements = {
  neonText:          document.getElementById('neon-text'),
  textInput:         document.getElementById('text-input'),
  sizeBlocks:        document.querySelectorAll('.size-block'),
  fontBlocks:        document.querySelectorAll('.font-block'),
  colorCircles:      document.querySelectorAll('.color-circle'),
  submitBtn:         document.getElementById('submit-btn'),
  charCounter:       document.getElementById('char-counter'),
  progressBar:       document.querySelector('.progress'),
  backgroundControls:document.querySelectorAll('.background-thumbnail'),
  previewSection:    document.querySelector('.preview-section'),
  fileInput:         document.getElementById('file-input'),
  fileNameDisplay:   document.getElementById('file-name'),
  fileErrorDisplay:  document.getElementById('file-error'),
  dimensionsEl:      document.getElementById('dimensions'),
  priceEl:           document.getElementById('price'),
  rulerH:            document.getElementById('rulerH'),
  rulerV:            document.getElementById('rulerV')
};

let selectedFont = 'fonte1';

/********************************
 * DETECÇÃO MOBILE
 ********************************/
const isMobile = () => window.innerWidth <= 768;

function syncMobileElements() {
  const mobile = isMobile();

  // Barra de preço mobile e FAB — só visíveis em mobile
  const mobileBar = document.getElementById('mobile-price-bar');
  const mobileFab = document.getElementById('mobile-fab');
  if (mobileBar) mobileBar.style.display = mobile ? 'flex' : 'none';
  if (mobileFab) mobileFab.style.display  = mobile ? 'flex' : 'none';
}

// Sincronizar preço e dims nos elementos mobile
function updateMobilePriceBar(dimsText, priceText) {
  const mDims  = document.getElementById('mobile-dims');
  const mPrice = document.getElementById('mobile-price');
  const fabPrc = document.getElementById('fab-price');
  if (mDims)  mDims.textContent  = dimsText  || '--';
  if (mPrice) mPrice.textContent = priceText || '--';
  // No FAB mostra só o valor (ex: "€70")
  if (fabPrc && priceText) {
    const match = priceText.match(/[€]?[\d.,]+/);
    fabPrc.textContent = match ? '— ' + match[0] : '';
  }
}

// FAB abre o mesmo modal de checkout
function initMobileFab() {
  const fab = document.getElementById('mobile-fab');
  if (fab) fab.addEventListener('click', openCheckoutModal);
}

/********************************
 * UTILITÁRIOS
 ********************************/
const debounce = (fn, ms = 120) => {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
};
const nextFrame = () => new Promise(requestAnimationFrame);

async function loadFontIfNeeded(fontFamily, px = 100) {
  try {
    const fam = /\s/.test(fontFamily) ? `"${fontFamily}"` : fontFamily;
    await document.fonts.load(`normal ${px}px ${fam}`);
    await document.fonts.ready;
  } catch (e) {
    console.warn('Falha a carregar fonte:', fontFamily, e);
  }
}

/********************************
 * I18N — APLICAR TRADUÇÕES
 ********************************/
function translateStaticTexts() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-ph'));
    if (typeof val === 'string') el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('.size-block').forEach(el => {
    const label = I18N[currentLang]['sizes.block']?.(el.dataset.size, el.dataset.max) || `${el.dataset.size} cm`;
    el.textContent = label;
  });
  const uploadBtn = document.querySelector('.upload-btn[data-i18n="upload.btn"]');
  if (uploadBtn) uploadBtn.textContent = t('upload.btn');
}

function setLanguage(lang) {
  currentLang = I18N[lang] ? lang : 'pt';
  localStorage.setItem('micron_lang', currentLang);
  translateStaticTexts();
  updatePreview();
  requestMeasureAndPrice?.();
  // Sincronizar ambos os selectores
  const sel1 = document.getElementById('lang-select');
  const sel2 = document.getElementById('lang-select-mob');
  if (sel1) sel1.value = currentLang;
  if (sel2) sel2.value = currentLang;
  // Actualizar label do botão voltar/sair
  applyBackBtnLabel();
}

const langSelectEl = document.getElementById('lang-select');
if (langSelectEl) {
  langSelectEl.value = currentLang;
  langSelectEl.addEventListener('change', e => setLanguage(e.target.value));
}
// Selector de idioma do header mobile (sincronizado)
const langSelectMob = document.getElementById('lang-select-mob');
if (langSelectMob) {
  langSelectMob.value = currentLang;
  langSelectMob.addEventListener('change', e => {
    setLanguage(e.target.value);
    // sincronizar o selector desktop
    if (langSelectEl) langSelectEl.value = e.target.value;
  });
}
translateStaticTexts();

/********************************
 * CALIBRAÇÃO ALTURA (Illustrator)
 ********************************/
const AI_CAL_INPUT = {
  'fonte1': { lower:47.2, upper:23.7 },
  'fonte2': { lower:27.7, upper:22.9 },
  'fonte3': { lower:42.7, upper:33.0 },
  'fonte4': { lower:26.0, upper:21.3 },
  'fonte5': { lower:30.6, upper:19.3 },
  'fonte6': { lower:25.0, upper:20.0 },
  'fonte7': { lower:28.6, upper:23.6 },
  'fonte8': { lower:36.0, upper:28.6 },
  'fonte9': { lower:23.6, upper:20.0 }
};
const CAL_FACTORS = {};

const LINE_GAP_RULES = {
  default:  { baseRatio:0.10, firstUpperBoost:0.00, otherReduce:0.00 },
  'fonte1': { baseRatio:0.10, firstUpperBoost:0.15, otherReduce:-0.08 },
  'fonte6': { baseRatio:0.06, firstUpperBoost:0.05, otherReduce:-0.06 },
  'fonte9': { baseRatio:0.06, firstUpperBoost:0.05, otherReduce:-0.06 }
};
const MULTILINE_SCALE = { 'fonte6': 1.12 };

/********************************
 * TEXTO & PREVIEW
 ********************************/
const enforceLineLimit = text => {
  const maxLine = 17, maxTotal = 34;
  let parts = String(text || '').split('\n').slice(0, 2).map(l => l.slice(0, maxLine));
  let joined = parts.join('\n');
  const flat = joined.replace(/\n/g, '');
  if (flat.length > maxTotal) {
    const take = flat.slice(0, maxTotal);
    const l1 = take.slice(0, Math.min(maxLine, take.length));
    const l2 = take.slice(l1.length);
    joined = [l1, l2].join('\n');
  }
  return joined;
};

const updatePreview = () => {
  const raw = elements.textInput.value;
  const processed = enforceLineLimit(raw);
  if (processed !== raw) elements.textInput.value = processed;

  const placeholder = (t('preview.placeholder') || 'Your text').replace(/ /g, '&nbsp;');
  const html = processed.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;') || placeholder;
  elements.neonText.innerHTML = html;
  elements.neonText.setAttribute('data-text', processed.replace(/\n/g, ' '));

  const charCount = processed.replace(/\n/g, '').length;
  elements.charCounter.textContent = `${charCount}/34`;

  adjustFontSize(processed);
  updateSizeBlocks(processed);
  requestMeasureAndPrice();
  updateRulersOverlay();
};

elements.textInput.addEventListener('input', updatePreview);

elements.textInput.addEventListener('keydown', e => {
  if (e.key === 'Enter' && (elements.textInput.value.match(/\n/g) || []).length >= 1) {
    e.preventDefault();
  }
});

const adjustFontSize = (text, forcedSize) => {
  const lines   = text.split('\n');
  const longest = Math.max(...lines.map(l => l.length));
  const nLines  = lines.length;
  let fs;

  if (window.innerWidth <= 768) {
    // Mobile: tamanho base varia com o cm escolhido
    const selectedSize = forcedSize || document.querySelector('.size-block.selected')?.dataset.size || '50';
    const sizeScale = selectedSize === '100' ? 1.45 : selectedSize === '75' ? 1.2 : 1.0;

    // Com 2 linhas reduz para caber ambas
    const multiReduce = nLines > 1 ? 0.72 : 1;

    if      (longest > 17) fs = 1.2;
    else if (longest > 13) fs = 1.5;
    else if (longest >  9) fs = 1.9;
    else if (longest >  5) fs = 2.3;
    else                   fs = 2.6;

    fs *= sizeScale * multiReduce;

    // Tecto de segurança — nunca ultrapassa 3.8rem para não tapar o sofá
    fs = Math.min(fs, nLines > 1 ? 2.8 : 3.8);

  } else {
    // Desktop — 3 tabelas separadas, meio termo entre grande e pequeno
    const selectedSize = forcedSize || document.querySelector('.size-block.selected')?.dataset.size || '50';

    if (selectedSize === '50') {
      // 50cm — visível mas contido
      if      (longest > 17) fs = 3.2;
      else if (longest > 13) fs = 4.2;
      else if (longest >  9) fs = 5.2;
      else if (longest >  5) fs = 5.8;
      else                   fs = 6.2;
      if (nLines > 1) fs *= 0.72;

    } else if (selectedSize === '75') {
      // 75cm — claramente maior que 50
      if      (longest > 17) fs = 4.2;
      else if (longest > 13) fs = 5.4;
      else if (longest >  9) fs = 6.6;
      else if (longest >  5) fs = 7.4;
      else                   fs = 8.0;
      if (nLines > 1) fs *= 0.72;

    } else {
      // 100cm — o maior, ocupa bem o preview sem tapar o sofá
      if      (longest > 17) fs = 5.0;
      else if (longest > 13) fs = 6.4;
      else if (longest >  9) fs = 7.8;
      else if (longest >  5) fs = 8.8;
      else                   fs = 9.5;
      if (nLines > 1) fs *= 0.72;
    }

    // Tecto de segurança
    fs = Math.min(fs, nLines > 1 ? 6.5 : 9.5);
  }
  elements.neonText.style.fontSize = `${fs}rem`;
};

const updateSizeBlocks = text => {
  const lines   = text.split('\n');
  const longest = Math.max(...lines.map(l => l.length));
  const total   = text.replace(/\n/g, '').length;
  elements.sizeBlocks.forEach(block => {
    const maxLine = parseInt(block.dataset.max);
    const ok = longest <= maxLine && total <= maxLine * 2;
    block.style.opacity       = ok ? '1' : '0.5';
    block.style.pointerEvents = ok ? 'auto' : 'none';
    if (block.classList.contains('selected') && !ok) block.classList.remove('selected');
  });
  const avail = [...elements.sizeBlocks].filter(b => b.style.pointerEvents === 'auto');
  if (avail.length > 0 && !avail.some(b => b.classList.contains('selected'))) {
    avail[0].classList.add('selected');
  }
};

const updateProgress = () => {
  let done = 0;
  if (document.querySelector('.size-block.selected'))  done++;
  if (document.querySelector('.font-block.selected'))  done++;
  if (document.querySelector('.color-circle.selected')) done++;
  elements.progressBar.style.width = `${(done / 3) * 100}%`;
};

/********************************
 * MEDIÇÃO POR LINHA (Canvas)
 ********************************/
async function measureLinesTight(fontFamily, text, basePx = 100) {
  await loadFontIfNeeded(fontFamily, basePx);
  await nextFrame();
  const lines = text?.split('\n').length ? text.split('\n') : [text || ' '];
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const fam = /\s/.test(fontFamily) ? `"${fontFamily}"` : fontFamily;
  ctx.font = `${basePx}px ${fam}`;
  const perLine = [];
  let maxWidthPx = 0;
  for (const line of lines) {
    const s = line || ' ';
    const m = ctx.measureText(s);
    const widthPx = m.width;
    const asc  = typeof m.actualBoundingBoxAscent  === 'number' ? m.actualBoundingBoxAscent  :
                 typeof m.fontBoundingBoxAscent     === 'number' ? m.fontBoundingBoxAscent    : basePx * 0.8;
    const desc = typeof m.actualBoundingBoxDescent === 'number' ? m.actualBoundingBoxDescent :
                 typeof m.fontBoundingBoxDescent    === 'number' ? m.fontBoundingBoxDescent   : basePx * 0.2;
    perLine.push({ widthPx, heightPx: asc + desc, raw: s });
    if (widthPx > maxWidthPx) maxWidthPx = widthPx;
  }
  return { perLine, maxWidthPx };
}

/********************************
 * LINE-HEIGHT VISUAL
 ********************************/
function startsWithUpper(str) {
  const m = (str || '').trim().match(/^([A-Za-zÀ-Ý])/);
  return !!(m && m[1] === m[1].toUpperCase());
}

function computeVisualLineHeight(fontFamily, perLine) {
  let base = 1.20;
  if (fontFamily === 'fonte1') {
    const needs = perLine.slice(0, -1).some((_, i) => startsWithUpper(perLine[i + 1].raw));
    base = needs ? 1.36 : 1.16;
  }
  if (fontFamily === 'fonte6' || fontFamily === 'fonte9') {
    const needs = perLine.slice(0, -1).some((_, i) => startsWithUpper(perLine[i + 1].raw));
    base = needs ? 1.14 : 1.10;
  }
  return base;
}

/********************************
 * CALIBRAÇÃO
 ********************************/
async function computeCalibrationForFont(font) {
  const ai = AI_CAL_INPUT[font];
  if (!ai) return;
  const lower = await measureLinesTight(font, 'Micron', 100);
  const upper = await measureLinesTight(font, 'MICRON', 100);
  const lowerH = lower.perLine.reduce((s, l) => s + l.heightPx, 0);
  const upperH = upper.perLine.reduce((s, l) => s + l.heightPx, 0);
  const loCm = (lowerH / lower.maxWidthPx) * 100;
  const upCm = (upperH / upper.maxWidthPx) * 100;
  CAL_FACTORS[font] = {
    lower: (ai.lower != null && loCm > 0) ? ai.lower / loCm : null,
    upper: (ai.upper != null && upCm > 0) ? ai.upper / upCm : null
  };
}

function getBlendFactorForText(font, text) {
  const cf = CAL_FACTORS[font];
  if (!cf) return 1;
  const letters = (text || '').replace(/[^A-Za-zÀ-ÿ]/g, '');
  const upp   = (letters.match(/[A-ZÀ-Ý]/g) || []).length;
  const total = letters.length || 1;
  const lo = (typeof cf.lower === 'number' && cf.lower > 0) ? cf.lower : 1;
  const up = (typeof cf.upper === 'number' && cf.upper > 0) ? cf.upper : lo;
  return lo + (up - lo) * (upp / total);
}

/********************************
 * PREÇO
 ********************************/
const priceConfig = {
  markup: 1.9853,  // PVP alinhado com Gráfica Minuto (IVA + transformador incluídos)
  minChars: 3,
  multiplierTwoLines: 1.43,
  tables: {
    50:  { maxChars:9,  base:58,  perChar:2.00, max:70  },
    75:  { maxChars:13, base:80,  perChar:2.50, max:105 },
    100: { maxChars:17, base:118, perChar:3.00, max:160 }
  },
  fontMultiplier: { fonte1:1.08, fonte3:1.06 }
};



function calcularPreco({ larguraCm, fontFamily, text }) {
  const tab = priceConfig.tables[String(larguraCm)];
  if (!tab) return;

  const raw    = (text || '').replace(/\s+/g, '');
  const chars  = Math.max(priceConfig.minChars, raw.length);
  const nLines = (text || '').split('\n').length;

  let { base, perChar, max, maxChars } = tab;

  if (nLines > 1) {
    const mult  = priceConfig.multiplierTwoLines;
    const base2 = base * mult, max2 = max * mult, maxChars2 = maxChars * 2;
    const span  = Math.max(1, maxChars2 - priceConfig.minChars);
    base = base2; max = max2; perChar = (max2 - base2) / span; maxChars = maxChars2;
  }

  const clamped = Math.min(chars, maxChars);
  let price = base + Math.max(clamped - priceConfig.minChars, 0) * perChar;
  price *= (priceConfig.fontMultiplier[fontFamily] || 1.0);
  price *= priceConfig.markup;

  price = Math.ceil(Math.max(0, price)); // arredonda para cima — sem cêntimos

  if (elements.priceEl) {
    elements.priceEl.textContent = I18N[currentLang].price(fmt(Math.ceil(price)));
  }
  // Sincronizar barra mobile
  const mDims = document.getElementById('mobile-dims');
  updateMobilePriceBar(mDims?.textContent || '', I18N[currentLang].price(fmt(Math.ceil(price))));
  return price;
}

/********************************
 * DIMENSÕES
 ********************************/
async function computeDimensionsCm() {
  const sizeEl = document.querySelector('.size-block.selected');
  const fontEl = document.querySelector('.font-block.selected');
  const text   = (elements.textInput.value || '').trim() || t('preview.placeholder') || 'Your text';
  if (!sizeEl || !fontEl) return null;

  const larguraCm   = parseInt(sizeEl.dataset.size, 10);
  const fontFamily  = fontEl.dataset.font;

  const { perLine, maxWidthPx } = await measureLinesTight(fontFamily, text, 100);
  if (!perLine.length || !maxWidthPx) return null;

  elements.neonText.style.lineHeight = String(computeVisualLineHeight(fontFamily, perLine));

  const sumH = perLine.reduce((a, l) => a + l.heightPx, 0);
  const n    = perLine.length;
  const rule = LINE_GAP_RULES[fontFamily] || LINE_GAP_RULES.default;
  const avgH = sumH / n;
  let totalGap = 0;
  for (let i = 0; i < n - 1; i++) {
    let gapPx = avgH * (rule.baseRatio ?? 0.10);
    if (['fonte1','fonte6','fonte9'].includes(fontFamily)) {
      const mod = startsWithUpper(perLine[i + 1].raw) ? (rule.firstUpperBoost ?? 0) : (rule.otherReduce ?? 0);
      gapPx *= Math.max(0.02, 1 + mod);
    }
    totalGap += gapPx;
  }

  let alturaCm = ((sumH + totalGap) / maxWidthPx) * larguraCm;
  alturaCm *= getBlendFactorForText(fontFamily, text);
  if (perLine.length > 1) alturaCm *= (MULTILINE_SCALE[fontFamily] || 1);

  if (elements.dimensionsEl) {
    elements.dimensionsEl.textContent = I18N[currentLang].dimensions(
      fmt(Math.round(larguraCm)), fmt(Number(alturaCm.toFixed(1)))
    );
  }
  if (elements.rulerH) elements.rulerH.textContent = `${fmt(Math.round(larguraCm))} cm`;
  if (elements.rulerV) elements.rulerV.textContent = `${fmt(Number(alturaCm.toFixed(1)))} cm`;
  updateRulersOverlay();

  // Sincronizar barra mobile
  const dimsLabel = I18N[currentLang].dimensions(fmt(Math.round(larguraCm)), fmt(Number(alturaCm.toFixed(1))));
  updateMobilePriceBar(dimsLabel, elements.priceEl?.textContent || '');

  return { larguraCm, alturaCm, fontFamily, text };
}

const requestMeasureAndPrice = debounce(async () => {
  const dims = await computeDimensionsCm();
  if (dims) calcularPreco(dims);
}, 120);

/********************************
 * RÉGUAS / LINHAS DE MEDIÇÃO
 ********************************/
function updateRulersOverlay() {
  const txt     = elements.neonText;
  const preview = elements.previewSection;
  if (!txt || !preview) return;

  const rect  = txt.getBoundingClientRect();
  const pRect = preview.getBoundingClientRect();
  const left   = rect.left - pRect.left;
  const top    = rect.top  - pRect.top;
  const { width, height } = rect;

  const HLINE_OFFSET = 16;
  const VLINE_GAP    = 18;

  const hline = document.getElementById('hline');
  const vline = document.getElementById('vline');
  if (hline) { hline.style.left = `${left}px`; hline.style.top = `${Math.max(2, top - HLINE_OFFSET)}px`; hline.style.width = `${width}px`; }
  if (vline) { vline.style.left = `${Math.min(pRect.width - 2, left + width + VLINE_GAP)}px`; vline.style.top = `${top}px`; vline.style.height = `${height}px`; }

  const rh = elements.rulerH, rv = elements.rulerV;
  if (rh) { rh.style.left = `${left + width / 2}px`; rh.style.top = `${Math.max(2, top - HLINE_OFFSET - 18)}px`; rh.style.transform = 'translate(-50%,0)'; }
  if (rv) { rv.style.left = `${Math.min(pRect.width - 2, left + width + VLINE_GAP + 12)}px`; rv.style.top = `${top + height / 2}px`; rv.style.transform = 'translate(0,-50%)'; }
}

/********************************
 * INTERAÇÕES — tamanho / fonte / cor
 ********************************/
elements.sizeBlocks.forEach(block => {
  block.addEventListener('click', () => {
    elements.sizeBlocks.forEach(b => b.classList.remove('selected'));
    block.classList.add('selected');
    // Passa o tamanho directamente para evitar problema de timing do DOM
    adjustFontSize(elements.textInput.value || '', block.dataset.size);
    updateProgress(); requestMeasureAndPrice(); updateRulersOverlay();
  });
});

elements.fontBlocks.forEach(block => {
  block.addEventListener('click', async () => {
    elements.fontBlocks.forEach(b => b.classList.remove('selected'));
    block.classList.add('selected');
    selectedFont = block.dataset.font;
    document.body.dataset.selectedFont = selectedFont;
    elements.neonText.style.fontFamily = selectedFont;
    window.parent.postMessage({ type:'MICRON_FONT_SELECTED', font:selectedFont }, '*');
    await loadFontIfNeeded(selectedFont);
    updateProgress(); requestMeasureAndPrice(); updateRulersOverlay();
  });
});

elements.colorCircles.forEach(circle => {
  circle.addEventListener('click', () => {
    elements.colorCircles.forEach(c => c.classList.remove('selected'));
    circle.classList.add('selected');
    const hex = { Branco:'#ffffff', Vermelho:'#ff0000', Verde:'#00ff00', Azul:'#0000ff', Rosa:'#ff00ff', Amarelo:'#ffff00', Laranja:'#ff8000', Ciano:'#00ffff' }[circle.dataset.color];
    elements.neonText.style.setProperty('--neon-color', hex);
    updateProgress(); requestMeasureAndPrice(); updateRulersOverlay();
  });
});



/* Extras — shape */
document.querySelectorAll('.extras-shape .extra-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.extras-shape .extra-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
  });
});

/* Extras — install */
document.querySelectorAll('.extras-install .extra-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.extras-install .extra-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');
  });
});

/********************************
 * AMBIENTES (fundo)
 ********************************/
const BG_MAP = {
  'background.jpg':  'background.jpg',
  'background2.jpg': 'background2.jpg'
};
elements.backgroundControls.forEach(control => {
  control.addEventListener('click', () => {
    elements.backgroundControls.forEach(c => c.classList.remove('active'));
    control.classList.add('active');
    const url = BG_MAP[control.dataset.bg];
    if (url) elements.previewSection.style.backgroundImage = `url('${url}')`;
    elements.previewSection.setAttribute('data-scene', control.dataset.bg === 'background.jpg' ? 'sofa' : 'wall');
    updateRulersOverlay();
  });
});

/********************************
 * UPLOAD — ficheiro + remoção
 ********************************/
let uploadedFile = null;

function showFilePreview(name) {
  const preview  = document.getElementById('file-preview');
  const nameEl   = document.getElementById('file-name');
  const quoteBtn = document.getElementById('file-quote-btn');
  if (preview)  preview.removeAttribute('hidden');
  if (nameEl)   nameEl.textContent = name;
  if (quoteBtn) quoteBtn.removeAttribute('hidden');
  document.querySelector('.upload-btn').style.display = 'none';
}

function clearFileUpload() {
  uploadedFile = null;
  if (elements.fileInput) elements.fileInput.value = '';
  const preview  = document.getElementById('file-preview');
  const nameEl   = document.getElementById('file-name');
  const quoteBtn = document.getElementById('file-quote-btn');
  if (preview)  preview.setAttribute('hidden', '');
  if (nameEl)   nameEl.textContent = '';
  if (quoteBtn) quoteBtn.setAttribute('hidden', '');
  if (elements.fileErrorDisplay) elements.fileErrorDisplay.textContent = '';
  document.querySelector('.upload-btn').style.display = '';
}

if (elements.fileInput) {
  elements.fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const allowed = ['jpg','jpeg','png','svg','pdf','ai'];
    const ext = file.name.split('.').pop().toLowerCase();
    if (!allowed.includes(ext)) {
      elements.fileErrorDisplay.textContent = 'Formato não suportado.';
      clearFileUpload();
    } else {
      uploadedFile = file;
      elements.fileErrorDisplay.textContent = '';
      showFilePreview(file.name);
    }
  });
}

const fileRemoveBtn = document.getElementById('file-remove');
if (fileRemoveBtn) {
  fileRemoveBtn.addEventListener('click', clearFileUpload);
}

// Botão Pedir Orçamento — só aparece após carregar ficheiro
const fileQuoteBtn = document.getElementById('file-quote-btn');
if (fileQuoteBtn) {
  fileQuoteBtn.addEventListener('click', openCheckoutModal);
}

/********************************
 * MODAL CHECKOUT
 ********************************/
function buildOrderSummary() {
  const lang     = I18N[currentLang] || I18N.pt;
  const labels   = lang.checkoutLabels;
  const text     = elements.textInput.value.trim();
  const sizeEl   = document.querySelector('.size-block.selected');
  const colorKey = document.querySelector('.color-circle.selected')?.dataset.color || '';

  const shapeVal = document.querySelector('.extras-shape .extra-option.selected')?.dataset.shape || 'rect';
  const installVal = document.querySelector('.extras-install .extra-option.selected')?.dataset.install || 'wall';
  const priceText = elements.priceEl?.textContent || '';

  const lines = text.split('\n');
  const line1 = lines[0] || '';
  const line2 = lines[1] || '';

  return {
    text,
    line1,
    line2,
    size:    sizeEl ? `${sizeEl.dataset.size} cm` : '--',
    font:    selectedFont ? selectedFont.replace('fonte', 'Fonte ') : '--',
    color:   lang.colorsMap[colorKey] || colorKey,

    shape:   lang.shapeMap[shapeVal]   || shapeVal,
    install: lang.installMap[installVal] || installVal,
    power:   'Transformador / Fonte de alimentação incluído ✓',
    priceText,
    labels
  };
}

function buildWhatsAppMessage(s) {
  const lang = I18N[currentLang] || I18N.pt;
  const lines = [
    lang.waHeader, '',
    ...(s.line2
      ? [`• ${s.labels.line1}: ${s.line1}`, `• ${s.labels.line2}: ${s.line2}`]
      : [`• ${s.labels.text}: ${s.line1}`]),
    `• ${s.labels.size}: ${s.size}`,
    `• ${s.labels.font}: ${s.font}`,
    `• ${s.labels.color}: ${s.color}`,

    `• ${s.labels.shape}: ${s.shape}`,
    `• ${s.labels.install}: ${s.install}`,
    `• ${s.labels.price}: ${s.priceText}`
  ];
  return encodeURIComponent(lines.join('\n'));
}

function buildEmailBody(s) {
  const lang = I18N[currentLang] || I18N.pt;
  const body = [
    lang.waHeader, '',
    ...(s.line2
      ? [`${s.labels.line1}: ${s.line1}`, `${s.labels.line2}: ${s.line2}`]
      : [`${s.labels.text}: ${s.line1}`]),
    `${s.labels.size}: ${s.size}`,
    `${s.labels.font}: ${s.font}`,
    `${s.labels.color}: ${s.color}`,

    `${s.labels.shape}: ${s.shape}`,
    `${s.labels.install}: ${s.install}`,
    `${s.labels.price}: ${s.priceText}`
  ].join('%0A');
  return body;
}

function openCheckoutModal() {
  const text = elements.textInput.value.trim();
  const hasFile = !!uploadedFile;

  // Requer texto (mín. 3 chars) OU ficheiro carregado
  if (!hasFile && (!text || text.length < 3)) return;

  const isFileMode = hasFile && !text;

  const lang = I18N[currentLang] || I18N.pt;
  const summaryEl    = document.getElementById('checkout-summary');
  const fileNoticeEl = document.getElementById('checkout-file-notice');
  const titleEl      = document.getElementById('checkout-title');
  const subtitleEl   = document.querySelector('.checkout-subtitle'); // null se removido

  if (isFileMode) {
    // --- MODO FICHEIRO ---
    if (titleEl)   titleEl.textContent = t('checkout.title.file');
    if (subtitleEl) subtitleEl.textContent = t('checkout.choose.file');
    summaryEl.innerHTML = '';
    summaryEl.setAttribute('hidden', '');
    if (fileNoticeEl) {
      fileNoticeEl.removeAttribute('hidden');
      const fnEl = document.getElementById('cfn-filename');
      if (fnEl) fnEl.textContent = uploadedFile.name;
      const msgEl = fileNoticeEl.querySelector('.cfn-msg');
      if (msgEl) msgEl.textContent = t('checkout.file.msg');
    }
    // Modo ficheiro — sem WhatsApp/email, apenas PDF disponível

  } else {
    // --- MODO TEXTO NORMAL ---
    if (titleEl)   titleEl.textContent = t('checkout.title');
    if (subtitleEl) subtitleEl.textContent = t('checkout.choose');
    if (fileNoticeEl) fileNoticeEl.setAttribute('hidden', '');
    summaryEl.removeAttribute('hidden');

    const summary = buildOrderSummary();
    const labels  = summary.labels;
    // Se tiver 2 linhas mostra-as separadas, senão mostra campo único
    const textRows = summary.line2
      ? [
          { label:labels.line1, value:summary.line1, cls:'' },
          { label:labels.line2, value:summary.line2, cls:'' }
        ]
      : [{ label:labels.text, value:summary.line1, cls:'' }];

    const rows = [
      ...textRows,
      { label:labels.size,    value:summary.size,      cls:'' },
      { label:labels.font,    value:summary.font,      cls:'' },
      { label:labels.color,   value:summary.color,     cls:'' },

      { label:labels.shape,   value:summary.shape,     cls:'' },
      { label:labels.install, value:summary.install,   cls:'' },
      { label:'Transformador', value:summary.power,    cls:'' },
      { label:labels.price,   value:summary.priceText, cls:'price-row' }
    ];
    summaryEl.innerHTML = rows
      .map(r => `<div class="checkout-row ${r.cls}"><span class="label">${r.label}</span><span class="value">${r.value}</span></div>`)
      .join('');

    // Apenas PDF disponível — WhatsApp e email removidos
  }

  // Traduz botões do modal
  document.querySelectorAll('#checkout-overlay [data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (typeof val === 'string') el.textContent = val;
  });

  document.getElementById('checkout-overlay').removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
}

/********************************
 * GERAR PDF DA ENCOMENDA
 ********************************/
function generateOrderPDF() {
  const LOGO_URI = 'data:image/png;base64,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XbvGxsaWOMU+XFmDg4MojD+9Xs97/81vfvOMM84gos9+9rPvete71EYUx3G73V6Zi65QoUKFChUq3H8R7CBxHGuqPP0MgJmPPfbY//f//t9//Md/rFmzZmRk5Itf/CKAkZGRbrer32LmpZkN9sctNTExMTY25pyL4/htb3vbO9/5zi9+8YvPfOYzywFTe8yaXKFChQoVKlSoUIZWMihXOFB+o+YcpTsqIp6enr7mmmte+MIX/vZv//bFF19srU3TNEmSmZmZWq22NPHYL0FxvV6fnJz8lV/5FQBXXnnlmjVr1FumjQulGHAQ+XYqVKhQoUKFCvd7BKHLHqUsWZZZa40xzjkRieP4tttu+/Vf//Uzzjjj0ksvTZKk2+2qf2pp7MMt1el06vX6tddee/bZZ59xxhnf+ta31q1bx8zKvJxzWZYRkTEmFPOsUKFChQoVKlTYIxZFOYmIJibu9/sA4jhWs00UReodOuGEE37605+22+1HP/rR4+PjIyMjO3fu3OdZ9m252bFjx3nnnXfiiSd+/OMf36M+OfinghqoQoUKFSpUqFBhdyhVKAc9BRahDilmVpeRMUY/dDqdZrP58pe//IYbbviXf/mXY489dp9nyS03anfpdDr6q6qDsyybnp5+/OMff/rpp3/sYx+LooiZwz4BgfFUzKZChT3COYfiLQvQdUWWZVmW6Q4KDY/UpYx+S/ORVzVMKlSocD+AUgVrbSAP4YPabIwxWiccgEaAN5vNbrf78Y9//MEPfvC55547MTGh++toqZ8XWWrmLTfT09PDw8MAut1uo9HQnw996EPPOeecV73qVccee2y/3w/2ogoVKhwM1Ous4jjdwsxpmkZRRETee91epVeoUKHCAxw6TurPiYmJ173udRMTE//2b/+WJIkOpGrX0R2CGHmeqSg/yrKsXq+LSKPROP/881ut1stf/nI1AYVRuJLXVKhwMFAxPop3anx8/Ctf+cpLX/rSk08++bjjjjvhhBOe/exnf+xjH7v99tuJSI06ldmmQoUKD0xoFr0kSWZnZ9esWfNnf/Zns7OzF1xwAYoq4s1ms91ul5kNFmluVCmsA+4Xv/jF888//3/+539OOOGEbrcbx3EURcqSKm1NhQoHhFC3RC0x+lNNof/+7//+tre97dprr9U96/V6r9dTr/Nxxx33t3/7t09+8pMHBweXXWCl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uVzO932otYjo1VdfveGGG44++uiDDjoItcARcGBg4JRTThkYGIDJCSzX44477lvf+paJA4QVH0xPbqY5o9gAwPhECL4TTzzxhz/8YRAEyCWCvf8Xv/gFDqZnn302xYgj49UO0DyZ/xojffwGw3FBLVzX7erqWrhw4eGHHw6BLJPJmGiZ0NtVKpVPfvKT++23X2dn52ivHrHTxO2hbx1vvPFGKpXq6enp6Ogwpi7btjs7O6+77rojjjjCZMsaX7WKsasazdM4PnxsxMn+caD1jj322MHBQVzBh6997Wtf/epXIZQPDg62tbWBhFcul1tbW2+++ebPfe5zEO6hgMEGWSgUisVitVq94447jjrqqEMPPRTzfd68ebfeeuvRRx9dLBahP8CkwPJi2/arr7564oknLlq0yLisn3/++dCU33XXXYcccghmPUR2xIR8/fXXd95557GrLGJ5OcywgZSvmgl23rTp4ofYEbLIPwmjzo+LvHEnjH9y5pZKJSjhyuXy8uXLu7q6zOKJKdzT03Prrbd+7WtfK5fLW3I0JhgD47y9YWO2LAtGaGxRmUzG930waqvVqud5xx9//BFHHJFOpx9//PFHHnnkjjvuWLx4MdZByARr08uti/WtUbCzbrfddvvtt9+RRx655557Tp06FX8Fl94k90bB+M0SfY8L8ApIJ8aURkQoDBaFgw8++PDDDx8YGHj66advu+22xx9//JlnnkGwWjxkjM0G0s/UqVP32muvvffe+z3vec+73vUu7GRw00BKdiLKZDImpgsU5sYIHQ+vvIUBq2UqlVqzZs306dPvvvvunp6enp4enICHhoY8z3vjjTd+/etf33HHHcz8//7f/1uwYAF2+nq9jgjOAwMDUG7Bk+Lcc8+FQh4nKpBvjIrLHHBh6EFriJgr2RlnnHHNNdfk8/nzzjvv6KOPhvh17bXXohf+z//5P8YUaMcyiv/zMI8ya2L84bqZRNP8Fyv1vHnzVq5c+dJLLyF+DzMjiuPLL7987rnnrly5MgzDW2+91cST3OB7uZl4HFdGs2GNgW222QZkERA5iWinnXa64oorDjzwQNwAyRKKh/E9VMSfxjHy5mbFiMOG2U2NuwAEGiFEJpM57bTTzjnnnK6uLiEE4jhDrKlUKpDIiWjWrFk//vGPs9nsK6+8snLlymw2m8vlmPmxxx676qqrXnvt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';
  const lang    = I18N[currentLang] || I18N.pt;
  const isFile  = !!uploadedFile && !elements.textInput.value.trim();
  const summary = isFile ? null : buildOrderSummary();
  const labels  = summary ? summary.labels : lang.checkoutLabels;
  const date    = new Date().toLocaleDateString(currentLang, { day:'2-digit', month:'2-digit', year:'numeric' });

  // Constrói conteúdo HTML para o PDF
  let rows = '';
  if (isFile) {
    rows = `<tr><td class="label">${t('upload.title').replace(':','')}</td><td class="value">${uploadedFile.name}</td></tr>`;
  } else {
    const dataRows = summary.line2
      ? [[labels.line1, summary.line1],[labels.line2, summary.line2]]
      : [[labels.text,  summary.line1]];
    dataRows.push(
      [labels.size,    summary.size],
      [labels.font,    summary.font],
      [labels.color,   summary.color],

      [labels.shape,   summary.shape],
      [labels.install, summary.install],
      ['Transformador', summary.power || 'Transformador / Fonte de alimentação incluído ✓']
    );
    rows = dataRows.map(([l,v]) =>
      `<tr><td class="label">${l}</td><td class="value">${v}</td></tr>`
    ).join('');
    rows += `<tr class="price-row"><td class="label">${labels.price}</td><td class="value">${summary.priceText}</td></tr>`;
  }

  const vatNote  = '';
  const fileNote = isFile ? `<p class="file-note">${t('checkout.file.msg')}</p>` : '';
  const title    = isFile ? t('checkout.title.file') : t('checkout.title');

  const html = `<!DOCTYPE html>
<html lang="${currentLang}">
<head>
<meta charset="UTF-8"/>
<title>${title}</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: Arial, Helvetica, sans-serif; color:#1a1a1a; padding:40px; background:#fff; }
  .header { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:32px; border-bottom:3px solid #f01400; padding-bottom:20px; }
  .logo-area { display:flex; flex-direction:column; gap:4px; }
  /* logo via img */
  .date      { font-size:12px; color:#888; text-align:right; }
  h1         { font-size:20px; font-weight:800; margin-bottom:24px; color:#1a1a1a; }
  table      { width:100%; border-collapse:collapse; margin-bottom:20px; }
  tr         { border-bottom:1px solid #eee; }
  td         { padding:11px 8px; font-size:13px; vertical-align:top; }
  td.label   { color:#666; width:40%; font-weight:600; }
  td.value   { color:#1a1a1a; font-weight:500; }
  tr.price-row td { background:#fff8f6; }
  tr.price-row td.label { color:#f01400; font-weight:700; font-size:14px; }
  tr.price-row td.value { color:#f01400; font-weight:900; font-size:16px; }
  .vat-note  { font-size:11px; color:#999; margin-top:8px; font-style:italic; }
  .file-note { background:#edf7fe; border-left:3px solid #00a0dc; padding:12px 14px; font-size:13px; color:#1a1a1a; border-radius:4px; margin-bottom:16px; line-height:1.5; }
  .footer    { margin-top:40px; border-top:1px solid #eee; padding-top:16px; font-size:11px; color:#aaa; text-align:center; }
  .contact   { margin-top:16px; font-size:12px; color:#555; }
  .contact span { margin:0 12px; }
</style>
</head>
<body>
  <div class="header">
    <div class="logo-area">
      <img src="${LOGO_URI}" alt="Copinow" style="height:52px;width:auto;display:block;" />
    </div>
    <div class="date">${date}</div>
  </div>
  <h1>${title}</h1>
  ${fileNote}
  <table>${rows}</table>
  ${vatNote}
  <div class="contact">
    <span>📧 ${CONTACT.email}</span>
    <span>📱 +${CONTACT.whatsapp}</span>
  </div>
  <div class="footer">Documento gerado automaticamente pelo Simulador LED Neon &mdash; Copinow</div>
</body>
</html>`;

  // Abre numa janela nova e dispara o print/save
  const win = window.open('', '_blank', 'width=700,height=900');
  if (!win) { alert('Activa os pop-ups para descarregar o PDF.'); return; }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => { win.print(); }, 400);
}


function closeCheckoutModal() {
  document.getElementById('checkout-overlay').setAttribute('hidden', '');
  document.body.style.overflow = '';
  // Fechar submenu de email se estiver aberto
  // Submenu de email removido — nada a fechar
}

document.getElementById('submit-btn').addEventListener('click', openCheckoutModal);
document.getElementById('checkout-close').addEventListener('click', closeCheckoutModal);

// Submenu de email removido — toggle não necessário
document.getElementById('checkout-pdf').addEventListener('click', generateOrderPDF);
document.getElementById('checkout-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('checkout-overlay')) closeCheckoutModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCheckoutModal();
});

/********************************
 * BOTÃO VOLTAR AO SITE
 ********************************/
// Detecta contexto Instagram via ?ref=instagram no URL
const isInstagram = new URLSearchParams(window.location.search).get('ref') === 'instagram';

function handleBackBtn() {
  if (isInstagram) {
    window.close();
    // Fallback — alguns browsers bloqueiam window.close() em páginas não abertas por script
    setTimeout(() => { history.back(); }, 300);
  } else {
    window.top.location.href = '/';
  }
}

// Actualizar label do botão consoante contexto
function applyBackBtnLabel() {
  const label = isInstagram ? t('back.instagram') : t('back.btn');
  const btnTop = document.getElementById('micron-back-btn-top');
  const btnMob = document.getElementById('micron-back-btn-mob');
  if (btnTop) btnTop.textContent = label;
  if (btnMob) btnMob.textContent = label;
}

// Botões "Voltar ao site" removidos — sem event listeners necessários

/********************************
 * DEFAULTS & INICIALIZAÇÃO
 ********************************/
function ensureDefaultsSelected() {
  const avail = [...elements.sizeBlocks].filter(b => b.style.pointerEvents !== 'none');
  const defSize = avail[0] || elements.sizeBlocks[0];
  if (defSize && !defSize.classList.contains('selected')) defSize.classList.add('selected');

  const defFont = elements.fontBlocks[0];
  if (defFont && !defFont.classList.contains('selected')) {
    defFont.classList.add('selected');
    elements.neonText.style.fontFamily = defFont.dataset.font;
  }

  const defColor = elements.colorCircles[0];
  if (defColor && !defColor.classList.contains('selected')) {
    defColor.classList.add('selected');
    elements.neonText.style.setProperty('--neon-color', '#ffffff');
  }
}

async function prepareCalibration() {
  for (const f of Object.keys(AI_CAL_INPUT)) {
    await computeCalibrationForFont(f);
  }
}

ensureDefaultsSelected();
updatePreview();
applyBackBtnLabel();
prepareCalibration().then(() => requestAnimationFrame(requestMeasureAndPrice));
syncMobileElements();
initMobileFab();
window.addEventListener('resize', () => {
  requestMeasureAndPrice();
  updateRulersOverlay();
  syncMobileElements();
});
