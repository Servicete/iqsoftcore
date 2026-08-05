/**
 * Company and app privacy policies.
 * Language switcher re-renders these via renderPrivacyPolicy(lang).
 */
const PRIVACY_POLICIES = {
  company: {
    fi: {
      metaTitle: "IQSoftCore – Tietosuojakäytäntö",
      metaDescription: "IQSoftCoren yritystason tietosuojakäytäntö ja sovelluskohtaiset lausekkeet.",
      title: "Tietosuojakäytäntö",
      updated: "Viimeksi päivitetty: 2026-08-05",
      sections: [
        {
          heading: "1. Yleistä",
          paragraphs: [
            "Tämä tietosuojakäytäntö kuvaa, miten IQSoftCore käsittelee henkilötietoja verkkosivustollaan ja yritystoiminnassaan. Rekisterinpitäjä on IQSoftCore, Suomi.",
            "Yksittäisillä sovelluksilla (kuten Google Playn kautta jaettavilla sovelluksilla) on omat tietosuojalausekkeensa, jotka kuvaavat kyseisen sovelluksen tietojenkäsittelyä tarkemmin.",
          ],
        },
        {
          heading: "2. Verkkosivusto",
          paragraphs: [
            "Verkkosivustomme on staattinen esittelysivusto. Emme käytä analytiikkaa, mainoksia emmekä seurantaan tarkoitettuja evästeitä.",
            "Jos otat meihin yhteyttä sähköpostitse, käsittelemme viestissäsi antamiasi tietoja ainoastaan yhteydenoton hoitamiseksi. Emme myy tai luovuta yhteydenottotietoja ulkopuolisille markkinointitarkoituksiin.",
          ],
        },
        {
          heading: "3. Sovellukset",
          paragraphs: [
            "Useimmat IQSoftCore-sovellukset on suunniteltu siten, että data säilyy käyttäjän omalla laitteella. Sovelluskohtaiset yksityiskohdat löytyvät kunkin sovelluksen omasta tietosuojalausekkeesta.",
          ],
        },
        {
          heading: "4. Yhteystiedot",
          paragraphs: [
            "Tietosuojaan liittyvät kysymykset: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Sovelluskohtaiset tietosuojalausekkeet",
      appsIntro: "Alla olevat lausekkeet koskevat nimettyä sovellusta:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "Paikallinen tuntikirjaus-sovellus (Google Play)." }],
      backHome: "Takaisin etusivulle",
    },
    en: {
      metaTitle: "IQSoftCore – Privacy Policy",
      metaDescription: "IQSoftCore company privacy policy and app-specific statements.",
      title: "Privacy Policy",
      updated: "Last updated: 2026-08-05",
      sections: [
        {
          heading: "1. General",
          paragraphs: [
            "This privacy policy describes how IQSoftCore handles personal data on its website and in its business activities. The controller is IQSoftCore, Finland.",
            "Individual applications (such as apps distributed via Google Play) have their own privacy policies that describe that app’s data processing in more detail.",
          ],
        },
        {
          heading: "2. Website",
          paragraphs: [
            "Our website is a static presentation site. We do not use analytics, advertising, or tracking cookies.",
            "If you contact us by email, we process the information you provide only to handle your inquiry. We do not sell or share contact details for third-party marketing.",
          ],
        },
        {
          heading: "3. Applications",
          paragraphs: [
            "Most IQSoftCore apps are designed so that data stays on the user’s own device. App-specific details are available in each app’s own privacy policy.",
          ],
        },
        {
          heading: "4. Contact",
          paragraphs: [
            "Privacy questions: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "App-specific privacy policies",
      appsIntro: "The following policies apply to the named application:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "Local time-tracking app (Google Play)." }],
      backHome: "Back to home",
    },
    sv: {
      metaTitle: "IQSoftCore – Integritetspolicy",
      metaDescription: "IQSoftCores företagsnivå-integritetspolicy och app-specifika villkor.",
      title: "Integritetspolicy",
      updated: "Senast uppdaterad: 2026-08-05",
      sections: [
        {
          heading: "1. Allmänt",
          paragraphs: [
            "Denna integritetspolicy beskriver hur IQSoftCore behandlar personuppgifter på sin webbplats och i sin verksamhet. Personuppgiftsansvarig är IQSoftCore, Finland.",
            "Enskilda applikationer (t.ex. appar via Google Play) har egna integritetspolicys som beskriver den aktuella appens databehandling mer detaljerat.",
          ],
        },
        {
          heading: "2. Webbplats",
          paragraphs: [
            "Vår webbplats är en statisk presentationssida. Vi använder inte analys, reklam eller spårningscookies.",
            "Om du kontaktar oss via e-post behandlar vi uppgifterna endast för att hantera din förfrågan. Vi säljer eller delar inte kontaktuppgifter för tredjepartsmarknadsföring.",
          ],
        },
        {
          heading: "3. Appar",
          paragraphs: [
            "De flesta IQSoftCore-appar är utformade så att data stannar på användarens egen enhet. App-specifika detaljer finns i respektive apps integritetspolicy.",
          ],
        },
        {
          heading: "4. Kontakt",
          paragraphs: [
            "Frågor om integritet: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "App-specifika integritetspolicys",
      appsIntro: "Följande policys gäller den namngivna applikationen:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokal tidrapporteringsapp (Google Play)." }],
      backHome: "Tillbaka till startsidan",
    },
    no: {
      metaTitle: "IQSoftCore – Personvernerklæring",
      metaDescription: "IQSoftCores personvernerklæring på bedriftsnivå og app-spesifikke erklæringer.",
      title: "Personvernerklæring",
      updated: "Sist oppdatert: 2026-08-05",
      sections: [
        {
          heading: "1. Generelt",
          paragraphs: [
            "Denne personvernerklæringen beskriver hvordan IQSoftCore behandler personopplysninger på nettstedet og i virksomheten. Behandlingsansvarlig er IQSoftCore, Finland.",
            "Enkelte applikasjoner (f.eks. apper via Google Play) har egne personvernerklæringer som beskriver den aktuelle appens databehandling mer detaljert.",
          ],
        },
        {
          heading: "2. Nettsted",
          paragraphs: [
            "Nettstedet vårt er en statisk presentasjonsside. Vi bruker ikke analyse, reklame eller sporingsinformasjonskapsler.",
            "Hvis du kontakter oss på e-post, behandler vi opplysningene kun for å håndtere henvendelsen. Vi selger eller deler ikke kontaktopplysninger for tredjeparts markedsføring.",
          ],
        },
        {
          heading: "3. Apper",
          paragraphs: [
            "De fleste IQSoftCore-apper er laget slik at data blir på brukerens egen enhet. App-spesifikke detaljer finnes i hver apps egen personvernerklæring.",
          ],
        },
        {
          heading: "4. Kontakt",
          paragraphs: [
            "Spørsmål om personvern: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "App-spesifikke personvernerklæringer",
      appsIntro: "Følgende erklæringer gjelder den navngitte applikasjonen:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokal timeføringsapp (Google Play)." }],
      backHome: "Tilbake til forsiden",
    },
    da: {
      metaTitle: "IQSoftCore – Privatlivspolitik",
      metaDescription: "IQSoftCores privatlivspolitik på virksomhedsniveau og app-specifikke erklæringer.",
      title: "Privatlivspolitik",
      updated: "Senest opdateret: 2026-08-05",
      sections: [
        {
          heading: "1. Generelt",
          paragraphs: [
            "Denne privatlivspolitik beskriver, hvordan IQSoftCore behandler personoplysninger på sit websted og i sin virksomhed. Dataansvarlig er IQSoftCore, Finland.",
            "Enkelte applikationer (f.eks. apps via Google Play) har egne privatlivspolitikker, der beskriver den pågældende apps databehandling mere detaljeret.",
          ],
        },
        {
          heading: "2. Websted",
          paragraphs: [
            "Vores websted er et statisk præsentationssite. Vi bruger ikke analyse, reklame eller sporingscookies.",
            "Hvis du kontakter os via e-mail, behandler vi oplysningerne kun for at håndtere din henvendelse. Vi sælger eller deler ikke kontaktoplysninger til tredjepartsmarkedsføring.",
          ],
        },
        {
          heading: "3. Apps",
          paragraphs: [
            "De fleste IQSoftCore-apps er designet, så data forbliver på brugerens egen enhed. App-specifikke detaljer findes i hver apps egen privatlivspolitik.",
          ],
        },
        {
          heading: "4. Kontakt",
          paragraphs: [
            "Spørgsmål om privatliv: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "App-specifikke privatlivspolitikker",
      appsIntro: "Følgende politikker gælder den navngivne applikation:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokal timeregistreringsapp (Google Play)." }],
      backHome: "Tilbage til forsiden",
    },
    de: {
      metaTitle: "IQSoftCore – Datenschutzerklärung",
      metaDescription: "Unternehmensbezogene Datenschutzerklärung von IQSoftCore und app-spezifische Hinweise.",
      title: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: 2026-08-05",
      sections: [
        {
          heading: "1. Allgemeines",
          paragraphs: [
            "Diese Datenschutzerklärung beschreibt, wie IQSoftCore personenbezogene Daten auf seiner Website und in seiner Geschäftstätigkeit verarbeitet. Verantwortlicher ist IQSoftCore, Finnland.",
            "Einzelne Anwendungen (z. B. Apps über Google Play) haben eigene Datenschutzerklärungen, die die Datenverarbeitung der jeweiligen App genauer beschreiben.",
          ],
        },
        {
          heading: "2. Website",
          paragraphs: [
            "Unsere Website ist eine statische Präsentationsseite. Wir verwenden keine Analyse-, Werbe- oder Tracking-Cookies.",
            "Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die Angaben nur zur Bearbeitung Ihrer Anfrage. Wir verkaufen oder teilen Kontaktdaten nicht für Marketing Dritter.",
          ],
        },
        {
          heading: "3. Apps",
          paragraphs: [
            "Die meisten IQSoftCore-Apps sind so gestaltet, dass Daten auf dem Gerät des Nutzers bleiben. App-spezifische Details finden Sie in der jeweiligen Datenschutzerklärung der App.",
          ],
        },
        {
          heading: "4. Kontakt",
          paragraphs: [
            "Fragen zum Datenschutz: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "App-spezifische Datenschutzerklärungen",
      appsIntro: "Die folgenden Erklärungen gelten für die genannte Anwendung:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokale Zeiterfassungs-App (Google Play)." }],
      backHome: "Zurück zur Startseite",
    },
    es: {
      metaTitle: "IQSoftCore – Política de privacidad",
      metaDescription: "Política de privacidad corporativa de IQSoftCore y declaraciones por aplicación.",
      title: "Política de privacidad",
      updated: "Última actualización: 2026-08-05",
      sections: [
        {
          heading: "1. General",
          paragraphs: [
            "Esta política de privacidad describe cómo IQSoftCore trata los datos personales en su sitio web y en su actividad. El responsable es IQSoftCore, Finlandia.",
            "Las aplicaciones individuales (por ejemplo, apps en Google Play) tienen sus propias políticas de privacidad que describen el tratamiento de esa app con más detalle.",
          ],
        },
        {
          heading: "2. Sitio web",
          paragraphs: [
            "Nuestro sitio web es una página estática de presentación. No usamos analítica, publicidad ni cookies de seguimiento.",
            "Si nos contacta por correo electrónico, tratamos la información solo para gestionar su consulta. No vendemos ni compartimos datos de contacto para marketing de terceros.",
          ],
        },
        {
          heading: "3. Aplicaciones",
          paragraphs: [
            "La mayoría de las apps de IQSoftCore están diseñadas para que los datos permanezcan en el dispositivo del usuario. Los detalles específicos están en la política de cada app.",
          ],
        },
        {
          heading: "4. Contacto",
          paragraphs: [
            "Consultas de privacidad: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Políticas de privacidad por aplicación",
      appsIntro: "Las siguientes políticas se aplican a la aplicación indicada:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "App local de registro de horas (Google Play)." }],
      backHome: "Volver al inicio",
    },
    it: {
      metaTitle: "IQSoftCore – Informativa sulla privacy",
      metaDescription: "Informativa privacy aziendale di IQSoftCore e dichiarazioni per applicazione.",
      title: "Informativa sulla privacy",
      updated: "Ultimo aggiornamento: 2026-08-05",
      sections: [
        {
          heading: "1. Generale",
          paragraphs: [
            "La presente informativa descrive come IQSoftCore tratta i dati personali sul proprio sito e nella propria attività. Il titolare del trattamento è IQSoftCore, Finlandia.",
            "Le singole applicazioni (ad es. app su Google Play) hanno informative privacy proprie che descrivono in modo più dettagliato il trattamento di quella app.",
          ],
        },
        {
          heading: "2. Sito web",
          paragraphs: [
            "Il nostro sito è una pagina statica di presentazione. Non utilizziamo analitica, pubblicità né cookie di tracciamento.",
            "Se ci contatti via e-mail, trattiamo le informazioni solo per gestire la richiesta. Non vendiamo né condividiamo i dati di contatto per marketing di terzi.",
          ],
        },
        {
          heading: "3. Applicazioni",
          paragraphs: [
            "La maggior parte delle app IQSoftCore è progettata affinché i dati restino sul dispositivo dell’utente. I dettagli specifici sono nell’informativa di ciascuna app.",
          ],
        },
        {
          heading: "4. Contatti",
          paragraphs: [
            "Domande sulla privacy: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Informative privacy per applicazione",
      appsIntro: "Le seguenti informative riguardano l’applicazione indicata:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "App locale di registrazione ore (Google Play)." }],
      backHome: "Torna alla home",
    },
    ja: {
      metaTitle: "IQSoftCore – プライバシーポリシー",
      metaDescription: "IQSoftCoreの企業向けプライバシーポリシーとアプリ別方針。",
      title: "プライバシーポリシー",
      updated: "最終更新日: 2026-08-05",
      sections: [
        {
          heading: "1. 概要",
          paragraphs: [
            "本プライバシーポリシーは、IQSoftCoreがウェブサイトおよび事業活動において個人データをどのように取り扱うかを説明します。管理者はフィンランドのIQSoftCoreです。",
            "個々のアプリケーション（例: Google Play経由のアプリ）には、そのアプリのデータ処理をより詳しく説明する独自のプライバシーポリシーがあります。",
          ],
        },
        {
          heading: "2. ウェブサイト",
          paragraphs: [
            "当社のウェブサイトは静的な紹介ページです。分析、広告、追跡クッキーは使用しません。",
            "メールでお問い合わせいただいた場合、その情報は対応のためにのみ処理します。第三者のマーケティング目的で連絡先を販売・共有しません。",
          ],
        },
        {
          heading: "3. アプリケーション",
          paragraphs: [
            "IQSoftCoreの多くのアプリは、データがユーザー自身の端末に残るよう設計されています。詳細は各アプリのプライバシーポリシーをご覧ください。",
          ],
        },
        {
          heading: "4. お問い合わせ",
          paragraphs: [
            "プライバシーに関するお問い合わせ: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "アプリ別プライバシーポリシー",
      appsIntro: "以下の方針は、記載のアプリケーションに適用されます:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "端末内の勤怠記録アプリ（Google Play）。" }],
      backHome: "ホームに戻る",
    },
    ko: {
      metaTitle: "IQSoftCore – 개인정보 처리방침",
      metaDescription: "IQSoftCore 기업 수준 개인정보 처리방침 및 앱별 방침.",
      title: "개인정보 처리방침",
      updated: "최종 업데이트: 2026-08-05",
      sections: [
        {
          heading: "1. 일반",
          paragraphs: [
            "본 개인정보 처리방침은 IQSoftCore가 웹사이트와 사업 활동에서 개인정보를 어떻게 처리하는지 설명합니다. 개인정보처리자는 핀란드의 IQSoftCore입니다.",
            "개별 애플리케이션(예: Google Play 앱)에는 해당 앱의 데이터 처리를 더 자세히 설명하는 별도의 개인정보 처리방침이 있습니다.",
          ],
        },
        {
          heading: "2. 웹사이트",
          paragraphs: [
            "당사 웹사이트는 정적 소개 페이지입니다. 분석, 광고, 추적 쿠키를 사용하지 않습니다.",
            "이메일로 문의하시면 해당 정보는 문의 처리 목적으로만 처리합니다. 제3자 마케팅을 위해 연락처를 판매하거나 공유하지 않습니다.",
          ],
        },
        {
          heading: "3. 애플리케이션",
          paragraphs: [
            "대부분의 IQSoftCore 앱은 데이터가 사용자 기기에 남도록 설계되어 있습니다. 앱별 세부 내용은 각 앱의 개인정보 처리방침을 확인하세요.",
          ],
        },
        {
          heading: "4. 연락처",
          paragraphs: [
            "개인정보 관련 문의: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "앱별 개인정보 처리방침",
      appsIntro: "다음 방침은 명시된 애플리케이션에 적용됩니다:",
      apps: [{ name: "Tuntilappu", href: "privacy-tuntilappu.html", blurb: "로컬 근무시간 기록 앱(Google Play)." }],
      backHome: "홈으로 돌아가기",
    },
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderPolicySections(sections) {
  return sections
    .map((section) => {
      let html = `<section class="policy-section"><h2>${escapeHtml(section.heading)}</h2>`;
      (section.paragraphs || []).forEach((p) => {
        html += `<p>${escapeHtml(p)}</p>`;
      });
      if (section.bullets && section.bullets.length) {
        html += `<ul>${section.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
      }
      (section.after || []).forEach((p) => {
        html += `<p>${escapeHtml(p)}</p>`;
      });
      html += "</section>";
      return html;
    })
    .join("");
}

function renderPrivacyPolicy(lang) {
  const root = document.getElementById("policy-root");
  if (!root || typeof PRIVACY_POLICIES === "undefined") return;

  const policyId = root.dataset.policy;
  const bundle = PRIVACY_POLICIES[policyId];
  if (!bundle) return;

  const policy = bundle[lang] || bundle.en || bundle.fi;
  if (!policy) return;

  const titleEl = document.querySelector("title");
  if (titleEl && policy.metaTitle) titleEl.textContent = policy.metaTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && policy.metaDescription) {
    metaDesc.setAttribute("content", policy.metaDescription);
  }

  let html = `<h1>${escapeHtml(policy.title)}</h1>`;
  html += `<p class="policy-updated">${escapeHtml(policy.updated)}</p>`;
  html += renderPolicySections(policy.sections || []);

  if (policy.appsHeading) {
    html += `<section class="policy-section policy-apps">`;
    html += `<h2>${escapeHtml(policy.appsHeading)}</h2>`;
    if (policy.appsIntro) html += `<p>${escapeHtml(policy.appsIntro)}</p>`;
    if (policy.apps && policy.apps.length) {
      html += `<ul class="policy-app-list">`;
      policy.apps.forEach((app) => {
        html += `<li><a href="${escapeHtml(app.href)}">${escapeHtml(app.name)}</a>`;
        if (app.blurb) html += ` — ${escapeHtml(app.blurb)}`;
        html += `</li>`;
      });
      html += `</ul>`;
    }
    html += `</section>`;
  }

  html += `<p class="policy-nav">`;
  if (policy.backCompany) {
    html += `<a class="btn btn-ghost" href="privacy.html">${escapeHtml(policy.backCompany)}</a> `;
  }
  if (policy.backHome) {
    html += `<a class="btn btn-ghost" href="index.html">${escapeHtml(policy.backHome)}</a>`;
  }
  html += `</p>`;

  root.innerHTML = html;
}
