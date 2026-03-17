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
  email:    'geral@yes-wedo.pt'
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
  const subtitleEl   = document.querySelector('.checkout-subtitle');

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
    // Mensagem WhatsApp para ficheiro
    const waFileMsg = encodeURIComponent(
      lang.waHeader + '\n\n' +
      '📎 ' + uploadedFile.name + '\n\n' +
      t('checkout.file.msg')
    );
    const emailFileBody = encodeURIComponent(
      lang.waHeader + '\n\n' +
      uploadedFile.name + '\n\n' +
      t('checkout.file.msg')
    );
    document.getElementById('checkout-whatsapp').href = `https://wa.me/${CONTACT.whatsapp}?text=${waFileMsg}`;
    const fileSubject = encodeURIComponent(t('checkout.title.file'));
    const gmailElF   = document.getElementById('checkout-gmail');
    const outlookElF = document.getElementById('checkout-outlook');
    const mailtoElF  = document.getElementById('checkout-mailto');
    if (gmailElF)   gmailElF.href   = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(CONTACT.email)}&su=${fileSubject}&body=${emailFileBody}`;
    if (outlookElF) outlookElF.href = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(CONTACT.email)}&subject=${fileSubject}&body=${emailFileBody}`;
    if (mailtoElF)  mailtoElF.href  = `mailto:${CONTACT.email}?subject=${fileSubject}&body=${emailFileBody}`;

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

    const waMsg     = buildWhatsAppMessage(summary);
    const emailBody = buildEmailBody(summary);
    document.getElementById('checkout-whatsapp').href = `https://wa.me/${CONTACT.whatsapp}?text=${waMsg}`;
    // Três destinos de email
    const mailtoHref  = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Encomenda LED Neon')}&body=${emailBody}`;
    const gmailHref   = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent('Encomenda LED Neon')}&body=${emailBody}`;
    const outlookHref = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(CONTACT.email)}&subject=${encodeURIComponent('Encomenda LED Neon')}&body=${emailBody}`;
    const gmailEl   = document.getElementById('checkout-gmail');
    const outlookEl = document.getElementById('checkout-outlook');
    const mailtoEl  = document.getElementById('checkout-mailto');
    if (gmailEl)   gmailEl.href   = gmailHref;
    if (outlookEl) outlookEl.href = outlookHref;
    if (mailtoEl)  mailtoEl.href  = mailtoHref;
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
  const LOGO_URI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxgAAAERCAYAAAD47QGFAAEAAElEQVR4nOz9Z9AkSZrfif0edw+Rma8qXdVd1bp7Wsx098yO3hGLndnFLm4Pd9jdo+GOIGFnpPELDXZGO+MdaEZ+opE04weSRprxjAeQxEEQWOAWYg9YPbOjd7Tq6Wmtu6pL16syM4S7P/zgEZn5vlU9enYx0/E3eysqM0N4eHi4P/9HynEgA0bd3xZoDuwDLUgNNEAALLAG1MAlYApEDEEUNQpiEV+gKJiYjjYgEYoAEUdDCU7BTgEgTFILfI2lpiByBJgAG6CjtBdTYNa1xwLr6SgNwBxkCuymfRALMYB07famu0nSTeUxnT/rzrUBnMvQcwXck8HZAk6PhY08R42AswSX0QD7TWRnf87+fst2Def34EXgGnADZCdtCQZwGdJ6HIpo6iuwKIolYhDAEmkwGdQRVMCZjKIZYTDMafH9EzARgDLCCeBY+tOTwPEMttZhUsLmCI6MLVulw2nARI8RUJf6Y8/D9j5cr6ASOL8Nr2/DG6mfZbfr732B1gAOUJs6MoIQsEQUiIAyYMCAAQMGDBgwYECCu/NIpn/1wx/CXrvMHZMcN7uKhBbGI3aboLUpoHBEnSOhgSogxSbP7cO/+sqzskckqqCdlKkEIAmhuiKBekCRtFOMYPomNBAaDJExkTMO/sZHH9WzhWfU7OLaCtQyNxvUZqSt5FgaJmEfFyMUm+yZkT4zq/hnn/2mBMCrIAiFszhpUZ8uUwgUEcbAXQX6trNHePDuI2wVkZOjCccyx0ZURq0n8xUuJmKAEaIxBDG0ZLSq+KC0YqkQKue4VDd8940r+tWXL/P0DWQaoW1ammUXUJYF82qeiIYYWoXcWEI0oBExaT/fBkqEHMGYSB1bcsDFRIpuK+B9d+b6njvPcNeRDcYombGprT4gwZMRyYmY6JFYoXhEBLGWYMAHZaYeLRzBjQnmGLO4xvmdWp987QJff/EVnp0idYBpAE8gEOhp2dq4ZH82+6kP0AEDBgwYMGDAgAE/W3B7N1q5TXb07adybreRuG5p6oqt9YLtvX2aUcQVEbwwsmvMtivcxpi3N8q3voK+AHIDxWCICEgiGE49qkkjHwAvBtRhgRhjEvotiLRYhTUHEw8fPI7+6rGCM7nSXG/JN9Y7fX9OFAXmGA2MgiHiuF7vMz+6znNvXMECZCNQhyJUUbGqZOpZA04pvPcOqx+49y7uXV9nK7RshUChEW09IdY0WhNiRdSAl0AuBhMU0yqCYIwlt46YOUSUwhp8EG7LLG+/+xh/88GzXJpX+vmnX+RTz1Q8p8geMAem1RzrIMugaSJgqdUBEY010ZLML8agKFW4gYvJUnG/Qd973yaP3Xs/d26O2fRTbLNDpntEbdFGMFEw6rBYiInOOedAcmIAQ8SGREacCsE4qpmnkTlRLxCN5Y7M8Z57Hf+je+9j1zj94guv86nv7PNcQCQzXG5bWhzzWYMzOSF6EoUaMGDAgAEDBgwYMADkHuCXbkf/yw+9k/G185RjpW3mjO2INniqDFpfM4qGrXKDnb2GOBozG+X8s68+zz94GXmD5D0TpDNLaKTsjBQNyXqBKSA6csDQ0NISTHJjGjsoWziu8H/6qw/oO9aFjWYHX+0TsjFBLCYahACmxmokD4ZGMm5IzoXyCH/3Xz7BCyA7ZCATrBhcnDKh5iTwnrsm+tGH7uLBzYK1+R7rccaprKTYazFB2DctU9NQ2YDPFJdbMmfQuiaLEReBKKiAR/GSTDahqRnlIyRkNJXHRAPrG0zH61y0Y/7khYv826+9Juc9kMFOC7UAa2OYB4ius+h4khuUxdiMsp6xRnLl+qtvQ/+Dhx7iznxEVnlGwbNOi+qMeVbh1SOtYKMjI8MYB6m5ePWJmEnEKNigmCC4mKxJ6hQRxRoFSWTBE6nVMDclO1oyLY7xuWcv8s+ffENmJFeqPRySZ2hTMxCMAQMGDBgwYMCAAT3cDvDl88gr25U+kE8wNpJnhuANzjrWbKSpWzYpcZWlkAmNtxSV56+88yE+ceEpvd4gISnkU8CFpHABS+8J5bo/QWjJejeqCN4lAmIU3nkKfeDkJms33qAIDZtra9xoFQxY02CkBZkjRLA53jqqYsSfP/cSl0BaBwTFas0Jrdki8lCBfuydd/Ke+84yrndxO5fYzAPW1Fy7cZE1NhAyohiMMeQCxIDWgboJaIi0ojgVHBFRMBrJVWmNoRlvEhSO+JotB5ac2rfE/R022OOv3bXGO048oJ/57it85sVaYmoiflZBXkIVwVqIbeqtoKybwDrwYIH+1sfu4L41uFunZDuXkVZZz0c49ezX+7i1EjGO3ICNig014isCEW8i4hScAZcRsGjMkODQ6DAIxkYkNkhbE0MkEohWcGXGpsnYDJYQau665yzvOXlG/89/9nWmIHsbEdU6kSP/Fz1sBwwYMGDAgAEDBvz7CrcrYBX+3def4vSH307mZ9gWEAi+IUcpxOK8oW5rTLmBcUKo9tgaj3n03JiXX5hRkzT7AFYMvVY7/WvT1URRjcQu3NkAzgjSKMeBX3/3w8j2dWQ+p/UtsVWic6iJRGqiNGAaANpo2bWG843wu1/bl12gzUCCZ4LnJPBLJzL9zY88xlqzzeT6q0zwTAiYtkGzluLoOvUsIihiFGMMTgyCJWhEo+KyEmJANGI0YohkBgyCyxxT52hDIJqMEJXoI01TYXPL0VGBb7Y5vr7GHe96kNP5q/qvn77ByyC71tA0VQqM14BKRDKL1i228dwO+jceP8fbN3KO+BuMm4ZxBpIVQItEmExG7PgW4yxWLJlTnICgYARvDaopQLzxAcURYsBFIUaLGGE6qygsjIwjs4YWT6uBqvVI3GdNCuJ0h2OjLd6+ucl//Zvv5//wR1/U8/MoTGSI8B4wYMCAAQMGDBhwAK41BbNQ85kryAfbVj9YjMjaBj9WiIZ2OmNkC5rgiS6nyiONePJCaOopH7zvdr792nN6rSFJm9FgrCV21CL00dwxAp6WlkiyZxgMsbGs0fJXzo30XceOUVx5hfF4nXrmwVgKUXIJRKOoGIKUaessTb7Fdy+1XAb2DaiHXGET+Mg59D9+1zm2mlc4WVhGagj7FdoGyC3zNrC3P2VjsknQlhjT8SIWJ52rEQapIhIFDQE0BbE3BkQiTYhka4ZalV3NaU1BXtrklkQNfo5tW4q6pggzfvv+27n3zG38vc8+qV9qvMhaSZxWBFKSJrURR3KL+mv3bPCB00cY11dwzRQfAzNjaY3BR8F6sAaMsxhRQvRoVBpVNHoIEfURV2YYFBMViSkGw8QWGyHgyLOCKJ4qNihtShTlHJJlOCvM9vfZ2MrZ3X4FUxzjTH6Mv/X+O6i/+Ko+ua0yJ7nBDRgwYMCAAQMGDBgA4AgpAPl14EvnL/D2e+9h4hti21JkkFkhs5YqNmRrjsbM2Zvvc2ZrQlvPefTUcc4V8HQDswhgiGpRWqwBjb01IwIBNeAVUIPDMgaOAx+69w7ilVfJTEMtlioq66MJ2kwxwSPWEyUiZDSS07iMqYz5nU99Q9SBxhRfvg584C70N97/IKeZshE8cX+HOhhGboKVjLmvobAcO3GMel4hYshwYCwSXQoqV0urgrE5akFyQVAMHiEiMWKkxfkGi8G4Md5bfBDUGHAGawwZwtgI0sxZay3v2NjiVx46xoXvXuPl/QoDKbi766Yyh40GPvqOe9n0O+SmpixyVGHWtDRiyMsxhTPEpsYZJaJURvDW4U1OsBYPRAPee0RAFDIx5GoxUdAAEgWxGQbfxcYIajxePd5HWq/kFjwNo3HOrNpnc7TGA2slHzlTcv35ivMMBGPAgAEDBgwYMGDAEq6QSFCYOvh3X9+T//DORu+eFNg4Iw+BHKFta2TkmMcZIfOM1wNttUupOfPr5/nPPv4wf/6vvsu+JrISAogIGOksF2CtEGKEPGnd/b7gUNbxPLyO3nPEsBFmBDunsjk+t9Q6Z2ygmu4xWrc0jaewBU1WshuErz75PHvAvocS2LJwZ4n+Tz7+ixzdf4Owt0vMBWsKYsiYe0MmAnmGWE9Tz4iVZ5KPcWrxrRAi1GKoXUY7HrGrnphnqDWYGMhqT9kGRiglNRNf4es9CueY1wYpChptMbljOp+ylVvm8yljLDYI68HySw/fwfVC9B9/9arMBHaUFO0uEBu4+yR6fD1HLk8xOTRtBM0xpiDDYWrF+ECmKVvULETataNcipbnduY8dXmba03klYvbiOuKhTQpzmWcwYkjcPrUBrdNNrl/bY0717eY77zOyHqMzhiXjqr1GCwjW+KnFeN8nbYO7O9F1vKCjzz6OL///BeX2YYHDBgwYMCAAQMGDACcaCATmCvsGfiDJ57if/aBR8iubeOcAbUEcQQRGhu6TENJIjYa2bSekzR86IzRP3wjSovHG4tGwYeIMYYYIyGC5EnYjT5lSypjYAP4yP2nOe4CmbZMmRNthCLHB8POvGJrawOkoq0rsgCVM9xwEz791ItMu9ZsAJMAf/vjD3B0us0R3zKyDqkCVgvE5IhkeG3x0dOqosFQbpxiez8QcMhojf0Ar1y9zjOXXufVPeXqPBWjCwq5wNES7jg65p4Tp7h9Y8wxkywtbQXFqMAYQ+sj89k+6xsj2mofi0+B1kQy9Wxpyzs2ct53DP30NcS4BQ+jAO48NkKme5RdgT7FgVqsupQqV8F2RUYaL7Su5NWdin/2+Zf58ymyDewBLSlFsOnO67qHLjsgL++yxi4Pla/pxx9e5+PvuJ9QCXEWoGqpW8E6i0dQzTFSUBsl2AxVoSws96yjr+31xU0GDBgwYMCAAQMGDAAHBmdGEObMiPzJ88gvvy/XB9wW0swIOIIYvAEvHhMjQkQ1R4CCwCYtH3/oPr7zxrM0wM5qWiGNyZAhKc6gq7jHZFLg9mY8VqIfuu80prlOQFEHjdQ4K7TGoeOMXQONrxltTNhr4JrL+MT5q3zNJ2E6J1UY/+hR9BdPHmVrdg2zvctGWeIbAyYDW+IVPJHWOIIpaN2I6/4Y23nBy9vbfPZrT/Gly6luhaerCt790f9/D8yVGTzzEiXwkbOZfvSes7zr6DpnMqW6eoH19YwYYb57nZGLiIk0piRoThst4yA8tjamftsZvvKFN9gNQMwoaFkDHjxxF67yrJucefSoGGxIWbiCUcATbEyF/8yYWK7xlW8+yXemyYLUAG5ti939FkNBqqoRsLSkHghEInvAToXMXtvTs/fNOFM5TulxSpdhnMK4oCJSFRVVVLxE3GjEPAqN9Zy+Y5P45M5PeYgOGDBgwIABAwYM+FmCM0ATakZ2Qhv2eAP4zHOvcu+5M7TzBmuTE4xKUrEbNdhoEBWMKtE3lKbhoSPH+YVjRt+4FmU/BIIBNPn+i+2ySTXpuwxw9YwJ8OuPnuSsDezt7WOKyGQ0YVZNsQrGCGY8Yn82QxXyouS6j1wpCn7/Oxe4AdQYCiJHQX/zvY+SXb3AxNREFG1brEmVp0PwRGKyjliLMxMqu87e+hl+55Nf5rOvXpcbwC4wc6RGBpbhIwgikpImSYTM4GLk377eyldef4nfOlfqb7/vYY6urdO2O4yyiM1zWl8RjaMVR1RBQsDN55x2kUeOH+Wu8g29USENhhxHjmfNjXFhH9t7mXWpcSFFsrc2ECUSBEKsCZXjsYfv4muvv7ywXMz3tzmJoWWK4FLGLtyCZlRAJFJbeOYK8j989Wm9K9vgiM8IVcN2PcNnAc0tUUKqAwLk44KdqqHJS565Ph8y1A4YMGDAgAEDBgw4AGc6EdHElGS2Efj0t6/x68ePs+FGZHGe6k8ouJC0+FZJ5EIirSaLxrqf8ZG33ckXv/ASM5JbUdOlMNVoEstQJTORUYhkTVed+vbTZNeuMxFHbGA8y5Basa5AsfjYMnEFRoS9eWSvXOfbN2Y8VyGVKdAYyYm8cwL3TEZs7l+mmd9g7egWO9MZpXPY2KIhBWdbk2ElJ9SWPW/5e5/7JJ+80EgFqIGmJxQeEAHjAE1ZmfpYCQWaiDeWtii4XM/4d69VYt1T+tuPnuG23JDXM0IVkWJCS06kwGIZxQbTeEzMODKyfPih23nhG+eZopjOVnLlyi7cVlC3bfJtkgiSnk8UxZtIawECZYR11+Cs8r/+rXu5WAd94rULTL3wxNM1ZQH7M88NYIaXGqihC+qGLJUk4VMvIhm7i4BtS+JYcwKu+5zK8NXUgDKn6c41YMCAAQMGDBgwYEAPl3I7gdcaJRGDVyvk6xcu67n7bsdNp2TqsQpBHDZmGCWlbAKQ9NlWezx820ke2XxJb+wgTef8b+iyRpGBKs4IaKpS/bHHjzGWhma2y+ap4+zt7RH2A6WU4ApmTXKVKo3ivSfYnPl4gz/8xDeoSO1B5mQK95zawkxvsOEMgZz9GPB5Tu0DuQScbclIhee8CE0Tmft9XrzQLCpm1zG5WtmOZDQo2qXVNXSFA3Vp2CAEAjOOdZ35xZfmfOS2S5w7vUasHQZFQgHkKDmgWCeY6InRk8Wcx84dY+Mb55nRELDMgWcvX6S6+16CzWikBYkp6kUNwaSK3KIWG2GSOy5deI2jt58hizNGmXDu/tuJJuM332GpWo9iCSajRnQ/CDfqmmvzinlVM9vdI8SMFy/sseczzu/PJZKMTX18y5xkFenJR+y+174fBgwYMGDAgAEDBgzo4GorhKhJM+8ctJ4K+NPnbvD2u8/wNufI2jlKSt/qGYGApSaIJxqLquCcZ0LFX3n4dp7/8/O6ncp2d+TCIprjcDR+Tg48vIE+ds9tzP0NdBLYz6aEUYAdpcjXqDVDaRjZFqopuRqsy/jOhQt85zqdw1YLWYQIp0+vYbXGh4asnLA9r8gm6+BbCglk0hK07uJJAtGOGHnlv3jfJlOMFsYxLicI0NQeVcU4S1QhEIgxogSMghOwCMFAhaMsHfX186zTcu/pI+zWU9qZ4fSxU7TzllwyvEIQpc4sgocwxZrIbbnlTode9MjMBpoA39jZ44LUjEeGRiMGTxaSa5pVg4uWoi2QrubFiRNHqOqaXA1HbM7OzjYbW5s0TUNRFKjWhKCECEEFb6FdU8LEosc3KcsR8tAdtF6IJtPGBJ65+Aov717jiTfgUg2v7qV4Fw9YZ2l8GNyjBgwYMGDAgAEDBtwEF4MlFWCw4FsQqBSemCLf3fF6x8aYsa9J9a6hF+0jSaMuaoghMC4s09lV3nPPXfzhV87ziofKQIhgjU1hC6SaChPg3edGnLIVuYItc7Z3b7BWrIO1YA11rLCFwfsKI4ayXGe3Nnzyqxdpu/OiDQi0Hu6/8wzFzgUwyl4zxeRjLJacQCYprLnWSBUjxsKoyDghhhObW9jMoY3Htw1WDKZMcSfWWoIqKi6l3ZWI0VR5m6h4hNYKXlvs2aOslRnbN66xOd6g3JqwW1U4sRgXkRBoYwAkFb4DjHqOSeCeY/ClSxCzZCV4pUKemVZablo27IgiGjI8BhCNuGjIfWJwszAnnzgKLDe2d9k6eoLR5ph6PqMkoNMZRiAzBosgKoDBREM0EW9b5jeuc3z9BDe2tzmysUljYbJW865zZ/nldxVc0xEvXWn1y999lW+9MperPhBIlpwF+kh4NWmM6M0/werXfYLbwQYyYMCAAQMGDBjw8wQzJqPAQt0mHyALc4HGWH7vM88yz04w1RGBDJcZxM7RuAe+JotQNoatfMR8foVJXrHe7PNbv3g/a0DhAYFgA4YaYYcRLadBf+0dd7C+d5GyqskbxwabSGOIhWFmKoyrEK2o1dG4Dd6oCl7dH/HEDeRGBDtxYMB6GAOF9+QmMtUptWkZ5xZX1WxqwFRTKvXMM6GmJMacUXRsBGXUzHGzHYo4Z80FStMwygOlbQnVLrnWFLEh9y15q1gfUwU7LA6DmdUcy0vGJqfamXG03KA0BgkzkDltts/M7tBmMzLXkoWWvDVkYY2smVC2Gac3bHoaeUpB2wL/3z99ie9sQ63HGIUjjNuSbO6RtsIaT2kVqy3j0jGd7gKeorQ0Yca83iPmgcrUtFmkzZTWJpcvHwRtDfgMGwqCh2I8Yi/sI2Nlt7pOM9/laFawPm84emOP+6bbfGzk+a/e/xD/x994l/7KKaNjwGVds4sRiTCY7ksDAllmkeUviSClYcdisA2VNAYMGDBgwIABA36uYBxuqWHu1csCuxEueuTrr16hHh+lwdDWDYInyxURsGLQEIlNTe4shhZT73P72oiHxmjZO+qbQKSmoGUMfOShCZux4oiJ5CFio8Gogy7GINiUThWJZHnJNGb4rdv542+mAPJAQVV1wenai6lKiDXGCNYZbFBsUGhbUEWyHFeuY90Y76Gua4KvKJ0lsyAENLYE39BWU4y2bI4z8ugpQkseW5y2GBqstiDpb3MjR5sZpm2YFCl17+7uLlUzZzwpU2C5RmyX3heUKBDEgBp0VnP26HFKgJmi0RDF8grIf/OJl+QLVyqeahx7o5P4zZPMJ+tsG8NO9NQq7FeBPFtHY8baaItcckQthckoTE7hMjJjk9XECJIbTOGggGiVzJYQSDEhI0uxVpLnOaYFM/NstIHjTc2Zaoej26/xkNvnf/7hx/lPHz2qm10Mum/rbuwcJAs+Lm0cB4tlmJv2HTBgwIABAwYMGPDzAdemiICElejdSGAb+OTTL3Df7e/kXFbg93cx1mGto6UhmEC0QqMBZ0e0XtHQcHIz55cevpNnvvoKU4U6xEVg9O2gH3rgXgrdJqrFQidwk1LbSr+nIWJQVbQoeGq35Qv7qcxf4QIzBbLkHlVHiM4RI5TWkkVoFQwGkQKNCj4ixiJeEWOQsUNwTL1fXMdZS+6E2HpoI05AYkiJo6QlEEHAd6r4YOD6vMapMMkKrGQ00eMmBYJhth8YM8Z0Ro/WQOMiURSDB1VGrmCzEDaAax4ClqlkzHXGHvC/+8zz8u5z6F89d45HTq4zWStZiy1tBuMqYnyJkYz57hRnHTEERAsKKcnV4euKVhqCeoKFkFkaZ4gI4g1F7RLBsEoTYwrk9pHclKyPR4TYUE93yRyMRXHVFd5xMmd81xbh4nX93cvIlRi75Fo9jehSG3ffRw7TichhyjFgwIABAwYMGDDg5wOukpaoukgJZMSiRCJKBXx1B3nPG9f0jru2YHYdjUKMEFWJBMQJUcBQIm2DM4oJNY+fOcL99hXdDimjVJFB1sKH7h1x99jh5pG20QN1NlRSKlnRCDhQYT8GZpMJv/fnT3Kd5D4U1af2ppCGVNdBIXSVHohKGyMiOa01BAGNDb6JOCyusHg8O7OGOD6KNzlt22KNMC5KNAv4eY1TJS9Tx0QJqES8DQQT8QaiGNaO3EZdBXxQ2rZlLi35aA3ncmY7c9bJsSaRksYqtfN46zEERMGo443aM4MkhUdHjILiiIVSE/iz88iLr77GWdBTp+HBO8e8/cQ5zm5sMNJIFsCNj2BaWM8KQlWxE1piqCjHY5SGSE2UliBKMOn5Omso8oJChSL3YCCEQIunbQNhOmdc5HgfkcIxyoT59W2qCzV3j4/x279wP5/5g+e40bU9xEiMgah0BTwMypJkLHEz5RgwYMCAAQMGDBjw8wEXbQMaIKY6FxFLXyGvNnApwKdfeo2P3XuazXyMkZbQNF3RuYA6g2DwrUE0Y5w79qvr3JEf5Vcf3OKZJ7epOvJyqoCP3n+WY80M0wQyVxLVoELaQTRV/gZMjLQmI5SbPHl1n09drGWHRCZ8ABzJhGAiEbg+r7gty9K9tBWqAc0d+02LyzLEOpxvsNZixHJ17zpPnp/xTLPDfn6UOniaEBERrM26VLARQ+ysKp5oAio+uXGZiI2OvJ5R7VQUpWUyGdP4mibcwLqcqAZjkutXFAjGE21LlBa1NaJgQ8brleWKheBGZE2BVU+JpalbZuMRxIq9oLwI8t2L8MmLM4RncMBdx9AxcN+pNYpGefj2u9hyJZvZmKNbx4h+SmY81rRIrDGhwbSBXA0Yy25okdhg6zmiDUVmKbOSWDh8q8yblqxcIzqoCNjJOjZasiZyPC+544jVl28EMQpzFGIgIhjJiNImN7COZBxEPLQdMGDAgAEDBgwY8PMAh03kwkQAgyAIJmVdkhTw/c2LKk9evqHvGo8oohBDg8tdIhgaMMaiQbHiyDOL3d1ly5a8/57b+L0nt3UG4gO88/5c717PmVR7zOoGtz7G154oSYi3MbkgiSYHqSCO2WiLP/3C19kG9iTFWwDJemEcxBZBefmNa9x/Jrn0LM0xAe8ENQYbPTGCI5KTkRuDZvDvnvRc5bKkInKpcFzvwNN7jPXByX3AMvQ6eE/GDo7Ed4QZGamIXc5cA9Ck21nArhwfSOl+r0MqnBdqMq2ZEJl0v8tsDsCIlIVLuza2ArXA09cQJ/DidJ+6gvHzT0LXhnHX5nXQIwJHJrBRwtZE2FrfYDIuOXP6BEcy5ZRtWQs1Uu/TNB61koodhlTBvGoqMJG8HKFtpK1qbAnnbjuJu/EGqqlvVu911UqxSjKk+zxgwIABAwYMGDDg5w+u/49Ri0n6+oXwFxTI4VoNf/zd5zj7Cw9QqqXE4KxNlaYFNMSkqQeCr3EmkPspp8uCD71twtVnpjiB999zlg1fkdVTLKnYXJDYpX/tqttpEkpFPY2xPHkj8IWLyAxS3AOd934ECUpKvup57vVLvP/MfWwYQ+4MGj2eOaYsaUNLDDHVjWgCWMNmPuHu2ze58/nzXNzvKlKbFNxeC5AZNADRgvaVrZUMv6hsXQF7gMsha+AI8GiOfuyRo9x75AihrmiMUZV0Ty5CETxWW6JpqGzBdT3KHz7zMrO9uezUkQ1Ssb+cRCjWuvsdgXZJm/DAXBHfSfNjC+crmAHb5Uo18gClQglSKsg+6D74q0rLDrBDxiXuy9FfO+f4+L1nuWv9CKJ7NDGQC+S5oa5mEFtsbmhCQ922OJshI8vJE0dxvJHqY3Rt9ZiOTnRssa/oDgdIRv/dgAEDBgwYMGDAgJ8fuGU5ZoPgUqYjIxjpCEZMwvfnX0d+9Z2ZntSWUh2oRQM4MYQYMBZUI1U1w5mIhBrm23z0kfv40jPf0tuPwcPHNhjv3QDvGRUZTWxREYSIUZMsBJpiJrxxTN2Ir7+yzWWSUG3ynNg0uMwR6oCgpDBxz8vXI9vGcdTmWOYYH1LsQVCiQuEKsswg84Z6XiG540g55rc+9h72P/kVfWYPqbpaHTWgthOQbZayWwUhRPApOiJ5aOFR06JeGQN35+ivv+skH733TjbaOfOdCnKXYkDEYCNk0WE1/U3dOm9kZ/iDbz9HW6Vr/+q7TulvvPvtjMMOpp4xsRtoY4itIVOhIAVkz6xoIw6h4IYa/rf/9PfFOngjkE6Ul1AFKm+oPBRdJRPf9SWZgE0B9W2FlC94PWMvceLBs2zkJdpUtHiMV4wxlHmJl0ATavJJgSPjwnSH8fjoQeuOMZ3pp2cV0pksDIM71IABAwYMGDBgwM8/HL22G0fKbdSiMSy00SmjFOw5+DdfeZJHP/w4jkA1n+JMho2JjLRaoxKxVhAsUZUc5Uic8p+83XLixDGOVXP8bI7adJ2oqYbCfNqQ2QKnSjPdY+3kCV6ZzrgcM373G8/JftdErRvA0NZJWE7VFHI8Na9WyNcvXNbNs2PG5Yj2+hUK67DSYmyO+lRkLxMhKwtQR95E3r4x5m+/9x188aln9KsXGs532v5pHZgJqdCGcakAYAQfIr4Lis/VcyLCMeBDR0T/+nse4aFjI7hxEW32uG1rwnT3OuX6BtfnM4K1SJER2oaJWKaxZbue8cyuFwXyDOrtK9gbVzlbeMrdPUaxwUSHNzZlnwoVQVva3IAdY3QDszPj106if3I5WXqqAuqm6p5rRo6QIRike66GttXEILMk9FdAjECI1E2FzVMBRhFNQf8RsIkoVXVLZg3FaMLu+d2FNSID9mPA2ZI2DmRiwIABAwYMGDDgrQgngUUNg+Qe5RcaZwsp6FrgiofvXkNe2a21QNiabOLne7hIqtzsUpYl0XRskORwdaJQHjm+xtG1EZsaMSJE22Wqip75fIpzySHItw0bkzWu3thFT93Jn3z1WaZAg0mWFYU+isF0zMij1Dgu4vn001d57Nz9jOqKo/mYtdxR16naX7SgzhFVaTQg3mJ8S7l9gfcc3eChDz/Oh65d55uvvq7fuVjx0i5yjRRQ7vEofpH7KAfGJWwJ+hsP38nbj21x33rJqNnF7pxnnHnERfZ3LrE5XuONN15j8+Rx5kSqds7aZMJ8ex8ZH+OPPv01pnSpb1u4eDVy4vhR2ue+w52jAp3uApY6s0SjZEXEGPBNSz3dpchqHtrcwD90DhNe089dgyv7yBwQAz62nXvXMiKif+QSIdRwGviFdbj31CaT3ECtCIoqNI0nc5bK12gMFOMxGUI78zTU7Ozs9ZmND1b2Vu0CV3oXqYFwDBgwYMCAAQMGvBXgMu1Fv1SrYpnux3Tl0CLOGvZj5LUWvvzSec6+7Syl8VibdX5UDSqpMB7qAEOQRARctc/ZiWPDCrGa06gSnANtMZrSogIEMlQjUVoal/HS3PKJZyupASSimrJVpZal0OskKAdcPmK32ePJHeQzT7+m/8k770erba5dvcx6VqLBEwnEzNA4IYgjMyW5ATO9SGlusFWOOLopPPLwaepHHN7k6rG8cfEKoa8/bQzWOcpRzng8Yt2C2b3GVr5NFgPzdo9gW9rMISbSKuyEmq2TW0QVXBRyHH4WiVLywuUdPnetles4KnFYErG5PFe9JxtR1zXlKLlYBfXMaQFlZDNGJsOK4qsrZOzxzqPr3P2h+/nruw2v7c71+WvXePFSYG7SI5EUWY1pIVMYZTCycNeZDe44MuKeieXsek4R92lCDZqhwWAC2DzDqyeIYsUgrZK1hrXxBhcvvbRwu2rpxpJ04fEiB3jFaiapIfZiwIABAwYMGDDg5xOu950PxBTc3QmifSYlA9Q+gs2oafnMs7v84oMZ0tQcsZYYPUhKNRsFnAKaamsj4Od7jFyOqfdpm0AwrpMuBWMMucuYz1pcHpA851o1xZ65iz/90vNcIgmtvYVFEWwnmvYZnhBPRXL131f4k+9U3HX0Oh+8/QhZ2XCkmKDVFIkN6gIhF7xC23gkwNZGQWimzG7cwEdhPR9ztBgTg6FpWm4vQTqyJOJREzDaINU+TgIjVzOf7jNHKUYFmlmatkEiZKbAqSV6ARVyN2J7d06+eYxZAf/iD55kF5hRQEixJDM8X/jWE/zC4/dTv/48BkVTwQyMiVTiia2nCCWjzBFHnnm9C/OaDSm52zruum2TX7z3NrZDS+MsITNEiUhUjI+4CGPJKRFMUzMyLTbsQ7VLE2oEgxMD1qFGIXoyZ7AYmtmMGITCrRON4/WrfkEsFs+kj79YfBNvQS5W83ENGDBgwIABAwYM+HmBgz7hUHtAxay9RQNQDNaWhNDyMsinX3hF//qDtzNuKqxJTksRukBeiyysDZEiy8kyS5i1iAhZltGoh5gqZ2emYKYtra/IJuvs2XWuBcvnn99LxIGO83QBIbGvTdELqEVE/RwZr7E/3eciyP/nM+fVf8Twkfvu58KVa0yip4wBp4qxilUFiQSEG03EuhFSrFOIIGLRKBADzijjrFjplogKqRBdCDRaI3FOsV4g5Zh5EwhVJI8lo2ixMRl42mgw+YjtGawdu5fL6vhHn/gsXwOpAPAIQt5ZZb7+7DVeuvcI9x0dU+9tg28w1lIWOVghVJ7YNgRj2fdTvHjGZUGRWcJ+Tdt6cqk5poHYpCKGyXctYkSRqKgKEgxlLAmtp7ENagKZzbFiiSE9QWOgbmYUZbJxtW1gvHaUvTrypWe+y+WINCwJRsAgKql2SEx9duua3auF9gaSMWDAgAEDBgwY8PMCp7hkuTCdkNc71EtEAa8pNDiPKTh4h8gfPbnNx95xJ5vR4WMDGlExiIKowUaTslAZUGPxMdKqx7kc4wRpFTEWVGjqQJmVzNoZrRtTr53gT7/1MhdBPKuuNMm6osTklUVqIynEAq1aWkbsMec8yO985TWdRuEDp85gsJQN+GaHSqeQWcYmx2Q5QYVgUnxH8J4YG0QhM5YstzShQqKSylMDFqLp0q+KYeYjbRNoo6fxkIWcwhRkCoSWNnrGGxP21BLGa1wyOf/iC1/jj7aRXWAfEGoyMhShBl6dIv/w08/rf/6Ru7h34xR2ukuILdqGRBAQxCSiM9ncYFrPmTct1s+xxuIwSGiQtqbILKopWFuMpiRPBmKAoIbClDRWYVwQMZioSFeVPHdgHRiraIh4MZi1ddqN43zzpUv8zrf32Cc9gmSrMMma1T+1PiaHw/aKvrLIgAEDBgwYMGDAgJ83uEhGpF0SDJ8iLxCf5EDjUG9wvistlxleb718/Zln9MR9J/EhQkwVwK2CiQbbkRQBptFjCkMriljBhBZRyLOSpvHULYxLR64N+2HKi7N1PvX0DdrUihXBtWvfSgGFTinP2kbG3o4BCuZkuNzzzflMrn3xVcYf3dDHS8fR8Tp5U1PFfbT1uNhgFHJnaXzAo1hrkDxL7l7R08aAEYOGzkVJAWNTLIYRVDLyjU3mswpfCaUtyPMC9YG5zommZbI15sL0KnvjNa6PSv7bT36az72BtGuOazOPVZgUUFctDY4oNRcE/vAKUn7rFf2b9z7COU6Q557Y7hHaPXJjECeEqGxfn+JGBdZkaLRITBm8LMKkXKeu56gxCB1JiqCqGE0OcHNtaGgpMDT1jDxAkZWIRKxTWiJkOW2MNHbENht867V9/vsXrvAVUjB5snQllypiTNXUrSyivns6sSSLZuXpDhgwYMCAAQMGDPh5gjsQe0GyUqSYDFaE+QAEFM9+JzT+229UvPuBAutaJj5g1WA11bSAFI+RQicEmzlUFTGR0DQYVZwU1HWNM1kSiMsxu8Hy5OVtXqo7wdV07kqQBNdVxXevJBfY221TvQoPrWRcb1qw8IqH/9snviMfP4H+Rw/fzb1Ht7Aux6knVBZfBYyJRDGIRFQV37ZEAsYYnDOIV8QC0SAii0DzEBQfAvO6JstGTPIS72FWR9RZdDShkRHbxnJ94nhyZ59/+Ykn+eouspuTsltZQ/SxM8REFAFbUmnFVYF/+7xKufuSfvTuO3jbHadwOiLODZkJRIUmVLjJBlme01Qt6iNrZQlRaeuK+bwhyyzGCipC1EBsfRd/LVhniQbEAVaQqDjrWCsL9oMybyOtAS1HzL1Q5es8Vxn+2bee5pPXkLoEiQaa9FzEgHacwRmD98u8UgeDuvsInwEDBvysQkjusQoEgYOKg3iwsmaPIbvDgB8UP8gSoebAx3TImyuudHVHvfUlhiH6g+PHfr37Ilr9gbr8+jAOnntF6fz98Bf9QPv7+UFFnENj+M3dx292N7/VrX3/ff7i3NNl8YBtluIiQiQXx6wLLE5Mw1M4iCl0ggI4Bfyn7z2if+OeDU7Mr1FGIezPWZ9sUDcRdXnSfhslSsDgEZLLjI0GF1y6TRuZi2HfrXGxPMF/9Tvf4BmQZjxhf+67dLkRoU4L2cLXphtgC8LR1dfuC7qZFjQyUVgHTgIfuN3qh99+P287dpT1VjGzXZyZojonRo81kNtknTAxEH3AStL8qwpGIS5YjkkB59qgKngc3pRU+Yi5K5nanH1bcHFW84lvfJvPvRZkF5hb2Leg0YEKEkJH6LpEsib1N9oyUTgK3Cfoe+45xnvuO8u9WyUTP8fNpmisMUXEa8AQsWIoRLAaCb5FfSBzXeatbpTFLgWxUaE10GQgFkwXAJ55xahDccwloxmvs2McL+7X/Pmrr/PpF2c8VSHTkpT7dsZKefV07pRNbHWQLXHQigGDFWPAgJ9NONJaoJBqBpVrXQ7sGkJ78wGHVzr9IYSEAf9+4gcU3kRSUhdVXfyl71dyghyWjAwYJ8SgN1+nF+I07xa1iCySwKQCsg5DJC5WmL6msK5cx+ph6/qbrUiHhcD+nG/d8bsorruCRV/Lyk5wE4FYEIReJ7F4OOBMUnZGBSeWoAHtkvzEBQMxKaOQ6wJd45tdZwV68P8iqYGqyx9EloNDVXHOEWMk3qKul4gkd/DD99h/Ntx0zZvGuMvBr4xv7TpE6V6OsOgYwd/kXJ4yqZqFYr+/7CoOdk1yY1+2KfLTlMGkKKFuAckhKKWmhaGyOWQOmhZiu1BVrZcZ1B4Jyv05+r//H7+f8fbrHHMFR/OCdmeXUWbJjbC9c52iyFIWJGLnk5+yGOUhdZQnMMvG7Ixv41Ov7/J//cIrspMZrnoLpoCgWDyWmgj4VUEWlgtUl2mqr5ORflNwAQnKKMIGSWB/W46+/76TPH7vOY6vCTbOICoSGyR4nIJFcQZMDMn6oqYrSm0RsRhjUQOqLbO2plGLrB2hKdZ4bXvGV597lW+9doPn9pA9khxed38q6SGLy6BpscTl0OkfvgRQT6EwJrX9dtAHj8JDt23xyLmz3HX6KKHdR0ODb2u0rTAxkkkiSpkRtE2RLKLSvfRmMYiDwDS2iAUrDgCLQbKSaDLmJueJ1y7yrdff4CsvB14B2QGqHBpLGt0tt36ZBwwY8HMNC2xk0BiYskHSOJDm3bi/kqZ6ZdHUpjs6X1kp44piYtj+zGwXyVa+x37iQP3N32PTAPJ9entdYRqksWO0c7mNC023rPwcsZ1Lt+1iExWLYiS5M6sGQkcBVuTX7iSp3aJvrs89KA8e3isd/1Zf+lZlaTjUfz+IBn+VpXQFuvqvVo0b6U9weYZYQ922KZC0P41J+8ZFDDFgLITAgWenZuWhShqf/fdGSYMyJNLaj19C+t4JmCx9bpJ8lhocVy7cX4cVReuyV3rxThc3lWRBk2UYa4lRicGvFBXrRq1ygGD0b19PMPp9Dz+P1av/pRCMvGtkEEvhLJO2wQO7AhiDcWXSOIR515cjShw5cyZ4Thg4dcSobSPjOZxo4T96fIvHbztCHmZ4E/EGWuMAIYuK0waROUahjY79YoOL45P8X37v63x5itwAZmQk/VhAuioLBwZsRzBs16k9rVAcsTuiJxj9AyoMjH0qXj0mWTbuBD13HO664yTnzpxka21CYS1oQGIgN8tHpqrECG1QQog0Rrnia3aqios3tnnlwjVeuQiXQ8qsVJPk7xYQKzSq+LiMKxFivyR3z4Durepfgogb58R5g2tTb/R/Y+C4Re/ZgNs2LbefOc3p48fYGI8onGBQrCji46L9/TYuPgupSIZlGj1Xpru8dv0yL16+zAuXPBf2U5arOckLajmYM1LsDgQqQurtAQMGvNUgsHnubvzW3TptDDiHc4Jp93EEgjgUSxSD0YjTvu6RTYqWzp0qKXCG7c/SdpUwvNl+RVZSNXOaaQWzPWFWQ2jScRogRMB3jCEkycu59H+fMltakywTEjxKWNHWKkpM1hGNtCsCXv+/CIdIQK8y70XXlbXrh/CXOqy0fkuil1dgwQLSR3OTgLt0TVuSxSRPGjIcdLYmXRyRCIpqymRpDLSrlXw7+T9jWR8tWTgMoauUtnjOLsk4CxlI6E7ce40IFGOYlMhoTfMyw5kMjOKbQFCfDAkmKZp9W8H+XKimMK86okES1k0XGxA8aMQ4i4QA2iJEXKJBiw4rnaP2VZL/SDKgmBVytmrZ6JQ1vaP+kjCvWvhid4tL0vCX6SLl+tOLBqQNTEivXFBoicR6lshU7qAFJadFMGTsI+zFwPZsJPV8ylHgsXvX9a4HH0T2r1JPW9woS4HfnfuS4IkYVAxqDLWMacqjfO75F3liipgCfA2b5YT9qu4GnR6ks32bu+6xK5+l0y5ICmvuXL8aEKgFapvmsiKkDE67IM9eBbl6GcPlTnyGLdC1cZoD+wEOac6rmkQe9kGuk/7fG7KWBq00SKIVogo+xIXeo3AZqomkrN7M8vaWpMDPk8avcelvX5fj+XxA3rgBoxuB+PJ5DOcX0+ca6MSkiuOHoSv/OT9PtqUGqLp7qbp+qvJUyRzSjWXkOAoshqyzu8yHWIoBA96aEAfrR/jF3/ibevodH2Ev5GlBjS3S7GENYDMibqFQcTFNXlHyNMtJ7ATSNF8O25+d7SqMJqXv4S0hrn5WmxgDTgzWwPkXnseizOdTrl25xM6Vq+zduM721SvEa9eEqiKoJ8RIWpl7WwRYAoaaqE2fTBJXZKhEfAiEVYFUD22hkxEct3TT6/frf3tLM4kfFKZ7z1fNEj166YgDspzpflvIoQgqLpELiVhr8b4l+GSQcJ3CN0ZFxRAZ43WpPEVcIhRqEokoCphMKI6e0M3jJzh64gSbx46ysbFFPhpz/OydBDGL8SpRCSjqA20MrI8neE01xNQITkyKL/ZBg28YWUMzm7KzfZ2dG9fYuXqNG1evsHftKvO9PWavvCpJxVwAEd+paFMPNcx8hUAqMUCkbpMSG4Esh3bhIdJLjxbFdcWfe4K8KkeaXp9+qO9Xdvme5OMnC+eNIStyshg4O3Kcqua6XSXLRhXSKz0Fdhuf4h9swKvBxEjUFDtwYz7lBMn16PF7j6LNZeZ+ztbmBm3TkEXIYvKnCSYSTMRLQWMKfHaUy77k335lmx1g5tPjsNUcRwp+Dvil0mHFjKYAJrlN+ZCIRiIbEYvBK1DHlN3ISWf9SnqOinTc3EPOkoj3r8YbIGaWLtcL7XBQ5+FJ43jWPa8IiBjEZviQanYsfboS54xA69ulBS/2cRErF1hMboDtvJx7SzQhzdZGmWXChSpSrLRRlluRCGZ2s/ny8KV6T6e+YF7QTrEUIStz2iYFWUSU0L0i3WuIDjPvgAFvTYiFKlJnmzTlUfYbAWOxJpC7AifQYDuC0QmAhwiGGr/qaDNsf4a2B4bCmxCRzCZhkahJaAyRoMmlJBKobr+XsixYc4ZJ9GSqFNZifEM7n2lGZPfKJS688jIXXn2ZKxffIFy/JkxnBF8RQn/BCNbife+2AhRZktBW1tSk4+7X+97pZOn/sLyh76HZ7ZTUw9J3CJ3qPQnAq1aiVckjHui3wLLeGpLIZ9IcR4gGH5WuXBsGR2w7ARCw+RpNtGBKyDLY3GJy6rSePHeOU2fOMtra4va77yUaQzAZ3lhChFZTDbSghitqU00wACM4ZxFrFuP3cpM8Z1KinI5Yi2BzA6VyNdRoNkE2j7N2FxyzhkxB2rrTRs+1ne9z4/IlXnrmaV58+inipTeECEGz1Ge+pvbpvoQk3tlOSM1ZKqyTsn3VI6WzBqEgqxJs9yx6LAgKN1G/my18P1k4ckdbV5gI73jgtP7t9z7MpJ3pC5cv8/LrV7hwaZtL08jzM2Qawcd9IBEP1zXuOPBrj2zqB+4+xt0bQnvjIpOipGobcnXYmDojdKlwFQNqCBRMs00+//RLvEaKVWgtaLREhZyMQCpFd4ABrPaIXf4WIqCJXJiOZJSjCdOmSvY1T9dqgah4Uom7adeq5MO2GsZ9a6QJNpnWQlcfw2UlBqFpm+46kti0SUzampRZKcSW4BsMqUmrbl+iB68bFYihu11JqV9xS9ONQmMijepiEAlx0SVvZltYfd37bGHWmS7AqTMveg8qtLMkEJR5DiHiu+BNBVL4/U/XxDZgwIB/j2EygiuZeaUKFrEOawwWYd5WRJsRJGkUhYiVJMwpjiBJFTQEev/sok8egtx6O227NV91sb4Y4xAnqBHseIPghFmI+LbBxEBhwdkCbMH+fE5++908cOf9vN0B3rO/s62XL11i//plzj/7Ha68/rJw8ULSWNuQhFP10EaQguRnnnwLekGtJ0pJMDu8UnZCsMSbpa83W1TfijjcN4vPPQXtycXKX0/0epHF9PuzfBa+/8ElD5QQwXQKY+NABNlYJz92Qu9+5/vYOH0bZ247y+bRY6i1tFHxWKIxXPWaLCImI4hBrcOjqAgGYWSLTq5JsbYNIJ1QplExeYbpXFhijHjvCZ1pLKrBFJtElsfWKFY9gkNMy+bmcdq9bcrxFu95+B38ytoas71dfe7ZZ3ntuac4/+Q3hJ3rMN0DbZI11yg08wV/6DP1QcrlmlwK4+Kbmyj/4TF6WGa+9Vc/FQgueT8daeA3Hz2m/9l9J9ma3sA4i7MFwgjvMq7FhspmbO8H9vf2KG2Nr2ccP3EK2oqz6yUT19LOr1LawCTLmF7Z5ahdQ2KOl4zGGmorqChWI3tujc9fgf/uSy/wgiAXAjDK0CplmirFUmuFl7hUMnTjVDo3K7IIJtI7sfW7pt3NMsreWIzYTqJWTPdbS+xSSayaRSKiadAkfqCL9KuLpyMWo8qk08ocfI0SRVEREEtYBCPFbpJNKXE72pz+uuv25KDfuo69R2SF7QuIQW1HcExkGWQUWWWsh542C1Xicoo98NL3vwjpfTfGpFonK7Cdm1mUzoQ3YMCAtx5MAeUmH/lf/Jd6/KEPMrfrqM2IoWHkItVsH1NMCOKImE4z11kwcMkiLodM/AN+rmCtvSlzFJBSvovFB0mFc0PSzopGrASMTXGERWYJbdMp5QLWSnK9A1QjGuc4UebXrvPSk9/hhW9+C//Ky8JsmoSBUCHRo9pFEa7GAADEpOzsPiy2349HDMaLpZwCSaKK3fZmATcmkqfLYwydyNa7XsTujDFJb0JOlo1p2pjmmc0NJnfcqXc98gh3PPQ2JseOEawjmAzjCowxtD5S1y1BBZfn5MWExsfkKqJCQJLymuReZVCMBGL0CwLc//VjtWmaVPfMpvpnwCLTlIil7pXJJNWsSMr2ZAWIAaLHmTRmNTTE0KIayK2jcA7TVEyvXeWV55/i2W9+nerp7wrtFEKNdUps5tiV+bGnbNpfdlVsXTTlFqpxPWjBWLUt/XQtGApSdcLsbI9jbHHczjGqSLtLrA2mHJGrR4uSJsuIG4Gjazn1/oxMr+PKnHr/CllpUwcC+/NdjmwUMKtTfIoIQYq02AgEiUxdwZ899V1eDMg24ApDW4cklItSaUMS9rv+OWzFULoJou+pwwtVpDAZMUbamOpbWFIyO4t04npPC0i+QZ3WQjuz0yI9WS9xC/QpACKRpnPNWjVcaafXTzK/TxobEWJMcSEiFjExBQ716Wm79kZil2ovtcvTZ13pX860r6qh9V2btL/w6pvdO74e6pLVsdf1oelvbTFq0/2rQuxjR5L1s3OLW+n/vygqPGDAgH+/IGl5shqwAs4mq0Xb1qxljjx3NDEQpVe6gKhHOn/nNDd5bnLoH/BzgxDDQmgznWCWFHYRDUomOXkEEYfLkrjahAbVdNy8ahHjEGcJJinZVJWonqCKdSOcATm6xgMfPMN7P/LXsPOpvvTEt3j2G1/mjSe+KSlBjSHFYoaO1LKQrjqv/kU8wCpWl7eBBt8Mg1nRW8bu+fA9XSiSdGOW/bmwTHTeJWRosYZfP8r9Dz+m9zz6OOfe9hBNVnLDt/isYL/IWOSviRFtUxpkO5lg1eB9ZDrzOJd3D87g1BCDJuWtaOKVslQui/SeRsn1O8bI2nhEjJEQAhp8IhfdOI5RyWNSAPekRBXEWBBNcp7N8BpoQ0BkhC3HAMxDy6wN5LJGdmzCgyfu5NEPfJz6xlV95ekneOLLn2f+7JOCy/CxBW1Aw0EXP112H3TDuVcufw+GfCsXx58WnAsZBW3KaW7GxACN9xSlYV7PyLKMRj0mFxrxGJOTuUCcTlknsh4MTVsRjDBvlGjHxBgprcW3EXEW7xuMcfjYIC7DjNd47cYNvvz6q3zhRkp96gFfR5Csk3iVQMRqFzqhHBy43ffR92J3579G74aVOtLHdmViWJrudEEDOpNqjwOC86GFb2F16M8FtfkeMnY/ANQvd9DV0zr6wJ1+ByXiu79bj5GDbHbp4njoHla3b3YeXeYBT6TKEHsXqYUvH+lZ9JNyb/lcCAgDBgx4S0IBX1O4CGEOkmOASZHRNnNAMWLRXrOnESPdvCYrKSYPz7MDfr7wJs9XgMy3S36ZvHLJO51ZFMXikqWCpBDWRRr3jAyD9abziy/wLnAVjx0Ztt77Pn7x3Y+Tx0ZffPLbPPXVL7Pz/LPC9vVUoyUqzoLYQAxJiZcZR4jtgbhCC4tsRtAveWahxVZdjSR/q8Gg2E5SCEtJxiR5DV3I9l0cTpIxgik7baVgbU5ofSIYZc76Q/frfe98F+ceeJjR8ZM0pqA1GRc0J0oGZi35edQO0yWIiBIxnRAW2865Sh3OJo85SOTH6IouQxXVSGvD8nnfapw2Te9jstynr+GiKba4j9eApDjp9dyxu5hIClyPuiwPpFIkq0Z0tBpoA8wlYjZLzrznBLc9/n6kmeqXPvUnXPjuN+H8y0KYY4xCM6Wr+paSG7jk0W6BorS0bTqfsZJilFZwmCz/tGdeB67TmHuMzQni8GrJjSUvxkiTBPdWI5kPCEqGsGYcuSrtfpU6a5RTZBmYVOjN+pYQG3yosDblEHa25HqrNCbneZ/zD76xL9dI2ZxS3IRh0R8mOenFPnhbu3jpFWleEPIV7f9q5wW6h74qpSspI8BKsIx0jPsmYf4wt5Bbf7/wbnqz39/su66lsiBEve/X0ox702E9+Vk5Z+JBb0JGVk6gq1afQ229WUPT79DboiP02TZWrUSD9WLAgLcwknajVwIuvu3mhVSZYCFLpNlEQfs6CLCY//59yIo0bP9it6avb7EybuKqYotEKBbuNwILFaKSJFmVhUY8CZsWxGHIsCYjw3PbY+/lwcfeh+5t64vffoJvfP5z7L/4kvhQg86ShKZJYy0YrKQELWWWpXoLK/JG5vLki58CJDngavwWg5ISw/R5o5KCN4kJZecHFRRa7QiHtaRsSg5MBiYnqOXI2x/Rx9/3Ps4+cB9ua4u5sewLXI0C2YggGajDqEVit8WA9sW4lhk6ey8L042kNO8kZWqUhfN6ugFJpCP8iOMXugxpPbmA5Ba/2kcr47f/3CNql70KIYp05clKlIJoS0w25sO//T/Fb/81Xvr2l/Vbn/kk4eXnBAFrlBgqAhF86lpVqKrEqKyFEPQWIppZPLtlq396cOIsc1+loszREGQMZo26CdBEJuQpHsFHgliIBbmmStdBlVCsEyV51Eldp/SrMQ03wVEU63jf0Grkej1lf+00X75wmf/uM+c5D+wIIAZiCgwM/T1buGXw30qPLbNBLGMfErGIi9CGmwT/joCG3idQly/GrdC34MACutqWzkT2pkdrdx+HBHHpfjfUi+vo4g3lwMR7gFh0AfKy4ve3NHnd3F+3bH//f+lqbyx+6Cqt9+4MvbmT9NIu/Cvl1tcaMGDAWwkCYgirfwCS5n6VVF8piCGK6XQb2i2qqXCpVegnt0O6k2H7c771JtIYn9br1VSj3TatML0C7vAKnQrFtp2K2mivpTbYCKIGqw4rAWvX2J1XtBq54/2/wts++h/w0ovP61Nf+TwXvvIp4fqllGUyc8TZjKgRY2HatpT5iNDWRI0pDtInFbRgyFxG49/iQYjWpGyZEcoiw/oWH7r6dl29ukQuMig3OkZSwt336aMf/Ch3PfZupBxhspwbTaBuGyKGvCyZjEqaOpIt6EIicyosrA5RlkJ7F3qdpqX+//Rpa5bxNT0EMCvy2w89jiXSZn2hyJS+dqmUPRzXYw4ejMGYTtEdFcSgYokiRClRyYh2xB5KzDz3v/dXeOd7P8or3/2GfuFP/oDZ889IKlZaY4yn8X4h2GW5dI5rkRDeRPctq+356clyLoT9pdeLBZzD5CMMDc5CFg1GkySuxqAmSy9zKAja4G0kasAqGBWiGnAGazKsE6bTHUw5Ymot8eRpvvj8Rf7RZ9/gZU0F9ZJzf7cwoaTc1EofFNQ/poUh8kAvaRe1kIZQnxHpALk4JNgvcIteP9jNy4R8StJs9J+TBaQPDjsYQ3Fwu1Dl3XQFXWnCglwcJhWHP0dDry9YxGIse2bhRXoYh0+17JZ4+At6qpa60dx0TNR+HJtbEqcBAwa8RdAtqNrVudCu7KkgxM6lMhGPLlGFgGpckI1VITLl/Ru2P2tb+mKJP8JWDQQTO8EsCWkLXW+/xixWr664Hz0Z6deu3vJPpzA03R+glnmt+Mxi8w00m3CdgImW8T0P8+E778Z95MP6+ne+zmc/8ymJF8/DeAuaKVEjMh5TzfbpBYrk5tcLt5HWr8RvvhUhkApkZaBQNcnaUxYZGoW69ck6VE7AlrB1nDse+wV97IMf4viZO7gRhFmxxjwaog9ktqAot8iNITSB+axN3i/00ljsrKFxQSoWz3oF2rlOdZ8WElJvwYjQWS9Mp8eWH2v8hm78ysq4NIt/tctKla63avUSjagkF52oMVkxVDqClIGJ7M5mbI6OMA818ypy7rEP8rceew9PfuPr+uXP/DHt09+QqHUqZ6AeNNAGv3D7X82NlF6Rv8gIDHC5ply7I8CYhqqdUTU1ojUjDV2gck3QhhZDkIAai7UtRlrwe1gcRkdATm0NHqWJc2jAlGOm2Zgrk6P87p9/lz94dibXLOz2smkEJC4JAgbRCOEgR9BVzb4u6100GBb+vObgZHOAch6mnwc+9hkQVnFQo6KHPq8K+r09YVXL0qdv1cXnmy+vskKcVgnPoXavGjYOG2X6LFk3t/9W93nzl3JTYPzyFQgs9Qar1+2bGzUpJAaOMWDAWxUGFSH2VgpNGsUoq/PlQbcBukU0AkZ626vpXGSG7c/S9vA6+cNs44JU9OPCLJ1ztRcgYbFK92tVv+BIxEalrxxuFgKF6dZWw2jjCI1vCargMoJGZr7Gh8BMhdPHz/HgX7mNu9/7Uf3aFz/PE3/2J8LeDbCKzvcgH6dztlVyRTaGIs8IrceHlSrgb0nEpCAObfLJKSfQBipvk7Z6NIJoGd/3kD72/l/knrc/RrZxjP3Wc6nyBDvC6phSbOpvDYQm4jUkucQ6gqxaKjRtAaRF1JD7uBgri1ateL70PyVKvOKtkvyRiNjOxelHH7+Hxywk4mMW/9cu/uOgrKUSUZPqwYBJBUoJSOsQSR4965M1fFPTBIPN17nctkQNHH37e/jtx36B1775Rf3cv/ynwvVrMMlh9wZQIyODzucLWe4vy5FP1lwiPmvAX31wS//WI/dxZx4xWlHEllE1w8WKhhm1BtpQEsWQm4gznlw0ZUPyBVFKWlfgM0c0Sm0tu1656C3/5HPP8MXryDVgJmDE4WxO21aJVa2YbByJ9EDEQ8qjtOqJFCDvHmZDvDUhWxHSl8a1lZ9uaTeCm092kHUe6DxShXJz02+9Xk67S8SD115oX1huV9ohK5abg0vzYdLTsfrDt/B9GerSEnPQEN21UZYuVavtWBUVpDtmIBgDBrxFYTNw63z87/xvdOPe9zDNt2giGGfIQpXcI+jyzwtYjThtMdrlypPvN08N+FnArSp4/+DbeNixHVhZfw4tLjclHFtU2u7WRJHOXSV9ns1rxuMxxhjmzZwYI8UoxzmHBA91BdUMq4ETWxNsM+XP/+yPefLTfyrsX4f5flJgxiYVTiMlbLEmWfLjW3nxE3BFgW9bwIIpksXCFHDuXr374cd48LF3c/TMHbi1dXbmNfMmkI3G2CynbjzBJ9cgY5cpjSMBYwwmc9T1HEjkokc/boRUzsDGrjF0niArWMY+3Nz8uFLB+0fdslDtHlYxHxzD/f9Xm6GAt3GRMIAoxKAdIbCICN77lB5XJFldnMNYSaR5tstRPBtW+dyf/hHP/v6/FuIcSoH9G2ncBt+5oS77I310K9/89KiHSNdZDnj0+ET/+gN3cP9WwbiArUwpdm+w6VpGhceKgVAgHrIuX3UTawJKxBJNTpCSPcm4HoRLZHzrynX+5ZfOyzZgR3B9niLfAxkC5AQCEd/fb4BcYdJ9nAOVkDyRMIt6FwXJ57JlaQVYMElSHEEyeCzF/8hK5ch+JOghN5/DA/GwWWv1p37/QwSBWwymZcuW23R817JuguzrX6w6XfUc92AkFT3DODg+BNA3X7hlcda+DdmBKyUL0Eqf3ETEVu/hZr/GAQMGvEVgMnATfvXv/F3dvPe9iWAEwWSCCxUqsSMYriMYHqdt52Ka3KqicOvVf8DPDH7UIG8Ao677/9K/fqmA6xRzC+EyHhgqouCioQ9ejNJrupdB4WVesLe/g0XY2FjDEdnZ2cG3Nfl4HW9HZFmOiw3N3jZFnHNqo6C+dolnvvUlvvp7/70w3wHfkMhFyjrZN+ktzi+SrJXnNLZMnX/7vfrQB36Jux9/H8XR01CsszNraKJQFAWZGJqqxkYYlQ7rDHVbEbwi1qBG8DGldVWBLMu6hACyULz2SSVUIBjt3KFWLF6LQWJWCOrSpapHcrfynQXsRx+/y/MflIcWlpSV8XtTH0azSOMcRZc1OYwuUt+WZYlgqaqGpm5xLqcoCgprME3N3tWLHFvLCbvX+LP/4Xe5/JXPCHEKsQL1y0yhLEVG/YsiGAhkeY5vAmMNnADGwAbo3Sfhvq0xp9dzTh+bcGR9g9KMMUFwoQVRooNoBUSog3Jte8Yzr1/mGy/v8NQcuQRMSaQimqU8b9wY71tyWgLg++orPhGMUdfACqgFcAtbVyIhJILR8Y1baNrNglysdmPav7OYrGZFOixQ9zisQTn8U88IDrtgHdouj+sNVqunPugXt7yH3s0qLibMxeG9e2rfscAtg+IP3YOsXCdlhO5T5a720DK71Wr/HTzdm5GYH22w3rrbV6/x0yA0XUcKy3HQnfvNRJ4Dw+EHkYuWyg1u2WcmvRBOl0+it+BF0vjvSkQdiKU5YIVbadj3HL4HyOetnizL7251b7dcTVfu6RbjLyUNWA7Z/v/CsiDm6qVWlQTwg3XxrZrY0+XejXD18wqV7pQdB4/9nhc98C4dfKLx0Kc3PVxYsdjGQz/2ODxWlvvd4rH/5cBkYCf82t/5uzq5/73Msw18EKwVRCuQiKdY8ZeOWHqC0WVXGawYb1kYFST2s16PgySjF9LU6Mp3S62wjRZR0wX+Jq20SheXKZEYAllmMQptU2M1kjuLdUIbLDOTE8RiYiCXQElA6n3yULGZC83OFb74Z3/E85/9hDDfA2lTO3zbBQmnVvfu3cs5tncvXnoI6GFF5E+mFxf99sMfc+i4W857K/vetIZZkAzygiP3P6zv+qWPcccj76Qt1tmOlsaW7LdCNpqkMgV1gw2B0jkcQvAVQkuMHozFWEsU8DGANZ2HSwqiNypdPeQuiJ/kYtRYJZhDblIdGVkSjFV3u9WVRVHTLNLJ/rA4PH4T8fj+47eHqAGf6ncYC6qRQEhRIyILkuHbVPvFuRyjjhhBoiSFvw+slRn1fJcszhiZmqe//nm+8se/J7zxKsQaQsCxjD/p18TDC8lBGfVW62Fc9ONBBfibQ1YvYnWRRCx9JhkOVqeAEbBRomtliRrFOMusqtifRZl5FhaFXiiq6GTgmxrSPfReiD6kmej16j2BOGAp0OXivmqguvnsh3zzuu0i0OUnEaT8A0mih7G89+U9mOU99scvhM64uPVAl/mpj94xo1QOM/putlupVroqVSmIWJbBLKYz6KULphqCHuk0jHblEm8mtCbBraCvzQtKn243sXLFyDIXszWdCbQXhg0pAwXpPle1QkEksWw9OGmnq/ofbV49DHFAlhqinajZpTFe9hL0y8SC6PWdsuiYzoSpuhQY+xMspFfTXWdFLLUKtgGFrTZjnRYDnAD9xTtzHnz0UX7/2Rf51DPXpTHQREPWtcFjutMsCfJCw8Piq2V7jYDYjuWnAdSPgohnNfe7GJaf+zzvK+8evQZHBOtKvO9EeInLsdftm8f0Lo+AkuX84tJ3ehKYGNhYh401GGWQW2FrbZ2tzfVFOsDFQr1CYoyCFZPGtRF8hLqJ7M3n7Mxrpo1nt265MYNLO3BDkRnLUdQAM5KVNJLeq4XSYBX9fXf/N2JQFYwG+tJQaYwsY6GsCMZGvA+Lobp4d40B011E2wPv6HIRvxXBWMZE9cU9e+L5lwKTXKR+5e/8XR0/8F4qt4F6xVkBTRYMLwVgsDG9v9H0AkMfRTfgrYzD/vOw6npyCN0CcVCDvFydliqxPgg4Hj4Us/K2pIK/LNyqhG5OiSAEnHpsbJg4z8UXnuKLn/h9pt/+qhBrMAHqOYWmtWIOkJXJbbD2oJGMiCGN9/7dP0Ay9GAbf3iszhPL+SHd8HKvA/PDgXUotcwYwAixTzkkpPtQTedf+IE5evcPwaKm4LZf+Rt697vfzz33PkClyrRqsEWJuoJ504LLV+61k2UWz+KgVBhX23zIsnmTy3ZnSYgk4V1WD75lP3GTu1265o83A62O35tdpw7h5mj077/PYaxYZ6yCC46mqcjGDq8zfJxyYiPnyvNP8Wf/8l8QvvOE0NY4avJOYmsAv7qIdIJCkvnSmFrI3QeWoggh1abr5fNVD6Jb4UCO1SAwO3R/BkmR/DGmzAqAra1YHxPTxHdF8OSAkMKiEM2bqFZ7YnFY49/9tzm8u968Tzj084F7WbnGrfETIBe3uvAPhIPayFQwpTenmaWWWbp0uhzk3aJLuS9VbpEuEXJPILoRoz4JM10auSQQhYXdwgJrkuaPsKJpdsARg07GUHYjxNC9OCv3G8Ty4o16UTJrlQJUqniF0LFBMVCFfk+HdAW4ijVLPZ/jw0FttlFNx66Yy+mEzQV5+mHV24ehEYw/RFzNoh+6qx0kFqxcV0n9G1PbxHTlHlUXzc5GOe28AYlkWQ6q+DYJnYVVGoVRC8doud+gH3jnnfzCPSe5I49UCntnj/H0M9e5EJPlLUMICOpyQvQcJsmrWvVIN4cIRNU0HrSfMZZ35ACTGXwMhBiWBS0BMpcGm6YMKn33C2BVce08JYgAshXNRj+OzuToVgkn1w0nNzY4tbHGibV1jkzW2CwNY6kwcY5ByARoA6GucChFlmNib1FKC+iqdkhQJKYCbhgh4ohqCVLSiqXF4E1GyDK8y2mN07224dreHpev3+DatOL5S3vcqJTr+8iuJoVI66EmKUZwaRIV2/HFIF2CDiGzI0zoRwgggrEQ1NMEj/jlHH4TIt2LvDKWup5bvmZy+McDMHzvyf2njk4IUBGCJD2H1eVt9WthlGShQ1hYM/oc8LzZYjzgLYEfSsDrBtSqDHbz0b2W9dbnPezkbPGdDOK69dPRGgEyvCqoofY1Z972OL951z1894uf1a/94b8Rrl2GIsOEfWLbBXt7D14BS1mUtPX0gFez6qH39Xu/3j8WzKE+Wsilh7YihhgjaMA6l4KO25DiTQTIRml9EwduBJkFk3P/u96rv/gbv8l5u0ncPMFVyWjaBrWO3OQYDNYoyyLGb/qkll+srmNv0ieLs6wqpL8nuVge9X13+xFwePx+z2v8IK6gP7C7aJfJ1CgYQbMM4zaYzz3XW8Ox+97B3/jPT/Lq176sX/4n/1C8t4jxxDgFYH3Tsre7Uux05e9A10v3zY9offteRRyATicdDxr/gwaCDwfcEZYNTR0Uh+qsPxT6auWEFYcSSQKVP/Ry9j6IAKN1w2y/IfctGRkZBQ0BjyVQEGKTLBvdIr9OCujfAo6Bns3g9Abcftsat586ydbGmDLLMLHFxIDtg4t6Zq599pD0nDOb62xec2M65cp0yuX9Ka9en/PKDbg0hcsglUIdepcUQ16uUbWgsaWe14l9FBkSDNq2nYCvlEaoYrtk0j2xiCm4Hk2iv/6oAkoX/yKRRcV4SwZknZ0kmSxvUhQpWHUIkRDi4vnZ0GmYxRCtENCOXKRj2rYiV9jojGdlA8eBD92Dfuy+d3HXxgaZ7FGEXca7Mwo1vPfocb4wRndm6ZEnz3WHD3Qvv0nPt+MZhwp39jx/OWFLXATIQcc/gaarotszXuOEGDUtmh35UoVcMjIxRFVKGk4Am6CdWyWn1uDuU2Puu+0Mp49s4aInk0hmQUzoqvI2qLmBDYoTQ/QNRKUwjkwM2ERqbIzYnmB3waBR080k2TTiOg2ihkSgkjXDJYucFapmhm/BG0M0GViHHzma00cJIVDcexd1ULabWi9PK17a3eHZSzs8cwUuaIoD3QWakAhHZm2nk7TUwQBZGn/Gg6lW2Bc4Z2nnoSN1XWE5VUyIOFqULknCQiNrDsyzPXFZjO+D3HXAgAE/AQgkZdNKOtFUjwCyrEBU2J7PKNXx6Ac+yt333K9f/LM/5fXPfVLmmkpHG7Fk1qEx0vqKqq4YjQrmc39A6WN1RTMs8ce0wK9oezrfc+1Try52igvZQvtjei0RoNJbGIDW44Css7S0AdpQw3gjVTku17nrIx/X9/zSxym3TnB57tk6ehv7dUtd1xhjcC6JlCGEFEtwqPDcgJ8gJGLybsy1NUYtxmfM6pqscKyvn+SBd3+Yo8dO6h/+g78v7e4lsGvg99nbCRhZ4X+kIdDLmgvqETv5YkXBn+S45f+/ZxO/t9P2cqBakoVCACtpsfQaMNahqsu/7gQ30Ys3G2dvYR6ShNGlxi89rIxFAI5EFj6fq9qOmDTt/fdZBnkUvFcshrzLwdVQMTKGECMFcMbC4+fQd5w9xZ0bY7aMcnKUkYeQ3IJiQGOL1UgmESOghwoJ9T7TSvJzdCQrSxCLugKf51SuZCYZe+RcmHqeePkC33zhCi/vIzsstcM14EsLLoNaoU0mupIMaGmpU1B+L+D3BCMYHAUAgRZdDPcf/gEkTfxqcH1KXRfphT8F65f933kDORaZ4HGOPrlIdw6LRwh4xCYDQAasWXAhxTjdv4m++96j/MKdx7g9MxxtLXY6Rf2UcaaUEpnh2C6P8m+eeY3/5qmZ7FuIATwZU0yy5WtvrQJ0tRxRv6As77Xf9G49fRaUKGBcV/1Tk1FMNPVLJrDukmuTb5fxIWec1XtOrvHOO0ecGQsn1rfYKkrGEbK2JWsbchRpG6wBTCAYxUtLa5KPqRqLakZoI6JKZh0ZBjRgonbEIU11vUayz2++MEOLJsIkXTXZmALj1GsXIDcmaCSGpGFXsYhdivHSthhjCC6jzUqmkrEdhKs+sh0sX3/hVV66vsdLV1Wuk1whunBPAoK3Y3yIYNo0TrKu4/v0amogLm1iloAjLeS9pTawTKHYY/UZLjLFHdIi/YhKpZ8cbAZmg4//F39XywfeQ5VtYOvkIqVURBMJFCnroE+s2neF0STa7+1OMGDATxuimH7t6C27ars6LSlovG1rJoXDSUTqKaVESgJ7Vy9z9fxLfPb/9/cErWB3D6KnNIoxkbn3K8pocyBtaSAulH6HvIR+yPazZC79XNMV4TWYFZEhXSSwQi5W5QlNdlO36q5EWmcYrYNa7v/lX9P3fPzXmeYT6mKNfPM4u3tznKYaFiKSArJFaNsWVV3UsBjwU4J0yn8DGg2qSpYVODG0zZzQzNga5RRxTn3tDf7Ff/t/h0uvCO0U2hohpBp3HW7tpdGvRD+aO98PTDB63OQxKeZNiUUfBf89T/gWJhi9gAus9IPraBykYiDxoJAYIflFppfXuZAEnG7SsBakSULsBDgKvGsL/dADd3L/iSOsa0MeKia5sDbO2J3voSbiTLoyGtAQMDEgGnDOdP6OnWvDIqCpiyPpig8RkhZZA8RgiGJpbc4ch07WqEdrXJjN+coLL/G1Z3c4P0f2gItAZSBTA+qwlCT7hcdTE6RdWhB6chUNGcm3u6X+0QkGB+foQxyuWyAcBwatJjK2iBHqnmFfEV7IAUeK5GjI8eQoBUnD//7j6K8+doKHTm5R+Bm2bZigrHuhCBHRFtWUl60mZ5cRLxSb/C9/7xm5nEHTQkOWfCidQONxKy++dm1a3NgBu2enWg8LyQ6T5cmC0C0+zoF0iRbWScRiHbjXoo/fUfLoHXdw19ZRRhqJ7QzN5ohJmSpcjNgQyGLSmmUC0uU0VxOIEgnq8dI7vzmyfJ3Yu/7G5PKkXQClRVI6yRV3h1W3m2CUufFgDUYUK30VX0VDREMkNwcnnEgiHiEEWjxuXOI1QiOIT+PKSIGYMcGU7AYL60e4ovDNV1/j8888x1PbyC7JsrGTQ9uv250fqwLBSCLOba8Z1c5C1hWgW7RoOb6EvqJN/8jiCsk4RBhXH/hfFgaCMeBnGR3BWAT/dpZGxXTV5yErcmazfbRtGOeOMnO42GJDoKCl3rnA7/6//5+E558SsYpt9iC2qXharyHWzv2KZHXV1TjJFc3wD99+Ds7varrr9FGzvXjXp7nolJXdsZ13DdYka0WaYxyuXMebAhrl6KPv0l/6jf+YI3fdz3Wv6GSda1XL9rzi1InTxP0pGSkTUowR7/2CXGRZRgjhcKsH/ISgRqn9nLW1NcQbmlmLMwVZltNqREWpmylrIwj719hygX/3D/8+O1/5gtDWWAlISBGIi1i+A+Pp5iQsB/ZbNOTN2/h9CYbhYGzFKsE4vCwIshAAbiIWy52+5/XecrjpQa0wRbnFPosQT5c01i6gPgl4pQUbErF49Dj6Sw+e43133sFmW7PhGybakseABI9v59ShhTJLAl/0qAasgDOSUqAZQz2vUtOkvzb02Z6jQOsD1hlKSe4trrOiWHGIcbRi2Pee3RhpygK2NtmJgadfeomvvrzPl15Pmcbq7vYbWaPSpHPJc0vd7N6sqYlgOwtGJPwYBGPpurIIjl/t7xXSt1RHKZJCrNMZsqTZN0DhUhBcVE9GInkZcC5DP/TQFh9+8Bx3Tgz5/lWy2Q3GBopig2q6j6vmlEbIs4yoQhMjLRmNLdk+eTv/q3/zTb60g1RAzEb4LmWi+LiIGemF0JuCsxYB3rIgF0mAVzJSMGLRLThCIhUPbKCP3HmMd955luMZnMqEtdCQzffJmpqJCHnumGuqZCqiCysCRGL0RA2L4ldCTPt0zsEiSZyuvUGsTcHaaFp3JVlJnRGaJkVj9UF9sJx3vIHKgjfJFJNsT4LRiEPoImKQGDolSMQYg7gurswadpo5iKVQS6kO11qsF7SxhCiQjZgaxz6G/SKj3Rixi/Ld117h669c4fOvJrLRT7y9Za49oCjoa1zHJVlYuNxlnb4xdmOrD35czq4HSMZiTuh823rr1V8GBoIx4GcZvfWz09CKpuBnFbOo3TJravJRSW4dTdMQmxqDkBtLoQ0T07JpPV/8g3/NN//NPxXCDGMaYggUpaOuPIuIx/59XQj8P4l7WPm/rsgGB2yiaWYSWvqEMasev31yCzPZIFaAGXH8XR/QX/4Pf4uNU2e5PvfUNqN1OY0Y8rU1EMv29Rusl0Uy2mrSpoukrEi9EseYm1TSA35CUKN4G3DGQA3iBaM5ISheDIxy8rHjjYuvcurYmHGYs9XO+dTv/g6v/MknhDAH9rBdJtfDlq3VDJA9FolK+r/vY4H7vgRjuePNB4hIygLU5fFdnKJzlxrw/WCS4IchVSNfCsop9/PBKSJgkmCB7Z56BNtiPGxFOAZ89CT66489zH1bBbp7mfUc0AY0mS1NdBgsTrI0EeAXVggx3VYDMQY0RLIso2/FkliYRZu8Mel4SFYPH4mhTYFXUYkoLi+JVqij4o0gRYFH2PPClcryhRcv8GcvzXg2pEKM3hjQDNSQ4zFdpZVAcgWlJzsL7c+POln3/dnjoGB3S7c+7clGOq4sSqp6iuCxJPehNeBsjt41gd/8wIPcVWYcMwE73caGOePcICZQ1S3IBCtK7lIAPq3Stkp0FpuPiSiXiwm/+8Y1/l+fv5H6p8hTbETvw9v1g/T3tBCt+/sQsALBI7oM8t/o2johxVG87ajw7vvu44HbTrJpFFftkfk5IxsoXEtmI0EaQqwJsUFaYRLWMOoWQb7BCt7Ezh2p08ZrGhsupsDwTAUTlGCgthBtN38EnyTOrjJvsqgkd8HkF909gv5RiBAlI5C0ZxJDGocaEZNGa9u2XRGnlNUsorQx4L0nxsionKQ+CxFiSoVojMEZhzGGpg2YzBGspfItDaA2CR9zMnbiiC8//zqfen7Kd2vkBsmNKjkWum6CjsReS7Tq7qdAyFbM0D3B8Ivht2qYXpBHWcZo3VTH5y8SA8EY8LOOnmT0FZk7Bp9IBmTjknnVEFCKPCXPb6oKorKeWWw9x7R7rLmGF5/4Kp/7V/9IuPpG8jxo5kuloZhugk7vrOve2R8nC1xnj07tZVU+EA6sbZquKQQsywyRgVQCQMZj1CtIQfHQO/X9H/8Nbn/gUaY4KNbZrwNiC4wxtHWqYVEWyYZftxWhi7Vwzi3m67Zt8d4vPg/4ySMYxVtPWzdk0bGWTSjtiKCGRqE2yjRUrB9ZY2/7EiMaxtWM087yzBf+nM/9478vhG3Qajk2+7n4gNt4Qk+NF7Ga3X4/MYIhC0FTv9/uSVMoMpjIviccUHZPMek9e0g8SDA6B6bu8afA5pwkHB4HPnhuXT/28P08slEy3rvKmt9nawJ1u4sXjxchWgtSAha8SQSid/GJyY/SyMHALPVhmat+US21d5cCnMHHiHRprazpnn2fftaY5JMZ0wSkmqpTilhMVjIXy2yyxVP7NX/89It86sW5XIgpm49Ihqh2Az0S6AorrhoePD+egLW4VXPo8yFrBqyYoVPy5uQqVVN2k3YBnCvQDz444f33neWetRJz7TLHRFkXwYVA9CEF3FmD2JJIThtbPLsIgRE5TgpaMfig2Nzw2rxi/+wD/Nf/8PN82yO142BhjFUT+YGqE0k7lxPJu+xhedfODeAo6MffvskDp7Y4d+wkI43k85o1lCK0SFOxVlh8mNPGOV5aggtEJwSnWG/YaMbYmBGN0IrSEGlFCU7BJk1W7/qURyHr8plnKngCtVO8jfSpEC1JA0avEcMeKHAEqSBRT/JsTO4HC8uI9q6aXWZ60z/N0An53fg26Tqh9V3C3u4R65Jsp/PFRbBiylWe2pXOPaLyOc1oi8t5yRM39vnU0y/zpVca2WdZY6Or/5tow+rYVSAeJBiLSV4PChD97oukt30dn7gyVv+iMRCMAT/j6OcWA4vkKYu3UUiuJs4kq3JI85FzLqXzbFoKoxhf4Zxnowhcf+kpPvV7/5z9b39D0LbL8riSVp108i60ehGq9aNAWKYLXQh/9ETG3GLtorOkpuY02GVq3dvv1nf/8se4//H3EUeb7ATBm5IGh8tGhDZiojK2GRIDsakRYzBFUrykWIB0k73lIs9zvP/R3ZcHfG8E01nvgVIt4iG2EWsyorPMfIPmhirUbKyN0KaiqOcczXLCtW1ee/KrfOEf/z+E2CVvVw9dtsnDrlE/qpvuzQTjBzhowE8KGciok8pr8POlsEja5m5M0wYspksx25CRagpsAr+8hn70vtt48N47yWnQ6Q5j2zK2geCnGAkgHiVpXZNvqUGxiEIeOq3pmxFLTZri1J6DFgzosvtAV0GVrsgRXZVMFnmibUwmaOkETKOJgYfCsNPUWLtGUxzhietT/uDJ5/jcJZWLJPmrbWGTAk/AE5kBrJmk8e4LrvwIEFIa3tavMHOXscz73bG8qEsrgUImBajBMWcMHAEePYZ++MGz/MLpoxzViqLZITfd4tIVfkIzbCiwMcf5DKMmTRK2ocn2ESKFd9iwrH6s0jB3jsthwj/91tP8k9dVrgsUutRCqRHaKCgWk4+Jvu3uwZPRpto1wCnQRzbgsbNjHrntBKc3SxxTrLaL/O9OI1no/HMVlnVqdFEpN5g02aS4iy7WvPtt1bpweByt5jLvOYI3esvUfsvx2Dsw9GKoWVRutRGy4LC3zA2oizbRPdtVF6P0WySYlj5LWh/YfivrIXRB4izHesQglBibE4NhLpapG/HK3POZ51/hs89OeR1kSiLMQToXUu0enjVpgMdu6paYiENMGQOMSXP+KskIdJn8+zz/P5YF78fEQDAG/AwjvcNJw241VbExkf4NI0o8VB18qc81mmITnThi9HhtsNRMpCFce4PvfPIPeOGTfyiEKVDjMsF3qZwkwmYxZlbPfmyCYbpwbiV21aBjkhElGa5jP3mq7Rbo3n4t4MawcYrbPvar+v4PfZRyY4P9pqZFIC9pVdDew0ItNprFfdvu3U19NLy/fxlQgbYjdVYjNqbn0v8WRZe1V7rR26/teYAyTnnhy7/PV/75PxTaNnk5VDOEwDiz1G19MKZzceHlWv79xu5gv/rLxCINUwuxThqGzgc9GjC2oGmVrFgj1jMcnpOd4vIU6N/60G28b2ON00b+/+z9abQtx3XfCf52RGTmGe7w5hEziIEgOIDzLIqi5nmyZNltuz0sl6u6u/yh3V3dXZ961erVq9eqWjW0y1Vyy652LdulklqzLEumJIuiSMqUSIEUScwEATy8ebjTOSczI2L3h4jMc+5974EEHoiLh3c31kG+e+65eXKIjNjD///fWH+Z1s8IOsNEJWgghoCzhu42R037Tk5S6J2oxeCii2/67qgLAytK1zEzu3oLfy8kdYzubzrHrpt8RMj4zzx9Z+c11DP2OYet12jqKR89eJwHv+u9vOmpr+tv/MU5nm0QLaBpaxTB2QGEGpoIZQG6XeXq5ZgCs5BO2kiOI9qQs8OSpJViiuoLk5rGWYVKa4akhnjf+fZ9PHB0lfv37+NA8IwnlxiHhqFpiNHTSKA1QrBmTrHR9CwnJ92nuoxk8l+GvhiFIBGvARcNJwrHO48e41dfOM2mdkuEpSHQic5aWgZ+QogtBam6VQD3L6Hvu+cQj9x2mDuGhgNaM/Y1rrlM27fCNDkI6BSNuu64GZqkkrMYycvOp0FrA62N25zy1G11cepJx9ctQyEv2InzIhhVRAWVtN1pnf7KvFS7Ix0o15ro5p/pdmmAuKClLxm2oMyDijk5Yvs++x4wMv8ygyH6GS56bFCKEFguKg6Ml7ntkbv48MOGT37lGf3zr2/xfIPMNPU9CTZB/UKbiZcud8uIuXpRJshW9OnSdfFI8hVirmJ0FbZdhEjt2Z7d1NZJrpuFOL2bpTqxha4ZbsT2PaZSYi1imGlq6qd2SMTRmBGDQyX3vudjDIZj/crv/aogBX62mROGgBU26gmFrdJa9gpNMUTjCDHNo6Jp3TDkvBipjZFXIagkwqCtIFooxhx79wf1vT/+14nj/QRrWWsDAYctHGIMEmMSwFBIHMUkO2EwCaoMe8HFrprZ1uhPJZKUXmOCbOtiwNE1grUEY2hNQp7c/rZ3MRhX+se/8AuC91CM0HZC3bYMBhWbdX01Too5yvebQfyuH2DsTN99s8/1Z/mqfvwNbh6kSa+YiLZocihCcPhgwA5o65qBKJVGygjfd5foD77rAcb1ZQ6tNkw314lNS2Uco6pIFYJgMaYihohRmx1+7asMc8iJYXGK6FwXo7Lw/tzBW5TbI+1yG8/HRBDpGqJ1hTVAkjKQZkc+mrS/MsJADFpEQr0OazXHR6v89G37ed/R/fzek8/prz02lYvAFaNgZikL0xqk0cwLeYWTnIAWFpwjNBHrU2dmp4JXEvSrKPC+xvpE2j4GPDBGv+OBVd5/352Yy2c5sVowtDXTyQZNMwFnmWFpak9RDTERyv56tmACTTnFRqhCxBKwzIiiGEnTQMyyVGI9GiLL2vKWE0c49Oen2ciUgRkGbwWGJePoMZOGfbFlBNxfoA+ddHzoLfezv4L9hVL6BpltQlMTjYHSITH1/YB5Bh92BJ258rVoXfYqmDQyur9NPIu5E9+Nn660Oq+ApHFUhBx4qsnj8mpSoHL1d0Max61rqXNA1n2XbKvjmnws22F+kLM+YT579oGU5E6n2z4/D8A6/LQh8TaMVbzzNNIQdAs73eCYG3PYjrn7vhP88J0F//ZLj+sfnAlyidQTputxJES0jUglqJVEwvd5PJc2R8DzM4nd31x1lfZsz/bslVh6ptI8J3Tr3/ZPdD930F9RQBxiC4IarDEQDLM24MoV9t37EPsP72f54LJ+7l/+vCAFw1JoZw2KYsoBs3beI+kVmZBl1FPSQyM4A1WGfbUx5ccCObgwFdgR5UMP67s//B0cv/9ttONDTL3DBqEoRpRi8KHBtwERhxVN3wEEE4kGvMyTeja6b6HR3Z59OyytuXntMmlcBhOx6jEa6LqmGzWZzJ8Cw7S1BFMwPnIbdy0NufKTM/3yL/2iYCKESIiwNWvnEOydFQxSgi18E99rr4Kx2xZmKbNhoBDB58yvw6SmJ2HCUJRKG+6y6N/46L2840DF/sl5bj845sLGBaJvcMZQWoPEGl8HJAilLcDIAnQl9a6w0eYAI+HfF5PGHcY75Ekl9lNuNumAKvMBnvaV9pOcx1QK7ki+3d/oQrZDAImGoZTUGzNa5ylHJRJb6q0z7DcjDuw7yvDeE9x/O/rf/8HTQoANVVQ8Ax0QCD3O/ZWZSen0ELFiScCxiKGlIsHQbOupgBMWfeddlg/cc4wH9485JDXL7TmGTgkXzjOJHuscy1WJmkQ6LssqVSs0V0hEUUkN1joStOa8gnR5afGISddfO3J29LTTK+xfOsJ77jN66skotTH4aFKKqp5St5EDwHfdv0/fcXSZN40ddyxZisk5hlNP1QrOWMQ5ohviW2jaiDVu22Law4G2ZaZy1+VcASOPjCiGxnaTWl50e0c+/2VMFZDOjVdylS4HGFbjPAtzjeBiDssjZ+tN6lKiBjWRxniCmTvcElNVwmQ2tWgmfvdjuCNzmgwDS8fRlZKDmDyeYg+NgPnx74R5GdHUdNQpVVWBWLRtYXoZE9a4c3yI5aLhtu98Fx9Za/UXP/1FvriOOOaikTMFP9PUY7Mg60bGpB35Ug7IjTgne7Zne5ZsZxVQJcOA53PGto/nqkbSOvQgFqMGVUPdekIIjKqK4eoh7nz7eyit0U/985+XWZw3he3FGm6UQyWatekN1HWfm+imhgZHsbSPdhZhvJ8Hv++H9C3v/wh2eZVQLjOdJOELa4q08tWetknk7OFwSNsmCfMoPl+a7t+K6cVO9vpd7JZZ7QJikxAm0K+3HdJA8ueU5IeQP+MxnNtqOVCs8Mh3fILpxpY+9W9+SyjHaJ2EARZJ39vtGmv1Ncxd9Yc7g9GXG5xep/KxF+NewzqHTSEEmOVcrcVRAENqHDBSePdRqz/0ngd5+4EBK1sXGWtDuDBj7By4EoeAb4lN0vW2hSWWShNzAJH5D0U0oIZCDUE8wXi8mROx4o5M9TWdPtLwchEqH3ExR8V5NHeOWdsp8+U4tstydxwMGwTjDaUM8M4zcyRicAEymeLPP8d9y0c4UAw5+SOP6H/3m1/kax65olAzwxZDmvaVQ6SsRsYU1KEm5Fi8IQUWy6Ru529ZRt99+xLvuesot68WlGGKNhfxYcZWq5TVYdrWIQQGVYXSUk8nIMpoUNH6mhxyzSXemD8PURYkC9XkoM+nzxqDaOoQ6+sZvl3jQw/ey7998kk2TcbrZ/GxEYns/+DRZT54/3EO+ssMti6xuuQJ0wlNHQixwNsxapfwWoJ6ylhj1ff8gmA62cK5Y22jSdWJ0FUoUpAajDJzmXS/YLLw7HfJrS5Asf1n8uKU8aHXQEblD84DWrp+GB3vRzVVXBaClJRhnIsMzGF8ubLRdzGP6byiS7ygHBwnKd1UwUiTdYb95XsnmiSKVUFQjHFoo6lJpBrEDYimQKsWY5RW16lcQXN5kwdGh/g//dBH+cxjz+knv/AsXyf1ginyuJsFaBQoOuA0fYVwe5DE3oS6Z3t2wzafI8zCz52YhGa+4mIAYKH3bdJ84iGkOcEYCy5VDGqEqCXV6BD3vuc78TX6mX/1/xWqCkKTXoMKptNrOG8v4/iFNB/6eeASyG3zTAVY2pll5W3v1o/+0I+zesfdrHmY+cTgWxqP0QDee0IbELFUg1GCf7WKSgGSGs1G0vxqO7BsN6fu2a5Y4g12ndq74MKQ0legWRo5Def5Ii2khCAC0Y6YEIkh8v7v/kG2rqzr6c/8e0EsuBJ8SOOrewR0Hrx+K4ndvQrGLluXPc6aN5SuAt9gaHqn8fveul8//uY7OSwzxldOs88EBq5gsrkFpcG4lH3XYHB2gCsTJGrma7wxvfPWJaULTc5SprURxcwJl5l7sQhv2Xa8C5NtJDliHYE2mMUAxWCDbCN79zh3yBWO9HlTltgqMG1rpnWNI7BaVayOSyYblzk6UvCB//wnP8g//cPP6KfPIVeAzXZ6Q9deAA01I+ZZKZOv+QfuWdH333OCtx0cc5gpw2YLvXQRCJTDEi3GTLVl0swwhcWJo9GkEoVJLbendYNxaa+do5quc8SFOQdBsZiY2+Xl69I57aYNDKuKUEY22y0eOHyIY6BnPUJl0sKiMMzn9PzXn+fKgZKhbiCzddZjSyVQ2gItS4Ip8uInCAXq6z6rFhcCi36wLC4gXak0T06i4KJJNGydk6+jLC7U87GySJzu4HKaiZQ7v6o/BjX9sUjXtXwBepcqcu6a43UnzCHxPrT/olT56I45vb1IiCNPxKoL16M/jjzJqiJFSaGGGCPNVo1XjxRQlIL3Lc7C4fGIzdkaYWOTj919hIcOL/Ppx7+hv/vsOqdznsGSvqtt0ve5agmf+9B011BfKhjbsz3bs5dlklfeFMDLjjkr884kpUUSL06xmoSnAQYizNRjqDEUWANiDIiljhHr9nF+a40HPvDdRFPq5/7VPxecJGWRWX1jFUgFiTHlW4S07pgywTzVgVSwcoAP/9TP6r1vezfraljXijga0vhUvV5b26B0SbJejGCMRaxBfaBpGlxZ0B2kjSTnVcjiLmYHH27PXlPLUHfoxmYKhhWbxEDyer0d4aRYTWGoIlCOqX1LlKQ4+b0//TP84qWzOn38UUm3toZ4de+UhXjjJW0vwNhFE0jNup0hqAERtCxo/ZQh8KYR+oNvXuWDdxzgDi5TbF6hwkAT2YqW8f4j1HWbHfeIiqDW0MTIrGmYNDXDlfG80GsUT0zYde3IYBbn7fY+A7KAWd9hnWoUJCf4ShX7AKJTIjJqerWCRevVd3osfqQtoGkmhIllMBgzGqwSQov3M9brSFEa6sllDo0PIrPL/L1PfIQDn/+y/vqTV0SBLVL295WaMykrvw+4f4S+7+5V3nn7Ye5cKdlnI+vnn8JUDnUFWg2JAWbeYaJDtSbaCVjFB4FoKMqSyi3jI0ybBjXdopXIVy56bFRclveIxhCwiBZZGi6gJqkI2QiVh0IjzhmGISLTGR+7w/LYc4FGNOP0YaJJ+vC5cxCrI5jiIGqWsFojWhOCpw2Btt7EMwFXYaxNPSv6q5E04U2GuM3vX8JieguNmwcPiczdjRPJWN0sI9vvsft1vEa2a3u/jqsd58WAgj6Q6QKPVJko0o995XQe4ITF/XU14wULRgnSbpOqTJ3Ak9JZF1N012EONZZeRWrWQFE6pLBIDFirOC0xBqxaHIEYDbP1hqJ03H5wxDRcwLlNvv+dh1k+foTf+dLT+syWyhawOkhkyzaAn826A8/kvZ3nc9Up7dme7dm3aKnV57zR3hxQktUWs5O2mACRXDWwKlhN87ioR22qRgdVoEjS3d6x6QOHD97Oucunufv93wnO6uf+5/9B7GiZsHHpho7fAgMl8QUVgsuZPlvCyiE4cYf+1b/zHzMzFZvDVaQaUdeR2TSCKxBxFCNLkeXEm7bGt+uJM2gdo5FJioS5AaF0TXy0opvvjfg9ovduWhbrUSTzGF1Xl8soiFTlSJBej1XFZgJ4EMckBIpyhA+e1iqtwo/+3F/jF/+HC+iLz4BK3zcL5lWLb3XZcSPoNfy70n9OUG6znYnMb/Yl3yrSagc5fdv7O8nHAZiQOuV6SGUf3eXBnTO6dv7P7BItTliaJ7Gd5MwEiLIypGUKBLReZwzcV6A/8947eN/BEYfbNZaaCWVsUXEEYxFj2ZzVFJIypz76pEMdQY1QDoYMxkvM2lnC3XXeXZYuMwqqkqTnMoG1Dym0O7aF07zWzVbwGRrVEXxFOocsk2IzQa7DBWadpER9EGhiTTGsGMSC2AZC3WKdQ01BjAleNBgUhNkGyzYQpsKPP3I/+0ZP6b9+9JKcBzbpSsNsH2gLA7UnQ5GywELK+h+O8P47jH7gwQd4YP8qh+MWo2adcvMipp1xcmlM3XhmtQfjkoqVWkQtpRR4MSgzxBQIqe/Lpp+mTI91hEysl1xSVhydalM6NgFxSHTbKk1GUtndCjSzKcXAMhCD35jy4Tc/xP/83JfZ8JM0+Zt0srOgPN4g31iPujoMuGiZtpY2GKwhdVwvUiDpfcQHn3qjkF19TTe6k2xdzNqrxMxTiL1Mbed4m368xB5SsBgsdAtz7AoIslhImC/q3f3ZPuC0/w5duKfds9ZB+CTOKyjXGKZ9tWgx+AlC4iBBX6kQmY+V9L3SH4pVtvWAMRiKIl2/tm0JocUaKKyDEKl9mxZlo1TFgEjL5MoFrFMOl8pQt/jON93DkdUVPvuXX9NPvzCVS9PAAHBFyTTDHhQl4LfPoWHhsi129e6v38K16a/KAv67O0XlpSfyPduzN7DlnMi2ZNhLehS5Uqu5iuHrNjWoNQneqhpTksYajBHEOS5vThmMVtmq17jjre/E/8zf1D/7xX8hlGNotrJog9m2Xi1KrKTfdetF8iNyb3BC7OCbFqQEO4AjJ3nwO79f3/fx7+HSJFAuHWDaRjYuT3DDIcPREm0MxBhpg+J9g4hinTAoSmL0xNCgEYTE7xB1/fmDgLp0pWQxn71nu2GLHPvkx3U4kxw6iyFqxIhBCfN1m0hlhVk9YakcEaPhyrRl5cAJfuiv/V39zf/q/5EKfKpobv76cpcLdxz4/vffpdXl5xmEADZV7yykZmiEPuMcBWyU3hHRfpV/ZSZAEaQnHC/itTvZyijZDQ8wq4Y8juX3Ht+USeEIwZJkSndpgAt0evSFJix131RLClJDNkPpLMFvUBaGYAJNqykQoABWaNoIMqOKkWXg7Svo3/vgXbxlNODgZJNBiCCO1lha6Ry2FiMBVQGTJjPQ3IQsoj4khwe2e2aLh69zmbmOHDS37df0WvUMAaqQlKCu6h0gEW+3f2s3VLpgw2pkIDZ1pdaISUUclAYT07XVqAlG5UDaCcvSMopTvu+Q4/b3rep/9adr8iIgQ8OlaUza/EK6E5oOXMTiasEitAiehpGD958c6H/6ntt4UwHTtRnVVmSpAh8arDWoFtS1AAWlyScZNwCH0QGowYqAljnLk66bEYNKi8RA0T8jcY4wEvCm+4WCNBnnP3+g0r0J6NjhY0vRwsAMaEzFwdGIo8CGh9ZE2pgC7yaPvc88+RzveucJyukmhSkw1oIxqDa58ZMBRlhTZa5Ccr47RzpNStvveuzUmXIguQij69SXkqMreUHaOVYMPR5UF8fF9nHZ0wWviQPqghHTy9l2xLbu3/MzWIhRFuYpu7BfsxBMzFVi0tzTXYNw1WFshwh2ik4COJukIkNIvCBxBqPpmVQiopHCFqBKbCMjbeDMV/nOlcO849138dDy8/rrX9vkSZCLbQOughjA+D7Bqm2aCyuGeDU00uT6+I5T7e5fn4HSnKRJgWKfEbnRRpV7tmc3q/Vz1lyKuzPRSDdF251zmWZYp4AWJaBoTHOGNalvRAgBMWCsEH2bnDwsW5S86QOfoB3s10f/xf8o2JYieBoxlKsrNBtbYAxFaCAmGEsQRzQuyVm3UyRGxuTAwlhmatJc4YYM3/V+/egP/iRLR+/gQmPRYoVJbUAd40FJEGjbei4fbzL0CUGDJsUpCpAsBJNnVxXJleOOr5mlMPaqF7tm6bbJtnc6ruK1aPeiMXkh4vrPW7/OSlnRtoFJqwzGh6kLS7vP856/+h/r5//FPxFcQeuvJIRCdnJHtqJp2yxTe/0x4N55GP3YvbdzYlayKtPU5DkIoqOkt6JJPtOb5AC54LKT1GXkXzkGT6CHWHQY9XQh0vsqEXUZWlLDBUoGmzM+/fgmM+8JJAf+9RBBd5WL7VWAuQnQtr5f/IvhiHaWyDmOlrE2jIEHKvTvf/f9PGiUpc3LDEJyxL04WiFhPyX0sKidJLRt3/ktOw5xR3BxjU9c5/fuOpf+W1GuW2y+tngOi8etKoljpIrgqUKktMryUCmrMT/5VvRffHlNLk0z2ckHTDVIpd0CCCkD3NWQigQAwnvYvDLjsGk5MN3Axwo00E4aCgcxRqwtIKQGgUYakga4JwULRXIs+8Bi29nnc7gWLKibGOgzZymrnntRdCpIJM3xqZ9QFIkMrwGMgbEzPHQcPXsaWY9pqk/ygcJWEJ4+dwkvxzE2lUW3f3PnkBtQy7WhS72LvnAj2PbOtStasn3bffabbL91u/Zfpuu5PbjY9lfXeQ5Stuf6R/HNZ5Udgcw1fr/zOegldNViCRypIptXnudAtY+P338bw6U1fverp/XPtpCzviYOCpp8CzsKSgqx3PwIFwLY1CeDhYxnF2cLQuLL9BLVL/8G7NmevbHsJQhN8k3QEV0Vs/t3srk/AyAx4END2zqssZhqjIxHHH3wEe754b+iz/z6L0gTZtjRKAUXVQHTGVFDXr4UVQ8xZ34RXGFp2xQKbKmD1aNgHW/5wR/Vt3/0u9iUATI+wOaFTaqySlVYQFQRjYjkZBmdOMa15m177fnvJebZPXvtbedd+GZjNv1Nus8GkOiRANYMsUVBExwbKlSrR7njoUe48JGP69c//TtCUYHOej9AY+xRRS9lrjwP+yczDkVYCoFAIMTkOGkAZwNRIt4kkqTzOc+a1W+uUh16OaYm8QYkZ2tl/r7N5ZE2epzA2AzQcsC+WWRA6mTs0ZeMnr7t1teLDLVEGp1nYF3WJVKg7Xsd5EBEoQ1C0hxeZ0DLPuBhg/4n3/8O7iwiw2YDUwhbNswhK+RMq0o/sb3RGZ/WzmNxkST/2rYt1lr2D0Z8/MGTXNj6iv76MxPpunFP6ybhUIOCb7Eu0kgi7C6T7tEmcHodeXEz6OGiYOxKrEbqpmY4qJjNIqUrephJzPtOalwdcf7GU79XlzfTbjVn19o2UJUDNAreB9CWSgJvu+conz19ls3u2BQka9Cd2qjl7OZU95uCQluy4DFRzBxH233hnu2aBTE0rqBxCQK1MoCP3nuCwysrHPzqM/p7p1s5M2txY4dvBZqkmmWxTNnKgWmqhjoWUi1C+ldWGgvRLMxN+VMdxGpvCOzZnr1y6x3ua4O9rbXE0FU0BCOWpvWs7t/Huz7yEaann9TTf/EZCZMJrigIk80e8951+S4tBPXEmFK6rVjaQQWtwuAAHDihP/W3/jbloSNcmkbGh1Y5ff4S4+UDPUFRVEkNXFMzNt1taPmevS7MlSUhpr5bViC0La1vqSwsHTrEu7/rE3z9ib+AC89B8JSl0MaWQNvLub+Umf0W9rmCfcYwbD1V0zAOgRWEsQaWorKsqSS3FFN34CWFZVXGpO0rfS0RGBMZ7XxJYERkIErpPWbWEKdbmGaG1NMef+hyQW/3zMxfxqDW9IgDi6egxUiLElCgKh0GSdlHH8FGKtuyBLxF0H/0Ex/mnhBYunKZcWxo/ZTWRmoXe7UmoybDOuRbqhK8EUxVERGccxhj8N5T1zXUUw76GT/1vnfxYIHeXoHTyNg6JCjGmzlZ13Q9Olokk3QvK3zuyRe4IkN8YlBQOkVIFaIQelBXL1WaMv+5M/qrcW6SITbayb92fn8eV2JBhKAxExFatNni/uOHWQUGCwUUH1PVowG++twZZm6QmtdJghF2vCDF5urRtasXe/bamCLMWo8bDDDGML18nmpyiUeOr/DDD9/JD5wQPQkMtzy2AWEIDGmIBIloxnXZ/DJ52+HKU0kjBRqe9EocqEyieeUNZPZsz/Zsm11/NbAuQY5UDCqGrWnNdFZTLO3jYz/9v4Fj9yjFCF+3jK1jZDv4ZapY+xAxsWVUFojJzXLsEpT7uPtj369/8x/+XygOnWRWLFEuH+Tc5Q1WDhyiaXPSNk/yJnM7urXmFnEf9uw6FsVgbIFXg29TH66BgTJzSdebFnf0CN/1c39dMSW4Me1MWR6MCERsId80P2VigBAmhHZCaGcQWqxJ6gBoi4aGGGo01Gicgp+hYZZIQKFGw+wVvwgzTDvD+AnWTzHtFPE1pm0wbYNtZ+wblIwKw0CgNEJlbb+YGnafYCT9/wuQ9AoLvysWeAiTxhOZVx9KbVgJcH+J/u9+9B0cb9Y53GyxUk8YhpbSJKWbtnOOF2aECG/46gWk4CKEkDJAOchwzmGtpRLlYJixfPFF/s8/8UEO1+gQ8GHGCIfTpAeeMUcgKaGTWt05WuCzT8JFHdMA0c+oikDwE4wxqYoAWU614xqk/fWN327k3Ojw8nOoTdd5U7JyhylK2hBpNYIFZwJmNuHksODefWiMILarZqXHPQJ/9sRlZtVSIvTjc4CUgosuiy2vg+fnVreIoKqUzjAshTC9SLz8HG9eVv7W+x/m7731mN4BrNKyOhwnyIQx2OGcwL0YYAjzKti2IMPGjJdNfBirLo+xG6hA79me3fLW8eg6kPT2VxOS+IoaSTDfosSUFR7LllqapSP87H/6fwVKGI6TnENgjnbIkMiV0ZBpM0HVJCL30mHe+w/+kX74x/4659uSMD5EHOxnrRGGq4fx0RDz1J4q4+l4eq7kwnbPbl2bNTEJz9jUO6owwrgqKaqSxghrxnHibY9w28e+VwkOqKhnSTo96DfPUJloE8E6mJhFCATjJLWFx4OLSO6OplaSf2VB+45bN/ayNuCMYo0ubCPGRqyBra11ptNNWl8To09EYNLr9eMa5YW6U/QR+sU8eChMwsiH7OANC0cVp6y0yn0O/T/86IPcPYJiegHTrHFgZcTapfOsDAa4uL1L8qJe/y0QX2Ct7aFR3ntijIgIIoJRj/NbHHWR29spf/c73sQSsCQAdQ7jUom6m0hrgRmApOj7OZAnLs9ojCXEBtQTfY3L39tZgqMsunCx5yHdiHX30/QTviQCc4YyGXE0Pik3YRQjkUpaVml5513jJB8XIx1DXkml9cca5HyjeAuJiJLy2xEHejVyeM9eexOF0hi09dAGBs5SFeDihGW/wW1mxvfefZS/89BJvR9UJmeAGqwnNLH3bXaOwh69pwtvGMDE/nOCYF+SgbJne7ZnL8uu4a2LSC/P7jUleWxZYcqKWTDMzJgNM+SH/4//meJhK5PFF0XiikHJxckUHS0nMve9D+pf/b//v/TY/W/nQuuQlcNcboTLU48dLLExmXLx0iVGo8FCEikrPonuBRV7lkyF1ivWOCpXIVEJ9YwQWyLgXcnEVpxv4cPf/+Nw6ARKRcAyGA0I30IF3DQFzGygNpHGQm0Cm1oz1YaZRGZGmVmlMUptA40JeRtpTLihV2sCrQQ8AS8tXloiIZfz0/sUFjsokUFJsFAbpaGTqtVdhxD3OeNFyIFJDejaheSgMYOUPbaW2E7YD7zVoX/3/Ye5n8Co3aQaRMzY8NyFFzh27Aj1lQ1GrWHUpua+JpNGO7jUrQCgVlWMMRhjtgUZqkr0DRobVlxkfOkMHzp2gO++22qlsGQNis9Ze4OEJLigLr1MjBiELeCzT56iKQdI4fBhhpH0nbJQMuoDOjULP786Tc+iZPItOYTpb2viKEUE6zKrRxuGNlBON3n49uOMyConGUYWSc/GFvCVF87RmHl/E3SxgqGZ7r5nu2UGpQiBQQQTPG3bos5RjYY4DfhzL3J8tsZPPXwXP/v2O7kXdD8tzoQ5v9uAl7l6XR9oLAYYncn87Xn9Y8/2bM9uzBbC++3KJbkSrrnJp2HmPU1IcNU2CjMPjQw58uDDPPjjP6UUI2blgGhSv2xnBkxnirohMVru/aEf17/9j/5vnN9soVrFDpcJbkCtFnEDmsZTFSXHjx1jY/0KfaV6m+Q4zGXp9uaAW9mcGyBSpB8kohpoQ0OrgQahUUeslmmqZT7+M39DsQVutJ+tyexbkncykBR6Uk/bkP4tEVM4huMRkEt1sn0Lc+namLvxvtytLuyjz8ozd+ZiHv9qk5PUaGTmQ09+Utnth2OeO+wzBRr6jGGXiG4CBJ/etGHGELgN9K998B4+evI44/Ur6GSNIC0TGxgfPsD5C5dYHi5ReRi0Jjf0mV+7WyG4AKjrGlXtoVGLL7GWiKetNzhcCsXaGX7mQ+/kvgptg0+az5nzogvVpYSYShKAU4TPn57J1A3Q0QAfFedS08AQOim+dCzdupHG3quT/dcFkYR+/9uI3+kMbFnRhIboa0qJmMk6J5aGnBygJWBjykyVRUlLCjC+9NwpalvgjeRnJfFHYsfBIO4FGbtoooIEwcTUO6N0BTEo02mq1i6PSoa6hVt7gR946AT/4Dvu417Q5RrGJQuVCUPA0eIInSCtmiwvxvZKhkQCkb3a1Z7t2bffOoiviGCKxN0LUYnGYIsSjKNaWuHMZsNbPvRxDn3guxQGeBniZURNBXYMh+/ko3//H+q7v+dHOTdVVg4exQdlUjc0IVBVFaqKNYAqm1cuMx5UV8HINS+Ayi0Cgdiz65pKSty2bUszq7FiKMcDymEFzqJiwVREGdIWY47c9yD73/EendUN4Hql85cyYz1UUuCCYIPkfxtoIrH1fQO1IoCLBhdN6tocpf/5lb5MhoGkgCJ1zpwnjef4YM2qOio2k5wWZTR3H0M87wgaQOM2/HNwJUgFtsSIoQQOAT/x1mXec3jIeO0K+9VQ5EBrYmBDA8V4mab2uCgUMTexy5OFmuw59HJzb1wrihRdhxBSJmiBk6EC0Vlaq0SZsSQzDm+e56ffe5QSwEUKFMGiVIiM+hRulZV2ppTMgM8/9QwXG89geYWm8cwmUwaDQR/0Srx6Qo7fhmsfRVPDpu6rQqSwjlldY53Dlpbga0ZEqmbCex48ygCyYHPC83sSDOxrZ2FWDNkMghQlISgxQlFUNO0Ma/cWmN02oxYnBTFCaD0lhlIsUS2tUVpXY1hjaeMbfPiA4x9++E7eO0Rt1+RbbHoZixYVgQJlwKgYpeZY1w0yOumJPduzPbsxu5YPMi8hdlWMGCNYhxqL15y4ip66bZDRfsL4CB//qb8Fh+4GswxuGWTA8psf0e/8a39fTz78ISZulbYc40Mg+BnOgZVIDDVOAo5AET2VFUyMWT0q9eLplBDjojjNnt3SplGwpqC0DtVI7WumocZrUsYptcTEgqkW+PEK7/+hH4bV/ZjhKlEdgsU5d9V+h8MhAGZRUSCRS9PWaOpFYWMinEp+z2SlG6tz3Hj6vLyCLblTbrd/k48hd5jWBFPpjsHGpKDUcTBeDxF4OoIOH9UJ1jNf0FWSAxA8A205BHzPfSP90L1HGdcXqWKN1dg384kIQSxBhIjd0WckZZxFc9O2Pf+AVsGWBbXM0LDJQT/hkUMrfOLhgRYeoMlAOkv0pi86ZT40gYI14HNPX2azHLEVDEU5oqoGCY6Vv8dwdcOlGzfpyXZJECjxOrqeMMpcunZxpBuNuBipQstDJw+zDCmgigHvPYFEZr8I8viZi9TVEm2QzF0xPewsxr089u6aIWpB1CL/pDm3mJrheQOtjYitGTYbHGiu8Oax5bvuWeX+Ch14EAlZozgmZTosEUPTRgpsUpxbDDLy5NnVrHdV5nvP9uwWN1cZZm3DVqvMZEDtVnjfz/5vlfFBsGMOvPtD+l0/8Te4/S3v5UJt2AwlUo5poyJGsz/gsRqwGiii5n8nSdo+KUni2sac0J0nc/eCjD2b+xchCwolxdIsQohjFpSZLXBHDvOmj3+vxhqsG/c9NSAlg7u2AnVdA93oUsHEeXDROfyd9ciSHAx00W9HSJU+SHj52xTECDZn6V1XGQmG0s+rHWVYeJ+Usd3t8CIpuMTc3Cr23Y0lgnjSwm4MaKBkyiqed6+gP/bOhzhRNoylJhpPa1K1xgVHGRwuOBRHa6HJr2Bij8/vSd+3uCkGjCMaw8wqaiOumXDMeb7ngbs4AEQCQVqM2HQ/QpGa2zGnzDTAFy4j57Rg0zu8uuyA+x6mJzn4JgcAr1b1wnSkbtL3BBPTS1KFyiqYmAJyMARJ/RMAyui55+ASR0FXILdeE4wraQWmwJ89fYGm3EejkuFikpsIWmL01zusPXsNTDF4KYlSpvk3hQYgPo8BUBxGHCKKCTVHRvCR+0/wA/evcj+w1MBcHDtu27el6DX1ryJ973Xg3bM9u2GLHXtuh+rK3EvKLMBtCVkyegNUI0XhELFoKKljyUPv/ggrH/yYjj7ynfrhn/w5ipN3M7MrFMNDqFbEYLFlQSQg+NRjSyNWPUZ9Cix0Do3qDi3sxRJ7ttOk4+fEXimzS2qLgvOKCYqIpTYWs7Kft3zgw3DkDhqfQFIdlDyEgDFZPib7GGYbD2Jhu/jqkl/b3u9+7h8hXva2i2+Sek5XpciVk1xVSQFIr7SYInPmD/BuBxmQj6Evqywcm4LEgNOaQ0TuAP3rH38Pq5PLjP0ME+skQ5ulbK1CGUzf3TyIyQFGRybWvldCV+15PVRxdstSgCcpWrYOOyhBW1i/zH2Dgo8eT7K1og1W5v0rjdgFf6vFA+vAV85doXYjvHd4nxTLOs5LV7UDBXl1Ggh0fMA59yIFFt5Eoskdw7cFlBmMlyGFRpVhu8GDh6EiO5IYgiTkbQP85SnYtKPkqGYIlfqAsTblr2/d4bPrFjEEI4RtamUxdwFOJepUyXVgHS0e325yZCR8173H+dlHDulhYCnAMHqELquROtcHQuLv8O2ovu3Znu3ZVfYy1mOjMGtqBqMhTlKQ4YoBlzZq3vuJ7+fjP/kzrNz1Js5OGs6tbeLKMWUxpG0DXsHkbLHkgKKrdi/GEZ2PNvfrUtBhiH3VfM9uVZsrjHXDtgt858gJJfoW5wzBK7Mg2KX9fPiHf0KxQ7Blr7YZY+xVPrufTci9FryNtAa8if0rZUtTqd5baI3m91OW1RudZ1xfyasnLL/EBegiLOl4DvMH4pu3+XhtLPt+vUpLapJjKICqbbijglXgP/q+hzkpEw5ZT9iaAAafnVhIsBcXIy532QymczaVkL1QycEYve7QrWwREwOxaXF2QBsFrQYYhSN1y4+//X6OAEPAxVkOa1OzIw+5tXEgAlMDn3nyIt6tYoolvI8Y0T4QScFuuuqaO6KaV2H4SZaMlYyHikYJJm0RTZmpGHMwaQgieLEEsRiNlJMrvPvu/Qu9EPLykheUUwE5MwmoLfpFpWtcuBdc7LJJqqNFCb3QhTemzzS6GKnUoi20psBXFVP1+OkV3uQC33/XUb7nGHo7qfnpQANQg6TgOOx0HnThtQeN2LM9u2HrmuelV5dUlG3JoySooTvey9WFaNBoCK1HYmA4HLBVz1g6dBgz3sfzF9ZYOXyMwWiJzc11rAErhq1Jgy3GKVkr85RrzC/FEcURxPSQFyB/eUjNZPc6be5ZH2TM/UsXOlpCxDjBa4M1oDES6kijBXe/+4Nw7KSSieKLXNnOVHuAf5x/2ULJBHI2bZve/7zs9mqYMsd9zV8pAJlLgaZXek+3r5O7aEpG3XQ/KCB9URQHLAOuhr/69lW9Z9BwwEyR2RrDcohv844kgaRTjJKc1/46G73qHiTp0m5iuXVNFEqByhYYHJNpwKtlOBxSbG1x/8oS7z6CrgJKkkAGCJqgRipgs2M3q+DRM8jlmVIOlhERVDvVM9NX1a7uOnBj1lXvuj0HE/HW95lsk6tWcwUrRzCpSiFEVh08cOIAFbmLM9KLIzSa1KSeePESYhxEpZOz9Rq39fnYs92wCKYGaXPCxaIkHeXc9iQFgiq00WDciKookekEu3GeQ3HCT73vHbz7UILIDUiQTbLkt4rp+/FcZX2QcWvPIXu2Z6/czDVeL2F9M7753xtT0jSR0hpCbJhM11net8zmdMbGtEGLkiamMraYiA81RWEZDpaom0Ds/Q171SuI7fmcQeapWdEuQfbGF4nZs5e22AkAZFfARunb1BmFaAPGCRo8ZRQcJWW1yhW1vO0HfhgQvPeISM+/0ExwNcZgErI7YrXLltKTg2ThfdHYE4fSVvO/9RW/yA3+GgOtJXMONFdQyNWSlL1frKx4yGCAXSYpdrBL6eaO1MwMY/tGOQeBdy2h3/3mOzgQr+A3z7I0HjDZqimLcf+gG7SHyASTAgpDwC422uv7IqQMhd7iQYYBCoWRc/gmYKTCB4OIJbQ15WyLT7zpNm7LLrcWPlea0jXzEawmHsKmT874U8+dofZJWUFE+kB6DmXaril+o8efxBXSz10Q3XMwFiBSCTZn+gWl42GMxLOvEG4rUdvttZPXJfXE+OrXX8Rj+8pF4l/slcZ33SRgmYLZSvOaOCRW2FDhQgK8TcQTBg7FInVgNZasYIhhQmyvcOeS47vf+iYeOYSOyEU5iaA+VcP6sDpbToQkNs6e7dme3ahdayadcy3m1W6jC3UGBYkGJwNCoxSlRampm03EpF5PVTFgZWmV9bU1tmbrlEND1BrVwKAYExqDUuQgwhHEoZQESoI4YvYRYhar1aycmJAgPiczX9NLtWevJ+sJwwmtFIWsGmuwmt5v1EMBJgRchCEFIgWXPNz7rvcwvP12AJqm2bZrY0ySZp7zH+bxd0f07h6Ibb9j7hQtDs4uEH6520VuVJR5daTvlbHADelfvKo5ZL6VDIRca7sANdj2nKoieIbAQdC/84mH2Te9wj717FsasraxnpoHlg4w/XVcJA6L5pIq25MM3UTx6vVhSLKo3ZekzOkCRW0HH4f8e9upfr0qR/HKTBR806JtJDYtS8MRGEergnOGkQ2857YD3EYSBcDk0FQBHKpzgR0AKeCrL1zm3CQSrGCd9pC8FPBmgrW6hc7bN34ec/7TolraHA8ZmffiMBlrC2mhomkwswn3nxxnudoWiBkik+Rqnzkf2RJLLel+GwOqAnq1vNzLt5eZxXvJ/bwan99+LB1X6ZqvV3ikr5b1lcqFZ7mbe/MsSxM8piwQA+2sBh8Y2IKyLKkKw9bZp3n/3Uf5nntPcDvomKQrkVQmmgzZTE4GuvAisqM13y1v167Kbx8zi5+df/5az8Ab6cVLbK++hp3s/LVeV//d4lpzvdfOv1hkfu6+vfQ88hJzokQKI2hoiTHx4pZWVticTLCmIPjIZGOT/fv3MxoMmM0mFEVKDm1tbFCWVf8di3zZ6x3F9rXqtZn9DFzt9F3ncwsjYcfrBlYVvf64VjEJDWB2+Df5lTL525PihtC/uvNZhKhdezzvmC/k9TV+e7vGBJi4qNkPiZGIsLE5pRqPYbjEQx/4mLJ0CCh6f9W59PkQU1CST1WIuXlGRJB0iUmK6aaH//QLlCQSItkFM3lwv5xtl0mzpN4Rksm0XdZWZd4Qai6HaxYGXDfsXuki2e0pH0xvV7MbuiU5bRecEzXYsqQJM4rlAe3aDKuREYl38b//zjs4OrnIkTIgITDxESkHBAfTOEvXW7oRnnbZEXrn37z9qERj/+sOy/lKTEVR00nrZglgtZCvceg4JX3mg94BNmpyxp1XLaP/SsxIUoUaGPD1DDGOJirWOqKfUIV1vvft8PlHYbOGSJuc7yjgKoLWKe0bDBsh8vkLgZ8eH2J5eo4yzCgZEiQyS5q3iFa5opDqSOElJvVvZuk5yHwbAVQoFkj+NoI3kn5HCrhdQjnNR0c0DDC8/Y5j/N7Xn+YKnhmWGECsMAmWM3h5an1dV5dKihiYTjYZjJaT/rreyCSXCcgqfXCs0o3N7qps33//XPXKWXl8q5lXAl/C+jkwf77fbxd0LTiBi+9f9wxk95rORTEYLUFz5SGnToR5n5/CFoR6BhiKEoI2hBiBkhACK0swffFrfP+Ru7D3tfw/nzzPpIW6AmKE6FAt6L7BELE2EpgRdyI2bklL40VzQst0XLeYArzSljSzmtFoxHQ6xQdPMSppfMrYFRRZ4e3mNFskJzXEFu/THNdBHUII2B0rYSd1LWIRMURt++SHIgsqNFkGtQ/kMwk5P+PzpFrnQm4fil0CLXHT0rhNic7kqYimucCk37zq1+Vbs7hjfomLv3npP83nF+OMqhQaHzBmwKyJGDPsfQIneV1TKGxJV3i2paA0V89v3XUjj2xNwjj5lwhmm/9yo9du53w79wXmmH7TeU7aeVCLCbPOp9Fr7KPbVfb2Okivzvul7YT57qzI7KzU9mM1+zbqDG1oMEBhLE4VfMDEiMlXq1t7yYiZeaNjS5AqX8+rr8O8atR5yaTGA4v8Tdm98StR+uChO1Bvkk/ZBasDWxJqj7gCVZIa5aDERqgD3PWBT/Dnf/rnytZjYuI6xoKaSAyA2Cw8g6RIC0gDQBcW8Pzz3NXfdpDxBreLD0jn6i9Gdt1E0suEdk72wv9vzBZrEld7I+aqf28fSgJEH8BY2s0Jrigom8gK8P33VXr70LAfpYoJ+2/E5ia7IWUtxOXF7Dp2ncXrRgKLxWMnulyRStLBJuZuowtf2032MQeBccER3M0YvIOIRe1ISgFwpI7nYDQwlJo7Di1xkE0ukyBDIbRAlTBSXRJfCyKRNVp5/NyaHjvgCD5kIYFIMKn5nfMp2Da5F8mNDsGdd9FE2Ta+Yv8d8wV38SutsZTA4aFlP+hZEDQgkjrGQsEEz1PnL/GW/YcYTNcobFKTSs/4jXmZ8+MDJIswLGB7FyttsmMx6kiRKnkC1n6POwL6+VbU9J9XFmBr/cLVTd6m/44dRzu3XQwugBSYQU60wLXuw3x+zM9gfz6ShQdqDg3GhMvnefcdx/jE5Ir+6qlWznhy1A1gsVTJOdQaHxr6xF6GTN26ZnJwYehp8RKxXcjnA3XdQpxinDAajRAnNKHFOYcJZmG8XWvEvp63MJ1t4ZzLcIbt5yGiOGv7z4LJzU4hxgSxERO3BQs2Su+cbEuNKRm6tz1x+M1y0yqvdymTG5lBtmMxYtZFBLY9k/0csG0y++bfe+3kyvVmmlfX+u/u5//5NvZJpXnAoNsCEzMX87lGwkiZBxJBt0utdwFHt9YoIY25hb1327SO5LUnRqJGfAQJARXJUvXzClrXN0TpJF3Nte8Ti7cq9j+/HukuO33Pbes5+ZhVrvpdug8OPzrAbW9/Ly888zRgCSESclIAmbtXt7B1V+Padv0HsZuIPaUd4Fsw1uHbmn0C9yn6Qw8/wH4mmOBo2tR92lqwGNoY8CEgsnu3wESLjS73YTD9w6wSEzTPzJ1aFVCjhBhRF/F9wLf7KdB0bF1Gi5wpIWXERTh+6AjHVzb11DrSAl7AGCFGncfOxkKMbAKPPvMU33HoMFEd3qQF03XzHdeN+XbFkt40HBgPuH0JntxM71tr8B5EDF7hsWfX+YE3nyCEwNgIbQh5Mr6RWS/mCliXNcspigWRgsXd90tIn7hI73aZyUXblu1c2HZOoMkhhqGb+OdMg5B/3r4wLB4B+Ti7xMXr6Ia+DBM1jBlQNwHdb7HR89Pve4THf+U/6CQg67473xYIGDVEGgyeoGCsEMPrcNV7De2b3XprLUtLI4xxNM2Mtm2JIRB9gy0sbZjmT74eAoaXH2BYJ1gX+8abiZuVnzATmPk6Vy3mr0Uno2v6CvM5MoqCdiIt+T1SxTyauFCdMNhAagbJ3PXVl5iWIoJhwel7nYcft4ztqDpshw8m6+fhhb5PUR2JyzpfD1Jy0Pb7nUOC87ZT4BLFurz+5wpIxy2UHHh0Gfo+B9ZXFFL1WuqIy9xEI5L9CAvWEI2j8YGYANbb+K7pCYlYcv+RvNM+8arzlHVcGM+pyrczRX1zmgJiHY+8+7288Nu/SmgqorapalY5QuP3Aoxk3Wy2PaOw+FvZse3MWqFpZ1RuleAnlMAS8Dc+dgfHdUYZZ8QYmQKCS1i+0E2ysvvDS+fdwlNTuXQNomiGu/gcs+duoGaumrXrTf8ku5gCbVYdk5iyj3m6gRgZFY43n9zPl9cvLwDPJEFE8scwaVMDT7y4yYSjLJsKb1KJtQrJIW1Mpyyl89LvLt5F7z3OKmMTuef4mN9/cisHVhaR7DgEeOYKTKRgnxgsSh0j2MRDuZH7J9tYLKR/L1RckqVg1PYfmV+zrr9Lv79rZIQWtypd9kp7DoztskTkyVwWoX3dd8yDZboqRwf5vEnNqGDaRKS74teolgv2b27wtz96H6c/9SR1Dd5Fgm9zF5T0bKukW3CrBxfXsznMIrKxtcnSaAykZ80WhtKmlpbBNzi3uISam2wLTgxISFV41cT9E0FEQQxlOT+/VL1QAopEJarmoD/ZYjI0cfvmPyfnK2Y49DybbTBITgYsuJhJweYqJzW9EcTOd/sqVPL37NtrycGWuZPdJ36uVdFOVYHY40W6Bsap6mUkbksc1a1HJWJEsKQA2CBgU2Uxxrgt+FkcLTakoNhiUJvQEG1UGg20rSficUWVAoseymX6reCz+FGGg+1MYNG5FtsrNgnkNx/tN68ZGu85cvw2jr317XrmC38sxhRobPuA7xYPMHbe3PnP25ZeSRFpv91W/E2yuQT64OI77jD6kTsO4U5/HWuFaB0iA8QpNtYQk76DzN3gXbEoEFzIuMIUUESTnBCTU/udypKhwxRmVGJG15hgd7301/ULASi1yy3kCStCnM146LaTjL52OavsgA8tkgO8qECIBAwz4JQiZzYbPTAe4okUIVKGkEjlAjHLJr8epoaIYo1QtVPuObof8+QWKITWp+7lUfHARZAzW7XeZgu0nRCjYjOu8pWaIV3frorQXZOwrULBAqfE9DJ4ommE1S7dv862cSwW7Ro8H1FwUTG6qPW+Hfvafc6o6QUTegk+6Ub5zWmiQMgOWunxzSXGreMDd97L9971nP7ys7WciWAqpaoTfrgG1AhoqtjdvGf/6pq5TiHbOYePAQ0tRWkpCgsSMERm0xnVcPl1VdF8OSYKoQ0QPKoJEmKcRRA05mAiaHYWuqRA/pwIYpQYQ89f6ZTtNEuidrCQTmrbRnDB9M+fyjxhswjc6b5puwvW7TsLFmT3zchekLGrdh3+5WJlSQF2BBPd+7HjgDKHGpptVWXb/14FWplXwKJAWQ1yv4VcfYuaxm5M60Bhi21H1e0tSgosYusxknqRRGNRC2JLnJD6pOdqfOoLAZbkB9iY5oBObTUd4Xw+Tenjbp2L9G0FtKtg5DXxdYICeSUWBaIXZsbwtg9/hDOPfpYYHWibEhZ7ECl4yZu7IwNzrWynRqiqAq1njGm5A/Sn3vcInH+eVdvSdIU0m6sEQZCQZX/Ndq7Da2+pQgEkYk5P+o65QjGX10uVG4M3ps8Q78TU74ZFk51aA+SH3cYkcxwVrBFM3XD3gVWOgJ7py0YZBqDkGTAFiq2BzQiPnTrL3W+5A/yMgoiNgmSCVqdm1mfZdinAUkkQDiNQhZqTq2OWgfMkuFKq0HgCSYL38dMXeNdtY8JsI/XFuE7F7uWY7RaFPIl2WZvFQCFdq47NksaPdCHsNQI1lRQMbONo9MpHczOSSPAmAbuJaIJd9HCquXX8rbSI2XQvYVsX7ZvNeg5SbFkaFFxZv8SJfbdz+tyz/Ojb3sypS3+hv7uObHjFGO0JoiHkpMh8ud2dE3hd2DybPgdKz+e1wXhEbD0RGFQF0+kmbTNjeWXIeLBKM22utdObxgqTnk+RxOeKAjEGfIioKoOqQlWS4l7ORqjMoYnezgOLRPDe+TxlnHp+/tIOLMq8n1WaH3I1WGIfMKRnfz63bLcuBLmVx+7r064Nhd3xGSHn8RO0VXIGt6tbwPa/TUHsvCoWJTn0YTLphQBsrl5YkxAKRoTYtPMj2lHJMGqoiiGqig+Btm0IBqJLjXiDRlyZ1ZE0HY1Vk1s5zM9Uc0+qCAs+Yx7DANqtkAsckG1r27d8aV9fpoKags264cQDD8PxO+CFJwEH6sHtBRhXTYd6vV9kx2hORJ0P/qZuGRuhivBz77qDO8OMIQ1iPGV0BFVmmrv1GhAVipgVHa6TOXstzJAi8XQ2qdSo+YE3MWsiB8kZhaTFb42hNambaOyzR7s7yXfY3nm2LCZCPaAhUpWGVW249yB89eIch2lI5xkBNemhaDRJu37huYYPv7ViJB6jqSOiydnvHu/5OvBNjXFo2zAyhn2lctsB9PlLc423gOIx1ES+9PVL/Myd+/AxYErbn8eNmGLzBGx7p74X+6CrbKTKj7dp8p4/YzErnOi2a6nEbZNvPwkvzMQmV5NSgCBZ2jemkndMpW8DfVIgSuodEiUFoxFBJclJ7/b4vRFrYqAaVtQbaxxb2cf62nnGxQonafnhh+/mLz/zdZ4L0DEF5okSAWNIch97Btde6KfTKTEmOdEYBd/WlM4wKguunDvLclFgb9LhE0zE08mUCyFafEhcQeMKBmWJbxrUZOWo/HdRlRglwUmqAm+S0yXMq5Rd1ZC+2pCeuTr/2CnxaBaG0Axgn3Ot9uzmMO3naFisXMyDhGs9HkkkRTHqs8BH7j4OqHiC5ARYl8TMu7X5GXUxYgmMLZgYICoSNGV8Y4b6aaQwlquJ5vknAd/OUElrlxWQssCUhlaVxkeCr3MAvAiNmsOeUnPUvA6Jyc0L57yR7moIac3aLp7DriUnXzUzBa2UhArue88H9MlT3xBoU4AR9wKMa9u3NMHlwapJZreIysMr6IfvOsrS5mnGI4efBgp1BO8JdkqwSQYtGgNqd52BIUpWLVIMhmAiMafkrUovR2ujI6ksGToB42hgtwEmkZSD7VVLcvZLVHJ2OhKbyHBocdNNblsdYS9OUh+InGsTUj7bWyDBkGmAxzfhipQMmOXseXLXbU50hm7e2+UJQlVp25rV0YAhLcf3jSguTXIjyg7zaWgl8vXz0NqSRg2VMfhwdb7x5VifsblOs8eY8bKLgUaU2M+pqbysfZWsx+rKfMFa3PZLly5+xxyeRUjBjem+KweZ8263kvvomFym9iwS8242iwLGWSZbM8bLI+rNCVEDS6VBN9Z45NgRPnr71/UPzyLfaKA2MHIVsYn4uZd3y9piNvR6QYItknQ7MRA0MihKxmPHuRdf5Pf/138Fk3XK2PDSZOrX5zbkRrbbJoEIWMtgZYWVffsxxlENBiwvr7Kyfx+rq6uMxksMqwGxqNhom9QgspMSzWqEXWCROkqb/qVI2uYqsmCzMlzMGe30++vBnvoARHWbI7dnu2PXuv6LkMFrBhcdpEihyImgINn5Fs1rhM8y3qFHJTgNqRm0RlyMOG0ZicdvbXLl8mUunDvP+TNnuXD+LGuXLhOnW3DuvFxdwZivQBw6pKwssXroCMdOnuDEHXdy+NhxRsMhJYI3joDN0DybgyDTV+tCXlti37AuV2FyVWNxXknrXQpC5oHGTZqdIFVugiq2HHClmfDAI+/iyd/+TQhNQsbEsBdgwLdQaBXpiWkistAK3RFj6nlxAPiZj76J/eEKy9rg24iXCktyfEsTaYyiGEI0aWLXhFfdPTNI7hiMthgVIgEximKJYnGupG6UqJJgNc4SRGljag40sFylRd1dn65z9LffdqyQCw5vWZbMpjVDV3H/yUOUzzxH8AlC5IzJt1VzNhcQgw+RKyBffO6Mft/x/RC2iM4QG48AhRi8hj5Vv3t30BC8sjxeYvPyWVaPLPGmowcYPTNhBkxyABiALYXzIBdnXpcGQ+qQsjt6Ax29VWBLPaZwOJeeBe9TF1rnHKVNyjQaIkjCYbsORBETZKdyBSGr1xhyudkaNKbnrNfpzs5EAjeFXu3GmTS5iwjGWtQJTYjUIaIaEDGoJkcGY/P9DhgRjLHE2N7YLdhVy71RqhLfBqwMsC7S1FMqVzFs1/gr73qEx3/ti/q8pEswbVoMBUYMcYfE457Ng9fFp0I1AXpijFijNJMJ+8Zj+OqXhPo8Tdii7w11s213WpannwGzLgvdY8a7tKyFlRVG+w7q8sHbOHjsJCfvuouDx47jlscEU1AbwVtHi8WLRW2JmgKMTQ5lSNcTtWhQXGEhCtEHqqrAWmG6tUlZlguSpylD3asX3sT49TeU9fXyztJ4idALAziT4LwhBHxTY61lUA4IWy3ODbDGMo0++UWFAQsaWnyYMS4sA4kU9ZQlwDQ1p59+hmce/zJPfuXPxa+dh8l0AX+U/3GVmmEXaCyUFy6cEc4pa08b1ozl8WigGDG+5z69+4GHuPfNb2X56EnceB9rdWTLN5jRElJU1E1EveCcw1poQksbGlxhqawjeg8S+qoLdIm0eQPfm98SgLGxJcPlAwzuuFdnT31J0BrYCzC2PRbXSoaIc2huQCRIeki6n6Nn5ByVj/zE28d6h50xjAHiFNUKpMJLVtkRj1XTZ29eD9hvxWAzSUrV4KXFikk9OlTwMTJrZ1TlCGsr2ralbSeIFaoCjBVCG65LFP52BxcmN33cjtnt7mN6L6ggRIa07B9YKuZl1hgjDpOET7XtF15P5Arw9IU19LYjqLE0ErBWMJoUVIwztApuF8ML0TRpt21LVVpCbLhzdcSIVIURNBE2SY96i+frF9Y5dnCA9S2lyDXH/LdqKmAKQxtb2jop6lTDEoPg64bJZEJVlKn0nLQEMTEFGIlQ6hLZXNIErX1myCSfRgz1bIZzFmsLVD1N60EDRZG6WfuYVZFioKkbGm3BGsqyxLmC4LMjQ8CJYMVBiETf0rZt33X05rVucbeoJgIygNAyDFMORcuPve84f/mnp5nlU1Uk91O5sfv/RrDFIo5h7nsYIWcnydDRDkGd+XN40AbCFoTN1/7AXwVL1dtrJ9h6Xw2b2RJ22/tcvMx07axMnnmaszi+KgKugEP72X/X3Xrn/Q9w4LbbOXLnPbTiaGlpvaGJqbJqxGJNiapjvLTCrJ4SiYyWltjYWKOpa44cOUQ9mSYoY3dfYNvRvlHctJvSRLfNH/Mmi/P7UhQFhpR4ambTJPs8GhJ9YGNznX2DpST9rEpRllij1L4mNDUDUQ4sD2iuXGLz7AucfvIJnnr0C0yeeELwTcLfmBbqrVzRkpQ4iWEH8XpHEjAfdIeo6h9tAaKDdoutr1yRv3ziq/zlv/ltyrvu0ze/5wO86e3v4vD+I6z7ms16ipiCpdEB1q5sEAyMVsc4KVnfWqdpZiwNKjQmtMRi1T0l0jRfwt33A2/EelU5cdjxCne9+WEee/prUIyg3tgLMK5vc7pRL8tqlOCT5nE3OTvvuatAf+DN93B0chpDSywAb7DW4aVGTURIAQaapvSYA43dVMCIErnSbmX+XcDYmDrZSkwZZCOUS0NmdY20LePKMTQWX28QZtNEwLMj5toM86Ci274aOP9vZh2xV2COsc9Yc9WAAUoaDo5XGJICjBT2LdCSOyy6JldiAnz1hQn1I5ZohFYFKQqY1TgDRhwm7n4G2BhH224xKhwSa+7ef4TDoOsgKpIco6yS4fF85blzPHL8PgZ+/YbvjagyrkraoPgmEGcz/LTBiqW0lqEb0E5Ttsra3Pk3CoFUEVOrzFqPcRYjCX/b+pDhEhasUgxHxBgJBJwrKKsBxEDTzphuTbHRMChKbFEgVnDiiFbxMbI13cwVkIjBEkINaigwOCOIsQR9faiBvVLrnMNUuk/UdSseQ6DQlqU45UP33sk7njitf3oZmbmYgrKYQGPd2rpn17YcFwNpTskACYymsB1p6dvJ3KTblxr/HScPIpJpiF3RU30LMkHEpd4BLXD6IpfPPi2X//Tfg7GwvJ/lN71J73v7Ozl5332s7D9IKMoUvJmItaucOfs8VVWxtLzMdDphaTDEra6ysbGRZYDjQvDXOWbpGIy8cXLBb0Rr6yneewrrGFYVGgKTjXWcgaWlFWZS0IpFgse0LUY9Iz+l1JaBtPzp7/4qT335z4jPPikQUvNQNkFnabx1lotsGunHtX0JjkPyeVI+Rkm5RWOgdAEfI60PEAKYKc3jfyGPPvU1Hv3kv9Hb3/ch3vHBD3Lb0eNM2pYrF09z9PBtbDYzLl++TLU8Zmm8wqyeMGuVAS4dVG4+m7yiOceQBQncm9FEUoWqjQLliDe95R089tu/hrHJu9oLMK5lfRdzUrVCoSgsMYQet++AAbAM/NT77+VIqFnxDVFqbFFBnZy64BwqShFjVsrQjElPAYxl94IMFYg2ggiFIePXY66wpKzoWtMi1mLFsNZ6jJ9Qac3QQVGVbHkA05dCX3tLmMauKhHyDeoIVEKR4DW0LFXC0KImpHeUhflHQ3rYY3I82xg4NUGuTGd6wBpiCJTWEeIUh82Biew6BlhDymB7lOAb9g9a7h3DN7aSCkYiJCgdY+bxMzCrRpSzKRrra6ozvRzbWk9OQGkKbFESvabgOlqMcbhiRDRC4xyNURqBWkM6XgS3sopXoW0Dk1nDNMyYNS0+Kqo+ZZJji2hkWJUsjwcMRxWmjJjKs6xQqxJDS9CGyglV5XDaIvUUQ6B0lsIKofW0TYMPMalvGZeC45t4gu9HsErCCfeckoDVwEBa3OQyP/O+h3jq336VS8A6DYJjN8F9r0fr6AjJj52vAb2MqqT5WzIOvIPNarcocJNtdT7/7Yw9rmWa0ac2+0zkcSYLQgECKYlmS4It0M1zbHzhnHzh0c/zhdESyw+8We97y0OcuPtexqtHmPgrnFw9TFTYXL+McwWika3pBOmhrmnbyWCbziPsf7c3jnfbFvlzi2aMYTwcIKq0dU3hDAf2rYBvWdtaYyqGqhwwKIRB9BTNjCunv8Hn/v3vc/Y//LEgHvwUJOP61+u0Y4GigrYLMvJi3rcTAHAQut/vOK65ymEa0yJAgDakxMsgQ4sjqbkw2sLZr8vzv32K5//sU7z1ox/Td33o4+w/cJyzF09TjoYcWhlxdv0K1WjMvpUV1q9spO723bXQpIT1RjHRSGEdTVBUYeYjq0dOwP7DxMvPA3YvwEh2DZjEjnHgrKVtczbcgs99L96zgn7w5EHKtRcYWMc01qmgbCBqagSXnBiHqMeRSK5N3+RrN/MvkWGRsLgSGjT43A/CEmxBcCXeFRTjZbwK9eYmw7JkeSBIvcXli5epVg9uq1os8i9eCzOa8lsumNzHIy+UCohZqFA0GAmsDMBuJXphC7T47FBo90eJZAjMCHzj/AVOHh9RdvA2k14SBdM1A9lFCyFSlBVtnACRcrrOW044/ujJrI6UVZa6IPZUA+tYlq1D2ylirjH2v0UTFYbVcir+tGC0oDQVUjh8sEzaSFuUTATWMVwhcq6d8eLmBqcuX+TCVuDpUzDxSNOmJodd276dV7VzIwQYAgdX0cMjy10DxwPHDnL38ePsKyzFdEK5NmWkhpEMoZ1iHIgNIBGLEEtDQySEmkpGbwD3JGY4XOyDZomJrWILRSZX+ODtD/JdR9DfOIcUFjzpOd+zq23Ryd4pQ200J0u14zEUIDcvjyfkoGonBbyzToikA8NoNJm3lUQS7PyDSTzDgA8B9VMI0+S9uQqcwPoFNj7/GfnC5z/HE8dPcuDkXfrBH/wxRoMCNY7YtkSGmMGQclgh5YCt6SzXjDpVuL2a281k1lpUU8XPWSE2UzZnGxTGMC4NAxsYDlo2zp7lP3zmT3ju03+ceBG+Bm1x1FgaoM1QX5ASvELrSXyNaCBkrJPkESx5dJodKnlXTfYGVVBrUxChKembngEPHUpBDBRD0CmcWufLv3FKnvzcp/UHfvY/YuXwbQTfst4qB8ZDooXNjTWsuL63x9zX87kj+Buj7mZI0v3OObz3hKLkxJvfqi9+6jkR3F6AcbW+tul/AykC1xgJTVpEnMyF90bAT7//foaXX2RcWZyUuNCAV4xNYz6KgKaUT+o8HAmmc4x31wTFe4/SYqJisBhbYeyQ2g7YtEOuqOPc5Zr1WUshwkgM462Wo+Mlbrv9KNONSxS6kMHaEWR8+0ne0svHBslwNpNUYUSzTokIITZonLE6TgFGC/2ElfOQqfYvQtQCKwWqEx57/hzvPH4njkRYTlLDlugVKxY0JgWJXTGDxWKNo46CMVBMN3ng+BHKJ1/s0okkJHX61zrImc1aTyCIdO++MlMc09YkSUHrwJR4HLNo2IyGDQuPPfciz61d4YmzDd8IyBYpkGjythVoOggKOQnmyiS/C8SmSUGSpjvV6ZE/s4YM1gIHCbivv0jFi5wEfeddQx658yT3HjiCKZSBn+HbCXWzlTpaF4ayLLASaTW8AXyVTjHNk7oip+A4mFzZC4FDZcnWxdP8yLsf4I/+zePMAmwQk3Os4Zt9wa1nOzKxizApAFHNAQbJcdAMc7iWtvLreZtrFpqriSxs+3MnBRnGmMxlSkIl6fIYnFN8SECqMC/qIDZdwkiEZgp1TXpyHYJh84Vn2Tz1vDz3xT/D3HWffux7vo/73/ou1n3N1sQTyiFrl9cYrKz2xxIxmFzFsDf9c/sGsDyGYob57CwEGyK+aXPtXLGilNYgtkBiwDRbtGun+fTn/oRTf/LHwtYGaMAOCmxdE5tNRuKI2tJRJSJJpKiPihuYe1KGXpAgaopCen8uixpEs+3ZTpB1Mu7PITZiTOJtqk+ZeWtANRJnWzmQLojrNbPNifzKL/x3fMeP/BW94+GHGdsCyhFTiUynDYVL4717nPpme8S87a7hzWs+tBgB5ypMgGAK7n/r23nxj38Xo7IXYMztWoHGApksah9Y+JCi3PfevarvOLhMceoMdukgm3VgRIV6T1M0RFdgQpHHswOS7r6NWeZ0l8eWImCEqCXGCrYcEd2AS7PIE5dqntya8m+/dIZvtMgGc0LgAHjncfRnP/wI91Ow39eJtJuz4YtBxrfbJGcIUrdok3otAJ1OtaJpwlAIbcP+1WXk3AaKImIImmUPMxkLmwJK1ZIIPP0C1O+LjAViULAOtQadJVKz3+V7aK1Nyk0m9SgZ4jm+cpBB94HsL9gMCZsBz1+4yNsPLuEyof+VmjeGONzPJo7LbcuprS0eu3CJx85u8Ph55HSbvq8L5oRU9XPZqYGkyIWN+CRlDmrQNhKkWcCeKKhJUKxCMBpp6pZa4XnymDRwJiJfeXbKrzz7FPeW6P1H4ROPPMCRquLAsKJsh0gzw9YBFwWnQrCyy80uX7l1uPRO8hOJlDHJJrYmdcYdxIjRhs36PPccv5uPHEN/7wyyIaSVM5i5V3gLWz/7X2/BFyWlK5LSv1HSdctNUw2GeLNtSRX2uQpQvGZVPXXm1tw3JiJ5Po0amXULmaaLYsWABqKfP/OwGLL4tO7YIqeKJ8RvfFX+4Oef5E8eeIt+/Ed+ipP3PcxaMJh9K8xC3r0sHJ/Opa53s9Hpnm0XSVh8z+Q5xTnHuKpophtsrq9zYHnM6tISTz35Nb78qU9y5TO/I8zWQQJu4PBNTdhMq5J1sOHnPEdBcHaIBkmd51XwcQr4fpy5/A+9xpzWvRf78WIYVAVN2xKjoiTFw7b7U4HByDGbpGMwxlDYkqb1JMGfEn/2ef7on/1jeehHflTf/30/wLm182zGgv0HjrG5FfIDYPKzkMZvkkrP/cZk10EQr9xEkRCS39c1dHOOYydvT1XLdroXYKTLsiO42DYrZpKoSUFuECgU7rTwo+96CC4/z/H9y1yYTanrmnGRnHXvG4y1WI2Imjyhy8J3xR7ze6PWNYEBcu8BzYtG/m41iNrkvEn6TOxKh2pRhYkpaMyAc23Bl89e5A++fJavTJHLwAYwE0CEQpVC4Q/OIM/80hf1v/7hO1mKipXkxBrpvPWeHv9tta4aZDpyV28JYx5jQJwmEEmMrA6HFGykU89/IBZ6xc7+YfF44BmQNbei+3QD/AwxqSqTiI6vzTle3yJYmM1qzMDi1IKFYWEoyM5nABGHI+JJVYOz6y3xoGIN4E2P3U+ZlbkiVzKTm9RZvDgaY/HG0BhHbSs+//gLPHX2El89A6dA1oGJgTULsaKLq0mNORyzYHEYygyxCLEmZCSXkfSMaIfzMWlRSbFqqrYFH3u4lIpB3ZAQIlvaMrWemaZO7GsN8tTz8O+ff5wP3oZ+51vexL37VlnRgjDdYBQ8ZUpN5T4qicOgwBxrnxNlmquQ0F+n5NDr9R3S18xMPs6F+yZdJ/uILSwbly5z8OBBLmyt8aPve5gv/Ppfcl6hkZoOTsDCHNLtK10L5pghNQtTY16Fzc26Ol7bdnYftpobwakAjiCBKJ5OMrWrDtJLXdw82zR7dd5UV3rY/rOx+dMhTZAKEBfUg0yXoY0Q0/5kITlnEVRStTSSFd3EQGzSSwCdgZTUj31Bfuf5Z7nj/d+hb/3gxxgfu4MoFbUUBFzmF6UqRhqLsUcCmPnRpePtOAEwzxZDDxXdjlO4da1re9oHCv18di3o7MLV6haIhWu8TUVKUu+K0lrWL55hXBruO7afc88/w6/8L7/L2hc+L0zXoFljoLMEU5o0lDat6UEz6skkrQAjFt8oTQiZP2bQGHAIIh1aYX5/u7OYx585uMjjP/eip6knADgMpnD4GAiZU2QKYTbxWAfWFrS1p2mbPnnpmy1wQwhbfPU3flEunX9RP/yjP8Hq0Ts4t3EJa5cQLbb5efPlYrfXjVfHxChiFN82mBiRwmEGQ1heJVy+5QOMlPVWBJuXzDlhr1tkLYjSxoCYlJFdBn72zSv6cDjPkg1stg2FGIrK0ahHFJwtsv5/i+RskQG8dJe863l5Y1NcCh5MH2RE26DGE2xyHgrvKKiwTZUUfKygZaC1NaqBA24fpy5s0hxc5cLyIX7hM3/BJ5+YSiSdqyf7VgpEi+gQT8MVrTkL8sUnvqEnHzxK0OSXOzE0kxlLo2U0+jxL0C9cHcmpWwpuRKYtmFTUdzFSBDDBYG0HSytS1ttOCbEhoFhXUvopRb+HBIUImagOQNtmnypSA+eAz59pOLx/ytFBi59GYmMwZUWriprdw1Mmn0dxBVhvsCo0PuBWLIdX0OE6IgypoyekWjIW+MJjF/n7Dx3Dn79AYZaJalHrCSYgNlV8NERCiJTFgEYdUxmxUQx40QtfPn2Bzz75NF+5iNTk2CFvG8DHeUIjDaDugJNjHjAkql6c/18XnNbuXsSdycmUuew/pZGyrfNz5CGk4wj5OLZIfI3feAH50xee4uP3jfXjbzrBHYMRsbnMknhMNJQ4toJC5ZDSsTVdh9gydg6JBtFUiYxiMAJRWjB1Vrsyuxpk9A0KF0rxKWgIBOOZlIF2oCyJoZg03D4+wIdPOn3xlJfzIc5XYLG901aKxUrLVOcIgkRusvnZUZouwHoDWC++IXP3G1JwYWIkqtDgCMbQisGJAhOQJG0d3ogVoPz8Rv9NEihhp5Je3PbMBrL4x+I16if//J4lsXUVzFbDc//ul+TFr/wFH/vJn9Xb3vFBvrGxRbHvEF4cvmlxAZwGCmNptcsCK4t9PdJzkRr9LcKgjeSgsetldQurUJmMqEj/7kJOmwOyjjeQbLvs6/x+RgoaH7CFoyhLNra2AFgaDWgn60izybHVAdPzz/MHv/1Jnv7MHwnr5yG0GBNRbXsxqAip2e02CFNK7MY+kdeSAHkyXw0WBtzO0Xr91Tnu+CmiO6hUsVHQRBQPC2zy+V9qIqAXDpotzvzJ78if2pl+5Cd+jvHwKJPgGVUVW+szKgfGGTbqKSsHV1lf38Q5t6sqoq+GxZQFRIkUpSUGjxYlJx9+u5767GW5xQOMzvJkA/PFoiu1xYCxBuMCoYHVAu5U9IO3H+RAs4XFb4uc48Lf9g2BFh2pbZHrqzu4Ys6+dd9oiFRFwdbFTfYPl6jKIWuzjQypibiy5NJmQ3n4BM8Fwy/81mf5/QvI5hCaWSpRhq7Kp4B2AIGCYCJNbNHC4BGspslaRBKMSFMjtVdOIf6WzriXpSWk650w+skZSk5rdjlNlgcObVLuWpyVFrKWCe6Q9u1J1Ztn1xrikYLgryDYuQSvmdPBdscibVunRkYqmCiIdTiBk0cKxpstG7Gl6HOWMAXWG2QW0GJUIa0isUVMamrXRkMdFHUlMl7mQiw4s9Xw2OkLfOEb53n0EnKR5Ly3AlO9Tg2nq0LsON70q/hN6j4vfU1126fiNpKq0h1PqmBNMIwNzGLNrz25Jc+celK/9x37eeftBwmhYWltC7ZqRvv3sxEa6q0pw1GFtKkpoI1gYuqDYNTQSloAFxfB3cxFLUIUUqU0zucjiWw1NdXSgNi0lB7GdctHH3ozv3vqy8yATU0QGKxD1GF9S1BP6ALEq04uXWmB6/a/uZlsXoDJY1OSQ2rzfJ7UoiRnLS0BIfaVnySkcNNfhuudwLd0Yt/as/pSf2PzBy1QxAmTAP7UE3zyF/7fcvTDj+t3/MTPsVFv0eLQECkHQ0oK1q5cYTAeX2f/L73yXA3dulVtAXomHcJhrtQlMUHo+gaUC3OCiiH4wGhpCRHh8uXLjIcVw6pkun6ZQyNH3Jzx53/4ab72x5+EF54S/AzilCqVu/rk1DZ7yZsy96e+lXt3Q/iC63yB7hzzbUslSrQFz//JH8qnyqF+x8/8PZp2xsbl86wsHyQGT+sbRuNBll/u0pw3OeHbCFHJqI7UMDcay/LRY2DLW72CEeeZdXUYYlJ5Ugi9TKFHjMF7KBVWG/ix9x3k8MoIJs3ujw0JqASiWkJXppSUzRQtULUMBku0JrBZrxFLw2A0QKc1Hst0tMpZSv6nf/coX9hKeijtFEqTIncjJJUg67Jn1S2u6dEdDYaJUE128CVVMVK3ZY/JikzfzolcNPbcxQ4uIqS6pIiACNYWGHG0sct/5JlyZzZtwbpfPf/8KeTNt1PXQpXL7TEmqdPdBEilZvApMBCRpN4SI7Gpuf3gAeSpsySol+AMKRukKcg4szHl4BDa6VkOrCxjteTy5oxYLmP2HeL5WeBLpy/zh4+9wNObyPOTzKcDhsZQRCFo2FXnWg2ExU5huvAi9un3rZi6Ensin5sgX/rMZT5y32X9qUfeyvuHKxysWp6/dAa7XLBvPKSebLFkHXFSU4lBUbxpaUwgWmhtBGwise2ih5KSGcmZUkAkJj13wMYEffNRKcuKuNlQSYn3NQ8cP8F7jqG/fyZVoBrRVLkTcsY3oCSYfAiwWDbaluS7ZhC5Z3v2MkwBdUTjk8aGFaqqZFY3MFvj7Of+vfzGpcv6fT/7NzHlEna0Qus9GyFQrawSYuxhgb1i4Lbg4moIIGqudhJvQUv1VwtYgiwmK7KgBopF+qWxq2wEgSA2NVodGNY2L2FVOXloP/XaRczmjNuHjmf/4gt86nd/E3/q68L0CmibJDgbQ60RV1hCczOLTMR+/atVey7nC5/6lHzh8D363k/8GJcR6mYTVw2IEQosvgkUy2NCbCHqTV0INsbgvceKQyOpv5XAydtv4zGz1wejN82RcY8Ggq59AMGnJ2wIvG2Ifvz+E+j6OiEj+XbNyRLNeXb6MlVSdLCpDwGR2azl4L79XF7fYBo9K6N9tG1L8AYZr3KOIf/0dx/lz7aQNUCMYWgc3jeJgyeWGBViytYrTTrfTHTfv7yEzbwFyV2arWRceFTkGkqYuRjSncINWd+VG5J6lG7HXKYuvIojcU226jr7ojvK9i9hpy56mUajjVqcGGxuYCeyCNjZHTNYRJQg2gnuIr7l5IFVSs5igRolKpQCqoYpkW9cmXByVLD/yGEubG5QK8R9BzkzET7/xcf49DMznqiRS8CazB15IwVNkNTJmF1eqMUkzoyBDgO+DSYEdMoiQUomEmhCywT4g6eR06e+rOX7HuTBcUF57ATnzz/P0cqyf7zM6W+c4sShQ8Q2EkwkSCTYSDQpk52U4TqHZvcgch3BWzJHooNMCelZqFxBrFskKMPK4kPArF3iB9/zdj7/m48yEWgkB+XagZ6TMxZy/qXDuffxhOhecLFnN25qMLYghJhw9dZTtwq+TgO4KGDzHLMvfkZ+be2K/szf/U+gLFEpmIrgrYWYORlAzI06TI8cSJVqszDPi3YZ+pSZv7XDDJMgLmoSdzMnDiXPaSZzB0yGkgciKo6AwefukgbPaOhYLRxrp59h1Qjj2PCHv/RrfP1znxEmV1JgQUgM7K43Ew6/CNG8CS1dm4iSnOrYemR5PzoJfO03f01Onrhb73rkAzxx6izL5VFsaZlNGypXpb/vmm/crJb5BDFC4SwQUj80DIePnwB7q8vULkIAdA61ALDZdXdVgZ+1VApHgb/y7mWOzC5hnaXdaijs7uVwNRO5uy1aJoc7zptoNcBEI402rO5fBiKX1zYYrx7kEgN+8fNf5k82EplbimVmbQMxUCBZ76NM+47pYYikDplOk5rUweVlCia9wx59njN6idpv3xTeQdAMCSIumpwhp5omQ7K0rCrWCD4I69OE+ez4L9eb3/ogk9TV+/zGhMPlgNJHyu4zqrvO1ZKoqFGCRHBCIZahNdyxb5UhsCGgGlOGyoBGS03k+Wlga3ycrY2LFOMTPD8LfPqxZ/nUk4FnZ8iUNHaUxEGogiUEjyfB69oKTOWIm3H3YqwIvYxXdngX5SuDRKBNRDw1hPzZoS3YDBO+PEH+i089pn/tu+/lzW7AgSNH2ZxcYbKxyZHbTnBlOiEOUn8Vq4nYa1WwsSRomcjfuyZRnM8xYxdcoHcIUvUiomooEIJvGVqH8Q1DsRRb6zx0/Bjv2od+8goykzmwsiWgRvoHwGboSsexSWoKZIz+re2e7dmNm5GCGNq0hrkCaOdO52yCcwW+beHJR+VXf/6/0R/8W/+A8vDtLI9XOXtlwmgwQtUidIFGTCDBbcRu2FnZ6ODEu50g2nVT2xOzF5NyyZ/oBDUMioOenyQoDsFj24ahNEzXznFiueSFr/wFv/TL/1p48RsQawoLIj7BshudJ4WcS3KcC997M1qJ0KDIcIg2LbqxCVLC5hU++b/8c37k4D4OHjzOVpziimVEJAXVMSU+b3aqt8bsRRlBoyQJ/2gYj1dguLRYN7zFLd/pjiTaVSZ83VIaWAE+dlel7zl2CLd2noENRG2uu7vXyoJJTkaUhAm2EVwUbHSgDjus2GxmqZKggc3NTcb7D9GuHOI3/+Jr/N43kM0S1nFsqCOFFpayGCSfLZdx5ryDNPcPgbuG6HJVJaeG3NU6BxZGuaoHxrdjGklSnUrEEIzp+ySYTCg2zmSIlEOlYLNdzG1/88e7yzE8e/YKvhjRICkDlkFWuymiY0jVIqMQVFEjqA/YEFghcgg0KskplKSAFnE0wDc2G57XJZ42h/j5P36C//xXn5Z//eUgT3rkgoENazBLB7HFfgoGSBZCKI3QpSVivZPg+Rqb0j0ASDS9M5w4NvMgEl9DaLBliVIwCYEaRywKHg3If/3Jp+XLl7ZoB/sJccB4tI9J4/Ei1BYaC61N6kGiis2d4ztY4K6dvqTnPnaKcbmS0b1Qg/eRwhRYK9TNFpaGwyNHPP8i3/3OOxkA1qdbWmBToiCGJGHL/Fr2C4WwF1js2atm3rd0YitgwFkoDWUBLoJtWkZSQ9igefor8qv//H+kvXyWZuMyB1fGvQpSqsFl0RbZIbzQPxCdA53gPj2Z+ZY1sxBcCKJmYZssTa+piqui/V+5GKlCYFUiXD7Pcpzyx7/1S3zyn/yXwpmnMa6ldA3ip4hvKUUZ2Mx9jJCztzdt9aKzvgFlXafW4hHwnrK0cOrr8qnf+WUOLBWgDW2sGYzGhBAgxoTwuInPXyWJOCQ/L48ZSapx0VrYf+iWfrq2WZc0aTCkftv5kqljZIQ7QH/4oXsZbU0ZRminG7hCd3Wx1TxBRDIeMkIRI5VXXACIqIOWlsLBdGMdIyU63McfPHOKX3kqykXgYgCGY6JPEXVlKrbaKcZZvCYio+mkbzMMaQl4+OR+KgVtPELMPknEoinQ+DaffxdcQKcolZ2hGPOikhylREyzeAxbSWwIhcRLmF/MTAqfg146FEgAnnxxSlsu0cYUbKWeH7s/O9jejVbEGppmhviWcdty23iBv+7A+66oXfCV02v81lef5T/7lS/Ir5xCngcuAlseTDTYYGk3NwntJoEZmtriQQzYJvWzGHZ4wl22FOCmbXfvQgcfKkketGkJ7RYinsoZLMpa27JVwIsefuXfPctXn76Ic4fwU4dlCMEsTJCdMyJ0akvyOmA5Lx7B9mA3HWsMgDF4jYgDoaU0DdVsg7ccO8Q9S2hF7nFjuqtnwBTXuLf6urjfe/ZGsoArBCmKhMnzArNIW/fTFibCgBbiFnzjMfmNX/jHcOUcAz/BxbhtnYmQeYjz94zGlHDqg4wEDUqNz17Lc329WcZASuq0bUiVUBsNqCOIwxtDaw0+BxqinjI2jELNSjtlX7NBPP0Nfvmf/Lc8/Tu/IcQZaE1st2h8YLCUkpJRU8GiNJLqICHk5os3t3nyGhsNeChdmXTL6g2wDVf+/DPy5F98lsp4YvS0eIwriD5g3xB5GoO1BaqKjwmir9YwayPVsWN7AcYi+aubmMKCxpAToWiV77pjwJuXKgZtoLIlxIay3G0nUzJrxCHRpQyuppBDSE6/Rg8aKK1DigHV4WP85fk1/vlnz3AKuNL5TU0DRXr461iDq5iFkJVSWoyZz8QO2A88cOgAtqkJPknz2qSxdFXlYnESX7xaNx695x1IFqxb5Gx3kqihxcdAE4XaK1vtnKwcYvimD0AkBRinr0DrxrQZ+G5eJ09ODC0xhBRE5YMaiGG/Ndx9yM4DjBx9pbBvwLMT5Le+8LycBs5rwRoFNQUwwkmFxWTYTMhguTle2QLU0G7tbgYfurzl9pl62yG1ZOUBAyYQaNj0U2aERFaMiV/yrCL/62ee5WtXpoR9R9iYeZZGyxQBKk/iNMUicS9IXbJ3fu9umPRbzQpo2xVWxFmCRmoNFOMhwQTWr5zj+L4hVb3J+x/Yz0HJyZS+v0NXAZkH2f2Zdm8swkv3bM9ekaV1yrcztKnTILMFieOU+MCFmY9l60IKMp5/Qj79679IsXWZMtZYDclB7j6ouZKxY4AucjFu7cBiwSQghFSVjWDVYFSQaIk4WilpjKM1EMXjqBmEmpV2i33NJp//N7/Kb/2z/178018TwjTzLRLMTSysT7ITnqveIUSMBobkXk27eOqviknyD8rhEFpPaBuGxqJhCs0m1Bv88e/8OiMbcLRsTjcpxwPER6wxN70DLiKIMVk1ND9fxtKEyPItX8FQg0gia5oiz0sOZFgS8hMxji33gP7Eu97C8mQdvOCpGC6PqJsJu4ofVANaYEKFiy53s04TgZqApcU1DcOYehPo0jKPrU/5l5/5Os+BXF7EPmiNtBtkSjBNbOd4ExNpwxTrHMQEjzoA+raThyk1UDkLIaIxVTo0pqqHiF5jIk+eyavlmPaHLzDvtT7HowO4csAsKm60wtk66V9FMtfsOrbIwYjA81Pk3FQpxss0PmvpXKUB/9pb6qAOZVlQtzNEhMII7foljq+OE5pJF15AQ2QC1JIIfB261qC0zKh1SktNS0uLpyEQiH3WL2mtFRmXu5tTSEQJ+b+IZAK+JWfzI6A2ZUXbfDcLQUtoXZLZJRTUwbEOfAnk//OnT/LluqU8eizJLjaw3BiqtsSEikhFEAuSnKPdDDI6zpGN9EpukYShjhkSB0lGWgrHJMxoTaAYFbTtFpVOeeddt7Nf0QJoQlfBiFifrmMXYIeuNqS6MOWZN4CHsGe7bdKNMlVoYsoGY5gFmEYwLsuZBp9S7M0GW088Ko996t8xClPGpaGdrGEkMB4OmU6nYM22RNf2bhdzqNStbRGkRYxPwZwq1BEJFmdHRBkwjQqDAa0GDIGKGcs6oVw/y6//0/+GL/3WLwuXz0CcgtakFu5pTUiCEOlq12Eh6YESqRHa10WS5pWakts8CbSTaa6iR5o4A7okTYs+/lX5sz/6JJX1FIVhWk9YWR7TbE138ehfHVNVVIWmaRgOh32godZhh4NbPMCA1OhNzVz3XSNab4FzFKSmej/yrjs4TIOdblEUQ9QO2NjcwrndvXyJA5AUo2y0iBqCRLwNBNNiCKzYAusNM3WcU8cfPf8ifzpFNmzX9M/kSmmkxCOZHr2D8Y51htB6XEyok/ccsaz4GU5Dfyw7bXEC/7ZOIxk7qiI9vjaVfdO3psZrjoubk3QcHYf1OkGOLnxGSUnwLeD8JNDG3OBH5uXl3bb0kGtS87Ipuz4CDgzyA75wnskhTx29m1Tbzer+LeRKRX4k0quv6pmkHoLNr5JAsYDh3R0rHFiTif4a8SoEHEqJkWGqOJgq4WPFphaxEShgtDygsILFMjPCOvDlBvnFTz3KU2dPc+TECayCCyZVMLQkdccwiCqmB9vtnnVBRrekq0SCWYCJaNY6kQRzaG2Hp/a42HKisjxyV2qgNyigV98JHpMruYtnua1wccs7aHt2w5YHlHQcIhKpGGyGcyZZbZ+nmdIpxAlcepEvfer35MwzX8G1mxzet0Ssp0w2N9i3bx+TrVnuU7TdzC4/r68rE8VaJfoZvqlx1rI0GuEoqGtP07SMRktsbm4yHDiGTgnrF1l77nF+/Z/9Yy597c+FOAGdQqwTd0tjnizMwiKSvq5L2C3a7q+eN2h5Dky52JjHV0JUGIDWQ2h5+rOfxtZT1G9ixKdrOhzu2mG/aqamTxaHEBKZHyiHI1YPHNkLMJJUqZByeCRnW2HgCirgkSH6fW++g7LewBnJmUEhBMX2CPjdOnaDjamLt42pJFw7qF3MeMlI6YXKjbkQHM9Q8C++uCUvAuvBgFQpW5SDhq4dm+LnjnMmp1grOGAMrAIffOBulrShiOmz2r/mTmlni5PInIQqN9TFe3HfyZFKk1mQBVytRFSVgBBcyamLV/CA75/++Sle0yShjiIpwDh9ZUK7oLu72/AgIKsFaSKNiWBManJYiXJoeV7BMP025kDM0fTHn+5Q7ILKzovs/222vy9kOE1kN5eIdBgRF7u2ekm5PUpBlIpoSpAyjY2cGbWuxBmBGUzXZ8TQEKhpovbB5ONr8MTpFzl15TytEbwRlALUItEmjop2MLzdNOmf/36SN0k9K5j5sZm84EcMrUnOmkqkUM9qaHn/PbczIpFqu54CSsyZRjo1wrSv1/T89uwNbQvrRKpZxIW+24aAJUgSxO7mnVDPsBKwcQpnv84XP/XvKJtNbLPBwAQkeELbMloaUzf+Ojo9aW3c/ed39y34BucMIkrb1rRNkhotjGV5OKLZ3OTw8pjJhXO4ZpPm4il+47/8L2T9yUcFvwYyXUi05eCia1AUCohF8q3UZb4oOZWVtq+DJfSVWze0tJtdk9ZeV/WN0vkIAb7xrJx/5jFG4ilpIXqcu/lFXDXzEI0xiEYiIT3T1jJaXb3FZWoT6DP/24ImLOJykUjcq8CPvecu9od1mq0ruOVltmaJfTYsl1Bfb+NwvNbWadebBeciiiGY5CyoGOpguNzC1qHD/NKnv8yLwKwEtMpds/qWc8AC3noBUgPQNIElgRWF+wv0zgMjBnETuYaOc0eQ/3ZP3xHBSHKFRFNgkaRJk9JPHwCIJRQVz587RaeDIQZCjNsdpo7pPwe2E7WrgMALFzeJx/anzsc9nXh307giktQ9omIkQVZSQx/lwHCYJHWVuepRbjOY04aE/H5Piu5ePaxqAQQtGYcjYf6ZGHd1leiufprUNSudJEW1dFzpmA0tEiNFnZ74YX4p6WcHPHQEfeSOo7zj6DIPrVhYu0hroBNxhRRYpOaW6efdNFFQEUye5FWSopw3EDM8pIwpmNccKCqZrBkMLkaKzTXetH8fdzh0zSOFQCuaKllXfWGcV/12zA97tmcv23pe2OJK3DXvXFB4igImQFSCTzXEkYWJCWx86U/l2a++T2+772GGw300IdI0M0Yr+6nrmlS90wyZ7cb0NZoz3aIWIxSDghCF2WRG4QxlOUBRYjNlSSPx8gXuXBnypT/+fb7yL/8noVCoN7G0afXv1gIWtts0GlPj3f7XstD94Q0zh8T+/0oHT80S31FBax799B/xvXffT9M2VNWQrU7d8yY1yeu/iOJMEr5xxqKqTOs2CYXt9kHuupmA4NAoIA6nDcM2qSR94mSl775tH6ydxpbKTGqiS7oBVXT4qNk93y2LWJLMnzeRYAyRiKhBotCKY2YqrgyX+eSTp/j0KWTLAYXAlkdyW8EuGOgi77xr+jpfdiYqTdflQ/cdYqUM6GQK4q9yRRb5C50LuDPb37lmNxqExH5yS3vsHGUXsowrFrUFrbG8eGnSO4qRxA+5HkyqmzQ7yHkNnLm0idqDibwRu+h9dwOMKFkWOGg+ZEMblAplWDnGpODCxO5WerTvUu8I4rfD4RavZ5z3QRAiQZlnExfGxW4tEh0GdluW3WaJVRPSbZo2FBEGCgUpqOigj/sc+s57V7n38AEevu0uynoLu3mZgyK4jQmldcQYaI3JSr8+f2+kFUHFvCpVuBsxySu2ivYKOsEkNQ8TyX078nOC4I3tkyJWYeRrjhjhg29Z5alH12gLaGJM84DJbS90vmB2tzotnPIGchD27DW3hUSO5kSO7VeiHGCogAjYAa4U/GSCAk1QQpgCBX/ye7/Bz915JzIYYmLBeGmFK2trDEYjYttchfOXnEuPGRJ9y5oKzg6o25Rsk7LClA41Hp3V+OkGSyWsFMpnf/M3eOK3/n+CDTBdw2VYarjG85+Why6RBXSV0O6XO6fMm3UO6RJwWQBlZ3BBfo8QYCBsPPpnUn/vD2l5ZEBdDmh8pLA3cYQBWNsx9ZIZkxQWW+8xttgLMFQiGhugonIlNjSgcDfoj7zrTVSTKwzwVKtjLq9fZjQaJed90jBwA7yErEP/2ptBQVpUwBtLEIOoyaRPQ20qrlQjXrAlv/yFS7IJOZKoEAIlEZ8fjl5PSVLmv9QsLQdQlfz/2fvvL8my674X/Oxzzr03IjKzfLV3QHfDdMMDBAnQgw4kRSuJktYz0mjerJk1M29mzR8w/8b88tasx5mRRnrv6Y1ESjSiaCQSoAFIAATQ3TDtbXX5ShMR995z9p4fzrk3IrOqAQLV6Kxq5F6rKjIjIiOuOWab7/e7WeQO3veAfeSd91HLHGWBX8virq8Tb9WakRetHFABJL/KloiVDD+OvaicuzpMBY+mdn/m5Q0sb3r5Orx2ZZdUiM1mtt7L6VBMxXBieJ9XbVPDskgwqlml4sQG5vdy03FhwNP3mZvAmtc47OnrVQsbsNHFd6c4AmOZi0PfHNLBDSsZxI7aoCEHFA0wA+4Ce+ed8OgDd3LfXXdz58aEpluwGVvu0ivo8iq169n0NVf39jDvcL40ohIbnREVJbq8sXgOGyo33CvFnNH77DipFH05dYQkGTrIUPXIVU+nsCGCxSUffOB+pn97jatrbQlUDuR616pbg8rUYd//I7uNrag95ehdxyBjgEslFOcnaDJoFa08IhlpsFI1a+HFb8rTT3zRHv/ETzGtpuy1C7wPJDPkhmt8rjyvQwu/X02oWXYtvqoJs8CiXeCWHZuV53Q9wa5e4vf/5b/i9c/9mVAbzPfwwYhxDbmwr3pxEDZ7AyzD2+aar6psw4g8mG8S58gKyQlrF7z85Fd4350PshNbqo1jWB9va6ie94KlnGZPscuIGu/x3nP8+x4iVTInWX4lIX2OvWuUX3hsyns2E3JxG9c4eh+JPqKhw/ceFz3OecQfZqt3xdHRO2jDBAwmvaNOObMafcXLzvGv//oLnCfzCLbqTeaLlprsaOaycci69wKwgJSdMgWiBdDctXOC8kMPbHLXRMCWWFAsMWZEb5TMXfUKWBW+3ywbuB4D0TXJUNHIkJBMfhVSSmwv9rg8/qVbPfwd5rYBicDFLkqvZiklRHNJ8DDvPkA0pXIelFxRcx5xpTSjiePHKvxeP/qGOctig6eJJyAFO5uKzJyha7kn9p2jUOB3emPS3ltrLnf/NYOYu9dMyVW24/mfve8kvOuOGY89cBf3ntpiKqBdC7qgaveYUqQvt+d4XeKcY7cTnG9oplO6duhmG0dolDopKnOZUC9/l0H0vTp/BuU4Hcd/5l8xJhuCOpzkfjBeKYkIxZtSa6TqW840Wzyyhb22s8JMmq2oN+s4eCwjVjw3zmAe2ZH93cwBpd+K9CBxrBgPKoBBjA4FAtrnrLhKXvRdgJR6CMrn/vRPePRDP4jb2KBrW6bHt9hdLgnOIeKQkkLLkGJXqp63r2P35pjDNKCmhGZCdMput2CzgiCJvYvn+Zvf/Q+8/hefEWyJj0uEiJcMxwYgUUj5KxyDrUOg1tfGMSExrFt6/XtuM/NkoXQTXSXoYEzUWQh5s+yW4Bqe/uIX+NhP/iIiggaHxlxJvl3Nko4CMykWyAdZ+m22eeztFWDIqKUymO7Pbr7BjQyhInU9WGQK3A32k48/RHX5FY43DYuupTNjOt0g9hGXlGlTY7G7JeCcbvAXh9yPCFjNPDQ8tb3kj19EuhpiB91yyaZraHXBCtykYMOJBIzIIOWKCbQdU5S7wH7kvQ9TL7YxPydUgYMedvFb38LMUOlZIqvclzEQrBQnQpeU851xLSPzCd4RdbUojkPkWxzzwMNoU6DVwIYkKoFolkv4h2SqmhexgWfnBSeCOQNRToaKKT1LWAXUAKZIWR79CBwrnzm8heuXfl+u8dDYLvGtpXrtRlHcWlZx35w9uOGvcUGGCsrg8A6wrUnf4sgiBZvAgzPssfvv4AP33cWDJ6ec0I5JWtLokmrnIk5zlxsp1R9JkdnEs7ec00wDITh29lqqaspyuSRIzZCVG+Rf18Pkm73ztjZRVuPw2wXjVs5eR3Udh42VVLECbbP9xyfkAGMoyOQqRqTSnlm35P0PnOSzT1zJF7PLXzPUuZKR50zYDwk4ZITgkd3utr7mDoEtKx5gii2Vn2AqRCNHv04yrj2S14zlAl5+RuaXzll0M06cuo/Lu7s01aRwiRw2rHKurFdFdbH88pad7ptt15+BO7D/rq/t+yG9igPxiOTGb0nnTKvEPSc32X3pBf7y9/8t5z77XwRbMKGjItGS6LqiquHZt//vKxZ9CxjUfm7G7Xvt5Q1/WZlFBe+x2IMJO89+Q2j3rNo6zpX5nMmt0lDruzSNHc45vK8xq9DUE9WhqtS+fhsEGOOm6nDF/RiztMC+IOMGwYbXKdoZRo8nZz7/2089wJ2uY9r3BFNmEsCmpF7waoh1JD9HHJjUHN4u66ncJnHZMpUG84GlLYjNBOenXHUzfvOPnpS9CnYVcB6vkV4jHR51wsQb2itmqQQZuf3NvHSL8N5TxSWngJ96/CSPHPPUl3eotyqWyzkNYV8wMfz8RgHGm76cWACU5PqysGbViihgLkFaIPUJPvOVV9kFlkBMLeJCEb3o1ta+65drDwQJdJY3pmdeu8Z9Z8/g9DLEPZDqzT6j78jEQ4wRpw3OOVR7VBR1AbHIHZUwA+ZAJwFv2cF2TnNwwgqWMNj+kGAQdhxKwTAGdWS1EdW0728djlRqY8pKGNKHQNI+RzllNwplCYrDjHUwksnzV4DmUdmUx0D2gY8Dj4O96yy8651nuf+usxybTKlSi48LqnabCsVbzOctOsLact8UxXnHoldcvUWvSt9BCA0JKQpicXVNyh+LCZUN6853P6JN7LosalZxcmPS4IYmmrNjXmmr3DDQDQGFQa0rmGQSwdZaxnoblkxFxTCfqKzjNB0/+Oj9/A9PXBlvfqWBgC9BZYGwWL43Y1h5FGAc2XdtCvRr0BpGH3hIhCiQUjf+hUHujjk+EcAL9As++zv/P372//J/55Xdq0xlg2BCa4KKQ6lBOnAtzhRv07zfHSLE+WYtV2TK6ixDJj3rGTkY4c4ORczKirxGthPoUmS2OaWdX6LRXU41if7lb/LXv/tvOfeZPxRiT9bxSvQlsTAiFQrNwg6ugd8GOrk/qLg9r322Nb5Q4WJcDxdzkLSEUgl8zzee+hInP3KWmW8QvX3P3wHOB1QVdcJu3zGtpyRTJs6hMb4NAow3tIGJeoPBPzovObMhJCZknPbH7sDef9cW/eWXOTutSH3JAJhgWuM15ukrCXNaHNzDK2Mslj1NvUEbY+5MXQV2NbGsAr/7pa9yBZhbITNbGqlXw0LT97l0nOgRGSoAVSYyOyX1S06T8es//sj96NULbNWeNvbUvt632H+74OLNt3Wt2UxWlkFu2BwqCedqpNngmfMtVxiyrhG0KlCh/cc8HnpZJB2gpddHB1xrlYUFejVcShmic8i2X9GohNdFNvDUpGHKXvHTpWw9RallvZRtqxmz+hSuqyqYDd0RCudF95ewtFAoh7kXcMUZVVLMAgkuuEIOA23zFZfyv2ka70kwmEqGZA3z8zTYI3d43vvAQzx8aoN3TTqO2YLaCcIusncVVAmS8EKWSRlOsBzf/uMdvt2vVfFYGwi6+t9kfPebBYu6HiK+xmkSConcbvhOMQiqOMkJlgyJEnyBRkmBgugAHRQFSSPB1URJpgiJWew57irefRf2F5dyHKYoRsVKay3mYxAtS95tXNs/slvADuD17cAjq1l7QzMH3kOXx+W1cy/J9tVLVm3dTWOOvuuR4McKs5U5oDg8DrGAyWGDXG/O9lXfpTi6kuX0XXF6ZbXNHQgy8how37vGpjcaVSbtnC/+5Wd4+fN/UTpzp1IrzfcgjeT74RO+23Xw9nWsr7cM4ctBRhz3UmP4L5X0WQSLXLt0gTMp4SQVRcrb10wTqoozwfkK8wGLPcvlkr1r194+AcYKzmH7t701iMX6c6v6Rk9NzxZwGvi5Dz/CccvgkQhEl3srIIYQ1xwLf52z8pbbQMb1DnUdyRSnU6rZaf7i/DZ/8PSSPch+QcGWxMGRlvL3xcX0PpF0yUi8SwIpIi7DKn724YYHKs9sFpgv9wi1x5ndMi7GECB4cnbX06PAnnoud/DaIrvKEgCVUb/521mmA66SMrt7e+CO5c/4Vq3AD8mGkHo4u61jG/iBfWIrZ348e9eMf5Wb8MU3qPiV7Izm6ztAmwa1odXVLDNxzGIpjQQq52nTIkPvYqKPuW7ipMmQHiLOEjVQWQ4mjgFTwx7egvc/4HnvfXdw74ljbHkIfQf9VaZVDb0jxYilzMMIjtLFt5yv3aij/OGblCZ4+9em/Nu4/cpwR9eSJeJw5B4Yx9oBU56TJUNAYASSDA3KlLFviWjO5BZaYqfgi+LUcXV88sGzfO3cBRY1LEVZWI8rbkmSuIJPG7DeL+fIjuwwTABydr69cJEXn3+aex6/AyeZn+GCw0zQG2a9bv+xux/0lG2Qrc6VzmGvhxEoNVY7wLlEEyD0LbRznn7qS/zt7/yOML+W13wy2T6tfd8NsbPf77aOS9u3wa4galnSV3j11Vd5Fznr6/zhMfjeFCvNjXtNGZYuVtyExO722yHAWLuRBzOBspZ7kwNvz5uwA3oacufjH7+vsvecOonbfZ3ZZMqy28WcH7MoWQNfS0MRt3LGD8lUoGomLLsFfmIkhTYai3qL33vyCV4EGURhvJWYYVQKorwScKJEU9Z79jqyiG2jcF/AfuGjjyGXXmd2asbuQnMrBBlkeg/He1v1uRgqDeBEMxGNRKJim4YnXro4QMpHFZIB/pXW1fQGM1a3teB+tQSu13Z3UO5Gfem98Vac6N/BBhf0oE2qes1ZFcxyWGx2o7+UErTqapE8GGy4XBKPpTIg3mFDleBAJUVc7jfSxyWD6EgtRXc99cROaWxB7o+d4U/HgAc2sUfunHDfiRk/8OhDbNqSqS6ZpJawvECIS3xKqDjaxRR1Nd5BHTyVSK7U9T0xRprq+grTeiPIw1aRcbqqmhQhtPHYrofuuZLgyP9XJtSxKjK0uVt3X6Zj7tbNWMkaTjRXOsIYuCx9pPKJuldmqnz0rgf4t1ygN8BDTDkjNxYsBkzdWjuVIzuyQ7OYcOKoxNGmyHNPPsW97/oIhCkhDCIcuQ+Gmo3ZexXFiR/n3O1sRulzU1Keo69ryiDRu54pH6BUoFhs2dya0u/sMD//Kp/5//4LYb4HaviqIrVpf3LmBlWmI7uxDVuoW8/6OTh/7lXCwJU81CO8eRMRRBxJM+RaVfEYdVPhxG7/AGNUMCgTbD3d7MqEG4ihWf16cAqFrCyh1MD9YL/68Q8zvXaJEw04U6LzGXdtkhu3sZqwWMiKMoe8wyanLJdLZg2YE3R2jL949mX+/DyyHXKnesgLjnPFiTFXIo0CobBVcOYwvPeoKFWEu4BferzirrAk+I75dsd02rDs5ogIQQ5/COUSsCs0PsNZQuhIrqLfOMNf/fkXxtBJR89aCyTswGdx/doZy/hKBpd3FkQxohn94Igfqg2B7mADGEryowwuKSuoAKzU06wH60sVwZXu9BUD9yKjbzO0Bh8Z2d3547E0lIcz98I7UI0lIItEBWpwPgcR/RJs0VMBZ4AT5Ln3rgfg0fvPct+pk5xqGo47x0wUmV8hWMLFFtEOJ0qQCl/ViK9w5rHCA3IophE05bEZbgEFhm9hrsCanOV5mXkejFnH/c6Pjn8DgGRHIYrPuGtJJahoUWdobtyxig/V4ywgFnA6Q8zRVS1tdZVU9wSN1Knn4clp3gl2qUdyl0ayUoxl3ov2+akaaCnV3SM7skOxPCeqECDmvtDXnn8GrxGsx4dJhgCaA9FVFnlYvA5CtG4zUzL3Yvh5BHya3jDZNFQtVr3SlWlIXH7lGR7YnPE//ut/CXvbkHq8M7RdMvpUMn5IQQjkX9ar5d+/9sZroGRS3WrsqcHlK9kLkxu1Kb69zCwHrzmQcqhFHEbtHaTbnIOxjhkfO0qOpYpVaUpYZQBX6GmHo2dCVp/5+fef5b4AW5II3ZIosbSwEzyUztA2Zj9XocthLlBKskjVVHgSKg0Xw4Tf/sLTXAMW1Ij0eGzlBx/woIcf/RCAuECfOhClAT68if3Cex+BaxeYVUanStsnNjc22N7ezkpSt4g5gyyxmh3i3jmuuhlPXsnk7kwYLHffZXI0cOMVcnzOs96FdGcOEiosetTLWjXorbdv97Vi0FT1/ifWXy+HjwwN9bQEGUPwuSpbpCFzTdy/npoba/DOg1mfgzhZqRj5HpouSx9PyEHFe+4Te999Z/joA8c4IT1TX+VmeH2P6+bU0QiqTELAaQLxJFeRMJJF2s5QOgyHuS4zqcwQy0FV5bOyRepXKld6YOzfCubGSuJqHVllDAteWnTfrRMY1dqiOFKJo8wp6nJ1zhHXPtGNLsWgxWWFc+IBp5nIOYmRU23kw3fVfOncili7/r1DsiavqRW3QIR9ZN/npn1EBt3Dq5dFFztW1ydIWJ43bhVM7GuMedjlyzfBDnof1wunr/yd9eACwJsxlZ7jG4Hf+le/Ca8+K1jLpPbEbo4v0Kj9lVS39snDc7dvkPa9svWroqqEUlWy2MFyjmnK/B8ZVtTbzzIvUclKZIKvyj4TW0yN3WuXb+8AAwbZzBVGcAwy1hy/AfSTGBSmBgJq7uj7ngb7iccfob/wAidO1Mx35sQqCzR6C0V1Ii9gvZS/tzB+3WFNMBMDF3FOcDZlYVP+89Ov8OUloiGnQE0CkR5vrJqW2uq4rTRiDJbhGgsxcLmB2BmDn3/XBvfFnk57eqfUkw12dnbY2tg4iB4/FBOK3Ob4e95IDGi954svXeQ8SMvakJCcUdcDwcGNlkoTQc2BU5zCIoJ5h5qgyRUH8dYxsSETbiDK1rHN0SkccFGFisb4C5mbYwZWHNN1gKGQ3VI1gZhVu4Y/zZTvRBIlytqbDY7X4PfgLPCeLewj9834wH0PcN+xTSaqWNwjtVfxrqMyIShU0ajUU+d6CP3uHiqF7+IDGhzmM+zJiSKastysSJFqFkiKxoTGhLvFZQAzGXN91O3/Od+30ovDGCsew/ztQ1sgERkGNbzmNeCL2tTYcFvKffI9RgBpmZnil0aTFB8N2W35xDsf5V+de2IfmcdwRHwZE46II+E59G6TR/Z9bSutOvJYne9x6ZWXuXfrLswFkNxQD9G83gOj4s/bwDEeoE45UZ43+RUcfL9gxMG6RrCOab/g+a/+DZf/6s+E2EKAttvhWF2x6GJGRN5gj3sjSO6RXW+Dj7JuqpqrG7d2kf3bmpNAcrkf17AniSkWO+bXLt7eAcY+vmHBDB/M0A+u0P5IPIcaE7LU5S989D5OSUflIu1iyXRasVj2TKabhNZydt9AC645FVLk4JIeZiJEXaTtwKoTXNYZ//4LL7AL9FqYt9nrGiHTFGxmYNA1iOXCNIBn0Am/ewLvn2I/9NB92JXXCUGpJhN22yXTrU2uXr3KdDLNXVYPza7fIJxBco5OYB4aPv/NF7NEKxCqCSkNoUaxb5PVXoePJSsytwadKi4lagm3QJh1wCQv/85ga2NjVekrTXCcC6AH+lfIaiNRilJaIQIPYcngXq7iiAwvHBuu9fn5CXDvCeydpxyffO+jPDSbck9dMWuXNPM5ze55GhSVSKwMFT/2bXCSVeuxBGbUdV0Uj0CdjOTtZAqaqETRlHKzH6RgQgXn3UjkX09a3lIJzEKQPogDlwLJcyPhoQTRJmOjMKegDqJTkrNR1nZQj0kDPGotAFApvAwMLTLUlTT0yVhKjYaGLgr33/cOhCfy0lGC8DELWjpjpMLfOgowjuxWsEmY0EaF5R4XXnqOOx99HxYmN8gYrWfhb+8gYwWjdDh0hHFnK1wTGKVr87Mr6dpKe9i5zGf+9b8UtIVKYbEHRBZdHBNu4zqw/t0MK9Pte/3eChPJgjIia65GUVCU21xBChwh1KglUmqzT+Dy/hVIaLe8vQMMWGWdhTVcebHiZoHzuc9DcBAElssse2nw8ePY+08fZ9LPkaCo79npcqOtYEKVrJC7B7zZKhvgTPhee5dmVvobKM45QgiklEgpEWpHnxLN5kleX2zw+19+nhcN0Q1H2ks477JKp2TirpWLkh3OiKGgGTtnWpERc7nacccC+2effpim36OuMqSibxUqT6uRpm5ujTa+TlBNbE422N3dBpQw2+RKu2RZH+NvXn9G9vJwJ/UdGZhuxPjtPviAlSBtj9zx2gS8r2699XWfqo9hltZ0EPJPUWPp8UCW2e1L/a9A/6rK0/d9dtp9aWqFjpCnoUixQYYXngA7A7zzJHz4gQd57L57OTnxSDcn0OKWe/hlj9AhocdCorWSA7MKYl0OzVADcQPfID+XB20RSiwnU5UynKBZjlaENYYJNnaXX48uGOfroQcXDBjq1f3SosCBrLKQVdEZFy2BhbkiSwsalT5GJHgkBHyVSfxt6sqmJgRneQ0Z8kspYSnPeVfVpPoE1zTRpoZ68yQmJ3ji4mUefPC4vfTyNVm/TjY4ZOL2XcsjO7LDtja2eAKprrj4yotUQVikiJQ+RWKGE8XMjf1sbtf+F9/OBvgkZCdWzVgsF5w9fZK9a1epvFB5YRP4N//P/yETq7TNj5VisWztskIHDImmFVJk7drdAmvprWo6CKB4sDg+CXBLqlB+p9b3Pb4KWXbeGaYdYpG6crz+6ou3f4BxnR0sRUEOLiqXs/NdonYwTXAK+PQH3smDsxq3vIRJj2uq3IQsQWw7JhZGBaYhsMiOwQ2+7HtguUuix8zo+76U1nJU3LWR3glLq3hu6fjjF3dJwPaeMpkEFsuiIWUFey25ZjF0Qfbkp6IpPY46VHhTTir8ygcb7hUlWLsmaTs4GbeOqWZuzO7ubh7kvmK7S6TN0/zpk88wh9JCEVaF3e/uHEaEWbket4L06Y38vLG5Euz7d8M/7iJFr7AE6ZGuBByuAo1GbTBxWT62Jlcoznrs7g34offewUPHt7h/6wRbKkyXS2bdZaatESzLoSbfoy7S+9zUKvlYmsMFQlo5+1aqE8aQnRvUqVZ1lHVRv5HMKKx15V07vQPJhlvR0vo6MjYNXUHQUt/ikBW52wxVyUGGC2xtbNJqR9/39Mse54Q6+AwNE0/XdVluWx3mPGE6Q6qaeRe5sujQyQkuSuSFy9f4+jOf45kLyssgz0LeFBmq+AOhc/Behnl0m9f4j+y2t7wGlgTDYo+9S+cxS0SXqK4D8rjVXPp+MOeJfWJrY4Pd7WvM6oC1u2zWNU987rMsXnxWmF8B6cjSkDlxk2BMZAwJpVUPrUHcRI+Cizewg/uN2goJwMYWhuQ44zYOMjIcV0jRMGd4ARHDO/AaSVdvc4gUDJH1Wsv5UtL3o9MS8mvOoDQFm2jOvv7gPcE+cPcZNvtr7Cx2cMGIDtR5ggY8MmLnDErmI4NE3ir14iGgEJERTx5CwMxYpJ7oN7giU377yad5FmSOx2PZHXDg8ygmERh0rQfM6tC3ewGkaaBd7HKWxAdr7KcffZgT6RpiSi+5QZuxjhcfspiH7bopoa5odzq2ppt0llgmYac6yWe/9mw+NwZqa2kxZwHk+hLGjc7ElYDyYGB1K8kb2pi9P2gHIAByYEOwTPQTLDdM9KVPSvmwihJYJNhUeHSCffIdx/jwA/dx93RKFRd43WFjlpjVu2jqSdZCSKhKHrsp4jF8mYLRgxCILneablIkaCSV4ZQcJGdj+T8H9dkyD6GU+stxqg3kftbeBaxVLtbv3PXCgId3I3M1dHU860eSz1XBBC8+d0xNWb3M1BDxJO/YWVzDV47K53sZ1Kg6cJroYkeoZ1iYsggVO75iGTbZTvD85Ut849VrfPmZl7mUkCtkXo6S58tyWg5oma9xXitWDbeAIm29JiJwZEf2Fttq9pRAVyP9hXPiPCYuV/C9OqSsfYJbSZ6sp/pva9N965oVnqgiqAneV3ifkw2191Re6a68zhf+5D/CYhesy5DUqjhP5ZLEvCWMKYQVaJbVvn8UYDBWdQ/YGFBQ1koBxBNOnTE1ydX6t/Iwvwcm4rEUS5yU0+9eFNEezp+7BTRGb8KKLkQe8itm0/ocyVjtyucSIHC8gWYOD4L9woceZ7K4RlxexjnDhUDX5k29EUflVlnUJEWLqZQMXSG1iH1vHWwzI8ZICIGqqlBVUsoynOYn9LPjPPH6Hv/51bksJNCVBbPtepw/6P8PAZLuk7GvgK67SuOUUwr//Mfey/F2zoyYI2+BWBw+P6wvtv6Zh0Vyz7c7hFwaTyos+4RunODJC7s8t8h9QK7H2l4Hesf+DpPd7ftpFWwerq2pepSxOcCJxPYT4GH/0QqZeRPKzz7l353lDtqTBI8/2NjjD97NB+67izuCo9nZpp7POdYumQaFpqdtrzHfW9LFSFVVTOqaXqBNysT7HAxY0V43h5Ru03n8rcjJya0f2+p+rR+/K0GtcP2CvsIdyyGOyu/cVFYkwOEe5vnlMMtBn4ihLmDO5c3MB1wQbHeP2tfUPhBJ9D1EHxA3oXMVV1roqg1eWya+/MyrfO7pJ3i+Q/aAFujLY0ep0roinTh05CxBntn+65kPr39Lrs+RHdkbWkkyDApxgmK7uziXq7L78isZAL/Kvr/NbLW25+DCJBATNHVF3y7ZaGrod9msjb/+0l/BC98QiDTOk5zlnjdrHzTM+9ISdXXFDiaqvs/NsYKU3fhVMLWS9BJOnz2LikNc2JewuR3NkdE03mUYPpZJ3u3eNiz3bv8KRhGn2xdgeBuibkdEIKXsRRnUfZbJ/MmHpzx+apPm0mW8i2zOJnRidIuO2jk8hqkSnZBKN2/DZQdbBlm89S/+3lhd17RtW/DwBfJQHLm+mfJSW/MHX/ka28A1i8zCJn3MwZSOzmVkYF5Q1IGGTIQjU1O8KscMfv0dU/vQyU025wucKg5HEqULefGpB07KLbPAGG3fIb5ir+3oEGTzNH/6+a9wnkEtadAP2y+zdyMb8aYr/2q1gBQbQm6Y4QABAABJREFUHPdbyW54VkPn5jcwTw4oTpPP8y6wd58U3nXHSd730N3cd2KGLneY+oTMz5P6DgfUEw/OsWeRjiV+alQypUoKSTFNWVShEhZQIAml8ld6PwR1GZ43qk9pqRIOm1fpa1KIQ0PA4U3BDGelGy1hxFQP2UgTNwbG46U4kAhwhQNy2Mu7HlAZcCXLCoA5gvf0lrOJESOKkBBiHwnLyN2zk2jXspMiC98QN06wLTUvXl3yzJUdvvzCq7xwOfJqykpqGbSW58WAqTYczoXsqA2RtgmuCehyDu4A3Wq1lBx+fH1k379Wxp+xGp8VRkdi0S5Jk80RDpV7zZR1yBzQ5ecO6dDfDBsTSqzvR9lPWRG7cyWZpDSVozFl5+I5nvjcn0FqwXp6i5imFT+N7AurjRIT13+5HXj8PrX9q3exoaJe1lGgqH1lsNnpO+8h4ZFQQeq5nUehGYitEnqqESxx8dxroHp7Bxgj6egA0DzfxjzBHJnkRO1gqUiEd1bYz77/MSZXrzDzeYtVc8S2xyXPNDRIXJI0EqtALCVHMSGo4c2B9JgoKuF7Wmb13o8dEs0yYTOEQF3XbPuGz37jVb5wsciwCiysz8joqiZ13Tj4hYHs6zCMKEqy7GhUmtW0Hptiv/7J9+HPn2OrCaAViUTymvGZJTe8vznY4cbgIQSWXU/jJihKNZ1wYRn54otL2WOldLHS1DhgN1whbpz/HvyqW1egT9ce90vorh/x8HQAHt3APvX4Q7zj5EkeOjbjzgDVzhWOs6S+dgXrFwQP4iF5QZ2nV1i2kWXfgTescoSQQwKXHGIJE4/3jqip8AwYg/9V5c+N0ChwuTJRHIIcSLgivzicwcF74lZQNRu62Q5cIbc6UXkj7s1AWD5kL9lkbBY5VAadCSpkOWTxWZ431LhQk1wgqRFT4vk24sKMqxjPnr/KX7/wFZ48D6+A7ABzcoUiAuIDSu7O7YC6mdHGDhIELWyL4PKuESMWl6uYfKgMG6u+jlIdBRhHdrhW1u9EVpHzGJhy5col0h0nCKOT53CmJROfIb95T7v97XrBiny+hiC+omtbtupAaq8xreDzX/oc/QtPC7QgCSXlRqtlbXau6H4IeX105EkvOhKUR97cW3WSt7PJEHAI+MCdd92ThYduWT/i727OwIsjWWlhqYYX4/lnn4UMzL/NbT2bVkb7gBuUFfULolJZdqR/4gNneGg6xZ07h5t1LK2FWEMPjVXU6ul7xTeBhVc6l3ECITkazfKciJKcfs+hGH2fYQgDsds5x2Qywcw4d2WH//K1i1ws7/UOkmuhmZHmHaXFxaiTn69EwaAWvypZxUx6Hozwz3/0TqrlOY5vCN2lOcdmG8xtkSEsdIBh4kECTgWnjjhIAx+SmVuTJg0VyVV8/itPchFYUDFQvIdDzMPErRbM1ZM3MDe+vG63ggLR393e+GCnwA/fW/PpB6ccrxKNXqLpOui3aZoK55bUM0ffL0gxgWY+gAdmvsJNNvAyo++UftGiYriMH8ySqOiBTu9WAgvNgcUax+Igv0LWAyStVnyMslhbgTmMUCpx+zCvrOvDr9ktV3my9SBpeK5cEXMs+0SqBA01vfMszNhdLtnpWq6kis8+fZFvvL7Dc7tIRw4mEplX1QKTzZr5MgcRpKE9aIanLdt5jjID1NGTSLQxB2YzoKLimrWDiFfp7+6I6onmwFej5OKRHdmhmZNBLSFzEUy5du0ax+72kN7eTvB1EG1zGTa2BuPN/E3BUqRrd/jKX/8V9FmONjsJeRH2ZpnMnfLTkfIRQ5AxmK44jbl/+vevfVv/b0h6meUs3XSDO+++h6UL9JpGIv3taENO3yP0qngHznk8jmef+SaIvQ0CjGF4D81zbKhsDPAHpak9bReZKjx2AvvhR+7Hrl5goxaiRhRHHQKoUSUhxkjXdTQbs7E5j7NMmxqcUXuT9N+9ZaJnVqnKEBJvWqBYOUvpgsfVATVDndG7wLndns+/cplnI7IsV0GNMuuX5BpOTZIuj28dFqOiLEUAIoGejQi/9MGJvfvEBhu6JLYtm/WEvm+xai1j8T0MJA6SXdcx6SBjknn/ZDb6foHzPm8wfsqFXvhPT7bsAuYbSD37/be1oOI6W8HGUnFgR/1vy63nFFCnkDKX4LBtuGxZkMKNuuhQ9o1yiAOu31hBCgNwXDtOxB0mUXEx0TgQF6mco+0XYA41RXyWSLak9H2C3vDBo6lDzBOkLsWA3F0+70tSelGsr6B2PUF+zDIOocbw1tV55JI/FEr6eA5Z+92wgXmxPjetdPwzV5RmFCUycD5WDehW13Gof6zbcLz2hhPAxjLxfm5Sud5rmOb1ETxkDfN3ZGhDL0LvHdEFonji1pSlOLaj8trVPZ5+7WWefmnJi9twAeQysF0+NQShxVbZx+DZW3T5WHy5NimP4YAUTHAeFBHLFRTxCIZYRyQSLHdxr1kFJw7AAkOz0SM7ssO1ocSmKAbe0XdLZnWFLRTBk0RG6GQuxd2+sJT9tt/FFXLl14mSyFnyqplg/Q5TD/PXz2EvPpNLpqlUcMxGrsVgBlShote0VgFee/HIgJV8L1AW+NKIdrxm426VJeEnMzZP3sHCB9qUmN7G+ZmCZEYgN7X1UAnUJuhrrwgxvg0CjEIsyZtdnmw9AzfDMCKuyz0vTgH//MffyZnF64TCLUji8c4R+xYpkA0F3MaErk9UTooCThz9oDiUDhnEQL87c2Rogjql87mBn1dHUJjEzBvoJhXREgsirvLMl0vMneDZ6iT/8zfOMQQX3RBOlo6CgpH7cDrCxBGXERcg9QXXbseo6bgnzfm1d2E/9I672HSeiU3BEvO4YGtzljF1gNO6EN4LxhMybv4mfewhsMhws6xCIAWK4dWVrHauuiSXnZvscComiq8iadFT+xPM3TH+4tULfA1kG0CWSMHyD9Pc6Md7l2/oShXDyA7fyOkRUFO8CC5VQEcHEis1l7JTbTZo77z1Nl56K9UoGE8rKys5tCiPVcCUivnQDc8JlrLLPKsbrG0RTZhB5SuWiw5fT3Pp0+drntRlWEydoTvtCDPIW9O6A637iIAHBontf3ZwsvNQ0AK920/6HsQWpPznIfeGkD53Di1LmQ5BRmFh2b4NePhGZQhLVn0yMrcoB9I6BrgDATu5LLQV1cBlZRbnyOMnJYI5nMrYgVytgBJ9yNwJEknzueX+FFCLJ7QRFFrvaENgr2q4JoGrUnGVii8++zLPXdzm668u5VyfORSRFY9iqFIq0MUs8VuJw1RInZXzL5U4B+I9RsqOg7ncmd3VdMP1UYcRaemYOKFWX66alsRNXMFSkTKyjuzIDsGsVKJtZFvSAphSWaLuW0wDCUfnAskp3iK+SJtDLn7cvqFGEc7AoRZLVaGwDov0eGcJUaOSxJSWP/mT3wNixkDZ/uDkoBRK6steoezfKykFUb6/Yw2jJCItB3ZGxSrAiCAJCYZ1MVcvovGxH/5J02rGbkz4ZoJqN+5/t52J0ukC5x2Vr7B+SQjC9vlzcOUS9PO3QYAB4yKTLUvWprWpEiw3BPulx47bXS6x2bc0YQK9jpNs2ET3Z1cFpyttGmDt9ZvPXu9rYiVuf1Ow4qBpTCSNuGbCou+x6TG2wyb/7q+f4nUy92LMPKy86BX8PATiosNPM6erqqBvlco7NuKc9znsxx48ycOnT9K9foH5vOXUpCFseJbdXm5MCAzl1iEjm9ybBTcZZmiJ+sceAG5EvymrrPQAlRmtT0ynW+zsJl5X489fOMd5SvJ65F6sLg+DEzwS/sq1vhFMSnJlU9XG7HU+/0hKCdXDh9w4U3RwpsfrkvlHJmAFd5/fkYaXx+FrEUiaJZlLAzU1zdlty3ydoSqSP790IR3ujBzclr4ze6PycA7ybvy549+Mwekw//MEGOZyCVP2/914n/ezcnLVapWlH16xmMA7Kjx1XWHO0ZuSkpFSxCE4yaR3FaONidwlfaiiKOoF8QHnA/gceMxN2VOHr6dECyzEc1mN5y/u8sSrF/jiSz3Pd3l+b5M7yPfDuY4NHhW0X+MGgeARE4SVdHf2D6SM45yR9CE3R+qWpclWQbDnGb4EoFMr2hhudD4Sa707ZC07d2RHdiiWJ7RQlixzEAKTEKjESJZnQSrVXUfEnIFmvtft6tsB+6r6vqx1A2TUlXUvhEDq55Aii+3LnHvhWSEuVnvdug9ywy8ZHg9iB44M9lfAVy7EAMFOWMrkeV81pBi49x3vZq9P+M0JvdzW0W3eYV1JElv+V5nxynPPQ4pUbwsORmkBI6z6GqwPfucClUbeU2M/9dh9TJljMVcsgrg3dGLeCrOcMCSJRzTkDIRlR2ceChQhwcQFrDe2e0e48z6+/NwFPv96L0tyxkYpmXdbP/c83C3m3GQqYMm+hS3vqOJlHgR+5Yfv5N7jG8jenDomNqoqOxWxz7wP9sM8Cso1Ox0HIB/fjQ0QKDRk/WQbeC0OpGh5i8sQMhy2lsl2BkErNATmx7f4mxde40vnY5amVcCFfeNi+L7vtOpiawNqQgZLZcL9LUISFLvxil8yfNe5gSIl61ICOC1VGpfT9GbDhi2sGL23nhlCpBkDRDFDyKocQ3O4Qe4VyEGlDdGVI+Fw5kmSq5lgiGgJ2gRv0FRVhhV1ivVdloktkCxL4KTJDR4DdF6JVY9ZJKBUOGoE+kTsI1E8bdXQ1TXL4NkLG3zp5Ws8c/EKT794iZd2MzG7ZTWvhz4uRqnamEJsx8RiLLcoDZqSth5FZQ5a5UOGW8Zc0xQTtI9oHwkTiDH3KwnkZMyI3g6wG3sS1VjRW7v4q39HdmSHZesOsq1+8N6T0o32prIa3ubBxbczIa8VzrKqX3Bw8fVztOdezReqSKa+rS/CW2pD+mWwlAnxAojPQqZ33cvZ+x/kUtljB8L87W2S0QBiiBiVCN944itginPc7gHGkCUc2sqsd5vMj7UqW8Df+/Bx7nV7NCljMtt2h2Y2G+XeD8MUUMnOjk9VJmNLizojIrlxVjJm1YSdRYefHOO1OOW3/+Yldsh5xiw3GfDEwqoYASvjhZjMGpaLBM5R09Ek5Q7gH3zwjH3sHffTXLtAvDZns/KcqGra+R6pXzLZmrFIK617E8amW+Ub3oQAPN/DrBrkx98NoS9QtCGDPsBkHJrvuTmcTri6cFy9Y4M/fvZJLgFWgfRQmy9Z3BsoXYne0Hne974BuiNkbgy5Ela73EnZOcfQvPFWtb3FfPx5hH6VnViA6TS3ULSkOFl1lxhEBfbbzVft3kzL8Lmq3KcEEvMcQlEG7HAhjY+BRYZSOoWBEDlUNtYrQAPkrMtAqhLQCsE8lXc459Dg6HslmaOPiZiM3uV+FX3wLF2gbSNMZmi9wVIDr+zM+foLr/Pk83t8cwdeBblGKbeXb1eBrkD1xDnMtMBAhqMrRShfgg+jHLywavhkOY7URJe6MZgcXq0cNAF0ma/IlqzggScF3vueqd35yPv4f/z7z0sa0nOUAx3mjerqA4/syA7DDCiNRsfssQreB9q2pXFbh3p4b5UN+YWDpqmnFqEKwovPPQvEUq4d2O9vByf3EG3fNY9jBQnT1XgMDVjN+37oR4zZBhprUtdnbu3tHuANgboYVXDQL7n6zDOy8kzfZja0tB9+nqK8/xj24w+d4cT8PLXfzE1Bgs/Z8DHj99abSYYbOAuEFECU6Bl5IGaZSdFgaG9Ux0/xJ197hb/eQzqBhWUye85UrtwnsnuVTaCLDgkNrm85DpwEfv1hb5969DT15fMcd0JoGuhbunY3A2xKU798nLqP1D6o+bxZk8OVpmvrNpS0U/muARefieolw24e0oS+nvHZV17lry4hV4sX5Qm5DA4HcPjDSeTrNDYNGi7gmAUbIEDDHiaIwqyBYJJVuW5BiIisqWOpwPbuzggWGm9XyTw74NjWRuYgpR7zOS8ukuFStt5qNHvut5Q5c/gUEHMkFzHnSK7L5HY3+Nw5wBybDmpRbnKKs0RQP2rlq+gI/4vl31IcEgJOhCo5fA9hqUjMVVO3UZPEqFSoXYW5KQvnuWbGZfO8XsPXL+3wty98ja+/hFzpV0mQHtiR3N18ZAtalr12VDikcKAy40JLjBRhNVaVHFGTgxG8YEWL3MSop46uze91kgOLFDPioergfrBTwEMzeP8jp3j4/gc5eeIYljqeXsAx4KJphp4UIr0HAko7bqJHdmSHZSuBhSKUCeKomynr0a8jq9oN/D4bEgtvKxugOatEnGnMjl+35JmnngDnkKg5aXFkN23reZecxNF9zyXzeTM6cZaHP/IDLH1DNE8I9S3mOXw35lBxGQFRORoRtl85D1cvAYbq24HkXZzHFc58QF47apQTwKfffx8n+gUnnbHoFohvqCcVy67D+cMjKWaZzqxscXCxs8GB8I42Kdps8toS/uBLz3ONkuFcc0wsuyMIQ5BVynOuRnsFS2wQOQZ88jj2cx96J2d0F+laKt9QO0fSLPsZgsPEmHctVn9vU5SDTKlXV+RJc3AxBF/JZTL3QAB2WNYzNzAqer/Fotnid//y61zw2SkkQVM4HMqqJaIO1xWyh3WDCsY+J3zgKRRegkJWWdKMsxe5VR2sVa56b7kYF7J9x1qu9WYzzbKoGnGuyuT6wrBIpqtr8IbBxWEuk4VMByMfQMwVTGiuVGjh4YyhoAyKUvn6uH21A1iRl/OrVVWRDFI0NCkBwXwAJ0RfcVmMWDdUoSGJ58qi5ZlzF/jSKxf45hV4Yi8LDuwCyZP5GNogljtvm2tz1AMF65S/20h4HI0PpEIYN5fG7vWjleDcAOeEZD0MmuQGLJVNg5mDWsFrlid+zz3YR95xPz9w9hQnUsvp6YRGHO3eLnp5h9QrG52nGb9oNaYywyf/SzdKmx7Zkb2ltjZ/XQ7QZ1vHsKpB0xsuXOPe8/Ywh0o6sE4rQcBbZLF7DX3+GckY7P1O8JHdjA0+hO57RhgSQQGk4cz7P2zNqbtYiGfeKxuTiraLt1rO7js2wWOWECdI7Hj+qScKHj+ivC0CjCHLXlRV1mZMA/zE3djH7trA775K3XjavseLJzF0DubwZtmgkCRgLpfX3HBQktkOzhStaq7IjP/05DM8n5BYzYhpgL7k/HRPhUfxheg1nlaBHU3ouJvEB2rsVz/6IHeGSLW3x+Z0Rtxd0mpi2lS4KqCa6FHM2VityMebY/ScDb5BVeA7PX1h5FQMVQwpsBXIGWUbMtAYvgQWwz2O4lmEGV946TxPXEa6wRuK4KnQTGktLQYHPOTqst1okR2y/cMLha5QPin3awyacpb4FpCYWxclkAFaW07IRHKjNm4AZysVDC9gmgM4Lw6ziJri/Ldb+g5/a1aXSH6xBndziJUeLTQMfIth081TK18cE83NJksAkmTd4XCF3+OolkIXI8kMqWpso2LhA5e055p52tndfPP8Vb787LM8+eIuL7TIHqvmdn7t0aVhJOegKDihV1cweOA8eB8hGkNsF9cReOpKNc7jfY1zjsgif54zEv0YGHuDkxNgnnv/PFxhH7kv8LGH3sHDJ0/QLHv63Wts9gssLtiwOc4SPrZMmhkxGW4xZ0RflfycmY7dwJOkI4jUkR26uX0/OZCKZjKj9dUYe8hY/V632929W1nmYQpaJCpyssVTOYPYMd++khMPqctXSThUePjbw9ZAp+vJRlt7XSo4ex+Pf/xHWFYbzFVQF1DNvLdbwYe4KXMOUg5i+/kuX/3rv2DQGDO57TkYa1ZKg0Mlo0E5Bvz8Bx/mLrdgs56QYiIIBOfZWyyYbm7Qd4fnKMn4qAWyoXgDl1xONULuObA54bk9x79/7qrMga43qPwa/l8xhs6Qac0pyK9VXjgZe46D/epH7+cDd26hOy8zqz1pvqAKjhAaFGXRLrIMZ+1xUhGtwKPKB+7rTyEFbnITRHmVVX8R0f0wLK4LLhQ/dBHH0fqaC67iD594jsWaMhIa6FBkqF6sLvQoSzXkt1ciq+V7GVR3GLlwQzVJyBWMoIYzG0nwt6TlqBUJbpQ0HTuHOkUKfF5jyjKrQOWFvi8EtOKY39pbsGayjUSEgFOfA1Sr8npQgmsb+DuSVWTWgwz1PVrqHHmcezBHEo9KoKOmqxy9D/RNw47Ai9cu842XX+KZ88pXzj8tc3LH7D1gIdCOeDQHmhsPVUhOIJRvM5aYgpeaFBUpotLDeFofzgAVnlRaRiqBlAxSx4wuj+WC9vPkJnl3H8ceOuX40Dse4J2nT/DgbMJkd4dqd5djO6+zKR6ZKD0tnUQCEdUOrMMFj0+OpMtR+jjjs1ypthQI5k0qiB3Zkd2c7c/E2zhrBCSQzIq60o3/8vaPjdc18Birm6tnDTNF+wVxOc9zt8+qc3UdiG28wWce2Xdmaxk9yRzVwc1IVOCnnH7gEbv/0fezO5kxXySmm5v0y5bgBLsRP/Q2MpGsZCnaYYtt7IVnJYN/I/J2CDBcuamI4H1NSglniZPALz9+1h7ZhOliG9OGzhziPTFGQlPTxR455BBSklLXgeTmBF+h25CiMjs9ZXe+h/hAO93kf/yDL/EaoFJleM+Qls5pf0TzErvW2xhCgD6xaS1ngP/6I3fz8QdPEuYXWHYdFmaoF5IaSfvsSNcBLZldM0hutQwPXM8Bzw4jouO7NMtOHqVoc6C8C4ozg9gyDbnDwHxvwbETJ7k8X9BtbPBn33iJry2ynKcEsD0yht1XdKllJX87nER+GLq9w/4AI68XK6HSUejBC1WC01tQJaWphNi3uFKSPzw7yC0Rxh4t4ohJCVC0lUBCwFJH5QSnRlMH2uWc49ON3AtGDVduhHMuBxtlnB3ELQ/N6r6XZiWQA8bHwcQgRJ/nTTK6LpO766pGcERLiHckbaFUZUQSKhGzHpNEHxdMpp4qedqloVbj6uPEaoOrVrOcnuClvZavnbvIV155jm++vpDzPWOvnYEhMQCt0vCDBMCDr0gpFdlsJRCpWI0/Z0rkQL+KAtwyjECgK70njNzZxztFNTLBuBM4BXYCuP8YfOCh+3n8/ns421RU3ZyGjjBf4OdXETqsyud/dQiyaLJsZ+OZtx06gQULfGjoG8n9MQ6W+oZK4MEo6MiO7BAsuIBpN1YfJ488aupyL5px9xIdUg3j3+m4yt/mJprXjxtkuxyKF/j6157M5CvJ03Z5FFy8aeadJ1rMfYbI/PloDupN2DzFp37x11i6mt0Irp5wdXePu44dZ7GzjQu3dwkjdj1N5ahTy5e/8JegS7zT3B7K3gYBhpqyMZsxn1/DSSDhqUg83GA//NAZjvWXaTTS05CFI9d18Q93cRGDrKNvqER29/bYDKfZnG6y3J1jLqCbm/zhk1/nq9vIBQGxiJMKcKglXFOjXQd0+JIfNQR8gK7nOJmo+Y8/fKf98KN3EfZeRxfbbGxMWHQttVSktbXJ1gjCB/1mx/7g4mZthK6MXS9XcDctG4JYpA4eXS7xBE4cP812F2nDhNdV+I9PvcwrZJ/Od4INH+qsQGTS/grG2o8DfGX/Qbnx9ZE4WMoZCkydJ6SUeQu32OYkhciLFcgPcHX7Gh1Dhg8KYQfnciu6k1ubTErPVyU78a4oFyVN+ecbOJFvlfrFelBxUNVKcMw7o3JKXU+YbFSl750R0zIHimaZUwTE2KKS8EFI5mh7xTZPctUc5h0cmyHVJldb+NorF3jitUv89fOJyyBXgGusoE8mmYeRrKis2TCfHR6XyX0AWppVBQPnMHV0Scdqg44j0CHlr1VALSEYiZYpyoZ3udMfGaJ3KsB9W9gnHjjNIyePce/pMxz3jknbU7e7NFeW+H7BrMnacskloo90IRFFUa9gAa+GmhLV8pgJIff6wNhu2+yg6foCYQeCiltrDhzZ95mJ0GkkiMtrf6iYbGyh4jC3UiV0drPJsFvPDkquq7gixrCqVptpFncYez3liSyA8xVpTSXyyL5zcxhJE1UT6PtchQ7TCXEpoI4P/eSnbXLqDi5HaJ0RmkBVKSn1qGqRzLhdTZk2FbuXL3D2ZODpL34OrMXiMif9eRsEGABdv8zggb5lGjaYxY6fes9JHj/uaHb6svGXjKP4Au3RWyD7pjjv0dRRuUSbInHmcSGwvNzT3HGWZ7znPzyx4AKls7Ea3qXC43Romzf4xmdll2UCQ/B4KnpOAD99J/Zzj93HieUVgvWEySQXl50fHU8dnf0DheOygnktje/W/Is3J3u930EZF8xC2g0YkhKVCVLyvzsm7G1s8ufPvcRTfe4dIICPAwgFoq7IrjcKMLhR9qpkZs1u8Kpk6Nlm3eA1O39e7NAhUsP1ug6lVjgJe4sW5UCVhnxpBNiczqi7vdzrIfYEhCCOaNc79NnKF71Fc2cIMIZjWT+m3kFzx51cm++S2iUVyswHsIjDCAKLRctsNsO7QFJD8VBNqULFkoZz/TGuuIZzO9s89crLfPH5F3h+jizJXbO7csaJVdHQCSSLpOTIlOlhU9dyaZRQqg1mhkoayxxJGPB5mZvRZb6EoUS6PJ7KOAyaZZGnwPGkPFphH3mw4f333s19xzaY+gQ2Z1YLtb+CLZdY19MgzGaeyjnadrHCB4vhNSvN5ESB0KjHYj4ftYBWFSoVS4Td3QUT8nEMUhpGrurZPlmyIzuywzHnyP0uXD3IDXLqjjuzs41b41gOtf2czBr2udtfSWofa7A0E2Q1N7WIoggZUl3WzwSIrmGGj+y7MMWLRy2Rhug1VMRWYHIcd9c77AM/8uPY9FiGtRf+avBCHzu8v71BermAnZgGuPbKC/D8c4L1jL3H3G0fYCgER9+3HK882idc3OOxrWA/8fA9bOydp9Y48jMQRSVfFkfObh7+1FL6PpeZNmcbtF5Zti1ST+kmJ/mTb3ydv10ivQA+LwbJUvFBXK5WOEdwypCM8CghLjkBfHiC/bNPfYTNvQvo7iWq6Yyqqtmd71FPGlJauZ7XZapNxuBsgEaNRz067d/9FRw+b3gcCOWZ3J2vjaCkZcfx5iTLJFzY6+iOn+KFLvEfvniNPSBV4PpMVvZUiBNiKQdnONn1jO6MZHmDIKO8Z6xwrD13fGOG04Qjy9TayPq5NWw9q2UC4td1kgTEA/0aIS1hKZKSIoV0Mjjx14sH3xomIogI6uD17Su4OjDZ2qAyY7lo0balqSZU0xl1vcFOb8yjw22cwG0cY67w/Kuv87VXX+OJi6/wzSt7vA6yIHMpossN7hQIEyCVWFVvVLnZjxPSEuIKNjo0kveW3KTPkcdkAUsHoCootLp8mjc45uB4DR96R2XvPnuS9911lnsngeneLmGxw2Y7p5l4Omnp2p6+67GkNFWFqzydCnvLjqqqhi/HBqiZOULK/Klac9CWYg6++pj5J8kFthdWJGllDLLGAGjf+R/ZkR2OaSHHRStBhhn3PPAQCU+S0pxybY/av6JdrwB0e1qp/A+/2gpuGbzPSYUD7zbCGySQjuw7MSmqXKYhbxbJw/QY9J6f+43/BrZOcq1LuKqhdoEYI85y1aOpPb3aDRyv28WMdrnLXcdn/NG/+wPQDqxHHFQB+njbBxgwTK6+TxwnZ/v+/sfew71Vx2Q+x4vHZJBwXXOmC5zosM3MMpa9h8lsyrW+pfOBjdN38sTlPf7dl65ymZJ46FjdMRHEBDPwElj2WR1iUprMbQIfmGD/259+nHtYYHtXOb25wTIq8/kCLx6JlrOnAiBjWWuwlbLTfscqOxkFSnWT5z9URgZQUiaoZ/q1I2dZgp+gSVCZ0NYTrjXH+MOnvsQzhiwFojpC0c+IfqBN5ayNmLJvDluGe6wHF2P8sA9CVcbM8LelcnNiYwtJCfHKG3bQPnRbnch82Y2Zd6AEW4KYUQMaI6jikNxHwcgKF7Dq5F2CvcOwg5ugK5wgEUGcsdnk7u4Sl6QEjQv4jRlRPZcWjjQ5xtW64lw0nr64x5e++DWeenWX13ukIxOzE3k7Dr6hT0qnWVtKqkBcxJWMrBRyc47DqDzEuEd5Kle/yNjT4Q4EcRmKmbLaRipIcHGeikijiRmwBZytsYdOwXvvnvLYPad58NSMab/Ed3uwfAm/UKoQ8DOPw7Ogo089rnbUswmiuWFiqyl3mq8se1i2lhywUJoOluGrEU/uJRDwxD5gPtDVgWv9qmrTQfHW2F8RvF33xiO7/U0yBCgnRTRL4kngzvvvZ+6ynuLbs9/FyrLSpIzwr7x3DsqMIKXD8vh+l6GWzgd0JIwd2XdrMUWcOJIJSA3NJvSOhz79a3bqne9m2wK7UakndV6K+w7v86D8XvMXv/emOCLLnV1e/txfilRgMSdz+zKsbvMAw0AjTS3QZdThJ06JfeyuTeqdZ5kKK+dS8hm7tf9vjQyGEUIg9ZlkatrTnJhyUSp+96mneF6R6B0pZYd3xZXIzldwYCkjuZ1AlXKQ9U6wX/noQzx2akb74te479QG/XIB4nHO4SWgKWZHjQz18axBbooT4g8gYvbDqW5u8ZZB9pYie1ucWaNUMCyTjCfNlOVOoqsrwqmzfP3SVf7gqYVcI3czX0ndOHop0RrQiF85SCMWjBJgMHLkb3hsb/DLia1NvF3LhHcnt1SAsRrbq/F86cpiFWA4KfgWowLu2MCkdO8OLpdvSTo2WMx19WyHlWR5I5K3maHJSBLoEWI01FU00w1S2ODizpIXt/f46lee4usXEt9cIlfJ/SgWQCdkEQTvoevz2EtDC7yC3Y5STrwqer5WNL4HqJDuW0HW4U02cDIkK8NVKIU5lQneGqmBH7hvZvefmPKOu87w0OljnK2NjX6XenmNcPEcE2upxPDeI8HRWqTvehZkSob3HuvyYall6KRzQhNqwiTQLfuR2JmV3/Kx534hSi895l0u8JKbSap5ejxXixK2YDnIcsMJuhKoBjgIqTyyI3urrfIQNY/F06c4duIUO86VhJkr0ic28uacZRjtbZs4/g6s73uamIoIzLCegsnQROsIInWz5oPkbaEHpMI//B77iV/8dS5EQ2ZTsIglxTRDvmsf6El0scfL7euCCzBpAk/+zd/AYhfRvGE4R74W/rYPMLJ1vdEAJ4Bf/PA7ObU4Rx17DNmHu8wbrTEU/nNzukNUUxAjYLljt6/pY2ImnoUl/uz8K/zhS0tpgSCn6NgBFJfAB0+fEojhtOQr6o2s/tQuOAv89GNbfPL+0+j519gST5DAtfmSejqhqSfE3hAqxCKYjKSwIXhwBwKM8bU1Eng+h5sLMnyBYUkJMAZFKchdlZ0ErDwfXc257QV/+uWneB1oN4E9EHz2nb0AXb7Vyii/OuZoSpAxQMtSptS+4bGtFEhWD1sbG4Tl1VwavUUX5uxI5us5H51E8szX1TE3tc+BxZABtMF9lIxRllVmbNWU8HDOeT24UM1BUC81Sz1OnJ5gXjle3t7hq8+d44lXv8k3LyEXyKTsJYNMb1n8FBoD6yMpxaz8RM685MqNK9fDEHLgIUly2ULcyqm2fZptxdw4R4aPbcgVxVPAQwF77F54/0P38Y47T1B3c2pJBGuRxXnCrhFUqcTjZYvKHUM00aeI9hGThPewVTmCa9BlwPqCvfbggkM10s5bFnFBPWmGI8mBwuBkkaV7uxAJlUO6zHEyyd10WhUuXC2QrfFshhKNozbo8SPs6siO7FBs4BaUyXvvw4+Y+TxXb7QtrVfi3w6VjazktzoRRXDixnNLKQt1VFXFoLkezbBkZY84pAN/m9h0GthbRKDK/+oZ//S/+z/y8tVtZvc8yFwFV3tSFwkYwXs09ZizLGRzW1fYlOV8l6987i8AI1hPkuIhCODC4QcYWUHIChRn5eSWHANCRMzh15zQlSkiuUPtFvAT773X3nV8wmZ/CS85qYEfyoYuQ35K2iLx5mQw9mUwxdYqAKxI0WtftN491ABzwrLtmUw2yRKbDRcWib987hVeBuY0xNhld9hpxoGXXt1SV1iXMnyq7wnWcRL48Xdv2acee4jNxWU2nbKxucHlS1c4ceoM13au0sc5s+kWMWZ+irPszBvrC/CgMZ4dJl13nN5Mn2JQvRDNXbuzbA3eDK8QXMXeoqWeHKdtJvzti5f57DmV7XwJcgY6Gr0pFskhs/cEDI3rDQfLfRm+9yC8aR9HY8VbGJxETKmBWWX4RQQLJRA67Azu9XPCxEBakoukkJMJAC7lXJ5knSP6RSYWRO1JarmDt0jOlpOhBw5Db9AQI/eNGL5vWCRXG5s7eL0Z5vr6Zwxjycb3uTWsWtYR80TnSK6ic55ePK0ZXYIlDV997jJPvfIsT11JXCQT/nfLv+XgHUv5Is2lqwDUBQKnRc0Jn31vtQy7GAQufaZqk1XbhjIYo1qZlCC1IXMnvGlJX2ROxb0T7NE7PR958D7efcdxzvjENM6p4oLJ8lVm5L8Rzbr9JE9W7/fgHKoQVTBzOF9RVRUiSuw7lt2CCZuQShithqYcSjW+ZjKt6bVnXxZg3M3yOEnl+kOi8o5KFOdhxzznWefupDz/LW8Zody/o2ZdR/Zm2Y22leuH1xr6wJQsrqbgG3A1Z+9/iEX0UPuiyFZ6Sxlr63X+93aAT2lZ2zyD31TWJ8l8sLqumQbPxsYmTDagX2B0IIWjOCScBp7q+uMtmkB702zf5jTWZoF1H81d9ycjc1dgdxkheNAAx0/zy//df29dNWWytcWiT+z1PdN6CikSao/HWHZLqAPeV4d+iR1WfL+yn5U+Y4PfNPBhc9Iyw/EoNcFgkauvPAdPPymkJUEcyZQYSyzb6+EGGNkhz06gT4WTLvl5lYQjIhrZrLdYbncZ2uEn46LjyQ73FvAQ2KffdR9n/ALb7YnecI2nKzjyKlV4dYSSknUOkrs5HJwjcwhUctfr6OPYdK7S/FpQV0hWReHIAU5JkmHZFoRknl4TVk24LPC18zv8xXNIJ4VkXCVcjGM7h67PnrS10Icpzilb3YITwI+dxn7jQ49yT9qjbvcIJDo16umE+XKJryaYQBvbfA4yyPddz0hxFOWq4YtLz4qhyR7c7ALtEPFEyw3PLOQBH9QICTye2PWE2RZX28grfeTffvF5LkBOGABoKotAOfoEpERvN5ahHReH0QE+sJAqeHLbs3F69BnO8vAmpvMLzBrHXgz0KlTuJgbQTZohiAukpASX8fc4Q6pEtD26apMXr+UeIVMCao5dAjUdDYlHH6xR15Eq8Cp5BBhgKQf0DP55lj/U0nDRJP+swxg2IzhHRcAjWEy5G3VSQlgt0HnTyy6rimEuK0GJWFYqSpbxwXiEgPia5CfM/YRrvuFccjxzdY8nXznPEy9d4uUlEln1ohj6Ugz/9keJq4GagPbAaNc0vCOwvvMkrCy+w/uH88lXp4QemUMBnAD7ofvhzg348LvfwclqQpNgGpWw2EOkx1xP9D2YkmK+toPghHOGScwNsgq0icAIj+xT4f4Q8JUQrQefxuu7PpZ1rVp1MCuQ57FQywRL+Yp46XHSodExn53iEllNK+LIDQ0BFzPEMA2fcpt7aEd2uFY8mezcuQM+n+6HHkJxfAUyYwjpe8Blgrff5MHHPw71MbT3uDHLoTgDlzL/yURIpQrpRG/vIKPIYXsFLyVRKNm/EAHaBV0yHrrv3Xx+LmBFtUK6tQ9ZkcKvfxxs/3q5Lx93O9taMyxvq3xUFrVwONfQ66qhoys7goplHyQ5kBo2jvPBT/+inX7XY1zRwCKCrzyToIi2hMpQy41LQ+3pnQeVfcnnt9pcESJxBp3P8yqkHGB4zVvG3CLJKadOHOfaxYuc3DjOYrGHbxrqruVzv/Uv8VVLYsnSEq4g70xBbgmIVHFe3dh1F5JoacCmECPJRUKoaJoJNu/HRccDMwcbCf7+R+7mrC5oli2Nr0mTyEIXxNIIrSoBjBs7fr85EJdBZWmwYZPXAzJ4MpJlV5nbvBB4kinNpOH17Y75iTv5oyefYQ/oBuc+tpSEMoS8EGtfFKRSx9Qpm8DjDfa/+ZmPc2x+gdDvMXUr7GX+XrdP/UmG7PQbmJb3sf64dt5vhpkrikAipNjmbK44SI4+Jsw3tCosjt3Bv/uTL/BKcXr2+Xzr93HtuK6jr61VZ4aPGO9e2eiGBWZUjyoaOg3KiQYq69HYk9Rl+JbEQ++nAiUuEHJjQslOaKeJPSBSEUZvO7N+PbARhDoZVVrb2G2txDk+lzcgV8bK0K1ULHMAVAzUiLGlT0owz6SqaTZn7O3uImK5nwZ5DOYynAMvJTBwRC/4qkZ8RSSwjIE983ztlQs8d/UcT7y6x9fnyEUyMbsHrPbMu/TGm9yq4HDd08PY2L9R7g8uVqHn2hyQ4XoU84JLcBz4P/zsB+zdG5F76g7bvcRMr9IsA3UKVDGHskmMLkQWLqFF1c7pCmg1JChWjzc6r6HCMxzTdzv+HKjgfSDRYtpnp84rr28vWAI91f4snjAipQ5fpPnI3hY2lpnhhrxIWX9PhiUMa7cDqtDQW2DzXY/Z8Tvu5XKv1NOGZRz2eB0rqoWNkcfwvu+9HS3L7Wa0RO6tg8sJQ5VctamqClKi2dgCaaDqoV8Mfz7AKMqyd4PHW2Bv+57aDfyF9RSSas/GZIMYlS4ucT7kRFmMObirZ2AVH/rlv28f+Ymf44oKnW8IkwldjDgc3oY2t9lUBtTB4QUXg4npuJ0pHhuaNpLFSTanM5ap5erVq0xmU7Z3LtNUNTWR7ddeon3+G8LehfL3IHiG9gBihxxg5Oq8G+EVrDnhVg7NnNKr4UKAUNHbSmKzBiYJHm2wH3rvI0yvXAJd4CSiqSvRmSKWL5Yzh7o0wnGS46adQysTUUwRC3gtnA/LsKzopECzcrktlZLT+K1mNOLpdudsHLuL337qeT53DdkG1EOTDNOYgxI3ZGYjSAVmzKxns4N7wH7tJx9jk44TjaOOitiQ2SyZm4OL9yGz3EyUpS7x3lOpw2uFJzdGi87TE6lDYFcaPneh4/cvZgiMhywHp8KAKf+uj+HbvUEEV2Avp45VOA+xT5j5Q9exLq1Ccsa/LFhmPWiF+YZlq6UxnKMlksPqLK3rgdPTGRudsNlWWKlkJQdJHFH282y8FviPQTDFl3kToxFLtOmcIHVOYSx0j93lDvWszmPPFNUsh5qP3WEWcPWUpTmumudqFF7b7vnGxUs89eolnr8Cr0dkzqoqYev/ujdHAaUc/bAg5YQHedP2JRWRBienOCwjhEpyIusY2CNnznK/2yXMX2e6tYmmjtjm93v1OB1gVAMUzL1lDQvfyDLpMztqZoW77QMvv3BuZK8pHLjwq6twC+yRR/Y2sPV033pNed/0GOafOSCWMZj9ApLnwz/wg7i6ot2NeIRkCe9k/Oz9c+02r1zcwFbbeYG5GCCOiLFx4jjceda4upRhIfUMvTu/8/3z7XDpxLIojlL0PLzL1doyYHxZ/9vltTHh2JuCOoQKixW4ijs++eP2+A/9CLGaZM5jHVh2GZhcu8FZH77U4dQVkv2QqD28IM4KD0fM4cRIbpV8dZZhTton/Kym1cjk2JS4u8vxWPGZP/0vsFyMn+W936f6qHrIEClMkHEylMY4DPc3ExHN5+7c4jyL1NNqLu1V5ItwAvilj9/LdLHDpkRq7UF6unZBmNSZwFki/GzZwY9eUTG8yk0tNOukaK9aGvgUZ4/srOUSrxvxbFbSv2IQEiQTWvVc0Yrf/upFzgPtWKeLBKBHcqZ4gCc5qFLkDJlA+g8+eR+Pnp7BlVcRr5zYnLB98SJ1PckLcfnenNk4XMLuyoxEQgwaqwkuI7ujFqeuamgnJ3j+mvG/fO6rXCKTdhVKq+oA1n2rL/hODmVcNW3fdped8Qo4c/wYtc+khkHd6NClxNVwQ7VMBE2+yBdP2d4tqmMuEClcHcleZABOb23h1eE15JK6A6dKWmvrMZxeDorz1u9xaMHoVpXLXcAtZbx/VKSQjZ1z7MaO5AIqDdpU6KwhUZNU6HBc3Gl58eJlnnjxIt+4AC+T1Z72KD0p9gVxhYMkUNsqHrgZWwUXbu2J1b1/I8u9LjJiaAr84EPHOaERvXyJ1F6h23REiTifu1sM64SU8rMv2cbDtJytGsqqpYN7qKGa8tLrL12PMBu9viInza2RhTuy29Rk/+Owlo56jwcrc+NcjzAkzFzI3uHJUzz8+PvZni9x9QbRFOcC14cuq58Oe/e7eVudga1XPE3GS5vUWKpyrJnwzg9+gGf/+HmQfGkLpXMfp2A/B+PtbY68rxsQh94hpREzpqitVALrGrqCu3WTGZJqUlJOfvQT9ul/9F9hk5O8cm2Pycl7WCaPOmVSN9AtGbESJelseMRCCQgPUWSITB8o7mRuJisGTou4jyMulvgqYCEwX+wxm02pO7j83Dc5/5d/njEeIYcRKaXrZOUPHyJVVITywF4h3Qaat4hgLhDxLGOPmY5AhhnwI3din7j/biaXL3EsCF5bgk85moIxkvdWCL+iJGf0XsvrK+L3d2qDjzAkN4MWGEhx5jNsZXAurl/OvEFQw2RKd/wU/8tffomXQK7iCBtbxPkeVjI1BkMLg4JYSVTJ2AJ+8X7sh99xBxvLq5xsHJsa2bt6iUlTkchBzxBcDOSt3NvCjVCMw7K6dhAjkgJOKmIS2tijIZI2TvISG/ynF57nC3OkrQPzLuYupAmcc2+eivcbOKqDvlYNnD22QShN3lwGmL1Z3/5dm2gmZceSic4bb0U048rOPB+hK4Rsy9Ap0axsdGI6I7rEMozbEUjEkxsJDpnqIWhW8UQJGWBVmj7O51fZmAYmTUVInhT7XAFQI0lFqDfoQsM8bLLtJpxbGs+c3+YbL53jpUu7vLadIW8tGfbUDj+LYBJWG53kbLlzBikS34w7LzCoba04OUMv+FXJfNVDZT800JGv43HgE+96J5vLBWecMNs8xhW9htVCdIaYkiSHJBWliqGreXioJqWwreB8jYaGjorXL+feF0MH831DfYDRHXaEdGRvL7tuGz4QZKzxNcbd11cgNY/92KesOXaC5a7i6gYNNdrGAttwRaLWxo/JEtJvHtT3sGw4/hUiQorDGMrzSm+wY4lHP/IRnv2j34aqwbUtg1DtmDcoidjx8S09k8OxdaisqWToLoDTsaJbOdAuV3y0btDOQAJ3f/JH7Ef/4T8ibd3Blb2e6thZlnh225bpdGOEn+d83ZDA8rn6fcuo75VjVEN9ToAnXEb3JAihZrKxwcvb59k4NmF75zJnreern/kTWGyD9STZH1iMjXAPvYLBcNnduInnTOkQUynJVrh4RGlCjjonwJ1gP/+RdzPZucydE0/VzdHYYpWnqip22w6pJnnzLDAldZRKwjCBbm6TVNGxIZ3TIZOcuwEjA7SiOPSDQ2EFrGSO2CscP8ZXrsz5nZd7mTswa4iLBOZzgICSyq5e1YBCipl38Ykz2N//4fcRdi9xwiWmqSVoy3y5YHr8eO7QK/v957Fx3iEHFwCVZCWalPoir+cJoUHrhr3pCf7ixR1+/5uXZRtYpogBITh8FEzTfvjud2hDpWz8ZbQVrt00UpGD2Ts2N/CyBDGcZ2ySeKgmuaO4WiK4Ok9sPNEcl69cKdlnLZG2gnYEYAtsq3FEa2lDvhIyIJSLI21SZqEp6zG4iuYgQ4zjZ08SU8fV5ZKYjFBv4aczlgmudUZfbfLcxW2+/NIzfP3ckpe2kSvk6kRX/q02uUyuz5PJrWr4NkY6ua4pNd4HvBfm7S77vd/v9PqtKhehBBfKmsrcWnAxEN/Lrzhy9fChCrtvFnB7V/C6wDU92rdsHDvBta7FRErl0hgwzd7AbgkcrmG5RowQ6P2ES/OeK4ui9FwgdcIqw5xRZG6VXTmyI/tubKjGwwEexhus6sP8G14WgAo2T/D4x3+IK4sO12ywNEPE06clwVeMTKp9PI7BDn8PfDNsXb0SsrCMkiXtk9bspDkn7rsHzp6FC1m7PMh+FTh5g8fD3uK+V6as6geO3CA1Zy9zIg4BV0Hsi5fowKKDasapH/gR+6l//N9iJ0/zwvnLzI6fRaVivuyZbGzSdh3elOm+fZNyMQeUy+GOvRyiD/5vWtv3leQEMUctgWXXZiiwE2aN59nP/xUvfemvBFsAel1w4ZwjZRWQww8wVEpPbVll2gdz5Cy1Wd4EA8pEslzoKeDH3nOCh49vUl98genmFrFbgM+ydTFltRtfKhTrmQqTN2fSDHAnMyXoqus1rDXFk0Iyw/ZJ1+Z8SiYEvd4pv/XlZ3gd2FZyyNwDriEhSDAstjkwSPnfJvCRE9iv/9AjnNGOphKWl68y2WrYvrLNmTMnWbQdyVUYMgYZvjgLUjLUTg5vmAtAp9QlYu61Z+ohTDa4pPDcjvA7T73Es5r5KFrKdqo1kJA3IYttB344mLnx5PF2AuyuzRmu28vqPCK5YnDIq292AhOqEauyQgri6bTi6k5XYMuxDBzAEjVwEjheeVJaspDFWMnLkMGsuLaCFubAQ4g46UrvkMxDWew61E9p62Msqym7boOX55G/feEcT750gacvI7usKhTrlyt30N4CCQiRaB1CW4KiNEgV5ZJ+ISRaympYbbSiQ32TC3VZbzxKKHC4SEZdrCRu85PDU1bOpXAv+Mn3bHE6GHdsTajmc/quxTljubdL8FVpBJ6PdewrQu6mfrgZVMMsAQHnHBHPThRevbLLDitlLigb7Lhusar+HNmR3aytBxo3eo2BT3DgNSdQNbzzU5+2yck7uNIL0eX+Vm3XZmiHDUgCMlJh/KBboHr4Jtiqb/fqmcFRdAhJQauapB3RN9zzAz9gr/7eS6JUqPU3+LyVDZ+7P9w7OOdv3wDNZBVgiGXoL0TUDLO84GvKCeOqruk6gdkJPvCr/8je/aM/Rbt1mis7S6rZKUKzyc6io6oqZrMZThPeHKSO9auXfU+9RfoHOZIr/GRWSB8bX1MWMZL6nuNbm/R7lznGgi/+6R/BznkCi6z4Wibm0KtqCC7gFggwoAQZoqOqCpDJ2YD3Do0JST2VC0ytYwvsBPDj732UsHuJMxsTlrvXcJqYbWywSC3zrmc62yTG7MbsU6ewIQC4+Q0yucKl0BXsyIosnopmErnkLqK5grFSEOh8TbtxnC+8cJnPn0daV0hXqcM3W6S2AwRz2dkryChmwLtq7Fc/8g7uawKyfYm6CTSThnZ3zl133cm1ne1cKjZXpH8ZszfOMpAGspt+WOYy+JGqqaFS2randg51jhfnwucvbvPlS0tpa4dFxQXQGEhqzKqats8R9Jt0NGul95UNULyTwMnKY4tInxJSBUTs0GFSWerZyL3cA4ihztNrzU6bimO4hrElw3q2gA0vSIpkyUKHWFhxoqCMU1/Kpkb0DakIJKjLje6ibHGt8zx97hJffPYlnngdXiWLFCwoPAoc4kKZH4Yj4cmNHjuMZBmIs+9alirycOgrLQYFSfk4nSPddIw51E50/2oga/8KR8NspDbjyVXUd4D9zPveg1y5DA20/ZyqUk5tneDi9lXCJAcYBRo9FGJysuEW2GOG7JP4QG/CdvS8utPSMvAvMshEcGvQsRLY3QLHf2S3tw2V0v2JGtv3MOAZVpDN4cnce+CHf/rn2YuOarbJThuZHKvZ2d7j5MmT9Ht75TNzIiIHG1ZSgG9XW61kbYz4icdVE+Zdy3s++CFe/b3fxqTJDfe+BQdgPXVzM0iBW9qGxJUBRIScOFIKZMwLUT2xr2DrNB/55d+wx378Z7nqp+zMI3WzRe0Cu7tzmsmMtu+58NqrnDp2jL5fUEmWgh0ROkPKbvBzOTyY3ig2JJmB4YzxWiTJaq49ia3NKfR7+L1tXnvhKXj664IumHhhL61Elw7yL6qqOuQAo/TBgNJvYdyxhiy7IUmpJMNhZh7YucwW8A8/eQ+n44KZRLRb4L1ACMxjpHeeqg500XClMZSNeM6i+KRhiLu+68PP/Tpy4GASRliNFPiRYNTB0bVLAtBUNX1ndKpQ18yrCa81W/ybL32NK0CvjKtp6vbA1XipSW0uaVY+4+LOAn/vXSf5xNmTzBaXmTiHZQYSoZ6yM+/BT+kNVEpXZigQmJKNHp3Ow8Q5CNPJJnvzXVJQ6lkgWc/rfctXl8f4f33hm9IC1mcPTSN4ywS/ef8msS/G0vJQLFwnvK2W6neegbCc480IlcMctF1HdYhKUiaG80Lbz5lMG9p2j7raYJkifus4L13OTmJVOfqyW9SWswpnZlAno46JkCK1BCY+B/qx7zD1+NDQuYrONezh2XU1aWOTuQS+8corfPXZV/jbF17jKrlK0ZMhT5EcXLQMpXvFLGL7yMHlefLYNvSAU18W/YNDUxToMOvehOCCQUYl/7j+mFFj0Mygyz0gVALBe1K/YJMcpP03P/Ig7vxrHN+aEHWZozdLdHs7NOKROPDA1mAaJeB3dvhOjlqkqmbs7S1pTt9Jm2q++sLTREoANO4ZblX5PLIjexNsPXC40VQeXi8+IN47WtW8Z9UNaMMv/u/+e7uyTNRbx+hMcKFm2bXMZjPaxXJcacaq22i2ivpvZxuVN4d5OTzmM5/ONrlw9QInz2wQXeDk3fdz5uM/bBc/82cSU0kfrGHofZWVgDSuWFY3nPHiuO0lbA1qH3JfMaG0AADt8x4ZcUSdgKvhgUfsJ//BP+Gu936Iix2oqzL8Ljk0KZWvsT5SI0ymE6xfUokVtcXVPdGSlBybzh521OaEGCOqiUlwTF1WlGxNaFHChmd77xJnHJyoA//vf/EvhOUc75XFt9mA+74/5EZ7w6MMHZdXw1nInZyRhCeQUgfLPY455fEAj2xNuMMrVd/njrRlJUkyyNINsqxu9T1jDo4iJ3vz0aPJUKIsClIFr64leGqXcybB43ql22sR3zCZbvLKzi7p1En+/d9+g6+3yIIMyxDL/NkYE9gSLXTipqlwbc8p4JP31fZT73qQzb3L1FZgMLjRJ8rXgX2/U45RyFh8sTengnMzpjh2WqWqN3CySzTlWhJewPEvPvsEVyiQyBJZD381EvwEbqrj6ODMlt1n2NDSgbc44P5TM6aknI0oClLucC8fMAgKCEaP94IRaVF2onGFQjCL7bi5Os2L56mTObCspaKmJnbKrkXEVYRmi+SnLKVmOwl7bsKrex1fffocf/PsJZ7vcvO+zKPw7OUQu9wFA+eINjAZYKVIsu7M53J0GuLb9WBi3/3mhovwm4IPttX9LSio8SjFwJKDZQ/NFNoWs0Tfd5z0DpeUH75zwx45tsFdNkfoiNZikiA4KvMEFCkyTIPIwq3kzwjgxaGqmA9cWrTsTLZ4/moJFA/gB6+71oe9OR7Z28ZWsayOvzuUGk8iMZtucG3RQrORoZFW8+CPfsrqE2dI0y2iD0QVKH2VxBTVxGqG78/F30yD3VvZ8nI67JGetl2wdfwYfeoRFcw1fPRHfpL/+DdfRhcGGnHeISLEvqXr03jFfEFUvHGQwc3tv7eA9Z0SnKeaViwWuRGeC7CMjnp2ElqYvOcD9mP/4J+wdf/D7Pop1bFNrlzeZjptEM2JSSkBgysoESExcG9X1YvBX1y/Zod77aIpvq6ozaF9T9e2IIJWDvPQxyWzBjb6ls/+h9+C3W0kZmK3W7W8eEO7BSBSo1uSf5YM0XAle6xJEad4JzjtOT4NfOJ9kQc2KuqYRUuTDO4hY8+HbCsPMPe8GDKHDj9iO2/uBq/k4Ur+e+BlDA2wRPHmqMSRVEihZm4Btk7z9LWW3/vyNblAHtQpN8nFqaOmRchOT/AObZWTwHsE+6c/+lFO711iZn3hp7hyDQq/Q9Z9tCGQ0rVQ69bwDVQccwtsBMeMwOUY2T55L/+f//g1vplWPS8y42J1zLmsN+Dvb9IGx9tWdKf1/g9Vyfg/etedTFPCaSKpUt0CwcWwlYh3WEoE7+hT7u9ypU9cLuAnNQgegoMm5iDjxF13s9NGNpIQmKBNRecnLKsNrlrFc1fmPHPpGl989jVe2YELmtWecmfnEvgFx26S4qEPF22QhswTYXAUsu0nV6aSNRq9CysfrAHB49coaAPbRDMN/LpP+27Ms1oA2zGdmj84WCbA9eqwRQuNg77NRO+kPCLYz3/gvdzpl8xSYt53tNqCU5x4KhMsKqGcWwLM6bg++FthAgKVDzlg9jU7Cq90iZc0d0gHWJes3Me/KByuIzuy74UNMtCJRO0nbC86qukx+k7BTZg98l775M/8CnHjJLGa5r01yx/hBzhjUsStNLdXwf3bB/CzLn+9L1taunr3fWI63WBvMad2gWQ1D77rA5z+4Eft0l99RqiN1GWhDHEh90JI6TYOGf7uJjhql1VzFntLXOPRmFACnDxFt0g8+Iu/Yh/6sZ/FnbyTpZ+xt0j0u3vceeZO9rb3xr0trFcqhvuwVv012B/USjrULt7ZlBgT4mtUHILgLRCCxznDpKfr5pw8MePC3zzFM3/8B8LiGhWRTjIvdrUp3NgOvdHeMC8GYsn4mg0kSIeZEEKgDsJJphzf3GJTe9JyjlbrCjeOdV3fMXiR4hCNzuRKJjIHBt/9dJK1RoGDprxKqSA4ZTJp6HYXTPwM10xY0nCpNeyeO/mDP/ws5w2WAk1V0BoKFhNVOYe6hq5TjgucMvi//vKHObl9nq060c/3cHUzYrrHCs2YDV4FF6uLPOBQh2t9eINccVBXLJ2jnUf09J387pOv8BeloZ4GwUXbV1kYs8BjBPXmLIWyTswfzMbKKfefPkXoL5ZrmZWbzEq5/jDNBIdHNBKc0JkRvefismNJbgRHwfvHLl/HBRDO3Mn2tMa1gWvAlbbn6y+9zldeeo5vXsw8iqvkYGKHDH+KAs474gArSprVnoTV5NKUI5oCx1svUMDqbu0rSAmrwpQ5PDLyq2VtTVjdm/Wy883ZPldjLbDMAacwwdPRk/qORmCDLEv7Kx97B+852eCvXSDZAvMpK+mWxkpRLZO7S5lrfwVDhxrcoZtZbn7YO4dsHeer3zhXQGulkqqQ14zsqI0NB4f7dmRHdtP2xsRhhyvqgRX9UqHagI1jfOLnfpXJ2fu5ojXRcsVULQcUTocGs7biPQJDj4e3j/O84pYOsuJSoKZ5j4fQVHRdh0ajnk5RNa4ulvzgz/4iv/vUV2HvPCM/RQTD8B5Uc2PUW2GN+l5ZzmcZSQ1xDdorVNO8pzdbfOA3/qG988OfwM1OEWXK9vaCptlga3ODK5ev4cVwPowVozGBa4zy/8b+1gWDZZ/RDjXIUIFQCSn19Opo8IR6ghcjWotPPZsu4XYu87k/+l1or1HT41Cco4jufGs79ArGOPkpCjjGSJamLBhqGQbinKMKnqaqsGt7hD7SBwojP3/OmBksN9lKc7sh0SqWh4JXVxwJbqpc6jVfQmf5GHInZB0hW4aQkhLFoa5i1zzd1km+9OI5PvNSzjDjK1rt1whHOmZX5x2caGDawv/5Z95v7/aJ492SdrHATRypADscbp/SRgl1sipACS4GYns+3+Edh2ii+EnFlcUemyfv4TPPvs6/+eKOXKDAxbAspoUrykVrGdQ3K7gon+UKxtwOPG/AGYcdqxyyt8SHAjQz4/C77AEWcGb4ZPgBjlvXvHx+hzmwY2vKe6XkXdWO5eYWT3bwt199hRdfvcCLe0vpyVc0CuxagcmUuSOuOMmq4xgLHmJKiPlcEraVMssIYRJWKrP5r8i1gyxc0MSeMFYlhkabuV5V2jCuBSeFdI4fn1nr1PAd27AtDBDHMWi1wX82jJ7jTc2y7ZmR1et+4wPH7ccePcPG/AKwQL3hvWNWet44LQJU3hHL2jQILZisq9es48IOx8SM3hJLA21m/NU3XmJejmztVq+u8Hi4CnZUxTiy795WUOY1GxABVhTbRHJTT18DDVQzfuyf/e9t64FHuJw8Sy21Dre2gpcAIwwQSBvC+f3BxSgqdRvbQFeXIbig+Dsur9tVVdG2PbMwocLhZMK15Zy7Hnk39/74p+yV3/mfBVdBHWC5QFFEhLquadv2bRSM3diiKq6eoV3KXAtrqB7/gP3UP/4nNHfezcIa+gheexof2AwNFiPReprZBtYPu+b6LpT9rKHlQo4h3OizODls9cDBjLrOMrSqgAQ6NTR2qOtogrER4Guf/VO2//Zz4qoEbY+heB/Q/ts3CTz0Tt7eVjeCARIxNr5yGc+tuXnXMmb2TUo9kiLTOpDWFo2xQ+5AtkZJYqQhyCAHNCHpilzmbqZ6IbkjpjlEc/UkZypj7ogo0KVIPZ1hvaM1WPqGfnac3/r9L3CVglKPjBu1E8B05AF4QFr41ceP2Ufu2GB25VVCP6etIlI3sO8mZzjD0JtByZULOdDHwBDSQPw+VKKWonFOtbXFU7vC//Q313iVjO2fTh3zRfZw0j4HlfGXN7fQvY6R2f/sOx/YwsWOKkV8lStVqrmKcbiWQy80UstQAqswV/P86y/TswqeLe/mdDjOd8pv/vv/IvMuVzOWha/kEHqUOEANpo6UshNpA0atwK1ShNRnd3+9G+k6CkHKvbs+SbOC3UipEeV7OQSRipZqUr7V61TNG9+n78YMR8faPFjDkw4KSgIs272xcvGz92M/+/hDHG8vMIm7+DqvXY4cfElRkzPnkcrT6+r896EYVmXbQzNn4J3Pml4SOLe9w/O7GQo3INdWbplfg0eVuXfYw//IbnNbgzMPkOLByvRIphmyYgKzTT786//YzrzjPYTTd3Fhe473Nd55xINZQm2ooK7zEdz+73TDRM/j+ra3gqLIOjlKFIoiZ8BiRxBPZY646HFeqDdOcG53zg986me4+vW/tb1vflloe/ABUuYYtm2fZUfXexwwrNHuwGZ8G5sDTRHqDZid4L0/8/fsYz/1aS7h2I2BToVjm1vsXrzGtJnQ9wt25wuOnz1LTB0prXpH5d1JV34gWWBHx0pTqejr/rD6sK6gI/vSXjJUFnX0mqfPxHmO1cbuK6/ypf/4e0JqkSzgTgJinyiNqr7ldxxqgOEomf+ihKC4MdrTUl1IBiq5I3WnEfOePkbcAYZt1vDN2YqBaJPcSoYtBxIOryt40JvhH3oNWYHIVhWBJI4kCcQRBEI9oe+M5GtiPeGvv/ksT+5mYrcOVyJVIIqzhJGdbA+ccPDuDewffuy9TM49T+XBgpAsIuJB4kpWVLIM6MBH8cWrNNFSBcpVIsWBZdUrz+EFGQ7F+h12fM1v/vlzfF3zNQkEUu/ACqbHFUL6EHia8r1Qs7kRWE6Adz36MPQttRPEQR8NU8V7f+hOYm784gm+IcYOCfkeP/3qFVogeg9qJB022oreK1fos8pTDTFpgcKsmyN1LqfCDHwImEZEFVSpxSPO6FXXGgitVSkslF9KmDA0mRvQ/S5rsC+HRAJww6V2X6WqpNRtfe7fxDgQckRvGTIZygYQgU7ymlGFAK1yXwUfPRPsVz/6Hk6321TtOSpn9H6CmdBER0iGJMk66kGILv/Ljrnm5AeMG9KtYM4czgVc3fClJ5+iBbR2pE5HmNoofDDAo2x47jZ3Lo7s8G1IPhzIGZgMcYJAqKGa8qO/9vftvg9/nPlkk93kYeMkxJirySln6YTVfubwB9alt6PlC+jMZTUoYKhimCipjzQuQEw4zRqSfhLY3tvj9Ok7+Olf+EX+8/9ylWsvPw8I0kyxdvFtvvJtUrkc1jMnzN7zHvupX/uvOfXQ41ycJ1yzxQRoJDG/cIU7zpxibzEnqnLizpNcvHKZEALB5+ufq2FljxUwfPFnS+mfzHEYmhy74pgftthAH1uCr3MdLBmEmroJ0G+zffESX/zDP4bXXsv7duxJobSnUo+UHnXfag8+dIjUsLKM8OfRochBRhcjTdPkdGgPExeImsDDsu3Ah/GmrUxXN84cYwft9XeI7qOQfjc29LTIn5IKzi5Hq1592YwjfVK6FOk3AlebGf/ur77EHNgDBE9AiCK4khmmQFKaBKcV/k+/8AM0F17gjtDR+Io+Obw1xf924zVbwc0OnOwoZbd+8N8LB31/6S8HM8NrJRstw2R0tC7Qbp7hf/rPX+eLl5HXcIRQk2Kk65WqquhTv3IqZdx1yudff6rfrWkB5sAqsA2We2A8cnYTuXIpQ4IkEC3gCi9Ir/fM31Jz9ESLON8Qo5Ik0ON5bZGVnjQlcJ6qaoh9rgokhe3Sd6/Lqr+rDd7IG7oKRMWHQIpKiikvkMObzUimmXcgA6RIEKkwzVCmVY1JwfaXU0d1DQ/7FqgBpjT8vD5ux9fW3n9wXH/b8eDGP8nJuVQ+Ix/zCnBlkJQmRU4Cj21g//THPs5d8Qp1e42tWcN8sY1qwLTCzPDeZxlbVaJk0qk5G5MliOaK57c7xL+jrVeGvK0SJis4Vv59SL4cfD0hSK+0QdiuG/7qmZZluS7GWmAxXI+1vUSBsePtbWrrh74u0jFWz42cBV4bkELMCkXiyH1n3s4o9QP2rZyhbzkMvtU1iqu/Hxw+ABdyuFBtgjR84pd/w979sU+y2DhJlAltMnpNTAWS9qAJESO4vCCJeEQESzY63dkn0DVs1Nvh3pWzk7LHjmtZPsXKezyGpp7pZINokfliybGTZ7i4fYFH3vMhHv7gM/aFvU64ej5DfoKnrgLdYrGGdR2+bw1dciM7UIW67uXrjvyNnrz+pRvZfpbI6ruvdw2GSllx+IUMiTp5ho98+pfsAz/yM8z9Buf2esLsBFhAU6LxDj/dZHt7m2rasOxaFttXOH7iBMvlct+XjLzWG/AqrkuIvmn4vFVy7kZ0DrlRMm7te701BKlJlhsdNxPHtHbsXDrHxa99kZf/9I+FGJnVjm74BAG8x+K314k/1ABDAQ5AlMbxXAZqqCBpC0DjHXHeU5vLOu11yI6NFVKN7I8ITSSz49VRlWsqlqFNmZdx84SvHEgkUtjLnA/bQsxTxYDDEXwgxkhz6hgvLhb87qvP8FXNBFoXJvjogY5Ij1arC7OhGe/9f/vUw3bvtVd4oO6Zpo5535OoqGyCRkVC2jdgFMkwq9Ec+5QmYOQz5Odu7gpYIcnn3hqRekhWiyOJY88SW1tbtDt7GEasK6rphL2ru8yP3c1vPnmO33oNuQD4KtD2SxSoqwltv8wDIpWLMh60ZufwzfJtBBI9gQojk7YmoaHpFrxvAzvTXeD0tCfu7BLtLL0awWf61mHieHMn846qdmxHI7opnUW2l8uxUZpknAGaenKonXCF4wMlGTXCdsjXtO/GKkGK+1zM8S6M2Wtb/b1ha4HEjYibq8zXGBwOSpKjubUKxRq2aO0HKcyJIWC9fhNk/Iw6VPRxvWNtkRVEckiZSrbPVSw1kBtZKN4WnCVyHPilByr7lfc/zAPxAtXyKiIde63SaaCWikxLh96MaHGfYx/0+r1Ev+22+XezvIblBEOd8ncpYB5aD9EBalQIdYJq6LtRXjcVgkGqjvPlnY4nOmRZWPnr1TxlqGQ4vGb4ZnKAT7xJp3Ioljl5OgZbg/qerL3DzGPkfkeBiKdDSKh4GKU4bl97o9t3Q+fvO7nX647NjYIw58ASvhQlk+VxS7VRCHg1uAZO3W0/9Rv/Fe947INcbg1VD5XD+pZpM8XFmPUlfF4IdPg+A8xwcpB5UebioSv4vBmmGbYyQKJwQJ2BX4UHltfniK89S10C4CqHLlpC2OB83/D4T/8Gl2JtL/zRbwu2DRV0y70D916yQ14wr4LixRNtWAMOboJ63bo8VEOHnxNjcv/6P7fr33/Q8m2s0DUfRsgEZNGV8qTzFaoGeAhNziltnuCdH/64/fBv/DN2qilXqOgJuCbQa48r57W0fB4SGroIwTV4gX6+XAPXyQ18AB3h7te9IsO1uVkcxiozuBIRKQIio9iRG49taP48oFogEOKMOmzSNUtUriFhyXL7IlvxPP/pf/1NIe5R06Jdn6v7w35t7eq+fQv/59ArGPoGv92odCQGVVp754H33Oi5QSrzugrGd36oN7RRjpZMplYimMMXfon0HZPNGS9sz7m8cYo/+NLLcg2QpmLZJhqMgMsymRGowS/gmMGvPnLS3rdRcy8LGuvptUVpcC4QLGTYk/X5O9/w3GTfAJA3eNfNm659ZsYdGkLjanaubfP/Z+9Pnyw5zvRe8Pe6e0Scc3KrvYACQID7vpPd6oXsZqv7qrulq6V1RzbSNdnIbEzzaT7Mp/kjxq7ZzB3ZaObqSrJuqfcW1dya+740SBAgQYDEQhI7CoVCLZmVebaIcPd3PrhHnJNZhaVRVUgUka9Z1VnynDixufu7PM/zmhgphkMGK+s8ef4iK8du5juPn+WT9z8nT+b9G1pLzL5g0KXMFiwyI32pi91/v0pTPI0IRm3KcftACbz5CBzSGRomiSyPIKbESCDGep/9q4jGhsS7MMy84N2A0xcu0rDw3ZMznlzGFCQsOD67Tt/yi+epcL047j7ueXweW1p0uuR4H+AIiyzTZcC1mDkaS4vT8jb3LEytD5ARryY7Oqqpn6ol+SJBSFVRMUBDqS03SWSo8G/ff6t+4PiA15cBN71AqCfYylGUQ1yxgs5DP7dcaf4RvXzuuZYWJNeK8u+YfNpiXnCMkb4MEQgohoU+gcWbkrZa456HfsoFIBqyYyZYXe7zGxEsJregCkJKDl2HSugraQtODH1nW0OEuGjQmu62lMiR1H4rO9D7vnxef1uOuPZWFLv3rmgL7oMIlGWJqtL4FmKOhEk9F6xJycCgNsnVmQoOnWD4hrfr7/7Bv2D1+Cm2gmFmI2U1RL0ibcDYNifIrpAdXtqLX2yLS/8vEjJXQmwsW6KAWZpqiCmGfOjv/x7ioj7+xY8LzRiqEuYNaIoFY1DS4mzT3CAuCX7A0qLQrdF7zrosPrb8l11zPld4ZHEX7fmFxcc0ULgCMYpvUifuZQRXUY5o25AapkYLWA69+936sd/+XVZOvZ5tt87UDNlre8/Xsh/1UufzF0reXp/7crlCEdEl9TSz9BldOkkaLb4JeDNnbWRots9xcgD/5X//fwvTTYQaQ9iVXPy72GtghryeFgk2qQgIg0TekUCUhkCJKKwY4cKlMdx0O1+6837OZ1qBi5K1cwKD0QqTearS4GGg8P4h+k/f9TZO6TbDaBmrocbgNDLIwUzQsM8LvOlLcDZ7MY1Ni3KgSIT6NnJkdYPz0wsYB357Rjk4xvfPT/ire85yPjs/RgxN0/Rb3tt2/rqYLv2ThL6SVJcgxoYSeMfrjjM0Bh+SHCwh4gBjoWkC5ZLO+itvhhgM1qYJJGgkDlZ46OknaACcRUPI+PmYHGiTqj8vobp53U3o9aSAdP4ViF0TSAVol5yauLyGdizO/k9omtC6tzU/CxiwkgigeXtx12JmoBJoZowirAO3KvqvfulWfu11JzjCDOenBBWCrShMiW1c0ouXvR7XK2tdxmpRnjdJxSov/hZNGTeTKm4hd0YqPQQsras41wR++OD2Ag6luyGnXbVJl8BCy+PmF9VEQbLUaYLZ7tU8uvHd172z7N78zWUf0j1PxVzBSewkWyJVWdA0LWGeQlVHDig08QILW1CHREjGFuAGcOIUt3/41/QDH/37uLUjbHllMm8QUyJtxLeRgXEMXcW8me07jv1GtQjM/YzxbMytJ07yK7/9u+xsXtAL3/+GEOYk3pjvC5WuhBAjc98Ss+tYEbFdwodu/l5Uu3X5hup89D5xBATzvDGr5r0M/TbyGtb3wIoQPW3wWJ/eKQ0UrmLeRho1tI2B4UYquZ44pb/1L/9nTrzxTWzXLdXxW6inN/IYjrsEfYyk1JtVclARFuT/XZZQAhGoho7ZdMxoqLQXNjm1OuKLf/GHcPoMhOShdjpZl839cPkEsscOAoyrsNRBPAmplr4AItGl5n8qBlVDUKW2FY/sRL7waOwbWDVtQ0lFoGZzug1FBbGmMnAc+Jd/7y3cHMYM6jFIS10IwVRYSF3Co8fjcftcojdKCjLEoOLwBoLYVMWJgpgkpFcWA2aN0mjFWQb85fd+xsNNmirKosR7T8jygiZ3F34lTEIHs0mzX8AieEqSatDrTxyh0ikxGLCDlN3VjNTfb/y5Js5DIpYlcH9TjXjkuS5pbRANi0y/iQtn4OWmJK6xdeKS9DWWVFnQpUUL2O3x7IKVZkhVvLzvRqrU2Pz5kC728jYioI5BVeFnE0aka/7+dfTf/MYbeX1VsDo9h4SGloA1lqpKiQPfeLz3FJW7QrbrlbVdPTZyBcdFkwQvcokoGs3nQyhUqILQimU2WOG+x89wpkUoyCdO+mBiUZWJBDUZFmBS6V+X4Wy/ONY5x3tutKW/6xK44VoB3l55Wzh7e967wrS29xj74dPdB/3nFmMQoMnQCispE97GLHZHenMWXIKtqIWy4tSvfER/6bd/h41Tt7PVKudnLW5QMDi0jnqlrVMjy8o6Qt38Qge4191EafEcOn6Y57a2GNoRv/cv/jXfXFnVJ7/6WYFIORDCfAcBfBNRS1bsShdR9e8AM5duvljOEl3J+jI2/Z0m7Iba5T+7IscbIaG3ZhGmTQCqBOkqhnDidfrBj/0Ob/7gLzF1FZu2RI6v8vR0ztCUN3QRdrF2KlHjEvw95iCjGyBm8aiRaFICrw5TRkNFx5vcVDke/tbXefZrX5O+tBj1imIetg9sXjjGOAgwrsJUwFuflaQsRg1BUzdf0RaVgkm0cPhm/ujT97IJzExqXuUy1j+V5RU0QIAjAf7FO47o+44MWN06R0HEOEMpFd6mkeQ1ZyatsJ9eosnRcl9uNZaZTUpglU9KCaYSzp57lsNHTzKLlmcHh/mT797H3TvIGBJXwPseR+mKRJhVv0djeQnKcK2sy6CjEJzNld7U46IC3nwMPVYJxSwglCAWExPXJGpO8+r+pnHFFHk+9lAUbKvlzDhTJ71SkDJKXbeUvn7ccWVe9Ade5PVVxVgpN7ygqS07cZdXNi6DasQlrHH+dAf/0g7n2gVVu47BYBWiKlYEO5twCDgM/MG70d9/31sot57jOBVG2tQrL1iM2jRMVZNW/KAgvIhM33W3fBE1Y7BNfsvGDi6lBKNEEwkmYrFIUBzQGMuWDPj2w88yg3QiPZkqoz1Srcs+EmPqSQA5SL3xgwuVrhFWd/ctQXuIJGGDLEWZqxgLixAj+1nDvBpL48TQcxZewPYWlLtzZdmt6Lc3JCtdEmVpoyZk1PI8HksYHga3wvCOO/SXf+O3eMN73sNULOcmLXbtUFK0kYIohjbGpNhWVRgxjMdz3ODGvwf309bXVzn73LOsDldxwyHb25f44N//J9x08la96zN/JbPNZxAKVotA3UZCl5CzAEITX+zeyaTqvuS84A2kO8T3fboWlsZg3/i267ezXA3J4zAsI6nFgbUgVUoGHjrG+37vf9Tb3/F+hkdOsh1BB2sE65i2EVuuEn3YxUm98awDx+WOTntgWR3CZHF6l+ZvlMbvMCot65Ww/dhP+d4n/lpoWoizROozfve6GxOnwy7Nli9kBwHGVVqXPTQKJkqWrPWIerwp8GvHuPOxszwwReYWxhGsdLK2uij/hUQo/UCJ/rP3vIPB5iNsVJ4QlWgMTi3qhUCLl7T4W+fQ4J9/566zJfWuhPQPlLkpWsYsSwsS0KAUgyHzWLHlVvnkjx/hc0972QYasQQNfXAhSIKd5OqFc4kgfz2ty8QZzVl/YyBEDgHvvX2VkU8dLcGR6LI+dfEONc7aF5OBvs5mMOIIMWAkooXl6e0pF5dy9Y48jUd6p5yYMhCWVP7crzqMsuig8XwFiu51zF/oM6ySYqWCjvBtMlI+g1i6wKL7t5wUaxM8owRG2rIBvHOI/h9+7TbedbxksP0sx4eWeucizo4wpgApQAWNkagecYorMmZ830xTE7Fc7o6yWLytZsWwPscUMxU9VVc9wgzLwxcucX/ufVHnTGCntNU7jksQhaBL+mC94/CLZt2yeSWhguVHUuX2Bj0HetmTv9t3lyGOe1FUqcZrmHqS4ycGnFsqswkUK6y/68P6zg/9Gm9629ugGrIdobUOLQyzOhJFqdsJgqWwJcYamtCCLShHA2JsLtu3A3vptrO9zXC4QjQFm7OWqlpndeMwdwyHrB09rF/76z8hnn1CduZbIBFjM760L23K7slbWcC2nzcBsQRxkrwKLDuxLOYey9Joy39bFiVRU+VCh4NiAMNVhre/Qd/3Kx/l7R/+FXa84NYPMWkiO7MWaUPmYhgK++J9HF7tprlCLSwBKmR3VbF7e9FNPPdKk5bVIZR+Clvn+MJf/glceA5DixHF575ze6/vcoXS8MJn8CDAuFrLje1cDCkrGg2tpNPeGMMjteWv7j7DjBRcYCBIifMGJekKE+DU0HF04vm3v/5+ju5scshFgtQ0RtCoFG2JoLTG4AkEo4gkcOT+IXUUS4Pi8GIJFLgASA1So6ZFZ4H1jVt5cGL5+ukL/MVDl+QCHVZTEWNTKwLVFFjkFJc8H7b9Gh5rN1AsqRcEWLAgIXLCoO87dYIyzHExotERVBCXWBohtJTlfgcYkJRuUgOcaIVHT2+yQzpNdgn1Mo85U0mECEUG1wXiC/czuA6Voz27v8Dm5t8KuSq2rCBi91z33AsQ6Mq0MQcXNmdkY/qQyZgMTfjcrHCNAEeBU6C///Yj/NY77uBI2ObwdIcyKJPzmxw+epTNcYsRwUiqDhjXJQbmeB9wMkjwjn2wrlKRggablJ3ymt3JAGuGNzkkr9SGGGCMcsE6vvJAIne3Juub7yqqL2Gu0ht9MtFgCNGwR7LuhjezK1W6iMqNXmGeFQNSEW5UjIXGNCDkearFu+xKSO6Oa7GASihd0iJVHiir5PzhkocjFo4f5w3vfb++8d3vZe3UGyjWDlFHYVY34BzWDXC5iW2MBucctigxxtCGQNM0ND5Qlu6argevNTMKq8Ug1aDEEQrDpPFMdmYMqlUOv/N9/NObb+L7X/ucPvWtLwnzMdGkNVCbJt07u+CC2Tr41GXrSr6HeqjT5Q1a995luyrZS+8lfl0BZi2JAqxtcOyd79J3/9KvcMub34IvR5yezSlW17hwbhOVgrX1Qylp2XhM2+KnnkFZvbyT9yqxDlhscsUHUtVCc6VouVVAz2vM85XVyJCa2bnH+c6nPsvs0YfFUVPiMQbGYen6dYOb7lqZHob8QnYQYFyVCSamPhyIT05RTAoLrYWJG/KNR87yUES2yYt9UUKrqHW0IUCEFQflxPMv332bvmVoORznoA2t9TQmCWo6hNIUVLak1UhrAkF1f8vzkghY2h0bqaqGKMa2aeEqK56ZNzwaR/z5D5+STaCphlC3VFmWdq+VZUmM8bpXL2CxOCboQ0qLO+AY8Pr1EeV4BysQQ6quuDI7XF6xl0+tr7xF7aF2XhzPXNpiBgRcDi/aHESZhH0WcnajyPveUbj2wXoYE2lRWvLrVCDGRXZ04camiTO99v0StZjsshfcl4INEhsKYBSSsKgDjhp40yH03/z6B3ldEVmPU4ZhTuVrCC0bgxVm45pBtUarFu8TK6E0kcIKRsH7/fVuEtdiEUh4Q9/zIlVWEyxKJPV0ETVoNLQqbBnDc9bxt2e9jEniDGkg2NSYK9S7SN+LaC9lx4Qbn3+RUwqXkYRN7zTtPr6FONGiIeyNzgGwXN4javllXHrWv5+POeQPd3KgSUzCJAWMDgNPkf6NNlh953v0He/9IKfuuIPBygahLNluA9YUaFRa43AUhJCCYRGLoFTW0Taeqa+R0uFKm9aH2GLl8v0/sJdqws7OlEOHDzNrA5P5nMHqGlAxnu2gdoRdO8Fv/ot/w4UP/Yp++7OfZPv+H4j6kKWlWqDJwMzd1b2uWLxskdgnPDqzunsI9dn2/nmXGJMc0HdBCmCGuLe8X9/6gb/HO979PkaHjjCNytg4AgVmtMrOvOXwsVNEH5jP52jrsTFSxkg5rPBBb2AW1aIikeTnzdJ5N3TyFCqLuVqIubgfcbSY6Tb3fvOrPHvXtwWtGSFEPG1o6Ru5dxvt4ciLMf9idhBgXIWJwsAOqCdTAgbRyEAd4wb06HFOzy2f+8lzchbo3WjfQDmkmbVIxr6WNXzYoP/wTbdwqN2inl7k8Ml1nts6hx0KaiKt8YhXitpQYPCFYPa5HXAQgxtUzOYebRvWV0dMZ9sYaTAxIkXJuFjlsbbgP975Yx4BGopEvAB8vDK+ZFlN6npahwgRoEDAgPeJ7Pux96yzOp/gtEXV4IzBiaWNU9REqrIktllXeJ/MKETfJI6AFNRq+clj2zSAuAGtV4QRLfMMWwMKB61QR0tavv0ieyQpWxhjpN0LvbtulYx4Ob4iT2id46w93t9gsIjY1MQOC6YGm8UGAhj1KIKqSxmbYHFmyCDOGaAcBT50BP3Ye07xvltOsLKzxWCepPgEn3JBdoBGQ4GlrUFMRK0hmEijgRg9VVBK7GXSi6+kGe2gStBkqLORRVEhCLSiDKsSvTRlpVxl1goMVxivFPzp1x/kIjClI94a0EAbQ658XWF+ETKZcBlL/YtphoixJW3TYAcFVpT5rEYIbAxH+cYMwP7BVK/GjAQGHewkvxf3PBdZcib24hgNBO1gTwZwYB3YCobrsLKhp97xXm5949u49Y1voVzfYB4NbRQa65KKWanU0SS+UGGJOdoTSWp+ouB9g2CoCktURUOCqSa7cZ3D/bYIVMNVZvOWYKAqHb6doRhMMWBOxA0O8Wxds3rbu/hH//ZNPPvQ/fqDb3yVrYfuF+IYgBAbulSdQbCiaIZSJsWwBEzo+I4iKT7piqMdx65LaARcqnSJSY+2gKJIpW1j4NZb9N0f/BBveMcHKE7cQW2GzBFmGBBHVIv65FQPxRHHyc8YiEM0y03bhEK4kV1glS6ASIFaRHpGY0RQMYgtaOqWorAUVgizGmcECS0r1nPfnd/kme9+S4gzSmuIYUakTaiS7oeypo1dqm6H5YTDC9iNe3ZfBSZqiHPParVCbGYEgZWypJ4pm6zyuft+zBMKfjAitPO+dEg7AynTlBxStvx//thbWJ0+R6FThusDzl3YZLi+zjxOMURUPMEkdZguS7nf6XNF2Jm3WOtYGQ64dPEMhw6tM520DIYrbJuCJ2TIf/r2Y/xwjEyL1Dkydb+OhFdIKeqFzNgMmxFDiC1lCWsB3nxknZXgs1qG6QnRKqlJjcTdeZt9MYkUNjWdrNWyVUc269TBuw0tmIKd6FlxI9aGyvZ0ksoCAkqJF5P4QNhErFelaRfB3XXnwHT38PP5CNIh5vJCo13WVBFJmUyPQJinw8oXxKhiaClJi1oZYQ145wj97XfdzN97/c0cZY5eOM2GJDGCNlePgwiKTeOMpJqkqgRtQROhVdQgWibezj53crYxKTB2PRwgN8Gjq5gK4/GYI25IbARkxJiKH53f5O5nk9BCkIKksrXgHqSKeD6hS+XxX2i7gupBkss2NL7FWaUarlASmdSz5Cn1eDQWmb4b5DGSEl8pPDCIzTwmJcFVl8HW1oFL+m6J6asJAmWG6XEwghMn9aZbX8ett7+R173hLRy96Ra2Zy0yHBHdgGlQGhG0dERj8DEsYBt0CQWz1HszLiHwUuhjADSJiyy6Vh8EGS/HVDo4NyC+lzxNzr5BKZj5yGhlhWnbMB4rR970Hv7gLe9g+8zjevrnD3Dnlz8v1BOY1xBqIkpUn7GUofd5XE59G7LoSN/PLMFaRVyW2s5zvdiki1sOYHWd4W236xvf/g7e+Pa3s3H8BAFhpwlM3BCflRRFDWSxne6+EO1/NSNNlgb4Ps/d18IWFYyUWIpLYyliaJuW9Y11Lp4/x2pRcHhlxGz7AivW8NDd3+OBv/kbYXsLJFJaoQ1p/ZfU7qjPOKQOIslCX4nqduL59+8gwLgKMwoaFFdaprYg4Gki6OgQdz875kuPqUyAWj2oRaxDtEEDFEXENJ5jwO+/cUXfdnKV0aVnkWbOdBpTgxifssodECeYSGOTU+FCkv7zdn91pMStgIHt6RZHj61y6cJzHDp0jMnMcGGwxp888BBf306OjBFHaOc4DL7jWOxdG17Ekfk7fvwFrfOb0qKaoFHDFt66jt5+aI2q2aRRk8lRntgpzmAS5IRO62L/TDQSjaU2Q06fn7BFzqfaAK4kaMV2PcWOPaMBiXRpgIHAvCWEgM0SrFG1zyIJSd3ruu47UOSLsKAiL0FRxKSVKZIcGmsx1qGaMMA+s5KNLYhi0ZgyZ6PKUdYTKpIy1K+fQv+H993GW48eYrX1yGQLaRRLRTAzvIm5nJwyQKoGMTF1PFePUcWGSIwJPCNqUS1ysBPZb53DTirakBcWBTWRYFLQWFUVzThgygFzGbFlh3zpgQd5BpJ6VEfV6w8jEnCZF9MRL3Yf42sh3oDkaLuioNWGOoQUdMdAPW9gtAo7m6D7yvS/CnMEO6STee6JTcZAIWnsdde+G4ur69jjx/T4yZOsHTrG7W99P1KtsLKywmg0QkxJUMVH2AwWHY3wwLxuaH2qahc2xzghUBiXoHtCbg4ZF8GyaM99MaTeLkLCjqeYzuDNvufZbliLAq1JzrdLg50idow2k5p42iHRu+TXuBXKYkQ1FIZVwc2HDvNvfusf6Plnz/DIz37OYz9/mPnp07C9KdTzBKHKjGwfPMTOYyWVNmzXtcim0FEMDFcwN92sp257A0duOsXNt7+eam2D4fohpBzSIJxvA61GMKkKL2nXewtLuFrJpTejididVJVi39X6Bkd57rHFwaR11DAaDbh48TwbKwNGRtg5/zTHRxVnHnmYH37iL4Wti+k6GZjU034LTlIWoh97dHmJuOD3w4suBAcBxtWYRKwtqOsaNYZgSi54ZWu4xufuv5fnAC0B7yFWFIUh1g0WWLFJ3vDD6+j/+IG3M988zbEqQhOJMTIcDtmajikKk7JLOZPemgR9qELK4oQuI7VPNqyGXNy6yNrGgHE7xZYV0+C4VB3iiz99ik//FLlUgpSGZuKzKIFNWeiiRP3+qoDUoTt9gTVgpPAbbzvOqni0abA2EaWCzXRoiTlDIots4D5aox4vBb5a4+FnTi8xKjyIB28YjgYU0zFuliaKWqBhTKKBp5Ci60HixIAxhBCuDJG5hmaW/kUWjkK6p83iRZcpDi3Rd40toSwdoUnvV0CVOy2P6po3VuiH7hjw0XfcxknTckRa7OZTxKmnwDEoVrEDxzRqahoeZWlv0hhTCcmZwVN0BOmsW5Wy/oDsI4cFesfMLiXfd4k7tYHRaJ16XLMdhPrwEb7/8yf4/jPI1IBqXuSXAoiOfdBTeJXkgO6yG9+tM/1jzL1qYXFcNl3noLiyxCq0Xmki+DYwqlY49dHf1pWwTaH1Puz91ZtimbeGmEUKoiRlwpW1ddY2NhitruFRhisjVtbXGAxHCSoYAj4qHktNiRQV3pbMrO25c0EDISoSwRYOVzjERYIK0Yd+bLl8unOhiGA65yhdjyBp+KOJS9SJPZic+JFXwRx8I1vXw6eDMAk5oNOIwdIaZd7MMdYyWNlg3o55/MJFBjZy+PitPDdrcTe9lXfd8nbe95v/iFDPmG5t6fbmOebbO5x96gk0esK8YT4dE4KnKktGoxG2KjGjAcONQxw/fpL1Q4epBisYV4KrEFsy9wqupBFHE6D2gWBKbFkxKA1hPk4iLNJVoOMutSRUehipzXN8qkCncR9fBQmil2+LmXrZ+mMHZrMJ66Mhfj4GqxwdGs7+/H6++Mf/FS6eQQqDzhV8aqrX6ZU0jfb0yDS8TA9j2wWXPAgwrp9FwNhA0wYMA0IxYHs44BtPneG7F5EJ0DYgoriipK2nVMCKBWaRI8A/e//tnDJT3EDYns85bAvWV0Y8u7XJ2sYaTTtF1GE1EsTQ2pRZLQPEfZ5dRWG+vcPqYEhrIzvTliNugx27wVfPbPPnD27JNmAGFfWkBoGVwZDZbJZyxR3kZddG86Ne+e1rfxDZf1LBohwH/aXbTuL8NhojVgqCAW98UosRRbIccb+f+zRBRRKxt61KJnaVh083BHI+ugDCDMwqYTrmt18/0HfecYQ7f/AMj15CJi3UpDKYj4agIZ+HiITU5wHlugcZnXXVi7jk9vXnNiaYTmlTw20JOd5oEsk7NUVsOazw/iH6W+88zDtOHmIU55T1NpU1FNYhbhVZ8ZjYEv2Yee3xA0fEUEWTm9OlCTuYmBar3LyoDPSwOC/pXzCXkxRfSVuQk01Wk+qcs5gdh0ihwmRnSrV2hHON45na84kfPMk2EK1JJdAlHswCY5u2u0s6Kv+xq5L8Yjh2i7Fr9PJxHGMkeCW6hGdOkCjPYHXEh37jd3HljdoFI5lzJSIGkSRi0YaQ4IbWYGxBEzxiDY0xzEk9gtTk7zmLBiWo0nhF6xaiYm1JWSUZ0BA8Nndf1hCI2iIIzlhsWaUEASmT3KHNjFwhfM1Vjp7zlBMQ+nxqgwf2EiwuAjbImYnklCcZ00ARG4yR1Nw3eIyzDDcOgXq2vUFlQOth1mgmDhcUhw9x7OjrEFFufV/EWkFEaIMnRJ8iRmsQURpfp2a84mgw1KpZ/tqCF4xU+DZ15RHrKIsBUaBpApPplPUiBQtpjU41aO3FZxbw5m69dhn5Z7RjjNyowUUyyfwvm6FgRs1S2JFgag5DQYttZpj5JT7/R/+bcOEMhBr1niQSE8EJxhl8Hcjo2rwumI6GsQgu+mzWC+/fQYBxFaai1KHFFo7YRnxR8QwVf/2Ds2wBtUlwptI42ramAFaKgti2rAC//64VfffJAcXkWdbWNri0PaZYGzGrW7RtcOrxMSuWqAXJreFFaVzatu7j/GqISPSsDkc8vfUco0PHmeoq954b82d3PcETQCOGtslavDYyCy0BGBSOeZshOPt1DEKK4H3EVCVxXvPBw3DCQhEUMQYbHUrEFy1BYs+B6UjHl0k8voKmomhpqcuS0+Oap+pFxkE6VEv0rADvPTTiY7ec5IOH1/nMNx7SH11ALgKbQftmcRaTyVtKVKVwBY2/fvCPuPQvkHC/u1RCAMQgMVKSYIGdClSRP3IEeN0A/chbbubX33ILt5eBYuccIz9mfVhSzwN13TAPc4wTBlVBWRZgPcEv+joYTf9sjDkzmkimKkn+1ptulzQ57xLSoizxRSfZ62WK4E26H8tu9jfgcyBsiIysZXveMq0Ejh3nU9+4h5+T+l4EP8ipY99nq5Y7gi8UuxbBdDff9AvNL4R/p7mKkSwuBVJFlVT7Qsz8AIlgCuZ1oFw7xEzNvvNwXr5FZpMxzgnOZfih6f6SHfiiwpj03MdIiJqqm41HxWOLAusEVxSIc4gmWEUbWpo6OY+NKsSIMSZ9zhhUlTZERGTXGtatafZKQQapqhbF9tyMG9s93F+zcW9QnblXeQ4QjVibank+BkKrBGtBBK+Jn7c2WMv9ZtM1jjFSx4DminiMHucKrCloTcRrzFBcRTVQDSuIAdUUhDhJFYYYIwRoY0KJOFvgNdL4lojiCsdguEacT0EkwzlT1kNUsRnKo5LrsAKI6eF3IikQuZGhnpI5SaJxCeWSqnvBpBFcWsOwEprJHNPu8Ef/6/9D2DoNYUJJm8d5DlOC4nWRWkokfLO0NsddCeCX0qj3IMC4Cus7eRcON480Eb7808d5wCO1g04lgRBxaLohZITSJqfoPa9n2JxhRWa0O5ZBuco8GibTKYdGQ9rJBOsqPA4vaeAMfE0wkdZCbQ1FBLNvs6yyulYw2TzHTYOjXJg7fm4Mf3jP4/xUUwUnqoV5hKICPE1MXrAzQkHc10Zv6RBSrO81Ked85F23M5yNERsJxlC1QsyORTAeF8slEtn+WjDgnWEikYefOc92rqU4gDahiwoNiYdw083cdukiN+N4/Ufew8PnW/2v336QBwxSx9yqzhiMsbQ5qAjh+jb5UKBZ5ltgMh6i+4BC8Knql49rAAyBNx5G331qjd+84zgnikiphjB+FkKgrCpMYbk0b3DGUAwMlYUQPL6dMp1HCmMp3QDXdoMnLUQxO4s2B/bBCN4oddFN3hEbI0ZDr9yxX6aS+lfYKJhIjyvuzMTEcVkphzzrW3585jRfebKWKeAZZvxmS6K1Z+uCi/womZfSvd1nsYBfDPfuhWcfkdxPWAw+RpSIGMN4MsVZi7qSINd3nFw3E2X98DpRfarUhLZHwple1hKIgoihQhBrMUWZKpwizNt5KjKGBo3JYSusw9kEYbK2SFUP6AOVNqZeFm3wlMOFCp/RXBGMIEtRh0oHWQRvTB8Ei0IRD2RqX65ZBRcyR8LYhJAwad4TPIaAiXMITVqvnSMo1F4o3ZDV1TW2dy5gjVJYmwRDsmcqGpCoFNalHldtkyoKmoLZQpJSlPhAjEoMuYIuijEJnoNAWVpCaFMi11qKoeQKxpjpNDIs1lhMVjEFRTHSsSXTXZRJyZqyRFEgmpxI2KceRtfKrHpEY67QmH7uTmMiYgg00znNbJtP/n/+F7h0FtoJI9okYGKEWrLSTT6NxoDr5RvJ/BgW2UtNwanw4nK1BwEGC1cxkm+8pfddWJTRuoku5Q5BslPWRIiu4qJU/M2Dm7KVP5tUGRLGOSaBVppmh1uAf/rh27lZPQNtseoJPjAarLGzc4n19TUk1pjm8iW8iyxruTaOedreEjlIYsqMS8ImmgwbEbV9mTp9JhAkol4JapBqjR0q/vAb9/KDMXKJtI+FrQg+ZAx3IgtKYanresltuZa25Pjn7PJeF3CBITRoLkCUtef1Q/Q9t99Eef7xpBwUEwkuSlIPSpjhSAJT5amrky66ir1dJjYvN5hLRd7lDJ9ZWkzTZB2BeTA8dP45tlmowtgIAwNDDRwDvX215MikodXAoIVfPnWCk//8o3zq4Sf1B0+d5fFLM/HR4yM0JCXhvgFfn7Uw/flcjJm9WaDnC7zirk2lo2PP9j3EVFEoSNCnNdIIWgPefgx975tex+tvOs7hYcFRnXJ8fJrRdAIywJQDtCxpY6BtU1/5JniMjxiJuMJQFSXRpuxYCJrbDS6gRd2umGh6lZpEbLNESZkxETDqs+ttXnaQkbJPJgcGGdrEAn++9/Qs295R02Xmgukwxaljd+0t83KF6cpx/vjz93ABuCQg2nVxWWa/sBRcLL9/hb/fsLjl57M8zy+R5UVJ/LrCUrkSbVo0KtVwgAbFGtNDEm9IE2U6n9GPTRGsdYgIEpNAgLUFGlJmOmhyHPtKD4rknjDW2v6eNEZ6LkZM6WJEBO89bd6uK0vK0QqNr7NjuGu3dp3TqEnlKixVlro5vOMfHdjLs+48L6Otl5H9YpTSFZio+NajxjJ0Q1qFyXiH0bBC8UhUYvBo7LD7kiF0AVWLiMFisCbRsoOme6pwFjVCYYqs2Jb3IAoqkbZt0/0oqRrS1h41gjGG4cqQ4NnlVHed5aVfp9KcmhqPxp6zpvnoZbksuw+mOaG1CAgWtuwXdNaNEwN9w+4F32SBALAasRooTc30udN8/k//I5x9Qmh2MDm4gBTse0Iq8VgBH4mR3GNNMjSquyO6nX7px/eaDzBMx5RXIZrkULb5XLoIAy3w0yliFDesiCYSY8iRssFKyVgrLqwe5j99416eBeYCoxYGCHMcMxQzNDCLHAI+eBz92KmjHBqfo1BH1CHOCG0zYVAZmtAQNIJz2enx/QAKkoZNkboaXVX2pndwYop+owDSEIwn2DTxjxgQZx5bDylsAaWjNQ1TU0NUYqiIbsjPgvCVM6f5zgXkPNAOBFpL6zMBMmjvlKhXUqO3nBO9AvZ5rz3fYQp7IB2XwRVir4KQXi1H3QZMRRU8NwN/8O4j2MmzGJ0Tg8MWFfM8O5XBpIxP9CiGRqqkM0142TnsdP4VIylf1B2PaMRqCvK8CMEmTKrBJgypQhTBqOKCJTrHnU+O5RxgcCT6scdFGBL50OvWkTgDG6gnNatrBdvjx3n9YJ1/++YNdt5wlEfOndfvPfIE9zwHZ0gB4txkRSoD4BJvXCU7/waHZUKdZesypGKxZKWHpWtrJPZEQjKWWp0jeI/TyKqkoGIInAC9Yw3ed8dx7ji6xm1HVlg1ERcbynARN4uYUDNQEDcChBBaVFLDobJ3glMqQDTjxfvVKO3fcu455n2ErESSHR8Xd+uMd9KHyzmyl2OihqotMAqtVbz1qAkpSGBR7k6fZSkQSYslaiiDpbAlwSrbk21WV9cojGHr4haHj9zEji04XxzmP3/7R9wXkC0Sf6TUBge0+NzNPV+u7kRIBNoMHlpcQ+3/gxs9yEjXW/rDNSaTQnVxL5giYcW1nlJI+nw7r7EieL28V/ENZQpWdrsAql3iMo2RGLLTY8xld3rnhAYUYprHIEGpAEyWte1TEAac6eB2kdDW2GX+Tz7vGC47r5HYO5DLt90+t4K6oU0Fmow103xSDRmGTTd3lnifT7hNcrBtbIFA6UB96BdhEQt2AZ0JAHahP5S2GhbXW0jNhveaSBqXYsCaZfoXTuxivW8jtutBs5R468Z112hu2WL+bH8v73Nw0cErLbsha5qj7G6+j9JBeCVXngxIoImRweoK42lL2yrrKyOa6QQXWg4PYXLmKb76p/8BfnafIHMI87SOuKQ27TuYkyq0+SRqB1lW6FiYCstCH92zA4jUS7Qed9u/zrhT7xmUJdEoPgbmoUZVGYpgTcm8tdTDNe67MOXuc8g0f780hhAjirCyssKkvkBh4XWg/+A9b2A02WJdY1bwSD8uSw2bwi7y2iLD0+WBrzUsqstgaMYppjJppK5rKi0ZlBXWDJj6OeMwRQeBwcoq9WTA2A55cDznT+46J9uAH4B6IffJpQdXdD0l6Nz+a30Qex518fKyaaRXKfKsAqdAP3DbMUa6g7MwGI4YjxtikTKaVey6Icc+ExKELO/38s0AUZWYVvGk3qGLTAU2dxoVkKzKgoIaJRqDmorHzpxnh8TXNcERc7gipMz/O249gpWAj5HBsMS3UwbSYJuGgTccKYacuLnkHafewe97w882t/Wux5/mJ09HORuTZrniO4h/n89QEnQpAlEXbZKWF4RqUWlNDg2LLJMDQusZAbdsoLcfPcTrDq1x2+EVXn94jZtXS3bOnOZIJaww7rXWDZow2jGCsbucfFnOvF8pzb/HLndkug0t/tKTT9Or5/3uyzHNmdku9Ok5DrLIwqXgIv260bjrdw2WpvHM6inHThxhOhuzPd7m+IlTnNmZ44/cxJd+8gTffcbLNhBdXq1o9uzHnie9k/ECOOV95J9cK1s+l7KnpXfM/3djcTlTfkMHFsv2EhysFz1W7YAoL8V2j6u/6+/1PaAO7Kotwp6F8UpwMyFyJRjR0mf1SuPmKixX5p/v3ty9j1f+tcvr5d22r2rPrrl1x7LrmEQXTWa76XrPd1KMJWAc5ze3GA7WWV0dMN6+xMmNVcLWNs25i3zuz/4zzU/vE+KEYWkIJgUW85QTuHzev/JLYPdc/1JP42s+wIid95krZR0G1GQJvehbtCoJFuroMdZiIxRRQBxNMWDTDPnCvT/kXN7maOAYzzyG3K2knSEBhgofe9+QNx+tGM3n+Dpg9h0CGIgmYNTmiBoiDhSMFpgQKcsRPio7zQ6eyHBlgGCZ7ATGbsiFaoP/+JnvsU3uzZJaSUNMB9cV2lJiLOGYwyJYvvZ2hcGynKHtMYUacSQC8TtPwbH1NeTiJlbS6ItxuVhslp5DmmCvNTgiuzRiciBj+vKwxJxZyiRKVWhFaKoR9z/yBE0E4xJ4KwJtvqePg77jlpOov0jtlZWVksl4i0FV0oQGWQWvNbSGUbS8ya3y1pMb/NbRw2y9K+qOF57eusTDZ07z+HnPczPYITXz80DL5RCRbkgZUgBmgQp0Azg0gCMbcHTjEIcHwttPHOLEyLFSVcS2wcWWysyw9ZiwPePkyggjHu89jW+IqohzeOuI0fea+DeiBYFpGfI6GhdzEUkVStRgc0bd9Pdauh9SF1dBxRG1YW11SJhPGIZAWa0x2Qm4Q7dx94UdPvvgeZ6MqSKVgtQum/gL5Cgf2IEd2IHdQGY1LiUtyRwj7eGuqapkdveCyWtdyGuAdY4SobQGnY05XAbC5mnsZIuP/9F/wP/8fiG2QIIo+pB+x8gy8uP62Ws+wIDsdOb128Z0UlwOMtQILYF5aAkGqrKCVvFNQ6tQbxzi7sfPc89mcroACjFMcRSuJPiGtplyxMDrLPqrb7qZcnqOYblKO9vfACOKYrIKUtCkIZ1uaAvBIhopC5M0z0NNS0ScRYxDolCbgqdlwB9/+XucIZG63cAlAH+0OGMhZ7Z7J7/L0OrCUb9aW6gZXDkfvfxuH1xgQJPC0jrw6+9/G35nE4LHGctkMqEsR7vyvF1WOR2GgvirHKDLX46L6pF2DmTMsJwuLArJ8RRJOGdbsGWHPPBshn15JRJSkdim3XvbMTjuAnEeaKPNilGKE4PXyPalMeXQMHIjpFWYX8JNZxw2I07ZgrHAG44O+KVTb6UZOqaVsKWNXpyOGc/nSN01LzK5tJ5qJ4m7Ezl++AilMQyMSUIHMenfl8awQkM5fo4jAtYbmnaOaKAqSlQCcxqYzohic4dSwZgiNWiSTkPjStf9xrBoIo3x/X2VgiXBqmLVLgKLXRypHOQqICb3H7QMS8POxS1WTMHKoZOcHQvnfcVf3/NDHqpTo0tv0j1R2pTFejGC3oEd2IEd2IFdH0vw29yHKvNCOjGDvgaTK3bLqIZl0YN6XnP00AbTS5sUfsaqUS6df4JP/7v/Rdi5AFpjC4EQadsMZzOGaFz6jXC1PswL22s+wNBMog2SsNVOoQzgYgRRZOCYxIRUFlvgfUTbgIlCUw14dKb8zb1PcQnYxjByMJk2II42A0QLYBjhn/3STZyMM47ZFtoZpUtwlv2zmHs7xKzwUOYsuVuUvQtLXU8QAoNRBVim0zmBgnrjKJ+6+yG+sYXMgAlQzwE7QIJCTD0E6I5yudRnlkpu1/QG30NI7R66oKJ7RHAKq8D7j6FvPn4Ie+EJKpTSWcaTOcPVDZomYd0jgtVlhzZJw10TmIjEDNnKHaWlK6oZVGMiRWrSLC+MJEiQERpX8vOtmiczRqggOY2CEHOg/ME3HsXtXEjyf8WAup1hnUBUSrXcsnaMEFv8rCG0LRIdYoGoaBTWBgPKGKlapQnKqDEccYY7nMDqEC1CdoBlodRBd44NsblI5SyFMxhVYmiRkLS3C1GsbZh5D6rE6BFJsETyAWlUjDFYsaBZjrCTNYzxBmbYdqTsQDCkRn4h42ujYONCqay7JxYdjvMGspSuEZhubbE+XKGeK9PGMlk7yp/feS93nkM2AbdiiLPMgTHgIwkErXoQZRzYgR3Ygb3illgikNbt3XwLk1XSBBdzEjUHFkGSemASEirY2dxkpA1r4tl64kE+8//9fwrjC0ALvkUg8Wh638cl8gXQqWheL3tNBxi6tGh3ahRpgY84VZRIq0pQjyscWEuYBSwFbm3EeHCYr/3gUR6oydKPlqlvMUaS0xhSl18HvBH0l289wVrzJCMTCdETouGK8MZX+viNgkasemy0iAoBRzQwDQ3loET8nHo+pShXKNcP8+ROwz1PnOHzj81k28HEgx1UMM+Dg0CHju+pkFciQ1wLDsNlB7bntZC8qr5yAUSlIlUvPvrON6Jb5zk8KLCTMdFDURSE1i9BU0yCLvXozhRYXDuKWA4yJObAIjuVqknXW7PUsRrUpHttQsn3H089Vzpeg2LwmeB9XOBdtx2n2D5PMdhAioLYjHHWJMJWMMx3kiStMQMGlcO5NCV47wne09Q7iBEGIpRBCfMFKl8UKuvy5Gd64nxS6cgcpthgvEmwnBjSPyJGkhJIWY7w3qOqlJWgGvLrkJRpJBHaRVPlRmOEqAgGJ8JLEQh41ZokPKbRpFplVfvgwkaza8HZm9lK38/jSwPWOOY44qFDnNERn3voCb7w9Fy2gVAaQpvvV4HGk9cZA80NKrF6YAd2YAd2g1vMc7pmyBMsggubgwubA4yQi9ldU0GAw1VFbHbYKJVHf/B9vvOf/lfB1BjTIk2d1ocuh60GjE3ki1zJWCZuXw97TQcYe82oyRrKyZSksuJjy9CUEC1zr7iVVWblkAcujPnGzy5xiSQPap0leHBFBX4MRDBCFeF3332EE37CilhC2+RmbYGFy7oPpoZgOupq7HXFTVS8QG0i0USoLOI9fj6jKDao7YgfbV7iz+95jovAtkJ1aI360pxyuEaYpwz1oKiYt23fBXLxu4vfv/roeQ9MpiNksqCX9+pSmXfRfW4IvL1C333TOm7rNKOiQIPHB09hV6jbFmy163x1WtoLbZ2r2//FPqZXEYvd1bxLEx+IFGQgENQwjzBWy92PnWfMUpxqLCYm4vT7Xmd1w0UGNqDRg3EUxmYORyKPm2It9fkg0gSPr1siAVcYXGmJWWdeRCgQiiV9fItg6zZ3Rc0SgCxEAoLAwFqiJOU11ZA1KTKJJDhmc0OIQ4wBLSwYJYYaRIkRYvQoSebYSEDEYvOkLCI9l+dGNBuhDOn+cRFcsJShg5wlC5J67XQBRtdMyeaxYwQISjla59w8clFGfPvMFn/047NylqRoZ7WANgE4rUuk/SVhlwM7sAM7sAN7hS0YsgBKIl93MvRGUyXbRNMHF5DzonRS5mA1MNs8w23rI+75yme576/+UAhTaKeMisyPNB00vUh6l3Ex6Scu3/UV6jgIMLJ1GLderUmSprwpHBLqpA8cAsEbWjviiemcLz/0CI9pwjdjIPg5o+oQ03qWNIVVKaNyi4WPvvUOjodN/LTFDgfU05bBYEgb9hMiJYADjamBmILVdBtL7u5bFY7ZZIfKe9aPHGdWrPGjZy/y1cee46GAXBIw6+vU21NwjmY2QYDVwYDJfIzi+wEB7Akurn7vL6thyEJlwdB1oMwf7tpbx9SwbQX4pTeuc9R4qmFBrGc4SbAcydrti/AvbW0hbKFcfXC07OV12+pk+Ba1EdGFYxlVqBEmGLYpeGyKzDCUWZcrGMHFyFHgA7efIszHlIVhNp/hXElhC2LjwQhqBK/pl0UEcY6isMToQVtC8FiTYDhZ0D4HMiZr4ytWhLinpWevugPEkERQkxyvQYym72tAo+JMiZiSSCDEgGpSRuqqXtYWhOwQixGctUlz3Qe8BsTeuFOYQF/+ttHk5x0sKgdpJuYmj6nakaQMMwcIwETqKIznQjz6Ou566gL/9btPyWmgLgBvEK8UpICw9pktWA2gaa64Xwd2YAd2YAd2nU2FYEwvIYMmGfSuiZ1R00NiVWJqopp7MRFhEBoOD4TP/PF/4tx3vizoDDER45W2htLBzHdcu1y+VhCjCBFtr9Z/eXG7cVfna2DJEcr63fmiquTW6KYlmIgPgcI5SrV4bxkM17kQHU96w5efQrYBNQ5Rz0DA11MEQUUojLIS4Q8++nZdaya4do6r1hnPJ6wMBtRtzf7KSBmIJjs6LTaXy1R8L1NbtCnbXbiKbYXzWvDNp57jm+eQSQb9x53tFDC0Te4UAOP5TnISOz/5sgDjmh5F34Rp2fqfdhWqKSsuNnFsDgEnQX/9XW+mmJ6jDA0m+iSiayw+BiTzIhZa6ylsibmRGWJ2BQJXZZLPlWiusthE6M2TAlHxwWOKilgMCeUa377/Z0yAViqMzqgczHzDGnAL6AduOYarn6X1gaIwSAzQgqMk0qIWorSZTRJRTR2qnUa6JmydHHLv+HYdt40QrWEqe07BcgfgbEYNkqFA4juIWdb/jmO6nhLB5M4oEnvZ7U7xopMVDvn7RlySqr1BCd6d2Tz+bJRUUcwnLvbBhQebOrJ2hD8JYIKANcylZVauMndH+MEzW/znb/1cfgY06xXUbQrMYpMDwy57YmDe4aTgRiXJH9iBHdiB3ajWw6JUE58uRGLrMUWBKwq89xSDislkp++DZ6JnxTp8WyM7m3z8j/8DzRM/FfwY4gSX11AFmtgFF6lrerII0feOf8v1LWS/pgMM6Hy6lIHtHEmfcW7BGAI+EbrnnmKwxrkWZhurfOKrP2ITaDKW2eQrJTRYCnxMvSrePEJfN/CM1ONC7gxNQRCDGrmGGP6XZ6I2VS4yFMabrsdDQtE7rzg34kJTM1tZ5SuPPcUnH63FDwzThuQYRyDGzv0G8k3bNWPo3sj/ki7Ssvzr1Tg4u6sXfWI3v1UVA+q2gdJA9JgWNgwMIvzGW4+y6msGvqXUgNEFL6UbdGYPz6Lr7rz47ZcfIEZyoy/JTdTIjXZkUTdRTZ1vi9IRGqURYSoFZxv4ydNjakCKAdrMaD1YPAPgl28zrDUTjMZEIg6BQkGiy2pVqdQjeIwsgm3wRLNothQB1GBMvKzqpHSOMIvAQpbO21I10GgKzLpGdUoKYINpM+9kN9+ADmrVdZ/oo5hltarlM3ljWj88hAyLM/k8+Jy18gkeRoJTWhVUTWqQVlY0xjJfPcS9z4z5/339UZ4TmGgBM1JjLKn7oZfGp0sJkADsqTwd2IEd2IEd2CtjomDF0LQ+cULLClulwGJSNzTaUgaltZHSwsgadDpjFB2bp0/z2b/4L/Dsw8LkPGgNse15oREIMa+ffU+1Tpxm0ccq4TKun73mAwzIgUV2qEKWCg1iCBJxrsS3ATda5cLUY47fwt/+7EnuvYTsQBbLMf1FE8BJwEeogI+8ccibhpFBqxmKkui4rUbEJMLxfun4J5190+P9kEhjk3xm38F4rsiopF1Z4Sczzx99f0vOCoznQDEEPwHSjdSFCgEWbSM6y+fYdupCXDvfJnaVkjyO+sZumNSdF/rgoyI1zbsV9CNvfSNDv4lT31+DIG6h1kPqdbFoskbKNEi8rPnNyzY1/Q1gusqB2r5rc4/uEiGIMI3CvBjyyHMzHhojHkeMob/3hiTo16+86TZWmmnidGEw+BRA5T7f3fFZXfiZsWsg2BdmsnMfDUa7f5LvmzRvpQB94eDv6qzbXY+l31uudkRRovEEE/oP7+68ulsDvJPDpX+e2zXud5R+FdYFU96a/jxpPq+IMiwLxjtblEVJVRTMm0BpK0q3xtnplPrkce46c57/7SsXOANyQR3YUSbU14mzY6CO9F3UC3Lm6iC4OLADO7AD2xczgNYh8XstRK+oepoYCAW4asA8zKHwlIVFZ9usa8tT99zDN//q47D5jGA2QWegKcHrNXO3VVCVXLnIa2r2cfeCSq6nvbYDDNHcmr2TGzW9c9U7WK3iioraWHYKx2ZQPnX3U8yAWkgOYgy7s9yamrcdBT546zFuKj2maQkoRsGJIRIwIql6sm8Wk/Z+90rAG5Mz3oAavAo7DUyOHuMP/+r7nHEwccDMMrAV83bSd2fuTHuvuP8ZUmsG0xcZemWpq84+P59CVXJG53WdQ3oPEdZMkgz+rbcd5lQlVNOWIqaAIeZGg4sGNMnhT857uk9ScHGtpN2yw9w1ixPNv6NoDjokQ6TaxtOqYYrBV2v84InHGJODOd8SScGTA14/Qm8/tMKouUjIGCfRxbnq1Im6i6H9e4uOG8sE+bQL6UwkJ9X0cZHtg7PlSpJ2jGQ0X5S+MqQLSFX3m7E/F8vnpesBkctJuySCTW5CdGMHF50pC/nB7twIqS/GdDzj5NFj7Fza5sLFbdYP30wrA86PW/yhk/zwuS3+/ZcvyLPAWKDWIpeMSIS+HFUESS/LbtsklbzIC3TqPrADO7ADO7DrZtp4qtEQHwPzeoY4C1WRGuHFlkI8K5VFdrYomxk/+sY3+fEnPy3UM4QZJs5wLhG1m5DXErW71aK0I3Iv/NQ+p36d7bUdYPTWYd4XEBjRpBnfzhpGR9Y4PfFw86184ps/4FGQ1oDGxGEgBkRSs7oEQ0hZ5HcfF339asnQT1JDEwQngSBKowG1cm381JdphohIi4kGbyPeGJSYZdIEL44wHLI92ODP7/wRP5kizVqqxglCO59cmVqx7OwrEA0li7JcIC44B9fyTl8OzfsdMaCpq5jT9O8k6K++6XUMp1uU0fdfCv09oDljDgbf8wXS8eTgQpKTe/XVJ7Mgc2mGSGnM5cvYk819CFAMCVRsesPdj8+lBjT3Ueky0xXwobesM7QhVWaiZsJY5heJ5qY+hihK6CLDZVJ5NLnStHTYmSfhl66t1UgVoMhBcrcJlZjUpEjB2DL8Sc3iljcquFC9xI7oi4HSBU2wu3pyw5okAn3HRRGWRReE6aUxzg4pVwacm4NZXWFnreSnF2f8u68+xRawTerUbYwQ2xkrtmQaYqLz5GuWFp/cv+UGhpUd2IEd2IH9IlhRFLShoY0BWxiss4lo5xuaesrGsMTubCPbm3ztUx/n4p3fEUKLpWZAxBPRnsgNPY5GSeTFmIVtlioX3WdfiRXgNR9gCLHP2Hb4byHDg6JBxDBrI/VowOPjbb7xyFwuAfPogAKRLAGKBYFWAlVM1YsPv/5mVlFM04B6DElC1PZE3r2p/lfaFENLtNAam5sNGkw+9tpUzNYO86OzW3zmp43EIUwngBgq64ihIWbB1uVixdLmE4lcDY6UTE2aQnEBobpWIlqy+3lUg8HgcLSkANBpcsI/+s4RNxXC6rTBSUi9JXbh/yNRNCtqdUd1Of/gWihhpUx/ztiT+3Z3aldYVLMIAQZXDQlxyANPPsM5oDap+lE4wbYFQssq8N433ESZKwsudlWRDvoXe15DV2VYhjVJ3znaXLabSdFiOeMdexjXUtln6bumh3qhYBCiZtJ2/i1Rk5vKLWx5f6J0wgNd8L94vdjnl3KiX31mNK0lXeCluZrQkblthGG1wubmJtXagMHGCS6FgnNU3PvMOT5115M8BTLF0thIVIUwZePwIcabW6lbe8z9SfJ5DMS+engQYhzYgR3Yge2fmcoyn89xRcWgTM911rI2KBgN1hifPc3s/LN87RN/QfOznwg0EKZk3cVdHAoxDrVFTmZrSqxqx41N1iETehn8veiDa2yv+QADoGtu1lUwrKbOukbB2YqpD2xXymfu+jEdFEG1wFEC85x1LGg0Eo0l0nBLhb731iOUYYoGKMVjCGi0GGtTZlz3goteaYsIDSrQ2AEKDFqTtfiFiS14cDLhT+96jE1gawYOi2IoTGSGzyQih883cgddSZUDA1EoSDeasLjBe9LAsl96nawbYAVwskTf/9Y3M2inrOJTtSDDo2LvRCeNaXKFwmQYU5RrEFDsMpO3uXwCIrIEW0MkEb0FEMvMR+760ZPMgXlm7hptcQwpaPnA69DjqwVhZ556V8S0PRVHEEk9KSTBj6zGRO7vAqhdfUmWSN0SE15fImgXsKS99sbSivSciGVnvw8zep6HuexyB+PxVvvjNZrwo12QYfK4RPZOgt1WblyMVAoA83GpoRMNMwouGpwq9XzOTTfdyjOXJpy/uE170x1844FH+Iu7n5PzQOOOcMkDYQekpVyBS9tbrG4MmFyaU1AgpN4pAZ8aNe0aiAd2YAd2YAf2SlsEWlEaq9jK4InU9ZQVZxg0MHvmLJs/f5hv/rc/E3aeQ5xH2wlGfBIXilBKykVGsai4nHnLqA1iD1/v1t3k3xiQIu9F4Ho2q10EGDlrGcRkiEgkimA09A6IiRbUApq073vH5MZd5DvCbp97VdM7N4rQAow2ePDsRb71GLIl0DqwbaQgEjX1Wlho0yca7akS7lgpMBOfoNBSpmpJjPurTLvHgumw8BFRoQwGE4W5rdgq1/j8j37MvZMkx9sCDmWA0MaGBbUdyJCY3indA30K+RP9W9k5vma2XGxQl7t4RKDG4iljIkB/+NaK15UFg3YbTA1R91z/3Y9ddevyfb0WkVEmp0hEccQ8IXR0eRWDNY62bQlBaKPyXLDcN0Gq0uVOOhHvQZizAnz0bXewNhtDPaWwhhh206YTXCqNW+k6rsduCHfjOQdTsgg2UpWir/UtOotKrnzl/e7jRu1UsXYj1/rqhJrUxBHtg1LRjj5gWEx5r+48u13qW9GR5Hv+jEofcHWQu3Seu3tut1iAaMRqlq1VkGgpqzXOXJxgjt3EXAv+/Jt38bnHg2wCMwtznypdIg5XeJpZOuHjnTlWTO4JYzCEhVrIXgjjgR3Ygb0sM7vquYvBvCyS0f0Vlqqtffe0G9d3+kW0K16OJU6hvADpb2/6sVeCzF/p1CKXP5k2J0TfEps5KyZwy+qQS088ync+9dec/f73BJ0BNa6tUXzqFeXA+8S7AFBVCGFxX0kGdvd+zN6V9JWBybqyhLYJWFvga0HEUtNSOoXgcXiS0lEBWiCxBNMQTUM0ARuqnIm/ES1iCsN4e5v1QycI3jCbNFSDId5aAkprS56cR/7s6+e5CDQAMgDmROokBekNSkhgHE2O7D/58CmG2+cQ2lTVqAcUqgQ7wWsE64i6F+n+Sh+9xdgVvG8ZSon4QOFrtFzjWQruOj/m0494WRw3qEZaGjq5S0FRXTiiSxvvb+526S+JWErvW18zByckEJbg0iZtA6ZNUb6BooU7QP+nt7+P49s7CGNqWyPGJWUkklOXdjLB16QDLfVzyqLrgvQcj6uxiJrUYVmxoENMTFNBUlaCwCDFbDYwthWffvARzgKTxlOZkpoRgTkFkZsFfc/GGiem51hTRdua1qU7rAiLJoqJH9H9S9ybhXWYpytNPpKLsqY/dFFwezIgy1WMjm/cWVh2bHNQC2bXmdx9zrv39m5fLvutV9qMGpzPqlwmEC0EE3qOiFGDC7LURA+0+7t4vIk0LlWO1AckCoW1OLUYtVjnmMwj1ZFT3LM54S/v+QlfvYicB9pqRGgFqIGIakvb6K5bMvTXJSyGWiJBJTsILg7swF62GRbV3PQ6rReaq+EdKgK6REsnGNKJy6TK+UGQsZ+WE0R9EBB3JYEgJ+TEpOtnum7bANKrAHbN8TpOYNe/qYkBN6yIGOqmRkOktBZnLMRIbIQiGFxoOLZSUtUND3zj83zvS5/BP/2ooDWp9UHoIbQRCLlH6rL+YvrhLuJI7wi7107tPqvZK7vOa4DbmQGuQLzD2oKIItaANWgMdOpKC2y2sFvR5ca2xrdUwwHeR3zjqWxq4FUH2BHLbHCIL//gZzwLMockAekXysE+hh7T3km1nrBw86ik8DtEB4pDKRMlp4d7dNn//TuHKoZpq6ysrrH13FmOrqxhypLzQZkfPcaffe5v2QYacXQRQUyB/FLGus3uy/KGuydLUJq9P34NDns5Kl/sj929P5kztQ78/ntu4nhsWYkNoVJabXEYolr2wnuWt3rdrpBoP77QIgXy0aMm3RdRBCdKGw2Ua5ydK/ed9cxsB69MkKV0d8FH373GymzMTcMBk80xprKEHDy4zKu3WdfJdxPq3/ke3L0YvhQH/4pbX4I8yRUW2Bfbo1cL70JNaoCXqjGpFGTUIFH6qoXQVTboq2Wax791JW3bMqgqjIKfedQavBvw3MwTj5zg2488yRcePM+981RJrMWirSQ8lbSgS6Nrz3l5/rF5YAd2YFdjkcSfW+aMpaxxzEnvzKmDnruWqrpLqPiD4OJVYYvqcrJFoaKDFHcVqCSCs/jegr9pllAZXZBSFSWzyYyWyKAa4UpHEyI+KFaEgSiVM1TAzunH+d6d3+Thr31OmF6kHAjtZIbds0qnRJHrE4EvpMh5xele4dqRX1/Y3HkFb1xq5oWhCS2FTWfJx0iBy0Ohg3OEDKfJkKkb2BSDaklVVTTTgFOhqBQf51hbEco17jw751M/b2QKOctdEzQsEvAasaZI0CeSBOqbT6GH11Zhaztn+QHxfQSqHfl1nwM0BbwoTfBsDFcwruC5WWS2cZTP//AnPA2SQim/8CvzLoelaHo/LVcusfhdyVkJOZgvIbbwDoP+1ptvp2jH+FCDBpw4ZA/BeL+s67chaA+dUaNIqAkhEtdOcN9Pn+CpKRLKFOOmY21xKKdAf+VNb6aYPUdQaCT2EJllM5Hk3EvMXblfPc76jWbRtHjTgChRC5QCFx3G29xfRFHjiRJonM9EeQdqsbFKBL1Zzcqwop03gLBWjtiuPZsmEl//ev7w+z/kq4/uyBPzDqIIlQbmOoPCQnxlFooDO7AD220qhlaSo1doxMVO9j1gNBIlZgiyIarJktwCuNQ2UwHx7P8q+tq1PjiUBHe3HRqqDzBM//9inVxEIlZBcxPZ1i4CiyTUETFNw+FqiIgwb1ra2mMrh7cG384YqmdVAk/+7Cd87bOfIP7sASHMoBCa6Q6WhSDHwt8ycIPEpe4isBMCAUmDo/UYhCAuDQbtcsORKCGTTQOiib7x0iQmX60mYCpisKhvKAclKi1NjIThIZ7xBZ/+0UOcAYyt0FBnnFv6qkrC4SddpATzGADve93JJMtqHMRUDlUJRCLBJHy5KEsdlPfPiqpkNptxZGWVC+M59fpR7r2wzccfuiQN2YntMNtLeL5FiLX/1tE94lIgZDXXhwJsAP/0Ayc5HmdYGRNsjbaeYVnh9/kYZOmc7oISdXKuYY64IRdCwd8+vM0cmAUQLApY5xm18Ku3DbjZCCvOcmlnC1MV6drpssiu5mZ7yaLEBSzswP7OphLxJpHpUEGi65WhUsAYe66RaJfJhKToZUBhbWWdejZBKGgRLgZDOH6Kn14c85ef+SZfPotsGvAGnDE4n2YcS8QiNAfX78AObF8sQU1tfi55Xg25YapPcihRCBKJuKy4V2Ren8VIvFH8xNeE9eukXsF/37WO7rYFTK5LGWeIrxoGgxI/b8AHnAVnHN43OGcYFYrbOsfnP/nfOHP3nUJsEk5Ga6gbCifEds9udMgXfRU4jy/B3Bjk3GSqWmWn1zeIS86JSpHw9ZoBxNISbFbWUQEtXiUu5ss1QwwWHyTdJLEm+hodbPCUWj7/8FP8cAvZoiB1RDAUGUrjMYlpIy0aPR6LJUFx3nvqZtrpJtZaYqfSIz5lNHKncNGYg7P9nWKcsahzXNzaYmKHXFzZ4E8+excXSNr6fX50KaKPkFLhHcBvv+7zbp9M6kGS3kucIU8K9g4F+LWj6K/ecTNu5wxSNXg8A+dQv6cuug9mSBCpqLDofreQZFUairXj3PvERX4yQ2ZkRBUVhIYiB1C/+eY3sjGbMXIw1UBRrdAGD8HkKo3vO0RLwmJlZdkbewTvpymGVgqQSBEMkgPcYBaKYybL8LrQYXMj3kYaW6MC58ZbHFo9jJ1bWrvCudV1vvLYaf703tPyyCwxLNSCtQ7ferw1oJZBVLQNWfr5wA7swF5pM2SZ6QxgCQYkClEMVjMjQw0uJ3VCbuTqM0y6A0rfAH7iL64tCYwsm73MLzC73JxufTYZ45HUHDP0bUn44+LWDusrI8rS4ucTXGhYLx2T7QtcOvMk3/rUf6V54udCPQdCqkgbcFbxre81Rl8NaJGXY24GPPrceT56+3HAUJoE0mijQYwQo0HE01F1k+KLRaLBRAMm9lr1N5ypwajDWYMrLT5MCbZkVq7wg9MTPv3wlmwDDDbw7QSsxUlMMsOdSYokO3nbN4DeOiiRCw0ykF6iM0qgk8NNv9txGvaP5CVEQt1SVUOms4geOcEnvn8/98+QLWCOow8xXrWT4BI6canKgklSw7cA//itt7PeThg4z1zmRCKDYshse44t9i9I7hWWdpGiDRHFqCeYSOuEibF85+GnuAjMBXAFzBVLZBThPRvoHYeGjOaX0GbKqCqpYyAoFLnSGDM7ZSEjLAcL21WaqMVES5QkXSAScxXNo7iewJ7+OYzG1GdHA1YjXqBcW+dcHSjWjvHEHP7ib+/h808HOQvUg0zRiRbmiWiYNieEpfj+wA7swF55E41Z4CKi2QdobIY/5zXeqkkVTZLTGg1I5mCmfkf7fBCvceuCvOWCwO51cTcJHBb8jMS96Pwjg6jFqsnk/lTXWNk4QoxzZrMJQ/EcHTqarbM89PWv8eCXPyPMn0sVC41gbCJf+051cwltQFe94Eo7+ao1NwV+9sxzzG+/iYBQ2RIfQwoaOq1cTYsn4okmNWIzsUwyjDfwEpdY/waHYk2kVaGpVnngwozPPXSGZwEvFV7blBmXSBMtkluua2wW/RwIFMD7T1lWp2MKJxAyV0VjxmLHTMddkq/U/XMSRMGEiLeKOXqC+y6O+cSDM9mRHFyUI2imu0ikury3r6Z7fG+MZqGK8I9ODvRXjxzFTE/jVhRjBO8VYsTK/gR2u3YzLhrgBTGJvAVYbQhEZsWAB85e4IebQaYUmVySPlMSOQJ85G1HGMYpTmt8M6caOhqfyWhLDfB63pCkKoY5KNBflYk6Cl8QxRBMTWNajDTYGHHRYzGIlqhAbekhUlaFyifuVj3aYFwN+Pyjj/PJH23zSIPMDDQRqB2aVzaLUqpgQqQl0ghgXWqq9Goahwd2YK8RsxpxMakA1tYs+BaZt+oilCqgmlSGJHE0VH2qduzv7h8YiecYyL4Qy4IjXZPYJdn9TqRDyEl1TTA3jSAOozahEbAYTQpibdvg1HNotaKYz7jv21/he1/4jHD6KdCGwjWAT7pBMWKyPxlz5BOv6BwuB6avbv/bTYEnL8IOjplYSutQDYQQiMaivTYSgKISoNNX75SlbtQKBiChwasSJdIUK2wWh7jziUf40QWktoYmRGiniV0ZAyEYnCkoiMkJ6EJgUiO3t5w8htm+xOpGQTMf52Z8sKzCtNxrIezrLGMYuILz88h4bZX/9t2HuARcAihK8DHhM3qCP4tZsSM+vCpsSdUsZyIKD4eA33/v2zkSWhor1G2DHaZ+E7PZjKEb0uzjQaQ+CXnfxadmeFr0x6BiGBcD7nnmWS4AUxyIhTZNbivAm0B/+fZbsPMdAjMKB7FtGFSr1L67TAkbpUDitHdlYXNFBacDe2lmFGwwiX/lsnqZ5IparmoY0xBxqBR4cQSxgEHMkLmt+PkFzyfuu48vXUDOCcyGOZ5Xh9EKawwxetwuzlMnSXjjzrsHdmA3vvVdkrLodxKiVYGoSdI75uSR6Xib+ZumT9UdzL/7ZUl0I5mRXa5c35MJ8hq6J7hYEoyig0VFyCXnhA4pY8Bow9GR5cJTP+W7X/gUF+7+ljC/hBVF4gRtwZrUDE/z73Zwb+3vkufrsPHqN1cD5xrkye2x3rQyYuZnSFCwkUFVINM0Mox2hN8OErUktfYqtrZtKcuy50OEEJKWsQiiASkUMY55HLLpVvnWM1t88ueNzElStdgs1duRbQR8hjj0ueF8Qzjg7bfcxHp9AT+fUTiXCh+6ux1PgkWZxQavs4kIIoIxpj8HqopFUAW3cpiv/ewJ7tpGZi4fj+8Ulg1gUzdo6C+5hE73O+6fi66kaxNNyubioYiYGk4o/F9//Q49Vga03sFYxUhJ00aMlFgLIfrsEO7fJK8+Uo2GzPwMdRYxJcHPWS1Ltn3LVrXO5x96hjkgdgCxAfWsFMqwhX/2SzdTbJ7HbDhaEzCzwMA4QhsxwRBcUrgwkLt4p+ddkHvjTFWvPhMiVjxFUAbBgKmoFaZtoLGRsrQ4QEMLTaCNJbp6lHZ0mEcubnHXz5/lrx+6JFskvlPDcrHQowg2lhSZ0h0IzGn78ZYbqx/YgR3YdTIRQVX7tdN7j7UWEaHxLcZCURQYItp6qjKtJ943jKpRQj8A8+gpq4LgPa1GhtWI2Wx2EF7ss3UNZkOu56fAwWCyypeIEGJAUKxzRBQfEp+xsI7YWJwYvChoxBQRqwHnG4YEinrMXV/8Kg9960vChTMgM4gNQZu+y3VYWoRDJ8IiXf5ot4/d9VJJe52P4XqdnGtgLgBj4LsPP8o7f+09mPElRkVqfeXrhpKupbhZ1DHkhiGxU1UVACHkqkyMiXidOx1qaIiDEbPhUZ5qLH/07UeJA5jPwVpLkDRBuFxCa6STDcuZyi64UDgi6EBgQGSORzMez2TlmK4SkJw7y54w+LqYiOw65uV/iKP2hgstfOFH55hYGAcSeb10MPd0GHIDxI4T3ZUTL7vVX3lzKkmQIChYgQDrAh8eob9y01GK6TZqGoKBJA+agqVI4FWAkALjaNoW46AJLcYZmiBM5x4OHeIbP3mCLZAp4EOLKyu0qRm2nltB37qxwolijkpDrS0FAYmWAgjducnXrBu32isdLTI3B/ZyLFKJpw0NTR2JhUUGBcPBKt4GAsrOdIJxA7Qc0g4OsSlr3PnwU3zpvmd4sEEuATOWEhW7GNuBxIFyKEvXMs+9HbzyBpiGD+zAblhr2+QDVFXFyspKv54aWzFr5tShoQAOlQXz7Yup+tzW3PnDe/n7v/PbTEPLcHXE1vgSVTVkWK1y7twFDh8+TGgbDmbgfbLswHaoklTRMAtWp4BqRCyEqPhmjisLVoYD6rZlPply7MhJptMpJjYYAtpsMzCKTra4ePpxvvLxj8PZ08J0G7RGjEe7LJIzqF9c+8Vc3mVxl4KLzPVZTkvvbxe1l2YukjJn33/a809tiS2GVMwxPiAaMEsBxjLTJYoifdfDV7d1GXsRwTnXv2+MITrDhSZSn7iZ//xXX+UZkEtzcM5Q+7a/1l2eu8yVnFTNcaAeG6ECThyGypKx/UrQgJGCqJ2qBL2usVKkElyXhb9OtiugyK9Nbr7WYpmUa9z91FkeniPzocmyNeCCJ9Ciy9d/6XbubvD9VLARwGEwKMEYQmwZFrDewv/5I+/ipJ9jZUbtAkESCavwgATUBHzu57JfHppisEVB3c5xA0fdpOyYWsPMVlxiwFfun3EB8CkXTiFJz2wF+NXbLa8bDVmLDVsaCDai1hAj2CDYnuvTqUYtKhiiqYP5/kL0bmwzKL6dU5UWuzpgFlum7QwNUNgK64a4cpV5NWI6PMTdp8/zib+9iwdmyBiYAjUFEZf/D7iYhJNbEt9pTptfdVjgbv7I8MqD6OLADuy6mYgwHA7x3tO2LW3bEkJa9eygpDi8wWT7EoVvcfWMm03kwXu+z51/8wnwc7m/mupbP/ghGhmxur6GV8P5i1scWj9ObDv4y6vdTfzFtY570ZmygEYZoCgdbZ3aZhdFQQienUtjBqXj+LGjnH72HBura2jbYuOUk6uOrdOP8Lef/QTP3f0twbcQWyzgLLRBM1nb4q902ZeDihfb95d3yK+oudzhgjMg9z93UX/l8JBh22B8zciViXiimfxiXF+TT8TUfd77l2Bd1cIYg3MOEcH7FEF6Y2iLAe3aBn9154+4Zzst/DXprKgk33/5knfPQwetUYfDUwK3HB32jpxIQr/3AZgaBIeI729io26hQnAdj98Yg7WLpoiqiqoyAzaHQ776wHkmwHieif0ihLbOEphLzg303Iskm7a/E2OqraRGhjHWHBmAncM/f9+6vv3QEHP2ScwoEkwkSImNiVRtUJosFwz7O1A9ikcp1GDFoG2NWkO7cogfPnmRJ5vUQV6kBI009TYngMPAb779jVS+QXwLtsVZgykMoTFEjQQsSO5Qvqx8sfR4YC/fgsBElMYoqh5voBoOUVPSRMd2Ywgbx3jo/JhPfvlO7tpEJsA8Vwq92EzY76qEBsFiCATSfZs6I5LYfrnqpAqYperhQZBxYAd2Xayua1ZXVxNUJgSstQwGgwQ1NsrWhfMcXhmwhmdYz7j7i5/jvs9/SqABE3noz/93WR14ffMv/ypnN8dUo5OcPH6UzfNThoOVg6G7z9aHdxmX1FFLO4W+2WxGWSZFwOhTE+rV1VV8M+fc6ac4eewmpjvbnBg5zKTh63/15zz29c8K9RaYFodPKIGYWqil6525lP3Ff5G7QBf8u2VGxo1w7ziDoSGyDXzlxz/lzb/2DtZcSaE7mYDa5e5NTwrtVG+syKteolZEesykqvZQKYDalmy5Ve69MOO/P3BBtoAGg9iSNs5JHTrT0XeZ+pLlC2tSZJoDjJNH1vDR05AyxWIgaszqAhmniWbegiGIZJjR9TuHIYS+grEcbIkI89Lxw80dftggZUWKrBDEGghZNS0smOxK1/0tJuWF/eRfAGAo7YA2jFkVGMzhg6vov/jAu/DPPMGai8lVU0FNOgZDTI2QVHIn6/0LL6JAGz1qLNFHKimYz8foyirnzJDP33+BpI6d1IQsisVTAL98GH3z4RFsbhJCoPCKESFqqkimSpXkLuep+NrDGvWVufd+0a22wnxjlYhiZzU0EWsULUo2zYDTtuQTX/8hdz3bylnAF8JOq4QIRSlYVUJbI9hcvwDBZepo7vC7tJp02bZ0NRNZHG05uIYHdmDXx4wxzOfzXQiIbi31sxknhgWDZoK5tMUXPv5nPPu9b6ZOzNJgi4IQlbv/8N/LeOuCfuhjv89WvUMbHYc3DnFpZ0JRvvg+HNj1sQ7i33XvZpnY3YnFFAUaAmjEokjb4OspzhpuXhsi7RYj23DPl77Mw5//tLB9LiX7YoPJEUUkJaM6MEHhCmIUYkxe5S4fSuGy+XyPnPFy3evVHmQ4S0EgMiHyg2eRR85v6a03r7BaVUjT5o7dNj3qIn5SiVmR5tVvHTyoCyyccxhjmJUjfrbV8hffeoQdkn9tByvUdQOuTBKQxF14tx4eZSKo4DQ12CuAE4c38DEmwg9AdsBTtSLrJOcmXNpLkobr6uIaYzDGoKrEGHvCmrWWUA34yj0/5SLQ1lBgaVVRn7qVdzRv6Dp3F3mfI0i9i+C+HxaBaWipSNC148D/5XfeweDiaVaKkFQ8NYVGLqbrGAXIMKF+NtknU4kEJ1hxmAADa/E6BbPCw+e3ufcS0gKOITWKweNyf4/fee/NjKY7GAPiLINgUVqCKioWcYIzBpMZZAmOlzpAa1Y60SzFd+CgvjyLYpiFQGsdw9UjDAfrtFry0JmLfPFHD/DNc8hFEoF7CgQvlKsrhNmYNmjfCEUVAppI3bmi3A+sntGdq06LqeXADuzArrNVVcV8Psdai7WW6XRKCIHhcMiRlSHl5ALnH3uQL/7ln8IzjwuuhTij0IDOG6wVgq146OMfl8nFqf7mP/5XXGp3mAdlZXWFpmn2+xBfs2ZUkFQORnPfiiSGkoOPLEUrBmxQnEBhDFYEEwOFn3HPt7/EA3d/B556UvBziDX4GmNiP1fbInEdfYpT8KFhd2fwZSzIFZK2uvw0fSsscXpfzeZsViipJbKjcNdPnuE967dysiphPkf6yCu72Z0sbSfV9SqXSowxJlx7drCdc5RlSdu2XJjM+fz9z/DjGeKBysGlegamgJA4J5E6YfFIdMsal71unxOMiwDj6MYqYT5NeH+JqAaiiZhoQW3KGGuSrPM5bLHPu+fXxowxu553UDHvPdt1y11nVMYjKKcwQhgDQRVsunVtF9H3ElIF6cDrRWlnHzkMLYaTo0OU0y3+1S+d0DcNDea5C1TrI+qmRnC4KCRx2kjrFFGhDKnDqrf7B/RSAZwlqiDeYL0wsJELYc43f3KWbdLpdTjafKIFeN8bRN9y/BDu0gUoB0RjGTSG6GFSCsE5BEMMkVIUqxE0SyTHdF29JCF24cYQa3g1WhFg6MGtjNjUkq8/9ixffeAM915AtknzRYshSpKDnrczmskYBOwqhBk5XxNRTVXBsFSpIGaFkb6QbJJqdICSFsm/cdDJ+8AO7PpYzI0IyrLEGENd16ysrDAYDKjPP8ODX/okP/ncXydIVBHBT8AEfIS1UqhrxcWALy1Pfemr8t/P7ejv/B//NW4tMpvOsMUKaVAf2H6Y7dQUU5yRHnMSEmBnZ4djhw7hDNSXthmUjkqEB398Hz/4+ueIP79baLboOua60QgfHE2dq89RCe0CB5RT3XQCUR0AaLljd2fPrxK1QBXt/uSrz1ygTXgwG1AXufs88rHNWm87tUbBhMrE5JT0XNhUyYgkB8XsUZOSZS3TJTO6nDBenJAeB7+0jf7butjO8/EZJXMlYp+VXbyfmokFnDGoCkEtrSmZUXBuOue+rTHffEZlnPeo9YCNUFrwBlrfd1Q0/Z7JUovFhZL1ADhUlhT1NJ0UHB2ST1T7MpfiiAgGTfyLa+Tcaae/TzqX3cDxQfEupE6jDpwxBIStmeepnTFbAbwaLBHB48yAoGE32K87yB4LqMuj5eqs56jAZffNlTqdLnFaHJ5VAnE6439440g/8rbXY7eeZrVMlaLxfMqoXO17TRgBL11Dna6XC1dFsjd520kjuxM90LRtWPCXut2WJJDQfScS8G1DESrGIsztiLOh4m9PJ7y+xaF4rCuQEBhF+AcffidlvU1hWqZRcWLQHOhba6EwxKC0TU0pLv2OpHMWc+Vi0X8vPn+EcQUFh79L0bI/q3n7Vxy/L0EloitXX+mx26Pdh7C4ngZ2zSP979IR+tK46eQK2bOnHZQuwZZSpivk17UtqAeH+PbDj/LVH2/yQItcACYGpt39nO8zmzlNpTPMYiRMuXx8Lf96vn8sEGKegSSXO3JV9VVBgdt14jv58uf7+5UsvuD1PXj8xX3cdY9cYR54vqmhQwTsvY/65rUvuKhK/vTyZ9NiF/PfVMwCKpP4uERt0bpmGGs2rOWpn97Htz/+p/CTu6QoAm0zIzU1iMlFamBaKyvWUocWqSe40SEm931fPjG+oP/wX/+fOHLyNmbq8FT93uzexw4tsjhNdHuqi3MUX/T8Pf+sLb0fY/pHQ+RK/c1eaiLqitdNTYbTL35n6QiXf6V/9nyr8lUpmC5/URf4lG7+V4n9PSFETh1bZXbpHBXK8VJ47KH7+daXvog+8ogQJuC3UrLHJF6un25n38iQuBaak7PZH00LEqqJl/FSQNrP5/veCOZaWlQsGMO2AUfkj//2HKd+b4O3bhzHzreo8DRtS+0jq6tHmM7q1IRPlSANBkViV/IxC4duyWkU7bT40w8vLujSYk5XtuogRUsBhu6eNlRyEJHHljcGL4bWCJD6VDj1FMZjY0yOvSmZFCtsmhEPY/iPP3iMLZJMJORMYIww71b/VKVpu791t3x/5xvmBIbAzaDrbdI/JipqCsBQREWoQSQ13WGIKgjNZcHZyzHNDN6+jbwkyFXp0xn1UTDW0ZSe2tcUzrA98RQnbudH37gvaTHXkYZUdguxWdzwmZS0cBTb5OBIvKIv8Xe2ZQeR9FzZM5tKpHCW1ofcu4JUYfKwTuQIykdvQv/R+97AsB1jxSCmYLI54ejaOvOmQY3JxGaTZWpNf770eaexFzejBhtdH1x4E9NkL5EixrTWxHQfdwF21+guZE6IRmU4qmimLXOzwsXhKf746/ewCXgH4mFUDbjYblOq8veOo2+kYVB46nqOM2lxaso8aUeFxmOIOCfEmEQEkiO9CIbSOc+T3lIVcvf4XPT67vpm9ItcXkWWx2i3sHS8LCOatxcXwf/yotWt3ldcAC9PQnTB2+K15G2ksbp3X9Mxdr8DEpNksyER6jFCA7R4VALiDGIiMQZUA4UpCD5SFANmQZg0EYYbyMoaz25uce9TW/zXex+RCyR45Sw/+phjgayNrqScVQDaNi527EogWt179PlVN97yYuW50uf2y3bNEum57H2dH/vPSYaKJgepb3R18PiaeQTyWr/IZi2am8nuuUgNu/Hxnaqa6UMDQ8SqZr8g0jXBS2ayO5vWGJPnEmc8IbSgDmMKWhWaoAnbUZW0fk45LPCzbdaNZ0Vm/PCzn+L+L39R2HoO4pS2zk2yYqRvvazJZxiHQFVWxKYlTi+kBrY/v1c++/96kg/8zj/U23/994nVYUQM6lOvJqwjqiEoWFfiNRKjx5Bk2Y2CCwGvEYoOUbI7GEG785eSHP3cvDTXptk39v5W9+6uObOf71/6cq/L17Hfn67NQXed05poCJhcXU/fXdq/fj1JG9Kl152YbKr2Jh+o+53+O9128iajdrNwOhOB1HcKtYTMeROJOOOxtNjQYOYtx4qWpx/4CZ/5/OeY//RnQghUrsD7MZ0MTvKV4q45ejdvIt0XYXF75Pdf+Dxebnu/8epYAZ7PHDaCRogOvGNKw88j8rkHn9SV97+ZDS/cNBAKsZTi2LpwnpWNI1y4eIkjx4/S1k0XAyIq2F0JUbOnckHO8ubTLbrLGbg89F3kGXoyuUSWKyFWu+g9QZpS5A3kJbhwwnw6JZgSu77BWAY8E0v+yzcf4ylyf4Hln+wj+rjrrQUMYfeNoxlDNgIGGikkcRwSxwKEFkskGgNqiRTp+9Ii5InhJWRxX5oZoqQBm+BYYG1Bo4pXn5xgUaIt2PaGp7fycI9piHoWk8gVi29K8nhl6fXVmi4ehK554WKyc8MB7WyaMgQBhpWjmbcUJqlCvdWgv/mWNW4ZKmxdop3PqdZGbBQVW5vnKEclgZiz0LsnyWtx2i+TucvwweU7KN3ji5MWpQuWI0Mc9c6EQbXGRUp+shP47jkkANGnSWtcX8AWkdUIv/f2U5xsG6SdURhL1HRs3cIhCk47bkV3VkFyGV7z/qRJOhHeU6XIXL4o9FtI7nt3Bs3S+F5M77sX8zT5d5U6s6gU7UoadL8QLr8Yootq5NLisvzYVaC6AKmbI5aFJ5wkOGD0qdJTlgOccYSgtN7jSkNVjgjqmddjNCpFVRE0Mp7XUIyog0FXDtMcWeOhp8/zjW/exQObcA7kHLCdm3jqUtc7yRLBXQB72VDRK725+8+7bfe882qFRe29jN2V2Dv2DuzAYDF2O8EQk+ehpZRZ7r/Ud57ak3VfSjAsJUGeL2ev5Kx//s581lBVFbYsaQKICAPjaDXiZ9sMCtDtSxwbwNYTP+czH/9L6od+LMQaYkrL9Xe5Xv5bUYQ6+OzYBlaritmsIZw/zT2f/5Q8fXGi7/nY73LTqdex3TaEGIgyxEcLtmQynzMcjaiqAe18jm9rKmcpBhVOlKlv0Dy/LgcXu6yTYwfMFav1i7nfaJcIyr5ynme79aKvbLzA4951ZHn564Me2PU5ZfF+3unFiqK7/7acuEY6aaY8w+R9WF6jOoJ+t6aogDEWaxwSC2KMVCIUrsRSE+sa004oYs39d36LR+//Ic3PHhTqOoN9asQHCmKWE99z0XuLV377+T7+ku3VHVQsm9PkPVBFA1m+dQf4zKONHDlxQf/JW+9g87nHOewbRoXhpo0RT599mltveyOXLu1QmYzxhgw7iSy6BKfMpYEsFarp0XRlcYMJFhMX7mwKPNKE0kFJVNo8WJMz1FU/OiiQRIeJBqOWMqRoXSTFuGIN0USkKtgOLZcs/LevfZ9HfGpydbUisaIp514uqUFIdgYuv3muR6ErBVfLmQZIKl8Gi3GWGBtMEKwa1BvUllyat5ye77Ojoil/HYl07ShcTBNZo4A4fN2CK9HYIArF3DMEQmw4Avz23zvKW28+gp3VDI2jco52Z8pgpaJwVVfqylmwy7PsV2U5WIZFNc0qvRPdKYWpMf17gY7EJdhoGOAp1RCmUB0+zNfu/THnSGNmBPi8FK638OEN9FdvuZ2j22fRSaCoSqLY9ImuapB/f68z12dMlv8gXZYddk3uXdAnSyuEJOlbs7QYoQY1XBGyIEsZsA5fupxR7J0ECajxl2WedGl7Uczl+0Q615VvsQqtSXwab1gkMEhZK1sZykFi/M+aKW1UEIsxiVG0fXEHorKxtoZzju1JQyMWVo6zScGmG3HPY2f47Pfv42lFagBn2fQp79WJR7y2bbmSZbgSxCK5jItz1TUKNDkY6yq6B4+vjUekr1fn15CShv0NA9mHuNLSGTG73jd5O8qiYt1tJiV1ctWsv1cdtihpVZi1kaAerFJKSxUbhn7MYD5nRWu+94nP8rMvfFoIdYJBhRlFIYuK5Eu06XS6eHHpAme/9jn58hOP6i//5u9wx3vej6/WmduAmIq2VUYra0zHM6Z+wsqoYjAYMK/HjNuGoigQUxB7WNPu37IxnaV0btK464ekLJQsu/MEMbce6GfP3RvMFdkXfXxe2/23KNCYdL0EQJeIz7qopBhAotkdOOZ1PZpAND77kEnldDnBXTeelbVVohG2ZxNaVYYrI6I1zGdTXDthtXTQNLSXdhhYwdYzfvqj7/PDv/0WevZpYTYGbQCP+oCXFg8MRwPCZP4Cx3tgrrspS+3kUx1eAudU+cx9z/KWU7dxKytsDAva2RaxvsQbbrmZM+fPMhqug9ceLtFZlAR9SpmCLlhYOHf9wqLkwGAZnweLG737bhdYRPpRlAMNjQY1ESUiMZVHbYzJqRHDbDqD4SrbrmJ7uMF//+b9fP9i6nfR2jIx+l+2xT4zN6iAGNDoUzYTEBOXbvbnsWuQRu9KnDET71VInBlVRBQJilWDiIMgROvYrD2bKf7/u9ne47nqmGl39mcZhZqyvxapRug0MiqEsm0ZkBob/uMPnNQP3X4Tq80OTOasDCqG5YDJ5CIz9ayOVpn4WfoFXZRl+0WLqw80olmEqFYVjabvDAoLvD5i+qm+U2MT9UiIODdkHIY8dG6L7z05kzGJ01MitCirBo5E+OcfeAtr8xkDD5EKp0JDDmDIi3TniMOuICNlo2IKBPpu9JEuQI3IrgCsgyUsb0vzMfS8k+zMLzv0y4GFWXqefs/srljSBThLQcsSZK776KJCYZDlKoGm67eYW5JzkhliKSNqDN43NHGOMQ43rBhkyF1oPXXTcvjwEdQ6duaelgo9cpLnas+jF6d856GHufdZOAPSCNRDx8V5DogGFdTzKy6qy9WM1451Z3236VKWefG4+EbUg8fX4iMqaE4/7MbVL9b4NE/uTUykvyUHNH2mS/R0CQjtxLmFnncGXaDRbUtwRYVEwZmAE0PwY3Q8YWQCRwrlx3d9m+/9zSeEC2cpho62mYL3jFZKptMX9x26nlNFUdC2bU8aL4qCIIYYZ+gj98t3n/w5T3zkt/Qj//CfM1w9xvbWDquHTjKbjhkNKowp8b5l5msobeJKxojTLpDYbYuZe3HOdlWZNcF5RG0/dybrECLLTZQ1n7v0XJ+nctGd+cUcL0u/H9mtWGhyEdf2xVwRCN128hoq+Rum86V0edOxT6jl8PKyaogbVGzubIM1rK6OEGuYTCa0MbBaGoYuMtAJjsB0cokHfvB9fnLnd+DZZ4TYkGTAA86BDx7Ep6yUwKye753ODmyPOULKMPqsShLwqKloQ81Pp8i/+8z39f/+zz/Cofoch82cw9Yx39piYAwaPSYWaB7gUQLBeNSE/Do5X4nomgIJFx2iNjnE3TAQeL4rJSyywt39nhyONDGFnMQIRkE8ZUiDrgyAWKZ2xHkPl9YO84WfPsbnnkxEzB1A1T7v775Uk3wUowoEj4juwhTutS4A6EqQV2sdvr+L7lVBTSSYFPVHTeVRqxDV4IMh2JJLPuYeC+zy5jpIx94zsiuJdK18J1l0Iy7zZNJN2WkhiuAKdDoBKfHtjMpB5eH3bkH/4K23sTbfZCW0VJUjjicEMWysrFLXM2rvSerVmheZLEUn16aCEaVftvJd1BHHU4E/jYtc8t8VSJr+0RvDRIRn19f4sy/ey7NAY8GFCk8NSX+B3ziMfvTUEeTss2CU0WBAozWtTdwPs7SI9NUsYPli7SbZ5c+opQsydpmy6z2lyw6yNG493ra7zqXR5WracoDRLTYm/40+m6hS7HYcugUp/7LkhcSqp4dakXhX48IRRCiD4qKh8CnIMKR7q9Ea5wyxtHiJTOOM2KSSeeFK1ssjbE8atp1lsnqYn45rvv29h7n7sZpnSdWKlLsCr9DM8gJjWvDtroHRyWG/9oILuSxP8rwEXQAMdune6jLP+51RP3h8ZR9TBt0RJQ2i/o7YNQd0a/1y0JHvmn6uyUFGd4/JIhmyCDCuZEo9nTEqK2I7hTDlpg3HoHI8eOd3+NQXP014/BEhNIg26NgnziK8pOCiv+czfNI51/elSj2p2tRvzTgIkTNf+4L85Y8f5AP/4B/qO375N2jihMGwZGu+TR0C5aBKgQlpe6W1mNojenmacDlB1O/Hri7RC+WqvUqgBnr0SPpeF7x1217A1Xc9dp/vtrP0+2ZXZSF9ymIgut2TRf+hmCHknT+iGIk9F1YgJaejxWgK1lRSJTvkQ1NgZbVkZcXSTCdMt85TiXCkGmBE0fEWIzPjmccf4t47v8vFH94r1DMIgcIYVGcUQKAm+gyFW7oVD4KLFzdXyQpea1o8A2dofMSHGleuMGsmPNQg//5vvqX/t3/wYWSkDHWK7lxADBgCQUqCpN4I0UA0ETXaOzMm5xOtGiAFFzYaJNoUsZp04cwVspgQkWhBFpnPzpEW7e5L38MiOk6DZIeppYL1Q2w1DV/++Vn+8K65XACmBrCDxMa8irukc8ss8P9v782iLbnO+77ft/euOsO9t+cGMZIgCc4iKVGiZNqSrRVLshVZHlaWFTt5yMrKU5K35CXPfs2KnpxkZXI8xiuxZUuyJYsWaUkcQHECCBAA2Ri7ATTQ6PFOZ6iqvfeXh72rzrm3GyTYt6kmgf3DOjh9zz3n3KpdVbv2933/7/umk2SBG1HEKIJBjCCxW+3fgX2TVWjwyOTx0WRwQVpciWHoe+FizNO1IWC4vpzRK0h/kP2940unPPxRV+m+60dDQwRVKokp3ObhLz1o9G9/+iOcbW7Aco8K2BxP2Q+pIlo13mC+nKFBUZu/UTlg0R2pEsUaKVk7pg7ha8ZFEJOORb/YllxZau1vKobO1szqDb526SqP7SBLAZyhCZEaGAXYAv76px9iPL+KqTqW3mMqy6LtUm6P6CpqokP0eDAVD3uoVvtvkjcxh6H7+t/979arvqyPma5FG20EMXG4mZlbXEsrB8Lq5qTaD026wfTFHlICfp9DlG8w2nfvGAYu74nBiyRjOt/AUkWttBUSBSMONRZjk1wwENJ5r4oy4lrY4CoTHn/pVR59/jzPZunkLilp27gJPmfmGSNgGoYC5w5oV4bFO5PVvqdRWZ308UAjy/7orc846wvE1bVRnt8Zz6m6XZ9tkVQL6WzJCcGyutTWTdPBM8/a3MRqAd0vNlczUV8AojdY0lxsFY4fm9Ls3WBsIyPXcv4bf8pX/v3v4p9/RghLJiNLN58zuGEMNFlIMZrUNIvvbWhYawkhDE6HvuHv4ITok+3wYDxcu8hj//T/lO9+4+v6V3/j71KfeRdbpmY0GhGtz42CFc2u+tGbzT199Fn6kTq8ylnN1wfuSfkmLyppHcf6aiwx3AP6a1d7I2VtnZYPyuA8OHTsId0DkFVkhOGpP05ZdtUbG8MjmZNChdERqE3fQ4qIK1ntIoFXX3mds8c32XIOU0cmGplqZO/yFS69+gK//fnfIb7yghBSZ2FbWYKfIyEwEUPQFqVL6zxraNZKP5lJTdwrfUy+F041VaHx4mlcTOOsQGgwpmYZOx7bVfnN3/+6/re/+hlms477xyc4UQUWiwWdq+n6EqkCRh0o2JjU9f0J1kcwet3fgQYQ+WQ9nBCOZgXXsBASBrG+mnRB0mEI+d+pCkA0NQ01+3aDl/cMj+1F/u8/3ZXLQOMA018Qqb3VnaCuKwzkRaZmy/vPbuExLASzpCzd5rPnRCwxd3quXIWPcH2+pGFYCqw29fsMx+E9uiOjZ1L5WB+SNAig6T1SPlBXQuyWnAR+skZ/46c+wvsmQnf5CpO6wsRIM9tlVBtqW7Fo5kQMzlZ0a7Kx1RSpg3EYj3CMFAYpn0habPeRuWHe73M0NOZo3Cqu4MXSyIjrMuWzTzzNnBTJmZiafVLVkE3gLz6APnJmi/baRarRhKXpaEyDuo6aCrd25zgsQVrt9foNh+EaMmvbmGQLvYmQt/vwl619XhTqaBDvhl+vV/roq5esKoSs/V/SmNhc5epWpWR7L2U/xkO0rf9bClXww/57A0Hs0NRS1DAZbzFbzNmfefy4JmxM2ZXIxd1rnN/Z5Q++9TKvNatiD320IgATu8HSt0iO24QQB4kHSiovN2zLnZlHfhxJEsT1A2OSd+OWjpv0vn4BeCBhs/AOJOTrK2GUNB/l+fpwqdW4ZpBywHFhDiw9sxsjrz9iLnwSsOqxmqrnOfVUyxvUcc7F736Hx774J+w+84TQzYEOiQ3dPM3b1bhituzQaBDjEGNpFp7v56CMMQ6Nbr1fyWn7flRBfXICRkMILYQd1NbMv/t1+Vd/7zHu+4W/pJ/6xb/Muz/8Cd7YnXF1Z8nm8dOMJlssFk3qqPAWb2EHo4q5AlM8KFvt5VEiQJADzqFbFQE5yOFcUFkzKs3a64lgAGnTdJEWeiv3q64kVaIMR3RlwEh2JFlUciEX0pou5QR3WG350P2naHauM2o6jlu4fv4CX/rCH/Pyt55IuRWySOebEWg8IRszkchcV02QIxBDGmsrqRpU3GtLBOP74JJNmD3+PmIqQMF3Wd5EzYyWJ2bI3/93X9H/+ld+ls1pZHn1FU6Op8TgMeKHcKVRA+roJSEri3WtIKhJXqx00ceVRXwAc8BTqn1dCVmV/UQcEQWNKclHIl4c3lnmZsxOdYxHX7rKP/zmBdkGQm3BVdC2aGxx1uD9nTlD+klENS3q8/XyZ2BirGQ5639sVYo0e1h9RKziTIWqMJsv73w04gem105CX50qlfB1WZubbgqmCxwHPjRF/5tf/gnebVoWl69wZmNC186Zjsfs7u5TuxGeQBM81caENnhUZJUk3E+e6zepI7Q6VOkjRgYXTQ4Dp0V7gCyVi/TFd60yFEQIYuhMxQ075bkdz1O7qe/F2MJssRxG5yTwd3/xFwh7L3JsXBF8y3TkWHb71E6QEA+Eom9VNrb/Rx821+Hl3vu09t6+y7n2kZ++s/TqRtqXiDaQijTkMexNahUGGVofcYwwnJ99aeX0UrzZscC6N/zw62v7SqSOefIXM4xpJ45IRZCKeQvu+P00puLClet842vneOrljksg28BlYGHzGORTwuZYWhcaICIm+y8jaEjGpMQchVFu6aR4J8qlDs91RlnzSh9675oXu39vH4Urz++MZ4jDfHiAN7lkVFbz1PqclZwZ6wvflWGRDArF0uI04GKLHcrYNzz2lc9z7ltfpXs2SaHQiI0tDo8T6BRsLew3qVuauBHqFTy40QTf7H/Pa0JVsdYOxoWIDD+3bUuSSgtBAxYYu8jSz/EBGE94/Yv/Xn7vyW/y4Kd/Xn/2F/8KH37gEa7tNyyuXWG8dZxFXEnNVxfXwcX4yiDTA9fem5v1q7wXyYaCSsox5FZy2oN//MDf+N5ko49075c1Z0MfwRq+R92wJ32lq4jNUTCfZfOBynuMNDjtcNpgZ1ex21c499QTfPtrX5H48oUUMbIC2ubzL0CIObaVHJLepHm+Pz1FwJg0/9NltYUkZ9Q7Z4b/wXG+HyI1EFdVnLDZkaAtQsUeHU/MkP/5c1/Tv/Uzj/DzZ++n7q4z0X1MOwd12GpMxOK9gjiMq1N4MCeCKi1RszBHPNYYpE03b7GSO00LURUloEaSDh+DRkFtamMruUqJRMU3DSe2NjFdw868g81NwqkzPL3d8MfffYHffmpbdoGGCm0d0uYqPpZURzpPTkfFe49Yi6kcXTvDuOroX/oWuMljrWbNG2yw1hJbz8g6jHMsuoZ6PGZrc4qwl6YLMYOnJeYrqh6NaJrm5kXD2r+PbpoZ0FH6puzJ7gwINlUGI7IxtoyWS35hA/0v/+J7eV89o5rtMR45Fk2Ls8K8W+AmFVGhIUDtaDWdPynJuk8IzFXHbjVut4XQl2BV7GBkD4MmkdoJi/mMTecYVzXL2QK1NXZUs+eFK9NT/F+//Sjz/LEu5O7pmqI5f/Oj79Xq2ozp5gZhNmNTa9w8UvsOqQ1RHF7StZB3MaGpx4atR4im/g9R80iY/iagqIQUAVwP25MX0UDUQN9g0RhJ+mEUDYE2RMRtYSSVUEvVlCLGWlQDXfRDeUBjkgNAVYkEVAXbxwaENdlARCTNBSKRrusg/92hzxxg0lmS7qWaxqGxFa1ULMyYbVexa8c8+sqLvHjtRc69tpTL7UGBTpMf2htdBiDiJZWUHNA4DKyFQV6hcHOZwv4j7yDDIikGNM31QXAiyeNoJI+DDs+i+UY+lAbSfG+gPN6Gj6gKIogxgwMpiVhSkMuqB+3y9S2I5P5aMebmuOm+ZMQR0KHNhLEW6yxNCPRV9NIcGDAiOFWcRGzsqEWpQkMVWkYmsnvtEo9++cuc/+JnBX8dtEku6UBKmibNfV7TLNC2mk9yg4YuT44G3/QdtL4365GL9UhGug/l6ABKAGZ+LSLRLAAD29d59bN/IK/+0Zc49VM/q5/5pV/lvve8j22/j8qUzpg0H1qLQQmhI0ZPBEbO0nYeDZG6dlgnqA+E0KFUqDUEdWlejhGNYTCCrDG0bZv+LSb3VDJpoZ33w1p7QPIlYtKcn699Ywyd96gGjElOoP71qjbgF5jslI0qaX5XgxqLYAl9GX/pS/8nOZRGQfGYOuDooF1i24ZjVpgS2X3jVd44/xyPf/kL7F55Vdi9DtKCiaAtxAgObK66P8z20h+YdP7i0omsMZXJ7x1mlvS64eA9pXAQl26xkI4aqwG26cfaCKHzRCpmeL69p3L5j57n9fdP9W9+6hFOLvc4VdcQLfPlEueU6fQYvlO2d68zHo+BiJqAcUpVJQ1lFyCEjvFkCiGdoFEUCT6HoTSVmq0sbdPRacBSpZM0KiEoqGF6bIud2QIC2OP3s1dP+dqFq/yrpy/yp5eRPZKIylLjcnZGn7B51Mi8Qg7KwaIJqd6+QmUMYnuREoO+PZ2xK+5EDkC26bP2cIXJG2hEkhdflehbjKkxGjm9MaEm5auqdbTxoJawnzziD7MEpwLWQpc1/CYSrYHQYQmcsIZ62fIXTov+nZ94iI9uVEz8Hj4uUXHUY4f3a9sn0DcCVBgiF/18PRQbICW+9yWUj2QoaQ7wrxl16YVkuC+bBdPaUoVIO0+9uevplEvzOdz7Pj772DleBlmykubkU5tJDR/96Ec5MY7MFw20jno0onbCBA8Smef4SH/sraS8g7RAt+zs72HE4ZzDVSm0r6p0MUCMqOTCuZIMzf47BgxDhEKz4W9FkMri6hGLeZuqpYlNBQ5MquomIjgqRNLCM8QOzcmI1kjOV4LQ38CsxRiLiiPGSBcCMUTqySjdfL1mQaPm6migWKg3UDeisxX7ES5s7/GtV5/j6y+1PN8l6VNyMKxKUltGGPp+rR1DS1WzLr1gdYHn1VJfRFExuS1TX3L4HRon1+F/iAi1NdjK4qwQtSNEjzUWVBBJgygiWMBmz05qTCnZk0t5frs922Q49PNTf8Uk+1KxVoihT3qOpPLRBkxaSNZmjNeIj6CSHJEAPkS6Ls8dRrNxEhCfwoyVRGoU0y7ZdEKzd43vPPUET379KzQXXhLaJYwi+Gwk6Oqpv6P0l386VQ9lIsib97/4QViv7NQXf1n/zolzLLsGRaGB61/9ovzetx/n9E98XB/5mc/wro/9LJWbEGPEL5NRUdf1sPAPXUOdmwbGGFksG0II1HXNZLLB9u4e1kZq67C1AxyqAY1CG0M2DJOh18vTRFySW1fpb/THBJIkLKhC1JzTF4lWsbYatqnxHSG0tI1igmKN5L4U+bhnh3JEk29HSfcOA4KgRjAmzcK6vMHIRiZGaWc7nHv6Sc59/Wvsn39RWOxjK4F2nzT7dxiXYxRmdTT7rLFh/Aed1qFnYH3R+I6e+98iTmjyQFUgVTqaOWSFgSb2evUOS01Hy2Xgd16Yy3dfe1L/+//4QzTtDs7AaDqiCy3N/Bq1MZw5VRO6BUJMJ14HoY2oEeqqRsY1y8ajUUCTFtNoxIhiJZ18sQm4GKlE0gnlFa/KtKqoxsfYnjcs7Qimx7lGzR8//TK/89RVngdpprBcAtGkkCcMSai+d7EcFRG8Kvtz6IJPF4WkxZ0SbjIi7oxRsf6F/Qlu1sp19rIpUhUpky4h7z22qrC+4exkzJhsgXdtctCIYq3Dh5RMZoy5aYhuCsce4QITPHU7QxHavOxAFWrPhonUc/jVLfQ//eRH+Oi7Ngi7V0CU2lW03ZwQXS5LuJZaLKwd15U36OZOpAd/OgoyVDhL3hY1uUSzxLSP1QSnMVUQGY2Zq8VvnOD83pL/8PQ1uUGSTC2zGKkfinkFn/vOkyzuO8OHTx/n+NkxN6Lnxv42k4WwOarx2eXmXAoha4wE37FsOqIPnDpxIl17IRD8Ymg6NLIGsYKPKVC9WgQoPsahnGLvber/3dfxMMaAM4yOObqc6yMaiVFT5CKkEgbGkhYSRIzNn4u9tztQV+mG5kMu8UvyXuEs0VbcaELK2XJVigq6KumtY2Rfap6+Muf5629w7pXrvHgduQosSbkUwUHnV36TCiG5pPpj76nxBNbmg/78yYaFU5PnjbTw8EAQv+bm5M7MIz/GaAho6Igmy/ViIIYWrxGt8j0lDhPSELFIcj0dEvwLbz+SdHg1l6yjwCwYYAQWTGVyhBRUs1MspCWgiAVrsuNEwApjPIQ5JjaYGLECtZWUY+FbTLvg3JPf4uJz53jjue8I21fBN+CTFAqfnatrC8vBXTXkepK91qsoZkomzp854vqyv5umaM/6VJJ+03hB8x9yxuOjh/19rn31Dbn27a/Bqfv0gU9/hk9/+uc4efYeOlWabkbXCp2mxqJN62nUgHPUkxOodSyblu3tGadObhGCp/WekMcjOQHS/cFVlgBINMmpC6hoin6jRI1YbG4uTEraz4ZIr0DxMdB0Hg3pfBAjuNpRmxEmnECzs9mH1IFdJDVoNSZkZ0WKwAg+2Z2iECImzgk3zvPEN77MS998TLh+IyVyLpcQPYIircf1bmAjhDWnCJqkUMOg97eFQeu7dnD6yAoQBucUax8o3AqXREfkSd6uDWry9wVN3eidGry22XsXuQBcXyD/3W+d01//EHzmU5/khAPZv86G60BbutkNqhBxRnCuwlmHkRGdCstW6Fqfq7tAhUNikms4FIkBoqeyFWolL24EL2mBNG8iy8WMbvMMzfgk37l4ld//5nm+PkduAPMRNC0gDiRZwNov4Pq8j947eQRU0v1z2QLGEOOqNGmMil1rEgasGQTJ047efg7AahtWzQshLaZtdr10PuIqiDmmVzmwbcPpesyUoaRz+p6gVFXah6CrReYPCwuMCFQI17GogqsEs0hN5v7qe9D/4ic+xEc2xoTdbZY7+4yPjbBVhbaeECJiRoPRo2KQuD5LGFadYlmrZmEG5+tRy9X2xkVfnrU3LEKWBVZVRdu2VMFiqwmNm3KljXRnz/AHf/I4VzSX5jVmSCIzLjnVrzXwu0+/Il95+hUeBP3IWfj4T76X991zD6cmx1l2DYR5kjF2afFmjaE2FaPNKbV17O1sY02qrmR7D5AG8CGFn10KQw8dXImIETCp54TAIF/IIacczlY0dkTfEjTntViLEVACxiSZU+iSTEqMSdJGcvTCpMiaHbm0EA1Kp4ZODMFUBFPT2Zo4ndKZiiYKe03g8rVdzr96gZfOd5xv4A3S9d6Xk21kVboaQCyDsdDfHkARJOWJ9Puta498+iR/3kGTevBolrzkhHWDhMIIqQ8Q6ZypncXny9H2qVaSIotWTB7Hdbdt4e2GETNEHZX1uSRdhXG9XD2Sy7wnx5gqOFenc4UUVQ/L+ZDX4Kwy1qy3F8WhLHZ2eOmF5/nO499g//lzwmIOzQxiSNIYBXJlx8moom26NAf06YDZQZck4+R5Iw7+BMhRZvJUccCh9YMT1r7XkPpArG1IUj7Y1BTUdwuEQJUnrnZ/Ds2OXPy9F7j4e/8c7r2Pj/zkp/XDn/gUp+97kOjG7DUzRuMNvBhmPrLc34N6Qj0aMapPsJhfx+AxCLVxSXmhBnI+adeFfMzMMOcFcvRbFRGLjx19y8SVEalJVeKEyhii5uqaqoTQ0jUL2rgk+imWGusslTFUAqIefIv4Bg0t0womlcVox+7Vq7z4wnM888yTdC+/IFx+CcjlwlufbpwRBE3qDFKERMXQhZC205iVTfBm9//DLw/HuL+LHPHAv0NwvQEXJObZf3VyAylXIYLTSMoqiLQYGgPLWtlfqrx8Dv75uSf45U9u6i984GEeHCvazTg92qDuGrRp6LwHLFpPUDvCq8GHDqtLxCghJg8oKkknHoUQhNgq1XRKtJb9pqVTwU4myKRmQc256w2f//I3+MqVtNCYCewohDYr5bQXQsQDF7PFJMfaELS9DQTQpElfesCO0LAkqmA0648lnauHzQiBO3J+9vWqTW44lgp8mqF3iM8a2CCREDuQDqdwxhneb9ArEVlIMig80HZtkjxmHXyI2aezVv3oTpEMjDQJbNXQqscs4F7gP/+Y1V/72Hu5R5e08z1s6zg+3UJU8J2nqiqsE0Jw2NwsaGjglJF+4ct6pQxzoC56nsZva/tFc+fxbNAJ6XgE01fISH+h6zwtjigj5maC39ziKy9f5osXUq2dMYZl8AhQkyp+RUndza9XsAwwi8hzV+Bf/OFLHBu9xMdOop+85zQ///D9HJOOelRRG8GHQOsbZk2HiR2bk5MYfPI4xRaCBxWMAaxlEaATHTxHFsHk53R+B9AUGUkLg35iTdfo2GRfjgiigZQPYfNIO2xucR+i0vms88VgbQUWduY7KX+vmkI9ojNjFlTsBstucDz93CXe2Gm4cHWPi9dhm9SbIpIMipUE0gzyG0Ikibmyp9GkgxNMf6zXpA1hBNEBHmJKOBRW12tkFaToe7YQTUoWAvr8lHcsvsV3TeqJpGQpZqrqJzbV/U++lCRgjlmoFmO2xkVvUeCj8HYhRSNWGn2TJTeQFtNuvEkbIPiWmKMQVtLCxKC0e/tgoDKWDWfoUxs1NFRtyzjs8fpLz/LMk09w8YXn4PpVoV0kB2nwyZhQTT+b5BmPdAiRZZPKwOUtW9vqgy6FftbrL39DDsrl59tFYShl3ucGuv71fjusAe1SLouNqWx7dn5sVYa9OKPTvB2v3OA7F5+T7/yH32PzgffqqQce5mf/4l+mOnaG8cYJauNYiMOHBj9bEoLnxIZBI8QY0ODR/saVlQEp7zV7YUzKkQGI1uQ1giUEj2YptRiwYlBSaV6rMeVuqKI+Yk2OYoghqBAmaS1oYsBqhyVSx5bKtFhdMN++zOWLL/LCM9/m4gvPCtcuQZdzKQzQ7OeckDiUva1GSWbb5gI+HXlx0BeV0VSQJWr+jr5hYM61u5X/qE8AX50I/fx/+8f/nYAbbo9DNYc88Wf7z6gQY5eq4iDU1TgtWvGECPsbQtN27HXw/z6xL1964in99LuFn3v/g3zg1CZ1JxwbTRlPDIRI03R0YYFUNePaop1iQkDU5AQuwVQjBEtUoVHDnjEspSKeGGM2j3F9vuRb3znHV5/Z5akuVd/ZBebAQsGMxlRS0TV9Ida0WAt590Shyh7uo+nvDeQk4mULaiwxL2B7ycyQYPxmHCjh8wMifaBuXR4FIDlB3yS9vFg6ApFAiA1j4zhpDT/z4ZN89ZkbBI050pJv/3rQ0/TDQkmLRAtI6zkGPGjR/+wvvItfe/+92KuvYWnxTWBcHac2jv1mAU4ZjTbpfJPKIeceKrK2UOkFPzaHaxOp5KmSoh3967er0BAFm/M5jPZqzv77k0zKRxjVY7Sr6cyYuUxZTk7zu199jGskOY9HafPngppUpUTiULN3TnLMWGBp4KqHS5eQJy9d43efvMZZ0AePwXvuO84DZ89w9sQWJzdrNp3h6t4NJqZmbCKuGuGcJ8kRk1FgphWV5qhGr52N2dsYUz+XtE+9FzJgTMrxcAJNO8NJRZSUJ6kiqKlTVSeFxoNUNWY0xriKSHo9al6jn3qAvWbJ1e09Ll28wStXLnHhMrwyhxvZmFiySshOZWQNAcuqQ3R/bafmTdlFkSKhlaPDJ8206Y3ltYccNBD6o9h7KN+sSVd/zpT7SzKwjTFUVcqsIBoiXYpSmZSY6XISWsg5mya6XFFodd0U3p70BkafPAxJq28idLN9nDVMjMXVBmsUEwP4Bgkd46lACFhdYGKk3V/w+sVXePbcd3jt/Ivo+WcFsg4ydOCXyZhQzyDgR5MzqvMHpLQiKVqfNpIsjcnzQf9zdkCm9c8qJWv4zFFYu732V0Hv8EqmUD8L5XwPgXpsoQuEALMuxX6qflNtxPsGZjfYf24m+69e4OUv/jFMj+Eeeq8++MiHePj9H+LeBx5itLFJMMJsdzHkwGENUQMBSfcASeXWOx/w2m9JcqgKqa+QD3E4vlYUIwZjJfXn1gjRJ7mTSJK/R7Ax4r2n6Tx1vSSixLah3d/j6uXXef3lF7l0/nn85Utw/bLglxD6mT8i0SPBr2b/OIxQuq+0Pv3C9QdsdaAkbXk6HwFdk8KlbMN4k4Gxfk8YfjK9ZC6Wm8D3wHkmgEe0y4ukvlzXCHBIECayAdKwjAtmfpHT6G1qmdgKnhGRgLWWF0MjF15WPvvyKzw4RT/9wXt5+OQGHzh7gns2HNViH7PYZ0RgrBHUUztHyrBIRcsatSzUsBdAjp1k3455bel55uU3+OYLT/DslZS83QAzoM1RLyMGghKbpMIegljrZ0w+74eT46hYS/SefcjVEvLFZxxe/aE3/zAW7FnfKjYvbMlGVOo7Yulb1ihqI8SOSg0xLvnYex7mwZdnemW/laCR2lV432GN4KMSvF9t8qCjunNb3pKO3SkHJzv4uWPof/Urj/CesWH/wrOc2dqgYoRWnsCChZ+j6nFSE8MYbW2a0DQbF8LgDZW8eLR54lBkrY537sWCwd2qTOIPgNU0YZpc1rVv+hiE5M7J+QOxq1A3ZV8rvvzt5zi3QPYM7EVQo4PL3HdJ8T9SxSwDXZ1kpV3eh2m+1S0Z8TKRMQ0vgnxjF9zuDvW5HTaB0xY9NoYPPnics5sj7jt5jDPHN9kYW6wGJLQ43zFulow04kyWuaQRgughpoZUI1dl6Vyq6tR5n25mriLYLbp6BGJZdB3eOMxoircuVUSpRsyCsNt27O62XN/f5eqNPa7d2ObaPPLcDWRBupbXl/p9vkPDarGvRojGJiNRyYZSx5ApFCUnIvb7IWjbsdaRh37BYCuDFYihA7ok5clGeujzNHIUEO1vOjpsZbwTc8fbgdphDYS2oTMNLlgMqUtxxKbrTCVLF5WgyWssUYlq3lyiUHhbIH3ptz6XKxd6iN6D79iyShXSPG0i4Bu6xYx2tktsZly9fIk3Xj3PS899l+b1V4VuuWY4kD0AefU7lMnwWKDKim8fGVQ0SYJqCD73TZCVgSGaGryt3+oifa+j3vudZgIZzI2O215HrFV8TIv3uHY95PuYh7oWxDqWS0+rIe3IOOWyVerwXZe2SQ3OVfgY0oJ8diPt3/4c/+wVOf/dr3Fe05w8On2arTP36f0f/BSTk/dw9uxZTpw8jRuPkpxIIWggSkAQKmOxdY2KJWgkqCA2FdyxlcFJOrax89AGjKbGuLFrGVWOSkCDp1ss2dvd5urVq8yuXeL6q8/S7F7l2rVrots3wGfDsO+FEhp6FQoaezsgVXXqf8iOXGsFZwxd6IabSYpupBFNxRNDLjaSm8uu3S/60uv5NBmOy83HrcxZb5WhQ9YhYRTDCY6h0w5VTzDCoDXxIR+dEWBRHLshAiOsBPbUc3mOfOdbl5gAp4CHHPrIWXjvmQ3OTEdMrHDq+BYTqcFYmuDZX3bsN4Hr+3tcni959cYFXrgKL8e0EFlKilb0CiiMSx7snJgqpHCqxmRFHG7OdXDv7gAm+cr3QeZR0qlryZ2bTRaBm8HQidlzbnMPED1qFGW4JJJl3Sd3p0ZWEa/Jwy5GcG5E7BQjii72uX/rBH/9z32C6//hG9yI4H1HTZZdmdVkCrBqfX1IEnJ4bNeqKa20pf25dPACtkCl8ECEv/3Tp/SXPnQ/p+fXqK/NuO/YJr4LqKZv8tphTWA0rghR8Y3HmjrfsNY8FGszgtE+UsEQ5dX1sboDI+9CGvNo/BDyjtInBUaiKIvOI7EmVBtcaS3/8hvnWZDOY+q8UcNgJemRoyJoQPsib6YmRqGLDalZ5ZhoDPvRJM+8pORGGzquA68HpJ7BU+d2cIDlMhXJ23VC0NPH4dQU7hvDhoXpeMLGeMJoNMJZm5PiU2h5c3PEVj3BS2TRzdibzdK1ZgNdNEitLJs5l6/fYHfe0AG7XWR7BrtL2O6StCn3qwXSMmAJdFQ0OPxwjiQ8IQ+L5H4d+QDGNaNdspNs3aWYo/saJUez0381SQvef1o7iHkh0g+/rm9Av6CI/ULiHS6FuhWq0CzYu3wRy4ilm+LUUlkhagPW0MU0h9jsKQ4mVT+z0Q1GeeHty6o/lA5RcVWl6zpCu+DGG6/gFzN2d26wt32DbmdbmO/BYj9FJKLPi+6O1K8gz/d5Mq/cJFcSTMaBITeJ05R2AWvSJpOr0fa9r1ydKhjC8PnDuRbDF5C/JJfIV9YKexzpHF778nVnXr6PGyC0eeZaU6emcLGhC6mjtaJZ6tQlm0kMGjusc4SuScOXwovgoXn1Cs2ll+XqU8+AjNI6yhqox3D8mG6cPs3WsRNUkymuHjHZOsbW8ePU43GOzCfJrPeRqrJU1tIsluzt7DDb20O7FoOyc+0qi/k+i+vX4fqNVL2rd+7GBmQf8fMDnc5FZMj/lD6CnPdbSXO+MekOHoJBjMWIJUSfZOCk26i1Ft+tqkyuO4UMUNmKrpd2HToqOnxmLZi1th0lavHWkD6OdKBcGtDfYGUYzd7iX/u0wpqNkon0ukW79nD50f+7N2hudWAHzwEHfQTrz7p+MWIOhKtu2sRb/JE74pAXEFcz6lruB/6HX/6w/vmths3ZNbY2jrG7s089nuQuzh4VaM0Io8o07mE04GVEOEKzt5VWQ4Yx6ScmyVUPknwq5Bs7gCFQsec22T35Hv7dY8/w+W9f4lWQHZKuvRED9SSvCE2e8FLNcpN16qGXZfVzbDb2ksvHDMdeki8Tmxd0Nn/kGPAbD6N/4T2neeS+M9TtHBb7jF0K2XZNm/SautrPvkPoKitv3dg5PNGvr9z7d5oDijQ5gjfCqmHUVYiAr5f4KtIpyYMUU1KbSiTqmOnkfp7btfzWC2/wL557Q3Ys7N3q5IvperKDp3x1PaZRTcbR6pxZn/5W4d3+Rtlfh+sOBFn72R36Xc9h0cr6vW19s/u/fHhC1rV/h0M/r78vlXu9WSJzcGjiaiO+9xsPbfP3k97Eg7KHA8ZFftbVe3v5wvf5s+8gkkQ0lXapQPK9oJ+LB8/vYbLMoAziO5zeaNcD1xnAkNs0rC7XDPwD583q/Pp+DqMDHxsWACsH3cohttoSveV7DwtojmJgrH3X+v1LD27m8NKbOvTW6UU9h7br8CQuWWAl7ub3rf8hucXfODBXvolM6MC9VW9+T15P3LHx+wG+Z7V3b+3zN+3eD0HR8XbE9T7Fm8epF9Yc4qYXDsuAVm/zb/rbO4CuP8db/urNX7hD54WSGu+QpBxXFw1+I52y3rdUVYWJqYKBSl6QYxANKRx7cP17m9uw+oJ1732EAxOWqIDaYaQEzzTMCZef5zc+/iAfe9cm//qrz+vX95ARMLeR3WaW5SI2L1RzH2WTohlK8h4PkrOYLTcjIBYngvUdjoYxyXs+JsW8Pnn/RH/lE+/nE3KNe22LmV9PTdWiImohpkohg3v6cJ6KrBbgb86tBjfeds7FrYhGiBpofCBqRzQWYxQrDLK/WE24MG94fmb4/efeEDMS5o2mAbmpzGmu3naL7VbWdaC33vP+PT9ezX/e4o3hBzxu+ha+98A4HV7kfL955R1PitIRejFbofBnzWHH6Fvkpmt99dJNc+f3mReOxs1GxS3/9Ju+8GbbcovX9fBzBBpWYfIfR27vWKyG8Xblbbf3sXcah8MPhR+UKFhRWoVXr1yBs/ciYuiCx1UW0yWphzeKiuBi0pumPIBwV8/TUWw5YZXt15/nE5tbPPLXP843X7ui/+Zrl/juDLkHWOJp8CzoW9Ws+uKhMNLkIfekSIkn5MV/SxMjNcmgmAL3gP7cu+AXP/kQHzh7mnE34zgjwqKj67pUerCyqWmQz+VN79LYvBWCRLT2xAgSalxI1SlEIsF6NBrGbHK5HfGqm/KPHn2SJbDTKMblaH+hUCgUCoXC24xiYBwRIUmRPXD+9X3kk2NYVjnZWLGatPltXilbTY8oJmvL7962GxS/f4OTo5oZC3S/4VPv2uKRv/Uxzl/b1xde3+ZrT+ywq7BLqta1IBkZbVZA1CQDIwAxhsEf0Jeg3QQ+fC/65x45y8fvO8X9FWy0M9z2eazvWJDKBVtrcc4hSiptSXpNw4+uRjsaaKXFOMuIGhcqRFvUB1SgiUJjxywnZ/iDx5/kuYB05Mjej+5uFQqFQqFQKByJYmAcgdRxIjUetALnd5EGq9G41HWzXVJnrXxKuja4qNgIbWWIxmDi3dMiB4HRiRPM2wXzZo5WlrGP1Kbh1Kkxnzh5H//JJx9he6/l4tU9fe3aLq/e2OfSbsuVGYPhoSS1z0nQMxO49zjcf2LCmY2aj7/3PVR+gQsL6uUOdaNUEjHWYOwIE1g1Umq7IbnLWrvWXXrFj9K6PIrSaENlxoxUiF5BA9YotVhaO2anPsmjr2/z+RcWMjcwj2CqJD9NOSs/NBFhoVAoFAqFwl2hGBhHRHJqWbCw5+HizoxTo1EqkRc9RnQoc2cwaw3ZDEHMLRPd/6yICDcWLa4aU0/BaKBtGpjPkRCxUZhOt9iKjvtP1ITTZ+mqd7OwFQsxNBiCHWkIARtaavVMo2ccOzZE2TBKs/8Gxzc2MNawv59qXk83N4CK/f196nqEiBBCIISQ6+lXqCpN01DZH91TtK//b0yuvBU9LirOVogd4evjnA+Wf/blc+wA+xG8SdVN3GiCb7qsNftRMpsKhUKhUCgUjsaP7urtx4S+2GkbU5rjudcu88FHHmQSGioM0YRc4TX1a0jyqP5hVtVf7wKKQ1zFog3QRsbjmomrUFoqF5lUjsXeDpD7D5iKxltqgVoMMSjjYHEIzhkql5pn+bZFQ0cXleObm+zeuA5dYOvYBpWxzLZnaIhsTcbMmwbJXUGdc7nLZzI4VH+0M6lEYaQu9dwxLVRKpRZnx+zGMa/5Eb9z7jmeJ5VYNsak7qGWVD7vdhssFgqFQqFQKPwIUwyMI6IogtDlmjXPX9tl/tExm3uGsbF4k8rTpoZs/YIyokiuyXR3F5kWYVqPiNETm5YgHZUo+Jb53h6jyiEEYoh47VAVnLNMKkvlHOPOI23At6BtSl43KGIdtra0y32mY4edjFFV2ralsg5xab9r54jmYH30GCPOOSaTCaH70ZUQiQrSglglSoM4EB0zl5oLneXppeezL1wXPxG6hRJipBo5ui43E/qRTmEvFAqFQqFQuD2KgXFEIoqzFqLHA19/Dfk7ZqzHA5yoahppUAHnV82mejvjbkUueiweyY3LLEBuXiOqYGpk5PB5G2NuICc5ZUQ7aAnEaBC7yjPpe28gkZA74ihxaIDT9y87kHgSFc0/O2NTXX0gdP77Ovnv5hgaNVTUiAa8WSJGwFVcmkfOb5zkN3/3q7IHzBZpIyNA49d6SfxoR2gKhUKhUCgUbodiYByJ3HQrr4JbUnfmF7f3echNaf0cP07vrDQldEeJaaF+J3pgHBkF8bnrtCFK33PbpBaaVAe2MbW6iEhMfR4iQuibbfW9GSS1gQNA+m7lrDqgynqTPDB9Q6UfSwyCS5ZV64mjivN7M5oHPsZv/rNHuUKSzaWeJOkToquqW8W8KBQKhUKh8HakGBhHJhKGxO1UWenxly/x8x+8n2Z+IyVyK/T9lKNEghmW8XfVAx8lgkR8LperAqgjYkEdfc9nM3QVjYgqVvsmdw4vIxQBCSAdiCcSQHKPZum/OPdxVwfa93Nf78/+40cU6FyFdoHjo+O8ur/H8qH38r996VG+45GdXhrHzc2bzNAk8BbNLAuFQqFQKBR+jLlVn/nCW+TwwjAAM+CpVy6zJwatRygWSF57xWZ5VMSQytXeXUzKA1GDihmMC8UQjBDEEAQ6k55DTkrvJV6GmHtVB6ymBoIugo0GFxwuOEyoMLFGokPUIGvRix93FJj7FplssL20uDMP84fPX+T3X0Ca3CCkj1T0Rlr/czLdCoVCoVAoFN5+lAjGHUSlotGOC7vIK7szvefYBOIMEyOKHRboQK49lXpp3DWtlApWqyxZSlWtUoNuQxBFJRAFVAKBLHdSEI1YVYQOxwLRlI+AGiQKYBEdgQoqDEaJkp9NIBKyNCseWGh/P5trPSfjbuewqEBwgX2rhOkZnrra8I8f3ZZrwLIDKgfGE3L1sD5KFNRgiXdfIVcoFAqFQqHwQ6A4UY/AwQViilAoFXPgqQuvsBMDoim5O4gjiEnef1FE7/4COcUgHBEHpBKzqZSux+LTs7bpQYch5KyLtOFGQfAYkjRK1A87pQgqqwgJkH4nAcFjaRGSjOp2uftVXiP1SNhXuKAj/sEXnucNIDionUBfAUvWcy4MSNrru374C4VCoVAoFH4IlAjGHSIlQAtQ09Hx2HNzfv7dM05sWFwEn2VHSTC1nth892w8ldTNG81yJ41YDSARl/MstN/SmKRNRg2ikiIW2NwwMH1ftLnClIQhwwD6XBNNsiAFiau9jsiPgKFwm0iE0HK1CfzjJ1/kGwFpMNgwArNYqxZF6tqNgCpozJGMu7fphUKhUCgUCj8sioFxBJTknM+90/Li2tEpPAdyvvH60NaUEU2WGmn+gMVIXoBrrqokeUkuq+jAQWRYst9pmZBKzIvemPMDYpIvEYlqkrxnbafNkEvB4I2HmJsHapZErdKaVVnlmyiAWW33D2hc9Dnjdyz6M4y3pH+qy9ufxiNV2oqgNr3eV78i0ljH3vg4n33yWT7/GrINGKZE7YgBKpsaML7pPh6wQAqFQqFQKBTeHhSJ1FGQwbGPyxEAgLkdc8XC//ql6+yNjtO6GmxH8HOih8pMwDiC1yHxWdTklGuPoUXyI8mUUvUmQ9JVqSjBpMdRvP8plyJFK1KFqBxRwBGoCdTo8HAoqcxsMBGfH2kRnvNJcjNBF4QqmOHhwmofU/dywZv0UBkK3N5SLNVLyd7scSRESbElj4uKCwYXKmyo0v4KyCiy8PsYZ4hVxS5CMxox1479jeP8o2dv8P+dR3YAUzlalgQ6bFXT9booJVmhGtKz3L4srFAoFAqFQuFHnWJg3AH6RX7qHxeAyK7AVZCvv3yZXTNBqhrtOra2NvAx0i5aqmo09ITo18rD0vPQIjTJjFLG9J3M3RCN+bF6LZsbxJyKfPCRjQGJ6XHgu1YPE2V4iMqw7agcMChuZ6l9J/e/LxXc54xEgWhWW9bMG05snWDeLWjalsl0k5lXlhun+JMXLvE7T16RlxUWgNiKiCeSmgwOm6mw6hNSjItCoVAoFApvb4qBcRR09WgxdH1fh+ARnxad//aJK2xvnWZnv2OzHtP5fSILrE3ZGH0p2GBSPoSKSa/h0JyAnRb6qY9GnwNhY85nKBKb2yblgzjQik5qls6wqDs614BpcFE5MTrBztU5W1vHGU9H7LxxiWp8nMdvWP7JV3e5mpVgRgxt2w7frVoOTKFQKBQKhXcmxcA4KlmmnwRMfenWZA544Mk58oUXXsNsnqVTYTHbZVQp1lpiyCVcTbJTgkj+HkcURxBLEIvicoO6w4nWd3XP3wakkrqKwxvoTMTbjmDCIB/rlh2bk2PMZw1LL1RnH+Dpawv+9z98gVdyPKKuagBCTNaGEUOMJVJRKL4QWb0AABIQSURBVBQKhULhnUkxMI6I9FGMXCKpjzUANMAe8E8ffUUWW6eZqcMYw8gK3nvUCNpLjfp+EWvyJB2iGDZJeLBJgkTqq2C0HMCjEDGoVkQswXqiTV3FUy6JyzkjAS8BOmHfj3h5epbf/NxLXABpgRbw3hNz/o2rKsSamyMY/XlSKBQKhUKh8DanrE+PwKobc+ptgMShYlAkRTDmFq4Cv/WVbyLvug91Y5pFh3OOTtOC1uSSsDfLnUw2LFJydP/a8JuyYD0yvWFnNB0HF1M38tRwUDDOwnjMdjXl8uQ0f++fPMrLILvAkjq1C9S+aaIQQsD71P/CuVKkrVAoFAqFwjuPsgI6MiZXG42gOjRU09y5mmCwlfIvnr0hH//Anv40U6q2QzYdoWuwOZnYad+gDnorpbcfNJczjZLKo/Zp0gYId7MT+I85KTk/oAJOA9ZHbEyXRCTlxWiAnWC5cOwMf+//+QavgWxjcl6MYsSmSJRqkkXFfATlTY5JMQoLhUKhUCi8zSkRjCNiECySyo+yal4XAVWDIGx3yh7wj//oGfZGpwnTM+x2HbZKfnKrio2pV4SLDD8bjdl0yD0qRIl9b4bbrsFU6BGNIKkTeSpR6zARJAoqQmcc2/Umz3nH3//sNzgPcg3wjPEIQYRWAyGEAzkXdV1jrR0iGYVCoVAoFArvJIqBcUQkpWf3P+RnAzgQEAJi4Abw7TnyuWcvsT09w9KMULF0bUslhpE1WI1UqtRRMTFgYkAIQ+1XlTg8+jKxhSMgSuz2qY0yoaZmTBRhEVuCCvNqg6dkg7//ped5/BqyIMneWpbEWgj4W5adbdu2GBeFQqFQKBTesRQD4wj04qRhEIVkXEgqQYvmGIMDqWEf+O2nX+dPzl+mOvMAu43n2InTLNuO2WKZ+74FJERqa6mtyVEMTxSfu0vnKEYxLo6MUdicbuWIhWV3vqAJkerkWa7VUy6YCf/gC0/z2DYyB8SO0/E0kWi6tfbkhUKhUCgUCoWekoNxZNYWmUoyMKKBLG9SCwufpE818BzIv3r6JX33/Zu879i93FjsY8SyMR5jga7dp6oqKoFZs4C64nCOhUqSX5GlWEXXf7sIy0VAjGOn22N6cguNhjca4dG58g/+6Gle8ilyAYYQuqH8MBLBcrNK7fsci8OZGeXQFQqFQqFQeLtRIhh3krXGeymycXD1GV3FroFv7SO/+7VnuLiw7JoRcbTJEkujghtPwQhN06DaV4rKCeDD6tTkFO9y+I5CxCD1JqEaMzp+kivec3V8nG/eaPlf/vAV+a7PkQsZkcRwYTXifTZ/oVAoFAqFQuEAZYV6BNbTrYd+GBpBA5aQvNURXAXWGvZ9R+NgF/j8xSD/+uvnWGycYTHZ4FoXudEFzGQDr4Z52zDd3AAOe70F1GC0b75XKkjdLt4YdlTYMyN2lxFO3MfvvPw6/+MXXpGLQGcrGoRGG3zOsxm5Ec64N8+xF25Z1OtNXi4UCoVCoVB421EMjCPSO7IN2ciIKWeiX306sfgWghU0d+DzDq4DX3jdyx9/+xzXI4zPvouuqtlpWoK12NHopm7QoiZ387agFlFbDuARUMCMa64sFuyMT/Bvn3yRf/TVa3IB2MaxCAaP0EmSRXlIVaN8BG+w4koUo1AoFAqFQuEQxal6BxAYunfDas0pwEimzLVFK5+SMFqQAHWccow5HwL9mx8T/vxPfIxj0eP2rnPMGcaiNIs5pq4Ismq2Z9RgYurk3ZevLdWkbg9vDDPrWJy4l//jc4/z2YvIdWCPCg+YqkJpUfUH5G9WDY4KJxVznaO3Gv9DhsebXWjFPikUCoVCofB2oyR5HxWB3CMPw0o1E/PPXjum9ZiZ7tMHNlTBVyN2u5ZX8PIvn1ady0v80ic+wvEpLBY7OAcqQhQAHYwIUZOyLxSipFwMJSWUp4pTMW+LJglX31m8X+EOkqo+9hHfUhRkfQm9rsq6c93EzU3ffastEP3eqjAZjsVqw6KkrtxBDEEMikXFsLAV52dL/uHvP87XO2QbmFHhcYAn+mX6u70FKUAAg8EGi9eOg0e9UCgUCoVCoVAMjKOS17GBoRvG8HIEPIG2na/WoTlxI3R7BODyuObGspW9p2aofU1/+b33UtWRebPNeFTRhZZq5LDW4X0khhargpGUf9GZigg4jdgYcOoRAgZPkEgwqfEfGFSSvEo0JYibvO2DydH/vGY0qOQO4hKzwaKENYvERnlLRsabGjGafhPFDEGC9PPBbUob1jcz1OE9MShiHVYMEpWoHhMjVsAYaLsldjxhHiMLQCbH6cyU7b2Wczca/qcvvi5XgAXQAGEQveWD1f/9tbYWnXpiNirWcvC/JyVSUSgUCoVC4Z1CkUjdTcSAVNTWstnNuRf49fdO9a998kM8OPLo/hW2KsNivkOMkfF4jDEO33QQhaoe0wKoYFSxGrE5imE0RT2iSQvx5LmXbFzAysDIkYH+Vb3ZwAAI5qCBoZLedyQDQ2+uhNUbFuuyo9W/B/NjeJ+1FctFg6qwMZ5QOUdsl2jXYk3EGNhrOtyJU+zKmOtMuR5H/Mm3zvG5F2byAinpvlAoFAqFQqFwZygGxl0kKW8Eg2KACXAc+CsPT/WvfeyDvFs6Ti53OV4FKhtZ+jmLGNGqAucQFOeXWTZkCDiCWBSHqE3VpgAZpFOKIRLFp87geSt6Y2ElL1rbxjVJ0rDMl1UUwcQf7BQ6YE5o7niet9GubWefXxJMRCVFYTRHYuLa9xgsla1BheWypfUdzgjTuqZ20C6WjLdO8MZ+w2LzHp7ai/zTL3+Hb86QXVLUovTcLhQKhUKhULhzFAPjLmJJy+vKwiKkgzEBjgE/OUb/9qc/yGfuO8V47yq132PsIrESFqFjKYozhjq2WI0EcWg2MII40ArUIJqW5ELEEDDq888BJSU6x7XToF+4yy3kUgfof/EDlsldNzBSRGS1jVYVE2M2IWLuXL6SaemB/h85AqMBkVS6V1WxVYWK0LYt86blxLvu49LOgnZ6ms899Ty/fW7ORZCrwNJALOkThUKhUCgUCneUYmDcRQTYcELrUzRhMp0wny9wwBmB0wp/61MP6M+86xgfOzZmNN8mzHexLhBHlkZjysXAYHNlKaNJUhTEEEzEmywskoiNMApQBWUUUlRg6cDbW2xbH83on3OkwnCzbXG7a/Qkt/IgcZBmCSuZlskGEpgs7ZI1WVVKahFRupyM7SoDIrRRiNWUbvMELy6UV0PFP//Skzy5jSxJ+RYWS4PiiQdyZwqFQqFQKBQKR6MYGHeRvjhRXRnaLhIwVKMJEOmaBVPgJPArD4/11z76AR7ZqNnye0zxwJLWd3hxgOCi4mLEafL+q4A3SmcgmpSzYBSqAHVIzyqGxt7awBi2UfsFv+RIw+q12EcXbnP/VRSkHXIsopjBgLDRICpYTZEKE1Psw+haxEWUGD3jcU2gY7aY441Bjp1g225yoTV88cIVfuvxN+QysBTwKlRmhMQWQWhzWnehUCgUCoVC4c5QDIy7iGCocEQiEcHWls63qVqSNdBFpgobwHsE/Rs/+xB/6f33c6qbMd67zoYFLx1ATvAGGw9GGKJAMJqjGgARNXEVoYirQmKrBOu1bRwMDJOjCzJEF2CV/P39uJWSyqrios/fA14c3giRFJUxKtiYDAyrufyuajZs0s+h81TViKCRpRi6Y1tckoo/fP4i/+7bN3i+QbqRY78RwOFEUG1xEgiqQ82oQqFQKBQKhcKdoRgYdxHBYKgQLJ4udeCzmhplKGAFvLJlwfmUAP5zx9Ff/5n38YmzJ6lnN5jqIpWm1biKLqA3VYIKkqIYyeCAKBGjhiocjEYcLhMLb25g9Av92zUwRKGK0GdmDH0qJH2gj7r0b5a+6pWsSsQaN2G36YijTZbTYzx+6Rr/9rHzfH0n9bVYOuhijZgR6lM/bmOUyFrzvEKhUCgUCoXCHaMYGHcVB1T53x5MYBAc5f5uqXMFjEiRjBGwCfz8Q+jf+PQn+KA0TBd7qEZcBRDwocWguMrgvc8J0ILGJD9SDCIWgzCSiOJRVXxMlZvUCBgBETR3EezL24pKMgeG/hXf27yIKCKSErHzz/13qlR0saIyFSMF6z0meFAPRlELvhYaDXgDIpI6mHcBixBtxa7ULLdO8fR2wx98+zm+8nKUG2k06XD5L6Y8Cy+sBhWXi1VF0JLpXSgUCoVCoXCnKAbGXcWwMjAiqVXfwcXuqKrxXTtUnBrlT1TAfaC//jB85pGHeeje07S7N/Dz65yc1IxtYLm/w2RcA2CpECo0OlCLocIieL+PSMBai7hUJDaox2skaMSYXPdpzcBYbXu/3W+O2FTdKcaYDAuzOuUiDswm3geq4JkaGJmIhI6oLUEiM7/AbW7SVTULnz7jqjExGm60ngs+8Llvv8oXX02VofaABRPAMhIBnQ3dzT3gh9Ybo2xgdMXAKBQKhUKhULiDFAPjbiOAGhwGm18IpA7gmJgWwwo2JKPC5Q7VXS5re4IU2fips+ivffoT/PR9pxnvX8HOrnGsUrrZdYwRsBZhhEZHDDblXsT8xTnNOZpUlcmYpE0SEUIIWS6VDArloIHRS7MOL9F7O0REiDEOkQxrbfpeVUwURmZM6DxeGowNBBqCX1Kj1MbipKINjn1f09RbdMfOcF0tj194ha+9+DpPXkEuxT5iAR0Tltg0aKYDTcZZlaVQPj8wkzSAsUsRk0KhUCgUCoXCHaEYGHcbSWkXSbBkAbMyMKxPR6hKaQfa5WcMzk1RIwQ/Y6NWtpbKBvATDv2PPnEPP/Xus5wwLXVcUOFxKCYqJgg2CJVWYA3qsogoBjR6VEPqk6GKGF1LUcg5F/mUUVJOxvczMGKMSR5lZBUNAXyMmKhIp1iUaCPRBkwFapKMygclaI0ZnaSpT3BhL/CVF17h0Wd3eNEje6SIRQs4hA6Lp6Iaj+lMB+0+5JK3dZacKcnACIzyC4HSaq9QKBQKhULhzlEMjLtIth2AXhzl0CGOEVG6pIuStUcU6ByOJH3y2XdfEZkKOIUx8J4J+oF7an7ppz/JKek4ZSPHtGXsl7h2iQsdKrDvFUyNs5Ie5I7aoUuN6/o+GrcwMABMNjB61rt998+9YRFjTHkemqIZ/esbkwkSI7PdPdq2QyYb+OmE/WrENVvzjQuXePS5Gzx/FbkaYUlvElQYM6aJka7PYTExldKKDA+rqxN9yBnHocTcN7xIpAqFQqFQKBTuFMXAuIv0fTAgL5glJwho/3oqYKv9G52AGSMeTAuCEvBrUYa0ou5zNSYk+dT9oJ9+35hPvvc+3ntykxMVVKFBQ8u4qiEqEjwmBmz0uJgiHg6IIZXBRU3ueSG52tRbNzAkJ4urpqW8iOCcQ6uKK7MFamscDltNqafH2G6Vb71yka+99DqPX4JrINeA/VRpFlNNCK0SvKa8EsCMhCgB/HzYECHZGylyYYZtSy37cplbSiGpQqFQKBQKhTtJMTDuJnLouSf2xofBZtkUJE97h6Lik8EhQOhtD5PUPrkNXV8saWxX7xkBp4CHz6IffPdZ3n9qg4+cGDENqXu4i5FxDDgNVKo4DViNuVRsWqAHWRkY6xKptU1P2zp0+U6GheaIhTGGEAKt79gJQjzzEHtuyrVZyzOvvMFjz77OszvIDkn6NAcChiiWTsMq2iDJHtPcM4Pgh32ujMOqxasnZPNBh22LKOsRjRK9KBQKhUKhULiTFAPjbiKkjG0A4sqVnvMGegOjZpTlPIGWgFaRkGVAIkCzKmdrEBRJXyWWTlMEwpnkzXekR03qq/Eg6IMjeM8D8J4HznDvqZOcHNVsaKD2HVUMVOpxMQxef0hGx2EDI2YZVRBDFEMUoTWOTgSVFLHwatmez7h89Qqv7S55/GLg+R24DjInGRX7QIPJeRJVrvKkjGqL0tK1y7RPdUp2762H2lhMzPuezayQDYq0ffEW0YpiYBQKhUKhUCjcSYqBcbc5fAT04K8MSTaVZD5rOQNm7f1rOQaHi8fq2ncBQzwkq42Y5Oe49t4p8MkN9IyFh85YNmLgg/dsMYoNTloeOHOaDTE5CyQncQeIznFpts+13QXGjNkXwwu7e1xt4MYCLu7ChXlqgNenVresivP2r4Vhe1Zdxld7dcggWEuuWI2BOTAGq6EtxkShUCgUCoXCD5v/HwxR35sfeZK2AAAAAElFTkSuQmCC';
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
      <img src="${LOGO_URI}" alt="yes WeDo" style="height:52px;width:auto;display:block;" />
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
  <div class="footer">Documento gerado automaticamente pelo Simulador LED Neon &mdash; yes WeDo</div>
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
  const sub = document.getElementById('email-submenu');
  const tog = document.getElementById('checkout-email-toggle');
  if (sub) sub.setAttribute('hidden', '');
  if (tog) tog.classList.remove('open');
}

document.getElementById('submit-btn').addEventListener('click', openCheckoutModal);
document.getElementById('checkout-close').addEventListener('click', closeCheckoutModal);

// Toggle submenu de email
const emailToggle = document.getElementById('checkout-email-toggle');
const emailSubmenu = document.getElementById('email-submenu');
if (emailToggle && emailSubmenu) {
  emailToggle.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = !emailSubmenu.hasAttribute('hidden');
    if (isOpen) {
      emailSubmenu.setAttribute('hidden', '');
      emailToggle.classList.remove('open');
    } else {
      emailSubmenu.removeAttribute('hidden');
      emailToggle.classList.add('open');
    }
  });
  // Fechar submenu ao clicar fora
  document.addEventListener('click', e => {
    if (!emailToggle.contains(e.target) && !emailSubmenu.contains(e.target)) {
      emailSubmenu.setAttribute('hidden', '');
      emailToggle.classList.remove('open');
    }
  });
}
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

document.getElementById('micron-back-btn-top').addEventListener('click', handleBackBtn);
const backBtnMob = document.getElementById('micron-back-btn-mob');
if (backBtnMob) backBtnMob.addEventListener('click', handleBackBtn);

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
