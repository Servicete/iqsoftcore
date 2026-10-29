/**
 * Korjaamoille — iqFleetSync for workshops.
 * Partner programme prices live only on this page, under the name
 * Korjaamon kumppaniohjelma. The general price list does not repeat them.
 * Finnish is the source wording. iqFleetSync™ uses ™, not ®.
 */
const WORKSHOP_PAGE = {
  fi: {
    metaTitle: "Korjaamoille | iqFleetSync™",
    metaDescription: "iqFleetSync™ on yksi palvelu kalustoyritykselle, korjaamolle tai molemmille. Jaa yksikkö samalla QR-tarralla, osoita työmääräys ja hallitse asiakkaan yksikköä. Korjaamon kumppaniohjelma.",
    title: "Korjaamoille",
    lead: "iqFleetSync™ on yksi palvelu raskaan kaluston korjaamolle, kalustoyritykselle tai molemmille. Organisaation tyyppi on kalusto, korjaamo tai molemmat. Tyyppi valitsee oletusvalikon. Sovellus ja QR-tarra ovat samat kaikille. Korjaamon työt, osavarasto ja laskutus ovat yhdessä paikassa. Kun asiakkaan kone tulee hallille, historia on jo valmiina.",
    shareTitle: "Jaettu yksikkö",
    orderTitle: "Työmääräys kumppanille",
    managedTitle: "Korjaamon hallitsema yksikkö",
    transferTitle: "Siirto asiakkaalle",
    stockTitle: "Osavarasto",
    stock: [
      "Korjaamolla on oma osavarasto. Viivakoodi kirjaa varastoon oton ja varastosta oton.",
      "Saldo ei laske alle nollan.",
    ],
    invoiceTitle: "Laskutus työmääräimistä",
    invoice: [
      "Lasku muodostuu yhdestä tai useammasta valmiista työmääräimestä.",
      "PDF-laskussa on korjaamon oma logo. Laskun voi tulostaa tai lähettää sähköpostilla. Laskulla ovat viitenumero ja pankin virtuaaliviivakoodi, ja samasta laskutuksesta voi tehdä hyvityslaskun.",
      "Verkkolaskua varten palvelu tekee Finvoice-tiedoston. Tiedosto lähetetään oman pankin tai kirjanpito-ohjelman kautta.",
      "Laskutus näkyy vain korjaamon pääkäyttäjälle. Korjaamon omat hinnat näkyvät vain korjaamolle.",
    ],
    programLead: "Korjaamon kumppaniohjelma on korjaamoiden kumppanuus- ja jälleenmyyntiohjelma. Nämä hinnat ovat vain tässä ohjelmassa.",
    share: [
      "Kalustoyritys jakaa yksiköitä luotetulle korjaamolle. Jako voi koskea kaikkia yksiköitä tai vain valittuja.",
      "Sama QR-tarra pysyy yksikössä. Yksikkö ja tarra jäävät omistajalle. Luotettu kumppani skannaa tarran ja avaa yksikön suoraan.",
      "Korjaamo, jota ei ole vielä luotettu, pyytää pääsyä omassa tilissään. Omistajan ylläpitäjä hyväksyy tai hylkää pyynnön.",
      "Omistaja voi antaa kertapääsyn, esimerkiksi 24 tunniksi tai yhdeksi työtilaukseksi, ja vierasnäkymän ilman tunnusta.",
      "Skannaa QR-tarra, niin näet viat, huoltohistorian ja määräajat.",
      "Kun jako perutaan, yksikkö näkyy vain omistajalle. Korjaamon omat historiarivit säilyvät.",
    ],
    order: [
      "Omistaja osoittaa avoimen työn yhdelle kumppanikorjaamolle. Vain se korjaamo näkee työn.",
      "Korjaamo avaa työmääräimen ja kuittaa sen valmiiksi. Viat, tehty työ ja käytetyt osat ovat samalla työmääräimellä. Kuittaus sulkee viat ja näkyy asiakkaan huoltohistoriassa korjaamon kirjauksena.",
      "Sisäinen muistiinpano näkyy vain korjaamolle.",
    ],
    managed: [
      "Korjaamo voi hallita yksiköitä asiakkaalle, joka ei vielä käytä iqFleetSync™-palvelua. Yksikkö merkitään korjaamon hallitsemaksi.",
      "Kevyessä asiakasrekisterissä ovat nimi, Y-tunnus jos se on, yhteyshenkilö, sähköposti ja puhelin.",
      "Korjaamo tulostaa QR-tarrat ja pitää katsastusmuistutukset näille yksiköille. Vian voi ilmoittaa tarrasta ilman tunnusta.",
    ],
    transfer: [
      "Kun asiakas ottaa iqFleetSync™-palvelun käyttöön, korjaamo lähettää siirtokutsun asiakkaan sähköpostiin. Asiakas hyväksyy siirron.",
      "Yksiköt, historia ja tarrat siirtyvät asiakkaalle. Jos asiakkaalla on jo sama rekisterinumero tai valmistenumero, yksiköt yhdistetään, jotta samaa yksikköä ei synny kahta.",
      "Siirron jälkeen korjaamo jää luotetuksi kumppaniksi. Sisäiset muistiinpanot jäävät korjaamolle.",
    ],
    program: [
      "Perusmaksu 14,90 €/kk (alv 0 %). Rajaton määrä jaettuja asiakasyksiköitä sisältyy perusmaksuun. Jaetuista asiakasyksiköistä ei laskuteta korjaamoa.",
      "Korjaamon hallitsemat yksiköt: 35 % alennus normaalista yksikköhinnasta. Perävaunu on puoli yksikköä ja kiinnitetty laite sisältyy hintaan, kuten yleisessä hinnastossa.",
      "Kun yksikkö on siirtynyt asiakkaalle, asiakas maksaa normaalin hinnaston hinnan. Veloitus tästä yksiköstä päättyy korjaamolta, eikä samaa yksikköä laskuteta kahteen kertaan.",
      "Korjaamo voi sisällyttää palvelun omaan huoltosopimukseensa. Korjaamon oma kalusto laskutetaan yleisen hinnaston mukaan, erillään Korjaamon kumppaniohjelmasta. Käyttäjiä on rajattomasti, ja palvelun voi irtisanoa milloin tahansa. Arvonlisävero lisätään laskulle voimassa olevan verokannan mukaan.",
    ],
    links: {
      help: "Ohjekeskus",
      terms: "Käyttöehdot",
      pricing: "Yleinen hinnasto",
      trial: "Kokeile 30 päivää ilmaiseksi",
      contact: "Ota yhteyttä",
      home: "Etusivu",
    },
  },
  sv: {
    metaTitle: "För verkstäder | iqFleetSync™",
    metaDescription: "iqFleetSync™ är en tjänst för ett åkeri, en verkstad eller båda. Dela en enhet med samma QR-dekal, tilldela en arbetsorder och hantera kundens enhet. Korjaamon kumppaniohjelma.",
    title: "För verkstäder",
    lead: "iqFleetSync™ är en tjänst för en verkstad för tung maskinpark, ett åkeri eller båda. Organisationens typ är maskinpark, verkstad eller båda. Typen väljer standardmenyn. Appen och QR-dekalen är desamma för alla. Verkstadens arbeten, reservdelslager och fakturering finns på ett ställe. När kundens maskin kommer in i verkstaden är historiken redan klar.",
    shareTitle: "En delad enhet",
    orderTitle: "Arbetsorder till en partner",
    managedTitle: "Enhet som verkstaden hanterar",
    transferTitle: "Överföring till kunden",
    stockTitle: "Reservdelslager",
    stock: [
      "Verkstaden har ett eget reservdelslager. Streckkoden bokför inleverans och uttag.",
      "Saldot går inte under noll.",
    ],
    invoiceTitle: "Fakturering från arbetsordrar",
    invoice: [
      "En faktura bildas av en eller flera färdiga arbetsordrar.",
      "PDF-fakturan har verkstadens egen logotyp. Fakturan kan skrivas ut eller skickas med e-post. På fakturan finns referensnummer och bankens virtuella streckkod, och från samma fakturering kan en kreditfaktura göras.",
      "För e-faktura gör tjänsten en Finvoice-fil. Filen skickas via den egna banken eller bokföringsprogrammet.",
      "Faktureringen syns bara för verkstadens administratör. Verkstadens egna priser syns bara för verkstaden.",
    ],
    programLead: "Korjaamon kumppaniohjelma är partner- och återförsäljarprogrammet för verkstäder. Dessa priser hör bara till det här programmet.",
    share: [
      "Ett åkeri delar enheter med en betrodd verkstad. Delningen kan gälla alla enheter eller bara valda enheter.",
      "Samma QR-dekal sitter kvar på enheten. Enheten och dekalen stannar hos ägaren. En betrodd partner skannar dekalen och öppnar enheten direkt.",
      "En verkstad som ännu inte är betrodd begär åtkomst i sitt eget konto. Ägarens administratör godkänner eller avslår begäran.",
      "Ägaren kan ge engångsåtkomst, till exempel i 24 timmar eller för en arbetsorder, och en gästvy utan konto.",
      "Skanna QR-dekalen, så ser du fel, servicehistorik och tidsgränser.",
      "När delningen återkallas är enheten synlig bara för ägaren. Verkstadens egna historikrader finns kvar.",
    ],
    order: [
      "Ägaren tilldelar ett öppet jobb till en partnerverkstad. Bara den verkstaden ser jobbet.",
      "Verkstaden öppnar arbetsordern och kvitterar den. Fel, utfört arbete och använda delar ligger på samma arbetsorder. Kvitteringen stänger felen och syns i kundens servicehistorik som verkstadens anteckning.",
      "En intern anteckning är synlig bara för verkstaden.",
    ],
    managed: [
      "En verkstad kan hantera enheter åt en kund som ännu inte använder iqFleetSync™. Enheten märks som hanterad av verkstaden.",
      "I det lätta kundregistret finns namn, finskt FO-nummer om det finns, kontaktperson, e-post och telefon.",
      "Verkstaden skriver ut QR-dekaler och håller besiktningspåminnelser för dessa enheter. Ett fel kan anmälas från dekalen utan konto.",
    ],
    transfer: [
      "När kunden börjar använda iqFleetSync™ skickar verkstaden en överföringsinbjudan till kundens e-post. Kunden godkänner överföringen.",
      "Enheter, historik och dekaler flyttas till kunden. Om kunden redan har samma registreringsnummer eller tillverkningsnummer slås enheterna ihop, så att inte en andra enhet skapas.",
      "Efter överföringen förblir verkstaden en betrodd partner. Interna anteckningar stannar hos verkstaden.",
    ],
    program: [
      "Grundavgift 14,90 €/mån (moms 0 %). Ett obegränsat antal delade kundenheter ingår i grundavgiften. Delade kundenheter faktureras inte verkstaden.",
      "Enheter som verkstaden hanterar: 35 % rabatt på det normala enhetspriset. Ett släp är en halv enhet, och ett redskap som sitter på en maskin ingår i priset, som i den allmänna prislistan.",
      "När en enhet har flyttats till kunden betalar kunden det normala listpriset. Faktureringen av den enheten upphör för verkstaden, så samma enhet faktureras inte två gånger.",
      "Verkstaden kan ta med tjänsten i sitt eget serviceavtal. Verkstadens egen maskinpark faktureras enligt den allmänna prislistan, skilt från Korjaamon kumppaniohjelma. Antalet användare är obegränsat, och tjänsten kan sägas upp när som helst. Moms läggs till på fakturan enligt gällande skattesats.",
    ],
    links: {
      help: "Hjälpcenter",
      terms: "Villkor",
      pricing: "Allmän prislista",
      trial: "Prova 30 dagar gratis",
      contact: "Kontakt",
      home: "Startsida",
    },
  },
  no: {
    metaTitle: "For verksteder | iqFleetSync™",
    metaDescription: "iqFleetSync™ er én tjeneste for et transportfirma, et verksted eller begge. Del en enhet med samme QR-merke, tildel en arbeidsordre og administrer kundens enhet. Korjaamon kumppaniohjelma.",
    title: "For verksteder",
    lead: "iqFleetSync™ er én tjeneste for et verksted for tungt utstyr, et transportfirma eller begge. Organisasjonens type er maskinpark, verksted eller begge. Typen velger standardmenyen. Appen og QR-merket er de samme for alle. Verkstedets arbeider, delelager og fakturering er på ett sted. Når kundens maskin kommer inn, er historikken allerede klar.",
    shareTitle: "En delt enhet",
    orderTitle: "Arbeidsordre til en partner",
    managedTitle: "Enhet som verkstedet administrerer",
    transferTitle: "Overføring til kunden",
    stockTitle: "Delelager",
    stock: [
      "Verkstedet har et eget delelager. Strekkoden bokfører inn på lager og ut av lager.",
      "Saldoen går ikke under null.",
    ],
    invoiceTitle: "Fakturering fra arbeidsordrer",
    invoice: [
      "En faktura lages av én eller flere ferdige arbeidsordrer.",
      "PDF-fakturaen har verkstedets egen logo. Fakturaen kan skrives ut eller sendes på e-post. På fakturaen står referansenummer og bankens virtuelle strekkode, og fra samme fakturering kan en kreditnota lages.",
      "For e-faktura lager tjenesten en Finvoice-fil. Filen sendes via egen bank eller regnskapsprogram.",
      "Faktureringen er synlig bare for verkstedets administrator. Verkstedets egne priser er synlige bare for verkstedet.",
    ],
    programLead: "Korjaamon kumppaniohjelma er partner- og forhandlerprogrammet for verksteder. Disse prisene hører bare til dette programmet.",
    share: [
      "Et transportfirma deler enheter med et betrodd verksted. Delingen kan gjelde alle enheter eller bare valgte enheter.",
      "Det samme QR-merket blir på enheten. Enheten og merket blir hos eieren. En betrodd partner skanner merket og åpner enheten direkte.",
      "Et verksted som ennå ikke er betrodd, ber om tilgang i sin egen konto. Eierens administrator godkjenner eller avslår forespørselen.",
      "Eieren kan gi engangstilgang, for eksempel i 24 timer eller for én arbeidsordre, og en gjestvisning uten konto.",
      "Skann QR-merket, så ser du feil, servicehistorikk og frister.",
      "Når delingen trekkes tilbake, er enheten synlig bare for eieren. Verkstedets egne historierader blir værende.",
    ],
    order: [
      "Eieren tildeler en åpen jobb til ett partnerverksted. Bare det verkstedet ser jobben.",
      "Verkstedet åpner arbeidsordren og kvitterer den. Feil, utført arbeid og brukte deler ligger på samme arbeidsordre. Kvitteringen lukker feilene og vises i kundens servicehistorikk som verkstedets registrering.",
      "Et internt notat er synlig bare for verkstedet.",
    ],
    managed: [
      "Et verksted kan administrere enheter for en kunde som ennå ikke bruker iqFleetSync™. Enheten merkes som administrert av verkstedet.",
      "I det lette kunderegisteret ligger navn, finsk organisasjonsnummer hvis det finnes, kontaktperson, e-post og telefon.",
      "Verkstedet skriver ut QR-merker og holder kontrollpåminnelser for disse enhetene. En feil kan meldes fra merket uten konto.",
    ],
    transfer: [
      "Når kunden tar iqFleetSync™ i bruk, sender verkstedet en overføringsinvitasjon til kundens e-post. Kunden godtar overføringen.",
      "Enheter, historikk og merker flyttes til kunden. Hvis kunden allerede har samme registreringsnummer eller produksjonsnummer, slås enhetene sammen, slik at det ikke opprettes en ny enhet.",
      "Etter overføringen forblir verkstedet en betrodd partner. Interne notater blir hos verkstedet.",
    ],
    program: [
      "Grunngebyr 14,90 €/mnd (mva. 0 %). Et ubegrenset antall delte kundenheter inngår i grunngebyret. Delte kundenheter faktureres ikke verkstedet.",
      "Enheter som verkstedet administrerer: 35 % rabatt på den vanlige enhetsprisen. En tilhenger er en halv enhet, og et redskap festet til en maskin inngår i prisen, som i den vanlige prislisten.",
      "Når en enhet er overført til kunden, betaler kunden den vanlige listeprisen. Faktureringen av den enheten opphører for verkstedet, slik at samme enhet ikke faktureres to ganger.",
      "Verkstedet kan ta tjenesten med i sin egen serviceavtale. Verkstedets egen maskinpark faktureres etter den vanlige prislisten, atskilt fra Korjaamon kumppaniohjelma. Antall brukere er ubegrenset, og tjenesten kan sies opp når som helst. Merverdiavgift legges til fakturaen etter gjeldende sats.",
    ],
    links: {
      help: "Hjelpesenter",
      terms: "Vilkår",
      pricing: "Vanlig prisliste",
      trial: "Prøv 30 dager gratis",
      contact: "Kontakt",
      home: "Forside",
    },
  },
  da: {
    metaTitle: "Til værksteder | iqFleetSync™",
    metaDescription: "iqFleetSync™ er én tjeneste for et vognmandsfirma, et værksted eller begge. Del en enhed med det samme QR-mærke, tildel en arbejdsordre og administrer kundens enhed. Korjaamon kumppaniohjelma.",
    title: "Til værksteder",
    lead: "iqFleetSync™ er én tjeneste for et værksted til tungt materiel, et vognmandsfirma eller begge. Organisationens type er vognpark, værksted eller begge. Typen vælger standardmenuen. Appen og QR-mærket er de samme for alle. Værkstedets arbejde, delelager og fakturering er samlet ét sted. Når kundens maskine kommer ind, er historikken allerede klar.",
    shareTitle: "En delt enhed",
    orderTitle: "Arbejdsordre til en partner",
    managedTitle: "Enhed som værkstedet administrerer",
    transferTitle: "Overførsel til kunden",
    stockTitle: "Delelager",
    stock: [
      "Værkstedet har sit eget delelager. Stregkoden bogfører ind på lager og ud af lager.",
      "Saldoen går ikke under nul.",
    ],
    invoiceTitle: "Fakturering fra arbejdsordrer",
    invoice: [
      "En faktura dannes af én eller flere færdige arbejdsordrer.",
      "PDF-fakturaen har værkstedets eget logo. Fakturaen kan udskrives eller sendes med e-mail. På fakturaen står referencenummer og bankens virtuelle stregkode, og fra samme fakturering kan en kreditnota laves.",
      "Til e-faktura laver tjenesten en Finvoice-fil. Filen sendes via egen bank eller regnskabsprogram.",
      "Faktureringen er kun synlig for værkstedets administrator. Værkstedets egne priser er kun synlige for værkstedet.",
    ],
    programLead: "Korjaamon kumppaniohjelma er partner- og forhandlerprogrammet for værksteder. Disse priser hører kun til dette program.",
    share: [
      "Et vognmandsfirma deler enheder med et betroet værksted. Delingen kan gælde alle enheder eller kun valgte enheder.",
      "Det samme QR-mærke bliver på enheden. Enheden og mærket bliver hos ejeren. En betroet partner scanner mærket og åbner enheden direkte.",
      "Et værksted, der endnu ikke er betroet, anmoder om adgang i sin egen konto. Ejerens administrator godkender eller afviser anmodningen.",
      "Ejeren kan give engangsadgang, for eksempel i 24 timer eller til én arbejdsordre, og en gæstevisning uden konto.",
      "Scan QR-mærket, så ser du fejl, servicehistorik og frister.",
      "Når delingen trækkes tilbage, er enheden synlig kun for ejeren. Værkstedets egne historikrækker bliver.",
    ],
    order: [
      "Ejeren tildeler et åbent job til ét partnerværksted. Kun det værksted ser jobbet.",
      "Værkstedet åbner arbejdsordren og kvitterer den. Fejl, udført arbejde og brugte dele ligger på samme arbejdsordre. Kvitteringen lukker fejlene og vises i kundens servicehistorik som værkstedets registrering.",
      "En intern note er synlig kun for værkstedet.",
    ],
    managed: [
      "Et værksted kan administrere enheder for en kunde, der endnu ikke bruger iqFleetSync™. Enheden mærkes som administreret af værkstedet.",
      "I det lette kunderegister står navn, finsk virksomhedsnummer (Y-tunnus) hvis det findes, kontaktperson, e-mail og telefon.",
      "Værkstedet udskriver QR-mærker og holder synspåmindelser for disse enheder. En fejl kan meldes fra mærket uden konto.",
    ],
    transfer: [
      "Når kunden tager iqFleetSync™ i brug, sender værkstedet en overførselsinvitation til kundens e-mail. Kunden accepterer overførslen.",
      "Enheder, historik og mærker flyttes til kunden. Hvis kunden allerede har samme registreringsnummer eller stelnummer, lægges enhederne sammen, så der ikke oprettes en ekstra enhed.",
      "Efter overførslen forbliver værkstedet en betroet partner. Interne noter bliver hos værkstedet.",
    ],
    program: [
      "Grundgebyr 14,90 €/md. (moms 0 %). Et ubegrænset antal delte kundenheder indgår i grundgebyret. Delte kundenheder faktureres ikke værkstedet.",
      "Enheder som værkstedet administrerer: 35 % rabat på den normale enhedspris. En anhænger er en halv enhed, og et redskab monteret på en maskine indgår i prisen, som i den almindelige prisliste.",
      "Når en enhed er overført til kunden, betaler kunden den normale listepris. Faktureringen af den enhed stopper for værkstedet, så den samme enhed ikke faktureres to gange.",
      "Værkstedet kan tage tjenesten med i sin egen serviceaftale. Værkstedets egen vognpark faktureres efter den almindelige prisliste, adskilt fra Korjaamon kumppaniohjelma. Antallet af brugere er ubegrænset, og tjenesten kan opsiges når som helst. Moms lægges på fakturaen efter den gældende sats.",
    ],
    links: {
      help: "Hjælpecenter",
      terms: "Vilkår",
      pricing: "Almindelig prisliste",
      trial: "Prøv 30 dage gratis",
      contact: "Kontakt",
      home: "Forside",
    },
  },
  de: {
    metaTitle: "Für Werkstätten | iqFleetSync™",
    metaDescription: "iqFleetSync™ ist ein Dienst für einen Fuhrpark, eine Werkstatt oder beides. Einheit mit demselben QR-Aufkleber teilen, einen Auftrag zuweisen und die Einheit der Kundschaft führen. Korjaamon kumppaniohjelma.",
    title: "Für Werkstätten",
    lead: "iqFleetSync™ ist ein Dienst für eine Werkstatt für schwere Maschinen, ein Fuhrunternehmen oder beides. Der Typ der Organisation ist Fuhrpark, Werkstatt oder beides. Der Typ wählt das Standardmenü. Die App und der QR-Aufkleber sind für alle gleich. Arbeiten, Teilelager und Abrechnung der Werkstatt sind an einem Ort. Wenn die Maschine der Kundschaft in die Halle kommt, ist die Historie schon da.",
    shareTitle: "Eine geteilte Einheit",
    orderTitle: "Auftrag an eine Partnerwerkstatt",
    managedTitle: "Von der Werkstatt geführte Einheit",
    transferTitle: "Übergabe an die Kundschaft",
    stockTitle: "Teilelager",
    stock: [
      "Die Werkstatt hat ein eigenes Teilelager. Der Strichcode bucht Einlagern und Auslagern.",
      "Der Bestand fällt nicht unter null.",
    ],
    invoiceTitle: "Abrechnung aus Aufträgen",
    invoice: [
      "Eine Rechnung entsteht aus einem oder mehreren erledigten Aufträgen.",
      "Die PDF-Rechnung trägt das eigene Logo der Werkstatt. Die Rechnung kann gedruckt oder per E-Mail gesendet werden. Auf der Rechnung stehen Referenznummer und der virtuelle Strichcode der Bank, und aus derselben Abrechnung kann eine Gutschrift entstehen.",
      "Für die E-Rechnung erstellt der Dienst eine Finvoice-Datei. Die Datei geht über die eigene Bank oder die Buchhaltungssoftware.",
      "Die Abrechnung ist nur für die Administration der Werkstatt sichtbar. Die eigenen Preise der Werkstatt sind nur für die Werkstatt sichtbar.",
    ],
    programLead: "Korjaamon kumppaniohjelma ist das Partner- und Wiederverkäuferprogramm für Werkstätten. Diese Preise gelten nur in diesem Programm.",
    share: [
      "Ein Fuhrunternehmen teilt Einheiten mit einer vertrauten Werkstatt. Die Freigabe kann alle Einheiten oder nur ausgewählte umfassen.",
      "Derselbe QR-Aufkleber bleibt an der Einheit. Einheit und Aufkleber bleiben bei der Eigentümerseite. Eine vertraute Partnerwerkstatt scannt den Aufkleber und öffnet die Einheit direkt.",
      "Eine Werkstatt, die noch nicht vertraut ist, beantragt den Zugang im eigenen Konto. Die Administration der Eigentümerseite genehmigt oder lehnt den Antrag ab.",
      "Die Eigentümerseite kann einen einmaligen Zugang geben, zum Beispiel für 24 Stunden oder für einen Auftrag, und eine Gastansicht ohne Konto.",
      "Den QR-Aufkleber scannen, dann sind Mängel, Servicehistorie und Fristen zu sehen.",
      "Wird die Freigabe widerrufen, ist die Einheit nur für die Eigentümerseite sichtbar. Die eigenen Historieneinträge der Werkstatt bleiben.",
    ],
    order: [
      "Die Eigentümerseite weist eine offene Arbeit einer Partnerwerkstatt zu. Nur diese Werkstatt sieht die Arbeit.",
      "Die Werkstatt öffnet den Auftrag und schließt ihn ab. Mängel, erledigte Arbeit und verbaute Teile stehen auf demselben Auftrag. Der Abschluss schließt die Mängel und erscheint in der Servicehistorie der Kundschaft als Eintrag der Werkstatt.",
      "Eine interne Notiz ist nur für die Werkstatt sichtbar.",
    ],
    managed: [
      "Eine Werkstatt kann Einheiten für Kundschaft führen, die iqFleetSync™ noch nicht nutzt. Die Einheit ist als von der Werkstatt geführt gekennzeichnet.",
      "Im schlanken Kundenregister stehen Name, finnische Geschäftskennung falls vorhanden, Kontaktperson, E-Mail und Telefon.",
      "Die Werkstatt druckt die QR-Aufkleber und führt die Prüferinnerungen für diese Einheiten. Eine Störung lässt sich vom Aufkleber ohne Konto melden.",
    ],
    transfer: [
      "Wenn die Kundschaft iqFleetSync™ übernimmt, sendet die Werkstatt eine Übergabeeinladung an die E-Mail der Kundschaft. Die Kundschaft nimmt die Übergabe an.",
      "Einheiten, Historie und Aufkleber gehen an die Kundschaft. Gibt es dort schon dasselbe Kennzeichen oder dieselbe Fabriknummer, werden die Einheiten zusammengeführt, damit keine zweite Einheit entsteht.",
      "Nach der Übergabe bleibt die Werkstatt eine vertraute Partnerin. Interne Notizen bleiben bei der Werkstatt.",
    ],
    program: [
      "Grundgebühr 14,90 € im Monat (MwSt. 0 %). Eine unbegrenzte Zahl geteilter Kundeneinheiten ist in der Grundgebühr enthalten. Geteilte Kundeneinheiten werden der Werkstatt nicht berechnet.",
      "Von der Werkstatt geführte Einheiten: 35 % Nachlass auf den normalen Einheitspreis. Ein Anhänger ist eine halbe Einheit, und ein an einer Maschine befestigtes Gerät ist im Preis enthalten, wie in der allgemeinen Preisliste.",
      "Nach der Übergabe einer Einheit zahlt die Kundschaft den normalen Listenpreis. Die Berechnung dieser Einheit endet für die Werkstatt, damit dieselbe Einheit nicht zweimal berechnet wird.",
      "Die Werkstatt kann den Dienst in den eigenen Wartungsvertrag aufnehmen. Der eigene Fuhrpark der Werkstatt wird nach der allgemeinen Preisliste berechnet, getrennt von Korjaamon kumppaniohjelma. Die Zahl der Benutzer ist unbegrenzt, und der Dienst kann jederzeit gekündigt werden. Die Umsatzsteuer wird auf der Rechnung mit dem geltenden Satz hinzugefügt.",
    ],
    links: {
      help: "Hilfe",
      terms: "Bedingungen",
      pricing: "Allgemeine Preisliste",
      trial: "30 Tage kostenlos testen",
      contact: "Kontakt",
      home: "Startseite",
    },
  },
  en: {
    metaTitle: "For workshops | iqFleetSync™",
    metaDescription: "iqFleetSync™ is one service for a fleet company, a workshop, or both. Share a unit with the same QR sticker, assign a work order, and manage a customer’s unit. Korjaamon kumppaniohjelma.",
    title: "For workshops",
    lead: "iqFleetSync™ is one service for a heavy-equipment workshop, a fleet company, or both. An organisation has a type: fleet, workshop, or both. The type chooses the default menu. The app and the QR sticker are the same for everyone. The workshop’s jobs, parts stock and invoicing are in one place. When the customer’s machine arrives, the history is already there.",
    shareTitle: "A shared unit",
    orderTitle: "A work order for a partner",
    managedTitle: "A workshop-managed unit",
    transferTitle: "Transfer to the customer",
    stockTitle: "Parts stock",
    stock: [
      "The workshop has its own parts stock. A barcode records stock in and stock out.",
      "The balance does not fall below zero.",
    ],
    invoiceTitle: "Invoicing from work orders",
    invoice: [
      "An invoice is built from one or more completed work orders.",
      "The PDF invoice carries the workshop’s own logo. The invoice can be printed or sent by email. It shows the payment reference and the bank’s virtual barcode, and a credit invoice can be made from the same invoicing.",
      "For an e-invoice the service creates a Finvoice file. The file is sent through the workshop’s own bank or accounting software.",
      "Invoicing is visible only to the workshop administrator. The workshop’s own prices are visible only to the workshop.",
    ],
    programLead: "Korjaamon kumppaniohjelma is the partner and reseller programme for workshops. These prices belong only to this programme.",
    share: [
      "A fleet company shares units with a trusted workshop. The share can cover every unit or only selected units.",
      "The same QR sticker stays on the unit. The unit and the sticker remain with the owner. A trusted partner scans the sticker and opens the unit directly.",
      "A workshop that is not yet trusted requests access in its own account. The owner’s administrator approves or rejects the request.",
      "The owner can give one-time access, for example for 24 hours or for one work order, and a guest view without an account.",
      "Scan the QR sticker and you see the defects, the service history and the deadlines.",
      "When the share is revoked, the unit is visible only to the owner. The workshop keeps its own history rows.",
    ],
    order: [
      "The owner assigns an open job to one partner workshop. Only that workshop sees the job.",
      "The workshop opens the work order and completes it. Defects, the work done and the parts used are on the same work order. Completion closes the defects and shows in the customer’s service history as the workshop’s entry.",
      "An internal note is visible only to the workshop.",
    ],
    managed: [
      "A workshop can manage units for a customer that does not use iqFleetSync™ yet. The unit is marked workshop-managed.",
      "The lightweight customer register holds the name, a Finnish business ID when there is one, a contact person, email and phone.",
      "The workshop prints the QR stickers and keeps inspection reminders for these units. A defect can be reported from the sticker without an account.",
    ],
    transfer: [
      "When the customer adopts iqFleetSync™, the workshop sends a transfer invite to the customer’s email. The customer accepts the transfer.",
      "The units, the history and the stickers move to the customer. If the customer already has the same registration number or serial number, the units are merged so a second unit is not created.",
      "After the transfer the workshop remains a trusted partner. Internal notes stay with the workshop.",
    ],
    program: [
      "Base fee 14.90 € per month (VAT 0%). An unlimited number of shared customer units is included in the base fee. Shared customer units are not billed to the workshop.",
      "Workshop-managed units: a 35% discount from the normal unit price. A trailer is half a unit, and an attachment fixed to a machine is included in the price, as on the general price list.",
      "When a unit has transferred to the customer, the customer pays the normal list price. Billing of that unit ends for the workshop, so the same unit is not billed twice.",
      "The workshop can include the service in its own maintenance contract. The workshop’s own fleet is billed on the general price list, separately from Korjaamon kumppaniohjelma. There is no limit on users, and the service can be cancelled at any time. Value added tax is added on the invoice at the rate in force.",
    ],
    links: {
      help: "Help center",
      terms: "Terms",
      pricing: "General price list",
      trial: "Try 30 days free",
      contact: "Contact",
      home: "Home",
    },
  },
  es: {
    metaTitle: "Para talleres | iqFleetSync™",
    metaDescription: "iqFleetSync™ es un solo servicio para una empresa de flota, un taller o ambos. Comparte una unidad con la misma etiqueta QR, asigna una orden de trabajo y gestiona la unidad de la clientela. Korjaamon kumppaniohjelma.",
    title: "Para talleres",
    lead: "iqFleetSync™ es un solo servicio para un taller de maquinaria pesada, una empresa de flota o ambos. El tipo de la organización es flota, taller o ambos. El tipo elige el menú predeterminado. La aplicación y la etiqueta QR son las mismas para todo el mundo. Los trabajos del taller, el almacén de piezas y la facturación están en un solo lugar. Cuando la máquina de la clientela llega al taller, el historial ya está listo.",
    shareTitle: "Una unidad compartida",
    orderTitle: "Orden de trabajo para un taller asociado",
    managedTitle: "Unidad gestionada por el taller",
    transferTitle: "Traspaso a la clientela",
    stockTitle: "Almacén de piezas",
    stock: [
      "El taller tiene su propio almacén de piezas. El código de barras registra la entrada y la salida de stock.",
      "El saldo no baja de cero.",
    ],
    invoiceTitle: "Facturación desde órdenes de trabajo",
    invoice: [
      "La factura se forma a partir de una o varias órdenes de trabajo terminadas.",
      "La factura PDF lleva el logo propio del taller. Se puede imprimir o enviar por correo. La factura muestra el número de referencia y el código de barras virtual del banco, y de la misma facturación se puede hacer una factura de abono.",
      "Para la factura electrónica el servicio crea un archivo Finvoice. El archivo se envía a través del propio banco o del programa de contabilidad.",
      "La facturación es visible solo para la administración del taller. Los precios propios del taller son visibles solo para el taller.",
    ],
    programLead: "Korjaamon kumppaniohjelma es el programa de socios y reventa para talleres. Estos precios pertenecen solo a este programa.",
    share: [
      "Una empresa de flota comparte unidades con un taller de confianza. El uso compartido puede cubrir todas las unidades o solo las elegidas.",
      "La misma etiqueta QR sigue en la unidad. La unidad y la etiqueta se quedan con quien es propietaria. Un taller de confianza escanea la etiqueta y abre la unidad directamente.",
      "Un taller que todavía no es de confianza solicita acceso en su propia cuenta. La administración de la propietaria aprueba o rechaza la solicitud.",
      "La propietaria puede dar un acceso de una sola vez, por ejemplo durante 24 horas o para una orden de trabajo, y una vista de invitación sin cuenta.",
      "Escanee la etiqueta QR y verá las averías, el historial de mantenimiento y los plazos.",
      "Cuando se revoca el uso compartido, la unidad es visible solo para la propietaria. Las filas de historial propias del taller se conservan.",
    ],
    order: [
      "La propietaria asigna un trabajo abierto a un solo taller asociado. Solo ese taller ve el trabajo.",
      "El taller abre la orden y la completa. Las averías, el trabajo hecho y las piezas usadas están en la misma orden. Al completarla se cierran las averías y queda en el historial de mantenimiento de la clientela como registro del taller.",
      "Una nota interna es visible solo para el taller.",
    ],
    managed: [
      "Un taller puede gestionar unidades para clientela que todavía no usa iqFleetSync™. La unidad se marca como gestionada por el taller.",
      "El registro ligero de clientela guarda el nombre, el Y-tunnus finlandés si existe, una persona de contacto, el correo y el teléfono.",
      "El taller imprime las etiquetas QR y mantiene los avisos de inspección de estas unidades. Se puede avisar de una avería desde la etiqueta sin cuenta.",
    ],
    transfer: [
      "Cuando la clientela adopta iqFleetSync™, el taller envía una invitación de traspaso al correo de la clientela. La clientela acepta el traspaso.",
      "Las unidades, el historial y las etiquetas pasan a la clientela. Si ya existe la misma matrícula o el mismo número de fabricación, las unidades se unen para que no se cree una segunda.",
      "Después del traspaso el taller sigue siendo un socio de confianza. Las notas internas se quedan en el taller.",
    ],
    program: [
      "Cuota base 14,90 €/mes (IVA 0 %). Un número ilimitado de unidades compartidas de la clientela está incluido en la cuota base. Esas unidades compartidas no se facturan al taller.",
      "Unidades gestionadas por el taller: 35 % de descuento sobre el precio normal por unidad. Un remolque es media unidad, y un implemento fijado a una máquina está incluido en el precio, como en la lista general.",
      "Cuando una unidad se ha traspasado a la clientela, la clientela paga el precio normal de la lista. La facturación de esa unidad termina para el taller, así que la misma unidad no se factura dos veces.",
      "El taller puede incluir el servicio en su propio contrato de mantenimiento. La flota propia del taller se factura con la lista general, aparte de Korjaamon kumppaniohjelma. El número de usuarios es ilimitado y el servicio se puede cancelar en cualquier momento. El IVA se añade en la factura al tipo vigente.",
    ],
    links: {
      help: "Ayuda",
      terms: "Condiciones",
      pricing: "Lista de precios general",
      trial: "Prueba 30 días gratis",
      contact: "Contacto",
      home: "Inicio",
    },
  },
  it: {
    metaTitle: "Per le officine | iqFleetSync™",
    metaDescription: "iqFleetSync™ è un solo servizio per un’azienda di flotta, un’officina o entrambe. Condividi un’unità con la stessa etichetta QR, assegna un ordine di lavoro e gestisci l’unità della clientela. Korjaamon kumppaniohjelma.",
    title: "Per le officine",
    lead: "iqFleetSync™ è un solo servizio per un’officina di macchine pesanti, un’azienda di flotta o entrambe. Il tipo dell’organizzazione è flotta, officina o entrambi. Il tipo sceglie il menu predefinito. L’app e l’etichetta QR sono le stesse per tutti. I lavori dell’officina, il magazzino ricambi e la fatturazione sono in un unico posto. Quando la macchina della clientela arriva in officina, lo storico è già pronto.",
    shareTitle: "Un’unità condivisa",
    orderTitle: "Ordine di lavoro per un’officina partner",
    managedTitle: "Unità gestita dall’officina",
    transferTitle: "Trasferimento alla clientela",
    stockTitle: "Magazzino ricambi",
    stock: [
      "L’officina ha un proprio magazzino ricambi. Il codice a barre registra il carico e lo scarico.",
      "La giacenza non scende sotto zero.",
    ],
    invoiceTitle: "Fatturazione dagli ordini di lavoro",
    invoice: [
      "La fattura nasce da uno o più ordini di lavoro completati.",
      "La fattura PDF ha il logo proprio dell’officina. Si può stampare o inviare per e-mail. In fattura ci sono il riferimento di pagamento e il codice a barre virtuale della banca, e dalla stessa fatturazione si può fare una nota di credito.",
      "Per la fattura elettronica il servizio crea un file Finvoice. Il file si invia tramite la propria banca o il programma di contabilità.",
      "La fatturazione è visibile solo all’amministrazione dell’officina. I prezzi propri dell’officina sono visibili solo all’officina.",
    ],
    programLead: "Korjaamon kumppaniohjelma è il programma partner e rivendita per le officine. Questi prezzi appartengono solo a questo programma.",
    share: [
      "Un’azienda di flotta condivide le unità con un’officina di fiducia. La condivisione può riguardare tutte le unità o solo quelle scelte.",
      "La stessa etichetta QR resta sull’unità. Unità ed etichetta restano a chi ne è proprietaria. Un’officina di fiducia scansiona l’etichetta e apre l’unità direttamente.",
      "Un’officina non ancora di fiducia chiede l’accesso nel proprio account. L’amministrazione della proprietaria approva o rifiuta la richiesta.",
      "La proprietaria può dare un accesso una tantum, per esempio per 24 ore o per un ordine di lavoro, e una vista ospite senza account.",
      "Scansiona l’etichetta QR e vedi i guasti, lo storico di manutenzione e le scadenze.",
      "Quando la condivisione viene revocata, l’unità è visibile solo a chi ne è proprietaria. Le righe di storico proprie dell’officina restano.",
    ],
    order: [
      "La proprietaria assegna un lavoro aperto a una sola officina partner. Solo quell’officina vede il lavoro.",
      "L’officina apre l’ordine e lo completa. Guasti, lavoro svolto e ricambi usati stanno sullo stesso ordine. Il completamento chiude i guasti e compare nello storico di manutenzione della clientela come registrazione dell’officina.",
      "Una nota interna è visibile solo all’officina.",
    ],
    managed: [
      "Un’officina può gestire unità per clientela che non usa ancora iqFleetSync™. L’unità è contrassegnata come gestita dall’officina.",
      "Nel registro leggero della clientela ci sono nome, Y-tunnus finlandese se c’è, una persona di contatto, e-mail e telefono.",
      "L’officina stampa le etichette QR e tiene i promemoria di revisione per queste unità. Un guasto si può segnalare dall’etichetta senza account.",
    ],
    transfer: [
      "Quando la clientela adotta iqFleetSync™, l’officina invia un invito di trasferimento all’e-mail della clientela. La clientela accetta il trasferimento.",
      "Unità, storico ed etichette passano alla clientela. Se esiste già la stessa targa o lo stesso numero di fabbricazione, le unità si uniscono, così non nasce una seconda unità.",
      "Dopo il trasferimento l’officina resta un partner di fiducia. Le note interne restano all’officina.",
    ],
    program: [
      "Canone base 14,90 €/mese (IVA 0 %). Un numero illimitato di unità condivise della clientela è incluso nel canone base. Le unità condivise della clientela non sono fatturate all’officina.",
      "Unità gestite dall’officina: sconto del 35 % sul prezzo normale per unità. Un rimorchio è mezza unità, e un attrezzo fissato a una macchina è incluso nel prezzo, come nel listino generale.",
      "Quando un’unità è trasferita alla clientela, la clientela paga il prezzo normale di listino. La fatturazione di quell’unità termina per l’officina, così la stessa unità non viene fatturata due volte.",
      "L’officina può includere il servizio nel proprio contratto di manutenzione. La flotta propria dell’officina è fatturata con il listino generale, separatamente da Korjaamon kumppaniohjelma. Gli utenti sono illimitati e il servizio si può disdire in qualsiasi momento. L’IVA è aggiunta in fattura con l’aliquota in vigore.",
    ],
    links: {
      help: "Guida",
      terms: "Condizioni",
      pricing: "Listino generale",
      trial: "Prova 30 giorni gratis",
      contact: "Contatto",
      home: "Home",
    },
  },
  fr: {
    metaTitle: "Pour les ateliers | iqFleetSync™",
    metaDescription: "iqFleetSync™ est un seul service pour une entreprise de parc, un atelier ou les deux. Partagez une unité avec la même étiquette QR, assignez un ordre de travail et gérez l’unité de la clientèle. Korjaamon kumppaniohjelma.",
    title: "Pour les ateliers",
    lead: "iqFleetSync™ est un seul service pour un atelier d’engins lourds, une entreprise de parc ou les deux. Le type de l’organisation est parc, atelier ou les deux. Le type choisit le menu par défaut. L’application et l’étiquette QR sont les mêmes pour tout le monde. Les travaux de l’atelier, le stock de pièces et la facturation sont au même endroit. Quand la machine de la clientèle arrive à l’atelier, l’historique est déjà là.",
    shareTitle: "Une unité partagée",
    orderTitle: "Ordre de travail pour un atelier partenaire",
    managedTitle: "Unité gérée par l’atelier",
    transferTitle: "Transfert vers la clientèle",
    stockTitle: "Stock de pièces",
    stock: [
      "L’atelier a son propre stock de pièces. Le code-barres enregistre l’entrée et la sortie de stock.",
      "Le solde ne descend pas sous zéro.",
    ],
    invoiceTitle: "Facturation à partir des ordres de travail",
    invoice: [
      "La facture est formée d’un ou de plusieurs ordres de travail terminés.",
      "La facture PDF porte le logo propre de l’atelier. Elle peut être imprimée ou envoyée par e-mail. La facture montre la référence de paiement et le code-barres virtuel de la banque, et un avoir peut être fait à partir de la même facturation.",
      "Pour la facture électronique, le service crée un fichier Finvoice. Le fichier est envoyé via la propre banque ou le logiciel de comptabilité.",
      "La facturation est visible seulement pour l’administration de l’atelier. Les prix propres de l’atelier sont visibles seulement pour l’atelier.",
    ],
    programLead: "Korjaamon kumppaniohjelma est le programme partenaire et revendeur pour les ateliers. Ces prix appartiennent seulement à ce programme.",
    share: [
      "Une entreprise de parc partage des unités avec un atelier de confiance. Le partage peut couvrir toutes les unités ou seulement celles qui sont choisies.",
      "La même étiquette QR reste sur l’unité. L’unité et l’étiquette restent chez le propriétaire. Un atelier de confiance scanne l’étiquette et ouvre l’unité directement.",
      "Un atelier qui n’est pas encore de confiance demande l’accès dans son propre compte. L’administration du propriétaire approuve ou refuse la demande.",
      "Le propriétaire peut donner un accès unique, par exemple pour 24 heures ou pour un ordre de travail, et une vue invité sans compte.",
      "Scannez l’étiquette QR et vous voyez les pannes, l’historique d’entretien et les échéances.",
      "Quand le partage est retiré, l’unité est visible seulement pour le propriétaire. Les lignes d’historique propres à l’atelier restent.",
    ],
    order: [
      "Le propriétaire assigne un travail ouvert à un seul atelier partenaire. Seul cet atelier voit le travail.",
      "L’atelier ouvre l’ordre et le termine. Les pannes, le travail fait et les pièces utilisées sont sur le même ordre. La clôture ferme les pannes et apparaît dans l’historique d’entretien de la clientèle comme écriture de l’atelier.",
      "Une note interne est visible seulement pour l’atelier.",
    ],
    managed: [
      "Un atelier peut gérer des unités pour une clientèle qui n’utilise pas encore iqFleetSync™. L’unité est marquée comme gérée par l’atelier.",
      "Le registre léger de clientèle contient le nom, le Y-tunnus finlandais s’il existe, une personne de contact, l’e-mail et le téléphone.",
      "L’atelier imprime les étiquettes QR et tient les rappels de contrôle pour ces unités. Une panne peut être signalée depuis l’étiquette sans compte.",
    ],
    transfer: [
      "Quand la clientèle adopte iqFleetSync™, l’atelier envoie une invitation de transfert à l’e-mail de la clientèle. La clientèle accepte le transfert.",
      "Les unités, l’historique et les étiquettes passent à la clientèle. Si la même immatriculation ou le même numéro de fabrication existe déjà, les unités sont fusionnées pour qu’une seconde unité ne soit pas créée.",
      "Après le transfert, l’atelier reste un partenaire de confiance. Les notes internes restent à l’atelier.",
    ],
    program: [
      "Forfait de base 14,90 €/mois (TVA 0 %). Un nombre illimité d’unités partagées de la clientèle est inclus dans le forfait de base. Les unités partagées de la clientèle ne sont pas facturées à l’atelier.",
      "Unités gérées par l’atelier : 35 % de réduction sur le prix unitaire normal. Une remorque est une demi-unité, et un équipement fixé à une machine est inclus dans le prix, comme sur la liste générale.",
      "Quand une unité a été transférée à la clientèle, la clientèle paie le prix normal du tarif. La facturation de cette unité s’arrête pour l’atelier, afin que la même unité ne soit pas facturée deux fois.",
      "L’atelier peut inclure le service dans son propre contrat d’entretien. Le parc propre de l’atelier est facturé selon la liste générale, à part de Korjaamon kumppaniohjelma. Le nombre d’utilisateurs est illimité et le service peut être résilié à tout moment. La TVA est ajoutée sur la facture au taux en vigueur.",
    ],
    links: {
      help: "Aide",
      terms: "Conditions",
      pricing: "Liste de prix générale",
      trial: "Essai de 30 jours gratuit",
      contact: "Contact",
      home: "Accueil",
    },
  },
  et: {
    metaTitle: "Töökodadele | iqFleetSync™",
    metaDescription: "iqFleetSync™ on üks teenus autopargile, töökojale või mõlemale. Jaga üksust sama QR-kleebisega, suuna töökäsk ja halda kliendi üksust. Korjaamon kumppaniohjelma.",
    title: "Töökodadele",
    lead: "iqFleetSync™ on üks teenus rasketehnika töökojale, autopargi ettevõttele või mõlemale. Organisatsiooni tüüp on autopark, töökoda või mõlemad. Tüüp valib vaikemenüü. Rakendus ja QR-kleebis on kõigile samad. Töökoja tööd, varuosaladu ja arveldus on ühes kohas. Kui kliendi masin jõuab töökotta, on ajalugu juba olemas.",
    shareTitle: "Jagatud üksus",
    orderTitle: "Töökäsk partnerile",
    managedTitle: "Töökoja hallatav üksus",
    transferTitle: "Üleandmine kliendile",
    stockTitle: "Varuosaladu",
    stock: [
      "Töökojal on oma varuosaladu. Vöötkood kirjutab lattu võtmise ja laost võtmise.",
      "Laoseis ei lange alla nulli.",
    ],
    invoiceTitle: "Arveldus töökäskudest",
    invoice: [
      "Arve tekib ühest või mitmest valmis töökäsust.",
      "PDF-arvel on töökoja oma logo. Arve saab printida või saata e-postiga. Arvel on viitenumber ja panga virtuaalne vöötkood ning samast arveldusest saab teha kreeditarve.",
      "E-arve jaoks teeb teenus Finvoice-faili. Fail saadetakse oma panga või raamatupidamistarkvara kaudu.",
      "Arveldus on nähtav ainult töökoja administraatorile. Töökoja oma hinnad on nähtavad ainult töökojale.",
    ],
    programLead: "Korjaamon kumppaniohjelma on töökodade partner- ja edasimüüjaprogramm. Need hinnad kuuluvad ainult sellesse programmi.",
    share: [
      "Autopargi ettevõte jagab üksusi usaldusväärse töökojaga. Jagamine võib hõlmata kõiki üksusi või ainult valituid.",
      "Sama QR-kleebis jääb üksusele. Üksus ja kleebis jäävad omanikule. Usaldusväärne partner skannib kleebise ja avab üksuse otse.",
      "Töökoda, mis ei ole veel usaldusväärne, küsib ligipääsu oma kontol. Omaniku administraator kinnitab või lükkab taotluse tagasi.",
      "Omanik võib anda ühekordse ligipääsu, näiteks 24 tunniks või üheks töökäsuks, ja külalisvaate ilma kontota.",
      "Skanni QR-kleebis ja näed rikkeid, hooldusajalugu ja tähtaegu.",
      "Kui jagamine tühistatakse, on üksus nähtav ainult omanikule. Töökoja oma ajaloo read jäävad alles.",
    ],
    order: [
      "Omanik suunab avatud töö ühele partnertöökojale. Ainult see töökoda näeb tööd.",
      "Töökoda avab töökäsu ja märgib selle valmis. Rikked, tehtud töö ja kasutatud osad on samal töökäsul. Valmimine sulgeb rikked ja on näha kliendi hooldusajaloos töökoja kirjena.",
      "Sisemine märkus on nähtav ainult töökojale.",
    ],
    managed: [
      "Töökoda võib hallata üksusi kliendile, kes iqFleetSync™-i veel ei kasuta. Üksus märgitakse töökoja hallatavaks.",
      "Kerges kliendiregistris on nimi, Soome Y-tunnus, kui see on olemas, kontaktisik, e-post ja telefon.",
      "Töökoda trükib QR-kleebised ja peab nende üksuste ülevaatuse meeldetuletusi. Rikke saab kleebiselt teatada ilma kontota.",
    ],
    transfer: [
      "Kui klient võtab iqFleetSync™-i kasutusele, saadab töökoda üleviimiskutse kliendi e-postile. Klient võtab üleviimise vastu.",
      "Üksused, ajalugu ja kleebised liiguvad kliendile. Kui kliendil on juba sama registreerimisnumber või tehasenumber, ühendatakse üksused, et teist üksust ei tekiks.",
      "Pärast üleviimist jääb töökoda usaldusväärseks partneriks. Sisemised märkused jäävad töökojale.",
    ],
    program: [
      "Põhitasu 14,90 € kuus (käibemaks 0 %). Piiramatu arv jagatud kliendiüksusi sisaldub põhitasus. Jagatud kliendiüksusi töökojale ei arveldata.",
      "Töökoja hallatavad üksused: 35 % allahindlust tavalisest ühikuhinnast. Haagis on pool ühikut ja masina külge kinnitatud seade sisaldub hinnas, nagu üldises hinnakirjas.",
      "Kui üksus on kliendile üle viidud, maksab klient tavalist hinnakirja hinda. Selle üksuse arveldus lõpeb töökoja jaoks, nii et sama üksust ei arveldata kaks korda.",
      "Töökoda võib teenuse oma hoolduslepingusse lisada. Töökoja oma autopark arveldatakse üldise hinnakirja järgi, Korjaamon kumppaniohjelmast eraldi. Kasutajaid on piiramatult ja teenuse võib igal ajal lõpetada. Käibemaks lisatakse arvele kehtiva määra järgi.",
    ],
    links: {
      help: "Abikeskus",
      terms: "Tingimused",
      pricing: "Üldine hinnakiri",
      trial: "Proovi 30 päeva tasuta",
      contact: "Kontakt",
      home: "Avaleht",
    },
  },
  lv: {
    metaTitle: "Darbnīcām | iqFleetSync™",
    metaDescription: "iqFleetSync™ ir viens pakalpojums autoparkam, darbnīcai vai abiem. Dalieties ar vienību ar to pašu QR uzlīmi, piešķiriet darba uzdevumu un pārvaldiet klienta vienību. Korjaamon kumppaniohjelma.",
    title: "Darbnīcām",
    lead: "iqFleetSync™ ir viens pakalpojums smagās tehnikas darbnīcai, autoparka uzņēmumam vai abiem. Organizācijas tips ir autoparks, darbnīca vai abi. Tips izvēlas noklusējuma izvēlni. Lietotne un QR uzlīme ir vienāda visiem. Darbnīcas darbi, detaļu noliktava un rēķini ir vienuviet. Kad klienta mašīna ierodas darbnīcā, vēsture jau ir gatava.",
    shareTitle: "Koplietota vienība",
    orderTitle: "Darba uzdevums partnerim",
    managedTitle: "Darbnīcas pārvaldīta vienība",
    transferTitle: "Nodošana klientam",
    stockTitle: "Detaļu noliktava",
    stock: [
      "Darbnīcai ir sava detaļu noliktava. Svītrkods ieraksta pieņemšanu noliktavā un izņemšanu.",
      "Atlikums nenokrīt zem nulles.",
    ],
    invoiceTitle: "Rēķini no darba uzdevumiem",
    invoice: [
      "Rēķins veidojas no viena vai vairākiem pabeigtiem darba uzdevumiem.",
      "PDF rēķinam ir darbnīcas paša logo. Rēķinu var izdrukāt vai nosūtīt e-pastā. Rēķinā ir atsauces numurs un bankas virtuālais svītrkods, un no tās pašas rēķināšanas var izveidot kredītrēķinu.",
      "E-rēķinam pakalpojums izveido Finvoice failu. Fails tiek nosūtīts caur savu banku vai grāmatvedības programmu.",
      "Rēķināšana ir redzama tikai darbnīcas administratoram. Darbnīcas pašu cenas ir redzamas tikai darbnīcai.",
    ],
    programLead: "Korjaamon kumppaniohjelma ir partneru un tālākpārdevēju programma darbnīcām. Šīs cenas pieder tikai šai programmai.",
    share: [
      "Autoparka uzņēmums koplieto vienības ar uzticamu darbnīcu. Koplietošana var aptvert visas vienības vai tikai izvēlētās.",
      "Tā pati QR uzlīme paliek uz vienības. Vienība un uzlīme paliek īpašniekam. Uzticams partneris noskenē uzlīmi un atver vienību uzreiz.",
      "Darbnīca, kas vēl nav uzticama, pieprasa piekļuvi savā kontā. Īpašnieka administrators apstiprina vai noraida pieprasījumu.",
      "Īpašnieks var dot vienreizēju piekļuvi, piemēram, uz 24 stundām vai vienam darba uzdevumam, un viesa skatu bez konta.",
      "Noskenējiet QR uzlīmi un redzat defektus, apkopes vēsturi un termiņus.",
      "Kad koplietošana tiek atsaukta, vienība ir redzama tikai īpašniekam. Darbnīcas pašu vēstures rindas paliek.",
    ],
    order: [
      "Īpašnieks piešķir atvērtu darbu vienai partnera darbnīcai. Tikai šī darbnīca redz darbu.",
      "Darbnīca atver darba uzdevumu un pabeidz to. Defekti, paveiktais darbs un izmantotās detaļas ir vienā darba uzdevumā. Pabeigšana aizver defektus un ir redzama klienta apkopes vēsturē kā darbnīcas ieraksts.",
      "Iekšēja piezīme ir redzama tikai darbnīcai.",
    ],
    managed: [
      "Darbnīca var pārvaldīt vienības klientam, kurš vēl nelieto iqFleetSync™. Vienība tiek atzīmēta kā darbnīcas pārvaldīta.",
      "Vieglajā klientu reģistrā ir vārds, Somijas uzņēmuma numurs, ja tāds ir, kontaktpersona, e-pasts un tālrunis.",
      "Darbnīca drukā QR uzlīmes un tur pārbaudes atgādinājumus šīm vienībām. Defektu var paziņot no uzlīmes bez konta.",
    ],
    transfer: [
      "Kad klients sāk lietot iqFleetSync™, darbnīca nosūta nodošanas uzaicinājumu uz klienta e-pastu. Klients apstiprina nodošanu.",
      "Vienības, vēsture un uzlīmes pāriet klientam. Ja klientam jau ir tas pats reģistrācijas numurs vai rūpnīcas numurs, vienības apvieno, lai nerastos otra vienība.",
      "Pēc nodošanas darbnīca paliek uzticams partneris. Iekšējās piezīmes paliek darbnīcai.",
    ],
    program: [
      "Pamata maksa 14,90 € mēnesī (PVN 0 %). Neierobežots skaits koplietotu klienta vienību ir iekļauts pamata maksā. Koplietotas klienta vienības darbnīcai netiek rēķinātas.",
      "Darbnīcas pārvaldītās vienības: 35 % atlaide no parastās vienības cenas. Piekabe ir puse vienības, un mašīnai piestiprināta iekārta ir iekļauta cenā, tāpat kā vispārējā cenrādī.",
      "Kad vienība ir nodota klientam, klients maksā parasto cenrāža cenu. Šīs vienības rēķināšana darbnīcai beidzas, lai tā pati vienība netiktu rēķināta divreiz.",
      "Darbnīca var iekļaut pakalpojumu savā apkopes līgumā. Darbnīcas paša autoparks tiek rēķināts pēc vispārējā cenrāža, atsevišķi no Korjaamon kumppaniohjelma. Lietotāju skaits ir neierobežots, un pakalpojumu var atteikt jebkurā brīdī. PVN tiek pievienots rēķinam pēc spēkā esošās likmes.",
    ],
    links: {
      help: "Palīdzība",
      terms: "Noteikumi",
      pricing: "Vispārējais cenrādis",
      trial: "Izmēģiniet 30 dienas bez maksas",
      contact: "Kontakts",
      home: "Sākums",
    },
  },
  lt: {
    metaTitle: "Dirbtuvėms | iqFleetSync™",
    metaDescription: "iqFleetSync™ yra viena paslauga autoparkui, dirbtuvėms arba abiem. Dalinkitės vienetu ta pačia QR lipduku, paskirkite darbo užsakymą ir valdykite kliento vienetą. Korjaamon kumppaniohjelma.",
    title: "Dirbtuvėms",
    lead: "iqFleetSync™ yra viena paslauga sunkiosios technikos dirbtuvėms, autoparko įmonei arba abiem. Organizacijos tipas yra autoparkas, dirbtuvės arba abu. Tipas parenka numatytąjį meniu. Programa ir QR lipdukas visiems tie patys. Dirbtuvių darbai, dalių sandėlis ir sąskaitos yra vienoje vietoje. Kai kliento mašina atvyksta į dirbtuves, istorija jau paruošta.",
    shareTitle: "Bendrinamas vienetas",
    orderTitle: "Darbo užsakymas partneriui",
    managedTitle: "Dirbtuvių valdomas vienetas",
    transferTitle: "Perdavimas klientui",
    stockTitle: "Dalių sandėlis",
    stock: [
      "Dirbtuvės turi savo dalių sandėlį. Brūkšninis kodas įrašo priėmimą į sandėlį ir paėmimą iš sandėlio.",
      "Likutis nenukrenta žemiau nulio.",
    ],
    invoiceTitle: "Sąskaitos iš darbo užsakymų",
    invoice: [
      "Sąskaita sudaroma iš vieno ar kelių baigtų darbo užsakymų.",
      "PDF sąskaitoje yra dirbtuvių logotipas. Sąskaitą galima atspausdinti arba išsiųsti el. paštu. Sąskaitoje yra nuorodos numeris ir banko virtualus brūkšninis kodas, o iš tos pačios sąskaitos galima padaryti kreditinę sąskaitą.",
      "El. sąskaitai paslauga sukuria Finvoice failą. Failas siunčiamas per savo banką arba apskaitos programą.",
      "Sąskaitos matomos tik dirbtuvių administratoriui. Dirbtuvių kainos matomos tik dirbtuvėms.",
    ],
    programLead: "Korjaamon kumppaniohjelma yra dirbtuvių partnerių ir perpardavėjų programa. Šios kainos priklauso tik šiai programai.",
    share: [
      "Autoparko įmonė bendrina vienetus su patikimomis dirbtuvėmis. Bendrinimas gali apimti visus vienetus arba tik pasirinktus.",
      "Tas pats QR lipdukas lieka ant vieneto. Vienetas ir lipdukas lieka savininkui. Patikimas partneris nuskaito lipduką ir atidaro vienetą iš karto.",
      "Dirbtuvės, kurios dar nėra patikimos, prašo prieigos savo paskyroje. Savininko administratorius patvirtina arba atmeta prašymą.",
      "Savininkas gali suteikti vienkartinę prieigą, pavyzdžiui, 24 valandoms arba vienam darbo užsakymui, ir svečio rodinį be paskyros.",
      "Nuskaitykite QR lipduką ir matysite gedimus, priežiūros istoriją ir terminus.",
      "Kai bendrinimas atšaukiamas, vienetas matomas tik savininkui. Dirbtuvių savos istorijos eilutės lieka.",
    ],
    order: [
      "Savininkas paskiria atvirą darbą vienoms partnerio dirbtuvėms. Tik tos dirbtuvės mato darbą.",
      "Dirbtuvės atidaro darbo užsakymą ir jį užbaigia. Gedimai, atliktas darbas ir panaudotos dalys yra tame pačiame užsakyme. Užbaigimas uždaro gedimus ir matomas kliento priežiūros istorijoje kaip dirbtuvių įrašas.",
      "Vidinė pastaba matoma tik dirbtuvėms.",
    ],
    managed: [
      "Dirbtuvės gali valdyti vienetus klientui, kuris dar nenaudoja iqFleetSync™. Vienetas pažymimas kaip dirbtuvių valdomas.",
      "Lengvame klientų registre yra pavadinimas, Suomijos įmonės kodas, jei jis yra, kontaktinis asmuo, el. paštas ir telefonas.",
      "Dirbtuvės spausdina QR lipdukus ir laiko patikros priminimus šiems vienetams. Gedimą galima pranešti nuo lipduko be paskyros.",
    ],
    transfer: [
      "Kai klientas pradeda naudoti iqFleetSync™, dirbtuvės siunčia perdavimo kvietimą kliento el. paštu. Klientas priima perdavimą.",
      "Vienetai, istorija ir lipdukai pereina klientui. Jei klientas jau turi tą patį registracijos arba gamyklinį numerį, vienetai sujungiami, kad neatsirastų antras vienetas.",
      "Po perdavimo dirbtuvės lieka patikimu partneriu. Vidinės pastabos lieka dirbtuvėms.",
    ],
    program: [
      "Bazinis mokestis 14,90 € per mėnesį (PVM 0 %). Neribotas bendrinamų kliento vienetų skaičius įskaičiuotas į bazinį mokestį. Už bendrinamus kliento vienetus dirbtuvėms sąskaita nerašoma.",
      "Dirbtuvių valdomi vienetai: 35 % nuolaida nuo įprastos vieneto kainos. Priekaba yra pusė vieneto, o prie mašinos pritvirtintas įrenginys įskaičiuotas į kainą, kaip bendrame kainyne.",
      "Kai vienetas perduotas klientui, klientas moka įprastą kainyno kainą. Sąskaita už šį vienetą dirbtuvėms baigiasi, kad už tą patį vienetą nebūtų išrašyta du kartus.",
      "Dirbtuvės gali įtraukti paslaugą į savo techninės priežiūros sutartį. Už dirbtuvių nuosavą autoparką sąskaita rašoma pagal bendrą kainyną, atskirai nuo Korjaamon kumppaniohjelma. Naudotojų skaičius neribotas, o paslaugą galima nutraukti bet kada. PVM pridedamas sąskaitoje pagal galiojantį tarifą.",
    ],
    links: {
      help: "Pagalba",
      terms: "Sąlygos",
      pricing: "Bendras kainynas",
      trial: "Išbandykite 30 dienų nemokamai",
      contact: "Kontaktai",
      home: "Pradžia",
    },
  },
  pl: {
    metaTitle: "Dla warsztatów | iqFleetSync™",
    metaDescription: "iqFleetSync™ to jedna usługa dla firmy flotowej, warsztatu albo obu. Udostępnij jednostkę tą samą naklejką QR, przypisz zlecenie i prowadź jednostkę klienta. Korjaamon kumppaniohjelma.",
    title: "Dla warsztatów",
    lead: "iqFleetSync™ to jedna usługa dla warsztatu maszyn ciężkich, firmy flotowej albo obu. Typ organizacji to flota, warsztat albo oba. Typ wybiera menu domyślne. Aplikacja i naklejka QR są te same dla wszystkich. Prace warsztatu, magazyn części i fakturowanie są w jednym miejscu. Gdy maszyna klienta wjeżdża do warsztatu, historia jest już gotowa.",
    shareTitle: "Udostępniona jednostka",
    orderTitle: "Zlecenie dla partnera",
    managedTitle: "Jednostka prowadzona przez warsztat",
    transferTitle: "Przekazanie klientowi",
    stockTitle: "Magazyn części",
    stock: [
      "Warsztat ma własny magazyn części. Kod kreskowy zapisuje przyjęcie na magazyn i wydanie z magazynu.",
      "Stan nie spada poniżej zera.",
    ],
    invoiceTitle: "Fakturowanie ze zleceń",
    invoice: [
      "Faktura powstaje z jednego albo kilku ukończonych zleceń.",
      "Faktura PDF ma własne logo warsztatu. Można ją wydrukować albo wysłać e-mailem. Na fakturze są numer referencyjny i wirtualny kod kreskowy banku, a z tego samego fakturowania można zrobić fakturę korygującą.",
      "Do e-faktury usługa tworzy plik Finvoice. Plik wysyła się przez własny bank albo program księgowy.",
      "Fakturowanie jest widoczne tylko dla administratora warsztatu. Własne ceny warsztatu są widoczne tylko dla warsztatu.",
    ],
    programLead: "Korjaamon kumppaniohjelma to program partnerski i resellerski dla warsztatów. Te ceny należą tylko do tego programu.",
    share: [
      "Firma flotowa udostępnia jednostki zaufanemu warsztatowi. Udostępnienie może obejmować wszystkie jednostki albo tylko wybrane.",
      "Ta sama naklejka QR zostaje na jednostce. Jednostka i naklejka zostają u właściciela. Zaufany partner skanuje naklejkę i otwiera jednostkę od razu.",
      "Warsztat, który nie jest jeszcze zaufany, prosi o dostęp na własnym koncie. Administrator właściciela zatwierdza albo odrzuca prośbę.",
      "Właściciel może dać dostęp jednorazowy, na przykład na 24 godziny albo na jedno zlecenie, oraz widok gościa bez konta.",
      "Zeskanuj naklejkę QR, a zobaczysz usterki, historię serwisową i terminy.",
      "Gdy udostępnienie zostanie cofnięte, jednostka jest widoczna tylko dla właściciela. Własne wiersze historii warsztatu zostają.",
    ],
    order: [
      "Właściciel przypisuje otwartą pracę jednemu warsztatowi partnerskiemu. Tylko ten warsztat widzi pracę.",
      "Warsztat otwiera zlecenie i je kończy. Usterki, wykonana praca i użyte części są na tym samym zleceniu. Zakończenie zamyka usterki i widać je w historii serwisowej klienta jako wpis warsztatu.",
      "Notatka wewnętrzna jest widoczna tylko dla warsztatu.",
    ],
    managed: [
      "Warsztat może prowadzić jednostki dla klienta, który nie korzysta jeszcze z iqFleetSync™. Jednostka jest oznaczona jako prowadzona przez warsztat.",
      "W lekkim rejestrze klientów są nazwa, fiński numer Y-tunnus, jeśli jest, osoba do kontaktu, e-mail i telefon.",
      "Warsztat drukuje naklejki QR i prowadzi przypomnienia o przeglądach dla tych jednostek. Usterkę można zgłosić z naklejki bez konta.",
    ],
    transfer: [
      "Gdy klient zaczyna korzystać z iqFleetSync™, warsztat wysyła zaproszenie do przekazania na e-mail klienta. Klient przyjmuje przekazanie.",
      "Jednostki, historia i naklejki przechodzą do klienta. Jeśli klient ma już ten sam numer rejestracyjny albo numer fabryczny, jednostki są łączone, żeby nie powstała druga.",
      "Po przekazaniu warsztat zostaje zaufanym partnerem. Notatki wewnętrzne zostają w warsztacie.",
    ],
    program: [
      "Opłata podstawowa 14,90 € miesięcznie (VAT 0 %). Nielimitowana liczba udostępnionych jednostek klienta jest w opłacie podstawowej. Udostępnionych jednostek klienta nie rozlicza się warsztatowi.",
      "Jednostki prowadzone przez warsztat: 35 % zniżki od zwykłej ceny jednostki. Naczepa jest połową jednostki, a osprzęt zamocowany do maszyny jest w cenie, jak w cenniku ogólnym.",
      "Gdy jednostka przeszła do klienta, klient płaci zwykłą cenę z cennika. Rozliczenie tej jednostki dla warsztatu się kończy, więc ta sama jednostka nie jest rozliczana dwa razy.",
      "Warsztat może włączyć usługę do własnej umowy serwisowej. Własna flota warsztatu jest rozliczana według cennika ogólnego, osobno od Korjaamon kumppaniohjelma. Liczba użytkowników jest nieograniczona, a usługę można wypowiedzieć w dowolnym momencie. VAT dolicza się na fakturze według obowiązującej stawki.",
    ],
    links: {
      help: "Pomoc",
      terms: "Warunki",
      pricing: "Cennik ogólny",
      trial: "Wypróbuj 30 dni bez opłat",
      contact: "Kontakt",
      home: "Strona główna",
    },
  },
  cs: {
    metaTitle: "Pro dílny | iqFleetSync™",
    metaDescription: "iqFleetSync™ je jedna služba pro flotilovou firmu, dílnu nebo obojí. Sdílejte jednotku stejnou QR nálepkou, přidělte zakázku a veďte jednotku zákazníka. Korjaamon kumppaniohjelma.",
    title: "Pro dílny",
    lead: "iqFleetSync™ je jedna služba pro dílnu těžké techniky, flotilovou firmu nebo obojí. Typ organizace je flotila, dílna nebo obojí. Typ volí výchozí nabídku. Aplikace a QR nálepka jsou pro všechny stejné. Práce dílny, sklad dílů a fakturace jsou na jednom místě. Když stroj zákazníka přijede do dílny, historie už je připravená.",
    shareTitle: "Sdílená jednotka",
    orderTitle: "Zakázka pro partnera",
    managedTitle: "Jednotka vedená dílnou",
    transferTitle: "Převod na zákazníka",
    stockTitle: "Sklad dílů",
    stock: [
      "Dílna má vlastní sklad dílů. Čárový kód zapisuje příjem na sklad a výdej ze skladu.",
      "Stav neklesne pod nulu.",
    ],
    invoiceTitle: "Fakturace ze zakázek",
    invoice: [
      "Faktura vzniká z jedné nebo více dokončených zakázek.",
      "PDF faktura má vlastní logo dílny. Lze ji vytisknout nebo poslat e-mailem. Na faktuře je referenční číslo a virtuální čárový kód banky a ze stejné fakturace lze udělat dobropis.",
      "Pro elektronickou fakturu služba vytvoří soubor Finvoice. Soubor se odešle přes vlastní banku nebo účetní program.",
      "Fakturace je viditelná jen pro správce dílny. Vlastní ceny dílny jsou viditelné jen pro dílnu.",
    ],
    programLead: "Korjaamon kumppaniohjelma je partnerský a reseller program pro dílny. Tyto ceny patří jen tomuto programu.",
    share: [
      "Flotilová firma sdílí jednotky s důvěryhodnou dílnou. Sdílení může zahrnovat všechny jednotky nebo jen vybrané.",
      "Stejná QR nálepka zůstává na jednotce. Jednotka i nálepka zůstávají vlastníkovi. Důvěryhodný partner naskenuje nálepku a jednotku otevře přímo.",
      "Dílna, která ještě není důvěryhodná, požádá o přístup na vlastním účtu. Správce vlastníka žádost schválí nebo odmítne.",
      "Vlastník může dát jednorázový přístup, například na 24 hodin nebo na jednu zakázku, a pohled hosta bez účtu.",
      "Naskenujte QR nálepku a uvidíte závady, historii údržby a termíny.",
      "Když se sdílení zruší, je jednotka viditelná jen pro vlastníka. Vlastní řádky historie dílny zůstanou.",
    ],
    order: [
      "Vlastník přidělí otevřenou práci jedné partnerské dílně. Jen tato dílna práci vidí.",
      "Dílna zakázku otevře a dokončí ji. Závady, provedená práce a použité díly jsou na stejné zakázce. Dokončení uzavře závady a je vidět v historii údržby zákazníka jako zápis dílny.",
      "Interní poznámka je viditelná jen pro dílnu.",
    ],
    managed: [
      "Dílna může vést jednotky pro zákazníka, který iqFleetSync™ ještě nepoužívá. Jednotka je označená jako vedená dílnou.",
      "V lehkém registru zákazníků je název, finské IČ, pokud existuje, kontaktní osoba, e-mail a telefon.",
      "Dílna tiskne QR nálepky a vede připomínky prohlídek pro tyto jednotky. Závadu lze nahlásit z nálepky bez účtu.",
    ],
    transfer: [
      "Když zákazník začne používat iqFleetSync™, dílna pošle pozvánku k převodu na e-mail zákazníka. Zákazník převod přijme.",
      "Jednotky, historie a nálepky přejdou na zákazníka. Pokud zákazník už má stejnou registrační značku nebo výrobní číslo, jednotky se sloučí, aby nevznikla druhá.",
      "Po převodu dílna zůstane důvěryhodným partnerem. Interní poznámky zůstanou dílně.",
    ],
    program: [
      "Základní poplatek 14,90 € měsíčně (DPH 0 %). Neomezený počet sdílených jednotek zákazníka je v základním poplatku. Sdílené jednotky zákazníka se dílně neúčtují.",
      "Jednotky vedené dílnou: sleva 35 % z běžné ceny jednotky. Přívěs je polovina jednotky a zařízení upevněné na stroji je v ceně, stejně jako v obecném ceníku.",
      "Když jednotka přešla na zákazníka, zákazník platí běžnou cenu z ceníku. Účtování této jednotky pro dílnu končí, takže stejná jednotka se neúčtuje dvakrát.",
      "Dílna může službu zahrnout do vlastní servisní smlouvy. Vlastní flotila dílny se účtuje podle obecného ceníku, odděleně od Korjaamon kumppaniohjelma. Počet uživatelů není omezen a službu lze kdykoli ukončit. DPH se na faktuře přičte podle platné sazby.",
    ],
    links: {
      help: "Nápověda",
      terms: "Podmínky",
      pricing: "Obecný ceník",
      trial: "Vyzkoušejte 30 dní zdarma",
      contact: "Kontakt",
      home: "Domů",
    },
  },
};

const WORKSHOP_SCAN = {
  fi: {
    title: "Skannaa QR sovelluksessa",
    text: [
      "Sovelluksessa on painike Skannaa QR. Se lukee yksikön tarran sillä kirjautumisella, joka on jo auki. Tarra ei kirjaa ketään erikseen sisään.",
      "Jos tällä kirjautumisella on pääsy, yksikkö avautuu suoraan.",
      "Jos pääsyä ei ole, avautuu vierasnäkymä. Siinä on Pyydä pääsyä.",
    ],
  },
  sv: {
    title: "Skanna QR i appen",
    text: [
      "I appen finns knappen Skanna QR. Den läser enhetens dekal med den inloggning som redan är öppen. Dekalen loggar inte in någon för sig.",
      "Om den inloggningen redan har åtkomst öppnas enheten direkt.",
      "Om åtkomst saknas öppnas gästvyn. Där finns Be om åtkomst.",
    ],
  },
  no: {
    title: "Skann QR i appen",
    text: [
      "I appen er det en knapp, Skann QR. Den leser enhetens merke med innloggingen som allerede er åpen. Merket logger ikke noen inn for seg.",
      "Hvis den innloggingen allerede har tilgang, åpnes enheten direkte.",
      "Hvis tilgang mangler, åpnes gjestvisningen. Der er Be om tilgang.",
    ],
  },
  da: {
    title: "Scan QR i appen",
    text: [
      "I appen er der en knap, Scan QR. Den læser enhedens mærke med det login, der allerede er åbent. Mærket logger ikke nogen ind for sig.",
      "Hvis det login allerede har adgang, åbnes enheden direkte.",
      "Hvis adgang mangler, åbnes gæstevisningen. Der er Bed om adgang.",
    ],
  },
  de: {
    title: "QR in der App scannen",
    text: [
      "In der App gibt es die Schaltfläche QR scannen. Sie liest den Aufkleber der Einheit mit der Anmeldung, die schon offen ist. Der Aufkleber meldet niemanden extra an.",
      "Wenn diese Anmeldung schon Zugang hat, öffnet sich die Einheit direkt.",
      "Wenn kein Zugang besteht, öffnet sich die Gastansicht. Dort ist Zugang anfragen.",
    ],
  },
  en: {
    title: "Scan QR in the app",
    text: [
      "The app has a Scan QR button. It reads the unit sticker with the login that is already open. The sticker does not sign anyone in by itself.",
      "If that login already has access, the unit opens directly.",
      "If there is no access, the guest view opens. It has Request access.",
    ],
  },
  es: {
    title: "Escanear QR en la aplicación",
    text: [
      "En la aplicación está el botón Escanear QR. Lee la etiqueta de la unidad con el acceso que ya está abierto. La etiqueta no inicia sesión de nadie por sí sola.",
      "Si ese acceso ya existe, la unidad se abre directamente.",
      "Si no hay acceso, se abre la vista de invitación. Ahí está Pedir acceso.",
    ],
  },
  it: {
    title: "Scansiona QR nell’app",
    text: [
      "Nell’app c’è il pulsante Scansiona QR. Legge l’etichetta dell’unità con l’accesso già aperto. L’etichetta non fa accedere nessuno da sola.",
      "Se quell’accesso c’è già, l’unità si apre direttamente.",
      "Se l’accesso non c’è, si apre la vista ospite. Lì c’è Chiedi accesso.",
    ],
  },
  fr: {
    title: "Scanner le QR dans l’application",
    text: [
      "L’application a le bouton Scanner le QR. Il lit l’étiquette de l’unité avec la session déjà ouverte. L’étiquette ne connecte personne toute seule.",
      "Si cette session a déjà l’accès, l’unité s’ouvre directement.",
      "S’il n’y a pas d’accès, la vue invité s’ouvre. Elle propose Demander l’accès.",
    ],
  },
  et: {
    title: "Skanni QR rakenduses",
    text: [
      "Rakenduses on nupp Skanni QR. See loeb üksuse kleebist sisselogimisega, mis on juba avatud. Kleebis ei logi kedagi eraldi sisse.",
      "Kui sellel sisselogimisel on ligipääs, avaneb üksus otse.",
      "Kui ligipääsu ei ole, avaneb külalisvaade. Seal on Küsi ligipääsu.",
    ],
  },
  lv: {
    title: "Skenēt QR lietotnē",
    text: [
      "Lietotnē ir poga Skenēt QR. Tā nolasa vienības uzlīmi ar jau atvērto pieteikšanos. Uzlīme nevienu atsevišķi neielogina.",
      "Ja šai pieteikšanai jau ir piekļuve, vienība atveras uzreiz.",
      "Ja piekļuves nav, atveras viesa skats. Tur ir Pieprasīt piekļuvi.",
    ],
  },
  lt: {
    title: "Skenuoti QR programoje",
    text: [
      "Programoje yra mygtukas Skenuoti QR. Jis nuskaito vieneto lipduką jau atidarytu prisijungimu. Lipdukas nieko atskirai neprijungia.",
      "Jei šis prisijungimas jau turi prieigą, vienetas atsidaro iš karto.",
      "Jei prieigos nėra, atsidaro svečio rodinys. Jame yra Prašyti prieigos.",
    ],
  },
  pl: {
    title: "Skanuj QR w aplikacji",
    text: [
      "W aplikacji jest przycisk Skanuj QR. Odczytuje naklejkę jednostki tym logowaniem, które jest już otwarte. Naklejka nikogo osobno nie loguje.",
      "Jeśli to logowanie ma już dostęp, jednostka otwiera się od razu.",
      "Jeśli dostępu nie ma, otwiera się widok gościa. Jest tam Poproś o dostęp.",
    ],
  },
  cs: {
    title: "Skenovat QR v aplikaci",
    text: [
      "V aplikaci je tlačítko Skenovat QR. Přečte nálepku jednotky přihlášením, které je už otevřené. Nálepka nikoho sama nepřihlásí.",
      "Pokud toto přihlášení přístup už má, jednotka se otevře přímo.",
      "Pokud přístup není, otevře se pohled hosta. V něm je Požádat o přístup.",
    ],
  },
};

const WORKSHOP_OG = {
  fi: "fi_FI", sv: "sv_SE", no: "nb_NO", da: "da_DK", de: "de_DE", en: "en_GB",
  es: "es_ES", it: "it_IT", fr: "fr_FR", et: "et_EE", lv: "lv_LV", lt: "lt_LT",
  pl: "pl_PL", cs: "cs_CZ",
};

function escapeWorkshopHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function workshopList(items) {
  return "<ul>" + items.map((item) => "<li>" + escapeWorkshopHtml(item) + "</li>").join("") + "</ul>";
}

function workshopParagraphs(items) {
  return items.map((item) => "<p>" + escapeWorkshopHtml(item) + "</p>").join("");
}

function renderWorkshopPage(lang) {
  const root = document.getElementById("workshop-root");
  if (!root || typeof WORKSHOP_PAGE === "undefined") return;
  const page = WORKSHOP_PAGE[lang] || WORKSHOP_PAGE.en;
  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = page.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);
  const set = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute("content", value);
  };
  set('meta[property="og:title"]', page.metaTitle);
  set('meta[property="og:description"]', page.metaDescription);
  set('meta[name="twitter:title"]', page.metaTitle);
  set('meta[name="twitter:description"]', page.metaDescription);
  set('meta[property="og:locale"]', WORKSHOP_OG[lang] || "en_GB");

  const links = page.links;
  const scan = (typeof WORKSHOP_SCAN !== "undefined" && (WORKSHOP_SCAN[lang] || WORKSHOP_SCAN.en)) || { title: "", text: [] };
  root.innerHTML = `<p class="product-crumb"><a href="iqfleetsync.html">iqFleetSync™</a></p>
    <div class="product-heading">
      <img class="product-icon" src="assets/iqfleetsync-icon.svg" width="72" height="72" alt="" />
      <div>
        <p class="help-kicker">iqFleetSync™</p>
        <h1>${escapeWorkshopHtml(page.title)}</h1>
      </div>
    </div>
    <p>${escapeWorkshopHtml(page.lead)}</p>
    <h2>${escapeWorkshopHtml(page.shareTitle)}</h2>
    ${workshopList(page.share)}
    <h2>${escapeWorkshopHtml(scan.title)}</h2>
    ${workshopParagraphs(scan.text)}
    <h2>${escapeWorkshopHtml(page.orderTitle)}</h2>
    ${workshopParagraphs(page.order)}
    <h2>${escapeWorkshopHtml(page.managedTitle)}</h2>
    ${workshopParagraphs(page.managed)}
    <h2>${escapeWorkshopHtml(page.transferTitle)}</h2>
    ${workshopParagraphs(page.transfer)}
    <h2>${escapeWorkshopHtml(page.stockTitle)}</h2>
    ${workshopParagraphs(page.stock)}
    <h2>${escapeWorkshopHtml(page.invoiceTitle)}</h2>
    ${workshopParagraphs(page.invoice)}
    <h2>Korjaamon kumppaniohjelma</h2>
    <div class="price-teaser partner-program">
      <p>${escapeWorkshopHtml(page.programLead)}</p>
      ${workshopParagraphs(page.program)}
    </div>
    <div class="app-actions">
      <a class="btn btn-primary" id="cta-trial-workshop" data-cta="trial" href="https://fleetsync.iqsoftcore.fi/rekisteroidy" rel="noopener noreferrer">${escapeWorkshopHtml(links.trial)}</a>
      <a class="btn btn-ghost" href="index.html#contact">${escapeWorkshopHtml(links.contact)}</a>
    </div>
    <p class="policy-nav">
      <a class="btn btn-ghost" href="iqfleetsync.html#workshop-guides">${escapeWorkshopHtml(links.help)}</a>
      <a class="btn btn-ghost" href="kayttoehdot.html">${escapeWorkshopHtml(links.terms)}</a>
      <a class="btn btn-ghost" href="iqfleetsync.html#hinnasto">${escapeWorkshopHtml(links.pricing)}</a>
      <a class="btn btn-ghost" href="index.html">${escapeWorkshopHtml(links.home)}</a>
    </p>`;
}
