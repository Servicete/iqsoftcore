/**
 * iqFleetSync privacy notice (GDPR), rendered inside privacy.html#iqfleetsync.
 * Plain language. Claims stay within what the service actually does.
 */
const FLEETSYNC_PRIVACY = {
  fi: {
    metaTitle: "iqFleetSync – Tietosuojaseloste | IQSoftCore",
    metaDescription: "iqFleetSyncin tietosuojaseloste. Rekisterinpitäjä ja käsittelijä, tiedot, tarkoitukset, alihankkijat ja oikeudet.",
    title: "iqFleetSync – tietosuojaseloste",
    updated: "Päivitetty 2026-10-05.",
    backFleet: "iqFleetSync",
    backCompany: "Yrityksen tietosuoja",
    backHome: "Etusivu",
    sections: [
      {
        heading: "1. Kuka vastaa tiedoista",
        paragraphs: [
          "Tämä seloste koskee palvelua osoitteessa fleetsync.iqsoftcore.fi.",
          "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Suomi, on rekisterinpitäjä asiakasyrityksen omien tilitietojen osalta. Näitä ovat esimerkiksi sopimus, laskutusyhteys ja tilaus.",
          "Asiakasyritys on rekisterinpitäjä omien työntekijöidensä ja kalustotietojensa osalta. IqSoftCore on näiden tietojen käsittelijä. Tietojenkäsittelysopimus (DPA) toimitetaan pyynnöstä.",
          "Yhteys tietosuoja-asioissa: jarno@iqsoftcore.fi.",
        ],
      },
      {
        heading: "2. Mitä tietoja käsitellään",
        paragraphs: ["Palvelussa voidaan käsitellä seuraavia tietoja:"],
        bullets: [
          "nimi, sähköposti, valinnainen puhelinnumero ja rooli",
          "kirjautumisen ja passkeyn tekniset tiedot",
          "jaetun puhelimen PIN tiivisteenä tai salattuna",
          "yksiköiden tiedot, raportit, kuvat, vikailmoitukset ja lukemat",
          "audit-loki",
          "laskutustiedot Stripen kautta; kortin numeroa käsittelee vain Stripe, eikä IqSoftCore tallenna sitä",
        ],
      },
      {
        heading: "3. Miksi ja millä perusteella",
        paragraphs: [
          "Asiakasyrityksen tiliä ja palvelun toimittamista hoidetaan sopimuksen perusteella.",
          "Kalusto- ja työntekijätietoja käsitellään vain palvelun tuottamiseksi asiakasyrityksen lukuun. Asiakasyritys päättää näiden tietojen tarkoituksesta.",
          "Laskutus ja kirjanpito perustuvat sopimukseen ja lakisääteiseen velvoitteeseen säilyttää laskut.",
          "Kirjautumisen turvallisuus ja audit-loki perustuvat oikeutettuun etuun pitää palvelu toimivana ja turvallisena.",
          "Puhelinnumeroa käytetään vain yhteystietona, jos se on annettu. Sillä ei kirjauduta.",
          "Tietoja ei myydä.",
        ],
      },
      {
        heading: "4. Käsittelijät",
        paragraphs: [
          "Palvelun tiedot sijaitsevat EU:ssa. Tietokanta ja kirjautuminen ovat Supabasen EU-alueella. Sovellus toimii Vercelissa.",
        ],
        bullets: [
          "Supabase: tietokanta ja kirjautuminen, EU-alue",
          "Vercel: sovelluksen hosting",
          "Brevo: sähköpostin lähetys",
          "Stripe: maksut; korttitiedot vain Stripella",
        ],
      },
      {
        heading: "5. Säilytys",
        paragraphs: [
          "Tietoja säilytetään, kun tilaus on voimassa.",
          "Arkistoidut kohteet säilyvät historiana.",
          "Tiedot poistetaan pyynnöstä tai tilauksen päätyttyä. Laskutustiedoista säilytetään se, minkä kirjanpitolaki vaatii.",
        ],
      },
      {
        heading: "6. Rekisteröidyn oikeudet",
        paragraphs: [
          "Sinulla on oikeus saada pääsy tietoihin, pyytää oikaisua tai poistoa, rajoittaa käsittelyä, siirtää tiedot ja vastustaa käsittelyä, kun peruste sen sallii.",
          "Työntekijän tiedoissa rekisterinpitäjä on työnantajayritys. Pyyntö kannattaa tehdä ensin sinne. IqSoftCore auttaa asiakasyritystä vastaamaan.",
          "Pyynnön voi lähettää osoitteeseen jarno@iqsoftcore.fi.",
        ],
      },
      {
        heading: "7. Evästeet",
        paragraphs: [
          "Palvelu käyttää vain välttämättömiä istunto- ja organisaatioevästeitä. Analytiikka- tai mainosevästeitä ei käytetä.",
        ],
      },
      {
        heading: "8. Yhteys ja valitus",
        paragraphs: [
          "jarno@iqsoftcore.fi",
          "Voit tehdä valituksen tietosuojavaltuutetulle: tietosuoja.fi.",
        ],
      },
    ],
  },
};

const FLEETSYNC_PRIVACY_EN = {
  metaTitle: "iqFleetSync – Privacy notice | IQSoftCore",
  metaDescription: "Privacy notice for iqFleetSync. Controller and processor, data, purposes, subprocessors and rights.",
  title: "iqFleetSync – privacy notice",
  updated: "Updated 2026-10-05.",
  backFleet: "iqFleetSync",
  backCompany: "Company privacy",
  backHome: "Home",
  sections: [
    {
      heading: "1. Who is responsible",
      paragraphs: [
        "This notice covers the service at fleetsync.iqsoftcore.fi.",
        "IqSoftCore (toiminimi), business ID 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland, is the controller of the customer company’s own account data. That includes the contract, the billing contact and the subscription.",
        "The customer company is the controller of its employees’ data and its fleet data. IqSoftCore is the processor of that data. A data processing agreement is available on request.",
        "Privacy contact: jarno@iqsoftcore.fi.",
      ],
    },
    {
      heading: "2. What data is processed",
      paragraphs: ["The service may process:"],
      bullets: [
        "name, email, optional phone number and role",
        "sign-in and passkey metadata",
        "a shared-phone PIN as a hash or in encrypted form",
        "unit data, reports, photos, defect reports and readings",
        "the audit log",
        "billing data through Stripe; the card number is handled by Stripe only, and IqSoftCore does not store it",
      ],
    },
    {
      heading: "3. Why, and on what basis",
      paragraphs: [
        "The customer company’s account and the delivery of the service are handled under the contract.",
        "Fleet data and employee data are processed only to provide the service for the customer company. The customer company decides the purpose of that data.",
        "Billing and bookkeeping rely on the contract and on the legal duty to keep invoices.",
        "Sign-in security and the audit log rely on the legitimate interest in keeping the service working and secure.",
        "A phone number is used only as a contact detail if one was given. It is not used to sign in.",
        "Personal data is not sold.",
      ],
    },
    {
      heading: "4. Processors",
      paragraphs: [
        "The service data is hosted in the European Union. The database and sign-in run in a Supabase EU region. The application is hosted on Vercel.",
      ],
      bullets: [
        "Supabase: database and sign-in, EU region",
        "Vercel: application hosting",
        "Brevo: email delivery",
        "Stripe: payments; card data stays with Stripe",
      ],
    },
    {
      heading: "5. Retention",
      paragraphs: [
        "Data is kept while the subscription is active.",
        "Archived items are kept as history.",
        "Data is deleted on request or after the subscription ends. Invoicing data that accounting law requires is kept.",
      ],
    },
    {
      heading: "6. Your rights",
      paragraphs: [
        "You can ask for access, correction or deletion, restrict processing, receive a copy, and object where the basis allows it.",
        "For an employee’s data, the employer company is the controller. Start with them. IqSoftCore helps the customer company respond.",
        "Send a request to jarno@iqsoftcore.fi.",
      ],
    },
    {
      heading: "7. Cookies",
      paragraphs: [
        "The service uses only necessary session and organisation cookies. It does not use analytics or advertising cookies.",
      ],
    },
    {
      heading: "8. Contact and complaints",
      paragraphs: [
        "jarno@iqsoftcore.fi",
        "You can complain to the Finnish Data Protection Ombudsman (Tietosuojavaltuutettu): tietosuoja.fi.",
      ],
    },
  ],
};

function fleetPrivacyFromEnglish(lang, labels) {
  const copy = JSON.parse(JSON.stringify(FLEETSYNC_PRIVACY_EN));
  Object.assign(copy, labels);
  copy.lang = lang;
  return copy;
}

FLEETSYNC_PRIVACY.en = FLEETSYNC_PRIVACY_EN;

FLEETSYNC_PRIVACY.sv = fleetPrivacyFromEnglish("sv", {
  metaTitle: "iqFleetSync – Integritetsmeddelande | IQSoftCore",
  metaDescription: "Integritetsmeddelande för iqFleetSync. Ansvarig, biträde, uppgifter, ändamål, underbiträden och rättigheter.",
  title: "iqFleetSync – integritetsmeddelande",
  updated: "Uppdaterad 2026-10-05.",
  backCompany: "Företagets integritet",
  backHome: "Startsida",
});
FLEETSYNC_PRIVACY.sv.sections = [
  { heading: "1. Vem som ansvarar", paragraphs: [
    "Det här meddelandet gäller tjänsten på fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), FO-nummer 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland, är personuppgiftsansvarig för kundföretagets egna kontouppgifter. Dit hör avtalet, fakturakontakten och prenumerationen.",
    "Kundföretaget är personuppgiftsansvarigt för sina anställdas uppgifter och sina flottuppgifter. IqSoftCore är biträde för de uppgifterna. Ett personuppgiftsbiträdesavtal finns på begäran.",
    "Kontakt i integritetsfrågor: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Vilka uppgifter som behandlas", paragraphs: ["Tjänsten kan behandla:"], bullets: [
    "namn, e-post, valfritt telefonnummer och roll",
    "tekniska uppgifter om inloggning och passkey",
    "PIN för en delad telefon som hash eller krypterad",
    "enhetsuppgifter, rapporter, foton, felanmälningar och avläsningar",
    "auditlogg",
    "faktureringsuppgifter via Stripe; kortnumret hanteras bara av Stripe, och IqSoftCore sparar det inte",
  ]},
  { heading: "3. Varför och på vilken grund", paragraphs: [
    "Kundföretagets konto och leveransen av tjänsten sköts enligt avtalet.",
    "Flott- och anställduppgifter behandlas bara för att tillhandahålla tjänsten för kundföretaget. Kundföretaget bestämmer ändamålet med de uppgifterna.",
    "Fakturering och bokföring bygger på avtalet och på den lagstadgade skyldigheten att spara fakturor.",
    "Inloggningssäkerhet och auditloggen bygger på ett berättigat intresse av att hålla tjänsten i gång och säker.",
    "Ett telefonnummer används bara som kontaktuppgift om det har angetts. Det används inte för inloggning.",
    "Uppgifterna säljs inte.",
  ]},
  { heading: "4. Biträden", paragraphs: [
    "Tjänstens data lagras i EU. Databas och inloggning körs i en Supabase-region i EU. Appen körs på Vercel.",
  ], bullets: [
    "Supabase: databas och inloggning, EU-region",
    "Vercel: hosting av appen",
    "Brevo: utskick av e-post",
    "Stripe: betalningar; kortuppgifter bara hos Stripe",
  ]},
  { heading: "5. Lagring", paragraphs: [
    "Uppgifter sparas medan prenumerationen är aktiv.",
    "Arkiverade poster behålls som historik.",
    "Uppgifter raderas på begäran eller när prenumerationen har upphört. De faktureringsuppgifter som bokföringslagen kräver sparas.",
  ]},
  { heading: "6. Den registrerades rättigheter", paragraphs: [
    "Du kan begära tillgång, rättelse eller radering, begränsning av behandlingen, en kopia och invända när grunden tillåter det.",
    "För en anställds uppgifter är arbetsgivarföretaget personuppgiftsansvarigt. Börja där. IqSoftCore hjälper kundföretaget att svara.",
    "En begäran skickas till jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Kakor", paragraphs: [
    "Tjänsten använder bara nödvändiga sessions- och organisationskakor. Analytiska kakor och reklamkakor används inte.",
  ]},
  { heading: "8. Kontakt och klagomål", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Du kan klaga hos dataombudsmannen i Finland (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
];

function addFleetPrivacy(lang, meta, sections) {
  FLEETSYNC_PRIVACY[lang] = {
    metaTitle: meta.metaTitle,
    metaDescription: meta.metaDescription,
    title: meta.title,
    updated: meta.updated,
    backFleet: "iqFleetSync",
    backCompany: meta.backCompany,
    backHome: meta.backHome,
    sections,
  };
}

addFleetPrivacy("no", {
  metaTitle: "iqFleetSync – Personvernerklæring | IQSoftCore",
  metaDescription: "Personvernerklæring for iqFleetSync. Ansvarlig, databehandler, opplysninger, formål, underleverandører og rettigheter.",
  title: "iqFleetSync – personvernerklæring",
  updated: "Oppdatert 2026-10-05.",
  backCompany: "Virksomhetens personvern",
  backHome: "Hjem",
}, [
  { heading: "1. Hvem som har ansvaret", paragraphs: [
    "Denne erklæringen gjelder tjenesten på fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), organisasjonsnummer 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland, er behandlingsansvarlig for kundebedriftens egne kontoopplysninger. Det omfatter avtalen, fakturakontakten og abonnementet.",
    "Kundebedriften er behandlingsansvarlig for de ansattes opplysninger og flåteopplysningene. IqSoftCore er databehandler for disse opplysningene. En databehandleravtale sendes på forespørsel.",
    "Kontakt om personvern: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Hvilke opplysninger som behandles", paragraphs: ["Tjenesten kan behandle:"], bullets: [
    "navn, e-post, valgfritt telefonnummer og rolle",
    "tekniske opplysninger om innlogging og passkey",
    "PIN for en delt telefon som hash eller kryptert",
    "enhetsopplysninger, rapporter, bilder, feilmeldinger og avlesninger",
    "revisjonslogg",
    "faktureringsopplysninger via Stripe; kortnummeret behandles bare av Stripe, og IqSoftCore lagrer det ikke",
  ]},
  { heading: "3. Hvorfor og på hvilket grunnlag", paragraphs: [
    "Kundebedriftens konto og leveringen av tjenesten skjer etter avtalen.",
    "Flåte- og ansattdata behandles bare for å levere tjenesten for kundebedriften. Kundebedriften bestemmer formålet med disse opplysningene.",
    "Fakturering og regnskap bygger på avtalen og på den lovpålagte plikten til å ta vare på fakturaer.",
    "Innloggingssikkerhet og revisjonsloggen bygger på en berettiget interesse i å holde tjenesten i gang og sikker.",
    "Et telefonnummer brukes bare som kontaktopplysning hvis det er oppgitt. Det brukes ikke til innlogging.",
    "Opplysningene selges ikke.",
  ]},
  { heading: "4. Databehandlere", paragraphs: [
    "Tjenestens data ligger i EU. Database og innlogging kjører i en Supabase-region i EU. Appen kjører på Vercel.",
  ], bullets: [
    "Supabase: database og innlogging, EU-region",
    "Vercel: hosting av appen",
    "Brevo: sending av e-post",
    "Stripe: betalinger; kortopplysninger bare hos Stripe",
  ]},
  { heading: "5. Lagring", paragraphs: [
    "Opplysninger lagres mens abonnementet er aktivt.",
    "Arkiverte poster beholdes som historikk.",
    "Opplysninger slettes på forespørsel eller når abonnementet er avsluttet. Faktureringsopplysninger som regnskapsloven krever, beholdes.",
  ]},
  { heading: "6. Den registrertes rettigheter", paragraphs: [
    "Du kan be om innsyn, retting eller sletting, begrensning, en kopi og protestere når grunnlaget tillater det.",
    "For en ansatts opplysninger er arbeidsgiverbedriften behandlingsansvarlig. Start der. IqSoftCore hjelper kundebedriften med å svare.",
    "En forespørsel sendes til jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Informasjonskapsler", paragraphs: [
    "Tjenesten bruker bare nødvendige økt- og organisasjonskapsler. Analyse- og reklamekapsler brukes ikke.",
  ]},
  { heading: "8. Kontakt og klage", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Du kan klage til datatilsynet i Finland (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("da", {
  metaTitle: "iqFleetSync – Privatlivserklæring | IQSoftCore",
  metaDescription: "Privatlivserklæring for iqFleetSync. Ansvarlig, databehandler, oplysninger, formål, underdatabehandlere og rettigheder.",
  title: "iqFleetSync – privatlivserklæring",
  updated: "Opdateret 2026-10-05.",
  backCompany: "Virksomhedens privatliv",
  backHome: "Forside",
}, [
  { heading: "1. Hvem der har ansvaret", paragraphs: [
    "Denne erklæring gælder tjenesten på fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), virksomhedsnummer 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland, er dataansvarlig for kundens egne kontooplysninger. Det omfatter aftalen, fakturakontakten og abonnementet.",
    "Kundevirksomheden er dataansvarlig for medarbejdernes oplysninger og vognparksoplysningerne. IqSoftCore er databehandler for disse oplysninger. En databehandleraftale sendes på anmodning.",
    "Kontakt om privatliv: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Hvilke oplysninger der behandles", paragraphs: ["Tjenesten kan behandle:"], bullets: [
    "navn, e-mail, valgfrit telefonnummer og rolle",
    "tekniske oplysninger om login og passkey",
    "PIN til en delt telefon som hash eller krypteret",
    "enhedsoplysninger, rapporter, billeder, fejlmeldinger og aflæsninger",
    "revisionslog",
    "faktureringsoplysninger via Stripe; kortnummeret behandles kun af Stripe, og IqSoftCore gemmer det ikke",
  ]},
  { heading: "3. Hvorfor og på hvilket grundlag", paragraphs: [
    "Kundevirksomhedens konto og leveringen af tjenesten sker efter aftalen.",
    "Vognparks- og medarbejderoplysninger behandles kun for at levere tjenesten for kunden. Kunden bestemmer formålet med disse oplysninger.",
    "Fakturering og bogføring bygger på aftalen og på den lovbestemte pligt til at gemme fakturaer.",
    "Loginsikkerhed og revisionsloggen bygger på en legitim interesse i at holde tjenesten kørende og sikker.",
    "Et telefonnummer bruges kun som kontaktoplysning, hvis det er angivet. Det bruges ikke til login.",
    "Oplysningerne sælges ikke.",
  ]},
  { heading: "4. Databehandlere", paragraphs: [
    "Tjenestens data ligger i EU. Database og login kører i en Supabase-region i EU. Appen kører på Vercel.",
  ], bullets: [
    "Supabase: database og login, EU-region",
    "Vercel: hosting af appen",
    "Brevo: afsendelse af e-mail",
    "Stripe: betalinger; kortoplysninger kun hos Stripe",
  ]},
  { heading: "5. Opbevaring", paragraphs: [
    "Oplysninger opbevares, mens abonnementet er aktivt.",
    "Arkiverede poster beholdes som historik.",
    "Oplysninger slettes på anmodning eller når abonnementet er ophørt. De faktureringsoplysninger, som bogføringsloven kræver, beholdes.",
  ]},
  { heading: "6. Den registreredes rettigheder", paragraphs: [
    "Du kan bede om indsigt, rettelse eller sletning, begrænsning, en kopi og gøre indsigelse, når grundlaget tillader det.",
    "For en medarbejders oplysninger er arbejdsgiveren dataansvarlig. Start der. IqSoftCore hjælper kunden med at svare.",
    "En anmodning sendes til jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "Tjenesten bruger kun nødvendige sessions- og organisationscookies. Analyse- og reklamecookies bruges ikke.",
  ]},
  { heading: "8. Kontakt og klage", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Du kan klage til datatilsynet i Finland (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("de", {
  metaTitle: "iqFleetSync – Datenschutzhinweis | IQSoftCore",
  metaDescription: "Datenschutzhinweis für iqFleetSync. Verantwortlicher, Auftragsverarbeiter, Daten, Zwecke, Unterauftragsverarbeiter und Rechte.",
  title: "iqFleetSync – Datenschutzhinweis",
  updated: "Aktualisiert am 2026-10-05.",
  backCompany: "Datenschutz des Unternehmens",
  backHome: "Startseite",
}, [
  { heading: "1. Wer verantwortlich ist", paragraphs: [
    "Dieser Hinweis gilt für den Dienst unter fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finnland, ist Verantwortlicher für die eigenen Kontodaten des Kundenunternehmens. Dazu gehören Vertrag, Rechnungskontakt und Abonnement.",
    "Das Kundenunternehmen ist Verantwortlicher für die Daten seiner Beschäftigten und für die Fuhrparkdaten. IqSoftCore ist Auftragsverarbeiter dieser Daten. Ein Auftragsverarbeitungsvertrag ist auf Anfrage erhältlich.",
    "Kontakt zum Datenschutz: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Welche Daten verarbeitet werden", paragraphs: ["Der Dienst kann verarbeiten:"], bullets: [
    "Name, E-Mail, optionale Telefonnummer und Rolle",
    "technische Daten zu Anmeldung und Passkey",
    "PIN eines gemeinsamen Telefons als Hash oder verschlüsselt",
    "Einheitendaten, Berichte, Fotos, Mängelmeldungen und Ablesungen",
    "Audit-Protokoll",
    "Abrechnungsdaten über Stripe; die Kartennummer verarbeitet nur Stripe, IqSoftCore speichert sie nicht",
  ]},
  { heading: "3. Warum und auf welcher Grundlage", paragraphs: [
    "Das Konto des Kundenunternehmens und die Bereitstellung des Dienstes erfolgen aufgrund des Vertrags.",
    "Fuhrpark- und Beschäftigtendaten werden nur verarbeitet, um den Dienst für das Kundenunternehmen zu erbringen. Das Kundenunternehmen bestimmt den Zweck dieser Daten.",
    "Abrechnung und Buchhaltung beruhen auf dem Vertrag und auf der gesetzlichen Pflicht, Rechnungen aufzubewahren.",
    "Die Sicherheit der Anmeldung und das Audit-Protokoll beruhen auf dem berechtigten Interesse, den Dienst betriebsfähig und sicher zu halten.",
    "Eine Telefonnummer wird nur als Kontaktangabe verwendet, wenn sie angegeben wurde. Sie dient nicht zur Anmeldung.",
    "Personenbezogene Daten werden nicht verkauft.",
  ]},
  { heading: "4. Auftragsverarbeiter", paragraphs: [
    "Die Daten des Dienstes liegen in der EU. Datenbank und Anmeldung laufen in einer Supabase-Region in der EU. Die Anwendung läuft auf Vercel.",
  ], bullets: [
    "Supabase: Datenbank und Anmeldung, EU-Region",
    "Vercel: Hosting der Anwendung",
    "Brevo: Versand von E-Mail",
    "Stripe: Zahlungen; Kartendaten nur bei Stripe",
  ]},
  { heading: "5. Speicherdauer", paragraphs: [
    "Daten werden gespeichert, solange das Abonnement aktiv ist.",
    "Archivierte Einträge bleiben als Historie.",
    "Daten werden auf Antrag oder nach Ende des Abonnements gelöscht. Abrechnungsdaten, die das Buchhaltungsrecht verlangt, bleiben erhalten.",
  ]},
  { heading: "6. Rechte der betroffenen Person", paragraphs: [
    "Sie können Auskunft, Berichtigung oder Löschung verlangen, die Verarbeitung einschränken, eine Kopie erhalten und widersprechen, soweit die Grundlage das zulässt.",
    "Bei Daten einer beschäftigten Person ist das Arbeitgeberunternehmen Verantwortlicher. Beginnen Sie dort. IqSoftCore hilft dem Kundenunternehmen bei der Antwort.",
    "Eine Anfrage geht an jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "Der Dienst verwendet nur notwendige Sitzungs- und Organisations-Cookies. Analyse- oder Werbe-Cookies werden nicht verwendet.",
  ]},
  { heading: "8. Kontakt und Beschwerde", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Sie können sich bei der finnischen Datenschutzbehörde (Tietosuojavaltuutettu) beschweren: tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("nl", {
  metaTitle: "iqFleetSync – Privacyverklaring | IQSoftCore",
  metaDescription: "Privacyverklaring voor iqFleetSync. Verantwoordelijke, verwerker, gegevens, doelen, subverwerkers en rechten.",
  title: "iqFleetSync – privacyverklaring",
  updated: "Bijgewerkt op 2026-10-05.",
  backCompany: "Privacy van het bedrijf",
  backHome: "Home",
}, [
  { heading: "1. Wie verantwoordelijk is", paragraphs: [
    "Deze verklaring geldt voor de dienst op fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland, is verwerkingsverantwoordelijke voor de eigen accountgegevens van het klantbedrijf. Dat zijn het contract, het factuurcontact en het abonnement.",
    "Het klantbedrijf is verwerkingsverantwoordelijke voor de gegevens van zijn werknemers en voor de wagenparkgegevens. IqSoftCore is verwerker van die gegevens. Een verwerkersovereenkomst is op verzoek beschikbaar.",
    "Contact over privacy: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Welke gegevens worden verwerkt", paragraphs: ["De dienst kan verwerken:"], bullets: [
    "naam, e-mail, optioneel telefoonnummer en rol",
    "technische gegevens over aanmelden en passkey",
    "PIN van een gedeelde telefoon als hash of versleuteld",
    "eenheidsgegevens, rapporten, foto’s, gebrekmeldingen en standen",
    "auditlogboek",
    "factuurgegevens via Stripe; het kaartnummer verwerkt alleen Stripe, IqSoftCore slaat het niet op",
  ]},
  { heading: "3. Waarom en op welke grond", paragraphs: [
    "Het account van het klantbedrijf en de levering van de dienst gebeuren op grond van de overeenkomst.",
    "Wagenpark- en werknemersgegevens worden alleen verwerkt om de dienst voor het klantbedrijf te leveren. Het klantbedrijf bepaalt het doel van die gegevens.",
    "Facturatie en boekhouding steunen op de overeenkomst en op de wettelijke plicht om facturen te bewaren.",
    "Beveiliging van het aanmelden en het auditlogboek steunen op het gerechtvaardigd belang om de dienst werkend en veilig te houden.",
    "Een telefoonnummer wordt alleen als contactgegeven gebruikt als het is opgegeven. Het dient niet om aan te melden.",
    "Persoonsgegevens worden niet verkocht.",
  ]},
  { heading: "4. Verwerkers", paragraphs: [
    "De gegevens van de dienst staan in de EU. Database en aanmelden draaien in een Supabase-regio in de EU. De applicatie draait op Vercel.",
  ], bullets: [
    "Supabase: database en aanmelden, EU-regio",
    "Vercel: hosting van de applicatie",
    "Brevo: verzending van e-mail",
    "Stripe: betalingen; kaartgegevens alleen bij Stripe",
  ]},
  { heading: "5. Bewaartermijn", paragraphs: [
    "Gegevens worden bewaard zolang het abonnement actief is.",
    "Gearchiveerde items blijven als geschiedenis.",
    "Gegevens worden gewist op verzoek of nadat het abonnement is geëindigd. Factuurgegevens die de boekhoudwet eist, blijven bewaard.",
  ]},
  { heading: "6. Rechten van de betrokkene", paragraphs: [
    "U kunt inzage, correctie of wissing vragen, de verwerking beperken, een kopie ontvangen en bezwaar maken waar de grondslag dat toelaat.",
    "Voor gegevens van een werknemer is het werkgeversbedrijf verwerkingsverantwoordelijke. Begin daar. IqSoftCore helpt het klantbedrijf met het antwoord.",
    "Een verzoek gaat naar jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "De dienst gebruikt alleen noodzakelijke sessie- en organisatiecookies. Analyse- of advertentiecookies worden niet gebruikt.",
  ]},
  { heading: "8. Contact en klacht", paragraphs: [
    "jarno@iqsoftcore.fi",
    "U kunt een klacht indienen bij de Finse toezichthouder (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("fr", {
  metaTitle: "iqFleetSync – Notice de confidentialité | IQSoftCore",
  metaDescription: "Notice de confidentialité d’iqFleetSync. Responsable, sous-traitant, données, finalités, sous-traitants ultérieurs et droits.",
  title: "iqFleetSync – notice de confidentialité",
  updated: "Mise à jour le 2026-10-05.",
  backCompany: "Confidentialité de l’entreprise",
  backHome: "Accueil",
}, [
  { heading: "1. Qui est responsable", paragraphs: [
    "Cette notice concerne le service sur fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlande, est responsable du traitement des données de compte propres à l’entreprise cliente. Cela comprend le contrat, le contact de facturation et l’abonnement.",
    "L’entreprise cliente est responsable du traitement des données de ses salariés et des données de son parc. IqSoftCore est sous-traitant de ces données. Un accord de traitement est disponible sur demande.",
    "Contact confidentialité : jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Quelles données sont traitées", paragraphs: ["Le service peut traiter :"], bullets: [
    "nom, e-mail, numéro de téléphone facultatif et rôle",
    "métadonnées de connexion et de passkey",
    "PIN d’un téléphone partagé sous forme de condensat ou chiffré",
    "données d’unité, rapports, photos, signalements de défaut et relevés",
    "journal d’audit",
    "données de facturation via Stripe ; le numéro de carte est traité seulement par Stripe, IqSoftCore ne le conserve pas",
  ]},
  { heading: "3. Pourquoi et sur quelle base", paragraphs: [
    "Le compte de l’entreprise cliente et la fourniture du service reposent sur le contrat.",
    "Les données du parc et des salariés sont traitées seulement pour fournir le service à l’entreprise cliente. L’entreprise cliente décide de la finalité de ces données.",
    "La facturation et la comptabilité reposent sur le contrat et sur l’obligation légale de conserver les factures.",
    "La sécurité de la connexion et le journal d’audit reposent sur l’intérêt légitime de maintenir le service en état de marche et sûr.",
    "Un numéro de téléphone sert seulement de contact s’il a été donné. Il ne sert pas à se connecter.",
    "Les données personnelles ne sont pas vendues.",
  ]},
  { heading: "4. Sous-traitants", paragraphs: [
    "Les données du service sont hébergées dans l’Union européenne. La base et la connexion sont dans une région UE de Supabase. L’application est hébergée sur Vercel.",
  ], bullets: [
    "Supabase : base de données et connexion, région UE",
    "Vercel : hébergement de l’application",
    "Brevo : envoi des e-mails",
    "Stripe : paiements ; données de carte seulement chez Stripe",
  ]},
  { heading: "5. Conservation", paragraphs: [
    "Les données sont conservées tant que l’abonnement est actif.",
    "Les éléments archivés restent comme historique.",
    "Les données sont effacées sur demande ou après la fin de l’abonnement. Les données de facturation exigées par la loi comptable sont conservées.",
  ]},
  { heading: "6. Droits de la personne", paragraphs: [
    "Vous pouvez demander l’accès, la rectification ou l’effacement, limiter le traitement, recevoir une copie et vous opposer lorsque la base le permet.",
    "Pour les données d’un salarié, l’entreprise employeuse est responsable du traitement. Commencez par elle. IqSoftCore aide l’entreprise cliente à répondre.",
    "Une demande s’envoie à jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "Le service utilise seulement les cookies de session et d’organisation nécessaires. Il n’utilise pas de cookies d’analyse ou de publicité.",
  ]},
  { heading: "8. Contact et réclamation", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Vous pouvez introduire une réclamation auprès de l’autorité finlandaise de protection des données (Tietosuojavaltuutettu) : tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("es", {
  metaTitle: "iqFleetSync – Aviso de privacidad | IQSoftCore",
  metaDescription: "Aviso de privacidad de iqFleetSync. Responsable, encargado, datos, fines, subencargados y derechos.",
  title: "iqFleetSync – aviso de privacidad",
  updated: "Actualizado el 2026-10-05.",
  backCompany: "Privacidad de la empresa",
  backHome: "Inicio",
}, [
  { heading: "1. Quién responde", paragraphs: [
    "Este aviso cubre el servicio en fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia, es el responsable de los datos de cuenta propios de la empresa cliente. Eso incluye el contrato, el contacto de facturación y la suscripción.",
    "La empresa cliente es la responsable de los datos de sus empleados y de los datos de la flota. IqSoftCore es el encargado de esos datos. Hay un contrato de encargo disponible si se pide.",
    "Contacto de privacidad: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Qué datos se tratan", paragraphs: ["El servicio puede tratar:"], bullets: [
    "nombre, correo, teléfono opcional y rol",
    "metadatos de acceso y de passkey",
    "PIN de un teléfono compartido como hash o cifrado",
    "datos de la unidad, informes, fotos, defectos y lecturas",
    "registro de auditoría",
    "datos de facturación a través de Stripe; el número de tarjeta lo trata solo Stripe, e IqSoftCore no lo guarda",
  ]},
  { heading: "3. Para qué y con qué base", paragraphs: [
    "La cuenta de la empresa cliente y la prestación del servicio se hacen en virtud del contrato.",
    "Los datos de la flota y de los empleados se tratan solo para prestar el servicio a la empresa cliente. La empresa cliente decide la finalidad de esos datos.",
    "La facturación y la contabilidad se apoyan en el contrato y en el deber legal de conservar las facturas.",
    "La seguridad del acceso y el registro de auditoría se apoyan en el interés legítimo de mantener el servicio en marcha y seguro.",
    "Un número de teléfono se usa solo como contacto si se ha dado. No sirve para entrar.",
    "Los datos personales no se venden.",
  ]},
  { heading: "4. Encargados", paragraphs: [
    "Los datos del servicio se alojan en la Unión Europea. La base de datos y el acceso están en una región de la UE de Supabase. La aplicación se aloja en Vercel.",
  ], bullets: [
    "Supabase: base de datos y acceso, región de la UE",
    "Vercel: alojamiento de la aplicación",
    "Brevo: envío de correo",
    "Stripe: pagos; los datos de la tarjeta solo en Stripe",
  ]},
  { heading: "5. Conservación", paragraphs: [
    "Los datos se conservan mientras la suscripción está activa.",
    "Los elementos archivados se conservan como historial.",
    "Los datos se borran si se pide o cuando termina la suscripción. Se conservan los datos de facturación que exige la ley contable.",
  ]},
  { heading: "6. Derechos de la persona", paragraphs: [
    "Puede pedir acceso, rectificación o supresión, limitar el tratamiento, recibir una copia y oponerse cuando la base lo permita.",
    "En los datos de un empleado, la empresa empleadora es la responsable. Empiece por ella. IqSoftCore ayuda a la empresa cliente a responder.",
    "Una solicitud se envía a jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "El servicio usa solo las cookies necesarias de sesión y de organización. No usa cookies de analítica ni de publicidad.",
  ]},
  { heading: "8. Contacto y reclamación", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Puede reclamar ante la autoridad finlandesa de protección de datos (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("pt", {
  metaTitle: "iqFleetSync – Aviso de privacidade | IQSoftCore",
  metaDescription: "Aviso de privacidade do iqFleetSync. Responsável, subcontratante, dados, finalidades, subcontratantes e direitos.",
  title: "iqFleetSync – aviso de privacidade",
  updated: "Atualizado em 2026-10-05.",
  backCompany: "Privacidade da empresa",
  backHome: "Início",
}, [
  { heading: "1. Quem é responsável", paragraphs: [
    "Este aviso cobre o serviço em fleetsync.iqsoftcore.fi.",
    "A IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlândia, é a responsável pelos dados de conta próprios da empresa cliente. Isso inclui o contrato, o contacto de faturação e a subscrição.",
    "A empresa cliente é a responsável pelos dados dos seus trabalhadores e pelos dados da frota. A IqSoftCore é a subcontratante desses dados. Um contrato de tratamento está disponível a pedido.",
    "Contacto de privacidade: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Que dados são tratados", paragraphs: ["O serviço pode tratar:"], bullets: [
    "nome, e-mail, telefone opcional e papel",
    "metadados de acesso e de passkey",
    "PIN de um telefone partilhado como hash ou cifrado",
    "dados da unidade, relatórios, fotografias, defeitos e leituras",
    "registo de auditoria",
    "dados de faturação através da Stripe; o número do cartão é tratado só pela Stripe, e a IqSoftCore não o guarda",
  ]},
  { heading: "3. Para quê e com que base", paragraphs: [
    "A conta da empresa cliente e a prestação do serviço assentam no contrato.",
    "Os dados da frota e dos trabalhadores são tratados só para prestar o serviço à empresa cliente. A empresa cliente decide a finalidade desses dados.",
    "A faturação e a contabilidade assentam no contrato e no dever legal de guardar faturas.",
    "A segurança do acesso e o registo de auditoria assentam no interesse legítimo de manter o serviço a funcionar e seguro.",
    "Um número de telefone serve só de contacto, se tiver sido dado. Não serve para entrar.",
    "Os dados pessoais não são vendidos.",
  ]},
  { heading: "4. Subcontratantes", paragraphs: [
    "Os dados do serviço estão alojados na União Europeia. A base de dados e o acesso correm numa região da UE da Supabase. A aplicação está alojada na Vercel.",
  ], bullets: [
    "Supabase: base de dados e acesso, região da UE",
    "Vercel: alojamento da aplicação",
    "Brevo: envio de e-mail",
    "Stripe: pagamentos; dados do cartão só na Stripe",
  ]},
  { heading: "5. Conservação", paragraphs: [
    "Os dados são conservados enquanto a subscrição está ativa.",
    "Os itens arquivados ficam como histórico.",
    "Os dados são apagados a pedido ou depois de a subscrição terminar. Ficam os dados de faturação que a lei contabilística exige.",
  ]},
  { heading: "6. Direitos da pessoa", paragraphs: [
    "Pode pedir acesso, retificação ou apagamento, limitar o tratamento, receber uma cópia e opor-se quando a base o permitir.",
    "Nos dados de um trabalhador, a empresa empregadora é a responsável. Comece por ela. A IqSoftCore ajuda a empresa cliente a responder.",
    "Um pedido envia-se para jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "O serviço usa só os cookies necessários de sessão e de organização. Não usa cookies de análise nem de publicidade.",
  ]},
  { heading: "8. Contacto e reclamação", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Pode reclamar junto da autoridade finlandesa de proteção de dados (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("it", {
  metaTitle: "iqFleetSync – Informativa privacy | IQSoftCore",
  metaDescription: "Informativa privacy di iqFleetSync. Titolare, responsabile, dati, finalità, sub-responsabili e diritti.",
  title: "iqFleetSync – informativa privacy",
  updated: "Aggiornata il 2026-10-05.",
  backCompany: "Privacy dell’azienda",
  backHome: "Home",
}, [
  { heading: "1. Chi è responsabile", paragraphs: [
    "Questa informativa riguarda il servizio su fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia, è titolare dei dati di account propri dell’azienda cliente. Rientrano il contratto, il contatto di fatturazione e l’abbonamento.",
    "L’azienda cliente è titolare dei dati dei propri dipendenti e dei dati della flotta. IqSoftCore è il responsabile del trattamento di quei dati. Un accordo di trattamento è disponibile su richiesta.",
    "Contatto privacy: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Quali dati sono trattati", paragraphs: ["Il servizio può trattare:"], bullets: [
    "nome, e-mail, telefono facoltativo e ruolo",
    "metadati di accesso e di passkey",
    "PIN di un telefono condiviso come hash o cifrato",
    "dati dell’unità, rapporti, foto, difetti e letture",
    "registro di audit",
    "dati di fatturazione tramite Stripe; il numero della carta è trattato solo da Stripe e IqSoftCore non lo conserva",
  ]},
  { heading: "3. Perché e su quale base", paragraphs: [
    "L’account dell’azienda cliente e l’erogazione del servizio si fondano sul contratto.",
    "I dati della flotta e dei dipendenti sono trattati solo per fornire il servizio all’azienda cliente. L’azienda cliente decide la finalità di quei dati.",
    "Fatturazione e contabilità si fondano sul contratto e sull’obbligo di legge di conservare le fatture.",
    "La sicurezza dell’accesso e il registro di audit si fondano sul legittimo interesse a tenere il servizio funzionante e sicuro.",
    "Un numero di telefono si usa solo come contatto, se è stato dato. Non serve per accedere.",
    "I dati personali non sono venduti.",
  ]},
  { heading: "4. Responsabili del trattamento", paragraphs: [
    "I dati del servizio sono ospitati nell’Unione europea. Database e accesso sono in una regione UE di Supabase. L’applicazione è ospitata su Vercel.",
  ], bullets: [
    "Supabase: database e accesso, regione UE",
    "Vercel: hosting dell’applicazione",
    "Brevo: invio delle e-mail",
    "Stripe: pagamenti; dati della carta solo presso Stripe",
  ]},
  { heading: "5. Conservazione", paragraphs: [
    "I dati sono conservati finché l’abbonamento è attivo.",
    "Gli elementi archiviati restano come storico.",
    "I dati sono cancellati su richiesta o dopo la fine dell’abbonamento. Restano i dati di fatturazione richiesti dalla legge contabile.",
  ]},
  { heading: "6. Diritti della persona", paragraphs: [
    "Può chiedere accesso, rettifica o cancellazione, limitare il trattamento, ricevere una copia e opporsi quando la base lo consente.",
    "Per i dati di un dipendente, l’azienda datrice è titolare. Inizi da lei. IqSoftCore aiuta l’azienda cliente a rispondere.",
    "Una richiesta si invia a jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookie", paragraphs: [
    "Il servizio usa solo i cookie necessari di sessione e di organizzazione. Non usa cookie di analisi o pubblicità.",
  ]},
  { heading: "8. Contatto e reclamo", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Può proporre reclamo al Garante finlandese (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("pl", {
  metaTitle: "iqFleetSync – Informacja o prywatności | IQSoftCore",
  metaDescription: "Informacja o prywatności iqFleetSync. Administrator, podmiot przetwarzający, dane, cele, podmioty i prawa.",
  title: "iqFleetSync – informacja o prywatności",
  updated: "Aktualizacja 2026-10-05.",
  backCompany: "Prywatność firmy",
  backHome: "Strona główna",
}, [
  { heading: "1. Kto odpowiada", paragraphs: [
    "Ta informacja dotyczy usługi pod adresem fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia, jest administratorem własnych danych konta firmy klienta. Obejmuje to umowę, kontakt do faktury i subskrypcję.",
    "Firma klienta jest administratorem danych swoich pracowników i danych floty. IqSoftCore jest podmiotem przetwarzającym te dane. Umowa powierzenia jest dostępna na żądanie.",
    "Kontakt w sprawie prywatności: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Jakie dane są przetwarzane", paragraphs: ["Usługa może przetwarzać:"], bullets: [
    "imię, e-mail, opcjonalny numer telefonu i rolę",
    "metadane logowania i passkey",
    "PIN wspólnego telefonu jako skrót albo w postaci zaszyfrowanej",
    "dane jednostki, raporty, zdjęcia, usterki i odczyty",
    "dziennik audytu",
    "dane rozliczeniowe przez Stripe; numer karty obsługuje tylko Stripe, a IqSoftCore go nie zapisuje",
  ]},
  { heading: "3. Po co i na jakiej podstawie", paragraphs: [
    "Konto firmy klienta i świadczenie usługi odbywają się na podstawie umowy.",
    "Dane floty i pracowników są przetwarzane tylko po to, by świadczyć usługę dla firmy klienta. Firma klienta określa cel tych danych.",
    "Rozliczenia i księgowość opierają się na umowie i na prawnym obowiązku przechowywania faktur.",
    "Bezpieczeństwo logowania i dziennik audytu opierają się na prawnie uzasadnionym interesie utrzymania usługi w działaniu i w bezpieczeństwie.",
    "Numer telefonu służy tylko jako kontakt, jeśli został podany. Nie służy do logowania.",
    "Danych osobowych nie sprzedajemy.",
  ]},
  { heading: "4. Podmioty przetwarzające", paragraphs: [
    "Dane usługi są przechowywane w Unii Europejskiej. Baza i logowanie działają w regionie UE Supabase. Aplikacja jest hostowana na Vercel.",
  ], bullets: [
    "Supabase: baza danych i logowanie, region UE",
    "Vercel: hosting aplikacji",
    "Brevo: wysyłka e-mail",
    "Stripe: płatności; dane karty tylko u Stripe",
  ]},
  { heading: "5. Przechowywanie", paragraphs: [
    "Dane są przechowywane, gdy subskrypcja jest aktywna.",
    "Zarchiwizowane pozycje zostają jako historia.",
    "Dane są usuwane na żądanie albo po zakończeniu subskrypcji. Zostają dane fakturowe, których wymaga prawo księgowe.",
  ]},
  { heading: "6. Prawa osoby", paragraphs: [
    "Można prosić o dostęp, sprostowanie albo usunięcie, ograniczenie przetwarzania, kopię i sprzeciw, gdy podstawa na to pozwala.",
    "Przy danych pracownika administratorem jest firma pracodawcy. Zacznij od niej. IqSoftCore pomaga firmie klienta odpowiedzieć.",
    "Wniosek wysyła się na jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Pliki cookie", paragraphs: [
    "Usługa używa tylko niezbędnych plików cookie sesji i organizacji. Nie używa plików analitycznych ani reklamowych.",
  ]},
  { heading: "8. Kontakt i skarga", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Można złożyć skargę do fińskiego organu ochrony danych (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("cs", {
  metaTitle: "iqFleetSync – Informace o ochraně soukromí | IQSoftCore",
  metaDescription: "Informace o ochraně soukromí iqFleetSync. Správce, zpracovatel, údaje, účely, další zpracovatelé a práva.",
  title: "iqFleetSync – informace o ochraně soukromí",
  updated: "Aktualizováno 2026-10-05.",
  backCompany: "Soukromí firmy",
  backHome: "Domů",
}, [
  { heading: "1. Kdo odpovídá", paragraphs: [
    "Tyto informace se týkají služby na fleetsync.iqsoftcore.fi.",
    "IqSoftCore (toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finsko, je správcem vlastních údajů účtu zákaznické firmy. Patří sem smlouva, fakturační kontakt a předplatné.",
    "Zákaznická firma je správcem údajů svých zaměstnanců a údajů flotily. IqSoftCore je zpracovatelem těchto údajů. Smlouva o zpracování je k dispozici na vyžádání.",
    "Kontakt k soukromí: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. Jaké údaje se zpracovávají", paragraphs: ["Služba může zpracovávat:"], bullets: [
    "jméno, e-mail, volitelné telefonní číslo a roli",
    "technické údaje o přihlášení a passkey",
    "PIN sdíleného telefonu jako hash nebo šifrovaně",
    "údaje jednotky, hlášení, fotografie, závady a odečty",
    "auditní záznam",
    "fakturační údaje přes Stripe; číslo karty zpracovává jen Stripe a IqSoftCore je neukládá",
  ]},
  { heading: "3. Proč a na jakém základě", paragraphs: [
    "Účet zákaznické firmy a poskytování služby probíhají na základě smlouvy.",
    "Údaje flotily a zaměstnanců se zpracovávají jen kvůli poskytnutí služby zákaznické firmě. Zákaznická firma určuje účel těchto údajů.",
    "Fakturace a účetnictví stojí na smlouvě a na zákonné povinnosti uchovávat faktury.",
    "Zabezpečení přihlášení a auditní záznam stojí na oprávněném zájmu udržet službu funkční a bezpečnou.",
    "Telefonní číslo slouží jen jako kontakt, pokud bylo uvedeno. Neslouží k přihlášení.",
    "Osobní údaje se neprodávají.",
  ]},
  { heading: "4. Zpracovatelé", paragraphs: [
    "Data služby jsou uložena v Evropské unii. Databáze a přihlášení běží v regionu EU služby Supabase. Aplikace běží na Vercelu.",
  ], bullets: [
    "Supabase: databáze a přihlášení, region EU",
    "Vercel: hosting aplikace",
    "Brevo: odesílání e-mailu",
    "Stripe: platby; údaje karty jen u Stripe",
  ]},
  { heading: "5. Uchování", paragraphs: [
    "Údaje se uchovávají, dokud je předplatné aktivní.",
    "Archivované položky zůstávají jako historie.",
    "Údaje se smažou na žádost nebo po skončení předplatného. Zůstanou fakturační údaje, které vyžaduje účetní zákon.",
  ]},
  { heading: "6. Práva osoby", paragraphs: [
    "Můžete žádat o přístup, opravu nebo výmaz, omezení zpracování, kopii a námitku, pokud to základ dovoluje.",
    "U údajů zaměstnance je správcem zaměstnavatelská firma. Začněte u ní. IqSoftCore pomůže zákaznické firmě odpovědět.",
    "Žádost se posílá na jarno@iqsoftcore.fi.",
  ]},
  { heading: "7. Cookies", paragraphs: [
    "Služba používá jen nezbytné cookies relace a organizace. Nepoužívá analytické ani reklamní cookies.",
  ]},
  { heading: "8. Kontakt a stížnost", paragraphs: [
    "jarno@iqsoftcore.fi",
    "Stížnost můžete podat finskému úřadu pro ochranu údajů (Tietosuojavaltuutettu): tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("ja", {
  metaTitle: "iqFleetSync – プライバシー通知 | IQSoftCore",
  metaDescription: "iqFleetSyncのプライバシー通知。管理者、処理者、データ、目的、委託先、権利。",
  title: "iqFleetSync – プライバシー通知",
  updated: "更新日 2026-10-05。",
  backCompany: "会社のプライバシー",
  backHome: "ホーム",
}, [
  { heading: "1. 誰が責任を持つか", paragraphs: [
    "この通知は fleetsync.iqsoftcore.fi のサービスに関するものです。",
    "IqSoftCore（toiminimi）、Y-tunnus 3658340-4、Siihtalantie 56, 62710 Kurejoki, フィンランドは、顧客企業自身のアカウントデータの管理者です。契約、請求先、契約プランがこれにあたります。",
    "顧客企業は、自社の従業員データと車両データの管理者です。IqSoftCoreはそのデータの処理者です。処理契約は請求があれば渡します。",
    "プライバシーの連絡先：jarno@iqsoftcore.fi。",
  ]},
  { heading: "2. 扱うデータ", paragraphs: ["サービスでは次を扱うことがあります。"], bullets: [
    "氏名、メール、任意の電話番号、役割",
    "ログインとパスキーの技術情報",
    "共用電話のPIN（ハッシュまたは暗号化）",
    "ユニットのデータ、報告、写真、不具合、読み取り値",
    "監査ログ",
    "Stripe経由の請求データ。カード番号はStripeだけが扱い、IqSoftCoreは保存しません",
  ]},
  { heading: "3. 目的と根拠", paragraphs: [
    "顧客企業のアカウントとサービスの提供は、契約に基づきます。",
    "車両と従業員のデータは、顧客企業のためにサービスを提供するためだけに扱います。その目的は顧客企業が決めます。",
    "請求と会計は、契約と、請求書を保管する法的義務に基づきます。",
    "ログインの安全と監査ログは、サービスを動かし安全に保つ正当な利益に基づきます。",
    "電話番号は、入力されたときだけ連絡先として使います。ログインには使いません。",
    "個人データは売りません。",
  ]},
  { heading: "4. 委託先", paragraphs: [
    "サービスのデータはEU内にあります。データベースとログインはSupabaseのEUリージョンです。アプリはVercelで動きます。",
  ], bullets: [
    "Supabase：データベースとログイン、EUリージョン",
    "Vercel：アプリのホスティング",
    "Brevo：メール送信",
    "Stripe：支払い。カード情報はStripeのみ",
  ]},
  { heading: "5. 保存", paragraphs: [
    "契約が有効な間、データを保存します。",
    "アーカイブした項目は履歴として残します。",
    "請求があったとき、または契約が終わったあとに削除します。会計法が求める請求データは残します。",
  ]},
  { heading: "6. 本人の権利", paragraphs: [
    "アクセス、訂正、削除、処理の制限、写しの受け取り、根拠が許す範囲での異議を求められます。",
    "従業員のデータでは、雇用主である企業が管理者です。まずそちらに連絡してください。IqSoftCoreは顧客企業の回答を助けます。",
    "請求は jarno@iqsoftcore.fi へ送ります。",
  ]},
  { heading: "7. Cookie", paragraphs: [
    "サービスは、必要なセッション用と組織用のCookieだけを使います。分析や広告のCookieは使いません。",
  ]},
  { heading: "8. 連絡と苦情", paragraphs: [
    "jarno@iqsoftcore.fi",
    "フィンランドのデータ保護オンブズマン（Tietosuojavaltuutettu）に苦情を出せます：tietosuoja.fi。",
  ]},
]);

addFleetPrivacy("ko", {
  metaTitle: "iqFleetSync – 개인정보 안내 | IQSoftCore",
  metaDescription: "iqFleetSync 개인정보 안내. 관리자, 처리자, 데이터, 목적, 수탁자, 권리.",
  title: "iqFleetSync – 개인정보 안내",
  updated: "업데이트 2026-10-05.",
  backCompany: "회사 개인정보",
  backHome: "홈",
}, [
  { heading: "1. 누가 책임지는가", paragraphs: [
    "이 안내는 fleetsync.iqsoftcore.fi 서비스에 관한 것입니다.",
    "IqSoftCore(toiminimi), Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, 핀란드는 고객 회사 자신의 계정 데이터에 대한 관리자입니다. 계약, 청구 연락처, 구독이 여기에 해당합니다.",
    "고객 회사는 자기 직원 데이터와 차량 데이터의 관리자입니다. IqSoftCore는 그 데이터의 처리자입니다. 처리 계약은 요청하면 드립니다.",
    "개인정보 연락처: jarno@iqsoftcore.fi.",
  ]},
  { heading: "2. 어떤 데이터를 처리하는가", paragraphs: ["서비스는 다음을 처리할 수 있습니다."], bullets: [
    "이름, 이메일, 선택 전화번호, 역할",
    "로그인과 패스키의 기술 정보",
    "공용 전화 PIN의 해시 또는 암호화된 값",
    "장비 데이터, 보고, 사진, 고장, 읽은 값",
    "감사 기록",
    "Stripe를 통한 청구 데이터. 카드 번호는 Stripe만 다루며 IqSoftCore는 저장하지 않습니다",
  ]},
  { heading: "3. 이유와 근거", paragraphs: [
    "고객 회사의 계정과 서비스 제공은 계약에 따릅니다.",
    "차량과 직원 데이터는 고객 회사를 위해 서비스를 제공하려고만 처리합니다. 그 목적은 고객 회사가 정합니다.",
    "청구와 회계는 계약과, 청구서를 보관할 법적 의무에 따릅니다.",
    "로그인 보안과 감사 기록은 서비스를 작동하고 안전하게 둘 정당한 이익에 따릅니다.",
    "전화번호는 입력된 경우에만 연락처로 씁니다. 로그인에는 쓰지 않습니다.",
    "개인정보는 팔지 않습니다.",
  ]},
  { heading: "4. 수탁자", paragraphs: [
    "서비스 데이터는 EU에 있습니다. 데이터베이스와 로그인은 Supabase의 EU 리전입니다. 앱은 Vercel에서 돌아갑니다.",
  ], bullets: [
    "Supabase: 데이터베이스와 로그인, EU 리전",
    "Vercel: 앱 호스팅",
    "Brevo: 이메일 발송",
    "Stripe: 결제. 카드 정보는 Stripe만",
  ]},
  { heading: "5. 보관", paragraphs: [
    "구독이 유지되는 동안 데이터를 보관합니다.",
    "보관한 항목은 이력으로 남깁니다.",
    "요청이 있거나 구독이 끝나면 삭제합니다. 회계법이 요구하는 청구 데이터는 남깁니다.",
  ]},
  { heading: "6. 정보주체의 권리", paragraphs: [
    "열람, 정정, 삭제, 처리 제한, 사본, 그리고 근거가 허용할 때의 반대를 요청할 수 있습니다.",
    "직원 데이터에서는 고용주 회사가 관리자입니다. 먼저 그곳에 요청하세요. IqSoftCore는 고객 회사의 답변을 돕습니다.",
    "요청은 jarno@iqsoftcore.fi 로 보냅니다.",
  ]},
  { heading: "7. 쿠키", paragraphs: [
    "서비스는 필요한 세션 쿠키와 조직 쿠키만 씁니다. 분석이나 광고 쿠키는 쓰지 않습니다.",
  ]},
  { heading: "8. 연락과 이의", paragraphs: [
    "jarno@iqsoftcore.fi",
    "핀란드 개인정보 감독기관(Tietosuojavaltuutettu)에 이의를 제기할 수 있습니다: tietosuoja.fi.",
  ]},
]);

addFleetPrivacy("zh", {
  metaTitle: "iqFleetSync – 隐私说明 | IQSoftCore",
  metaDescription: "iqFleetSync 隐私说明。控制者、处理者、数据、目的、次处理者和权利。",
  title: "iqFleetSync – 隐私说明",
  updated: "更新于 2026-10-05。",
  backCompany: "公司隐私",
  backHome: "首页",
}, [
  { heading: "1. 谁负责", paragraphs: [
    "本说明适用于 fleetsync.iqsoftcore.fi 上的服务。",
    "IqSoftCore（toiminimi），Y-tunnus 3658340-4，Siihtalantie 56, 62710 Kurejoki，芬兰，是客户公司自身账户数据的控制者。这包括合同、账单联系人和订阅。",
    "客户公司是其员工数据和车队数据的控制者。IqSoftCore 是这些数据的处理者。数据处理协议可应要求提供。",
    "隐私联系：jarno@iqsoftcore.fi。",
  ]},
  { heading: "2. 处理哪些数据", paragraphs: ["服务可能处理："], bullets: [
    "姓名、电子邮件、可选电话号码和角色",
    "登录和通行密钥的技术信息",
    "共用电话 PIN 的哈希或加密形式",
    "设备数据、报告、照片、缺陷和读数",
    "审计日志",
    "通过 Stripe 的账单数据；卡号只由 Stripe 处理，IqSoftCore 不保存",
  ]},
  { heading: "3. 目的和依据", paragraphs: [
    "客户公司的账户和服务的提供依据合同。",
    "车队和员工数据只为向客户公司提供服务而处理。这些数据的目的由客户公司决定。",
    "账单和会计依据合同，以及保存发票的法定义务。",
    "登录安全和审计日志依据维持服务运行和安全的正当利益。",
    "电话号码只在提供时作为联系方式。不用于登录。",
    "不出售个人数据。",
  ]},
  { heading: "4. 处理者", paragraphs: [
    "服务数据存放在欧盟。数据库和登录位于 Supabase 的欧盟区域。应用托管在 Vercel。",
  ], bullets: [
    "Supabase：数据库和登录，欧盟区域",
    "Vercel：应用托管",
    "Brevo：发送电子邮件",
    "Stripe：付款；卡数据只在 Stripe",
  ]},
  { heading: "5. 保存", paragraphs: [
    "订阅有效期间保存数据。",
    "已归档的项目作为历史保留。",
    "应要求或在订阅结束后删除。会计法要求的账单数据会保留。",
  ]},
  { heading: "6. 本人权利", paragraphs: [
    "可以请求访问、更正或删除，限制处理，取得副本，并在依据允许时提出反对。",
    "员工数据的控制者是雇主公司。请先联系雇主。IqSoftCore 协助客户公司回复。",
    "请求发到 jarno@iqsoftcore.fi。",
  ]},
  { heading: "7. Cookie", paragraphs: [
    "服务只使用必要的会话 Cookie 和组织 Cookie。不使用分析或广告 Cookie。",
  ]},
  { heading: "8. 联系和投诉", paragraphs: [
    "jarno@iqsoftcore.fi",
    "可以向芬兰数据保护监察专员（Tietosuojavaltuutettu）投诉：tietosuoja.fi。",
  ]},
]);

