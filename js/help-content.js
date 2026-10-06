/**
 * iqFleetSync help center.
 * Short Finnish how-to clips. Leave `src` empty until a real file exists,
 * then set it to a local path such as "videos/qr-kirjautuminen.mp4"
 * or an https YouTube/Vimeo embed URL (youtube.com/embed/… or player.vimeo.com/video/…).
 * Do not put placeholder watch-page URLs here.
 */
const HELP_MEDIA = [
  { id: "qr-login", src: "", file: "videos/qr-kirjautuminen.mp4" },
  { id: "readings-vs-defect", src: "", file: "videos/lukemat-ja-vikailmoitus.mp4" },
  { id: "reports-work-order", src: "", file: "videos/huollon-raportit.mp4" },
  { id: "invites-roles", src: "", file: "videos/kutsut-ja-roolit.mp4" },
  { id: "print-qr", src: "", file: "videos/qr-tarrojen-tulostus.mp4" },
];

const HELP_CENTER = {
  fi: {
    metaTitle: "Ohjekeskus | iqFleetSync",
    metaDescription: "Lyhyet suomenkieliset ohjevideot iqFleetSynciin: QR-kirjautuminen, lukemat, vikailmoitus, huollon raportit, kutsut ja QR-tarrat.",
    title: "Ohjekeskus",
    kicker: "iqFleetSync",
    lead: "Lyhyet suomenkieliset ohjevideot iqFleetSynciin. Jokainen kortti on valmis videolle. Kun tiedosto on paikallaan, se näkyy tässä.",
    pending: "Video tulossa",
    back: "Takaisin iqFleetSynciin",
    apps: "Kaikki sovellukset",
    home: "Etusivu",
    topics: {
      "qr-login": {
        title: "QR-kirjautuminen kuljettajalle",
        description: "Kuljettaja avaa oman näkymänsä skannaamalla yksikön QR-tarran puhelimen kameralla. Video näyttää, miten kirjautuminen käy tien päällä ilman erillistä asennusta.",
      },
      "readings-vs-defect": {
        title: "Lukemien kirjaus vs vikailmoitus",
        description: "Kilometrit ja tunnit kirjataan omana merkintänään, vikailmoitus lähtee kuvan kanssa. Video erottaa nämä kaksi, jotta ilmoitus menee oikeaan paikkaan.",
      },
      "reports-work-order": {
        title: "Huollon raportit ja työmääräin",
        description: "Huolto näkee vikailmoitukset, työmääräimen ja yksikön historian samassa listassa. Video käy läpi, miten raportti ja työmääräin kulkevat työn mukana.",
      },
      "invites-roles": {
        title: "Pääkäyttäjä: henkilöiden kutsut ja roolit",
        description: "Pääkäyttäjä kutsuu henkilöt mukaan ja antaa heille roolin, jotta jokainen avaa oman näkymänsä. Video näyttää kutsun ja roolin valinnan.",
      },
      "print-qr": {
        title: "QR-tarrojen tulostus",
        description: "QR-tarrat kiinnitetään kuorma-autoihin, perävaunuihin ja koneisiin. Video näyttää, miten tarrat tulostetaan huollon näkymästä.",
      },
    },
  },
  en: {
    metaTitle: "Help center | iqFleetSync",
    metaDescription: "Short Finnish how-to videos for iqFleetSync: QR sign-in, readings, defect reports, maintenance reports, invites, and QR stickers.",
    title: "Help center",
    kicker: "iqFleetSync",
    lead: "Short Finnish how-to videos for iqFleetSync. Each card is ready for a clip. When the file is in place, it plays here.",
    pending: "Video coming soon",
    back: "Back to iqFleetSync",
    apps: "All apps",
    home: "Home",
    topics: {
      "qr-login": {
        title: "QR sign-in for the driver",
        description: "The driver opens their view by scanning the unit’s QR sticker with the phone camera. The video shows how sign-in works at the roadside, with nothing to install.",
      },
      "readings-vs-defect": {
        title: "Entering readings vs reporting a defect",
        description: "Kilometres and hours are their own entry. A defect report goes out with a photo. The video separates the two so the note lands in the right place.",
      },
      "reports-work-order": {
        title: "Maintenance reports and the work order",
        description: "The workshop sees defect reports, the work order and the unit’s history in one list. The video walks through how the report and the work order travel with the job.",
      },
      "invites-roles": {
        title: "Admin: inviting people and roles",
        description: "The admin invites people and gives each a role, so everyone opens their own view. The video shows the invitation and the role choice.",
      },
      "print-qr": {
        title: "Printing QR stickers",
        description: "QR stickers go on trucks, trailers and machines. The video shows how to print them from the workshop view.",
      },
    },
  },
  sv: {
    metaTitle: "Hjälpcenter | iqFleetSync",
    metaDescription: "Korta finska instruktionsvideor för iqFleetSync: QR-inloggning, mätarställning, felanmälan, underhållsrapporter, inbjudningar och QR-dekaler.",
    title: "Hjälpcenter",
    kicker: "iqFleetSync",
    lead: "Korta finska instruktionsvideor för iqFleetSync. Varje kort är redo för ett klipp. När filen finns på plats spelas den upp här.",
    pending: "Video kommer",
    back: "Tillbaka till iqFleetSync",
    apps: "Alla appar",
    home: "Startsida",
    topics: {
      "qr-login": {
        title: "QR-inloggning för föraren",
        description: "Föraren öppnar sin vy genom att skanna enhetens QR-dekal med telefonens kamera. Videon visar hur inloggningen går till vid vägkanten, utan installation.",
      },
      "readings-vs-defect": {
        title: "Mätarställning jämfört med felanmälan",
        description: "Kilometer och timmar skrivs in för sig. En felanmälan skickas med bild. Videon skiljer de två åt, så anteckningen hamnar rätt.",
      },
      "reports-work-order": {
        title: "Underhållsrapporter och arbetsorder",
        description: "Verkstaden ser felanmälningar, arbetsordern och enhetens historik i samma lista. Videon går igenom hur rapporten och arbetsordern följer med jobbet.",
      },
      "invites-roles": {
        title: "Administratör: inbjudningar och roller",
        description: "Administratören bjuder in personer och ger var och en en roll, så alla öppnar sin egen vy. Videon visar inbjudan och rollvalet.",
      },
      "print-qr": {
        title: "Skriva ut QR-dekaler",
        description: "QR-dekaler sätts på lastbilar, släp och maskiner. Videon visar hur de skrivs ut från verkstadens vy.",
      },
    },
  },
};

function escapeHelpHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function helpMediaHtml(item, topic, pendingLabel) {
  const src = String(item.src || "").trim();
  const title = escapeHelpHtml(topic.title);
  const pending = escapeHelpHtml(pendingLabel);
  const file = escapeHelpHtml(item.file || "");
  const embed = /^https:\/\/(www\.)?(youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/|player\.vimeo\.com\/video\/)/i.test(src);
  const fileSrc = /^(videos\/|https:\/\/).+\.(mp4|webm)(\?.*)?$/i.test(src);

  if (embed) {
    return `<div class="help-embed"><iframe src="${escapeHelpHtml(src)}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
  }

  if (fileSrc) {
    return `<video class="help-player" controls playsinline preload="metadata" src="${escapeHelpHtml(src)}">${pending}</video>`;
  }

  return `<div class="help-poster" data-video-file="${file}"><span>${pending}</span></div>`;
}

function renderHelpCenter(lang) {
  const root = document.getElementById("help-root");
  if (!root || typeof HELP_CENTER === "undefined") return;

  const page = HELP_CENTER[lang] || HELP_CENTER.en;
  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = page.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);

  const cards = HELP_MEDIA.map((item) => {
    const topic = page.topics[item.id];
    if (!topic) return "";
    return `<article class="help-card" id="${escapeHelpHtml(item.id)}">
      <h2>${escapeHelpHtml(topic.title)}</h2>
      <p>${escapeHelpHtml(topic.description)}</p>
      ${helpMediaHtml(item, topic, page.pending)}
    </article>`;
  }).join("");

  root.innerHTML = `<p class="help-kicker">${escapeHelpHtml(page.kicker)}</p>
    <h1>${escapeHelpHtml(page.title)}</h1>
    <p>${escapeHelpHtml(page.lead)}</p>
    <div class="help-list">${cards}</div>
    <p class="policy-nav">
      <a class="btn btn-ghost" href="iqfleetsync.html">${escapeHelpHtml(page.back)}</a>
      <a class="btn btn-ghost" href="apps.html">${escapeHelpHtml(page.apps)}</a>
      <a class="btn btn-ghost" href="index.html">${escapeHelpHtml(page.home)}</a>
    </p>`;
}
