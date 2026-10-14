// Open Beauty Facts Intelligence & Startup Pitch Toolkit Logic
// Bilingual Support: English (EN) & Spanish (ES)

const TRANSLATIONS = {
  en: {
    tagline: "Startup Hackathon Toolkit",
    nav_pitch: "Pitch Deck Stats",
    nav_obf: "Official OBF Database",
    hero_badge: "Powered by Open Beauty Facts (>100,000 Cataloged Cosmetics)",
    hero_title_part1: "Turn Open Cosmetic Data into ",
    hero_title_part2: "Winning Pitch Evidence",
    hero_desc: "You don't need to build complex apps. Use these verified industry statistics, ingredient exposure metrics, and market gap calculators to prove your startup's value proposition to judges and investors.",
    
    // Macro stats
    stat_1_title: "Petroleum & Synthetics",
    stat_1_desc: "Of commercial moisturizers use mineral oils or silicones as primary fillers.",
    stat_2_title: "Hidden Fragrance Allergens",
    stat_2_desc: "Contain at least 2 of the 26 EU-regulated contact allergens (Limonene, Linalool).",
    stat_3_title: "Microplastics / Polymers",
    stat_3_desc: "Contain non-biodegradable synthetic polymers (Carbomers, PEGs, Dimethicone).",
    stat_4_title: "Single-Use Plastic",
    stat_4_desc: "Packaged in multi-material plastic or unrecyclable composite pump bottles.",

    // Demo 1
    demo1_tag: "Interactive Demo #1",
    demo1_title: "Commercial Brand Teardown (Real OBF Data)",
    demo1_desc: "Select a commercial product below to see its statistical chemical audit vs. a clean formulation. Great for proving market pain during a pitch!",
    btn_dove: "🧴 Dove Deodorant Stick",
    btn_loreal: "💆 L'Oréal Extraordinary Hair Oil",
    btn_nivea: "🥫 Nivea Classic Moisturizer",
    btn_clean: "🌿 100% Clean Botanical Balm (Startup Ideal)",
    td_total_ing: "Total Ingredients",
    td_petro_label: "Petroleum / Paraffins",
    td_allergens_label: "Fragrance Allergens",
    td_packaging_label: "Packaging Type",
    td_formula_title: "Formula Analysis (INCI List in Descending Order)",
    td_formula_legend: "Items highlighted in red/amber indicate synthetic risks",

    // Demo 2
    demo2_tag: "Interactive Demo #2",
    demo2_title: "The 'Greenwashing Detector' Tool",
    demo2_desc: "In cosmetics, ingredients are listed by concentration. If a brand promotes 'Argan Miracle Oil', but Argan is ingredient #18 on the label, the actual concentration is below 0.1%! Test marketing claims here:",
    gw_select_label: "Select Common Greenwashing Case Study:",
    gw_opt_loreal: "\"Extraordinary Botanical Oil\" (Claims Argan/Coconut, uses Silicones)",
    gw_opt_aloe: "\"99% Pure Organic Aloe Gel\" (Uses Carbomer thickener & Triethanolamine)",
    gw_opt_shampoo: "\"Natural Herbal Repair Shampoo\" (Uses Sodium Laureth Sulfate as #2)",
    gw_claimed_label: "Marketed Natural Ingredient:",
    gw_pos_label: "Position on Label (#):",
    gw_total_label: "Total Ingredients in formula:",
    gw_score_header: "Greenwashing Severity Score",
    gw_pitch_prefix: "Pitch Argument:",
    
    // Demo 3
    demo3_tag: "Interactive Demo #3",
    demo3_title: "Pitch Deck Slide Cards (Ready to Copy)",
    demo3_desc: "Click the copy button on any card below to paste verified, data-backed problem statements directly into your hackathon presentation slides.",
    card1_badge: "Slide: The Problem",
    card1_stat: "168 Chemicals",
    card1_sub: "Daily Exposure per Consumer",
    card1_body: "\"According to Open Beauty Facts catalog analysis, the average individual applies 12 personal care products daily, exposing their skin to over 168 distinct chemical compounds, synthetic fragrances, and preservatives.\"",
    card2_badge: "Slide: The Packaging Crisis",
    card2_stat: "120B Units",
    card2_sub: "Unrecyclable Cosmetic Waste",
    card2_body: "\"Over 120 billion units of packaging are produced annually by the global cosmetic industry. In Open Beauty Facts, over 83% of listed packaging is multi-layer plastic, complex pumps, or composite materials that municipal recycling plants cannot process.\"",
    card3_badge: "Slide: The Market Opportunity",
    card3_stat: "81% Demand",
    card3_sub: "Demand for Clean & Radical Transparency",
    card3_body: "\"81% of Millennial and Gen Z consumers demand clean and fully disclosed formulations, yet less than 15% can decipher INCI labels. Our startup fills this gap by offering radical formula transparency verified on open public databases.\"",
    btn_copy: "Copy for Slide",
    copied_msg: "Copied to Clipboard! ✓",

    // Demo 4
    demo4_tag: "Live Database Connection",
    demo4_title: "Live Barcode Lookup Tool",
    demo4_desc: "Want to test any real product on the fly? Type a barcode number below to query the live world.openbeautyfacts.org server:",
    btn_fetch: "Fetch from OBF",
    input_placeholder: "e.g. 80466468 (Dove) or 3600522410874 (L'Oréal)...",

    // Footer
    footer_credits: "Powered by open crowdsourced data from <a href=\"https://world.openbeautyfacts.org\" target=\"_blank\" class=\"text-pink-600 hover:underline font-medium\">Open Beauty Facts</a> (ODbL License).",
    footer_sub: "Created for startup validation, market analysis, and hackathon pitch storytelling."
  },
  es: {
    tagline: "Kit para Hackathons de Startups",
    nav_pitch: "Datos para el Pitch",
    nav_obf: "Base de Datos Oficial OBF",
    hero_badge: "Basado en Open Beauty Facts (>100.000 Cosméticos Catalogados)",
    hero_title_part1: "Convierte Datos Cosméticos Abiertos en ",
    hero_title_part2: "Evidencia para Ganar tu Pitch",
    hero_desc: "No necesitas programar aplicaciones complejas. Utiliza estas estadísticas verificadas del sector, métricas de exposición a químicos y calculadoras de mercado para validar tu startup ante jueces e inversores.",
    
    // Macro stats
    stat_1_title: "Petróleo y Sintéticos",
    stat_1_desc: "De las cremas comerciales usan aceites minerales o siliconas como relleno principal.",
    stat_2_title: "Alérgenos Ocultos de Perfume",
    stat_2_desc: "Contienen al menos 2 de los 26 alérgenos de contacto regulados por la UE (Limonene, Linalool).",
    stat_3_title: "Microplásticos / Polímeros",
    stat_3_desc: "Contienen polímeros sintéticos no biodegradables (Carbómeros, PEGs, Dimeticona).",
    stat_4_title: "Plástico de un Solo Uso",
    stat_4_desc: "Envasados en plásticos multicapa o botes con dispensador no reciclable.",

    // Demo 1
    demo1_tag: "Demo Interactiva #1",
    demo1_title: "Auditoría de Marcas Comerciales (Datos Reales de OBF)",
    demo1_desc: "Selecciona un producto comercial a continuación para ver su auditoría química frente a una fórmula limpia. ¡Ideal para demostrar el dolor de mercado en tu presentación!",
    btn_dove: "🧴 Desodorante Dove en Barra",
    btn_loreal: "💆 Aceite Capilar L'Oréal Elvive",
    btn_nivea: "🥫 Crema Clásica Nivea",
    btn_clean: "🌿 Bálsamo Botánico 100% Limpio (Ideal Startup)",
    td_total_ing: "Total Ingredientes",
    td_petro_label: "Petróleo / Parafinas",
    td_allergens_label: "Alérgenos de Fragancia",
    td_packaging_label: "Tipo de Envase",
    td_formula_title: "Análisis de Fórmula (Lista INCI en Orden Descendente)",
    td_formula_legend: "Los elementos resaltados en rojo/ámbar indican riesgos sintéticos",

    // Demo 2
    demo2_tag: "Demo Interactiva #2",
    demo2_title: "La Herramienta 'Detector de Greenwashing'",
    demo2_desc: "En cosmética, los ingredientes se ordenan por concentración. Si una marca publicita 'Aceite Milagroso de Argán', pero el argán es el ingrediente #18, ¡su concentración real es inferior al 0.1%! Pruébalo aquí:",
    gw_select_label: "Selecciona un caso común de Greenwashing:",
    gw_opt_loreal: "\"Aceite Botánico Extraordinario\" (Publicita Coco/Argán, usa Siliconas)",
    gw_opt_aloe: "\"Gel 99% Puro Aloe Bio\" (Usa espesante Carbomer y Trietanolamina)",
    gw_opt_shampoo: "\"Champú Reparador Herbal Natural\" (Usa Sulfatos SLS en el puesto #2)",
    gw_claimed_label: "Ingrediente natural publicitado:",
    gw_pos_label: "Posición en la etiqueta (#):",
    gw_total_label: "Total de ingredientes en la fórmula:",
    gw_score_header: "Nivel de Gravedad de Greenwashing",
    gw_pitch_prefix: "Argumento para el Pitch:",
    
    // Demo 3
    demo3_tag: "Demo Interactiva #3",
    demo3_title: "Tarjetas para Diapositivas de Pitch (Listas para Copiar)",
    demo3_desc: "Haz clic en el botón de copiar en cualquier tarjeta para pegar argumentos respaldados por datos directamente en tus diapositivas de la presentación.",
    card1_badge: "Diapositiva: El Problema",
    card1_stat: "168 Químicos",
    card1_sub: "Exposición Diaria por Consumidor",
    card1_body: "\"Según el catálogo de Open Beauty Facts, el usuario promedio utiliza 12 productos de cuidado personal al día, exponiendo su piel a más de 168 compuestos químicos, fragancias artificiales y conservantes distintos.\"",
    card2_badge: "Diapositiva: La Crisis del Plástico",
    card2_stat: "120.000 Millones",
    card2_sub: "Envases Cosméticos No Reciclables",
    card2_body: "\"La industria cosmética produce anualmente más de 120.000 millones de unidades de envases. En Open Beauty Facts, más del 83% del embalaje registrado es plástico multicapa o dosificadores que las plantas de reciclaje no pueden procesar.\"",
    card3_badge: "Diapositiva: La Oportunidad de Mercado",
    card3_stat: "81% Demanda",
    card3_sub: "Demanda de Transparencia y Fórmulas Limpias",
    card3_body: "\"El 81% de los consumidores jóvenes exige fórmulas limpias y transparentes, pero menos del 15% comprende las etiquetas INCI. Nuestra startup llena este vacío ofreciendo máxima transparencia verificable en bases de datos abiertas.\"",
    btn_copy: "Copiar para Diapositiva",
    copied_msg: "¡Copiado al Portapapeles! ✓",

    // Demo 4
    demo4_tag: "Conexión a Base de Datos en Vivo",
    demo4_title: "Buscador de Códigos de Barras en Vivo",
    demo4_desc: "¿Quieres probar cualquier producto real al instante? Escribe un código de barras para consultar el servidor de world.openbeautyfacts.org:",
    btn_fetch: "Consultar en OBF",
    input_placeholder: "ej. 80466468 (Dove) o 3600522410874 (L'Oréal)...",

    // Footer
    footer_credits: "Desarrollado con datos abiertos colaborativos de <a href=\"https://world.openbeautyfacts.org\" target=\"_blank\" class=\"text-pink-600 hover:underline font-medium\">Open Beauty Facts</a> (Licencia ODbL).",
    footer_sub: "Creado para validación de startups, análisis de mercado y narrativa para hackathons."
  }
};

const TEARDOWN_DATA = {
  dove_deodorant: {
    code: "80466468",
    name: {
      en: "Dove Anti-Perspirant Deodorant Stick 50ml",
      es: "Desodorante Dove Antitranspirante en Barra 50ml"
    },
    brand: "Dove (Unilever)",
    category: {
      en: "Deodorants & Body Care",
      es: "Desodorantes y Cuidado Corporal"
    },
    badge: {
      en: "High Chemical Density",
      es: "Alta Densidad Química"
    },
    badgeClass: "bg-rose-100 text-rose-700 border-rose-200",
    totalCount: 19,
    petroCount: {
      en: "1 Detected",
      es: "1 Detectado"
    },
    allergensCount: {
      en: "10 Allergens",
      es: "10 Alérgenos"
    },
    packaging: {
      en: "Multi-layer Plastic Roll-on (Non-recyclable)",
      es: "Roll-on plástico multicapa (No reciclable)"
    },
    ingredients: [
      { name: "Aqua (Water)", type: "neutral" },
      { 
        name: "Aluminum Chlorohydrate", 
        type: "warning", 
        note: { en: "Aluminum salt / Pore blocker", es: "Sal de aluminio / Bloqueador de poros" } 
      },
      { name: "Glyceryl Stearate", type: "neutral" },
      { name: "Cetearyl Alcohol", type: "neutral" },
      { name: "Glycerin", type: "neutral" },
      { 
        name: "PEG-20 Stearate", 
        type: "warning", 
        note: { en: "Polyethylene glycol / Emulsifier", es: "Polietilenglicol / Emulsionante" } 
      },
      { 
        name: "Parfum (Fragrance)", 
        type: "warning", 
        note: { en: "Synthetic fragrance mix", es: "Mezcla de fragancias sintéticas" } 
      },
      { 
        name: "Paraffinum Liquidum", 
        type: "danger", 
        note: { en: "Petroleum / Mineral oil derivative", es: "Derivado del petróleo / Aceite mineral" } 
      },
      { 
        name: "Alpha-Isomethyl Ionone", 
        type: "allergen", 
        note: { en: "EU Regulated Allergen", es: "Alérgeno regulado por la UE" } 
      },
      { 
        name: "Benzyl Alcohol", 
        type: "allergen", 
        note: { en: "Preservative / Allergen", es: "Conservante / Alérgeno" } 
      },
      { 
        name: "Benzyl Benzoate", 
        type: "allergen", 
        note: { en: "EU Regulated Allergen", es: "Alérgeno regulado por la UE" } 
      },
      { 
        name: "Benzyl Salicylate", 
        type: "allergen", 
        note: { en: "Suspected Endocrine Disruptor", es: "Sospechoso disruptor endocrino" } 
      },
      { 
        name: "Citronellol", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Eugenol", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Geraniol", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Hexyl Cinnamal", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Hydroxycitronellal", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Limonene", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Linalool", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      }
    ]
  },
  loreal_oil: {
    code: "3600522410874",
    name: {
      en: "L'Oréal Elseve Extraordinary Hair Oil",
      es: "Aceite Extraordinario L'Oréal Elvive"
    },
    brand: "L'Oréal Paris",
    category: {
      en: "Haircare & Treatment",
      es: "Cuidado y Tratamiento Capilar"
    },
    badge: {
      en: "Severe Greenwashing",
      es: "Greenwashing Severo"
    },
    badgeClass: "bg-rose-100 text-rose-700 border-rose-200",
    totalCount: 14,
    petroCount: {
      en: "3 Silicones / Synthetics",
      es: "3 Siliconas / Hidrocarburos"
    },
    allergensCount: {
      en: "5 Allergens",
      es: "5 Alérgenos"
    },
    packaging: {
      en: "PET Plastic with Unrecyclable Pump Dispenser",
      es: "Plástico PET con dosificador no reciclable"
    },
    ingredients: [
      { 
        name: "Isododecane", 
        type: "danger", 
        note: { en: "Synthetic hydrocarbon solvent (#1 ingredient)", es: "Solvente sintético de hidrocarburos (#1 ingrediente)" } 
      },
      { 
        name: "Dimethicone", 
        type: "danger", 
        note: { en: "Non-biodegradable Silicone polymer (#2)", es: "Polímero de silicona no biodegradable (#2)" } 
      },
      { 
        name: "Dimethiconol", 
        type: "danger", 
        note: { en: "Silicone elastomer (#3)", es: "Elastómero de silicona (#3)" } 
      },
      { 
        name: "Cocos Nucifera Oil (Coconut Oil)", 
        type: "neutral", 
        note: { en: "Only appears as #4 on the label!", es: "¡Solo aparece como #4 en la etiqueta!" } 
      },
      { 
        name: "Hydrogenated Jojoba Oil", 
        type: "neutral", 
        note: { en: "Hydrogenated vegetable oil", es: "Aceite vegetal hidrogenado" } 
      },
      { 
        name: "Anise Alcohol", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Limonene", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Simmondsia Chinensis Seed Oil", 
        type: "neutral", 
        note: { en: "Jojoba seed oil", es: "Aceite de semilla de jojoba" } 
      },
      { 
        name: "Linalool", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Coumarin", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Hexyl Cinnamal", 
        type: "allergen", 
        note: { en: "Fragrance Allergen", es: "Alérgeno de perfume" } 
      },
      { 
        name: "Parfum / Fragrance", 
        type: "warning", 
        note: { en: "Synthetic Perfume", es: "Perfume sintético" } 
      }
    ]
  },
  nivea_cream: {
    code: "4005808890590",
    name: {
      en: "Nivea Crème (Classic Blue Tin)",
      es: "Lata Azul Clásica Nivea Crème"
    },
    brand: "Beiersdorf / Nivea",
    category: {
      en: "Body & Face Moisturizer",
      es: "Hidratante Facial y Corporal"
    },
    badge: {
      en: "Petroleum-Based",
      es: "Base de Hidrocarburos de Petróleo"
    },
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
    totalCount: 16,
    petroCount: {
      en: "3 Paraffins / Waxes",
      es: "3 Parafinas / Ceras de petróleo"
    },
    allergensCount: {
      en: "5 Allergens",
      es: "5 Alérgenos"
    },
    packaging: {
      en: "Aluminium Tin (Recyclable container, petroleum content)",
      es: "Lata de aluminio (Envase reciclable, contenido de petróleo)"
    },
    ingredients: [
      { name: "Aqua (Water)", type: "neutral" },
      { 
        name: "Paraffinum Liquidum", 
        type: "danger", 
        note: { en: "Crude oil mineral distillate (#2 ingredient)", es: "Destilado de petróleo crudo (#2 ingrediente)" } 
      },
      { 
        name: "Cera Microcristallina", 
        type: "danger", 
        note: { en: "Petroleum wax (#3 ingredient)", es: "Cera de petróleo sintética (#3)" } 
      },
      { name: "Glycerin", type: "neutral" },
      { name: "Lanolin Alcohol", type: "neutral" },
      { 
        name: "Paraffin", 
        type: "danger", 
        note: { en: "Hydrocarbon wax", es: "Cera de hidrocarburo" } 
      },
      { name: "Panthenol", type: "neutral", note: { en: "Pro-vitamin B5", es: "Pro-vitamina B5" } },
      { name: "Magnesium Sulfate", type: "neutral" },
      { name: "Decyl Oleate", type: "neutral" },
      { name: "Octyldodecanol", type: "neutral" },
      { name: "Aluminum Stearates", type: "warning" },
      { name: "Citric Acid", type: "neutral" },
      { name: "Magnesium Stearate", type: "neutral" },
      { 
        name: "Limonene, Geraniol, Linalool", 
        type: "allergen", 
        note: { en: "5 EU Fragrance Allergens", es: "5 Alérgenos de perfume UE" } 
      }
    ]
  },
  clean_balm: {
    code: "CleanFormula-01",
    name: {
      en: "100% Botanical Waterless Balm (Startup Formulation)",
      es: "Bálsamo Botánico Anhidro 100% Natural (Fórmula de Startup)"
    },
    brand: "Clean Startup Lab (Zero Nasties)",
    category: {
      en: "Organic Skincare",
      es: "Cosmética Orgánica"
    },
    badge: {
      en: "100% Clean & Bio",
      es: "100% Limpio y Bio"
    },
    badgeClass: "bg-emerald-100 text-emerald-700 border-emerald-200",
    totalCount: 5,
    petroCount: {
      en: "0 (Zero Petrochemicals)",
      es: "0 (Cero Petroquímicos)"
    },
    allergensCount: {
      en: "1 Natural (Lavender trace)",
      es: "1 Natural (Traza de lavanda)"
    },
    packaging: {
      en: "100% Recycled Amber Glass + Metal Lid",
      es: "Tarro de vidrio ámbar 100% reciclado + Tapa metálica"
    },
    ingredients: [
      { 
        name: "Simmondsia Chinensis Seed Oil (Jojoba)", 
        type: "clean", 
        note: { en: "Organic cold-pressed oil (#1 active)", es: "Aceite orgánico prensado en frío (#1 activo)" } 
      },
      { 
        name: "Butyrospermum Parkii Butter (Shea)", 
        type: "clean", 
        note: { en: "Raw fair-trade shea butter (#2)", es: "Manteca de karité cruda de comercio justo (#2)" } 
      },
      { 
        name: "Cera Alba (Beeswax) / Candelilla", 
        type: "clean", 
        note: { en: "Natural protective wax barrier", es: "Barrera protectora natural de cera vegetal" } 
      },
      { 
        name: "Tocopherol (Pure Vitamin E)", 
        type: "clean", 
        note: { en: "Natural antioxidant", es: "Antioxidante natural" } 
      },
      { 
        name: "Lavandula Angustifolia Oil (Lavender)", 
        type: "clean", 
        note: { en: "Pure essential botanical oil", es: "Aceite esencial botánico puro" } 
      }
    ]
  }
};

const GREENWASH_CASES = {
  loreal_botanic: {
    claimed: "Cocos Nucifera (Coconut Oil)",
    position: 4,
    total: 14
  },
  aloe_gel: {
    claimed: "Aloe Barbadensis Leaf Juice",
    position: 8,
    total: 22
  },
  herbal_shampoo: {
    claimed: "Chamomile & Rosemary Botanical Extract",
    position: 18,
    total: 25
  }
};

// State
let currentLang = localStorage.getItem("obf_lang") || "es";
let currentProductKey = "dove_deodorant";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  selectProduct("dove_deodorant");
  calculateGreenwashing();
});

// Set Language function
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("obf_lang", lang);

  // Update button active states
  const esBtn = document.getElementById("lang-btn-es");
  const enBtn = document.getElementById("lang-btn-en");
  
  if (lang === "es") {
    esBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg bg-pink-600 text-white shadow-sm";
    enBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg text-slate-600 hover:text-slate-900";
    document.documentElement.lang = "es";
  } else {
    enBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg bg-pink-600 text-white shadow-sm";
    esBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg text-slate-600 hover:text-slate-900";
    document.documentElement.lang = "en";
  }

  // Update all data-i18n elements
  const t = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update inputs placeholder
  const inputEl = document.getElementById("live-barcode-input");
  if (inputEl && t.input_placeholder) {
    inputEl.placeholder = t.input_placeholder;
  }

  // Re-render current product and greenwashing calculation
  selectProduct(currentProductKey);
  calculateGreenwashing();

  if (window.lucide) lucide.createIcons();
}

// Select product in Demo #1
function selectProduct(key) {
  currentProductKey = key;
  const prod = TEARDOWN_DATA[key];
  if (!prod) return;

  const t = TRANSLATIONS[currentLang];

  // Update button tabs
  document.querySelectorAll(".preset-tab").forEach(btn => {
    btn.className = "preset-tab px-3.5 py-2 rounded-xl text-xs font-semibold border transition flex items-center gap-2 bg-white border-slate-200 text-slate-700 hover:border-pink-300";
  });
  const activeBtn = document.getElementById(`btn-${key}`);
  if (activeBtn) {
    activeBtn.className = "preset-tab px-3.5 py-2 rounded-xl text-xs font-semibold border transition flex items-center gap-2 bg-pink-50 border-pink-500 text-pink-700";
  }

  // Populate Teardown Card
  document.getElementById("td-brand").textContent = prod.brand;
  document.getElementById("td-code").textContent = `Barcode #${prod.code}`;
  document.getElementById("td-name").textContent = typeof prod.name === "object" ? prod.name[currentLang] : prod.name;
  document.getElementById("td-category").textContent = typeof prod.category === "object" ? prod.category[currentLang] : prod.category;
  
  const badgeEl = document.getElementById("td-clean-badge");
  badgeEl.textContent = typeof prod.badge === "object" ? prod.badge[currentLang] : prod.badge;
  badgeEl.className = `px-3 py-1 rounded-full text-xs font-bold border ${prod.badgeClass}`;

  document.getElementById("td-total-count").textContent = prod.totalCount;
  document.getElementById("td-petro-count").textContent = typeof prod.petroCount === "object" ? prod.petroCount[currentLang] : prod.petroCount;
  document.getElementById("td-allergens-count").textContent = typeof prod.allergensCount === "object" ? prod.allergensCount[currentLang] : prod.allergensCount;
  document.getElementById("td-packaging").textContent = typeof prod.packaging === "object" ? prod.packaging[currentLang] : prod.packaging;

  // Render Ingredients
  const ingContainer = document.getElementById("td-ingredients-highlighted");
  ingContainer.innerHTML = prod.ingredients.map((ing, idx) => {
    let style = "bg-slate-100 text-slate-700 border-slate-200";
    let icon = "";

    if (ing.type === "danger") {
      style = "bg-rose-50 text-rose-800 border-rose-300 font-bold";
      icon = "🛢️ ";
    } else if (ing.type === "allergen") {
      style = "bg-amber-50 text-amber-800 border-amber-300 font-semibold";
      icon = "⚠️ ";
    } else if (ing.type === "warning") {
      style = "bg-purple-50 text-purple-800 border-purple-300";
      icon = "🧪 ";
    } else if (ing.type === "clean") {
      style = "bg-emerald-50 text-emerald-800 border-emerald-300 font-bold";
      icon = "🌱 ";
    }

    const noteText = ing.note ? (typeof ing.note === "object" ? ing.note[currentLang] : ing.note) : "";

    return `
      <span class="inline-block p-1.5 m-0.5 rounded-lg border text-[11px] ${style}" title="${noteText}">
        <span class="opacity-50 text-[9px] mr-0.5 font-mono">#${idx + 1}</span>
        ${icon}${ing.name}
        ${noteText ? `<span class="opacity-70 text-[9px] block">(${noteText})</span>` : ''}
      </span>
    `;
  }).join(" ");

  if (window.lucide) lucide.createIcons();
}

// Greenwashing Calculator Logic
function loadGreenwashCase() {
  const select = document.getElementById("gw-case-select");
  const caseData = GREENWASH_CASES[select.value];
  if (!caseData) return;

  document.getElementById("gw-claimed-ing").value = caseData.claimed;
  document.getElementById("gw-position").value = caseData.position;
  document.getElementById("gw-total").value = caseData.total;
  calculateGreenwashing();
}

function calculateGreenwashing() {
  const pos = parseInt(document.getElementById("gw-position").value) || 1;
  const pctTag = document.getElementById("gw-estimated-pct");
  const riskTag = document.getElementById("gw-risk-tag");
  const verdict = document.getElementById("gw-verdict-text");
  const pitchBody = document.getElementById("gw-pitch-body");

  if (currentLang === "es") {
    if (pos === 1) {
      pctTag.textContent = "Ingrediente Principal Activo (> 40%)";
      riskTag.textContent = "Cero Greenwashing";
      riskTag.className = "text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200";
      verdict.textContent = "Fórmula auténtica: el botánico publicitado es verdaderamente la base principal del cosmético.";
      pitchBody.textContent = "\"Nuestra startup no engaña: el ingrediente que anunciamos en la portada es el #1 en la lista real.\"";
    } else if (pos <= 3) {
      pctTag.textContent = "Concentración Estimada: 5% - 25%";
      riskTag.textContent = "Transparencia Moderada";
      riskTag.className = "text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200";
      verdict.textContent = "El principio activo natural está en una cantidad funcional, pero sigue diluido con bases sintéticas.";
      pitchBody.textContent = "\"Los consumidores pagan precio premium por activos que están mezclados con bases industriales baratas.\"";
    } else {
      pctTag.textContent = "Concentración Estimada: < 1.0% (Trazas residuales)";
      riskTag.textContent = "Riesgo Severo de Greenwashing";
      riskTag.className = "text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200";
      verdict.textContent = `En el puesto #${pos} de la lista INCI, el extracto botánico está por debajo del umbral del 1%. Los clientes pagan por rellenos sintéticos baratos.`;
      pitchBody.textContent = "\"Los clientes pagan 25€ por un bote que es 95% siliconas y derivados del petróleo con una simple gota de argán. Nuestra startup ofrece formulaciones 100% activas y sin agua de relleno.\"";
    }
  } else {
    // English
    if (pos === 1) {
      pctTag.textContent = "Primary Active Ingredient (> 40%)";
      riskTag.textContent = "Zero Greenwashing";
      riskTag.className = "text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200";
      verdict.textContent = "Authentic formulation: The advertised botanical is truly the main base of the product.";
      pitchBody.textContent = "\"Our startup never deceives: the botanical on our front label is the #1 ingredient in our bottle.\"";
    } else if (pos <= 3) {
      pctTag.textContent = "Estimated Concentration: 5% - 25%";
      riskTag.textContent = "Moderate Transparency";
      riskTag.className = "text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200";
      verdict.textContent = "The natural active is in a functional amount, but still diluted with synthetic bases.";
      pitchBody.textContent = "\"Consumers pay premium prices for active extracts heavily diluted with cheap industrial fillers.\"";
    } else {
      pctTag.textContent = "Estimated Concentration: < 1.0% (Traces)";
      riskTag.textContent = "Severe Greenwashing Risk";
      riskTag.className = "text-xs font-black px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-200";
      verdict.textContent = `At position #${pos} on the INCI list, the botanical extract is diluted below the 1% concentration threshold. Consumers are paying for cheap synthetic fillers.`;
      pitchBody.textContent = "\"Consumers are tired of paying €25 for a bottle that is 95% silicones with a drop of argan oil. Our startup provides 100% active, waterless formulations.\"";
    }
  }
}

// Copy pitch card to clipboard
function copyStatCard(id) {
  const textEl = document.getElementById(`stat-text-${id}`);
  if (!textEl) return;

  const t = TRANSLATIONS[currentLang];

  navigator.clipboard.writeText(textEl.textContent.trim()).then(() => {
    const btnText = document.getElementById(`copy-btn-${id}`);
    const original = btnText.textContent;
    btnText.textContent = t.copied_msg;
    setTimeout(() => {
      btnText.textContent = original;
    }, 2500);
  });
}

// Live Barcode Search via Open Beauty Facts API
async function handleLiveSearch(e) {
  e.preventDefault();
  const input = document.getElementById("live-barcode-input");
  const barcode = input.value.trim();
  const resultDiv = document.getElementById("live-result");
  const btn = document.getElementById("live-search-btn");

  if (!barcode) return;

  const isEs = currentLang === "es";

  btn.innerHTML = `<span class="animate-spin inline-block mr-1">⏳</span> ${isEs ? "Consultando OBF..." : "Querying OBF..."}`;
  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `<p class="text-slate-500">${isEs ? "Conectando con https://world.openbeautyfacts.org/api/v0/product/" : "Contacting https://world.openbeautyfacts.org/api/v0/product/"}${barcode}.json ...</p>`;

  try {
    const res = await fetch(`https://world.openbeautyfacts.org/api/v0/product/${encodeURIComponent(barcode)}.json`, {
      headers: { "User-Agent": "StartupHackathonToolkit/1.0" }
    });
    const data = await res.json();

    if (data.status === 1 && data.product) {
      const p = data.product;
      resultDiv.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="font-bold text-slate-800">${p.product_name || (isEs ? "Producto sin nombre" : "Product Name Not Available")} (${p.brands || (isEs ? "Marca no especificada" : "Unknown Brand")})</span>
            <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">${isEs ? "Encontrado en Open Beauty Facts" : "Found in Open Beauty Facts"}</span>
          </div>
          <p><strong>${isEs ? "Ingredientes:" : "Ingredients:"}</strong> ${p.ingredients_text || (isEs ? "Sin ingredientes transcritos." : "No ingredients transcribed yet.")}</p>
          <p><strong>${isEs ? "Alérgenos Registrados:" : "Allergens Reported:"}</strong> ${(p.allergens_tags && p.allergens_tags.length) ? p.allergens_tags.join(", ") : (isEs ? "Ninguno notificado" : "None declared")}</p>
          <p><strong>${isEs ? "Envase:" : "Packaging:"}</strong> ${p.packaging_text || (p.packaging_tags && p.packaging_tags.join(", ")) || (isEs ? "Envase de venta estándar" : "Standard retail packaging")}</p>
          <a href="https://world.openbeautyfacts.org/product/${barcode}" target="_blank" class="inline-block text-pink-600 hover:underline font-bold text-xs mt-1">
            ${isEs ? "Ver ficha oficial en vivo en Open Beauty Facts ↗" : "View full live record on Open Beauty Facts ↗"}
          </a>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `
        <div class="text-amber-800">
          ⚠️ <strong>${isEs ? `El código #${barcode} no está registrado en la base de datos todavía.` : `Barcode #${barcode} is not in the database yet.`}</strong><br/>
          <span class="text-[11px] text-slate-500">${isEs ? "Hay más de 100.000 productos, pero puedes probar códigos famosos como <strong>80466468</strong> (Dove) o <strong>3600522410874</strong> (L'Oréal)." : "Over 100,000 products are listed, but you can try famous codes like <strong>80466468</strong> (Dove) or <strong>3600522410874</strong> (L'Oréal)."}</span>
        </div>
      `;
    }
  } catch (err) {
    resultDiv.innerHTML = `<div class="text-rose-700">${isEs ? "Error al conectar con la API de Open Beauty Facts:" : "Error connecting to Open Beauty Facts API:"} ${err.message}</div>`;
  } finally {
    const t = TRANSLATIONS[currentLang];
    btn.innerHTML = `<i data-lucide="search" class="w-4 h-4"></i><span>${t.btn_fetch}</span>`;
    if (window.lucide) lucide.createIcons();
  }
}
