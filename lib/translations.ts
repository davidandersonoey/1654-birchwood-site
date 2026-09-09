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
