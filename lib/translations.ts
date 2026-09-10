/**
 * 1654 Birchwood Drive — site translations.
 *
 * Reduced to five languages targeting the buyer segments most active in
 * the Lorne Park / Greater Toronto luxury market:
 *   • English (base)
 *   • Español  — Spanish
 *   • العربية  — Arabic (right-to-left)
 *   • 中文     — Simplified Chinese (Mandarin)
 *   • हिन्दी    — Hindi
 *
 * The UI shell (nav, hero, chapter labels, CTAs, footer) is translated
 * here. Body copy in /lib/property.ts and /lib/lorne-park.ts is being
 * migrated into translation keys — see the `room.` / `feature.` / `nb.`
 * namespaces added in Batch 2.
 */

export type Lang = "en" | "es" | "ar" | "zh" | "hi";
export const RTL_LANGS: Lang[] = ["ar"];

type Dict = Record<string, string>;

const en: Dict = {
  // ---- nav ----
  "nav.property": "The Residence",
  "nav.floorplans": "Floor Plans",
  "nav.county": "The Neighbourhood",
  "nav.pool": "Pool Sized Lot",
  "nav.gallery": "Gallery",
  "nav.designer": "David Small Designs",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.close": "Close",

  // ---- header utilities ----
  "btn.privateViewing": "Schedule a Private Viewing",
  "btn.beginJourney": "Begin the Walkthrough",
  "btn.scrollMore": "Scroll for more",
  "btn.scrollRooms": "Scroll through the rooms",
  "btn.visitTheCounty": "Explore Mississauga →",
  "btn.readCoverage": "Read coverage",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "Chapter",
  "ch.property.headline": "The Residence.",
  "ch.floorplans.headline": "The floor plans.",
  "ch.floorplans.sub": "A working set of plans, drawn at scale.",
  "ch.floorplans.statement":
    "Tap any plan to open it full-size. A printable information package is available on request.",

  // ---- press / neighbourhood ----
  "press.eyebrow": "Notable Mentions",
  "press.headline": "Editorial press on",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "Films of the Neighbourhood",
  "videos.headline.before": "Lorne Park, in",
  "videos.headline.em": "moving image",
  "videos.italic":
    "Three short films from across Lorne Park and Bloor West — the shops, the streets, and the rhythm of a year in the neighbourhood.",

  // ---- gallery ----
  "gallery.kicker": "Chapter",
  "gallery.headline": "The full visual record.",

  // ---- closing CTA ----
  "closing.eyebrow": "Your next chapter",
  "closing.headline": "Consider Your Visit to 1654 Birchwood.",
  "closing.sub":
    "Private viewings are by appointment. Half-hour appointments daily from 10am to 8pm — overnight notice preferred.",

  // ---- chapter 1 / narrative ----
  "ch.property.sub":
    "A contemporary zen residence in Lorne Park / White Oaks — 7,000+ square feet of finished living, crafted over four years.",
  "ch.property.narrative":
    "1654 Birchwood Drive is an exceptional custom residence in the heart of Lorne Park / White Oaks — a masterful fusion of contemporary design and serene zen influence. Over seven thousand square feet of finished living space: a twenty-foot foyer with its illuminated glass pivot entrance door, a chef's kitchen with a Scandinavian PITT gas counter range and separate prep room, a primary suite with spa-inspired ensuite and three-sided fireplace, and a lower level engineered for entertainment and wellness — a fifteen-seat soundproof theatre room, a glass-walled refrigerated wine cantina, a gym room, and a nanny suite with walkout to a pool-sized fully-fenced private yard. Modern brick and aluminum cladding, landscaped grounds with irrigation, and Control4 smart-home automation throughout.",

  // ---- particulars ----
  "particulars.eyebrow": "The Particulars",
  "particulars.listingPrice": "Listing Price",
  "particulars.mls": "MLS®",
  "particulars.bedrooms": "Bedrooms",
  "particulars.bathrooms": "Bathrooms",
  "particulars.livingArea": "Living Area",
  "particulars.lotDimensions": "Lot Dimensions",
  "particulars.yearBuilt": "Year Built",
  "particulars.community": "Community",

  // ---- pool sized lot ----
  "pool.eyebrow": "Chapter",
  "pool.headline.before": "A",
  "pool.headline.em": "pool-sized lot",
  "pool.sub":
    "Pool-sized lot on 88 ft (with an additional 10 foot or so side yard from the City) × 119 ft lot. Consider these drawings for pool location and options. These are not official approved drawings but rather guidelines for designing your dream oasis.",
  "pool.layoutA": "Layout A",
  "pool.layoutB": "Layout B",

  // ---- neighbourhood ----
  "nb.aside": "1654 Birchwood is not just a house — it is located in the ultra-exclusive enclave within prestigious Lorne Park known as 'White Oaks'.",
  "nb.history.eyebrow": "A Brief History",
  "nb.history.title": "How Lorne Park came to be …",
  "nb.enclaves.label": "The Enclaves",
  "nb.parks.label": "Parks & Nature",
  "nb.restaurants.label": "The Tables",
  "nb.shopping.label": "The Shops",
  "nb.schools.label": "The Schools",
  "nb.recreation.label": "Recreation",
  "nb.connectivity.label": "Getting Around",

  // ---- footer ----
  "footer.listed": "Listed by",
  "footer.email": "Email",
  "footer.phone": "Phone",
  "footer.copyright":
    "All material on this site is copyrighted. Not to be reproduced without permission.",
};

const es: Dict = {
  // ---- nav ----
  "nav.property": "La residencia",
  "nav.floorplans": "Planos",
  "nav.county": "El barrio",
  "nav.pool": "Terreno para piscina",
  "nav.gallery": "Galería",
  "nav.designer": "David Small Designs",
  "nav.contact": "Contacto",
  "nav.menu": "Menú",
  "nav.close": "Cerrar",

  // ---- header utilities ----
  "btn.privateViewing": "Concertar una visita privada",
  "btn.beginJourney": "Comenzar el recorrido",
  "btn.scrollMore": "Desplazarse para ver más",
  "btn.scrollRooms": "Recorrer las estancias",
  "btn.visitTheCounty": "Conocer Mississauga →",
  "btn.readCoverage": "Leer el artículo",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "Una residencia contemporánea de estilo zen en Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "Capítulo",
  "ch.property.headline": "La residencia.",
  "ch.floorplans.headline": "Los planos.",
  "ch.floorplans.sub": "Un conjunto de planos a escala.",
  "ch.floorplans.statement":
    "Toque cualquier plano para ampliarlo. Un dosier informativo imprimible está disponible a petición.",

  // ---- press / neighbourhood ----
  "press.eyebrow": "Menciones destacadas",
  "press.headline": "La prensa, sobre",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "Películas del barrio",
  "videos.headline.before": "Lorne Park, en",
  "videos.headline.em": "imágenes en movimiento",
  "videos.italic":
    "Tres cortometrajes entre Lorne Park y Bloor West — los comercios, las calles y el ritmo de un año en el barrio.",

  // ---- gallery ----
  "gallery.kicker": "Capítulo",
  "gallery.headline": "El archivo visual completo.",

  // ---- closing CTA ----
  "closing.eyebrow": "Su próximo capítulo",
  "closing.headline": "Considere su visita al 1654 Birchwood.",
  "closing.sub":
    "Las visitas privadas se realizan con cita previa. Franjas de media hora cada día de 10 a 20 h — se prefiere aviso con un día de antelación.",

  // ---- chapter 1 / narrative ----
  "ch.property.sub":
    "Una residencia contemporánea de estilo zen en Lorne Park / White Oaks — más de 7.000 pies cuadrados de espacio habitable, elaborados a lo largo de cuatro años.",
  "ch.property.narrative":
    "1654 Birchwood Drive es una residencia personalizada excepcional en el corazón de Lorne Park / White Oaks — una fusión magistral de diseño contemporáneo e influencia zen serena. Más de siete mil pies cuadrados de espacio habitable: un vestíbulo de seis metros con puerta pivotante de vidrio iluminada, una cocina de chef con una encimera de gas escandinava PITT y una habitación de preparación separada, una suite principal con baño con estilo spa y chimenea de tres caras, y un nivel inferior diseñado para entretenimiento y bienestar — una sala de cine insonorizada para quince personas, una vinoteca refrigerada con paredes de vidrio, un gimnasio, y una suite para niñera con salida a un jardín privado del tamaño de una piscina totalmente cercado. Revestimiento moderno de ladrillo y aluminio, jardines paisajísticos con riego, y automatización doméstica inteligente Control4 en toda la propiedad.",

  // ---- particulars ----
  "particulars.eyebrow": "Los detalles",
  "particulars.listingPrice": "Precio de venta",
  "particulars.mls": "MLS®",
  "particulars.bedrooms": "Dormitorios",
  "particulars.bathrooms": "Baños",
  "particulars.livingArea": "Superficie habitable",
  "particulars.lotDimensions": "Dimensiones del terreno",
  "particulars.yearBuilt": "Año de construcción",
  "particulars.community": "Comunidad",

  // ---- pool sized lot ----
  "pool.eyebrow": "Capítulo",
  "pool.headline.before": "Un",
  "pool.headline.em": "terreno apto para piscina",
  "pool.sub":
    "Terreno apto para piscina de 88 pies (con un patio lateral adicional de aproximadamente 10 pies concedido por la ciudad) × 119 pies. Considere estos planos para la ubicación y opciones de piscina. No son planos oficiales aprobados, sino pautas para diseñar el oasis de sus sueños.",
  "pool.layoutA": "Distribución A",
  "pool.layoutB": "Distribución B",

  // ---- neighbourhood ----
  "nb.aside": "1654 Birchwood no es sólo una casa — se ubica en el enclave ultra-exclusivo dentro del prestigioso Lorne Park conocido como 'White Oaks'.",
  "nb.history.eyebrow": "Una breve historia",
  "nb.history.title": "Cómo llegó a ser Lorne Park …",
  "nb.enclaves.label": "Los enclaves",
  "nb.parks.label": "Parques y naturaleza",
  "nb.restaurants.label": "Las mesas",
  "nb.shopping.label": "Las tiendas",
  "nb.schools.label": "Las escuelas",
  "nb.recreation.label": "Recreación",
  "nb.connectivity.label": "Cómo desplazarse",

  // ---- footer ----
  "footer.listed": "Listado por",
  "footer.email": "Correo electrónico",
  "footer.phone": "Teléfono",
  "footer.copyright":
    "Todo el material de este sitio está protegido por derechos de autor. Prohibida su reproducción sin autorización.",
};

const ar: Dict = {
  // ---- nav ----
  "nav.property": "المسكن",
  "nav.floorplans": "المخططات",
  "nav.county": "الحي",
  "nav.pool": "أرض للمسبح",
  "nav.gallery": "المعرض",
  "nav.designer": "David Small Designs",
  "nav.contact": "للتواصل",
  "nav.menu": "القائمة",
  "nav.close": "إغلاق",

  // ---- header utilities ----
  "btn.privateViewing": "حجز زيارة خاصة",
  "btn.beginJourney": "بدء الجولة",
  "btn.scrollMore": "تابع التمرير للمزيد",
  "btn.scrollRooms": "تصفّح الغرف",
  "btn.visitTheCounty": "اكتشاف Mississauga →",
  "btn.readCoverage": "قراءة المقال",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "مسكن معاصر بروح زِن في Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "الفصل",
  "ch.property.headline": "المسكن.",
  "ch.floorplans.headline": "المخططات الطابقية.",
  "ch.floorplans.sub": "مجموعة من المخططات المرسومة بالمقياس.",
  "ch.floorplans.statement":
    "انقر على أيّ مخطط لفتحه بالحجم الكامل. تتوفر حقيبة معلومات قابلة للطباعة عند الطلب.",

  // ---- press / neighbourhood ----
  "press.eyebrow": "إشارات بارزة",
  "press.headline": "ما كتبته الصحافة عن",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "أفلام من الحي",
  "videos.headline.before": "Lorne Park، في",
  "videos.headline.em": "صور متحركة",
  "videos.italic":
    "ثلاثة أفلام قصيرة من Lorne Park وBloor West — المتاجر، والشوارع، وإيقاع عامٍ كاملٍ في الحي.",

  // ---- gallery ----
  "gallery.kicker": "الفصل",
  "gallery.headline": "السجل البصري الكامل.",

  // ---- closing CTA ----
  "closing.eyebrow": "فصلكم المقبل",
  "closing.headline": "فكّروا في زيارة 1654 Birchwood.",
  "closing.sub":
    "الزيارات الخاصة بموعد مسبق. مواعيد من نصف ساعة يوميًا من العاشرة صباحًا حتى الثامنة مساءً — يُفضَّل إخطار قبل ليلة.",

  // ---- chapter 1 / narrative ----
  "ch.property.sub":
    "مسكن معاصر بروح زِن في Lorne Park / White Oaks — أكثر من 7,000 قدم مربّع من الفضاءات المكتملة، صُنعت على مدى أربع سنوات.",
  "ch.property.narrative":
    "1654 Birchwood Drive مسكن مخصّص استثنائي في قلب Lorne Park / White Oaks — دمج بارع بين التصميم المعاصر وتأثير الزِن الهادئ. أكثر من سبعة آلاف قدم مربّع من الفضاءات المكتملة: بهو دخول بارتفاع عشرين قدمًا مع باب دوّار زجاجي مضاء، مطبخ شيف مزوّد بموقد غاز PITT الاسكندنافي وغرفة تحضير منفصلة، جناح رئيسي بحمّام سبا الأنيق ومدفأة ثلاثية الأوجه، ومستوى سفلي مصمّم للترفيه والعافية — قاعة سينما معزولة صوتيًا لخمسة عشر مقعدًا، قبو نبيذ مبرّد بجدران زجاجية، غرفة رياضة، وجناح مربّية مع مخرج إلى حديقة خاصّة مسيّجة بالكامل بحجم يكفي لمسبح. تكسية عصريّة من الطوب والألمنيوم، حدائق منسّقة مع نظام ريّ، وأتمتة منزل ذكيّ Control4 في جميع أنحاء المنزل.",

  // ---- particulars ----
  "particulars.eyebrow": "التفاصيل",
  "particulars.listingPrice": "سعر الإعلان",
  "particulars.mls": "MLS®",
  "particulars.bedrooms": "غرف النوم",
  "particulars.bathrooms": "الحمّامات",
  "particulars.livingArea": "المساحة المعيشيّة",
  "particulars.lotDimensions": "أبعاد الأرض",
  "particulars.yearBuilt": "سنة البناء",
  "particulars.community": "الحيّ",

  // ---- pool sized lot ----
  "pool.eyebrow": "الفصل",
  "pool.headline.before": "أرض",
  "pool.headline.em": "بحجم مسبح",
  "pool.sub":
    "أرض بحجم مسبح على قطعة عرضها 88 قدمًا (مع فناء جانبي إضافي بحوالي 10 أقدام من البلدية) × 119 قدمًا. اعتبر هذه الرسومات دليلًا لموقع وخيارات المسبح. ليست رسومات معتمدة رسميًا بل إرشادات لتصميم واحتك الحلم.",
  "pool.layoutA": "التصميم أ",
  "pool.layoutB": "التصميم ب",

  // ---- neighbourhood ----
  "nb.aside": "1654 Birchwood ليس مجرّد بيت — يقع ضمن الحيّ الفرعيّ الحصريّ للغاية داخل Lorne Park المرموق المعروف باسم 'White Oaks'.",
  "nb.history.eyebrow": "لمحة تاريخيّة",
  "nb.history.title": "كيف نشأ Lorne Park …",
  "nb.enclaves.label": "الأحياء الفرعيّة",
  "nb.parks.label": "الحدائق والطبيعة",
  "nb.restaurants.label": "الموائد",
  "nb.shopping.label": "المتاجر",
  "nb.schools.label": "المدارس",
  "nb.recreation.label": "الترفيه",
  "nb.connectivity.label": "التنقّل",

  // ---- footer ----
  "footer.listed": "مُعروض من قِبَل",
  "footer.email": "البريد الإلكتروني",
  "footer.phone": "الهاتف",
  "footer.copyright":
    "جميع المحتويات على هذا الموقع محفوظة بحقوق النشر. يُمنع إعادة إنتاجها دون إذن.",
};

const zh: Dict = {
  // ---- nav ----
  "nav.property": "宅邸",
  "nav.floorplans": "平面图",
  "nav.county": "街区",
  "nav.pool": "泳池地",
  "nav.gallery": "影像集",
  "nav.designer": "David Small Designs",
  "nav.contact": "联络",
  "nav.menu": "菜单",
  "nav.close": "关闭",

  // ---- header utilities ----
  "btn.privateViewing": "预约私人鉴赏",
  "btn.beginJourney": "开启导览",
  "btn.scrollMore": "向下滚动了解更多",
  "btn.scrollRooms": "逐间浏览空间",
  "btn.visitTheCounty": "走进 Mississauga →",
  "btn.readCoverage": "阅读报道",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "位于 Lorne Park 的当代禅意宅邸。",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "章",
  "ch.property.headline": "宅邸。",
  "ch.floorplans.headline": "平面图。",
  "ch.floorplans.sub": "一套按比例绘制的施工图。",
  "ch.floorplans.statement":
    "轻触任一平面图可放大查看。完整可印刷的资料包可应需提供。",

  // ---- press / neighbourhood ----
  "press.eyebrow": "媒体报道",
  "press.headline": "关于这片街区的笔触",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "街区影像",
  "videos.headline.before": "Lorne Park,以",
  "videos.headline.em": "动态影像",
  "videos.italic":
    "三部短片,来自 Lorne Park 与 Bloor West —— 店铺、街巷,以及街区一年里的节奏。",

  // ---- gallery ----
  "gallery.kicker": "章",
  "gallery.headline": "完整的视觉档案。",

  // ---- closing CTA ----
  "closing.eyebrow": "您的下一章",
  "closing.headline": "考虑亲临 1654 Birchwood。",
  "closing.sub":
    "私人鉴赏须预约。每日上午十时至晚间八时,可安排半小时时段——敬请提前一晚知会。",

  // ---- chapter 1 / narrative ----
  "ch.property.sub":
    "位于 Lorne Park / White Oaks 的当代禅意宅邸 —— 逾 7,000 平方英尺的成品居住空间,历时四年精心打造。",
  "ch.property.narrative":
    "1654 Birchwood Drive 是坐落于 Lorne Park / White Oaks 心脏地带的一座卓越定制宅邸 —— 现代设计与静谧禅意的巧妙融合。逾七千平方英尺的成品居住空间:二十英尺高的门厅配备发光玻璃旋转入户门、大厨房配 Scandinavian PITT 燃气台面炉具及独立备餐间、主卧套房含 Spa 式套内卫浴与三面壁炉、专为娱乐与养生打造的下层空间 —— 十五座隔音影音室、玻璃墙冷藏酒窖、健身房,以及带独立出口通往泳池大小、全围栏私家庭园的保姆套房。现代砖石与铝板外墙,配灌溉系统的园林景观,以及贯穿全宅的 Control4 智能家居系统。",

  // ---- particulars ----
  "particulars.eyebrow": "详情",
  "particulars.listingPrice": "挂牌价",
  "particulars.mls": "MLS®",
  "particulars.bedrooms": "卧室",
  "particulars.bathrooms": "卫浴",
  "particulars.livingArea": "居住面积",
  "particulars.lotDimensions": "地块尺寸",
  "particulars.yearBuilt": "建成年份",
  "particulars.community": "社区",

  // ---- pool sized lot ----
  "pool.eyebrow": "章",
  "pool.headline.before": "一块",
  "pool.headline.em": "可建泳池的地块",
  "pool.sub":
    "88 英尺(附加市府允许的约 10 英尺侧院)× 119 英尺可建泳池地块。请参考这些草图作为泳池位置与方案参考。这些不是官方批准的图纸,而是设计您梦想绿洲的指南。",
  "pool.layoutA": "方案 A",
  "pool.layoutB": "方案 B",

  // ---- neighbourhood ----
  "nb.aside": "1654 Birchwood 不只是一栋房子 —— 它坐落于声誉卓著的 Lorne Park 中,专属的顶级社区 'White Oaks' 之内。",
  "nb.history.eyebrow": "简史",
  "nb.history.title": "Lorne Park 的由来 …",
  "nb.enclaves.label": "邻里街区",
  "nb.parks.label": "公园与自然",
  "nb.restaurants.label": "餐桌",
  "nb.shopping.label": "商店",
  "nb.schools.label": "学校",
  "nb.recreation.label": "休闲",
  "nb.connectivity.label": "出行",

  // ---- footer ----
  "footer.listed": "代理",
  "footer.email": "电邮",
  "footer.phone": "电话",
  "footer.copyright":
    "本网站所有内容均受版权保护。未经许可不得转载。",
};

const hi: Dict = {
  // ---- nav ----
  "nav.property": "आवास",
  "nav.floorplans": "फ़्लोर प्लान",
  "nav.county": "पड़ोस",
  "nav.pool": "पूल-योग्य ज़मीन",
  "nav.gallery": "गैलरी",
  "nav.designer": "David Small Designs",
  "nav.contact": "संपर्क",
  "nav.menu": "मेनू",
  "nav.close": "बंद करें",

  // ---- header utilities ----
  "btn.privateViewing": "निजी विज़िट का समय तय करें",
  "btn.beginJourney": "टूर शुरू करें",
  "btn.scrollMore": "और देखने के लिए स्क्रॉल करें",
  "btn.scrollRooms": "कमरों में स्क्रॉल करें",
  "btn.visitTheCounty": "Mississauga को जानें →",
  "btn.readCoverage": "पूरा लेख पढ़ें",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "Lorne Park में एक समकालीन ज़ेन-प्रेरित आवास।",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "अध्याय",
  "ch.property.headline": "आवास।",
  "ch.floorplans.headline": "फ़्लोर प्लान।",
  "ch.floorplans.sub": "पैमाने पर तैयार किए गए फ़्लोर प्लान का एक सेट।",
  "ch.floorplans.statement":
    "किसी भी प्लान पर टैप करें उसे पूर्ण आकार में देखने के लिए। एक प्रिंट करने योग्य सूचना पैकेज अनुरोध पर उपलब्ध है।",

  // ---- press / neighbourhood ----
  "press.eyebrow": "उल्लेखनीय संदर्भ",
  "press.headline": "इस पर संपादकीय प्रेस",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "पड़ोस की फ़िल्में",
  "videos.headline.before": "Lorne Park,",
  "videos.headline.em": "चल-चित्र में",
  "videos.italic":
    "Lorne Park और Bloor West से तीन लघु फ़िल्में — दुकानें, गलियाँ, और पड़ोस में एक साल की लय।",

  // ---- gallery ----
  "gallery.kicker": "अध्याय",
  "gallery.headline": "पूर्ण दृश्य अभिलेख।",

  // ---- closing CTA ----
  "closing.eyebrow": "आपका अगला अध्याय",
  "closing.headline": "1654 Birchwood में अपनी विज़िट पर विचार करें।",
  "closing.sub":
    "निजी विज़िट पूर्व-अपॉइंटमेंट पर होती हैं। रोज़ सुबह 10 बजे से रात 8 बजे तक आधे-घंटे के स्लॉट — एक रात पहले सूचना पसंदीदा।",

  // ---- chapter 1 / narrative ----
  "ch.property.sub":
    "Lorne Park / White Oaks में एक समकालीन ज़ेन-प्रेरित आवास — चार वर्षों में तैयार 7,000+ वर्ग फीट का पूर्ण रहने का स्थान।",
  "ch.property.narrative":
    "1654 Birchwood Drive Lorne Park / White Oaks के हृदय में एक असाधारण कस्टम आवास है — समकालीन डिज़ाइन और शांत ज़ेन प्रभाव का उत्कृष्ट संयोजन। सात हज़ार वर्ग फीट से अधिक का पूर्ण रहने का स्थान: बीस-फुट का फ़ोयर जिसमें रोशन ग्लास पिवोट प्रवेश द्वार है, शेफ किचन जिसमें स्कैंडिनेवियन PITT गैस काउंटर रेंज और अलग प्रेप रूम है, स्पा-प्रेरित एनसुइट और तीन-तरफा फ़ायरप्लेस के साथ प्राइमरी सुइट, और मनोरंजन एवं वेलनेस के लिए तैयार निचला स्तर — पंद्रह-सीट का साउंडप्रूफ थिएटर, कांच की दीवारों वाली रेफ्रिजरेटेड वाइन कैंटीना, जिम रूम, और पूल-आकार के पूरी तरह से बाड़बंद निजी यार्ड तक वॉकआउट के साथ नैनी सुइट। आधुनिक ईंट और एल्युमिनियम क्लैडिंग, सिंचाई के साथ भूदृश्य निर्मित मैदान, और पूरे घर में Control4 स्मार्ट-होम स्वचालन।",

  // ---- particulars ----
  "particulars.eyebrow": "विवरण",
  "particulars.listingPrice": "लिस्टिंग मूल्य",
  "particulars.mls": "MLS®",
  "particulars.bedrooms": "शयनकक्ष",
  "particulars.bathrooms": "बाथरूम",
  "particulars.livingArea": "रहने योग्य क्षेत्र",
  "particulars.lotDimensions": "प्लॉट का आयाम",
  "particulars.yearBuilt": "निर्माण वर्ष",
  "particulars.community": "समुदाय",

  // ---- pool sized lot ----
  "pool.eyebrow": "अध्याय",
  "pool.headline.before": "एक",
  "pool.headline.em": "पूल-योग्य ज़मीन",
  "pool.sub":
    "88 फीट (सिटी से मिली लगभग 10 फीट अतिरिक्त साइड यार्ड सहित) × 119 फीट पूल-योग्य ज़मीन। पूल स्थान और विकल्पों के लिए इन ड्रॉइंग्स पर विचार करें। ये आधिकारिक अनुमोदित ड्रॉइंग नहीं हैं बल्कि आपके सपनों के ओएसिस को डिज़ाइन करने के लिए दिशानिर्देश हैं।",
  "pool.layoutA": "लेआउट A",
  "pool.layoutB": "लेआउट B",

  // ---- neighbourhood ----
  "nb.aside": "1654 Birchwood सिर्फ़ एक घर नहीं है — यह प्रतिष्ठित Lorne Park के भीतर स्थित उस अति-विशिष्ट एनक्लेव में है जिसे 'White Oaks' के नाम से जाना जाता है।",
  "nb.history.eyebrow": "एक संक्षिप्त इतिहास",
  "nb.history.title": "Lorne Park कैसे बना …",
  "nb.enclaves.label": "एनक्लेव",
  "nb.parks.label": "पार्क और प्रकृति",
  "nb.restaurants.label": "भोज-स्थल",
  "nb.shopping.label": "दुकानें",
  "nb.schools.label": "स्कूल",
  "nb.recreation.label": "मनोरंजन",
  "nb.connectivity.label": "आवागमन",

  // ---- footer ----
  "footer.listed": "द्वारा सूचीबद्ध",
  "footer.email": "ईमेल",
  "footer.phone": "फ़ोन",
  "footer.copyright":
    "इस साइट की सारी सामग्री कॉपीराइट है। बिना अनुमति के पुनरुत्पादन वर्जित है।",
};

export const translations: Record<Lang, Dict> = {
  en,
  es,
  ar,
  zh,
  hi,
};
