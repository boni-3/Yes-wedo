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
  markup: 1.20 * 1.23,  // margem 20% + IVA 23% incluído
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
  const LOGO_URI = 'data:image/png;base64,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';
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
      [labels.install, summary.install]
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
