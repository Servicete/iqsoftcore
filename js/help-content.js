/**
 * iqFleetSync help center.
 * Clips live in videos/iqfleetsync/ as mp4 plus a Finnish WebVTT file.
 * See videos/README.md for the expected filenames.
 */
const HELP_MEDIA = [
  {
    id: "qr-login",
    src: "videos/iqfleetsync/qr-kirjautuminen-kuljettaja.mp4",
    captions: "videos/iqfleetsync/qr-kirjautuminen-kuljettaja.vtt",
  },
  {
    id: "readings-vs-defect",
    src: "videos/iqfleetsync/lukemat-vs-vikailmoitus.mp4",
    captions: "videos/iqfleetsync/lukemat-vs-vikailmoitus.vtt",
  },
  {
    id: "reports-work-order",
    src: "videos/iqfleetsync/huolto-raportit.mp4",
    captions: "videos/iqfleetsync/huolto-raportit.vtt",
  },
  {
    id: "invites-roles",
    src: "videos/iqfleetsync/paakayttaja-kutsut-roolit.mp4",
    captions: "videos/iqfleetsync/paakayttaja-kutsut-roolit.vtt",
  },
  {
    id: "print-qr",
    src: "videos/iqfleetsync/qr-tarrat.mp4",
    captions: "videos/iqfleetsync/qr-tarrat.vtt",
  },
];

const HELP_CENTER = {
  fi: {
    metaTitle: "Ohjekeskus | iqFleetSync",
    metaDescription: "Lyhyet suomenkieliset ohjevideot iqFleetSynciin: QR-kirjautuminen, lukemat ja vikailmoitus, huoltohenkilön raportit, kutsut ja roolit sekä QR-tarrat.",
    title: "Ohjekeskus",
    kicker: "iqFleetSync",
    lead: "Lyhyet suomenkieliset ohjevideot iqFleetSynciin. Tekstitys on suomeksi.",
    unsupported: "Selaimesi ei toista videota.",
    back: "Takaisin iqFleetSynciin",
    apps: "Kaikki sovellukset",
    home: "Etusivu",
    topics: {
      "qr-login": {
        title: "QR-kirjautuminen kuljettajalle",
        description: "Miten kuljettaja kirjautuu skannaamalla koneen QR-koodin. Uudella puhelimella sähköpostikoodi, sen jälkeen sormenjälki.",
      },
      "readings-vs-defect": {
        title: "Lukemat vs. vikailmoitus",
        description: "Kirjaa km/tunnit tai ilmoita vika. Service-hint-värit näyttävät tilanteen, ja ei-ajokunnossa oleva yksikkö vaatii kuvauksen.",
      },
      "reports-work-order": {
        title: "Huoltohenkilön raportit",
        description: "Vikailmoitusten käsittely, työmääräimet ja huollon kirjaus.",
      },
      "invites-roles": {
        title: "Pääkäyttäjä: kutsut ja roolit",
        description: "Kutsu henkilöt ja valitse jokaiselle rooli: Pääkäyttäjä, Huoltohenkilö tai Kuljettaja.",
      },
      "print-qr": {
        title: "QR-tarrojen tulostus",
        description: "Tarrat yksiköille skannausta varten.",
      },
    },
  },
  en: {
    metaTitle: "Help center | iqFleetSync",
    metaDescription: "Short Finnish how-to videos for iqFleetSync: QR sign-in, readings and defect reports, workshop reports, invites and roles, and QR stickers.",
    title: "Help center",
    kicker: "iqFleetSync",
    lead: "Short Finnish how-to videos for iqFleetSync. Subtitles are in Finnish.",
    unsupported: "Your browser cannot play this video.",
    back: "Back to iqFleetSync",
    apps: "All apps",
    home: "Home",
    topics: {
      "qr-login": {
        title: "QR sign-in for the driver",
        description: "How the driver signs in by scanning the machine’s QR code. On a new phone, an email code comes first, then fingerprint.",
      },
      "readings-vs-defect": {
        title: "Readings vs defect report",
        description: "Enter kilometres and hours, or report a defect. Service-hint colours show the situation, and a unit that is not roadworthy needs a description.",
      },
      "reports-work-order": {
        title: "Workshop reports",
        description: "Handling defect reports, work orders and recording maintenance.",
      },
      "invites-roles": {
        title: "Admin: invites and roles",
        description: "Invite people and choose a role for each: Admin, Maintenance or Driver.",
      },
      "print-qr": {
        title: "Printing QR stickers",
        description: "Stickers for the units, so they can be scanned.",
      },
    },
  },
  sv: {
    metaTitle: "Hjälpcenter | iqFleetSync",
    metaDescription: "Korta finska instruktionsvideor för iqFleetSync: QR-inloggning, mätarställning och felanmälan, verkstadens rapporter, inbjudningar och roller samt QR-dekaler.",
    title: "Hjälpcenter",
    kicker: "iqFleetSync",
    lead: "Korta finska instruktionsvideor för iqFleetSync. Undertexterna är på finska.",
    unsupported: "Din webbläsare kan inte spela videon.",
    back: "Tillbaka till iqFleetSync",
    apps: "Alla appar",
    home: "Startsida",
    topics: {
      "qr-login": {
        title: "QR-inloggning för föraren",
        description: "Hur föraren loggar in genom att skanna maskinens QR-kod. På en ny telefon kommer först en e-postkod, sedan fingeravtryck.",
      },
      "readings-vs-defect": {
        title: "Mätarställning jämfört med felanmälan",
        description: "Skriv in kilometer och timmar, eller anmäl ett fel. Service-hint-färger visar läget, och en enhet som inte är körduglig kräver en beskrivning.",
      },
      "reports-work-order": {
        title: "Verkstadens rapporter",
        description: "Hantering av felanmälningar, arbetsorder och registrering av underhåll.",
      },
      "invites-roles": {
        title: "Administratör: inbjudningar och roller",
        description: "Bjud in personer och välj en roll för var och en: Administratör, Underhållspersonal eller Förare.",
      },
      "print-qr": {
        title: "Skriva ut QR-dekaler",
        description: "Dekaler för enheterna, så att de kan skannas.",
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

function helpMediaHtml(item, topic, unsupportedLabel) {
  const title = escapeHelpHtml(topic.title);
  return `<video class="help-player" controls playsinline preload="metadata" aria-label="${title}">
      <source src="${escapeHelpHtml(item.src)}" type="video/mp4" />
      <track kind="subtitles" src="${escapeHelpHtml(item.captions)}" srclang="fi" label="Suomi" default />
      ${escapeHelpHtml(unsupportedLabel)}
    </video>`;
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
      ${helpMediaHtml(item, topic, page.unsupported)}
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
