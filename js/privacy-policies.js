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
      updated: "Viimeksi päivitetty: 2026-10-04",
      sections: [
        {
          heading: "1. Yleistä",
          paragraphs: [
            "Tämä tietosuojakäytäntö kuvaa, miten IQSoftCore käsittelee henkilötietoja verkkosivustollaan ja yritystoiminnassaan. Rekisterinpitäjä on toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Suomi.",
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
            "Tuntilappu ja osa muista sovelluksista on suunniteltu niin, että data säilyy käyttäjän omalla laitteella. iqFleetSync on verkkopalvelu, ja sen tiedot kuvataan alla. Sovelluskohtaiset lausekkeet löytyvät myös alempaa.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync on verkkopalvelu osoitteessa fleetsync.iqsoftcore.fi. Asiakasyrityksen kalusto- ja käyttäjätiedot tallennetaan palveluun.",
            "Kun IqSoftCore käsittelee näitä tietoja asiakkaan lukuun, IqSoftCore on käsittelijä ja asiakas on rekisterinpitäjä. IqSoftCore on rekisterinpitäjä omien tili- ja laskutustietojensa osalta.",
          ],
          bullets: [
            "nimi ja sähköposti",
            "valinnainen puhelinnumero vain yhteystietona; sitä ei käytetä kirjautumiseen",
            "kirjautuminen sähköpostikoodilla, kutsulinkillä, passkeyllä tai jaetun puhelimen nimellä ja valinnaisella PIN-koodilla",
            "asiakkaan tallentamat kalusto-, ilmoitus- ja huoltotiedot, jos niissä on henkilötietoja",
            "ilmoitukset sähköpostilla, sovelluksessa tai selaimen ilmoituksena, jos käyttäjä sallii sen",
          ],
          after: [
            "Asiakas voi viedä tiedot ja anonymisoida henkilötiedot palvelussa. Pyynnön voi lähettää myös osoitteeseen info@iqsoftcore.fi. Tietoja ei myydä.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Paikallinen tuntikirjaus-sovellus (Google Play)." }],
      backHome: "Takaisin etusivulle",
    },
    en: {
      metaTitle: "IQSoftCore – Privacy Policy",
      metaDescription: "IQSoftCore company privacy policy and app-specific statements.",
      title: "Privacy Policy",
      updated: "Last updated: 2026-10-04",
      sections: [
        {
          heading: "1. General",
          paragraphs: [
            "This privacy policy describes how IQSoftCore handles personal data on its website and in its business activities. The controller is toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland.",
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
            "Tuntilappu and some other apps are designed so that data stays on the user’s own device. iqFleetSync is a web service, and its data is described below. App-specific statements are also listed further down.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync is a web service at fleetsync.iqsoftcore.fi. The customer company’s fleet and user data is stored in the service.",
            "When IqSoftCore processes that data for the customer, IqSoftCore is the processor and the customer is the controller. IqSoftCore is the controller of its own account and billing data.",
          ],
          bullets: [
            "name and email",
            "an optional phone number used only as a contact field; it is not used to sign in",
            "sign-in by email code, invite link, passkey, or a name and optional PIN on a shared phone",
            "fleet, report, and maintenance data the customer stores, where it contains personal data",
            "notifications by email, in the app, or as a browser notification if the user allows it",
          ],
          after: [
            "The customer can export data and anonymise personal data in the service. A request can also be sent to info@iqsoftcore.fi. The data is not sold.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Local time-tracking app (Google Play)." }],
      backHome: "Back to home",
    },
    sv: {
      metaTitle: "IQSoftCore – Integritetspolicy",
      metaDescription: "IQSoftCores företagsnivå-integritetspolicy och app-specifika villkor.",
      title: "Integritetspolicy",
      updated: "Senast uppdaterad: 2026-10-04",
      sections: [
        {
          heading: "1. Allmänt",
          paragraphs: [
            "Denna integritetspolicy beskriver hur IQSoftCore behandlar personuppgifter på sin webbplats och i sin verksamhet. Personuppgiftsansvarig är toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland.",
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
            "Tuntilappu och en del andra appar är utformade så att data stannar på användarens egen enhet. iqFleetSync är en webbtjänst, och dess uppgifter beskrivs nedan. App-specifika texter finns också längre ner.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync är en webbtjänst på fleetsync.iqsoftcore.fi. Kundföretagets flott- och användaruppgifter sparas i tjänsten.",
            "När IqSoftCore behandlar dessa uppgifter för kunden är IqSoftCore personuppgiftsbiträde och kunden personuppgiftsansvarig. IqSoftCore är ansvarig för sina egna konto- och fakturauppgifter.",
          ],
          bullets: [
            "namn och e-post",
            "ett valfritt telefonnummer bara som kontaktfält; det används inte för inloggning",
            "inloggning med e-postkod, inbjudningslänk, passkey eller namn och valfri PIN på en delad telefon",
            "flott-, rapport- och underhållsuppgifter som kunden sparar, om de innehåller personuppgifter",
            "aviseringar via e-post, i appen eller som webbläsaravisering om användaren tillåter det",
          ],
          after: [
            "Kunden kan exportera uppgifter och anonymisera personuppgifter i tjänsten. En begäran kan också skickas till info@iqsoftcore.fi. Uppgifterna säljs inte.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokal tidrapporteringsapp (Google Play)." }],
      backHome: "Tillbaka till startsidan",
    },
    no: {
      metaTitle: "IQSoftCore – Personvernerklæring",
      metaDescription: "IQSoftCores personvernerklæring på bedriftsnivå og app-spesifikke erklæringer.",
      title: "Personvernerklæring",
      updated: "Sist oppdatert: 2026-10-04",
      sections: [
        {
          heading: "1. Generelt",
          paragraphs: [
            "Denne personvernerklæringen beskriver hvordan IQSoftCore behandler personopplysninger på nettstedet og i virksomheten. Behandlingsansvarlig er toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland.",
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
            "Tuntilappu og noen andre apper er laget slik at data blir på brukerens egen enhet. iqFleetSync er en nettjeneste, og opplysningene om den står nedenfor. App-spesifikke tekster finnes også lenger ned.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync er en nettjeneste på fleetsync.iqsoftcore.fi. Kundebedriftens flåte- og brukeropplysninger lagres i tjenesten.",
            "Når IqSoftCore behandler disse opplysningene for kunden, er IqSoftCore databehandler og kunden behandlingsansvarlig. IqSoftCore er behandlingsansvarlig for egne konto- og fakturaopplysninger.",
          ],
          bullets: [
            "navn og e-post",
            "et valgfritt telefonnummer bare som kontaktfelt; det brukes ikke til innlogging",
            "innlogging med e-postkode, invitasjonslenke, passkey eller navn og valgfri PIN på en delt telefon",
            "flåte-, rapport- og vedlikeholdsdata kunden lagrer, hvis de inneholder personopplysninger",
            "varsler på e-post, i appen eller som nettleservarsel hvis brukeren tillater det",
          ],
          after: [
            "Kunden kan eksportere data og anonymisere personopplysninger i tjenesten. En forespørsel kan også sendes til info@iqsoftcore.fi. Opplysningene selges ikke.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokal timeføringsapp (Google Play)." }],
      backHome: "Tilbake til forsiden",
    },
    da: {
      metaTitle: "IQSoftCore – Privatlivspolitik",
      metaDescription: "IQSoftCores privatlivspolitik på virksomhedsniveau og app-specifikke erklæringer.",
      title: "Privatlivspolitik",
      updated: "Senest opdateret: 2026-10-04",
      sections: [
        {
          heading: "1. Generelt",
          paragraphs: [
            "Denne privatlivspolitik beskriver, hvordan IQSoftCore behandler personoplysninger på sit websted og i sin virksomhed. Dataansvarlig er toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland.",
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
            "Tuntilappu og nogle andre apps er designet, så data forbliver på brugerens egen enhed. iqFleetSync er en webtjeneste, og dens oplysninger beskrives nedenfor. App-specifikke tekster findes også længere nede.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync er en webtjeneste på fleetsync.iqsoftcore.fi. Kundens flåde- og brugeroplysninger gemmes i tjenesten.",
            "Når IqSoftCore behandler disse oplysninger for kunden, er IqSoftCore databehandler, og kunden er dataansvarlig. IqSoftCore er dataansvarlig for egne konto- og fakturaoplysninger.",
          ],
          bullets: [
            "navn og e-mail",
            "et valgfrit telefonnummer kun som kontaktfelt; det bruges ikke til login",
            "login med e-mailkode, invitationslink, passkey eller navn og valgfri PIN på en delt telefon",
            "flåde-, rapport- og vedligeholdelsesdata som kunden gemmer, hvis de indeholder personoplysninger",
            "beskeder via e-mail, i appen eller som browserbesked, hvis brugeren tillader det",
          ],
          after: [
            "Kunden kan eksportere data og anonymisere personoplysninger i tjenesten. En anmodning kan også sendes til info@iqsoftcore.fi. Oplysningerne sælges ikke.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokal timeregistreringsapp (Google Play)." }],
      backHome: "Tilbage til forsiden",
    },
    de: {
      metaTitle: "IQSoftCore – Datenschutzerklärung",
      metaDescription: "Unternehmensbezogene Datenschutzerklärung von IQSoftCore und app-spezifische Hinweise.",
      title: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: 2026-10-04",
      sections: [
        {
          heading: "1. Allgemeines",
          paragraphs: [
            "Diese Datenschutzerklärung beschreibt, wie IQSoftCore personenbezogene Daten auf seiner Website und in seiner Geschäftstätigkeit verarbeitet. Verantwortlicher ist toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finnland.",
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
            "Tuntilappu und einige andere Apps sind so gestaltet, dass Daten auf dem Gerät des Nutzers bleiben. iqFleetSync ist ein Webdienst, und seine Daten werden unten beschrieben. App-spezifische Texte stehen auch weiter unten.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync ist ein Webdienst unter fleetsync.iqsoftcore.fi. Fuhrpark- und Benutzerdaten des Kundenunternehmens werden im Dienst gespeichert.",
            "Wenn IqSoftCore diese Daten für den Kunden verarbeitet, ist IqSoftCore Auftragsverarbeiter und der Kunde Verantwortlicher. IqSoftCore ist Verantwortlicher der eigenen Konto- und Rechnungsdaten.",
          ],
          bullets: [
            "Name und E-Mail",
            "eine optionale Telefonnummer nur als Kontaktfeld; sie wird nicht zur Anmeldung verwendet",
            "Anmeldung mit E-Mail-Code, Einladungslink, Passkey oder Name und optionaler PIN an einem gemeinsamen Telefon",
            "Fuhrpark-, Meldungs- und Wartungsdaten, die der Kunde speichert, soweit sie personenbezogene Daten enthalten",
            "Benachrichtigungen per E-Mail, in der App oder als Browser-Hinweis, wenn der Nutzer das erlaubt",
          ],
          after: [
            "Der Kunde kann Daten exportieren und personenbezogene Daten im Dienst anonymisieren. Eine Anfrage kann auch an info@iqsoftcore.fi gesendet werden. Die Daten werden nicht verkauft.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokale Zeiterfassungs-App (Google Play)." }],
      backHome: "Zurück zur Startseite",
    },
    es: {
      metaTitle: "IQSoftCore – Política de privacidad",
      metaDescription: "Política de privacidad corporativa de IQSoftCore y declaraciones por aplicación.",
      title: "Política de privacidad",
      updated: "Última actualización: 2026-10-04",
      sections: [
        {
          heading: "1. General",
          paragraphs: [
            "Esta política de privacidad describe cómo IQSoftCore trata los datos personales en su sitio web y en su actividad. El responsable es toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia.",
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
            "Tuntilappu y algunas otras apps están diseñadas para que los datos permanezcan en el dispositivo del usuario. iqFleetSync es un servicio web, y sus datos se describen abajo. Los textos de cada app están también más abajo.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync es un servicio web en fleetsync.iqsoftcore.fi. Los datos de flota y de usuarios de la empresa cliente se guardan en el servicio.",
            "Cuando IqSoftCore trata esos datos por cuenta del cliente, IqSoftCore es el encargado y el cliente es el responsable. IqSoftCore es responsable de sus propios datos de cuenta y de facturación.",
          ],
          bullets: [
            "nombre y correo",
            "un número de teléfono opcional usado solo como contacto; no se usa para entrar",
            "acceso con código de correo, enlace de invitación, passkey, o nombre y PIN opcional en un teléfono compartido",
            "datos de flota, avisos y mantenimiento que guarda el cliente, si contienen datos personales",
            "avisos por correo, dentro de la aplicación o del navegador si el usuario lo permite",
          ],
          after: [
            "El cliente puede exportar los datos y anonimizar los datos personales en el servicio. La solicitud también se puede enviar a info@iqsoftcore.fi. Los datos no se venden.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "App local de registro de horas (Google Play)." }],
      backHome: "Volver al inicio",
    },
    it: {
      metaTitle: "IQSoftCore – Informativa sulla privacy",
      metaDescription: "Informativa privacy aziendale di IQSoftCore e dichiarazioni per applicazione.",
      title: "Informativa sulla privacy",
      updated: "Ultimo aggiornamento: 2026-10-04",
      sections: [
        {
          heading: "1. Generale",
          paragraphs: [
            "La presente informativa descrive come IQSoftCore tratta i dati personali sul proprio sito e nella propria attività. Il titolare del trattamento è toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia.",
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
            "Tuntilappu e alcune altre app sono progettate affinché i dati restino sul dispositivo dell’utente. iqFleetSync è un servizio web e i suoi dati sono descritti sotto. I testi di ogni app sono anche più in basso.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync è un servizio web su fleetsync.iqsoftcore.fi. I dati di flotta e degli utenti dell’azienda cliente sono salvati nel servizio.",
            "Quando IqSoftCore tratta questi dati per conto del cliente, IqSoftCore è il responsabile del trattamento per conto terzi e il cliente è il titolare. IqSoftCore è titolare dei propri dati di account e di fatturazione.",
          ],
          bullets: [
            "nome ed e-mail",
            "un numero di telefono facoltativo usato solo come contatto; non si usa per accedere",
            "accesso con codice e-mail, link di invito, passkey, oppure nome e PIN facoltativo su un telefono condiviso",
            "dati di flotta, segnalazioni e manutenzione salvati dal cliente, se contengono dati personali",
            "notifiche per e-mail, nell’app o dal browser se l’utente lo consente",
          ],
          after: [
            "Il cliente può esportare i dati e anonimizzare i dati personali nel servizio. La richiesta si può inviare anche a info@iqsoftcore.fi. I dati non sono venduti.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "App locale di registrazione ore (Google Play)." }],
      backHome: "Torna alla home",
    },
    ja: {
      metaTitle: "IQSoftCore – プライバシーポリシー",
      metaDescription: "IQSoftCoreの企業向けプライバシーポリシーとアプリ別方針。",
      title: "プライバシーポリシー",
      updated: "最終更新日: 2026-10-04",
      sections: [
        {
          heading: "1. 概要",
          paragraphs: [
            "本プライバシーポリシーは、IQSoftCoreがウェブサイトおよび事業活動において個人データをどのように取り扱うかを説明します。管理者はフィンランドの個人事業主 toiminimi IqSoftCore（Y-tunnus 3658340-4、Siihtalantie 56, 62710 Kurejoki）です。",
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
            "Tuntilappu と一部のアプリは、データがユーザー自身の端末に残るよう設計されています。iqFleetSync はウェブサービスで、そのデータは下に記載します。アプリごとの文言も下にあります。",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync は fleetsync.iqsoftcore.fi のウェブサービスです。顧客企業の車両データとユーザーデータはサービスに保存されます。",
            "IqSoftCore がこれらのデータを顧客のために扱うとき、IqSoftCore は処理者、顧客は管理者です。IqSoftCore は自社のアカウントと請求データの管理者です。",
          ],
          bullets: [
            "氏名とメール",
            "連絡先としてだけの任意の電話番号。ログインには使いません",
            "メールコード、招待リンク、パスキー、または共用電話の氏名と任意のPINでのログイン",
            "顧客が保存する車両、報告、整備のデータ（個人データを含む場合）",
            "ユーザーが許可した場合の、メール、アプリ内、またはブラウザの通知",
          ],
          after: [
            "顧客はサービス内でデータを書き出し、個人データを匿名化できます。依頼は info@iqsoftcore.fi にも送れます。データは販売しません。",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "端末内の勤怠記録アプリ（Google Play）。" }],
      backHome: "ホームに戻る",
    },
    ko: {
      metaTitle: "IQSoftCore – 개인정보 처리방침",
      metaDescription: "IQSoftCore 기업 수준 개인정보 처리방침 및 앱별 방침.",
      title: "개인정보 처리방침",
      updated: "최종 업데이트: 2026-10-04",
      sections: [
        {
          heading: "1. 일반",
          paragraphs: [
            "본 개인정보 처리방침은 IQSoftCore가 웹사이트와 사업 활동에서 개인정보를 어떻게 처리하는지 설명합니다. 개인정보처리자는 핀란드의 개인사업자 toiminimi IqSoftCore(Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki)입니다.",
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
            "Tuntilappu와 일부 앱은 데이터가 사용자 기기에 남도록 설계되어 있습니다. iqFleetSync는 웹 서비스이며, 그 데이터는 아래에 설명합니다. 앱별 문구도 아래에 있습니다.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync는 fleetsync.iqsoftcore.fi 의 웹 서비스입니다. 고객 회사의 차량 데이터와 사용자 데이터는 서비스에 저장됩니다.",
            "IqSoftCore가 이 데이터를 고객을 위해 처리할 때 IqSoftCore는 수탁자이고 고객은 관리자입니다. IqSoftCore는 자신의 계정과 청구 데이터의 관리자입니다.",
          ],
          bullets: [
            "이름과 이메일",
            "연락처로만 쓰는 선택 전화번호. 로그인에는 쓰지 않습니다",
            "이메일 코드, 초대 링크, 패스키, 또는 공용 전화의 이름과 선택 PIN으로 로그인",
            "고객이 저장하는 차량, 보고, 정비 데이터(개인정보가 포함된 경우)",
            "사용자가 허용하면 이메일, 앱 안 또는 브라우저 알림",
          ],
          after: [
            "고객은 서비스에서 데이터를 내보내고 개인정보를 익명화할 수 있습니다. 요청은 info@iqsoftcore.fi 로도 보낼 수 있습니다. 데이터는 판매하지 않습니다.",
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
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "로컬 근무시간 기록 앱(Google Play)." }],
      backHome: "홈으로 돌아가기",
    },
    fr: {
      metaTitle: "IQSoftCore – Politique de confidentialité",
      metaDescription: "Politique de confidentialité d’IQSoftCore et déclarations par application.",
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 2026-10-04",
      sections: [
        {
          heading: "1. Généralités",
          paragraphs: [
            "Cette politique de confidentialité décrit la façon dont IQSoftCore traite les données personnelles sur son site web et dans ses activités. Le responsable du traitement est toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlande.",
            "Les applications individuelles (par ex. via Google Play) ont leurs propres politiques décrivant plus précisément le traitement de chaque application.",
          ],
        },
        {
          heading: "2. Site web",
          paragraphs: [
            "Notre site est une page de présentation statique. Nous n’utilisons ni analytique, ni publicité, ni cookies de suivi.",
            "Si vous nous contactez par e-mail, nous traitons les informations uniquement pour répondre à votre demande. Nous ne vendons ni ne partageons les coordonnées à des fins de marketing tiers.",
          ],
        },
        {
          heading: "3. Applications",
          paragraphs: [
            "Tuntilappu et certaines autres applications sont conçues pour que les données restent sur l’appareil de l’utilisateur. iqFleetSync est un service web, et ses données sont décrites ci-dessous. Les textes propres à chaque application figurent aussi plus bas.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync est un service web à l’adresse fleetsync.iqsoftcore.fi. Les données de parc et d’utilisateurs de l’entreprise cliente sont enregistrées dans le service.",
            "Lorsque IqSoftCore traite ces données pour le client, IqSoftCore est sous-traitant et le client est responsable du traitement. IqSoftCore est responsable de ses propres données de compte et de facturation.",
          ],
          bullets: [
            "nom et e-mail",
            "un numéro de téléphone facultatif utilisé seulement comme contact ; il ne sert pas à se connecter",
            "connexion par code e-mail, lien d’invitation, passkey, ou nom et PIN facultatif sur un téléphone partagé",
            "données de parc, de signalement et d’entretien enregistrées par le client, si elles contiennent des données personnelles",
            "notifications par e-mail, dans l’application ou par le navigateur si l’utilisateur l’autorise",
          ],
          after: [
            "Le client peut exporter les données et anonymiser les données personnelles dans le service. Une demande peut aussi être envoyée à info@iqsoftcore.fi. Les données ne sont pas vendues.",
          ],
        },
        {
          heading: "4. Contact",
          paragraphs: [
            "Questions de confidentialité : info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Politiques de confidentialité par application",
      appsIntro: "Les politiques suivantes concernent l’application indiquée :",
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Application locale de suivi du temps (Google Play)." }],
      backHome: "Retour à l’accueil",
    },
    pt: {
      metaTitle: "IQSoftCore – Política de Privacidade",
      metaDescription: "Política de privacidade da IQSoftCore e declarações por aplicativo.",
      title: "Política de Privacidade",
      updated: "Última atualização: 2026-10-04",
      sections: [
        {
          heading: "1. Geral",
          paragraphs: [
            "Esta política de privacidade descreve como a IQSoftCore trata dados pessoais em seu site e em suas atividades. O controlador é toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlândia.",
            "Aplicativos individuais (por exemplo, no Google Play) têm políticas próprias que descrevem o tratamento de cada app com mais detalhe.",
          ],
        },
        {
          heading: "2. Site",
          paragraphs: [
            "Nosso site é uma página estática de apresentação. Não usamos análise, publicidade nem cookies de rastreamento.",
            "Se você nos contatar por e-mail, processamos as informações apenas para atender à solicitação. Não vendemos nem compartilhamos contatos para marketing de terceiros.",
          ],
        },
        {
          heading: "3. Aplicativos",
          paragraphs: [
            "O Tuntilappu e alguns outros apps são projetados para que os dados permaneçam no dispositivo do usuário. O iqFleetSync é um serviço web, e os dados dele são descritos abaixo. Os textos de cada app também estão mais abaixo.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "O iqFleetSync é um serviço web em fleetsync.iqsoftcore.fi. Os dados de frota e de utilizadores da empresa cliente são guardados no serviço.",
            "Quando a IqSoftCore trata esses dados por conta do cliente, a IqSoftCore é a subcontratante e o cliente é o responsável. A IqSoftCore é responsável pelos seus próprios dados de conta e de faturação.",
          ],
          bullets: [
            "nome e e-mail",
            "um número de telefone opcional usado apenas como contacto; não é usado para entrar",
            "acesso com código de e-mail, link de convite, passkey, ou nome e PIN opcional num telefone partilhado",
            "dados de frota, avisos e manutenção que o cliente guarda, se contiverem dados pessoais",
            "avisos por e-mail, na aplicação ou no navegador, se o utilizador permitir",
          ],
          after: [
            "O cliente pode exportar os dados e anonimizar dados pessoais no serviço. O pedido também pode ser enviado para info@iqsoftcore.fi. Os dados não são vendidos.",
          ],
        },
        {
          heading: "4. Contato",
          paragraphs: [
            "Dúvidas de privacidade: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Políticas de privacidade por aplicativo",
      appsIntro: "As políticas a seguir se aplicam ao aplicativo indicado:",
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "App local de registro de horas (Google Play)." }],
      backHome: "Voltar ao início",
    },
    nl: {
      metaTitle: "IQSoftCore – Privacybeleid",
      metaDescription: "Bedrijfsprivacybeleid van IQSoftCore en app-specifieke verklaringen.",
      title: "Privacybeleid",
      updated: "Laatst bijgewerkt: 2026-10-04",
      sections: [
        {
          heading: "1. Algemeen",
          paragraphs: [
            "Dit privacybeleid beschrijft hoe IQSoftCore persoonsgegevens verwerkt op de website en in de bedrijfsactiviteiten. De verwerkingsverantwoordelijke is toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland.",
            "Afzonderlijke apps (bijv. via Google Play) hebben eigen privacyverklaringen die de gegevensverwerking van die app nauwkeuriger beschrijven.",
          ],
        },
        {
          heading: "2. Website",
          paragraphs: [
            "Onze website is een statische presentatiepagina. We gebruiken geen analytics, advertenties of trackingcookies.",
            "Als u ons per e-mail contacteert, verwerken we de gegevens alleen om uw vraag te behandelen. We verkopen of delen contactgegevens niet voor marketing van derden.",
          ],
        },
        {
          heading: "3. Apps",
          paragraphs: [
            "Tuntilappu en sommige andere apps zijn zo ontworpen dat data op het apparaat van de gebruiker blijft. iqFleetSync is een webdienst, en de gegevens daarvan staan hieronder. App-specifieke teksten staan ook verderop.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync is een webdienst op fleetsync.iqsoftcore.fi. Wagenpark- en gebruikersgegevens van het klantbedrijf worden in de dienst opgeslagen.",
            "Wanneer IqSoftCore deze gegevens voor de klant verwerkt, is IqSoftCore verwerker en de klant verwerkingsverantwoordelijke. IqSoftCore is verwerkingsverantwoordelijke voor de eigen account- en factuurgegevens.",
          ],
          bullets: [
            "naam en e-mail",
            "een optioneel telefoonnummer alleen als contactveld; het wordt niet gebruikt om in te loggen",
            "inloggen met e-mailcode, uitnodigingslink, passkey of naam en optionele pincode op een gedeelde telefoon",
            "wagenpark-, meldings- en onderhoudsgegevens die de klant opslaat, als daarin persoonsgegevens staan",
            "meldingen per e-mail, in de app of als browsermelding als de gebruiker dat toestaat",
          ],
          after: [
            "De klant kan gegevens exporteren en persoonsgegevens in de dienst anonimiseren. Een verzoek kan ook naar info@iqsoftcore.fi worden gestuurd. De gegevens worden niet verkocht.",
          ],
        },
        {
          heading: "4. Contact",
          paragraphs: [
            "Privacyvragen: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "App-specifieke privacyverklaringen",
      appsIntro: "De volgende verklaringen gelden voor de genoemde applicatie:",
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokale urenregistratie-app (Google Play)." }],
      backHome: "Terug naar home",
    },
    pl: {
      metaTitle: "IQSoftCore – Polityka prywatności",
      metaDescription: "Firmowa polityka prywatności IQSoftCore oraz oświadczenia dla aplikacji.",
      title: "Polityka prywatności",
      updated: "Ostatnia aktualizacja: 2026-10-04",
      sections: [
        {
          heading: "1. Informacje ogólne",
          paragraphs: [
            "Niniejsza polityka prywatności opisuje, w jaki sposób IQSoftCore przetwarza dane osobowe na stronie i w działalności. Administratorem jest toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia.",
            "Poszczególne aplikacje (np. w Google Play) mają własne polityki prywatności opisujące przetwarzanie danych danej aplikacji bardziej szczegółowo.",
          ],
        },
        {
          heading: "2. Strona internetowa",
          paragraphs: [
            "Nasza strona to statyczna witryna prezentacyjna. Nie używamy analityki, reklam ani plików cookie śledzących.",
            "Jeśli skontaktujesz się z nami e-mailem, przetwarzamy podane informacje wyłącznie w celu obsługi zapytania. Nie sprzedajemy ani nie udostępniamy danych kontaktowych do marketingu stron trzecich.",
          ],
        },
        {
          heading: "3. Aplikacje",
          paragraphs: [
            "Tuntilappu i część innych aplikacji jest zaprojektowana tak, aby dane pozostawały na urządzeniu użytkownika. iqFleetSync jest usługą internetową, a jej dane opisano poniżej. Teksty poszczególnych aplikacji są też niżej.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync jest usługą internetową pod adresem fleetsync.iqsoftcore.fi. Dane floty i użytkowników firmy klienta są zapisywane w usłudze.",
            "Gdy IqSoftCore przetwarza te dane na rzecz klienta, IqSoftCore jest podmiotem przetwarzającym, a klient administratorem. IqSoftCore jest administratorem własnych danych konta i rozliczeń.",
          ],
          bullets: [
            "imię i e-mail",
            "opcjonalny numer telefonu używany tylko jako kontakt; nie służy do logowania",
            "logowanie kodem e-mail, linkiem zaproszenia, passkey albo imieniem i opcjonalnym PIN-em na wspólnym telefonie",
            "dane floty, zgłoszeń i utrzymania zapisane przez klienta, jeśli zawierają dane osobowe",
            "powiadomienia e-mailem, w aplikacji albo w przeglądarce, jeśli użytkownik na to pozwoli",
          ],
          after: [
            "Klient może wyeksportować dane i zanonimizować dane osobowe w usłudze. Wniosek można też wysłać na info@iqsoftcore.fi. Danych się nie sprzedaje.",
          ],
        },
        {
          heading: "4. Kontakt",
          paragraphs: [
            "Pytania o prywatność: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Polityki prywatności aplikacji",
      appsIntro: "Poniższe polityki dotyczą wskazanej aplikacji:",
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokalna aplikacja ewidencji czasu pracy (Google Play)." }],
      backHome: "Powrót do strony głównej",
    },
    cs: {
      metaTitle: "IQSoftCore – Zásady ochrany osobních údajů",
      metaDescription: "Firemní zásady ochrany osobních údajů IQSoftCore a prohlášení pro aplikace.",
      title: "Zásady ochrany osobních údajů",
      updated: "Naposledy aktualizováno: 2026-10-04",
      sections: [
        {
          heading: "1. Obecné",
          paragraphs: [
            "Tyto zásady popisují, jak IQSoftCore zpracovává osobní údaje na webu a v rámci podnikání. Správcem je toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finsko.",
            "Jednotlivé aplikace (např. přes Google Play) mají vlastní zásady, které popisují zpracování dané aplikace podrobněji.",
          ],
        },
        {
          heading: "2. Webové stránky",
          paragraphs: [
            "Náš web je statická prezentační stránka. Nepoužíváme analytiku, reklamu ani sledovací cookies.",
            "Pokud nás kontaktujete e-mailem, zpracováváme údaje pouze kvůli vyřízení dotazu. Neprodáváme ani nesdílíme kontaktní údaje pro marketing třetích stran.",
          ],
        },
        {
          heading: "3. Aplikace",
          paragraphs: [
            "Tuntilappu a některé další aplikace jsou navrženy tak, aby data zůstala na zařízení uživatele. iqFleetSync je webová služba a její údaje jsou popsány níže. Texty jednotlivých aplikací jsou také níže.",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync je webová služba na adrese fleetsync.iqsoftcore.fi. Údaje o flotile a uživatelích zákaznické firmy se ukládají ve službě.",
            "Když IqSoftCore zpracovává tyto údaje pro zákazníka, je IqSoftCore zpracovatelem a zákazník správcem. IqSoftCore je správcem vlastních údajů o účtu a fakturaci.",
          ],
          bullets: [
            "jméno a e-mail",
            "volitelné telefonní číslo jen jako kontakt; k přihlášení se nepoužívá",
            "přihlášení e-mailovým kódem, odkazem na pozvánku, passkey nebo jménem a volitelným PIN na sdíleném telefonu",
            "údaje o flotile, hlášeních a údržbě, které zákazník uloží, pokud obsahují osobní údaje",
            "oznámení e-mailem, v aplikaci nebo v prohlížeči, pokud to uživatel povolí",
          ],
          after: [
            "Zákazník může údaje exportovat a osobní údaje ve službě anonymizovat. Žádost lze poslat také na info@iqsoftcore.fi. Údaje se neprodávají.",
          ],
        },
        {
          heading: "4. Kontakt",
          paragraphs: [
            "Dotazy k ochraně soukromí: info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "Zásady pro jednotlivé aplikace",
      appsIntro: "Následující zásady platí pro uvedenou aplikaci:",
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "Lokální aplikace evidence pracovní doby (Google Play)." }],
      backHome: "Zpět na úvod",
    },
    zh: {
      metaTitle: "IQSoftCore – 隐私政策",
      metaDescription: "IQSoftCore 公司级隐私政策及应用专属声明。",
      title: "隐私政策",
      updated: "最近更新：2026-10-04",
      sections: [
        {
          heading: "1. 概述",
          paragraphs: [
            "本隐私政策说明 IQSoftCore 如何在其网站及业务活动中处理个人数据。控制者为芬兰个体工商户 toiminimi IqSoftCore（Y-tunnus 3658340-4，Siihtalantie 56, 62710 Kurejoki）。",
            "各应用程序（例如通过 Google Play 分发的应用）有各自的隐私政策，更详细地说明该应用的数据处理。",
          ],
        },
        {
          heading: "2. 网站",
          paragraphs: [
            "我们的网站为静态介绍页。我们不使用分析、广告或跟踪 Cookie。",
            "若您通过电子邮件联系我们，我们仅出于处理该询问的目的处理您提供的信息。我们不会为第三方营销出售或共享联系方式。",
          ],
        },
        {
          heading: "3. 应用程序",
          paragraphs: [
            "Tuntilappu 和部分其他应用的设计使数据保留在用户自己的设备上。iqFleetSync 是网络服务，其数据在下面说明。各应用的文字也列在后面。",
          ],
        },
        {
          id: "iqfleetsync",
          heading: "iqFleetSync",
          paragraphs: [
            "iqFleetSync 是位于 fleetsync.iqsoftcore.fi 的网络服务。客户公司的车队数据和用户数据保存在服务中。",
            "当 IqSoftCore 为客户处理这些数据时，IqSoftCore 是处理者，客户是控制者。IqSoftCore 是其自身账户和账单数据的控制者。",
          ],
          bullets: [
            "姓名和电子邮件",
            "仅作为联系方式的可选电话号码；不用于登录",
            "通过电子邮件验证码、邀请链接、通行密钥，或共用电话上的姓名和可选 PIN 登录",
            "客户保存的车队、报告和维护数据（如果其中含有个人信息）",
            "在用户允许时，通过电子邮件、应用内或浏览器发送通知",
          ],
          after: [
            "客户可以在服务中导出数据并匿名化个人信息。请求也可以发送到 info@iqsoftcore.fi。数据不会出售。",
          ],
        },
        {
          heading: "4. 联系方式",
          paragraphs: [
            "隐私相关问题：info@iqsoftcore.fi",
          ],
        },
      ],
      appsHeading: "应用专属隐私政策",
      appsIntro: "以下政策适用于所列应用程序：",
      apps: [{ id: "tuntilappu", href: "privacy-tuntilappu.html", blurb: "本地工时记录应用（Google Play）。" }],
      backHome: "返回首页",
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

function resolveAppDisplayName(app, lang) {
  if (app.id === "tuntilappu" && typeof tuntilappuName === "function") {
    return tuntilappuName(lang);
  }
  return app.name || "";
}

function fillAppPlaceholders(text, appName) {
  return String(text || "").split("{app}").join(appName);
}

function renderPolicySections(sections, appName) {
  return sections
    .map((section) => {
      const idAttr = section.id ? ` id="${escapeHtml(section.id)}"` : "";
      let html = `<section class="policy-section"${idAttr}><h2>${escapeHtml(fillAppPlaceholders(section.heading, appName))}</h2>`;
      (section.paragraphs || []).forEach((p) => {
        html += `<p>${escapeHtml(fillAppPlaceholders(p, appName))}</p>`;
      });
      if (section.bullets && section.bullets.length) {
        html += `<ul>${section.bullets
          .map((item) => `<li>${escapeHtml(fillAppPlaceholders(item, appName))}</li>`)
          .join("")}</ul>`;
      }
      (section.after || []).forEach((p) => {
        html += `<p>${escapeHtml(fillAppPlaceholders(p, appName))}</p>`;
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

  const appName =
    policyId === "tuntilappu" && typeof tuntilappuName === "function"
      ? tuntilappuName(lang)
      : "Tuntilappu";

  const title = fillAppPlaceholders(policy.title, appName);
  const metaTitle = fillAppPlaceholders(policy.metaTitle, appName);
  const metaDescription = fillAppPlaceholders(policy.metaDescription, appName);

  const titleEl = document.querySelector("title");
  if (titleEl && metaTitle) titleEl.textContent = metaTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && metaDescription) {
    metaDesc.setAttribute("content", metaDescription);
  }

  let html = `<h1>${escapeHtml(title)}</h1>`;
  html += `<p class="policy-updated">${escapeHtml(policy.updated)}</p>`;
  html += renderPolicySections(policy.sections || [], appName);

  if (policy.appsHeading) {
    html += `<section class="policy-section policy-apps">`;
    html += `<h2>${escapeHtml(policy.appsHeading)}</h2>`;
    if (policy.appsIntro) html += `<p>${escapeHtml(policy.appsIntro)}</p>`;
    if (policy.apps && policy.apps.length) {
      html += `<ul class="policy-app-list">`;
      policy.apps.forEach((app) => {
        const name = resolveAppDisplayName(app, lang);
        html += `<li><a href="${escapeHtml(app.href)}">${escapeHtml(name)}</a>`;
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
