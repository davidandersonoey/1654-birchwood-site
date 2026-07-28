/**
 * 1654 Birchwood Drive — site translations.
 *
 * Lorne Park sits inside a city with substantial French-speaking presence
 * and the broader Harvey Kalles audience extends into Montreal — so the
 * site supports English + French as anchor languages, with additional
 * translations for an international audience: Italian, Spanish, Arabic,
 * Simplified Chinese, Japanese, and Hebrew. Body copy in /lib/property.ts
 * and /lib/sunnylea.ts is currently English only; localized variants for
 * those long descriptions will come in a follow-up pass. The header, nav,
 * hero, chapter labels, CTAs, and footer are translated here.
 */

export type Lang = "en" | "fr" | "it" | "es" | "ar" | "zh" | "ja" | "he";
export const RTL_LANGS: Lang[] = ["ar", "he"];

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

const fr: Dict = {
  // ---- nav ----
  "nav.property": "La résidence",
  "nav.floorplans": "Plans d'étage",
  "nav.county": "Le quartier",
  "nav.pool": "Terrain avec piscine",
  "nav.gallery": "Galerie",
  "nav.designer": "David Small Designs",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.close": "Fermer",

  // ---- header utilities ----
  "btn.privateViewing": "Réserver une visite privée",
  "btn.beginJourney": "Commencer la visite",
  "btn.scrollMore": "Faites défiler",
  "btn.scrollRooms": "Faites défiler les pièces",
  "btn.visitTheCounty": "Découvrir l'ouest de Toronto →",
  "btn.readCoverage": "Lire l'article",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "Chapitre",
  "ch.property.headline": "La résidence.",
  "ch.floorplans.headline": "Les plans d'étage.",
  "ch.floorplans.sub": "Un ensemble de plans à l'échelle.",
  "ch.floorplans.statement":
    "Cliquez sur un plan pour l'agrandir. Une trousse d'information imprimable est disponible sur demande.",

  // ---- press / neighbourhood ----
  "press.eyebrow": "Mentions notables",
  "press.headline": "La presse, sur",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "Films du quartier",
  "videos.headline.before": "Lorne Park en",
  "videos.headline.em": "images animées",
  "videos.italic":
    "Trois courts métrages de Lorne Park et Bloor West — les boutiques, les rues, et le rythme d'une année dans le quartier.",

  // ---- gallery ----
  "gallery.kicker": "Chapitre",
  "gallery.headline": "Le portfolio visuel complet.",

  // ---- closing CTA ----
  "closing.eyebrow": "Votre prochain chapitre",
  "closing.headline": "Envisagez votre visite au 1654 Birchwood.",
  "closing.sub":
    "Les visites privées se font sur rendez-vous. Plages de 30 minutes de 10h à 20h — préavis d'une nuit préféré.",

  // ---- footer ----
  "footer.listed": "Inscrit par",
  "footer.email": "Courriel",
  "footer.phone": "Téléphone",
  "footer.copyright":
    "Tout le contenu de ce site est protégé par le droit d'auteur. Reproduction interdite sans autorisation.",
};

const it: Dict = {
  // ---- nav ----
  "nav.property": "La residenza",
  "nav.floorplans": "Planimetrie",
  "nav.county": "Il quartiere",
  "nav.pool": "Terreno per la piscina",
  "nav.gallery": "Galleria",
  "nav.designer": "David Small Designs",
  "nav.contact": "Contatti",
  "nav.menu": "Menu",
  "nav.close": "Chiudi",

  // ---- header utilities ----
  "btn.privateViewing": "Prenotare una visita privata",
  "btn.beginJourney": "Iniziare la visita",
  "btn.scrollMore": "Scorri per saperne di più",
  "btn.scrollRooms": "Scorri attraverso gli ambienti",
  "btn.visitTheCounty": "Scoprire la Toronto occidentale →",
  "btn.readCoverage": "Leggi l'articolo",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "Capitolo",
  "ch.property.headline": "La residenza.",
  "ch.floorplans.headline": "Le planimetrie.",
  "ch.floorplans.sub": "Un insieme di disegni in scala.",
  "ch.floorplans.statement":
    "Toccare una planimetria per ingrandirla. Un dossier informativo stampabile è disponibile su richiesta.",

  // ---- press / neighbourhood ----
  "press.eyebrow": "Menzioni di rilievo",
  "press.headline": "La stampa, su",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "Filmati del quartiere",
  "videos.headline.before": "Lorne Park, in",
  "videos.headline.em": "immagini in movimento",
  "videos.italic":
    "Tre cortometraggi tra Lorne Park e Bloor West — le botteghe, le strade e il ritmo di un anno nel quartiere.",

  // ---- gallery ----
  "gallery.kicker": "Capitolo",
  "gallery.headline": "L'archivio visivo completo.",

  // ---- closing CTA ----
  "closing.eyebrow": "Il prossimo capitolo",
  "closing.headline": "Pensare a una visita al 1654 Birchwood.",
  "closing.sub":
    "Le visite private sono su appuntamento. Fasce di mezz'ora ogni giorno dalle 10 alle 20 — si gradisce il preavviso il giorno prima.",

  // ---- footer ----
  "footer.listed": "A cura di",
  "footer.email": "E-mail",
  "footer.phone": "Telefono",
  "footer.copyright":
    "Tutti i contenuti di questo sito sono protetti da diritto d'autore. Riproduzione vietata senza autorizzazione.",
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
  "btn.visitTheCounty": "Conocer el oeste de Toronto →",
  "btn.readCoverage": "Leer el artículo",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
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
  "btn.visitTheCounty": "اكتشاف غرب Toronto →",
  "btn.readCoverage": "قراءة المقال",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
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
  "btn.visitTheCounty": "走进多伦多西区 →",
  "btn.readCoverage": "阅读报道",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
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

const ja: Dict = {
  // ---- nav ----
  "nav.property": "邸宅",
  "nav.floorplans": "間取り図",
  "nav.county": "街並み",
  "nav.pool": "プール用地",
  "nav.gallery": "ギャラリー",
  "nav.designer": "David Small Designs",
  "nav.contact": "お問い合わせ",
  "nav.menu": "メニュー",
  "nav.close": "閉じる",

  // ---- header utilities ----
  "btn.privateViewing": "プライベート内覧のご予約",
  "btn.beginJourney": "ご案内をはじめる",
  "btn.scrollMore": "スクロールしてさらに",
  "btn.scrollRooms": "各室をスクロールでご覧ください",
  "btn.visitTheCounty": "西トロントへ →",
  "btn.readCoverage": "記事を読む",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "章",
  "ch.property.headline": "邸宅。",
  "ch.floorplans.headline": "間取り図。",
  "ch.floorplans.sub": "縮尺に基づく一連の図面。",
  "ch.floorplans.statement":
    "図面をタップすると原寸大でご覧いただけます。印刷可能な資料一式はご請求に応じてお渡しいたします。",

  // ---- press / neighbourhood ----
  "press.eyebrow": "主な掲載",
  "press.headline": "メディアが綴る",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "街の映像",
  "videos.headline.before": "Lorne Park を、",
  "videos.headline.em": "動く映像で",
  "videos.italic":
    "Lorne Park と Bloor West を巡る三本の短編 —— 店々、路地、そしてこの街に流れる一年の呼吸。",

  // ---- gallery ----
  "gallery.kicker": "章",
  "gallery.headline": "ビジュアルアーカイブのすべて。",

  // ---- closing CTA ----
  "closing.eyebrow": "次なる章へ",
  "closing.headline": "1654 Birchwood への訪問を、ご検討ください。",
  "closing.sub":
    "プライベート内覧はご予約制です。毎日午前10時から午後8時まで、30分単位でご案内いたします — 前日までのご連絡を歓迎いたします。",

  // ---- footer ----
  "footer.listed": "媒介",
  "footer.email": "メール",
  "footer.phone": "電話",
  "footer.copyright":
    "本サイトのすべてのコンテンツは著作権により保護されています。許可なく複製することを禁じます。",
};

const he: Dict = {
  // ---- nav ----
  "nav.property": "הבית",
  "nav.floorplans": "תוכניות הקומות",
  "nav.county": "השכונה",
  "nav.pool": "מגרש לבריכה",
  "nav.gallery": "גלריה",
  "nav.designer": "David Small Designs",
  "nav.contact": "יצירת קשר",
  "nav.menu": "תפריט",
  "nav.close": "סגירה",

  // ---- header utilities ----
  "btn.privateViewing": "תיאום ביקור פרטי",
  "btn.beginJourney": "התחלת הסיור",
  "btn.scrollMore": "להמשיך בגלילה",
  "btn.scrollRooms": "גלילה בין החללים",
  "btn.visitTheCounty": "לגלות את מערב Toronto ←",
  "btn.readCoverage": "לקריאת הכתבה",

  // ---- hero ----
  "hero.kicker": "Lorne Park · Mississauga",
  "hero.headline": "A Contemporary Zen Residence in Lorne Park.",
  "hero.sub": "1654 Birchwood Drive · Lorne Park, Mississauga · Ontario.",

  // ---- chapter labels ----
  "ch.chapter": "פרק",
  "ch.property.headline": "הבית.",
  "ch.floorplans.headline": "תוכניות הקומות.",
  "ch.floorplans.sub": "מערכת תוכניות מדודה, בקנה מידה.",
  "ch.floorplans.statement":
    "יש להקיש על כל תוכנית כדי לפתוח אותה בגודל מלא. חוברת מידע להדפסה זמינה לפי בקשה.",

  // ---- press / neighbourhood ----
  "press.eyebrow": "אזכורים נבחרים",
  "press.headline": "מה שכתבו על",
  "press.headlineEm": "Lorne Park",
  "videos.eyebrow": "סרטים מן השכונה",
  "videos.headline.before": "Lorne Park, ב",
  "videos.headline.em": "תמונות נעות",
  "videos.italic":
    "שלושה סרטים קצרים מ-Lorne Park ומ-Bloor West — החנויות, הרחובות, וקצב של שנה שלמה בשכונה.",

  // ---- gallery ----
  "gallery.kicker": "פרק",
  "gallery.headline": "התיעוד החזותי המלא.",

  // ---- closing CTA ----
  "closing.eyebrow": "הפרק הבא שלכם",
  "closing.headline": "שקלו ביקור ב-1654 Birchwood.",
  "closing.sub":
    "הביקורים הפרטיים מתקיימים בתיאום מראש. מפגשים של חצי שעה מדי יום בין השעות 10:00 ל-20:00 — מומלצת הודעה ערב קודם.",

  // ---- footer ----
  "footer.listed": "באמצעות",
  "footer.email": "דוא״ל",
  "footer.phone": "טלפון",
  "footer.copyright":
    "כל החומר באתר זה מוגן בזכויות יוצרים. אין לשכפלו ללא היתר.",
};

export const translations: Record<Lang, Dict> = {
  en,
  fr,
  it,
  es,
  ar,
  zh,
  ja,
  he,
};
