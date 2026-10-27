/**
 * iqFleetSync help center.
 * Clips live in videos/iqfleetsync/ as mp4 plus WebVTT tracks.
 * Speech is Finnish. A track exists for every site language: basename.<lang>.vtt.
 * See videos/README.md for the filenames.
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
    metaDescription: "Ohjevideot iqFleetSynciin. Puhe on suomeksi, tekstitys valitulla kielellä: QR-kirjautuminen, lukemat ja vikailmoitus, huoltohenkilön raportit, kutsut ja roolit sekä QR-tarrat.",
    title: "Ohjekeskus",
    kicker: "iqFleetSync",
    lead: "Lyhyet ohjevideot iqFleetSynciin. Puhe on suomeksi, tekstitys valitulla kielellä.",
    unsupported: "Selaimesi ei toista videota.",
    back: "Takaisin iqFleetSynciin",
    apps: "Tuotteet",
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
    metaDescription: "How-to videos for iqFleetSync. The speech is Finnish, with subtitles in the selected language: QR sign-in, readings and defect reports, workshop reports, invites and roles, and QR stickers.",
    title: "Help center",
    kicker: "iqFleetSync",
    lead: "Short how-to videos for iqFleetSync. The speech is Finnish, with subtitles in the selected language.",
    unsupported: "Your browser cannot play this video.",
    back: "Back to iqFleetSync",
    apps: "Products",
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
    metaDescription: "Instruktionsvideor för iqFleetSync. Talet är på finska och undertexterna på det valda språket: QR-inloggning, mätarställning och felanmälan, verkstadens rapporter, inbjudningar och roller samt QR-dekaler.",
    title: "Hjälpcenter",
    kicker: "iqFleetSync",
    lead: "Korta instruktionsvideor för iqFleetSync. Talet är på finska, och undertexterna är på det valda språket.",
    unsupported: "Din webbläsare kan inte spela videon.",
    back: "Tillbaka till iqFleetSync",
    apps: "Produkter",
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
  no: {
    metaTitle: "Hjelpesenter | iqFleetSync",
    metaDescription: "Instruksjonsvideoer for iqFleetSync. Talen er finsk og undertekstene på det valgte språket: QR-innlogging, målerstand og feilmelding, verkstedets rapporter, invitasjoner og roller samt QR-merker.",
    title: "Hjelpesenter",
    kicker: "iqFleetSync",
    lead: "Korte instruksjonsvideoer for iqFleetSync. Talen er finsk, og undertekstene er på det valgte språket.",
    unsupported: "Nettleseren din kan ikke spille av videoen.",
    back: "Tilbake til iqFleetSync",
    apps: "Produkter",
    home: "Forside",
    topics: {
      "qr-login": { title: "QR-innlogging for sjåføren", description: "Slik logger sjåføren inn ved å skanne maskinens QR-kode. På en ny telefon kommer først en e-postkode, deretter fingeravtrykk." },
      "readings-vs-defect": { title: "Målerstand eller feilmelding", description: "Registrer kilometer og timer, eller meld en feil. Service-hint-fargene viser tilstanden, og en enhet som ikke er kjørbar krever en beskrivelse." },
      "reports-work-order": { title: "Verkstedets rapporter", description: "Behandling av feilmeldinger, arbeidsordrer og registrering av vedlikehold." },
      "invites-roles": { title: "Administrator: invitasjoner og roller", description: "Inviter personer og velg en rolle for hver: Administrator, Vedlikehold eller Sjåfør." },
      "print-qr": { title: "Skrive ut QR-merker", description: "Merker til enhetene, så de kan skannes." },
    },
  },
  da: {
    metaTitle: "Hjælpecenter | iqFleetSync",
    metaDescription: "Vejledningsvideoer til iqFleetSync. Talen er finsk og underteksterne på det valgte sprog: QR-login, målerstand og fejlmelding, værkstedets rapporter, invitationer og roller samt QR-mærker.",
    title: "Hjælpecenter",
    kicker: "iqFleetSync",
    lead: "Korte vejledningsvideoer til iqFleetSync. Talen er finsk, og underteksterne er på det valgte sprog.",
    unsupported: "Din browser kan ikke afspille videoen.",
    back: "Tilbage til iqFleetSync",
    apps: "Produkter",
    home: "Forside",
    topics: {
      "qr-login": { title: "QR-login for chaufføren", description: "Sådan logger chaufføren ind ved at scanne maskinens QR-kode. På en ny telefon kommer først en e-mailkode, derefter fingeraftryk." },
      "readings-vs-defect": { title: "Målerstand eller fejlmelding", description: "Registrer kilometer og timer, eller meld en fejl. Service-hint-farverne viser tilstanden, og en enhed der ikke er køreklar kræver en beskrivelse." },
      "reports-work-order": { title: "Værkstedets rapporter", description: "Behandling af fejlmeldinger, arbejdsordrer og registrering af vedligehold." },
      "invites-roles": { title: "Administrator: invitationer og roller", description: "Inviter personer og vælg en rolle til hver: Administrator, Vedligehold eller Chauffør." },
      "print-qr": { title: "Udskrivning af QR-mærker", description: "Mærker til enhederne, så de kan scannes." },
    },
  },
  de: {
    metaTitle: "Hilfe | iqFleetSync",
    metaDescription: "Anleitungsvideos für iqFleetSync. Die Sprache ist Finnisch, die Untertitel sind in der gewählten Sprache: QR-Anmeldung, Zählerstände und Mängelmeldung, Werkstattberichte, Einladungen und Rollen sowie QR-Aufkleber.",
    title: "Hilfe",
    kicker: "iqFleetSync",
    lead: "Kurze Anleitungsvideos für iqFleetSync. Die Sprache ist Finnisch, die Untertitel sind in der gewählten Sprache.",
    unsupported: "Ihr Browser kann das Video nicht abspielen.",
    back: "Zurück zu iqFleetSync",
    apps: "Produkte",
    home: "Startseite",
    topics: {
      "qr-login": { title: "QR-Anmeldung für die fahrende Person", description: "So meldet sich die fahrende Person an, indem sie den QR-Code der Maschine scannt. Auf einem neuen Telefon kommt zuerst ein E-Mail-Code, danach der Fingerabdruck." },
      "readings-vs-defect": { title: "Zählerstand oder Mängelmeldung", description: "Kilometer und Stunden eintragen oder einen Mangel melden. Die Service-hint-Farben zeigen den Stand, und eine nicht fahrbereite Einheit braucht eine Beschreibung." },
      "reports-work-order": { title: "Berichte der Werkstatt", description: "Mängelmeldungen bearbeiten, Arbeitsaufträge und die Erfassung der Wartung." },
      "invites-roles": { title: "Administration: Einladungen und Rollen", description: "Personen einladen und für jede eine Rolle wählen: Administration, Werkstatt oder Fahrer." },
      "print-qr": { title: "QR-Aufkleber drucken", description: "Aufkleber für die Einheiten, damit sie gescannt werden können." },
    },
  },
  es: {
    metaTitle: "Centro de ayuda | iqFleetSync",
    metaDescription: "Vídeos de iqFleetSync. El audio es en finés y los subtítulos están en el idioma elegido: acceso con QR, lecturas y avisos de avería, informes del taller, invitaciones y roles, y etiquetas QR.",
    title: "Centro de ayuda",
    kicker: "iqFleetSync",
    lead: "Vídeos cortos de iqFleetSync. El audio es en finés y los subtítulos están en el idioma elegido.",
    unsupported: "Su navegador no puede reproducir el vídeo.",
    back: "Volver a iqFleetSync",
    apps: "Productos",
    home: "Inicio",
    topics: {
      "qr-login": { title: "Acceso con QR para el conductor", description: "Cómo entra el conductor escaneando el código QR de la máquina. En un teléfono nuevo llega primero un código por correo y después la huella." },
      "readings-vs-defect": { title: "Lecturas o aviso de avería", description: "Registre kilómetros y horas, o avise de una avería. Los colores de Service-hint muestran el estado, y una unidad que no puede circular necesita una descripción." },
      "reports-work-order": { title: "Informes del taller", description: "Tratamiento de avisos de avería, órdenes de trabajo y registro del mantenimiento." },
      "invites-roles": { title: "Administración: invitaciones y roles", description: "Invite a las personas y elija un rol para cada una: Administración, Mantenimiento o Conductor." },
      "print-qr": { title: "Impresión de etiquetas QR", description: "Etiquetas para las unidades, para poder escanearlas." },
    },
  },
  it: {
    metaTitle: "Guida | iqFleetSync",
    metaDescription: "Video per iqFleetSync. Il parlato è in finlandese e i sottotitoli sono nella lingua scelta: accesso con QR, letture e segnalazione guasti, rapporti dell’officina, inviti e ruoli, etichette QR.",
    title: "Guida",
    kicker: "iqFleetSync",
    lead: "Brevi video per iqFleetSync. Il parlato è in finlandese e i sottotitoli sono nella lingua scelta.",
    unsupported: "Il browser non può riprodurre il video.",
    back: "Torna a iqFleetSync",
    apps: "Prodotti",
    home: "Home",
    topics: {
      "qr-login": { title: "Accesso QR per il conducente", description: "Come il conducente accede scansionando il codice QR della macchina. Su un telefono nuovo arriva prima un codice e-mail, poi l’impronta." },
      "readings-vs-defect": { title: "Letture o segnalazione guasto", description: "Registra chilometri e ore, oppure segnala un guasto. I colori Service-hint mostrano lo stato, e un’unità non idonea alla circolazione richiede una descrizione." },
      "reports-work-order": { title: "Rapporti dell’officina", description: "Gestione delle segnalazioni guasto, ordini di lavoro e registrazione della manutenzione." },
      "invites-roles": { title: "Amministratore: inviti e ruoli", description: "Invita le persone e scegli un ruolo per ciascuna: Amministratore, Officina o Conducente." },
      "print-qr": { title: "Stampa delle etichette QR", description: "Etichette per le unità, così si possono scansionare." },
    },
  },
  fr: {
    metaTitle: "Aide | iqFleetSync",
    metaDescription: "Vidéos pour iqFleetSync. La voix est en finnois et les sous-titres sont dans la langue choisie : connexion QR, relevés et signalement de panne, rapports d’atelier, invitations et rôles, étiquettes QR.",
    title: "Aide",
    kicker: "iqFleetSync",
    lead: "Courtes vidéos pour iqFleetSync. La voix est en finnois et les sous-titres sont dans la langue choisie.",
    unsupported: "Votre navigateur ne peut pas lire la vidéo.",
    back: "Retour à iqFleetSync",
    apps: "Produits",
    home: "Accueil",
    topics: {
      "qr-login": { title: "Connexion QR pour le conducteur", description: "Comment le conducteur se connecte en scannant le code QR de la machine. Sur un nouveau téléphone, un code e-mail arrive d’abord, puis l’empreinte." },
      "readings-vs-defect": { title: "Relevés ou signalement de panne", description: "Saisissez les kilomètres et les heures, ou signalez une panne. Les couleurs Service-hint montrent l’état, et une unité qui ne peut pas rouler exige une description." },
      "reports-work-order": { title: "Rapports de l’atelier", description: "Traitement des signalements, ordres de travail et enregistrement de l’entretien." },
      "invites-roles": { title: "Administrateur : invitations et rôles", description: "Invitez les personnes et choisissez un rôle pour chacune : Administrateur, Entretien ou Conducteur." },
      "print-qr": { title: "Impression des étiquettes QR", description: "Étiquettes pour les unités, afin de pouvoir les scanner." },
    },
  },
  et: {
    metaTitle: "Abikeskus | iqFleetSync",
    metaDescription: "Juhendvideod iqFleetSyncile. Kõne on soome keeles, subtiitrid valitud keeles: QR-sisselogimine, näidud ja rikketeade, töökoja aruanded, kutsed ja rollid ning QR-kleebised.",
    title: "Abikeskus",
    kicker: "iqFleetSync",
    lead: "Lühikesed juhendvideod iqFleetSyncile. Kõne on soome keeles, subtiitrid valitud keeles.",
    unsupported: "Sinu brauser ei esita videot.",
    back: "Tagasi iqFleetSynci",
    apps: "Tooted",
    home: "Avaleht",
    topics: {
      "qr-login": { title: "QR-sisselogimine juhile", description: "Kuidas juht logib sisse masina QR-koodi skannides. Uuel telefonil tuleb esmalt e-posti kood, seejärel sõrmejälg." },
      "readings-vs-defect": { title: "Näidud või rikketeade", description: "Kirjuta kilomeetrid ja tunnid või teata rikkest. Service-hint-värvid näitavad seisu, ja mittesõidukõlblik üksus vajab kirjeldust." },
      "reports-work-order": { title: "Töökoja aruanded", description: "Rikketeadete käsitlemine, töökäsud ja hoolduse kirja panemine." },
      "invites-roles": { title: "Haldur: kutsed ja rollid", description: "Kutsu inimesed ja vali igaühele roll: Haldur, Hooldus või Juht." },
      "print-qr": { title: "QR-kleebiste printimine", description: "Kleebised üksustele, et neid saaks skannida." },
    },
  },
  lv: {
    metaTitle: "Palīdzība | iqFleetSync",
    metaDescription: "Video iqFleetSync. Runā somiski, subtitri ir izvēlētajā valodā: QR pieteikšanās, rādījumi un defekta ziņojums, darbnīcas atskaites, ielūgumi un lomas, QR uzlīmes.",
    title: "Palīdzība",
    kicker: "iqFleetSync",
    lead: "Īsi pamācību video iqFleetSync. Runā somiski, subtitri ir izvēlētajā valodā.",
    unsupported: "Pārlūks nevar atskaņot video.",
    back: "Atpakaļ uz iqFleetSync",
    apps: "Produkti",
    home: "Sākums",
    topics: {
      "qr-login": { title: "QR pieteikšanās vadītājam", description: "Kā vadītājs piesakās, skenējot mašīnas QR kodu. Jaunā tālrunī vispirms pienāk e-pasta kods, pēc tam pirksta nospiedums." },
      "readings-vs-defect": { title: "Rādījumi vai defekta ziņojums", description: "Ierakstiet kilometrus un stundas vai ziņojiet par defektu. Service-hint krāsas rāda stāvokli, un vienībai, kas nav braucama, vajag aprakstu." },
      "reports-work-order": { title: "Darbnīcas atskaites", description: "Defektu ziņojumu apstrāde, darba uzdevumi un apkopes ierakstīšana." },
      "invites-roles": { title: "Administrators: ielūgumi un lomas", description: "Uzaiciniet cilvēkus un katram izvēlieties lomu: Administrators, Apkope vai Vadītājs." },
      "print-qr": { title: "QR uzlīmju drukāšana", description: "Uzlīmes vienībām, lai tās varētu skenēt." },
    },
  },
  lt: {
    metaTitle: "Pagalba | iqFleetSync",
    metaDescription: "iqFleetSync vaizdo įrašai. Kalba yra suomių, subtitrai pasirinkta kalba: QR prisijungimas, rodmenys ir gedimo pranešimas, dirbtuvių ataskaitos, kvietimai ir rolės, QR lipdukai.",
    title: "Pagalba",
    kicker: "iqFleetSync",
    lead: "Trumpi iqFleetSync vaizdo įrašai. Kalba yra suomių, subtitrai pasirinkta kalba.",
    unsupported: "Naršyklė negali paleisti vaizdo įrašo.",
    back: "Atgal į iqFleetSync",
    apps: "Produktai",
    home: "Pradžia",
    topics: {
      "qr-login": { title: "QR prisijungimas vairuotojui", description: "Kaip vairuotojas prisijungia nuskenavęs mašinos QR kodą. Naujame telefone pirmiausia ateina el. pašto kodas, tada piršto atspaudas." },
      "readings-vs-defect": { title: "Rodmenys arba gedimo pranešimas", description: "Įrašykite kilometrus ir valandas arba praneškite apie gedimą. Service-hint spalvos rodo būseną, o nevažiuojamam vienetui reikia aprašymo." },
      "reports-work-order": { title: "Dirbtuvių ataskaitos", description: "Gedimų pranešimų tvarkymas, darbo užsakymai ir priežiūros įrašymas." },
      "invites-roles": { title: "Administratorius: kvietimai ir rolės", description: "Pakvieskite žmones ir kiekvienam parinkite rolę: Administratorius, Priežiūra arba Vairuotojas." },
      "print-qr": { title: "QR lipdukų spausdinimas", description: "Lipdukai vienetams, kad juos būtų galima nuskaityti." },
    },
  },
  pl: {
    metaTitle: "Pomoc | iqFleetSync",
    metaDescription: "Filmy iqFleetSync. Mowa jest po fińsku, a napisy w wybranym języku: logowanie QR, odczyty i zgłoszenie usterki, raporty warsztatu, zaproszenia i role oraz naklejki QR.",
    title: "Pomoc",
    kicker: "iqFleetSync",
    lead: "Krótkie filmy iqFleetSync. Mowa jest po fińsku, a napisy w wybranym języku.",
    unsupported: "Przeglądarka nie odtworzy tego filmu.",
    back: "Wróć do iqFleetSync",
    apps: "Produkty",
    home: "Strona główna",
    topics: {
      "qr-login": { title: "Logowanie QR dla kierowcy", description: "Jak kierowca loguje się, skanując kod QR maszyny. Na nowym telefonie najpierw przychodzi kod e-mail, potem odcisk palca." },
      "readings-vs-defect": { title: "Odczyty albo zgłoszenie usterki", description: "Wpisz kilometry i motogodziny albo zgłoś usterkę. Kolory Service-hint pokazują stan, a jednostka niezdolna do jazdy wymaga opisu." },
      "reports-work-order": { title: "Raporty warsztatu", description: "Obsługa zgłoszeń usterek, zlecenia pracy i zapis serwisu." },
      "invites-roles": { title: "Administrator: zaproszenia i role", description: "Zaproś osoby i wybierz rolę dla każdej: Administrator, Serwis albo Kierowca." },
      "print-qr": { title: "Druk naklejek QR", description: "Naklejki na jednostki, żeby można je było skanować." },
    },
  },
  cs: {
    metaTitle: "Nápověda | iqFleetSync",
    metaDescription: "Videa pro iqFleetSync. Řeč je finsky, titulky ve zvoleném jazyce: přihlášení QR, odečty a hlášení závady, hlášení dílny, pozvánky a role a QR štítky.",
    title: "Nápověda",
    kicker: "iqFleetSync",
    lead: "Krátká videa pro iqFleetSync. Řeč je finsky, titulky ve zvoleném jazyce.",
    unsupported: "Prohlížeč toto video nepřehrává.",
    back: "Zpět na iqFleetSync",
    apps: "Produkty",
    home: "Domů",
    topics: {
      "qr-login": { title: "Přihlášení QR pro řidiče", description: "Jak se řidič přihlásí naskenováním QR kódu stroje. Na novém telefonu přijde nejdřív e-mailový kód, potom otisk prstu." },
      "readings-vs-defect": { title: "Odečty nebo hlášení závady", description: "Zapište kilometry a motohodiny, nebo nahlaste závadu. Barvy Service-hint ukazují stav a jednotka, která nemůže jet, potřebuje popis." },
      "reports-work-order": { title: "Hlášení dílny", description: "Vyřizování hlášení závad, pracovní příkazy a zápis údržby." },
      "invites-roles": { title: "Správce: pozvánky a role", description: "Pozvěte osoby a každé zvolte roli: Správce, Údržba nebo Řidič." },
      "print-qr": { title: "Tisk QR štítků", description: "Štítky na jednotky, aby šly naskenovat." },
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

const HELP_OG_LOCALE = {
  fi: "fi_FI",
  sv: "sv_SE",
  no: "nb_NO",
  da: "da_DK",
  de: "de_DE",
  en: "en_US",
  es: "es_ES",
  it: "it_IT",
  fr: "fr_FR",
  et: "et_EE",
  lv: "lv_LV",
  lt: "lt_LT",
  pl: "pl_PL",
  cs: "cs_CZ",
};

function syncHelpSocial(lang, title, description) {
  const set = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute("content", value);
  };
  set('meta[property="og:title"]', title);
  set('meta[property="og:description"]', description);
  set('meta[name="twitter:title"]', title);
  set('meta[name="twitter:description"]', description);
  set('meta[property="og:locale"]', HELP_OG_LOCALE[lang] || "en_US");
}

const CAPTION_LANGS = [
  ["fi", "Suomi"],
  ["sv", "Svenska"],
  ["no", "Norsk"],
  ["da", "Dansk"],
  ["de", "Deutsch"],
  ["en", "English"],
  ["es", "Español"],
  ["it", "Italiano"],
  ["fr", "Français"],
  ["et", "Eesti"],
  ["lv", "Latviešu"],
  ["lt", "Lietuvių"],
  ["pl", "Polski"],
  ["cs", "Čeština"],
];

function preferredCaptionLang(lang) {
  if (CAPTION_LANGS.some(([code]) => code === lang)) return lang;
  if (lang) return "en";
  return "fi";
}

function captionTracksHtml(src, lang) {
  const base = String(src || "").replace(/\.mp4$/i, "");
  const preferred = preferredCaptionLang(lang);
  return CAPTION_LANGS.map(([code, label]) => {
    const isDefault = code === preferred ? " default" : "";
    return `<track kind="subtitles" src="${escapeHelpHtml(base)}.${code}.vtt" srclang="${code}" label="${escapeHelpHtml(label)}"${isDefault} />`;
  }).join("\n      ");
}

function syncCaptionTracks(lang) {
  const order = [preferredCaptionLang(lang), "en", "fi"];
  document.querySelectorAll("video").forEach((video) => {
    const tracks = video.textTracks;
    if (!tracks || tracks.length === 0) return;
    let chosen = null;
    for (const code of order) {
      for (let i = 0; i < tracks.length; i += 1) {
        const trackLang = String(tracks[i].language || "").toLowerCase();
        if (trackLang === code || trackLang.indexOf(code + "-") === 0) {
          chosen = tracks[i];
          break;
        }
      }
      if (chosen) break;
    }
    if (!chosen) return;
    for (let i = 0; i < tracks.length; i += 1) {
      tracks[i].mode = tracks[i] === chosen ? "showing" : "hidden";
    }
  });
}

function helpMediaHtml(item, topic, unsupportedLabel, lang) {
  const title = escapeHelpHtml(topic.title);
  return `<video class="help-player" controls playsinline preload="metadata" poster="assets/iqfleetsync-icon-512.png" aria-label="${title}" title="${title}">
      <source src="${escapeHelpHtml(item.src)}" type="video/mp4" />
      ${captionTracksHtml(item.src, lang)}
      ${escapeHelpHtml(unsupportedLabel)}
    </video>`;
}

function renderHelpCenter(lang) {
  const root = document.getElementById("help-root");
  if (!root || typeof HELP_CENTER === "undefined") return;

  const resolvedLang = HELP_CENTER[lang] ? lang : "en";
  const page = HELP_CENTER[resolvedLang];
  const embedded = root.dataset.embedded === "true";
  if (!embedded) {
    const titleEl = document.querySelector("title");
    if (titleEl) titleEl.textContent = page.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);
    syncHelpSocial(resolvedLang, page.metaTitle, page.metaDescription);
  }
  const heading = embedded ? "h2" : "h1";

  const supportCard = typeof supportAssistantCardHtml === "function" ? supportAssistantCardHtml(lang) : "";
  const cards = HELP_MEDIA.map((item) => {
    const topic = page.topics[item.id];
    if (!topic) return "";
    return `<article class="help-card" id="${escapeHelpHtml(item.id)}">
      <h2>${escapeHelpHtml(topic.title)}</h2>
      <p>${escapeHelpHtml(topic.description)}</p>
      ${helpMediaHtml(item, topic, page.unsupported, resolvedLang)}
    </article>`;
  }).join("");

  const backHref = embedded ? "#esittely" : "iqfleetsync.html";
  root.innerHTML = `<div class="product-heading">
      <img class="product-icon" src="assets/iqfleetsync-icon.svg" width="72" height="72" alt="" />
      <div>
        <p class="help-kicker">${escapeHelpHtml(page.kicker)}</p>
        <${heading} id="help-title">${escapeHelpHtml(page.title)}</${heading}>
      </div>
    </div>
    <p>${escapeHelpHtml(page.lead)}</p>
    <div class="help-list">${cards}${supportCard}</div>
    ${typeof workshopGuidesHtml === "function" ? workshopGuidesHtml(lang) : ""}
    <p class="policy-nav">
      <a class="btn btn-ghost" href="${backHref}">${escapeHelpHtml(page.back)}</a>
      <a class="btn btn-ghost" href="tuotteet.html">${escapeHelpHtml(page.apps)}</a>
      <a class="btn btn-ghost" href="index.html">${escapeHelpHtml(page.home)}</a>
    </p>`;
}
