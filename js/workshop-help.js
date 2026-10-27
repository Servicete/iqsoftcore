/**
 * Workshop help articles for the Help Center.
 * No prices: these texts are also read by drivers and workshop staff.
 */
const WORKSHOP_GUIDES = {
  fi: {
    heading: "Kumppanikorjaamot",
    intro: "Sovelluksen valikko on Kumppanikorjaamot. Nämä ohjeet ovat kalustoyritykselle ja korjaamolle.",
    articles: [
      {
        id: "sharing",
        title: "Yksikön jakaminen",
        paragraphs: [
          "iqFleetSync™ on yksi palvelu. Yrityksen tyyppi on kalusto, korjaamo tai molemmat.",
          "Kalustoyritys jakaa yksikön luotetulle korjaamolle. Jako voi koskea kaikkia yksiköitä tai vain valittuja. Omistaja valitsee sallitut näkymät.",
          "Sama QR-tarra pysyy yksikössä. Yksikkö ja tarra jäävät omistajalle. Luotettu kumppani skannaa tarran ja avaa yksikön suoraan. Jos yritystä ei ole vielä palvelussa, kutsu lähtee sähköpostilla.",
        ],
      },
      {
        id: "access",
        title: "Pääsypyyntö, kertapääsy ja vieras",
        paragraphs: [
          "Korjaamo, jota ei ole luotettu, skannaa tarran omassa tilissään ja pyytää pääsyä. Pyyntö menee yksikön omistajalle. Ylläpitäjä hyväksyy tai hylkää sen.",
          "Omistaja voi antaa kertapääsyn, esimerkiksi 24 tunniksi tai yhdeksi työtilaukseksi. Linkki vanhenee itsestään.",
          "Vieras ilman tunnusta voi kirjata tehdyn työn, kun vieraskirjaus on päällä. Kirjaus odottaa omistajan hyväksyntää.",
          "Omistaja voi perua jaon milloin tahansa. Peruutuksen jälkeen korjaamo ei näe jaettuja yksiköitä. Omat historiarivit säilyvät.",
        ],
      },
      {
        id: "work-orders",
        title: "Työmääräykset",
        paragraphs: [
          "Omistaja osoittaa avoimen työn yhdelle kumppanikorjaamolle. Vain se korjaamo näkee työn ja saa siitä viestin.",
          "Korjaamo avaa työmääräimen ja kuittaa sen valmiiksi. Kuittaus sulkee viat ja lisää yhden rivin omistajan historiaan. Tunteja ei kopioida omistajalle.",
          "Sisäinen muistiinpano jää korjaamolle. Omistaja ei näe sitä.",
        ],
      },
      {
        id: "managed",
        title: "Korjaamon hallitsemat yksiköt",
        paragraphs: [
          "Korjaamo voi pitää yksiköitä asiakkaalle, joka ei vielä käytä iqFleetSync™-palvelua. Yksikkö merkitään korjaamon hallitsemaksi.",
          "Jaetut koneet näkyvät omistajayrityksen nimellä. Hallitut yksiköt näkyvät asiakkaan nimellä.",
          "Katsastusmuistutukset koskevat hallittuja yksiköitä.",
        ],
      },
      {
        id: "customers",
        title: "Asiakasrekisteri",
        paragraphs: [
          "Ennen asiakasyksikköä lisätään asiakas. Rekisterissä ovat nimi, Y-tunnus jos se on, yhteyshenkilö, sähköposti ja puhelin.",
          "Rekisteri on kevyt. Se riittää hallittuihin yksiköihin ja siirtokutsuun.",
        ],
      },
      {
        id: "transfer",
        title: "Siirto asiakkaalle",
        paragraphs: [
          "Kun asiakas ottaa iqFleetSync™-palvelun käyttöön, korjaamo lähettää siirtokutsun asiakkaan sähköpostiin. Asiakas hyväksyy siirron.",
          "Yksiköt, historia ja tarrat siirtyvät asiakkaalle. Jos asiakkaalla on jo sama rekisterinumero tai valmistenumero, yksiköt yhdistetään, jotta samaa yksikköä ei synny kahta.",
          "Siirron jälkeen korjaamo jää luotetuksi kumppaniksi. Sisäinen muistiinpano jää korjaamolle.",
        ],
      },
      {
        id: "stickers",
        title: "QR-tarrat korjaamolla",
        paragraphs: [
          "Sama tarra käy jaetulle yksikölle ja korjaamon hallitsemalle yksikölle. Tarra tunnistaa yksikön. Se ei kirjaa ketään sisään.",
          "Hallitulle yksikölle tarra tulostetaan korjaamon näkymästä. Tarrasta voi ilmoittaa vian ilman tunnusta.",
          "Jaetun yksikön tarra pysyy omistajalla. Luotettu kumppani pääsee sillä suoraan yksikköön.",
        ],
      },
    ],
  },
  sv: {
    heading: "Partnerverkstäder",
    intro: "Menyn i appen heter Partnerverkstäder. Guiderna är för ett åkeri och en verkstad.",
    articles: [
      {
        id: "sharing",
        title: "Dela en enhet",
        paragraphs: [
          "iqFleetSync™ är en tjänst. Företagets typ är maskinpark, verkstad eller båda.",
          "Ett åkeri delar en enhet med en betrodd verkstad. Delningen kan gälla alla enheter eller bara valda. Ägaren väljer vilka vyer som är tillåtna.",
          "Samma QR-dekal sitter kvar på enheten. Enheten och dekalen stannar hos ägaren. En betrodd partner skannar dekalen och öppnar enheten direkt. Om företaget inte finns i tjänsten ännu går inbjudan med e-post.",
        ],
      },
      {
        id: "access",
        title: "Begäran om åtkomst, engångsåtkomst och gäst",
        paragraphs: [
          "En verkstad som inte är betrodd skannar dekalen i sitt eget konto och begär åtkomst. Begäran går till enhetens ägare. Administratören godkänner eller avslår den.",
          "Ägaren kan ge engångsåtkomst, till exempel i 24 timmar eller för en arbetsorder. Länken går ut av sig själv.",
          "En gäst utan konto kan skriva in utfört arbete när gästinmatning är på. Posten väntar på ägarens godkännande.",
          "Ägaren kan återkalla en delning när som helst. Därefter ser verkstaden inte de delade enheterna. De egna historikraderna finns kvar.",
        ],
      },
      {
        id: "work-orders",
        title: "Arbetsorder",
        paragraphs: [
          "Ägaren tilldelar ett öppet jobb till en partnerverkstad. Bara den verkstaden ser jobbet och får ett meddelande om det.",
          "Verkstaden öppnar arbetsordern och kvitterar den. Kvitteringen stänger felen och lägger till en rad i ägarens historik. Timmar kopieras inte till ägaren.",
          "En intern anteckning stannar hos verkstaden. Ägaren ser den inte.",
        ],
      },
      {
        id: "managed",
        title: "Enheter som verkstaden hanterar",
        paragraphs: [
          "En verkstad kan hålla enheter åt en kund som ännu inte använder iqFleetSync™. Enheten märks som hanterad av verkstaden.",
          "Delade maskiner visas med ägarföretagets namn. Hanterade enheter visas med kundens namn.",
          "Besiktningspåminnelser gäller de hanterade enheterna.",
        ],
      },
      {
        id: "customers",
        title: "Kundregister",
        paragraphs: [
          "Lägg till kunden innan du lägger till en kundenhet. I registret finns namn, finskt FO-nummer om det finns, kontaktperson, e-post och telefon.",
          "Registret är lätt. Det räcker för hanterade enheter och för överföringsinbjudan.",
        ],
      },
      {
        id: "transfer",
        title: "Överföring till kunden",
        paragraphs: [
          "När kunden börjar använda iqFleetSync™ skickar verkstaden en överföringsinbjudan till kundens e-post. Kunden godkänner överföringen.",
          "Enheter, historik och dekaler flyttas till kunden. Om kunden redan har samma registreringsnummer eller tillverkningsnummer slås enheterna ihop, så att inte en andra enhet skapas.",
          "Efter överföringen förblir verkstaden en betrodd partner. Den interna anteckningen stannar hos verkstaden.",
        ],
      },
      {
        id: "stickers",
        title: "QR-dekaler på verkstaden",
        paragraphs: [
          "Samma dekal fungerar för en delad enhet och för en enhet som verkstaden hanterar. Dekalen identifierar enheten. Den loggar inte in någon.",
          "För en hanterad enhet skrivs dekalen ut från verkstadens vy. Ett fel kan anmälas från dekalen utan konto.",
          "Dekalen på en delad enhet stannar hos ägaren. En betrodd partner öppnar enheten med den direkt.",
        ],
      },
    ],
  },
  no: {
    heading: "Partnerverksteder",
    intro: "Menyen i appen heter Partnerverksteder. Veiledningene er for et transportfirma og et verksted.",
    articles: [
      {
        id: "sharing",
        title: "Dele en enhet",
        paragraphs: [
          "iqFleetSync™ er én tjeneste. Selskapets type er maskinpark, verksted eller begge.",
          "Et transportfirma deler en enhet med et betrodd verksted. Delingen kan gjelde alle enheter eller bare valgte. Eieren velger hvilke visninger som er tillatt.",
          "Det samme QR-merket blir på enheten. Enheten og merket blir hos eieren. En betrodd partner skanner merket og åpner enheten direkte. Hvis selskapet ikke er i tjenesten ennå, går invitasjonen på e-post.",
        ],
      },
      {
        id: "access",
        title: "Tilgangsforespørsel, engangstilgang og gjest",
        paragraphs: [
          "Et verksted som ikke er betrodd, skanner merket i sin egen konto og ber om tilgang. Forespørselen går til enhetens eier. Administratoren godkjenner eller avslår den.",
          "Eieren kan gi engangstilgang, for eksempel i 24 timer eller for én arbeidsordre. Lenken utløper av seg selv.",
          "En gjest uten konto kan føre utført arbeid når gjesteregistrering er på. Føringen venter på eierens godkjenning.",
          "Eieren kan trekke tilbake en deling når som helst. Deretter ser ikke verkstedet de delte enhetene. Egne historierader blir værende.",
        ],
      },
      {
        id: "work-orders",
        title: "Arbeidsordrer",
        paragraphs: [
          "Eieren tildeler en åpen jobb til ett partnerverksted. Bare det verkstedet ser jobben og får en melding om den.",
          "Verkstedet åpner arbeidsordren og kvitterer den. Kvitteringen lukker feilene og legger til én rad i eierens historikk. Timer kopieres ikke til eieren.",
          "Et internt notat blir hos verkstedet. Eieren ser det ikke.",
        ],
      },
      {
        id: "managed",
        title: "Enheter som verkstedet administrerer",
        paragraphs: [
          "Et verksted kan holde enheter for en kunde som ennå ikke bruker iqFleetSync™. Enheten merkes som administrert av verkstedet.",
          "Delte maskiner vises med eierselskapets navn. Administrerte enheter vises med kundens navn.",
          "Kontrollpåminnelser gjelder de administrerte enhetene.",
        ],
      },
      {
        id: "customers",
        title: "Kunderegister",
        paragraphs: [
          "Legg til kunden før du legger til en kundenhet. I registeret er navn, finsk organisasjonsnummer hvis det finnes, kontaktperson, e-post og telefon.",
          "Registeret er lett. Det holder for administrerte enheter og for overføringsinvitasjonen.",
        ],
      },
      {
        id: "transfer",
        title: "Overføring til kunden",
        paragraphs: [
          "Når kunden tar iqFleetSync™ i bruk, sender verkstedet en overføringsinvitasjon til kundens e-post. Kunden godtar overføringen.",
          "Enheter, historikk og merker flyttes til kunden. Hvis kunden allerede har samme registreringsnummer eller produksjonsnummer, slås enhetene sammen, slik at det ikke opprettes en ny enhet.",
          "Etter overføringen forblir verkstedet en betrodd partner. Det interne notatet blir hos verkstedet.",
        ],
      },
      {
        id: "stickers",
        title: "QR-merker på verkstedet",
        paragraphs: [
          "Det samme merket virker for en delt enhet og for en enhet som verkstedet administrerer. Merket identifiserer enheten. Det logger ikke noen inn.",
          "For en administrert enhet skrives merket ut fra verkstedets visning. En feil kan meldes fra merket uten konto.",
          "Merket på en delt enhet blir hos eieren. En betrodd partner åpner enheten med det direkte.",
        ],
      },
    ],
  },
  da: {
    heading: "Partnerværksteder",
    intro: "Menuen i appen hedder Partnerværksteder. Vejledningerne er til et vognmandsfirma og et værksted.",
    articles: [
      {
        id: "sharing",
        title: "Del en enhed",
        paragraphs: [
          "iqFleetSync™ er én tjeneste. Virksomhedens type er vognpark, værksted eller begge.",
          "Et vognmandsfirma deler en enhed med et betroet værksted. Delingen kan gælde alle enheder eller kun valgte. Ejeren vælger, hvilke visninger der er tilladt.",
          "Det samme QR-mærke bliver på enheden. Enheden og mærket bliver hos ejeren. En betroet partner scanner mærket og åbner enheden direkte. Hvis virksomheden ikke er i tjenesten endnu, går invitationen med e-mail.",
        ],
      },
      {
        id: "access",
        title: "Anmodning om adgang, engangsadgang og gæst",
        paragraphs: [
          "Et værksted, der ikke er betroet, scanner mærket i sin egen konto og anmoder om adgang. Anmodningen går til enhedens ejer. Administratoren godkender eller afviser den.",
          "Ejeren kan give engangsadgang, for eksempel i 24 timer eller til én arbejdsordre. Linket udløber af sig selv.",
          "En gæst uden konto kan skrive udført arbejde, når gæsteregistrering er slået til. Registreringen venter på ejerens godkendelse.",
          "Ejeren kan trække en deling tilbage når som helst. Derefter ser værkstedet ikke de delte enheder. Egne historikrækker bliver.",
        ],
      },
      {
        id: "work-orders",
        title: "Arbejdsordrer",
        paragraphs: [
          "Ejeren tildeler et åbent job til ét partnerværksted. Kun det værksted ser jobbet og får en besked om det.",
          "Værkstedet åbner arbejdsordren og kvitterer den. Kvitteringen lukker fejlene og tilføjer én række i ejerens historik. Timer kopieres ikke til ejeren.",
          "En intern note bliver hos værkstedet. Ejeren ser den ikke.",
        ],
      },
      {
        id: "managed",
        title: "Enheder som værkstedet administrerer",
        paragraphs: [
          "Et værksted kan holde enheder for en kunde, der endnu ikke bruger iqFleetSync™. Enheden mærkes som administreret af værkstedet.",
          "Delte maskiner vises med ejervirksomhedens navn. Administrerede enheder vises med kundens navn.",
          "Synspåmindelser gælder de administrerede enheder.",
        ],
      },
      {
        id: "customers",
        title: "Kunderegister",
        paragraphs: [
          "Tilføj kunden, før du tilføjer en kundenhed. I registeret står navn, finsk virksomhedsnummer (Y-tunnus) hvis det findes, kontaktperson, e-mail og telefon.",
          "Registeret er let. Det rækker til administrerede enheder og til overførselsinvitationen.",
        ],
      },
      {
        id: "transfer",
        title: "Overførsel til kunden",
        paragraphs: [
          "Når kunden tager iqFleetSync™ i brug, sender værkstedet en overførselsinvitation til kundens e-mail. Kunden accepterer overførslen.",
          "Enheder, historik og mærker flyttes til kunden. Hvis kunden allerede har samme registreringsnummer eller stelnummer, lægges enhederne sammen, så der ikke oprettes en ekstra enhed.",
          "Efter overførslen forbliver værkstedet en betroet partner. Den interne note bliver hos værkstedet.",
        ],
      },
      {
        id: "stickers",
        title: "QR-mærker på værkstedet",
        paragraphs: [
          "Det samme mærke virker for en delt enhed og for en enhed, som værkstedet administrerer. Mærket identificerer enheden. Det logger ikke nogen ind.",
          "For en administreret enhed udskrives mærket fra værkstedets visning. En fejl kan meldes fra mærket uden konto.",
          "Mærket på en delt enhed bliver hos ejeren. En betroet partner åbner enheden med det direkte.",
        ],
      },
    ],
  },
  de: {
    heading: "Partnerwerkstätten",
    intro: "Das Menü in der App heißt Partnerwerkstätten. Die Anleitungen gelten für ein Fuhrunternehmen und eine Werkstatt.",
    articles: [
      {
        id: "sharing",
        title: "Eine Einheit teilen",
        paragraphs: [
          "iqFleetSync™ ist ein Dienst. Der Typ des Unternehmens ist Fuhrpark, Werkstatt oder beides.",
          "Ein Fuhrunternehmen teilt eine Einheit mit einer vertrauten Werkstatt. Die Freigabe kann alle Einheiten oder nur ausgewählte umfassen. Die Eigentümerseite wählt die erlaubten Ansichten.",
          "Derselbe QR-Aufkleber bleibt an der Einheit. Einheit und Aufkleber bleiben bei der Eigentümerseite. Eine vertraute Partnerwerkstatt scannt den Aufkleber und öffnet die Einheit direkt. Ist das Unternehmen noch nicht im Dienst, geht die Einladung per E-Mail.",
        ],
      },
      {
        id: "access",
        title: "Zugriffsanfrage, einmaliger Zugang und Gast",
        paragraphs: [
          "Eine Werkstatt, die noch nicht vertraut ist, scannt den Aufkleber im eigenen Konto und beantragt Zugang. Die Anfrage geht an die Eigentümerseite der Einheit. Die Administration genehmigt oder lehnt sie ab.",
          "Die Eigentümerseite kann einen einmaligen Zugang geben, zum Beispiel für 24 Stunden oder für einen Auftrag. Der Link läuft von selbst ab.",
          "Eine gastweise Person ohne Konto kann erledigte Arbeit eintragen, wenn die Gasteingabe an ist. Der Eintrag wartet auf die Freigabe der Eigentümerseite.",
          "Die Eigentümerseite kann eine Freigabe jederzeit widerrufen. Danach sieht die Werkstatt die geteilten Einheiten nicht mehr. Die eigenen Historieneinträge bleiben.",
        ],
      },
      {
        id: "work-orders",
        title: "Aufträge",
        paragraphs: [
          "Die Eigentümerseite weist eine offene Arbeit einer Partnerwerkstatt zu. Nur diese Werkstatt sieht die Arbeit und bekommt eine Nachricht dazu.",
          "Die Werkstatt öffnet den Auftrag und schließt ihn ab. Der Abschluss schließt die Mängel und fügt einen Eintrag in der Historie der Eigentümerseite hinzu. Stunden werden nicht an die Eigentümerseite kopiert.",
          "Eine interne Notiz bleibt bei der Werkstatt. Die Eigentümerseite sieht sie nicht.",
        ],
      },
      {
        id: "managed",
        title: "Von der Werkstatt geführte Einheiten",
        paragraphs: [
          "Eine Werkstatt kann Einheiten für Kundschaft führen, die iqFleetSync™ noch nicht nutzt. Die Einheit ist als von der Werkstatt geführt gekennzeichnet.",
          "Geteilte Maschinen erscheinen unter dem Namen des Eigentümerunternehmens. Geführte Einheiten erscheinen unter dem Namen der Kundschaft.",
          "Prüferinnerungen gelten für die geführten Einheiten.",
        ],
      },
      {
        id: "customers",
        title: "Kundenregister",
        paragraphs: [
          "Die Kundschaft wird angelegt, bevor eine Kundeneinheit angelegt wird. Im Register stehen Name, finnische Geschäftskennung falls vorhanden, Kontaktperson, E-Mail und Telefon.",
          "Das Register ist schlank. Es genügt für geführte Einheiten und für die Übergabeeinladung.",
        ],
      },
      {
        id: "transfer",
        title: "Übergabe an die Kundschaft",
        paragraphs: [
          "Wenn die Kundschaft iqFleetSync™ übernimmt, sendet die Werkstatt eine Übergabeeinladung an die E-Mail der Kundschaft. Die Kundschaft nimmt die Übergabe an.",
          "Einheiten, Historie und Aufkleber gehen an die Kundschaft. Gibt es dort schon dasselbe Kennzeichen oder dieselbe Fabriknummer, werden die Einheiten zusammengeführt, damit keine zweite Einheit entsteht.",
          "Nach der Übergabe bleibt die Werkstatt eine vertraute Partnerin. Die interne Notiz bleibt bei der Werkstatt.",
        ],
      },
      {
        id: "stickers",
        title: "QR-Aufkleber in der Werkstatt",
        paragraphs: [
          "Derselbe Aufkleber gilt für eine geteilte Einheit und für eine von der Werkstatt geführte Einheit. Der Aufkleber erkennt die Einheit. Er meldet niemanden an.",
          "Für eine geführte Einheit wird der Aufkleber aus der Werkstattansicht gedruckt. Eine Störung lässt sich vom Aufkleber ohne Konto melden.",
          "Der Aufkleber einer geteilten Einheit bleibt bei der Eigentümerseite. Eine vertraute Partnerwerkstatt öffnet die Einheit damit direkt.",
        ],
      },
    ],
  },
  en: {
    heading: "Partner workshops",
    intro: "The menu in the app is Partner workshops. These guides are for a fleet company and a workshop.",
    articles: [
      {
        id: "sharing",
        title: "Sharing a unit",
        paragraphs: [
          "iqFleetSync™ is one service. The company type is fleet, workshop, or both.",
          "A fleet company shares a unit with a trusted workshop. The share can cover every unit or only selected units. The owner chooses the views that are allowed.",
          "The same QR sticker stays on the unit. The unit and the sticker remain with the owner. A trusted partner scans the sticker and opens the unit directly. If the company is not in the service yet, the invite goes by email.",
        ],
      },
      {
        id: "access",
        title: "Access request, one-time access and guest",
        paragraphs: [
          "A workshop that is not trusted scans the sticker in its own account and requests access. The request goes to the owner of the unit. The administrator approves or rejects it.",
          "The owner can give one-time access, for example for 24 hours or for one work order. The link expires by itself.",
          "A guest without an account can record completed work when guest entry is on. The entry waits for the owner’s approval.",
          "The owner can revoke a share at any time. After that the workshop no longer sees the shared units. Its own history rows remain.",
        ],
      },
      {
        id: "work-orders",
        title: "Work orders",
        paragraphs: [
          "The owner assigns an open job to one partner workshop. Only that workshop sees the job and gets a message about it.",
          "The workshop opens the work order and completes it. Completion closes the defects and adds one row to the owner’s history. Hours are not copied to the owner.",
          "An internal note stays with the workshop. The owner does not see it.",
        ],
      },
      {
        id: "managed",
        title: "Workshop-managed units",
        paragraphs: [
          "A workshop can keep units for a customer that does not use iqFleetSync™ yet. The unit is marked workshop-managed.",
          "Shared machines are shown under the owner company’s name. Managed units are shown under the customer’s name.",
          "Inspection reminders apply to the managed units.",
        ],
      },
      {
        id: "customers",
        title: "Customer register",
        paragraphs: [
          "Add the customer before adding a customer unit. The register holds the name, a Finnish business ID when there is one, a contact person, email and phone.",
          "The register is lightweight. It is enough for managed units and for the transfer invite.",
        ],
      },
      {
        id: "transfer",
        title: "Transfer to the customer",
        paragraphs: [
          "When the customer adopts iqFleetSync™, the workshop sends a transfer invite to the customer’s email. The customer accepts the transfer.",
          "The units, the history and the stickers move to the customer. If the customer already has the same registration number or serial number, the units are merged so a second unit is not created.",
          "After the transfer the workshop remains a trusted partner. The internal note stays with the workshop.",
        ],
      },
      {
        id: "stickers",
        title: "QR stickers at the workshop",
        paragraphs: [
          "The same sticker works for a shared unit and for a workshop-managed unit. The sticker identifies the unit. It does not sign anyone in.",
          "For a managed unit the sticker is printed from the workshop view. A defect can be reported from the sticker without an account.",
          "The sticker on a shared unit stays with the owner. A trusted partner opens the unit with it directly.",
        ],
      },
    ],
  },
  es: {
    heading: "Talleres asociados",
    intro: "El menú de la aplicación es Talleres asociados. Estas guías son para una empresa de flota y un taller.",
    articles: [
      {
        id: "sharing",
        title: "Compartir una unidad",
        paragraphs: [
          "iqFleetSync™ es un solo servicio. El tipo de la empresa es flota, taller o ambos.",
          "Una empresa de flota comparte una unidad con un taller de confianza. El uso compartido puede cubrir todas las unidades o solo las elegidas. Quien es propietaria elige las vistas permitidas.",
          "La misma etiqueta QR sigue en la unidad. La unidad y la etiqueta se quedan con la propietaria. Un taller de confianza escanea la etiqueta y abre la unidad directamente. Si la empresa aún no está en el servicio, la invitación sale por correo.",
        ],
      },
      {
        id: "access",
        title: "Solicitud de acceso, acceso único e invitación",
        paragraphs: [
          "Un taller que no es de confianza escanea la etiqueta en su propia cuenta y solicita acceso. La solicitud llega a la propietaria de la unidad. La administración la aprueba o la rechaza.",
          "La propietaria puede dar un acceso de una sola vez, por ejemplo durante 24 horas o para una orden de trabajo. El enlace caduca solo.",
          "Una persona invitada sin cuenta puede registrar el trabajo hecho cuando el registro de invitación está activo. El registro espera la aprobación de la propietaria.",
          "La propietaria puede revocar un uso compartido en cualquier momento. Después el taller ya no ve las unidades compartidas. Sus propias filas de historial se conservan.",
        ],
      },
      {
        id: "work-orders",
        title: "Órdenes de trabajo",
        paragraphs: [
          "La propietaria asigna un trabajo abierto a un solo taller asociado. Solo ese taller ve el trabajo y recibe un mensaje.",
          "El taller abre la orden y la completa. Al completarla se cierran las averías y se añade una fila al historial de la propietaria. Las horas no se copian a la propietaria.",
          "Una nota interna se queda en el taller. La propietaria no la ve.",
        ],
      },
      {
        id: "managed",
        title: "Unidades gestionadas por el taller",
        paragraphs: [
          "Un taller puede tener unidades para clientela que todavía no usa iqFleetSync™. La unidad se marca como gestionada por el taller.",
          "Las máquinas compartidas se muestran con el nombre de la empresa propietaria. Las unidades gestionadas se muestran con el nombre de la clientela.",
          "Los avisos de inspección se aplican a las unidades gestionadas.",
        ],
      },
      {
        id: "customers",
        title: "Registro de clientela",
        paragraphs: [
          "Se añade la clientela antes de añadir una unidad de clientela. El registro guarda el nombre, el Y-tunnus finlandés si existe, una persona de contacto, el correo y el teléfono.",
          "El registro es ligero. Basta para las unidades gestionadas y para la invitación de traspaso.",
        ],
      },
      {
        id: "transfer",
        title: "Traspaso a la clientela",
        paragraphs: [
          "Cuando la clientela adopta iqFleetSync™, el taller envía una invitación de traspaso al correo de la clientela. La clientela acepta el traspaso.",
          "Las unidades, el historial y las etiquetas pasan a la clientela. Si ya existe la misma matrícula o el mismo número de fabricación, las unidades se unen para que no se cree una segunda.",
          "Después del traspaso el taller sigue siendo un socio de confianza. La nota interna se queda en el taller.",
        ],
      },
      {
        id: "stickers",
        title: "Etiquetas QR en el taller",
        paragraphs: [
          "La misma etiqueta sirve para una unidad compartida y para una unidad gestionada por el taller. La etiqueta identifica la unidad. No inicia sesión de nadie.",
          "Para una unidad gestionada la etiqueta se imprime desde la vista del taller. Se puede avisar de una avería desde la etiqueta sin cuenta.",
          "La etiqueta de una unidad compartida se queda con la propietaria. Un taller de confianza abre la unidad con ella directamente.",
        ],
      },
    ],
  },
  it: {
    heading: "Officine partner",
    intro: "Il menu nell’app è Officine partner. Queste guide sono per un’azienda di flotta e un’officina.",
    articles: [
      {
        id: "sharing",
        title: "Condividere un’unità",
        paragraphs: [
          "iqFleetSync™ è un solo servizio. Il tipo dell’azienda è flotta, officina o entrambi.",
          "Un’azienda di flotta condivide un’unità con un’officina di fiducia. La condivisione può riguardare tutte le unità o solo quelle scelte. Chi è proprietaria sceglie le viste consentite.",
          "La stessa etichetta QR resta sull’unità. Unità ed etichetta restano alla proprietaria. Un’officina di fiducia scansiona l’etichetta e apre l’unità direttamente. Se l’azienda non è ancora nel servizio, l’invito parte per e-mail.",
        ],
      },
      {
        id: "access",
        title: "Richiesta di accesso, accesso una tantum e ospite",
        paragraphs: [
          "Un’officina non ancora di fiducia scansiona l’etichetta nel proprio account e chiede l’accesso. La richiesta arriva alla proprietaria dell’unità. L’amministrazione la approva o la rifiuta.",
          "La proprietaria può dare un accesso una tantum, per esempio per 24 ore o per un ordine di lavoro. Il link scade da solo.",
          "Una persona ospite senza account può registrare il lavoro fatto quando la registrazione ospite è attiva. La registrazione attende l’approvazione della proprietaria.",
          "La proprietaria può revocare una condivisione in qualsiasi momento. Dopo, l’officina non vede più le unità condivise. Le sue righe di storico restano.",
        ],
      },
      {
        id: "work-orders",
        title: "Ordini di lavoro",
        paragraphs: [
          "La proprietaria assegna un lavoro aperto a una sola officina partner. Solo quell’officina vede il lavoro e riceve un messaggio.",
          "L’officina apre l’ordine e lo completa. Il completamento chiude i guasti e aggiunge una riga allo storico della proprietaria. Le ore non vengono copiate alla proprietaria.",
          "Una nota interna resta all’officina. La proprietaria non la vede.",
        ],
      },
      {
        id: "managed",
        title: "Unità gestite dall’officina",
        paragraphs: [
          "Un’officina può tenere unità per clientela che non usa ancora iqFleetSync™. L’unità è contrassegnata come gestita dall’officina.",
          "Le macchine condivise compaiono con il nome dell’azienda proprietaria. Le unità gestite compaiono con il nome della clientela.",
          "I promemoria di revisione valgono per le unità gestite.",
        ],
      },
      {
        id: "customers",
        title: "Registro della clientela",
        paragraphs: [
          "Si aggiunge la clientela prima di aggiungere un’unità della clientela. Nel registro ci sono nome, Y-tunnus finlandese se c’è, una persona di contatto, e-mail e telefono.",
          "Il registro è leggero. Basta per le unità gestite e per l’invito di trasferimento.",
        ],
      },
      {
        id: "transfer",
        title: "Trasferimento alla clientela",
        paragraphs: [
          "Quando la clientela adotta iqFleetSync™, l’officina invia un invito di trasferimento all’e-mail della clientela. La clientela accetta il trasferimento.",
          "Unità, storico ed etichette passano alla clientela. Se esiste già la stessa targa o lo stesso numero di fabbricazione, le unità si uniscono, così non nasce una seconda unità.",
          "Dopo il trasferimento l’officina resta un partner di fiducia. La nota interna resta all’officina.",
        ],
      },
      {
        id: "stickers",
        title: "Etichette QR in officina",
        paragraphs: [
          "La stessa etichetta vale per un’unità condivisa e per un’unità gestita dall’officina. L’etichetta identifica l’unità. Non fa accedere nessuno.",
          "Per un’unità gestita l’etichetta si stampa dalla vista dell’officina. Un guasto si può segnalare dall’etichetta senza account.",
          "L’etichetta di un’unità condivisa resta alla proprietaria. Un’officina di fiducia apre l’unità con quella direttamente.",
        ],
      },
    ],
  },
  fr: {
    heading: "Ateliers partenaires",
    intro: "Le menu dans l’application s’appelle Ateliers partenaires. Ces guides sont pour une entreprise de parc et un atelier.",
    articles: [
      {
        id: "sharing",
        title: "Partager une unité",
        paragraphs: [
          "iqFleetSync™ est un seul service. Le type de l’entreprise est parc, atelier ou les deux.",
          "Une entreprise de parc partage une unité avec un atelier de confiance. Le partage peut couvrir toutes les unités ou seulement celles qui sont choisies. Le propriétaire choisit les vues autorisées.",
          "La même étiquette QR reste sur l’unité. L’unité et l’étiquette restent chez le propriétaire. Un atelier de confiance scanne l’étiquette et ouvre l’unité directement. Si l’entreprise n’est pas encore dans le service, l’invitation part par e-mail.",
        ],
      },
      {
        id: "access",
        title: "Demande d’accès, accès unique et invité",
        paragraphs: [
          "Un atelier qui n’est pas de confiance scanne l’étiquette dans son propre compte et demande l’accès. La demande va au propriétaire de l’unité. L’administration l’approuve ou la refuse.",
          "Le propriétaire peut donner un accès unique, par exemple pour 24 heures ou pour un ordre de travail. Le lien expire tout seul.",
          "Une personne invitée sans compte peut enregistrer le travail fait quand la saisie invité est ouverte. L’enregistrement attend l’approbation du propriétaire.",
          "Le propriétaire peut retirer un partage à tout moment. Ensuite l’atelier ne voit plus les unités partagées. Ses propres lignes d’historique restent.",
        ],
      },
      {
        id: "work-orders",
        title: "Ordres de travail",
        paragraphs: [
          "Le propriétaire assigne un travail ouvert à un seul atelier partenaire. Seul cet atelier voit le travail et reçoit un message.",
          "L’atelier ouvre l’ordre et le termine. La clôture ferme les pannes et ajoute une ligne à l’historique du propriétaire. Les heures ne sont pas copiées chez le propriétaire.",
          "Une note interne reste à l’atelier. Le propriétaire ne la voit pas.",
        ],
      },
      {
        id: "managed",
        title: "Unités gérées par l’atelier",
        paragraphs: [
          "Un atelier peut garder des unités pour une clientèle qui n’utilise pas encore iqFleetSync™. L’unité est marquée comme gérée par l’atelier.",
          "Les machines partagées s’affichent au nom de l’entreprise propriétaire. Les unités gérées s’affichent au nom de la clientèle.",
          "Les rappels de contrôle concernent les unités gérées.",
        ],
      },
      {
        id: "customers",
        title: "Registre de clientèle",
        paragraphs: [
          "On ajoute la clientèle avant d’ajouter une unité de clientèle. Le registre contient le nom, le Y-tunnus finlandais s’il existe, une personne de contact, l’e-mail et le téléphone.",
          "Le registre est léger. Il suffit pour les unités gérées et pour l’invitation de transfert.",
        ],
      },
      {
        id: "transfer",
        title: "Transfert vers la clientèle",
        paragraphs: [
          "Quand la clientèle adopte iqFleetSync™, l’atelier envoie une invitation de transfert à l’e-mail de la clientèle. La clientèle accepte le transfert.",
          "Les unités, l’historique et les étiquettes passent à la clientèle. Si la même immatriculation ou le même numéro de fabrication existe déjà, les unités sont fusionnées pour qu’une seconde unité ne soit pas créée.",
          "Après le transfert, l’atelier reste un partenaire de confiance. La note interne reste à l’atelier.",
        ],
      },
      {
        id: "stickers",
        title: "Étiquettes QR à l’atelier",
        paragraphs: [
          "La même étiquette sert pour une unité partagée et pour une unité gérée par l’atelier. L’étiquette identifie l’unité. Elle ne connecte personne.",
          "Pour une unité gérée, l’étiquette s’imprime depuis la vue de l’atelier. Une panne peut être signalée depuis l’étiquette sans compte.",
          "L’étiquette d’une unité partagée reste chez le propriétaire. Un atelier de confiance ouvre l’unité avec elle directement.",
        ],
      },
    ],
  },
  et: {
    heading: "Partneri töökojad",
    intro: "Rakenduse menüü on Partneri töökojad. Need juhendid on autopargi ettevõttele ja töökojale.",
    articles: [
      {
        id: "sharing",
        title: "Üksuse jagamine",
        paragraphs: [
          "iqFleetSync™ on üks teenus. Ettevõtte tüüp on autopark, töökoda või mõlemad.",
          "Autopargi ettevõte jagab üksuse usaldusväärse töökojaga. Jagamine võib hõlmata kõiki üksusi või ainult valituid. Omanik valib lubatud vaated.",
          "Sama QR-kleebis jääb üksusele. Üksus ja kleebis jäävad omanikule. Usaldusväärne partner skannib kleebise ja avab üksuse otse. Kui ettevõtet teenuses veel ei ole, läheb kutse e-postiga.",
        ],
      },
      {
        id: "access",
        title: "Ligipääsutaotlus, ühekordne ligipääs ja külaline",
        paragraphs: [
          "Töökoda, mis ei ole usaldusväärne, skannib kleebise oma kontol ja küsib ligipääsu. Taotlus läheb üksuse omanikule. Administraator kinnitab või lükkab selle tagasi.",
          "Omanik võib anda ühekordse ligipääsu, näiteks 24 tunniks või üheks töökäsuks. Link aegub ise.",
          "Külaline ilma kontota võib tehtud töö kirja panna, kui külaliskirje on sees. Kirje ootab omaniku kinnitust.",
          "Omanik võib jagamise igal ajal tühistada. Pärast seda ei näe töökoda jagatud üksusi. Töökoja oma ajaloo read jäävad alles.",
        ],
      },
      {
        id: "work-orders",
        title: "Töökäsud",
        paragraphs: [
          "Omanik suunab avatud töö ühele partnertöökojale. Ainult see töökoda näeb tööd ja saab selle kohta teate.",
          "Töökoda avab töökäsu ja märgib selle valmis. Valmimine sulgeb rikked ja lisab ühe rea omaniku ajalukku. Tunde omanikule ei kopeerita.",
          "Sisemine märkus jääb töökojale. Omanik seda ei näe.",
        ],
      },
      {
        id: "managed",
        title: "Töökoja hallatavad üksused",
        paragraphs: [
          "Töökoda võib hoida üksusi kliendile, kes iqFleetSync™-i veel ei kasuta. Üksus märgitakse töökoja hallatavaks.",
          "Jagatud masinad kuvatakse omanikettevõtte nime all. Hallatavad üksused kuvatakse kliendi nime all.",
          "Ülevaatuse meeldetuletused kehtivad hallatavatele üksustele.",
        ],
      },
      {
        id: "customers",
        title: "Kliendiregister",
        paragraphs: [
          "Klient lisatakse enne kliendiüksust. Registris on nimi, Soome Y-tunnus, kui see on olemas, kontaktisik, e-post ja telefon.",
          "Register on kerge. Sellest piisab hallatavate üksuste ja üleviimiskutse jaoks.",
        ],
      },
      {
        id: "transfer",
        title: "Üleandmine kliendile",
        paragraphs: [
          "Kui klient võtab iqFleetSync™-i kasutusele, saadab töökoda üleviimiskutse kliendi e-postile. Klient võtab üleviimise vastu.",
          "Üksused, ajalugu ja kleebised liiguvad kliendile. Kui kliendil on juba sama registreerimisnumber või tehasenumber, ühendatakse üksused, et teist üksust ei tekiks.",
          "Pärast üleviimist jääb töökoda usaldusväärseks partneriks. Sisemine märkus jääb töökojale.",
        ],
      },
      {
        id: "stickers",
        title: "QR-kleebised töökojas",
        paragraphs: [
          "Sama kleebis käib jagatud üksuse ja töökoja hallatava üksuse kohta. Kleebis tuvastab üksuse. See ei logi kedagi sisse.",
          "Hallatavale üksusele trükitakse kleebis töökoja vaatest. Rikke saab kleebiselt teatada ilma kontota.",
          "Jagatud üksuse kleebis jääb omanikule. Usaldusväärne partner avab sellega üksuse otse.",
        ],
      },
    ],
  },
  lv: {
    heading: "Partneru darbnīcas",
    intro: "Lietotnes izvēlne ir Partneru darbnīcas. Šie ceļveži ir autoparka uzņēmumam un darbnīcai.",
    articles: [
      {
        id: "sharing",
        title: "Vienības koplietošana",
        paragraphs: [
          "iqFleetSync™ ir viens pakalpojums. Uzņēmuma tips ir autoparks, darbnīca vai abi.",
          "Autoparka uzņēmums koplieto vienību ar uzticamu darbnīcu. Koplietošana var aptvert visas vienības vai tikai izvēlētās. Īpašnieks izvēlas atļautos skatus.",
          "Tā pati QR uzlīme paliek uz vienības. Vienība un uzlīme paliek īpašniekam. Uzticams partneris noskenē uzlīmi un atver vienību uzreiz. Ja uzņēmuma pakalpojumā vēl nav, uzaicinājums aiziet e-pastā.",
        ],
      },
      {
        id: "access",
        title: "Piekļuves pieprasījums, vienreizēja piekļuve un viesis",
        paragraphs: [
          "Darbnīca, kas nav uzticama, noskenē uzlīmi savā kontā un pieprasa piekļuvi. Pieprasījums aiziet vienības īpašniekam. Administrators to apstiprina vai noraida.",
          "Īpašnieks var dot vienreizēju piekļuvi, piemēram, uz 24 stundām vai vienam darba uzdevumam. Saite beidzas pati.",
          "Viesis bez konta var ierakstīt padarīto darbu, kad viesu ieraksts ir ieslēgts. Ieraksts gaida īpašnieka apstiprinājumu.",
          "Īpašnieks var koplietošanu atsaukt jebkurā brīdī. Pēc tam darbnīca vairs neredz koplietotās vienības. Darbnīcas pašu vēstures rindas paliek.",
        ],
      },
      {
        id: "work-orders",
        title: "Darba uzdevumi",
        paragraphs: [
          "Īpašnieks piešķir atvērtu darbu vienai partnera darbnīcai. Tikai šī darbnīca redz darbu un saņem par to ziņu.",
          "Darbnīca atver darba uzdevumu un to pabeidz. Pabeigšana aizver defektus un pievieno vienu rindu īpašnieka vēsturē. Stundas īpašniekam netiek kopētas.",
          "Iekšēja piezīme paliek darbnīcai. Īpašnieks to neredz.",
        ],
      },
      {
        id: "managed",
        title: "Darbnīcas pārvaldītas vienības",
        paragraphs: [
          "Darbnīca var turēt vienības klientam, kurš vēl nelieto iqFleetSync™. Vienība tiek atzīmēta kā darbnīcas pārvaldīta.",
          "Koplietotās mašīnas rāda ar īpašnieka uzņēmuma nosaukumu. Pārvaldītās vienības rāda ar klienta nosaukumu.",
          "Pārbaudes atgādinājumi attiecas uz pārvaldītajām vienībām.",
        ],
      },
      {
        id: "customers",
        title: "Klientu reģistrs",
        paragraphs: [
          "Klientu pievieno pirms klienta vienības. Reģistrā ir nosaukums, Somijas uzņēmuma numurs, ja tāds ir, kontaktpersona, e-pasts un tālrunis.",
          "Reģistrs ir viegls. Ar to pietiek pārvaldītajām vienībām un nodošanas uzaicinājumam.",
        ],
      },
      {
        id: "transfer",
        title: "Nodošana klientam",
        paragraphs: [
          "Kad klients sāk lietot iqFleetSync™, darbnīca nosūta nodošanas uzaicinājumu uz klienta e-pastu. Klients apstiprina nodošanu.",
          "Vienības, vēsture un uzlīmes pāriet klientam. Ja klientam jau ir tas pats reģistrācijas numurs vai rūpnīcas numurs, vienības apvieno, lai nerastos otra vienība.",
          "Pēc nodošanas darbnīca paliek uzticams partneris. Iekšējā piezīme paliek darbnīcai.",
        ],
      },
      {
        id: "stickers",
        title: "QR uzlīmes darbnīcā",
        paragraphs: [
          "Tā pati uzlīme der koplietotai vienībai un darbnīcas pārvaldītai vienībai. Uzlīme atpazīst vienību. Tā nevienu neielogina.",
          "Pārvaldītai vienībai uzlīmi drukā no darbnīcas skata. Defektu var paziņot no uzlīmes bez konta.",
          "Koplietotas vienības uzlīme paliek īpašniekam. Uzticams partneris ar to atver vienību uzreiz.",
        ],
      },
    ],
  },
  lt: {
    heading: "Partnerių dirbtuvės",
    intro: "Programos meniu yra Partnerių dirbtuvės. Šios instrukcijos skirtos autoparko įmonei ir dirbtuvėms.",
    articles: [
      {
        id: "sharing",
        title: "Vieneto bendrinimas",
        paragraphs: [
          "iqFleetSync™ yra viena paslauga. Įmonės tipas yra autoparkas, dirbtuvės arba abu.",
          "Autoparko įmonė bendrina vienetą su patikimomis dirbtuvėmis. Bendrinimas gali apimti visus vienetus arba tik pasirinktus. Savininkas pasirenka leidžiamus rodinius.",
          "Tas pats QR lipdukas lieka ant vieneto. Vienetas ir lipdukas lieka savininkui. Patikimas partneris nuskaito lipduką ir atidaro vienetą iš karto. Jei įmonės paslaugoje dar nėra, kvietimas išeina el. paštu.",
        ],
      },
      {
        id: "access",
        title: "Prieigos prašymas, vienkartinė prieiga ir svečias",
        paragraphs: [
          "Dirbtuvės, kurios nėra patikimos, nuskaito lipduką savo paskyroje ir prašo prieigos. Prašymas nueina vieneto savininkui. Administratorius jį patvirtina arba atmeta.",
          "Savininkas gali suteikti vienkartinę prieigą, pavyzdžiui, 24 valandoms arba vienam darbo užsakymui. Nuoroda baigiasi pati.",
          "Svečias be paskyros gali įrašyti atliktą darbą, kai svečio įrašas įjungtas. Įrašas laukia savininko patvirtinimo.",
          "Savininkas gali bendrinimą atšaukti bet kada. Po to dirbtuvės nebemato bendrinamų vienetų. Dirbtuvių savos istorijos eilutės lieka.",
        ],
      },
      {
        id: "work-orders",
        title: "Darbo užsakymai",
        paragraphs: [
          "Savininkas paskiria atvirą darbą vienoms partnerio dirbtuvėms. Tik tos dirbtuvės mato darbą ir gauna apie jį žinutę.",
          "Dirbtuvės atidaro darbo užsakymą ir jį užbaigia. Užbaigimas uždaro gedimus ir prideda vieną eilutę savininko istorijoje. Valandos savininkui nekopijuojamos.",
          "Vidinė pastaba lieka dirbtuvėms. Savininkas jos nemato.",
        ],
      },
      {
        id: "managed",
        title: "Dirbtuvių valdomi vienetai",
        paragraphs: [
          "Dirbtuvės gali laikyti vienetus klientui, kuris dar nenaudoja iqFleetSync™. Vienetas pažymimas kaip dirbtuvių valdomas.",
          "Bendrinamos mašinos rodomos savininko įmonės pavadinimu. Valdomi vienetai rodomi kliento pavadinimu.",
          "Patikros priminimai taikomi valdomiems vienetams.",
        ],
      },
      {
        id: "customers",
        title: "Klientų registras",
        paragraphs: [
          "Klientas pridedamas prieš kliento vienetą. Registre yra pavadinimas, Suomijos įmonės kodas, jei jis yra, kontaktinis asmuo, el. paštas ir telefonas.",
          "Registras lengvas. Jo pakanka valdomiems vienetams ir perdavimo kvietimui.",
        ],
      },
      {
        id: "transfer",
        title: "Perdavimas klientui",
        paragraphs: [
          "Kai klientas pradeda naudoti iqFleetSync™, dirbtuvės siunčia perdavimo kvietimą kliento el. paštu. Klientas priima perdavimą.",
          "Vienetai, istorija ir lipdukai pereina klientui. Jei klientas jau turi tą patį registracijos arba gamyklinį numerį, vienetai sujungiami, kad neatsirastų antras vienetas.",
          "Po perdavimo dirbtuvės lieka patikimu partneriu. Vidinė pastaba lieka dirbtuvėms.",
        ],
      },
      {
        id: "stickers",
        title: "QR lipdukai dirbtuvėse",
        paragraphs: [
          "Tas pats lipdukas tinka bendrinamam vienetui ir dirbtuvių valdomam vienetui. Lipdukas atpažįsta vienetą. Jis nieko neprisijungia.",
          "Valdomam vienetui lipdukas spausdinamas iš dirbtuvių rodinio. Gedimą galima pranešti nuo lipduko be paskyros.",
          "Bendrinamo vieneto lipdukas lieka savininkui. Patikimas partneris juo atidaro vienetą iš karto.",
        ],
      },
    ],
  },
  pl: {
    heading: "Warsztaty partnerskie",
    intro: "Menu w aplikacji to Warsztaty partnerskie. Te instrukcje są dla firmy flotowej i warsztatu.",
    articles: [
      {
        id: "sharing",
        title: "Udostępnianie jednostki",
        paragraphs: [
          "iqFleetSync™ to jedna usługa. Typ firmy to flota, warsztat albo oba.",
          "Firma flotowa udostępnia jednostkę zaufanemu warsztatowi. Udostępnienie może obejmować wszystkie jednostki albo tylko wybrane. Właściciel wybiera dozwolone widoki.",
          "Ta sama naklejka QR zostaje na jednostce. Jednostka i naklejka zostają u właściciela. Zaufany partner skanuje naklejkę i otwiera jednostkę od razu. Jeśli firmy nie ma jeszcze w usłudze, zaproszenie idzie e-mailem.",
        ],
      },
      {
        id: "access",
        title: "Prośba o dostęp, dostęp jednorazowy i gość",
        paragraphs: [
          "Warsztat, który nie jest zaufany, skanuje naklejkę na własnym koncie i prosi o dostęp. Prośba trafia do właściciela jednostki. Administrator ją zatwierdza albo odrzuca.",
          "Właściciel może dać dostęp jednorazowy, na przykład na 24 godziny albo na jedno zlecenie. Odnośnik wygasa sam.",
          "Gość bez konta może wpisać wykonaną pracę, gdy wpis gościa jest włączony. Wpis czeka na zatwierdzenie właściciela.",
          "Właściciel może cofnąć udostępnienie w dowolnej chwili. Potem warsztat nie widzi udostępnionych jednostek. Własne wiersze historii zostają.",
        ],
      },
      {
        id: "work-orders",
        title: "Zlecenia",
        paragraphs: [
          "Właściciel przypisuje otwartą pracę jednemu warsztatowi partnerskiemu. Tylko ten warsztat widzi pracę i dostaje o niej wiadomość.",
          "Warsztat otwiera zlecenie i je kończy. Zakończenie zamyka usterki i dodaje jeden wiersz do historii właściciela. Godziny nie są kopiowane do właściciela.",
          "Notatka wewnętrzna zostaje w warsztacie. Właściciel jej nie widzi.",
        ],
      },
      {
        id: "managed",
        title: "Jednostki prowadzone przez warsztat",
        paragraphs: [
          "Warsztat może trzymać jednostki dla klienta, który nie korzysta jeszcze z iqFleetSync™. Jednostka jest oznaczona jako prowadzona przez warsztat.",
          "Udostępnione maszyny widać pod nazwą firmy właściciela. Jednostki prowadzone widać pod nazwą klienta.",
          "Przypomnienia o przeglądach dotyczą jednostek prowadzonych.",
        ],
      },
      {
        id: "customers",
        title: "Rejestr klientów",
        paragraphs: [
          "Klient jest dodawany przed jednostką klienta. W rejestrze są nazwa, fiński numer Y-tunnus, jeśli jest, osoba do kontaktu, e-mail i telefon.",
          "Rejestr jest lekki. Wystarcza do jednostek prowadzonych i do zaproszenia do przekazania.",
        ],
      },
      {
        id: "transfer",
        title: "Przekazanie klientowi",
        paragraphs: [
          "Gdy klient zaczyna korzystać z iqFleetSync™, warsztat wysyła zaproszenie do przekazania na e-mail klienta. Klient przyjmuje przekazanie.",
          "Jednostki, historia i naklejki przechodzą do klienta. Jeśli klient ma już ten sam numer rejestracyjny albo numer fabryczny, jednostki są łączone, żeby nie powstała druga.",
          "Po przekazaniu warsztat zostaje zaufanym partnerem. Notatka wewnętrzna zostaje w warsztacie.",
        ],
      },
      {
        id: "stickers",
        title: "Naklejki QR w warsztacie",
        paragraphs: [
          "Ta sama naklejka działa dla jednostki udostępnionej i dla jednostki prowadzonej przez warsztat. Naklejka rozpoznaje jednostkę. Nie loguje nikogo.",
          "Dla jednostki prowadzonej naklejkę drukuje się z widoku warsztatu. Usterkę można zgłosić z naklejki bez konta.",
          "Naklejka jednostki udostępnionej zostaje u właściciela. Zaufany partner otwiera nią jednostkę od razu.",
        ],
      },
    ],
  },
  cs: {
    heading: "Partnerské dílny",
    intro: "Nabídka v aplikaci se jmenuje Partnerské dílny. Tyto návody jsou pro flotilovou firmu a dílnu.",
    articles: [
      {
        id: "sharing",
        title: "Sdílení jednotky",
        paragraphs: [
          "iqFleetSync™ je jedna služba. Typ firmy je flotila, dílna nebo obojí.",
          "Flotilová firma sdílí jednotku s důvěryhodnou dílnou. Sdílení může zahrnovat všechny jednotky nebo jen vybrané. Vlastník volí povolená zobrazení.",
          "Stejná QR nálepka zůstává na jednotce. Jednotka i nálepka zůstávají vlastníkovi. Důvěryhodný partner naskenuje nálepku a jednotku otevře přímo. Pokud firma ve službě ještě není, pozvánka odejde e-mailem.",
        ],
      },
      {
        id: "access",
        title: "Žádost o přístup, jednorázový přístup a host",
        paragraphs: [
          "Dílna, která není důvěryhodná, naskenuje nálepku na vlastním účtu a požádá o přístup. Žádost jde vlastníkovi jednotky. Správce ji schválí nebo odmítne.",
          "Vlastník může dát jednorázový přístup, například na 24 hodin nebo na jednu zakázku. Odkaz vyprší sám.",
          "Host bez účtu může zapsat hotovou práci, když je zápis hosta zapnutý. Zápis čeká na schválení vlastníka.",
          "Vlastník může sdílení kdykoli zrušit. Potom dílna sdílené jednotky nevidí. Vlastní řádky historie zůstanou.",
        ],
      },
      {
        id: "work-orders",
        title: "Zakázky",
        paragraphs: [
          "Vlastník přidělí otevřenou práci jedné partnerské dílně. Jen tato dílna práci vidí a dostane o ní zprávu.",
          "Dílna zakázku otevře a dokončí ji. Dokončení uzavře závady a přidá jeden řádek do historie vlastníka. Hodiny se vlastníkovi nekopírují.",
          "Interní poznámka zůstane dílně. Vlastník ji nevidí.",
        ],
      },
      {
        id: "managed",
        title: "Jednotky vedené dílnou",
        paragraphs: [
          "Dílna může držet jednotky pro zákazníka, který iqFleetSync™ ještě nepoužívá. Jednotka je označená jako vedená dílnou.",
          "Sdílené stroje se zobrazují pod názvem firmy vlastníka. Vedené jednotky se zobrazují pod názvem zákazníka.",
          "Připomínky prohlídek platí pro vedené jednotky.",
        ],
      },
      {
        id: "customers",
        title: "Registr zákazníků",
        paragraphs: [
          "Zákazník se přidá před jednotkou zákazníka. V registru je název, finské IČ, pokud existuje, kontaktní osoba, e-mail a telefon.",
          "Registr je lehký. Stačí pro vedené jednotky a pro pozvánku k převodu.",
        ],
      },
      {
        id: "transfer",
        title: "Převod na zákazníka",
        paragraphs: [
          "Když zákazník začne používat iqFleetSync™, dílna pošle pozvánku k převodu na e-mail zákazníka. Zákazník převod přijme.",
          "Jednotky, historie a nálepky přejdou na zákazníka. Pokud zákazník už má stejnou registrační značku nebo výrobní číslo, jednotky se sloučí, aby nevznikla druhá.",
          "Po převodu dílna zůstane důvěryhodným partnerem. Interní poznámka zůstane dílně.",
        ],
      },
      {
        id: "stickers",
        title: "QR nálepky v dílně",
        paragraphs: [
          "Stejná nálepka platí pro sdílenou jednotku i pro jednotku vedenou dílnou. Nálepka pozná jednotku. Nikoho nepřihlásí.",
          "Pro vedenou jednotku se nálepka tiskne z pohledu dílny. Závadu lze nahlásit z nálepky bez účtu.",
          "Nálepka sdílené jednotky zůstává vlastníkovi. Důvěryhodný partner s ní otevře jednotku přímo.",
        ],
      },
    ],
  },
};

function workshopGuideCard(article, lang) {
  const copy = article.paragraphs
    .map((paragraph) => "<p>" + escapeHelpHtml(paragraph) + "</p>")
    .join("");
  if (article.video && typeof helpMediaHtml === "function") {
    const pages = typeof HELP_CENTER !== "undefined" ? HELP_CENTER : null;
    const page = pages ? (pages[lang] || pages.en) : null;
    const video = helpMediaHtml(article.video, article, page && page.unsupported ? page.unsupported : "", lang);
    return `<article class="help-card" id="${escapeHelpHtml(article.id)}">
      <h3>${escapeHelpHtml(article.title)}</h3>
      <div class="help-copy">${copy}</div>
      ${video}
    </article>`;
  }
  return `<article class="help-card" id="${escapeHelpHtml(article.id)}">
      <h3>${escapeHelpHtml(article.title)}</h3>
      <div class="help-copy">${copy}</div>
    </article>`;
}

function workshopGuidesHtml(lang) {
  if (typeof WORKSHOP_GUIDES === "undefined") return "";
  const guide = WORKSHOP_GUIDES[lang] || WORKSHOP_GUIDES.en;
  const articles = guide.articles.slice();
  const scan = typeof WORKSHOP_SCAN_HELP !== "undefined"
    ? (WORKSHOP_SCAN_HELP[lang] || WORKSHOP_SCAN_HELP.en)
    : null;
  if (scan) {
    const after = articles.findIndex((article) => article.id === "access");
    articles.splice(after === -1 ? articles.length : after + 1, 0, scan);
  }
  const parts = typeof WORKSHOP_PARTS_HELP !== "undefined"
    ? (WORKSHOP_PARTS_HELP[lang] || WORKSHOP_PARTS_HELP.en)
    : null;
  if (parts) {
    const afterWork = articles.findIndex((article) => article.id === "work-orders");
    articles.splice(afterWork === -1 ? articles.length : afterWork + 1, 0, parts);
  }
  const stock = typeof WORKSHOP_STOCK_HELP !== "undefined"
    ? (WORKSHOP_STOCK_HELP[lang] || WORKSHOP_STOCK_HELP.en)
    : null;
  if (stock) {
    const withVideo = WORKSHOP_STOCK_HELP.video
      ? Object.assign({}, stock, { video: WORKSHOP_STOCK_HELP.video })
      : stock;
    const afterParts = articles.findIndex((article) => article.id === "partner-parts");
    articles.splice(afterParts === -1 ? articles.length : afterParts + 1, 0, withVideo);
  }
  const cards = articles.map((article) => workshopGuideCard(article, lang)).join("");
  return `<h2 id="workshop-guides">${escapeHelpHtml(guide.heading)}</h2>
    <p>${escapeHelpHtml(guide.intro)}</p>
    <div class="help-list">${cards}</div>`;
}

function supportAssistantCardHtml(lang) {
  if (typeof SUPPORT_ASSISTANT_HELP === "undefined") return "";
  const article = SUPPORT_ASSISTANT_HELP[lang] || SUPPORT_ASSISTANT_HELP.en;
  if (!article || !article.paragraphs) return "";
  const withVideo = SUPPORT_ASSISTANT_HELP.video
    ? Object.assign({}, article, { video: SUPPORT_ASSISTANT_HELP.video })
    : article;
  return workshopGuideCard(withVideo, lang);
}

const WORKSHOP_SCAN_HELP = {
  fi: {
    id: "scan-in-app",
    title: "Skannaa QR sovelluksessa",
    paragraphs: [
      "Sovelluksessa on painike Skannaa QR. Se lukee yksikön tarran sillä kirjautumisella, joka on jo auki. Tarra ei kirjaa ketään erikseen sisään.",
      "Jos tällä kirjautumisella on pääsy, yksikkö avautuu suoraan.",
      "Jos pääsyä ei ole, avautuu vierasnäkymä. Siinä on Pyydä pääsyä.",
    ],
  },
  sv: {
    id: "scan-in-app",
    title: "Skanna QR i appen",
    paragraphs: [
      "I appen finns knappen Skanna QR. Den läser enhetens dekal med den inloggning som redan är öppen. Dekalen loggar inte in någon för sig.",
      "Om den inloggningen redan har åtkomst öppnas enheten direkt.",
      "Om åtkomst saknas öppnas gästvyn. Där finns Be om åtkomst.",
    ],
  },
  no: {
    id: "scan-in-app",
    title: "Skann QR i appen",
    paragraphs: [
      "I appen er det en knapp, Skann QR. Den leser enhetens merke med innloggingen som allerede er åpen. Merket logger ikke noen inn for seg.",
      "Hvis den innloggingen allerede har tilgang, åpnes enheten direkte.",
      "Hvis tilgang mangler, åpnes gjestvisningen. Der er Be om tilgang.",
    ],
  },
  da: {
    id: "scan-in-app",
    title: "Scan QR i appen",
    paragraphs: [
      "I appen er der en knap, Scan QR. Den læser enhedens mærke med det login, der allerede er åbent. Mærket logger ikke nogen ind for sig.",
      "Hvis det login allerede har adgang, åbnes enheden direkte.",
      "Hvis adgang mangler, åbnes gæstevisningen. Der er Bed om adgang.",
    ],
  },
  de: {
    id: "scan-in-app",
    title: "QR in der App scannen",
    paragraphs: [
      "In der App gibt es die Schaltfläche QR scannen. Sie liest den Aufkleber der Einheit mit der Anmeldung, die schon offen ist. Der Aufkleber meldet niemanden extra an.",
      "Wenn diese Anmeldung schon Zugang hat, öffnet sich die Einheit direkt.",
      "Wenn kein Zugang besteht, öffnet sich die Gastansicht. Dort ist Zugang anfragen.",
    ],
  },
  en: {
    id: "scan-in-app",
    title: "Scan QR in the app",
    paragraphs: [
      "The app has a Scan QR button. It reads the unit sticker with the login that is already open. The sticker does not sign anyone in by itself.",
      "If that login already has access, the unit opens directly.",
      "If there is no access, the guest view opens. It has Request access.",
    ],
  },
  es: {
    id: "scan-in-app",
    title: "Escanear QR en la aplicación",
    paragraphs: [
      "En la aplicación está el botón Escanear QR. Lee la etiqueta de la unidad con el acceso que ya está abierto. La etiqueta no inicia sesión de nadie por sí sola.",
      "Si ese acceso ya existe, la unidad se abre directamente.",
      "Si no hay acceso, se abre la vista de invitación. Ahí está Pedir acceso.",
    ],
  },
  it: {
    id: "scan-in-app",
    title: "Scansiona QR nell’app",
    paragraphs: [
      "Nell’app c’è il pulsante Scansiona QR. Legge l’etichetta dell’unità con l’accesso già aperto. L’etichetta non fa accedere nessuno da sola.",
      "Se quell’accesso c’è già, l’unità si apre direttamente.",
      "Se l’accesso non c’è, si apre la vista ospite. Lì c’è Chiedi accesso.",
    ],
  },
  fr: {
    id: "scan-in-app",
    title: "Scanner le QR dans l’application",
    paragraphs: [
      "L’application a le bouton Scanner le QR. Il lit l’étiquette de l’unité avec la session déjà ouverte. L’étiquette ne connecte personne toute seule.",
      "Si cette session a déjà l’accès, l’unité s’ouvre directement.",
      "S’il n’y a pas d’accès, la vue invité s’ouvre. Elle propose Demander l’accès.",
    ],
  },
  et: {
    id: "scan-in-app",
    title: "Skanni QR rakenduses",
    paragraphs: [
      "Rakenduses on nupp Skanni QR. See loeb üksuse kleebist sisselogimisega, mis on juba avatud. Kleebis ei logi kedagi eraldi sisse.",
      "Kui sellel sisselogimisel on ligipääs, avaneb üksus otse.",
      "Kui ligipääsu ei ole, avaneb külalisvaade. Seal on Küsi ligipääsu.",
    ],
  },
  lv: {
    id: "scan-in-app",
    title: "Skenēt QR lietotnē",
    paragraphs: [
      "Lietotnē ir poga Skenēt QR. Tā nolasa vienības uzlīmi ar jau atvērto pieteikšanos. Uzlīme nevienu atsevišķi neielogina.",
      "Ja šai pieteikšanai jau ir piekļuve, vienība atveras uzreiz.",
      "Ja piekļuves nav, atveras viesa skats. Tur ir Pieprasīt piekļuvi.",
    ],
  },
  lt: {
    id: "scan-in-app",
    title: "Skenuoti QR programoje",
    paragraphs: [
      "Programoje yra mygtukas Skenuoti QR. Jis nuskaito vieneto lipduką jau atidarytu prisijungimu. Lipdukas nieko atskirai neprijungia.",
      "Jei šis prisijungimas jau turi prieigą, vienetas atsidaro iš karto.",
      "Jei prieigos nėra, atsidaro svečio rodinys. Jame yra Prašyti prieigos.",
    ],
  },
  pl: {
    id: "scan-in-app",
    title: "Skanuj QR w aplikacji",
    paragraphs: [
      "W aplikacji jest przycisk Skanuj QR. Odczytuje naklejkę jednostki tym logowaniem, które jest już otwarte. Naklejka nikogo osobno nie loguje.",
      "Jeśli to logowanie ma już dostęp, jednostka otwiera się od razu.",
      "Jeśli dostępu nie ma, otwiera się widok gościa. Jest tam Poproś o dostęp.",
    ],
  },
  cs: {
    id: "scan-in-app",
    title: "Skenovat QR v aplikaci",
    paragraphs: [
      "V aplikaci je tlačítko Skenovat QR. Přečte nálepku jednotky přihlášením, které je už otevřené. Nálepka nikoho sama nepřihlásí.",
      "Pokud toto přihlášení přístup už má, jednotka se otevře přímo.",
      "Pokud přístup není, otevře se pohled hosta. V něm je Požádat o přístup.",
    ],
  },
};

/** Partner workshop: used parts from its own stock on shared customer units. No prices. */
const WORKSHOP_PARTS_HELP = {
  fi: {
    id: "partner-parts",
    title: "Käytetyt osat asiakkaan yksikön työssä",
    paragraphs: [
      "Korjaamo avaa työn asiakkaan jakamalle yksikölle yksikön sivulta. Uusi työmääräin -sivulla näkyvät vain korjaamon omat yksiköt, ja sivulla on tästä vihje korjaamolle.",
      "Kun työ kuitataan valmiiksi, valitaan Käytetyt osat korjaamon omasta varastosta. Osat vähennetään korjaamon varastosta. Saldo ei voi mennä miinukselle. Jos osaa ei ole tarpeeksi, pyydä pääkäyttäjää lisäämään osia varastoon.",
      "Osat näkyvät asiakkaan huoltohistoriassa nimellä, osanumerolla ja määrällä. Rivillä näkyy, että työn teki korjaamo.",
      "Jos työ avataan uudelleen, osat palautuvat korjaamon varastoon.",
    ],
  },
  sv: {
    id: "partner-parts",
    title: "Använda delar i arbete på kundens enhet",
    paragraphs: [
      "Verkstaden öppnar arbetet för en enhet som kunden har delat från enhetens sida. Sidan Ny arbetsorder visar bara verkstadens egna enheter och har en tips-text för verkstaden.",
      "När arbetet kvitteras som klart väljs Använda delar från verkstadens eget lager. Delarna dras från verkstadens lager. Saldot kan inte bli negativt. Om det inte finns tillräckligt, be administratören att lägga till delar i lagret.",
      "Delarna syns i kundens servicehistorik med namn, artikelnummer och antal. Raden visar att verkstaden gjorde arbetet.",
      "Om arbetet öppnas igen går delarna tillbaka till verkstadens lager.",
    ],
  },
  no: {
    id: "partner-parts",
    title: "Brukte deler i arbeid på kundens enhet",
    paragraphs: [
      "Verkstedet åpner arbeidet for en enhet som kunden har delt, fra enhetens side. Siden Ny arbeidsordre viser bare verkstedets egne enheter og har et hint for verkstedet.",
      "Når arbeidet kvitteres som ferdig, velges Brukte deler fra verkstedets eget lager. Delene trekkes fra verkstedets lager. Saldoen kan ikke bli negativ. Hvis det ikke er nok, be administratoren legge til deler på lageret.",
      "Delene vises i kundens servicehistorikk med navn, delenummer og antall. Raden viser at verkstedet gjorde arbeidet.",
      "Hvis arbeidet åpnes igjen, går delene tilbake til verkstedets lager.",
    ],
  },
  da: {
    id: "partner-parts",
    title: "Brugte dele i arbejde på kundens enhed",
    paragraphs: [
      "Værkstedet åbner arbejdet for en enhed, som kunden har delt, fra enhedens side. Siden Ny arbejdsordre viser kun værkstedets egne enheder og har et tip til værkstedet.",
      "Når arbejdet kvitteres som færdigt, vælges Brugte dele fra værkstedets eget lager. Delene trækkes fra værkstedets lager. Saldoen kan ikke blive negativ. Hvis der ikke er nok, så bed administratoren om at lægge dele på lager.",
      "Delene vises i kundens servicehistorik med navn, varenummer og antal. Linjen viser, at værkstedet udførte arbejdet.",
      "Hvis arbejdet åbnes igen, går delene tilbage til værkstedets lager.",
    ],
  },
  de: {
    id: "partner-parts",
    title: "Verwendete Teile bei Arbeiten an der Kundeneinheit",
    paragraphs: [
      "Die Werkstatt öffnet die Arbeit für eine vom Kunden geteilte Einheit auf der Seite der Einheit. Die Seite Neuer Arbeitsauftrag zeigt nur eigene Einheiten der Werkstatt und enthält dazu einen Hinweis.",
      "Beim Abschließen der Arbeit werden Verwendete Teile aus dem eigenen Lager der Werkstatt gewählt. Die Teile werden vom Lager der Werkstatt abgebucht. Der Bestand kann nicht negativ werden. Reicht der Bestand nicht, bitten Sie die Administration, Teile ins Lager aufzunehmen.",
      "Die Teile erscheinen in der Servicehistorie des Kunden mit Name, Teilenummer und Menge. Die Zeile zeigt, dass die Werkstatt die Arbeit ausgeführt hat.",
      "Wird die Arbeit wieder geöffnet, gehen die Teile zurück ins Lager der Werkstatt.",
    ],
  },
  en: {
    id: "partner-parts",
    title: "Used parts in work on a customer unit",
    paragraphs: [
      "The workshop opens work on a unit the customer has shared from the unit page. The New work order page lists only the workshop’s own units and shows a hint about this for workshops.",
      "When the work is completed, Used parts are chosen from the workshop’s own stock. The parts are deducted from the workshop’s stock. Stock cannot go negative. If there is not enough, ask an admin to add parts to stock.",
      "The parts show in the customer’s service history with name, part number and quantity. The row shows that the workshop did the work.",
      "If the work is reopened, the parts return to the workshop’s stock.",
    ],
  },
  es: {
    id: "partner-parts",
    title: "Piezas usadas en trabajos en la unidad del cliente",
    paragraphs: [
      "El taller abre el trabajo de una unidad compartida por el cliente desde la página de la unidad. La página Nueva orden de trabajo solo muestra las unidades propias del taller y muestra un aviso al taller.",
      "Al completar el trabajo, se eligen las Piezas usadas del stock propio del taller. Las piezas se descuentan del stock del taller. El stock no puede quedar en negativo. Si no hay suficiente, pida a un administrador que añada piezas al stock.",
      "Las piezas aparecen en el historial de servicio del cliente con nombre, número de pieza y cantidad. La fila indica que el trabajo lo hizo el taller.",
      "Si el trabajo se reabre, las piezas vuelven al stock del taller.",
    ],
  },
  it: {
    id: "partner-parts",
    title: "Ricambi usati nei lavori sull’unità del cliente",
    paragraphs: [
      "L’officina apre il lavoro su un’unità condivisa dal cliente dalla pagina dell’unità. La pagina Nuovo ordine di lavoro mostra solo le unità proprie dell’officina e un suggerimento per l’officina.",
      "Quando il lavoro viene completato, si scelgono i Ricambi usati dal magazzino proprio dell’officina. I ricambi vengono scalati dal magazzino dell’officina. La giacenza non può andare in negativo. Se non basta, chiedi a un amministratore di aggiungere ricambi al magazzino.",
      "I ricambi compaiono nello storico manutenzione del cliente con nome, codice e quantità. La riga indica che il lavoro è stato fatto dall’officina.",
      "Se il lavoro viene riaperto, i ricambi tornano nel magazzino dell’officina.",
    ],
  },
  fr: {
    id: "partner-parts",
    title: "Pièces utilisées sur l’unité d’un client",
    paragraphs: [
      "L’atelier ouvre le travail sur une unité partagée par le client depuis la page de l’unité. La page Nouvel ordre de travail ne liste que les unités propres à l’atelier et affiche une indication pour l’atelier.",
      "À la clôture du travail, les Pièces utilisées sont choisies dans le stock propre de l’atelier. Elles sont déduites du stock de l’atelier. Le stock ne peut pas devenir négatif. S’il n’y en a pas assez, demandez à un administrateur d’ajouter des pièces au stock.",
      "Les pièces apparaissent dans l’historique d’entretien du client avec le nom, la référence et la quantité. La ligne indique que l’atelier a fait le travail.",
      "Si le travail est rouvert, les pièces retournent dans le stock de l’atelier.",
    ],
  },
  et: {
    id: "partner-parts",
    title: "Kasutatud osad kliendi üksuse töös",
    paragraphs: [
      "Töökoda avab töö kliendi jagatud üksusele üksuse lehelt. Lehel Uus töökäsk on ainult töökoja oma üksused ning töökojale on seal vihje.",
      "Kui töö märgitakse valmis, valitakse Kasutatud osad töökoja enda laost. Osad arvatakse maha töökoja laost. Laoseis ei saa minna miinusesse. Kui osi ei ole piisavalt, palu administraatoril osi lattu lisada.",
      "Osad on kliendi hooldusajaloos nime, osanumbri ja kogusega. Real on näha, et töö tegi töökoda.",
      "Kui töö avatakse uuesti, lähevad osad tagasi töökoja lattu.",
    ],
  },
  lv: {
    id: "partner-parts",
    title: "Izmantotās detaļas darbā ar klienta vienību",
    paragraphs: [
      "Darbnīca atver darbu klienta kopīgotai vienībai no vienības lapas. Lapā Jauns darba uzdevums ir tikai darbnīcas pašas vienības, un tur ir norāde darbnīcai.",
      "Kad darbs tiek pabeigts, Izmantotās detaļas izvēlas no darbnīcas pašas noliktavas. Detaļas tiek norakstītas no darbnīcas noliktavas. Atlikums nevar kļūt negatīvs. Ja detaļu nepietiek, palūdziet administratoram pievienot detaļas noliktavā.",
      "Detaļas redzamas klienta apkopes vēsturē ar nosaukumu, detaļas numuru un daudzumu. Rindā redzams, ka darbu veica darbnīca.",
      "Ja darbu atver atkārtoti, detaļas atgriežas darbnīcas noliktavā.",
    ],
  },
  lt: {
    id: "partner-parts",
    title: "Panaudotos dalys darbe su kliento vienetu",
    paragraphs: [
      "Dirbtuvės atidaro darbą kliento bendrinamam vienetui iš vieneto puslapio. Puslapyje Naujas darbo užsakymas rodomi tik pačių dirbtuvių vienetai ir yra užuomina dirbtuvėms.",
      "Užbaigiant darbą, Panaudotos dalys pasirenkamos iš pačių dirbtuvių sandėlio. Dalys nurašomos iš dirbtuvių sandėlio. Likutis negali tapti neigiamas. Jei dalių nepakanka, paprašykite administratoriaus papildyti sandėlį.",
      "Dalys rodomos kliento aptarnavimo istorijoje su pavadinimu, dalies numeriu ir kiekiu. Eilutėje matyti, kad darbą atliko dirbtuvės.",
      "Jei darbas atidaromas iš naujo, dalys grįžta į dirbtuvių sandėlį.",
    ],
  },
  pl: {
    id: "partner-parts",
    title: "Zużyte części w pracy przy jednostce klienta",
    paragraphs: [
      "Warsztat otwiera pracę dla jednostki udostępnionej przez klienta ze strony jednostki. Strona Nowe zlecenie pracy pokazuje tylko własne jednostki warsztatu i wyświetla wskazówkę dla warsztatu.",
      "Przy zakończeniu pracy Zużyte części wybiera się z własnego magazynu warsztatu. Części są odejmowane z magazynu warsztatu. Stan nie może spaść poniżej zera. Jeśli części brakuje, poproś administratora o dodanie ich do magazynu.",
      "Części widać w historii serwisowej klienta z nazwą, numerem części i ilością. Wiersz pokazuje, że pracę wykonał warsztat.",
      "Jeśli praca zostanie ponownie otwarta, części wracają do magazynu warsztatu.",
    ],
  },
  cs: {
    id: "partner-parts",
    title: "Použité díly při práci na jednotce zákazníka",
    paragraphs: [
      "Dílna otevře práci na jednotce sdílené zákazníkem ze stránky jednotky. Stránka Nový pracovní příkaz ukazuje jen vlastní jednotky dílny a zobrazuje pro dílnu nápovědu.",
      "Při dokončení práce se Použité díly vybírají z vlastního skladu dílny. Díly se odečtou ze skladu dílny. Stav nemůže klesnout pod nulu. Pokud dílů není dost, požádejte správce o doplnění skladu.",
      "Díly se zobrazí v servisní historii zákazníka s názvem, číslem dílu a množstvím. Řádek ukazuje, že práci provedla dílna.",
      "Pokud se práce znovu otevře, díly se vrátí do skladu dílny.",
    ],
  },
};

/** Barcode stock in and stock out. Purchase price is an administrator field only. */
const WORKSHOP_STOCK_HELP = {
  video: {
    src: "videos/iqfleetsync/varasto-viivakoodi.mp4",
    captions: "videos/iqfleetsync/varasto-viivakoodi.vtt",
  },
  fi: {
    id: "stock-in-out",
    title: "Varastoon otto ja varastosta otto",
    paragraphs: [
      "iqFleetSync™ osavarastossa on kaksi suurta painiketta.",
      "Skannaa · Varastoon otto on ylläpitäjälle. Korjaamon ylläpitäjä kirjaa sillä korjaamon omaan varastoon. Kamera lukee osan viivakoodin tai toimittajan tuotekoodin, tai koodin voi kirjoittaa. Jos koodi ei vastaa osaa, ylläpitäjä luo osan tai liittää koodin olemassa olevaan osaan.",
      "Määrä on valmiiksi 1. Kirjoita hyllypaikka. Ostohinta sekä huomio tai viite ovat valinnaisia. Tallenna kirjaa liikkeen: suunta sisään, määrä, henkilö ja aika.",
      "Skannaa · Varastosta otto on myös huoltohenkilölle. Kirjoita määrä. Voit valita koneen tai avoimen työmääräimen. Saldo vähenee eikä laske alle nollan. Jos saldo ei riitä, teksti on: Varastossa vain N kpl. Pyydä ylläpitäjää kirjaamaan osat varastoon.",
      "Jos kone tai työmääräin on valittu, osa kirjautuu samoin kuin käytetty osa. Tallenna pysyy harmaana, kunnes osa on valittu ja määrä on suurempi kuin nolla. Ylläpitäjä suodattaa osan liikkeet suunnan ja päivämäärän mukaan.",
    ],
  },
  sv: {
    id: "stock-in-out",
    title: "In i lager och ut ur lager",
    paragraphs: [
      "Delagret i iqFleetSync™ har två stora knappar.",
      "Skanna · In i lager är för administratören. En administratör på verkstaden använder den för verkstadens eget lager. Kameran läser delens streckkod eller en leverantörs produktkod, eller så kan koden skrivas. Om koden inte motsvarar någon del skapar administratören delen eller kopplar koden till en befintlig del.",
      "Antalet är 1 från början. Skriv hyllplats. Inköpspris samt anmärkning eller referens är valfria. Spara bokför rörelsen: riktning in, antal, person och tid.",
      "Skanna · Ut ur lager är också för underhållspersonen. Skriv antalet. Du kan välja en maskin eller en öppen arbetsorder. Saldot minskar och går inte under noll. Om saldot inte räcker är texten: I lager bara N st. Be administratören att bokföra delarna i lagret.",
      "Om en maskin eller en arbetsorder har valts bokförs delen på samma sätt som en använd del. Spara förblir grå tills en del har valts och antalet är större än noll. Administratören filtrerar en dels rörelser efter riktning och datum.",
    ],
  },
  no: {
    id: "stock-in-out",
    title: "Inn på lager og ut av lager",
    paragraphs: [
      "Delelageret i iqFleetSync™ har to store knapper.",
      "Skann · Inn på lager er for administratoren. En administrator på verkstedet bruker den for verkstedets eget lager. Kameraet leser delens strekkode eller en leverandørs produktkode, eller koden kan skrives. Hvis koden ikke svarer til en del, oppretter administratoren delen eller knytter koden til en eksisterende del.",
      "Antallet står på 1. Skriv hylleplass. Innkjøpspris samt merknad eller referanse er valgfrie. Lagre bokfører bevegelsen: retning inn, antall, person og tid.",
      "Skann · Ut av lager er også for vedlikeholdspersonen. Skriv antallet. Du kan velge en maskin eller en åpen arbeidsordre. Saldoen synker og går ikke under null. Hvis saldoen ikke strekker til, er teksten: På lager bare N stk. Be administratoren om å bokføre delene på lager.",
      "Hvis en maskin eller en arbeidsordre er valgt, føres delen på samme måte som en brukt del. Lagre forblir grå til en del er valgt og antallet er større enn null. Administratoren filtrerer bevegelsene til en del etter retning og dato.",
    ],
  },
  da: {
    id: "stock-in-out",
    title: "Ind på lager og ud af lager",
    paragraphs: [
      "Delelageret i iqFleetSync™ har to store knapper.",
      "Scan · Ind på lager er for administratoren. En administrator på værkstedet bruger den til værkstedets eget lager. Kameraet læser delens stregkode eller en leverandørs produktkode, eller koden kan skrives. Hvis koden ikke svarer til en del, opretter administratoren delen eller knytter koden til en eksisterende del.",
      "Antallet står på 1. Skriv hyldeplads. Indkøbspris samt bemærkning eller reference er valgfrie. Gem bogfører bevægelsen: retning ind, antal, person og tid.",
      "Scan · Ud af lager er også for vedligeholdelsespersonen. Skriv antallet. Du kan vælge en maskine eller en åben arbejdsordre. Saldoen falder og går ikke under nul. Hvis saldoen ikke rækker, er teksten: På lager kun N stk. Bed administratoren om at bogføre delene på lager.",
      "Hvis en maskine eller en arbejdsordre er valgt, registreres delen på samme måde som en brugt del. Gem forbliver grå, indtil en del er valgt og antallet er større end nul. Administratoren filtrerer en dels bevægelser efter retning og dato.",
    ],
  },
  de: {
    id: "stock-in-out",
    title: "Einlagern und auslagern",
    paragraphs: [
      "Das Teilelager in iqFleetSync™ hat zwei große Schaltflächen.",
      "Scannen · Einlagern ist für die Administration. Die Administration einer Werkstatt bucht damit in den eigenen Bestand dieser Werkstatt. Die Kamera liest den Strichcode des Teils oder einen Produktcode des Lieferanten, oder der Code kann eingegeben werden. Wenn der Code keinem Teil entspricht, legt die Administration das Teil an oder verknüpft den Code mit einem bestehenden Teil.",
      "Die Menge steht zuerst auf 1. Lagerplatz eingeben. Einkaufspreis sowie Hinweis oder Referenz sind optional. Speichern erfasst die Bewegung: Richtung Eingang, Menge, Person und Zeit.",
      "Scannen · Auslagern ist auch für das Wartungspersonal. Menge eingeben. Eine Maschine oder ein offener Arbeitsauftrag kann gewählt werden. Der Bestand sinkt und fällt nicht unter null. Wenn der Bestand nicht reicht, lautet der Text: Auf Lager nur N Stk. Bitten Sie die Administration, die Teile einzulagern.",
      "Wenn eine Maschine oder ein Arbeitsauftrag gewählt wurde, wird das Teil so erfasst wie ein verwendetes Teil. Speichern bleibt grau, bis ein Teil gewählt ist und die Menge größer als null ist. Die Administration filtert die Bewegungen eines Teils nach Richtung und Datum.",
    ],
  },
  en: {
    id: "stock-in-out",
    title: "Stock in and stock out",
    paragraphs: [
      "iqFleetSync™ parts stock has two large buttons.",
      "Scan · Stock in is for the administrator. A workshop administrator uses it for that workshop’s own stock. The camera reads the part barcode or a supplier product code, or you can type the code. If the code matches no part, the administrator creates the part or links the code to an existing part.",
      "Quantity starts at 1. Type the shelf location. Purchase price and a note or reference are optional. Save stores the movement: direction in, quantity, person and time.",
      "Scan · Stock out is also for the maintenance technician. Type a quantity. You can choose a machine or an open work order. The balance drops and cannot fall below zero; if there is not enough on hand, an administrator is asked to book the parts into stock.",
      "If a machine or work order was chosen, the part is logged like a used part. Save stays grey until a part is chosen and the quantity is greater than zero. The administrator filters a part’s movements by direction and date.",
    ],
  },
  es: {
    id: "stock-in-out",
    title: "Entrada y salida de stock",
    paragraphs: [
      "El stock de piezas de iqFleetSync™ tiene dos botones grandes.",
      "Escanear · Entrada de stock es para la administración. La administración de un taller lo usa para el stock propio de ese taller. La cámara lee el código de barras de la pieza o un código de producto del proveedor, o el código se puede escribir. Si el código no corresponde a ninguna pieza, la administración crea la pieza o vincula el código a una pieza existente.",
      "La cantidad empieza en 1. Escriba la ubicación en la estantería. El precio de compra y una nota o referencia son opcionales. Guardar registra el movimiento: dirección de entrada, cantidad, persona y hora.",
      "Escanear · Salida de stock es también para el personal de mantenimiento. Escriba una cantidad. Puede elegir una máquina o una orden de trabajo abierta. El saldo baja y no baja de cero. Si el saldo no alcanza, el texto es: En stock solo N uds. Pida a la administración que registre las piezas en el stock.",
      "Si se eligió una máquina o una orden de trabajo, la pieza queda registrada igual que una pieza usada. Guardar permanece en gris hasta que se elige una pieza y la cantidad es mayor que cero. La administración filtra los movimientos de una pieza por dirección y fecha.",
    ],
  },
  it: {
    id: "stock-in-out",
    title: "Carico e scarico di magazzino",
    paragraphs: [
      "Il magazzino ricambi di iqFleetSync™ ha due pulsanti grandi.",
      "Scansiona · Carico è per l’amministrazione. L’amministrazione di un’officina lo usa per il magazzino proprio di quell’officina. La fotocamera legge il codice a barre del ricambio o un codice prodotto del fornitore, oppure il codice si può scrivere. Se il codice non corrisponde a nessun ricambio, l’amministrazione crea il ricambio o collega il codice a un ricambio esistente.",
      "La quantità è già 1. Scrivi la posizione sullo scaffale. Il prezzo di acquisto e una nota o un riferimento sono facoltativi. Salva registra il movimento: direzione in entrata, quantità, persona e ora.",
      "Scansiona · Scarico è anche per il personale di manutenzione. Scrivi una quantità. Puoi scegliere una macchina o un ordine di lavoro aperto. La giacenza diminuisce e non scende sotto zero. Se la giacenza non basta, il testo è: A magazzino solo N pz. Chiedi all’amministrazione di registrare i ricambi a magazzino.",
      "Se è stata scelta una macchina o un ordine di lavoro, il ricambio viene registrato come un ricambio usato. Salva resta grigio finché un ricambio non è scelto e la quantità è maggiore di zero. L’amministrazione filtra i movimenti di un ricambio per direzione e data.",
    ],
  },
  fr: {
    id: "stock-in-out",
    title: "Entrée et sortie de stock",
    paragraphs: [
      "Le stock de pièces d’iqFleetSync™ comporte deux grands boutons.",
      "Scanner · Entrée de stock est destiné à l’administration. L’administration d’un atelier l’utilise pour le stock propre de cet atelier. L’appareil photo lit le code-barres de la pièce ou un code produit du fournisseur, ou le code peut être saisi. Si le code ne correspond à aucune pièce, l’administration crée la pièce ou rattache le code à une pièce existante.",
      "La quantité est déjà à 1. Saisissez l’emplacement de rayon. Le prix d’achat ainsi qu’une note ou une référence sont facultatifs. Enregistrer consigne le mouvement : sens entrée, quantité, personne et heure.",
      "Scanner · Sortie de stock est aussi pour le personnel de maintenance. Saisissez une quantité. Vous pouvez choisir une machine ou un ordre de travail ouvert. Le solde diminue et ne descend pas sous zéro. Si le solde ne suffit pas, le texte est : En stock seulement N pce. Demandez à l’administration d’enregistrer les pièces en stock.",
      "Si une machine ou un ordre de travail a été choisi, la pièce est enregistrée comme une pièce utilisée. Enregistrer reste gris tant qu’aucune pièce n’est choisie et que la quantité n’est pas supérieure à zéro. L’administration filtre les mouvements d’une pièce selon le sens et la date.",
    ],
  },
  et: {
    id: "stock-in-out",
    title: "Lattu võtmine ja laost võtmine",
    paragraphs: [
      "iqFleetSync™ varuosalaos on kaks suurt nuppu.",
      "Skanni · Lattu võtmine on administraatorile. Töökoja administraator kirjendab sellega töökoja enda lattu. Kaamera loeb osa vöötkoodi või tarnija tootekoodi, või koodi saab kirjutada. Kui kood ei vasta osale, loob administraator osa või seob koodi olemasoleva osaga.",
      "Kogus on eelnevalt 1. Kirjuta riiulikoht. Ostuhind ning märkus või viide on valikulised. Salvesta kirjendab liikumise: suund sisse, kogus, isik ja aeg.",
      "Skanni · Laost võtmine on ka hooldustehnikule. Kirjuta kogus. Saad valida masina või avatud töökäsu. Laoseis väheneb ega lange alla nulli. Kui laoseisu ei jätku, on tekst: Laos ainult N tk. Palu administraatoril osad lattu kirja panna.",
      "Kui masin või töökäsk on valitud, kirjendub osa samamoodi nagu kasutatud osa. Salvesta püsib hallina, kuni osa on valitud ja kogus on suurem kui null. Administraator filtreerib osa liikumisi suuna ja kuupäeva järgi.",
    ],
  },
  lv: {
    id: "stock-in-out",
    title: "Pieņemšana noliktavā un izņemšana no noliktavas",
    paragraphs: [
      "iqFleetSync™ detaļu noliktavā ir divas lielas pogas.",
      "Skenēt · Pieņemšana noliktavā ir administrācijai. Darbnīcas administrācija ar to grāmato detaļas šīs darbnīcas noliktavā. Kamera nolasa detaļas svītrkodu vai piegādātāja preces kodu, vai arī kodu var ierakstīt. Ja kods neatbilst detaļai, administrācija izveido detaļu vai piesaista kodu esošai detaļai.",
      "Daudzums sākumā ir 1. Ierakstiet plaukta vietu. Iepirkuma cena, kā arī piezīme vai atsauce, nav obligātas. Saglabāt ieraksta kustību: virziens iekšā, daudzums, persona un laiks.",
      "Skenēt · Izņemšana no noliktavas ir arī apkopes personālam. Ierakstiet daudzumu. Var izvēlēties mašīnu vai atvērtu darba uzdevumu. Atlikums samazinās un nenokrīt zem nulles. Ja atlikuma nepietiek, teksts ir: Noliktavā tikai N gab. Lūdziet administrācijai iegrāmatot detaļas noliktavā.",
      "Ja ir izvēlēta mašīna vai darba uzdevums, detaļa tiek ierakstīta tāpat kā izmantotā detaļa. Saglabāt paliek pelēka, līdz ir izvēlēta detaļa un daudzums ir lielāks par nulli. Administrācija filtrē detaļas kustības pēc virziena un datuma.",
    ],
  },
  lt: {
    id: "stock-in-out",
    title: "Priėmimas į sandėlį ir paėmimas iš sandėlio",
    paragraphs: [
      "iqFleetSync™ dalių sandėlyje yra du dideli mygtukai.",
      "Skenuoti · Priėmimas į sandėlį yra administracijai. Dirbtuvių administracija juo įrašo į tų dirbtuvių sandėlį. Kamera nuskaito dalies brūkšninį kodą arba tiekėjo prekės kodą, arba kodą galima įrašyti. Jei kodas neatitinka dalies, administracija sukuria dalį arba susieja kodą su esama dalimi.",
      "Kiekis iš anksto yra 1. Įrašykite lentynos vietą. Pirkimo kaina bei pastaba arba nuoroda yra neprivalomos. Išsaugoti įrašo judėjimą: kryptis į vidų, kiekis, asmuo ir laikas.",
      "Skenuoti · Paėmimas iš sandėlio yra ir priežiūros personalui. Įrašykite kiekį. Galite pasirinkti mašiną arba atidarytą darbo užsakymą. Likutis mažėja ir nenukrenta žemiau nulio. Jei likučio nepakanka, tekstas yra: Sandėlyje tik N vnt. Paprašykite administracijos įrašyti dalis į sandėlį.",
      "Jei pasirinkta mašina arba darbo užsakymas, dalis įrašoma taip pat kaip panaudota dalis. Išsaugoti lieka pilkas, kol pasirinkta dalis ir kiekis yra didesnis už nulį. Administracija filtruoja dalies judėjimus pagal kryptį ir datą.",
    ],
  },
  pl: {
    id: "stock-in-out",
    title: "Przyjęcie na magazyn i wydanie z magazynu",
    paragraphs: [
      "Magazyn części w iqFleetSync™ ma dwa duże przyciski.",
      "Skanuj · Przyjęcie na magazyn jest dla administracji. Administracja warsztatu zapisuje nim do własnego magazynu tego warsztatu. Aparat odczytuje kod kreskowy części lub kod produktu dostawcy, albo kod można wpisać. Jeśli kod nie odpowiada części, administracja tworzy część albo przypisuje kod do istniejącej części.",
      "Ilość jest z góry równa 1. Wpisz miejsce na regale. Cena zakupu oraz uwaga lub odniesienie są opcjonalne. Zapisz zapisuje ruch: kierunek przyjęcia, ilość, osoba i czas.",
      "Skanuj · Wydanie z magazynu jest też dla personelu utrzymania. Wpisz ilość. Możesz wybrać maszynę albo otwarte zlecenie pracy. Stan maleje i nie spada poniżej zera. Jeśli stanu nie wystarcza, tekst brzmi: W magazynie tylko N szt. Poproś administrację, aby zaksięgowała części na magazyn.",
      "Jeśli wybrano maszynę albo zlecenie pracy, część jest zapisywana tak samo jak zużyta część. Zapisz pozostaje szary, aż zostanie wybrana część i ilość będzie większa od zera. Administracja filtruje ruchy części według kierunku i daty.",
    ],
  },
  cs: {
    id: "stock-in-out",
    title: "Příjem na sklad a výdej ze skladu",
    paragraphs: [
      "Sklad dílů v iqFleetSync™ má dvě velká tlačítka.",
      "Skenovat · Příjem na sklad je pro správu. Správa dílny jím zapisuje do vlastního skladu této dílny. Fotoaparát přečte čárový kód dílu nebo kód produktu dodavatele, nebo kód lze napsat. Pokud kód neodpovídá dílu, správa díl vytvoří nebo kód připojí k existujícímu dílu.",
      "Množství je předem 1. Napište umístění v regálu. Nákupní cena a poznámka nebo reference jsou volitelné. Uložit zaznamená pohyb: směr dovnitř, množství, osoba a čas.",
      "Skenovat · Výdej ze skladu je také pro personál údržby. Napište množství. Můžete vybrat stroj nebo otevřený pracovní příkaz. Stav klesá a neklesne pod nulu. Pokud stav nestačí, text je: Na skladě jen N ks. Požádejte správu, aby díly zaevidovala na sklad.",
      "Pokud je vybrán stroj nebo pracovní příkaz, díl se zapíše stejně jako použitý díl. Uložit zůstane šedé, dokud není vybrán díl a množství není větší než nula. Správa filtruje pohyby dílu podle směru a data.",
    ],
  },
};

/**
 * In-app support assistant, for every role.
 * Shared video: { src, captions }. Finnish speech, with Finnish captions burned in.
 * helpMediaHtml adds a soft WebVTT track for every site language.
 */
const SUPPORT_ASSISTANT_HELP = {
  video: {
    src: "videos/iqfleetsync/tukibotti.mp4",
    captions: "videos/iqfleetsync/tukibotti.vtt",
  },
  fi: {
    id: "support-assistant",
    title: "Tukibotti / Kysy avustajalta",
    paragraphs: [
      "iqFleetSync™-palvelun otsikossa on painike Kysy avustajalta. Se avaa paneelin Tukibotti.",
      "Kysy, miten sovellusta käytetään. Avustaja vastaa kielellä, jolla kirjoitat. Kielet ovat suomi, ruotsi, norja, tanska, saksa, englanti, espanja, italia, ranska, viro, latvia, liettua, puola ja tšekki.",
      "Paneelissa lukee: Tekoälyavustaja voi erehtyä. Tarkista tärkeät asiat.",
      "Kysymyksiä voi lähettää 20 vuorokaudessa. Organisaatiolla on 300 kysymystä kuukaudessa.",
      "Avustaja ei vastaa teknisen toteutuksen kysymyksiin.",
    ],
  },
  sv: {
    id: "support-assistant",
    title: "Supportassistent / Fråga assistenten",
    paragraphs: [
      "iqFleetSync™ har knappen Fråga assistenten i sidhuvudet. Den öppnar panelen Supportassistent.",
      "Fråga hur appen används. Assistenten svarar på det språk du skriver. Språken är finska, svenska, norska, danska, tyska, engelska, spanska, italienska, franska, estniska, lettiska, litauiska, polska och tjeckiska.",
      "I panelen står: AI-assistenten kan ha fel. Kontrollera det som är viktigt.",
      "Du kan skicka 20 frågor per dygn. En organisation har 300 frågor per månad.",
      "Assistenten svarar inte på frågor om den tekniska implementationen.",
    ],
  },
  no: {
    id: "support-assistant",
    title: "Støtteassistent / Spør assistenten",
    paragraphs: [
      "iqFleetSync™ har knappen Spør assistenten i toppen. Den åpner panelet Støtteassistent.",
      "Spør hvordan appen brukes. Assistenten svarer på språket du skriver. Språkene er finsk, svensk, norsk, dansk, tysk, engelsk, spansk, italiensk, fransk, estisk, latvisk, litauisk, polsk og tsjekkisk.",
      "I panelet står: KI-assistenten kan ta feil. Kontroller det som er viktig.",
      "Du kan sende 20 spørsmål per døgn. En organisasjon har 300 spørsmål per måned.",
      "Assistenten svarer ikke på spørsmål om den tekniske gjennomføringen.",
    ],
  },
  da: {
    id: "support-assistant",
    title: "Supportassistent / Spørg assistenten",
    paragraphs: [
      "iqFleetSync™ har knappen Spørg assistenten i toppen. Den åbner panelet Supportassistent.",
      "Spørg, hvordan appen bruges. Assistenten svarer på det sprog, du skriver. Sprogene er finsk, svensk, norsk, dansk, tysk, engelsk, spansk, italiensk, fransk, estisk, lettisk, litauisk, polsk og tjekkisk.",
      "I panelet står: AI-assistenten kan tage fejl. Kontrollér det, der er vigtigt.",
      "Du kan sende 20 spørgsmål pr. døgn. En organisation har 300 spørgsmål pr. måned.",
      "Assistenten svarer ikke på spørgsmål om den tekniske gennemførelse.",
    ],
  },
  de: {
    id: "support-assistant",
    title: "Support-Assistenz / Assistenz fragen",
    paragraphs: [
      "iqFleetSync™ hat in der Kopfzeile die Schaltfläche Assistenz fragen. Sie öffnet den Bereich Support-Assistenz.",
      "Fragen Sie, wie die App genutzt wird. Die Assistenz antwortet in der Sprache, in der Sie schreiben. Die Sprachen sind Finnisch, Schwedisch, Norwegisch, Dänisch, Deutsch, Englisch, Spanisch, Italienisch, Französisch, Estnisch, Lettisch, Litauisch, Polnisch und Tschechisch.",
      "Im Bereich steht: Die KI-Assistenz kann sich irren. Prüfen Sie Wichtiges.",
      "Es können 20 Fragen pro Tag gesendet werden. Eine Organisation hat 300 Fragen pro Monat.",
      "Die Assistenz beantwortet keine Fragen zur technischen Umsetzung.",
    ],
  },
  en: {
    id: "support-assistant",
    title: "Support assistant / Ask the assistant",
    paragraphs: [
      "iqFleetSync™ has a header button, Ask the assistant. It opens the Support assistant panel.",
      "Ask how to use the app. The assistant answers in the language you write in. The languages are Finnish, Swedish, Norwegian, Danish, German, English, Spanish, Italian, French, Estonian, Latvian, Lithuanian, Polish and Czech.",
      "The panel says: The AI assistant may make mistakes. Check anything important.",
      "You can send 20 questions per day. An organisation has 300 questions per month.",
      "The assistant does not answer questions about technical implementation.",
    ],
  },
  es: {
    id: "support-assistant",
    title: "Asistente de ayuda / Preguntar al asistente",
    paragraphs: [
      "iqFleetSync™ tiene en la cabecera el botón Preguntar al asistente. Abre el panel Asistente de ayuda.",
      "Pregunte cómo se usa la aplicación. El asistente responde en el idioma en el que escribe. Los idiomas son finés, sueco, noruego, danés, alemán, inglés, español, italiano, francés, estonio, letón, lituano, polaco y checo.",
      "En el panel dice: El asistente de IA puede equivocarse. Compruebe lo importante.",
      "Se pueden enviar 20 preguntas al día. Una organización tiene 300 preguntas al mes.",
      "El asistente no responde a preguntas sobre la implementación técnica.",
    ],
  },
  it: {
    id: "support-assistant",
    title: "Assistente di supporto / Chiedi all’assistente",
    paragraphs: [
      "iqFleetSync™ ha nell’intestazione il pulsante Chiedi all’assistente. Apre il pannello Assistente di supporto.",
      "Chiedi come si usa l’app. L’assistente risponde nella lingua in cui scrivi. Le lingue sono finlandese, svedese, norvegese, danese, tedesco, inglese, spagnolo, italiano, francese, estone, lettone, lituano, polacco e ceco.",
      "Nel pannello c’è scritto: L’assistente di IA può sbagliare. Controlla ciò che è importante.",
      "Si possono inviare 20 domande al giorno. Un’organizzazione ha 300 domande al mese.",
      "L’assistente non risponde a domande sull’implementazione tecnica.",
    ],
  },
  fr: {
    id: "support-assistant",
    title: "Assistant d’aide / Demander à l’assistant",
    paragraphs: [
      "iqFleetSync™ a dans l’en-tête le bouton Demander à l’assistant. Il ouvre le panneau Assistant d’aide.",
      "Demandez comment utiliser l’application. L’assistant répond dans la langue que vous écrivez. Les langues sont le finnois, le suédois, le norvégien, le danois, l’allemand, l’anglais, l’espagnol, l’italien, le français, l’estonien, le letton, le lituanien, le polonais et le tchèque.",
      "Le panneau indique : L’assistant d’IA peut se tromper. Vérifiez ce qui est important.",
      "Vous pouvez envoyer 20 questions par jour. Une organisation a 300 questions par mois.",
      "L’assistant ne répond pas aux questions sur la mise en œuvre technique.",
    ],
  },
  et: {
    id: "support-assistant",
    title: "Tugiabiline / Küsi assistendilt",
    paragraphs: [
      "iqFleetSync™ päises on nupp Küsi assistendilt. See avab paneeli Tugiabiline.",
      "Küsi, kuidas rakendust kasutada. Assistent vastab keeles, milles kirjutad. Keeled on soome, rootsi, norra, taani, saksa, inglise, hispaania, itaalia, prantsuse, eesti, läti, leedu, poola ja tšehhi.",
      "Paneelil on tekst: Tehisintellekti abiline võib eksida. Kontrolli olulisi asju.",
      "Küsimusi saab saata 20 ööpäevas. Organisatsioonil on 300 küsimust kuus.",
      "Assistent ei vasta tehnilise teostuse küsimustele.",
    ],
  },
  lv: {
    id: "support-assistant",
    title: "Atbalsta asistents / Jautāt asistentam",
    paragraphs: [
      "iqFleetSync™ galvenē ir poga Jautāt asistentam. Tā atver paneli Atbalsta asistents.",
      "Jautājiet, kā lietot lietotni. Asistents atbild valodā, kurā rakstāt. Valodas ir somu, zviedru, norvēģu, dāņu, vācu, angļu, spāņu, itāļu, franču, igauņu, latviešu, lietuviešu, poļu un čehu.",
      "Panelī ir teksts: MI asistents var kļūdīties. Pārbaudiet svarīgo.",
      "Dienā var nosūtīt 20 jautājumus. Organizācijai ir 300 jautājumi mēnesī.",
      "Asistents neatbild uz jautājumiem par tehnisko īstenošanu.",
    ],
  },
  lt: {
    id: "support-assistant",
    title: "Pagalbos asistentas / Klausti asistento",
    paragraphs: [
      "iqFleetSync™ antraštėje yra mygtukas Klausti asistento. Jis atidaro skydelį Pagalbos asistentas.",
      "Klauskite, kaip naudoti programą. Asistentas atsako ta kalba, kuria rašote. Kalbos yra suomių, švedų, norvegų, danų, vokiečių, anglų, ispanų, italų, prancūzų, estų, latvių, lietuvių, lenkų ir čekų.",
      "Skydelyje parašyta: DI asistentas gali klysti. Patikrinkite, kas svarbu.",
      "Per parą galima išsiųsti 20 klausimų. Organizacija turi 300 klausimų per mėnesį.",
      "Asistentas neatsako į klausimus apie techninį įgyvendinimą.",
    ],
  },
  pl: {
    id: "support-assistant",
    title: "Asystent wsparcia / Zapytaj asystenta",
    paragraphs: [
      "iqFleetSync™ ma w nagłówku przycisk Zapytaj asystenta. Otwiera panel Asystent wsparcia.",
      "Pytaj, jak korzystać z aplikacji. Asystent odpowiada w języku, w którym piszesz. Języki to fiński, szwedzki, norweski, duński, niemiecki, angielski, hiszpański, włoski, francuski, estoński, łotewski, litewski, polski i czeski.",
      "Na panelu jest napis: Asystent AI może się mylić. Sprawdź to, co ważne.",
      "Można wysłać 20 pytań na dobę. Organizacja ma 300 pytań na miesiąc.",
      "Asystent nie odpowiada na pytania o techniczną realizację.",
    ],
  },
  cs: {
    id: "support-assistant",
    title: "Asistent podpory / Zeptejte se asistenta",
    paragraphs: [
      "iqFleetSync™ má v záhlaví tlačítko Zeptejte se asistenta. Otevře panel Asistent podpory.",
      "Ptejte se, jak se aplikace používá. Asistent odpovídá v jazyce, kterým píšete. Jazyky jsou finština, švédština, norština, dánština, němčina, angličtina, španělština, italština, francouzština, estonština, lotyština, litevština, polština a čeština.",
      "Na panelu je text: Asistent AI se může mýlit. Ověřte, co je důležité.",
      "Za den lze odeslat 20 otázek. Organizace má 300 otázek za měsíc.",
      "Asistent neodpovídá na otázky o technickém provedení.",
    ],
  },
};
