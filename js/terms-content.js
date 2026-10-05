/**
 * Draft terms for IQSoftCore services and for iqFleetSync.
 * General terms apply to consumers and business customers.
 * iqFleetSync is a business service and requires a Finnish Y-tunnus.
 * Plain language, not legal advice. The Finnish text is the official version.
 */
const TERMS_PAGE = {
  "fi": {
    "metaTitle": "Käyttöehdot | IQSoftCore",
    "metaDescription": "iqFleetSyncin käyttöehdot ja IQSoftCoren palveluiden yleiset ehdot. Luonnos.",
    "title": "Käyttöehdot",
    "draft": "Luonnos. Tämä on selkokielinen luonnos IQSoftCoren yleisiksi ehdoiksi ja iqFleetSyncin käyttöehdoiksi. Se ei ole oikeudellinen neuvo. Palveluntarjoajan on tarkistettava teksti ennen julkaisua.",
    "updated": "Luonnos päivitetty 2026-10-04.",
    "scope": "Nämä ovat IQSoftCoren palveluiden yleiset ehdot. Ne koskevat kuluttajia ja yritysasiakkaita. Jos tuotteella on omat ehdot, niitä käytetään näiden lisäksi. Hinta veloitetaan vain, jos se on julkaistu tai siitä on sovittu erikseen.",
    "privacyLink": "Tietosuoja",
    "pricing": "Hinnasto",
    "product": "iqFleetSync",
    "home": "Etusivu",
    "sections": [
      [
        "1. Osapuolet ja palveluntarjoaja",
        [
          "Palveluntarjoaja on toiminimi IqSoftCore, Suomi.",
          "Y-tunnus: 3658340-4",
          "Osoite: Siihtalantie 56, 62710 Kurejoki, Suomi.",
          "Asiakas voi olla yksityinen kuluttaja tai yritysasiakas. Kuluttaja on luonnollinen henkilö, joka tekee sopimuksen pääasiassa muuta kuin elinkeinotoimintaansa varten. Yritysasiakas on yritys tai muu yhteisö. Yhteys: info@iqsoftcore.fi ja +358 45 133 4009."
        ]
      ],
      [
        "2. Keitä ehdot koskevat",
        [
          "Kohdat 1–5 ja 9–16 koskevat kaikkia asiakkaita.",
          "Kohta 6 ja kohta 7 koskevat vain yritysasiakkaita ja iqFleetSynciä. Kohta 8 koskee vain kuluttajia.",
          "Jos pakottava kuluttajansuoja on kuluttajalle edullisempi, sitä noudatetaan. Ehto, joka rajoittaisi tällaista oikeutta, ei sido kuluttajaa."
        ]
      ],
      [
        "3. Palvelut",
        [
          "IQSoftCore tekee ohjelmistoja, sovelluksia ja elektroniikkasuunnittelua. Yksityinen kuluttaja voi ostaa sovelluksia ja muita tuotteita.",
          "iqFleetSync on vain yrityspalvelu. Kuluttaja ei voi avata iqFleetSync-tiliä."
        ]
      ],
      [
        "4. Hinnat ja arvonlisävero",
        [
          "Kuluttajalle näytettävä hinta sisältää arvonlisäveron. Jos Tuntilapulle tai iqRallyNotelle julkaistaan hinta, se näytetään arvonlisäverollisena.",
          "iqFleetSyncin hinnat ovat yritysasiakkaille ja alv 0 %. Arvonlisävero lisätään laskulle voimassa olevan verokannan mukaan. Voimassa oleva [[pricing]] on osa näitä ehtoja.",
          "Yritysasiakkaalle toisessa EU-maassa, jolla on voimassa oleva arvonlisäverotunniste, laskussa käytetään käännettyä verovelvollisuutta, kun se soveltuu.",
          "Kun kuluttaja ostaa toisesta EU-maasta, arvonlisävero veloitetaan asiakkaan maan verokannan mukaan silloin, kun laki sitä edellyttää."
        ]
      ],
      [
        "5. Maksu",
        [
          "Maksullinen käyttö maksetaan kortilla Stripen kautta. Lasku on kuukausittainen ja jälkikäteen.",
          "Lasku erääntyy 14 päivän kuluttua laskun päiväyksestä. Jos yritysasiakkaan maksu myöhästyy, palveluntarjoaja voi periä korkolain mukaisen viivästyskoron ja kohtuulliset perintäkulut.",
          "Jos yritysasiakkaan lasku on maksamatta 7 päivää eräpäivän jälkeen, tili siirtyy vain luku -tilaan. Tallennettuja tietoja voi tarkastella, mutta uusia tietoja ei voi tallentaa. Vain luku -tila päättyy automaattisesti, kun maksu on tehty.",
          "Edellä oleva eräpäivä ja viivästysehto koskevat yritysasiakasta. Kuluttaja maksaa oston yhteydessä hinnan, jonka palvelu näyttää. Kuluttajaan ei sovelleta yritysasiakkaan eräpäivää tai viivästysehtoa siten, että se heikentäisi kuluttajan pakottavia oikeuksia."
        ]
      ],
      [
        "6. iqFleetSync (vain yritysasiakkaille)",
        [
          "iqFleetSync-tilin avaaminen edellyttää suomalaista Y-tunnusta.",
          "iqFleetSync on verkkopalvelu kaluston huoltoon osoitteessa fleetsync.iqsoftcore.fi. Jokaisen asiakasyrityksen tiedot pidetään erillään muista asiakkaista.",
          "iqFleetSync toimii selaimessa puhelimella ja tietokoneella. Kuljettaja, huolto ja pääkäyttäjä eivät asenna sovellusta. QR-tarra tunnistaa yksikön eikä kirjaa ketään sisään. Tarrat voi tulostaa palvelusta. Skannaus puhelimen kameralla avaa yksikön ja lisää sen kuljettajan omiin yksiköihin. Pääkäyttäjä näkee, kuka käytti yksikköä ja milloin.",
          "Pääkäyttäjä kutsuu henkilön sähköpostilinkillä. Kirjautuminen on sen jälkeen sormenjäljellä tai kasvoilla (passkey). Varalla on 6-numeroinen sähköpostikoodi. Jaetussa ajoneuvopuhelimessa voi olla valinnainen 4 numeron PIN, jonka pääkäyttäjä voi nähdä. Puhelinnumero on vain valinnainen yhteystieto. Pääkäyttäjä näkee kustannukset, laskutuksen, henkilöt ja audit-lokin. Huolto käsittelee yksiköt, QR-tarrat, raportit, viat ja työmääräykset, mutta ei kustannuksia, laskutusta eikä henkilöitä. Kuljettaja näkee vain omat ja skannaamalla lisätyt yksiköt, tekee vikailmoituksia sekä kilometri- ja tuntikirjauksia ja näkee vain omien vikojensa etenemisen. Kustannuksia ja hintoja ei näytetä kuljettajalle. Raporteissa voi olla perävaunun aliraportteja ja kuvia. Vian voi merkitä liikennekelvottomaksi. Huolto kuittaa vian, merkitsee sen käynnissä olevaksi ja korjatuksi, ja kuljettaja saa tiedon sovelluksessa. Palvelussa on työmääräykset, huoltohistoria, kustannusrivit pääkäyttäjälle, huoltosuunnitelmat ja määräajat kilometreinä, tunteina tai päivämääränä sekä muistutukset sähköpostilla tai sovelluksessa. Yksikön voi arkistoida ja henkilön voi muokata tai poistaa niin, että historia säilyy.",
          "Asiakas nimeää ylläpitäjän, joka avaa tilin ja hallitsee käyttäjiä. Ylläpitäjä päättää, keille annetaan pääsy ja mitkä oikeudet he saavat.",
          "Asiakas vastaa omien käyttäjiensä toimista palvelussa. Henkilökohtainen sähköpostikoodi, kutsulinkki ja passkey ovat henkilökohtaisia, eikä niitä saa antaa toiselle. Jaetun puhelimen PIN on sen henkilön oma. Asiakas vastaa siitä, että palveluun tallennettavat tiedot saa tallentaa.",
          "Uusi asiakas voi kokeilla iqFleetSynciä 30 päivää ilmaiseksi.",
          "Kokeilun voi lopettaa milloin tahansa ennen sen päättymistä. Siitä ei tule maksua. Kokeilun aikana palvelua käytetään näiden ehtojen mukaan.",
          "Nämä hinnat ovat yritysasiakkaille ja alv 0 %. Arvonlisävero lisätään laskulle voimassa olevan verokannan mukaan.",
          "Perusmaksu on 10,00 € kuukaudessa asiakasyritystä kohden. Ajoneuvo, esimerkiksi kuorma-auto, on yksi kokonainen yksikkö. Työkone, esimerkiksi kaivinkone tai pyöräkuormaaja, on myös yksi kokonainen yksikkö. Ajoneuvot ja työkoneet täyttävät hintaportaat yhdessä. Ajoneuvot lasketaan ensin ja työkoneet sen jälkeen.",
          "Hinta on porrastettu. Ensimmäiset 15 yksikköä ovat 1,50 €, yksiköt 16–50 ovat 1,30 €, yksiköt 51–100 ovat 1,10 € ja yli 100 yksikköä ovat 0,90 € kultakin.",
          "Perävaunu on puoli yksikköä siinä portaassa, johon se osuu. Se maksaa puolet saman portaan ajoneuvohinnasta: 0,75 €, 0,65 €, 0,55 € tai 0,45 €. Laite, esimerkiksi kauhanpyörittäjä, hydraulivasara tai harjalaite, maksaa 0,00 €, eikä sitä lasketa yksiköihin. Käyttäjiä voi olla rajattomasti, eikä heistä veloiteta.",
          "Kuukauden hinta lasketaan sen kalenterikuukauden suurimman yksikkömäärän mukaan. Jos kalustoa lisätään kesken kuukauden, kuukausi laskutetaan huippumäärän mukaan. Arkistoitua yksikköä ei laskuteta.",
          "Jos kokeilu päättyy eikä maksua ole tehty, tili siirtyy vain luku -tilaan. Jos yritysasiakkaan lasku on maksamatta 7 päivää eräpäivän jälkeen, tili siirtyy vain luku -tilaan, kunnes lasku on maksettu.",
          "Vain luku -tilassa tallennettuja tietoja voi tarkastella. Uusia ilmoituksia ja muutoksia ei voi tallentaa. Vain luku -tila päättyy automaattisesti, kun maksu on tehty."
        ]
      ],
      [
        "7. Peruutus ja vastuu (vain yritysasiakkaita)",
        [
          "Tämä kohta koskee vain yritysasiakkaita. Se ei koske kuluttajaa, eikä se rajoita kuluttajan pakottavia oikeuksia.",
          "[[prominent]]iqFleetSync on vain muistiinpano-, muistutus- ja raportointityökalu. Asiakas vastaa yksin ajoneuvon ja työkoneen liikennekelpoisuudesta, huollon laadusta, tarkastuksista, lakisääteisistä velvollisuuksista ja päätöksestä käyttää ajoneuvoa. IqSoftCore ei vastaa ajoneuvon tai työkoneen vahingoista, onnettomuuksista tai rikkoutumisista. Tämä koskee myös tilannetta, jossa muistutus on jäänyt huomaamatta, tieto on kirjattu väärin tai kuljettaja on käyttänyt liikennekelvotonta ajoneuvoa. Tämä ehto ei vaikuta kuluttajan oikeuksiin.",
          "Yritysasiakas irtisanoo maksullisen palvelun itse sovelluksessa kohdasta Tilaus ja laskutus → Irtisano palvelu, tai sähköpostitse osoitteeseen info@iqsoftcore.fi. Irtisanominen tulee voimaan sen laskutuskauden lopussa, joka on jo alkanut. Jo laskutettua kuukautta ei palauteta, ellei pakottava laki sitä vaadi.",
          "Kokeilun keskeyttäminen ei maksa mitään. Kun irtisanominen on tullut voimaan, yritysasiakkaan tiedot säilyvät 90 päivää, jotta asiakas voi tarkastella ja viedä ne. Sen jälkeen tiedot poistetaan automaattisesti. Jäljelle jäävät vain kirjanpitolain edellyttämät laskutustiedot.",
          "Palveluntarjoaja voi lopettaa asiakkaan käytön, jos asiakas rikkoo ehtoja olennaisesti eikä korjaa asiaa kirjallisen huomautuksen jälkeen. Jos koko palvelu lakkautetaan, siitä kerrotaan etukäteen, kun se on mahdollista.",
          "Siltä osin kuin Suomen pakottava laki sen sallii, palveluntarjoaja ei vastaa välillisistä vahingoista, saamatta jääneestä tuotosta eikä menetetyistä tiedoista.",
          "Korvausvastuu välittömästä vahingosta on enintään niiden maksujen suuruinen, jotka asiakas on maksanut kyseisestä palvelusta vahinkoa edeltäneiden 12 kuukauden aikana. Jos maksuja ei ole ollut, tämä enimmäismäärä on 0 €.",
          "Rajoitus ei koske vahinkoa, joka on aiheutettu tahallaan tai törkeällä huolimattomuudella, eikä muutakaan vastuuta, jota ei voi lain mukaan rajoittaa."
        ]
      ],
      [
        "8. Kuluttajat",
        [
          "Kuluttajaan sovelletaan Suomen ja EU:n pakottavaa kuluttajansuojaa. Ristiriitainen ehto väistyy.",
          "Kohdan 7 vastuun katto, sääntö jo laskutetun kauden palauttamatta jättämisestä ja ehto, jonka mukaan iqFleetSync on vain muistiinpano-, muistutus- ja raportointityökalu, eivät rajoita kuluttajan oikeuksia.",
          "Etämyynnissä kuluttajalla on 14 päivän peruuttamisoikeus, kun kyse on digitaalisesta palvelusta tai digitaalisesta sisällöstä. Aika lasketaan sopimuksen tekopäivästä.",
          "Peruuttamisoikeus päättyy, jos kuluttaja peruuttamisaikana nimenomaisesti pyytää, että toimitus tai suoritus alkaa, ja samalla toteaa menettävänsä peruuttamisoikeuden, kun digitaalisen sisällön toimitus on alkanut tai kun digitaalinen palvelu on kokonaan suoritettu.",
          "Ennen sitä kuluttaja voi peruuttaa sopimuksen selkeällä ilmoituksella, esimerkiksi sähköpostilla osoitteeseen info@iqsoftcore.fi. Palveluntarjoaja palauttaa saadun maksun 14 päivän kuluessa peruutusilmoituksesta siltä osin kuin laki vaatii palautuksen.",
          "Kuluttaja voi saattaa riidan Kuluttajariitalautakuntaan (www.kuluttajariita.fi). EU:n verkkovälitteinen riidanratkaisualusta suljettiin 20.7.2025 asetuksella (EU) 2024/3228, joten siihen ei ole linkkiä. Luettelo riidanratkaisuelimistä on osoitteessa https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Toisessa EU-maassa asuva kuluttaja ei menetä kotimaansa pakottavaa suojaa."
        ]
      ],
      [
        "9. Asiakkaan tiedot",
        [
          "Asiakkaan palveluun tallentamat kalusto-, huolto- ja käyttäjätiedot ovat asiakkaan tietoja.",
          "Palveluntarjoaja ei myy näitä tietoja. Niitä käytetään palvelun tuottamiseen, laskutukseen, tietoturvaan ja lain edellyttämiin tehtäviin.",
          "Asiakas voi pyytää tietojensa vientiä osoitteeseen info@iqsoftcore.fi. Tiedot toimitetaan yleisessä koneellisesti luettavassa muodossa, kun pyyntö on käsitelty.",
          "Yritysasiakkaan tiedot säilytetään 90 päivää peruutuksen jälkeen. Tänä aikana yritysasiakas voi viedä tiedot, myös pyytämällä viennin osoitteeseen info@iqsoftcore.fi. 90 päivän jälkeen tiedot poistetaan automaattisesti. Sen jälkeen säilytetään vain ne laskutustiedot, jotka kirjanpitolaki edellyttää.",
          "Kuluttajan tietoja käsitellään niin, että pakottavaa kuluttajansuojaa ja tietosuojaa noudatetaan. Kuluttaja voi pyytää tietojensa vientiä tai poistoa osoitteeseen info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Tietosuoja",
        [
          "Henkilötietojen käsittelystä kerrotaan sivulla [[privacy]].",
          "Kun palveluntarjoaja käsittelee henkilötietoja asiakkaan lukuun, palveluntarjoaja on käsittelijä ja asiakas on rekisterinpitäjä, ellei roolista ole muuta sovittu. Palveluntarjoaja on itse rekisterinpitäjä omien tili- ja laskutustietojensa osalta. Käsiteltäviä tietoja ovat esimerkiksi käyttäjän nimi ja sähköposti, valinnainen puhelinnumero yhteystietona, sähköpostitse lähetettävä kirjautumiskoodi, passkey-tunniste sekä asiakkaan tallentamat tiedot, jos niissä on henkilötietoja. Puhelinnumeroa ei käytetä kirjautumiseen."
        ]
      ],
      [
        "11. Saatavuus ja huoltokatkot",
        [
          "Palvelua pidetään käytettävissä kohtuullisin toimin. Keskeytyksetöntä käyttöä ei luvata.",
          "Huolto, päivitys, vika tai tietoliikenne voi aiheuttaa katkon. Suunnitellusta pidemmästä katkosta pyritään kertomaan etukäteen palvelussa tai sähköpostitse. Palvelu tarjotaan sellaisena kuin se on."
        ]
      ],
      [
        "12. Sallittu käyttö",
        [
          "IQSoftCoren palvelua saa käyttää vain lailliseen tarkoitukseen.",
          "Palvelua saa käyttää kaluston huoltotietojen kirjaamiseen ja niihin liittyvään hallintaan.",
          "Palvelua ei saa käyttää lainvastaisesti, haittaohjelman levittämiseen, palvelun häirintään, toisen asiakkaan tietoihin pääsyyn eikä käyttöoikeuksien kiertämiseen. Palveluntarjoaja voi rajoittaa käyttöä, jos näitä ehtoja rikotaan vakavasti."
        ]
      ],
      [
        "13. Ehtojen ja hintojen muutokset",
        [
          "Palveluntarjoaja voi muuttaa näitä ehtoja ja hintoja. Muutoksesta kerrotaan palvelussa tai sähköpostitse vähintään 30 päivää ennen kuin se tulee voimaan.",
          "Jos asiakas ei hyväksy muutosta, hän voi lopettaa käytön ennen muutoksen voimaantuloa. Yritysasiakkaan käytön jatkaminen muutoksen jälkeen tarkoittaa, että hän hyväksyy päivitetyt ehdot. Kuluttajan vaikeneminen tai käytön jatkaminen ei poista pakottavaa kuluttajanoikeutta. Hinnan muutos ei koske jo laskutettua kautta."
        ]
      ],
      [
        "14. Ylivoimainen este",
        [
          "Palveluntarjoaja ei vastaa viivästyksestä tai keskeytyksestä, joka johtuu ylivoimaisesta esteestä. Sellaista on esimerkiksi sota, lakko, sähkö- tai tietoliikennekatko, viranomaisen määräys tai muu este, jota ei voi kohtuudella välttää.",
          "Esteestä ja sen päättymisestä kerrotaan, kun se on mahdollista."
        ]
      ],
      [
        "15. Sovellettava laki",
        [
          "Ehtoihin sovelletaan Suomen lakia. Erimielisyys pyritään ratkaisemaan ensin yhdessä.",
          "Yritysasiakkaan riidan käsittelee palveluntarjoajan kotipaikan käräjäoikeus Suomessa, ellei pakottava laki vie asiaa muualle. Kuluttajan riidan käsittelystä kerrotaan kohdassa 8."
        ]
      ],
      [
        "16. Yhteystiedot",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Suomi. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "en": {
    "metaTitle": "Terms of use | IQSoftCore",
    "metaDescription": "Terms for iqFleetSync and general terms for IQSoftCore services. Draft.",
    "title": "Terms of use",
    "draft": "Draft. This is a plain-language draft of the general terms for IQSoftCore services and the terms for iqFleetSync. It is not legal advice. The provider must review the text before it is published.",
    "updated": "Draft updated 2026-10-04.",
    "translationNote": "The Finnish text is the official version. This translation is for convenience and has not been separately reviewed as a legal text.",
    "scope": "These are the general terms for IQSoftCore services. They apply to consumers and to business customers. If a product has its own terms, those apply as well. A price is charged only if it is published or agreed separately.",
    "privacyLink": "Privacy",
    "pricing": "Pricing",
    "product": "iqFleetSync",
    "home": "Home",
    "sections": [
      [
        "1. Parties and the provider",
        [
          "The provider is the Finnish sole trader toiminimi IqSoftCore, Finland.",
          "Business ID (Y-tunnus): 3658340-4",
          "Address: Siihtalantie 56, 62710 Kurejoki, Finland.",
          "A customer may be a private consumer or a business customer. A consumer is a natural person who makes the contract mainly outside their trade. A business customer is a company or other organisation. Contact: info@iqsoftcore.fi and +358 45 133 4009."
        ]
      ],
      [
        "2. Who these terms cover",
        [
          "Sections 1–5 and 9–16 apply to every customer.",
          "Sections 6 and 7 apply only to business customers and to iqFleetSync. Section 8 applies only to consumers.",
          "If mandatory consumer protection is more favourable to the consumer, it applies. A term that would limit such a right does not bind the consumer."
        ]
      ],
      [
        "3. Services",
        [
          "IQSoftCore builds software and applications and does electronics design. A private consumer can buy applications and other products.",
          "iqFleetSync is a business service only. A consumer cannot open an iqFleetSync account."
        ]
      ],
      [
        "4. Prices and VAT",
        [
          "A price shown to a consumer includes VAT. If a price is published for Tuntilappu or iqRallyNote, it is shown including VAT.",
          "iqFleetSync prices are for business customers and are VAT 0%. Value added tax is added on the invoice at the rate in force. The current [[pricing]] page is part of these terms.",
          "For a business customer in another EU country with a valid VAT ID, the invoice uses reverse charge where it applies.",
          "When a consumer buys from another EU country, VAT is charged at the rate of the customer’s country where the law requires it."
        ]
      ],
      [
        "5. Payment",
        [
          "Paid use is paid by card through Stripe. The invoice is monthly, in arrears.",
          "An invoice is due 14 days after the invoice date. If a business customer’s payment is late, the provider may charge late-payment interest under the Finnish Interest Act (korkolaki) and reasonable collection costs.",
          "If a business customer’s invoice is unpaid 7 days after the due date, the account goes to read-only mode. Saved data can be viewed, and new data cannot be saved. Read-only mode ends automatically when the payment is made.",
          "The due date and the late-payment term above apply to a business customer. A consumer pays, at the time of purchase, the price the service shows. The business due date and late-payment term are not applied to a consumer in a way that would weaken mandatory consumer rights."
        ]
      ],
      [
        "6. iqFleetSync (business customers only)",
        [
          "Opening an iqFleetSync account requires a Finnish business ID (Y-tunnus).",
          "iqFleetSync is a web service for fleet maintenance at fleetsync.iqsoftcore.fi. Each customer company’s data is kept separate from other customers.",
          "iqFleetSync runs in the browser on a phone or a computer. Drivers, maintenance and admins do not install an app. A QR sticker identifies the unit and does not log anyone in. Stickers can be printed from the service. Scanning with the phone camera opens the unit and adds it to the driver’s own units. The admin sees who used a unit and when.",
          "An admin invites a person with an email link. Sign-in is then fingerprint or face (passkey). A 6-digit email code is the fallback. A shared vehicle phone can have an optional 4-digit PIN, which the admin can view. A phone number is only an optional contact field. An admin sees costs, billing, people and the audit log. Maintenance handles units, QR stickers, reports, defects and work orders, but not costs, billing or people. A driver sees only assigned units and units added by scanning, files defect reports and km or hour readings, and sees only the progress of their own defects. Costs and prices are hidden from the driver. Reports can include trailer sub-reports and photos. A defect can be marked not roadworthy. Maintenance acknowledges it, marks it in progress and marks it fixed, and the driver is notified in the app. The service has work orders, maintenance history, cost lines for the admin, service plans and deadlines by kilometres, hours or date, and reminders by email or in the app. A unit can be archived and a person can be edited or removed, and the history is kept.",
          "The customer names an administrator who opens the account and manages users. The administrator decides who gets access and what rights they have.",
          "The customer is responsible for what their users do in the service. A personal email code, invite link, and passkey are personal and must not be shared. The PIN on a shared phone belongs to that person. The customer is responsible for having the right to store the data they enter.",
          "A new customer can try iqFleetSync free for 30 days.",
          "The trial can be stopped at any time before it ends. That does not create a charge. During the trial the service is used under these terms.",
          "These prices are for business customers and are VAT 0%. Value added tax is added on the invoice at the rate in force.",
          "The base fee is 10.00 € per month per customer company. A vehicle, for example a truck, is one full unit. A work machine, for example an excavator or a wheel loader, is also one full unit. Vehicles and work machines fill the price tiers together. Vehicles are counted first, then work machines.",
          "The price is graduated. The first 15 units are 1.50 €, units 16–50 are 1.30 €, units 51–100 are 1.10 €, and units above 100 are 0.90 € each.",
          "A trailer is half a unit in the tier it falls into. It costs half the vehicle price of that tier: 0.75 €, 0.65 €, 0.55 €, or 0.45 €. An attachment, such as a tiltrotator, a hydraulic breaker, or a sweeper, costs 0.00 € and is not counted as a unit. Users are unlimited and are not charged.",
          "The monthly price uses the highest unit count in that calendar month. If equipment is added during the month, the month is billed at the peak count. An archived unit is not billed.",
          "If the trial ends and no payment has been made, the account becomes read-only. If a business customer’s invoice is unpaid 7 days after the due date, the account stays read-only until the invoice is paid.",
          "In read-only mode the saved data can still be viewed. New reports and changes cannot be saved. Read-only mode ends automatically when the payment is made."
        ]
      ],
      [
        "7. Cancellation and liability (business customers only)",
        [
          "This section applies only to business customers. It does not apply to a consumer, and it does not limit the consumer’s mandatory rights.",
          "[[prominent]]iqFleetSync is only a record-keeping, reminder and reporting tool. The customer is solely responsible for the roadworthiness of vehicles and machines, for the quality of maintenance, for inspections, for legal obligations, and for decisions about using a vehicle. IqSoftCore is not liable for damage, accidents, or breakdowns of vehicles or machines. This includes a case where a reminder was missed, data was entered incorrectly, or a driver used a vehicle that was not roadworthy. This clause does not affect consumer rights.",
          "The business customer cancels the paid service themselves in the app at Tilaus ja laskutus → Irtisano palvelu (Subscription and billing → Cancel the service), or by email to info@iqsoftcore.fi. Cancellation takes effect at the end of the billing period that has already started. A month that has already been billed is not refunded, unless mandatory law requires a refund.",
          "Stopping the trial does not cost anything. Once cancellation has taken effect, the business customer’s data is kept for 90 days so the customer can view and export it. After that the data is deleted automatically. Only the invoicing data that bookkeeping law requires is kept.",
          "The provider may end the customer’s use if the customer materially breaches these terms and does not fix it after a written notice. If the whole service is discontinued, that is announced in advance when possible.",
          "To the extent Finnish mandatory law allows it, the provider is not liable for indirect damage, lost profit, or lost data.",
          "Liability for direct damage is limited to the fees the customer has paid for that service during the 12 months before the damage. If no fees have been paid, that cap is 0 €.",
          "The limit does not apply to damage caused intentionally or by gross negligence, or to any other liability that cannot be limited by law."
        ]
      ],
      [
        "8. Consumers",
        [
          "Mandatory Finnish and EU consumer protection applies to a consumer. A conflicting term gives way.",
          "The liability cap in section 7, the rule that a period already billed is not refunded, and the clause that iqFleetSync is only a record-keeping, reminder and reporting tool do not limit consumer rights.",
          "In a distance sale, the consumer has a 14-day right of withdrawal for a digital service or digital content. The time runs from the day the contract is made.",
          "The right of withdrawal ends if, during the withdrawal period, the consumer expressly asks for delivery or performance to start and at the same time acknowledges that they lose the right once supply of the digital content has begun or once the digital service has been fully performed.",
          "Until then, the consumer can withdraw with a clear notice, for example by email to info@iqsoftcore.fi. The provider refunds the payment received within 14 days of the notice, to the extent the law requires a refund.",
          "The consumer can bring a dispute to the Finnish Consumer Disputes Board, Kuluttajariitalautakunta (www.kuluttajariita.fi). The EU online dispute resolution platform closed on 20 July 2025 under Regulation (EU) 2024/3228, so there is no link to it. A list of dispute resolution bodies is at https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "A consumer who lives in another EU country does not lose the mandatory protection of their home country."
        ]
      ],
      [
        "9. Customer data",
        [
          "Fleet, maintenance, and user data that the customer stores in the service belongs to the customer.",
          "The provider does not sell this data. It is used to provide the service, to bill, to keep the service secure, and to meet duties required by law.",
          "The customer can ask for an export of their data by emailing info@iqsoftcore.fi. The data is delivered in a common machine-readable format once the request has been handled.",
          "A business customer’s data is kept for 90 days after cancellation. During that time the business customer can export the data, including by asking for an export at info@iqsoftcore.fi. After 90 days the data is deleted automatically. After that, only the invoicing data that bookkeeping law requires is kept.",
          "A consumer’s data is handled so that mandatory consumer protection and data protection are followed. A consumer can ask for an export or deletion of their data at info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Privacy",
        [
          "Processing of personal data is described on the [[privacy]] page.",
          "When the provider processes personal data for the customer, the provider is the processor and the customer is the controller, unless the roles are agreed otherwise. The provider is the controller of its own account and billing data. Data that may be processed includes a user’s name and email, an optional phone number used only as a contact field, a login code sent by email, a passkey identifier, and data the customer stores if it contains personal data. The phone number is not used to sign in."
        ]
      ],
      [
        "11. Availability and maintenance",
        [
          "The service is kept available with reasonable effort. Uninterrupted use is not promised.",
          "Maintenance, an update, a fault, or the network may cause a break. A planned longer break is announced in advance in the service or by email when that is possible. The service is provided as it is."
        ]
      ],
      [
        "12. Acceptable use",
        [
          "An IQSoftCore service may be used only for a lawful purpose.",
          "The service may be used to record fleet maintenance data and to manage that data.",
          "The service may not be used unlawfully, to spread malware, to disrupt the service, to access another customer’s data, or to bypass access rights. The provider may limit use if these terms are seriously breached."
        ]
      ],
      [
        "13. Changes to the terms and prices",
        [
          "The provider may change these terms and the prices. A change is announced in the service or by email at least 30 days before it takes effect.",
          "If the customer does not accept a change, they can stop use before the change takes effect. If a business customer continues to use the service after the change, they accept the updated terms. A consumer’s silence or continued use does not remove a mandatory consumer right. A price change does not affect a period that has already been billed."
        ]
      ],
      [
        "14. Force majeure",
        [
          "The provider is not liable for a delay or interruption caused by force majeure. That includes, for example, war, a strike, a power or network outage, an order by an authority, or another obstacle that cannot reasonably be avoided.",
          "The obstacle and its end are announced when that is possible."
        ]
      ],
      [
        "15. Governing law",
        [
          "Finnish law applies to these terms. The parties try to settle a disagreement together first.",
          "A business customer’s dispute is heard by the district court of the provider’s domicile in Finland, unless mandatory law places it elsewhere. How a consumer dispute is handled is set out in section 8."
        ]
      ],
      [
        "16. Contact",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "sv": {
    "metaTitle": "Användarvillkor | IQSoftCore",
    "metaDescription": "Villkor för iqFleetSync och allmänna villkor för IQSoftCores tjänster. Utkast.",
    "title": "Användarvillkor",
    "draft": "Utkast. Det här är ett utkast på klarspråk till allmänna villkor för IQSoftCores tjänster och villkoren för iqFleetSync. Det är inte juridisk rådgivning. Leverantören måste granska texten innan den publiceras.",
    "updated": "Utkast uppdaterat 2026-10-04.",
    "translationNote": "Den finska texten är den officiella versionen. Den här översättningen är till hjälp och har inte granskats separat som juridisk text.",
    "scope": "Det här är allmänna villkor för IQSoftCores tjänster. De gäller konsumenter och företagskunder. Om en produkt har egna villkor gäller de också. Pris tas bara ut om det är publicerat eller avtalat särskilt.",
    "privacyLink": "Integritet",
    "pricing": "Priser",
    "product": "iqFleetSync",
    "home": "Startsida",
    "sections": [
      [
        "1. Parter och leverantören",
        [
          "Leverantören är den finska enskilda firman toiminimi IqSoftCore, Finland.",
          "FO-nummer (Y-tunnus): 3658340-4",
          "Adress: Siihtalantie 56, 62710 Kurejoki, Finland.",
          "En kund kan vara en privat konsument eller en företagskund. En konsument är en fysisk person som ingår avtalet huvudsakligen utanför sin näring. En företagskund är ett företag eller en annan organisation. Kontakt: info@iqsoftcore.fi och +358 45 133 4009."
        ]
      ],
      [
        "2. Vem villkoren gäller",
        [
          "Punkterna 1–5 och 9–16 gäller alla kunder.",
          "Punkterna 6 och 7 gäller bara företagskunder och iqFleetSync. Punkt 8 gäller bara konsumenter.",
          "Om tvingande konsumentskydd är förmånligare för konsumenten gäller det. Ett villkor som skulle begränsa en sådan rätt binder inte konsumenten."
        ]
      ],
      [
        "3. Tjänster",
        [
          "IQSoftCore gör programvara, applikationer och elektronikdesign. En privat konsument kan köpa applikationer och andra produkter.",
          "iqFleetSync är enbart en företagstjänst. En konsument kan inte öppna ett iqFleetSync-konto."
        ]
      ],
      [
        "4. Priser och moms",
        [
          "Ett pris som visas för en konsument innehåller moms. Om ett pris publiceras för Tuntilappu eller iqRallyNote visas det inklusive moms.",
          "Priserna för iqFleetSync gäller företagskunder och är moms 0 %. Mervärdesskatt läggs till på fakturan enligt den gällande skattesatsen. Den gällande sidan [[pricing]] är en del av villkoren.",
          "För en företagskund i ett annat EU-land med ett giltigt momsregistreringsnummer används omvänd skattskyldighet (reverse charge) på fakturan när det gäller.",
          "När en konsument köper från ett annat EU-land tas moms ut enligt kundens lands skattesats när lagen kräver det."
        ]
      ],
      [
        "5. Betalning",
        [
          "Betald användning betalas med kort via Stripe. Fakturan är månadsvis i efterskott.",
          "En faktura förfaller 14 dagar efter fakturadatum. Om en företagskunds betalning är sen kan leverantören ta ut dröjsmålsränta enligt den finska räntelagen (korkolaki) och skäliga inkassokostnader.",
          "Om en företagskunds faktura är obetald 7 dagar efter förfallodagen går kontot över till skrivskyddat läge. Sparade uppgifter kan läsas, men nya uppgifter kan inte sparas. Det skrivskyddade läget upphör automatiskt när betalningen är gjord.",
          "Förfallodagen och villkoret om dröjsmål ovan gäller en företagskund. En konsument betalar vid köpet det pris tjänsten visar. Företagskundens förfallodag och dröjsmålsvillkor används inte mot en konsument på ett sätt som försvagar tvingande konsumenträttigheter."
        ]
      ],
      [
        "6. iqFleetSync (endast företagskunder)",
        [
          "För att öppna ett iqFleetSync-konto krävs ett finskt FO-nummer (Y-tunnus).",
          "iqFleetSync är en webbtjänst för underhåll av en flotta på fleetsync.iqsoftcore.fi. Varje kundföretags uppgifter hålls åtskilda från andra kunder.",
          "iqFleetSync körs i webbläsaren på telefon eller dator. Förare, underhåll och administratörer installerar ingen app. QR-dekalen identifierar enheten och loggar inte in någon. Dekaler kan skrivas ut från tjänsten. Skanning med telefonens kamera öppnar enheten och lägger till den bland förarens egna enheter. Administratören ser vem som använde en enhet och när.",
          "En administratör bjuder in en person med en länk i e-post. Därefter sker inloggning med fingeravtryck eller ansikte (passkey). En 6-siffrig e-postkod är reserven. En delad fordonstelefon kan ha en valfri PIN på 4 siffror, som administratören kan se. Ett telefonnummer är bara ett valfritt kontaktfält. Administratören ser kostnader, fakturering, personer och auditloggen. Underhåll hanterar enheter, QR-dekaler, rapporter, fel och arbetsordrar, men inte kostnader, fakturering eller personer. Föraren ser bara tilldelade enheter och enheter som lagts till genom skanning, gör felanmälningar och km- eller timavläsningar och ser bara hur de egna felen går vidare. Kostnader och priser visas inte för föraren. Rapporter kan ha underrapporter för släp och foton. Ett fel kan markeras som inte trafiksäkert. Underhåll kvitterar, markerar pågående och åtgärdat, och föraren får besked i appen. Tjänsten har arbetsordrar, underhållshistorik, kostnadsrader för administratören, serviceplaner och deadlines i kilometer, timmar eller datum samt påminnelser via e-post eller i appen. En enhet kan arkiveras och en person kan redigeras eller tas bort, och historiken behålls.",
          "Kunden utser en administratör som öppnar kontot och hanterar användare. Administratören bestämmer vem som får tillgång och vilka rättigheter de har.",
          "Kunden ansvarar för vad de egna användarna gör i tjänsten. En personlig e-postkod, inbjudningslänk och passkey är personliga och får inte lämnas vidare. PIN-koden på en delad telefon tillhör den personen. Kunden ansvarar för att ha rätt att spara de uppgifter som läggs in.",
          "En ny kund kan prova iqFleetSync gratis i 30 dagar.",
          "Provperioden kan avbrytas när som helst innan den tar slut. Det kostar inget. Under provperioden används tjänsten enligt dessa villkor.",
          "De här priserna gäller företagskunder och är moms 0 %. Mervärdesskatt läggs till på fakturan enligt den gällande skattesatsen.",
          "Grundavgiften är 10,00 € per månad och kundföretag. Ett fordon, till exempel en lastbil, är en hel enhet. En arbetsmaskin, till exempel en grävmaskin eller en hjullastare, är också en hel enhet. Fordon och arbetsmaskiner fyller prisstegen tillsammans. Fordon räknas först, därefter arbetsmaskiner.",
          "Priset är progressivt. De första 15 enheterna är 1,50 €, enheterna 16–50 är 1,30 €, enheterna 51–100 är 1,10 € och enheter över 100 är 0,90 € styck.",
          "Ett släp är en halv enhet i det steg det hamnar i. Det kostar hälften av fordonspriset i det steget: 0,75 €, 0,65 €, 0,55 € eller 0,45 €. Ett redskap, till exempel en tiltrotator, en hydraulhammare eller en sopvals, kostar 0,00 € och räknas inte som en enhet. Antalet användare är obegränsat och användare debiteras inte.",
          "Månadspriset utgår från det högsta enhetsantalet under kalendermånaden. Om utrustning läggs till under månaden faktureras månaden efter toppantalet. En arkiverad enhet faktureras inte.",
          "Om provperioden tar slut och ingen betalning har gjorts blir kontot skrivskyddat. Om en företagskunds faktura är obetald 7 dagar efter förfallodagen är kontot skrivskyddat tills fakturan är betald.",
          "I skrivskyddat läge kan sparade uppgifter läsas. Nya anmälningar och ändringar kan inte sparas. Det skrivskyddade läget upphör automatiskt när betalningen är gjord."
        ]
      ],
      [
        "7. Uppsägning och ansvar (endast företagskunder)",
        [
          "Den här punkten gäller bara företagskunder. Den gäller inte en konsument och begränsar inte konsumentens tvingande rättigheter.",
          "[[prominent]]iqFleetSync är bara ett verktyg för registrering, påminnelser och rapportering. Kunden ansvarar ensam för fordonets och arbetsmaskinens trafiksäkerhet, för underhållets kvalitet, för inspektioner, för lagstadgade skyldigheter och för beslutet att använda ett fordon. IqSoftCore ansvarar inte för skador, olyckor eller haverier på fordon eller arbetsmaskiner. Det gäller också när en påminnelse har missats, en uppgift har förts in fel eller en förare har använt ett fordon som inte är trafiksäkert. Detta villkor påverkar inte konsumentens rättigheter.",
          "Företagskunden säger själv upp den betalda tjänsten i appen under Tilaus ja laskutus → Irtisano palvelu (Prenumeration och fakturering → Säg upp tjänsten), eller via e-post till info@iqsoftcore.fi. Uppsägningen gäller från slutet av den faktureringsperiod som redan har börjat. En redan fakturerad månad återbetalas inte, om inte tvingande lag kräver det.",
          "Att avbryta provperioden kostar inget. När uppsägningen har börjat gälla sparas företagskundens uppgifter i 90 dagar så att kunden kan läsa och exportera dem. Därefter raderas uppgifterna automatiskt. Kvar blir bara de fakturauppgifter som bokföringslagen kräver.",
          "Leverantören kan avsluta kundens användning om kunden bryter mot villkoren väsentligt och inte rättar det efter en skriftlig anmärkning. Om hela tjänsten läggs ned meddelas det i förväg när det är möjligt.",
          "I den mån tvingande finsk lag tillåter det ansvarar leverantören inte för indirekt skada, utebliven vinst eller förlorade uppgifter.",
          "Ansvaret för direkt skada är högst de avgifter kunden har betalat för den tjänsten under de 12 månader som föregick skadan. Om inga avgifter har betalats är taket 0 €.",
          "Begränsningen gäller inte skada som orsakats uppsåtligen eller av grov oaktsamhet, och inte heller ansvar som inte får begränsas enligt lag."
        ]
      ],
      [
        "8. Konsumenter",
        [
          "Tvingande finskt och EU-konsumentskydd gäller för en konsument. Ett villkor som strider mot det viker.",
          "Ansvarstaket i punkt 7, regeln att en redan fakturerad period inte återbetalas och villkoret att iqFleetSync bara är ett verktyg för registrering, påminnelser och rapportering begränsar inte konsumentens rättigheter.",
          "Vid distansavtal har konsumenten 14 dagars ångerrätt för en digital tjänst eller digitalt innehåll. Tiden räknas från den dag avtalet ingås.",
          "Ångerrätten upphör om konsumenten under ångerfristen uttryckligen ber att leverans eller utförande ska börja och samtidigt bekräftar att rätten upphör när leveransen av det digitala innehållet har börjat eller när den digitala tjänsten är helt utförd.",
          "Dittills kan konsumenten frånträda med ett tydligt meddelande, till exempel e-post till info@iqsoftcore.fi. Leverantören återbetalar mottagen betalning inom 14 dagar från meddelandet i den mån lagen kräver återbetalning.",
          "Konsumenten kan lämna en tvist till den finska konsumenttvistenämnden Kuluttajariitalautakunta (www.kuluttajariita.fi). EU:s plattform för tvistlösning online stängdes 20.7.2025 enligt förordning (EU) 2024/3228, så det finns ingen länk dit. En förteckning över tvistlösningsorgan finns på https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "En konsument som bor i ett annat EU-land förlorar inte det tvingande skyddet i sitt hemland."
        ]
      ],
      [
        "9. Kundens uppgifter",
        [
          "Flott-, underhålls- och användaruppgifter som kunden sparar i tjänsten tillhör kunden.",
          "Leverantören säljer inte uppgifterna. De används för att tillhandahålla tjänsten, fakturera, skydda tjänsten och uppfylla lagstadgade skyldigheter.",
          "Kunden kan be om export av sina uppgifter till info@iqsoftcore.fi. Uppgifterna lämnas i ett vanligt maskinläsbart format när begäran har hanterats.",
          "En företagskunds uppgifter sparas i 90 dagar efter uppsägning. Under den tiden kan företagskunden exportera uppgifterna, också genom att be om export till info@iqsoftcore.fi. Efter 90 dagar raderas uppgifterna automatiskt. Därefter sparas bara de fakturauppgifter som bokföringslagen kräver.",
          "En konsuments uppgifter hanteras så att tvingande konsumentskydd och dataskydd följs. Konsumenten kan be om export eller radering av sina uppgifter till info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Integritet",
        [
          "Behandling av personuppgifter beskrivs på sidan [[privacy]].",
          "När leverantören behandlar personuppgifter för kunden är leverantören personuppgiftsbiträde och kunden personuppgiftsansvarig, om rollerna inte avtalas på annat sätt. Leverantören är själv ansvarig för sina egna konto- och fakturauppgifter. Uppgifter som kan behandlas är till exempel en användares namn och e-post, ett valfritt telefonnummer som bara är ett kontaktfält, en inloggningskod som skickas med e-post, en passkey-identifierare och uppgifter som kunden sparar om de innehåller personuppgifter. Telefonnumret används inte för inloggning."
        ]
      ],
      [
        "11. Tillgänglighet och underhåll",
        [
          "Tjänsten hålls tillgänglig med rimliga åtgärder. Oavbruten användning utlovas inte.",
          "Underhåll, en uppdatering, ett fel eller nätet kan orsaka avbrott. Ett planerat längre avbrott meddelas i förväg i tjänsten eller via e-post när det är möjligt. Tjänsten tillhandahålls som den är."
        ]
      ],
      [
        "12. Tillåten användning",
        [
          "En tjänst från IQSoftCore får bara användas för ett lagligt ändamål.",
          "Tjänsten får användas för att registrera underhållsuppgifter för en flotta och för att hantera de uppgifterna.",
          "Tjänsten får inte användas lagstridigt, för att sprida skadlig kod, för att störa tjänsten, för att komma åt en annan kunds uppgifter eller för att kringgå behörigheter. Leverantören kan begränsa användningen om villkoren bryts allvarligt."
        ]
      ],
      [
        "13. Ändringar av villkor och priser",
        [
          "Leverantören kan ändra villkoren och priserna. En ändring meddelas i tjänsten eller via e-post minst 30 dagar innan den träder i kraft.",
          "Om kunden inte godkänner en ändring kan kunden sluta använda tjänsten innan ändringen träder i kraft. Om en företagskund fortsätter att använda tjänsten efter ändringen godkänner kunden de uppdaterade villkoren. En konsuments tystnad eller fortsatta användning tar inte bort en tvingande konsumenträtt. En prisändring gäller inte en period som redan fakturerats."
        ]
      ],
      [
        "14. Force majeure",
        [
          "Leverantören ansvarar inte för försening eller avbrott som beror på force majeure. Det kan till exempel vara krig, strejk, el- eller nätavbrott, en myndighets order eller ett annat hinder som inte skäligen kan undvikas.",
          "Hindret och när det upphör meddelas när det är möjligt."
        ]
      ],
      [
        "15. Tillämplig lag",
        [
          "Finsk lag gäller för villkoren. Parterna försöker först lösa en oenighet tillsammans.",
          "En företagskunds tvist prövas av tingsrätten på leverantörens hemort i Finland, om inte tvingande lag förlägger den någon annanstans. Hur en konsumenttvist hanteras står i punkt 8."
        ]
      ],
      [
        "16. Kontakt",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "de": {
    "metaTitle": "Nutzungsbedingungen | IQSoftCore",
    "metaDescription": "Bedingungen für iqFleetSync und allgemeine Bedingungen für Dienste von IQSoftCore. Entwurf.",
    "title": "Nutzungsbedingungen",
    "draft": "Entwurf. Das ist ein Entwurf in klarer Sprache für die allgemeinen Bedingungen der Dienste von IQSoftCore und die Bedingungen von iqFleetSync. Er ist keine Rechtsberatung. Der Anbieter muss den Text vor der Veröffentlichung prüfen.",
    "updated": "Entwurf aktualisiert am 2026-10-04.",
    "translationNote": "Der finnische Text ist die maßgebliche Fassung. Diese Übersetzung dient der Verständlichkeit und wurde nicht gesondert als Rechtstext geprüft.",
    "scope": "Das sind die allgemeinen Bedingungen für die Dienste von IQSoftCore. Sie gelten für Verbraucher und Geschäftskunden. Wenn ein Produkt eigene Bedingungen hat, gelten diese zusätzlich. Ein Preis wird nur berechnet, wenn er veröffentlicht oder gesondert vereinbart ist.",
    "privacyLink": "Datenschutz",
    "pricing": "Preise",
    "product": "iqFleetSync",
    "home": "Startseite",
    "sections": [
      [
        "1. Parteien und der Anbieter",
        [
          "Anbieter ist das finnische Einzelunternehmen toiminimi IqSoftCore, Finnland.",
          "Geschäftskennnummer (Y-tunnus): 3658340-4",
          "Anschrift: Siihtalantie 56, 62710 Kurejoki, Finnland.",
          "Kunde kann ein privater Verbraucher oder ein Geschäftskunde sein. Ein Verbraucher ist eine natürliche Person, die den Vertrag überwiegend außerhalb ihrer gewerblichen Tätigkeit schließt. Ein Geschäftskunde ist ein Unternehmen oder eine andere Organisation. Kontakt: info@iqsoftcore.fi und +358 45 133 4009."
        ]
      ],
      [
        "2. Für wen diese Bedingungen gelten",
        [
          "Die Abschnitte 1–5 und 9–16 gelten für alle Kunden.",
          "Die Abschnitte 6 und 7 gelten nur für Geschäftskunden und für iqFleetSync. Abschnitt 8 gilt nur für Verbraucher.",
          "Wenn zwingendes Verbraucherrecht für den Verbraucher günstiger ist, gilt es. Eine Klausel, die ein solches Recht beschränken würde, bindet den Verbraucher nicht."
        ]
      ],
      [
        "3. Dienste",
        [
          "IQSoftCore erstellt Software und Anwendungen und macht Elektronikdesign. Ein privater Verbraucher kann Anwendungen und andere Produkte kaufen.",
          "iqFleetSync ist nur ein Geschäftsdienst. Ein Verbraucher kann kein iqFleetSync-Konto eröffnen."
        ]
      ],
      [
        "4. Preise und Umsatzsteuer",
        [
          "Ein Preis, der einem Verbraucher angezeigt wird, enthält die Umsatzsteuer. Wenn für Tuntilappu oder iqRallyNote ein Preis veröffentlicht wird, wird er inklusive Umsatzsteuer angezeigt.",
          "Die Preise von iqFleetSync gelten für Geschäftskunden und sind MwSt. 0 %. Die Umsatzsteuer wird auf der Rechnung nach dem geltenden Steuersatz hinzugerechnet. Die geltende Seite [[pricing]] ist Teil dieser Bedingungen.",
          "Für einen Geschäftskunden in einem anderen EU-Land mit gültiger USt-IdNr. wird auf der Rechnung das Reverse-Charge-Verfahren (reverse charge) angewendet, soweit es gilt.",
          "Wenn ein Verbraucher aus einem anderen EU-Land kauft, wird die Umsatzsteuer nach dem Satz des Landes des Kunden berechnet, soweit das Gesetz das verlangt."
        ]
      ],
      [
        "5. Zahlung",
        [
          "Die kostenpflichtige Nutzung wird mit Karte über Stripe bezahlt. Die Rechnung ist monatlich und im Nachhinein.",
          "Eine Rechnung ist 14 Tage nach dem Rechnungsdatum fällig. Bei Verzug eines Geschäftskunden kann der Anbieter Verzugszinsen nach dem finnischen Zinsgesetz (korkolaki) und angemessene Beitreibungskosten verlangen.",
          "Ist die Rechnung eines Geschäftskunden 7 Tage nach der Fälligkeit unbezahlt, wechselt das Konto in den Nur-Lesen-Modus. Gespeicherte Daten können angesehen werden, neue Daten können nicht gespeichert werden. Der Nur-Lesen-Modus endet automatisch, wenn die Zahlung erfolgt ist.",
          "Die Fälligkeit und die Verzugsklausel oben gelten für einen Geschäftskunden. Ein Verbraucher zahlt beim Kauf den Preis, den der Dienst anzeigt. Fälligkeit und Verzugsklausel des Geschäftskunden werden gegenüber einem Verbraucher nicht so angewendet, dass zwingende Verbraucherrechte geschwächt würden."
        ]
      ],
      [
        "6. iqFleetSync (nur Geschäftskunden)",
        [
          "Für ein iqFleetSync-Konto ist eine finnische Geschäftskennnummer (Y-tunnus) erforderlich.",
          "iqFleetSync ist ein Webdienst für die Wartung eines Fuhrparks unter fleetsync.iqsoftcore.fi. Die Daten jedes Kundenunternehmens bleiben von anderen Kunden getrennt.",
          "iqFleetSync läuft im Browser auf Telefon oder Computer. Fahrende Personen, die Werkstatt und die Administration installieren keine App. Der QR-Aufkleber erkennt die Einheit und meldet niemanden an. Aufkleber lassen sich aus dem Dienst drucken. Scannen mit der Telefonkamera öffnet die Einheit und fügt sie den eigenen Einheiten hinzu. Die Administration sieht, wer eine Einheit wann genutzt hat.",
          "Die Administration lädt eine Person mit einem Link per E-Mail ein. Danach erfolgt die Anmeldung mit Fingerabdruck oder Gesicht (Passkey). Ein 6-stelliger E-Mail-Code ist die Alternative. Ein gemeinsames Fahrzeugtelefon kann eine optionale PIN mit 4 Ziffern haben, die die Administration einsehen kann. Eine Telefonnummer ist nur ein optionales Kontaktfeld. Die Administration sieht Kosten, Abrechnung, Personen und das Audit-Protokoll. Die Werkstatt bearbeitet Einheiten, QR-Aufkleber, Berichte, Mängel und Arbeitsaufträge, aber keine Kosten, keine Abrechnung und keine Personen. Die fahrende Person sieht nur zugewiesene Einheiten und durch Scannen hinzugefügte Einheiten, meldet Mängel sowie Kilometer oder Stunden und sieht nur den Fortschritt der eigenen Mängel. Kosten und Preise sind nicht sichtbar. Berichte können Unterberichte zum Anhänger und Fotos enthalten. Ein Mangel kann als nicht fahrbereit markiert werden. Die Werkstatt bestätigt ihn, markiert ihn als in Arbeit und als behoben, und die fahrende Person wird in der App benachrichtigt. Der Dienst hat Arbeitsaufträge, Wartungshistorie, Kostenzeilen für die Administration, Wartungspläne und Fristen nach Kilometern, Stunden oder Datum sowie Erinnerungen per E-Mail oder in der App. Eine Einheit kann archiviert und eine Person bearbeitet oder entfernt werden, und die Historie bleibt.",
          "Der Kunde benennt eine Verwaltung, die das Konto eröffnet und Benutzer verwaltet. Die Verwaltung entscheidet, wer Zugang erhält und welche Rechte gelten.",
          "Der Kunde haftet für das, was die eigenen Benutzer im Dienst tun. Ein persönlicher E-Mail-Code, ein Einladungslink und ein Passkey sind persönlich und dürfen nicht weitergegeben werden. Die PIN an einem gemeinsamen Telefon gehört dieser Person. Der Kunde ist dafür verantwortlich, dass die eingegebenen Daten gespeichert werden dürfen.",
          "Ein neuer Kunde kann iqFleetSync 30 Tage kostenlos testen.",
          "Die Testphase kann jederzeit vor ihrem Ende beendet werden. Dafür entsteht kein Preis. Während der Testphase gilt dieser Vertrag.",
          "Diese Preise gelten für Geschäftskunden und sind MwSt. 0 %. Die Umsatzsteuer wird auf der Rechnung nach dem geltenden Steuersatz hinzugerechnet.",
          "Die Grundgebühr beträgt 10,00 € pro Monat und Kundenunternehmen. Ein Fahrzeug, zum Beispiel ein Lkw, ist eine ganze Einheit. Eine Arbeitsmaschine, zum Beispiel ein Bagger oder ein Radlader, ist ebenfalls eine ganze Einheit. Fahrzeuge und Arbeitsmaschinen füllen die Preisstufen gemeinsam. Fahrzeuge werden zuerst gezählt, danach Arbeitsmaschinen.",
          "Der Preis ist gestaffelt. Die ersten 15 Einheiten kosten 1,50 €, die Einheiten 16–50 kosten 1,30 €, die Einheiten 51–100 kosten 1,10 €, und Einheiten über 100 kosten je 0,90 €.",
          "Ein Anhänger ist eine halbe Einheit in der Stufe, in die er fällt. Er kostet die Hälfte des Fahrzeugpreises dieser Stufe: 0,75 €, 0,65 €, 0,55 € oder 0,45 €. Ein Anbaugerät, zum Beispiel ein Tiltrotator, ein Hydraulikhammer oder eine Kehrmaschine, kostet 0,00 € und zählt nicht als Einheit. Die Zahl der Benutzer ist unbegrenzt, Benutzer werden nicht berechnet.",
          "Der Monatspreis richtet sich nach der höchsten Einheitenzahl in diesem Kalendermonat. Kommt während des Monats Gerät hinzu, wird der Monat nach der Höchstzahl berechnet. Eine archivierte Einheit wird nicht berechnet.",
          "Endet die Testphase ohne Zahlung, wird das Konto nur noch lesbar. Ist die Rechnung eines Geschäftskunden 7 Tage nach der Fälligkeit unbezahlt, bleibt das Konto nur lesbar, bis die Rechnung bezahlt ist.",
          "Im Nur-Lesen-Modus können gespeicherte Daten angesehen werden. Neue Meldungen und Änderungen können nicht gespeichert werden. Der Nur-Lesen-Modus endet automatisch, wenn die Zahlung erfolgt ist."
        ]
      ],
      [
        "7. Kündigung und Haftung (nur Geschäftskunden)",
        [
          "Dieser Abschnitt gilt nur für Geschäftskunden. Er gilt nicht für einen Verbraucher und beschränkt nicht dessen zwingende Rechte.",
          "[[prominent]]iqFleetSync ist nur ein Werkzeug zur Erfassung, für Erinnerungen und für Berichte. Der Kunde ist allein verantwortlich für die Verkehrssicherheit von Fahrzeugen und Arbeitsmaschinen, für die Qualität der Wartung, für Prüfungen, für gesetzliche Pflichten und für die Entscheidung, ein Fahrzeug zu benutzen. IqSoftCore haftet nicht für Schäden, Unfälle oder Ausfälle von Fahrzeugen oder Arbeitsmaschinen. Das gilt auch, wenn eine Erinnerung übersehen wurde, Daten falsch eingetragen wurden oder eine Fahrerin oder ein Fahrer ein nicht verkehrssicheres Fahrzeug benutzt hat. Diese Klausel berührt nicht die Rechte von Verbrauchern.",
          "Der Geschäftskunde kündigt den kostenpflichtigen Dienst selbst in der App unter Tilaus ja laskutus → Irtisano palvelu (Abonnement und Abrechnung → Dienst kündigen) oder per E-Mail an info@iqsoftcore.fi. Die Kündigung wirkt zum Ende des bereits begonnenen Abrechnungszeitraums. Ein bereits berechneter Monat wird nicht erstattet, sofern nicht zwingendes Recht das verlangt.",
          "Das Beenden der Testphase kostet nichts. Sobald die Kündigung wirkt, bleiben die Daten des Geschäftskunden 90 Tage erhalten, damit der Kunde sie ansehen und exportieren kann. Danach werden die Daten automatisch gelöscht. Übrig bleiben nur die Rechnungsdaten, die das Buchhaltungsrecht verlangt.",
          "Der Anbieter kann die Nutzung des Kunden beenden, wenn der Kunde diese Bedingungen wesentlich verletzt und das nach einer schriftlichen Aufforderung nicht behebt. Wird der ganze Dienst eingestellt, wird das vorab mitgeteilt, wenn das möglich ist.",
          "Soweit zwingendes finnisches Recht es erlaubt, haftet der Anbieter nicht für mittelbare Schäden, entgangenen Gewinn oder verlorene Daten.",
          "Die Haftung für unmittelbaren Schaden ist auf die Entgelte begrenzt, die der Kunde für diesen Dienst in den 12 Monaten vor dem Schaden gezahlt hat. Wurden keine Entgelte gezahlt, beträgt die Obergrenze 0 €.",
          "Die Beschränkung gilt nicht für vorsätzlich oder grob fahrlässig verursachten Schaden und nicht für eine Haftung, die gesetzlich nicht beschränkt werden darf."
        ]
      ],
      [
        "8. Verbraucher",
        [
          "Für einen Verbraucher gilt zwingendes finnisches und EU-Verbraucherrecht. Eine widersprechende Klausel tritt zurück.",
          "Die Haftungsobergrenze in Abschnitt 7, die Regel, dass ein bereits berechneter Zeitraum nicht erstattet wird, und die Klausel, dass iqFleetSync nur ein Werkzeug zur Erfassung, für Erinnerungen und für Berichte ist, beschränken nicht die Rechte von Verbrauchern.",
          "Beim Fernabsatz hat der Verbraucher ein 14-tägiges Widerrufsrecht für einen digitalen Dienst oder digitale Inhalte. Die Frist beginnt am Tag des Vertragsschlusses.",
          "Das Widerrufsrecht endet, wenn der Verbraucher während der Widerrufsfrist ausdrücklich verlangt, dass die Lieferung oder die Leistung beginnt, und zugleich bestätigt, dass das Recht endet, sobald die Lieferung der digitalen Inhalte begonnen hat oder der digitale Dienst vollständig erbracht ist.",
          "Bis dahin kann der Verbraucher mit einer klaren Erklärung widerrufen, zum Beispiel per E-Mail an info@iqsoftcore.fi. Der Anbieter erstattet die erhaltene Zahlung innerhalb von 14 Tagen nach der Erklärung, soweit das Gesetz eine Erstattung verlangt.",
          "Der Verbraucher kann eine Streitigkeit der finnischen Verbraucherschlichtungsstelle Kuluttajariitalautakunta (www.kuluttajariita.fi) vorlegen. Die EU-Plattform zur Online-Streitbeilegung wurde am 20.7.2025 nach der Verordnung (EU) 2024/3228 geschlossen, deshalb gibt es keinen Link dorthin. Eine Liste der Streitbeilegungsstellen steht unter https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Ein Verbraucher, der in einem anderen EU-Land wohnt, verliert nicht den zwingenden Schutz seines Heimatlandes."
        ]
      ],
      [
        "9. Daten des Kunden",
        [
          "Fuhrpark-, Wartungs- und Benutzerdaten, die der Kunde im Dienst speichert, gehören dem Kunden.",
          "Der Anbieter verkauft diese Daten nicht. Sie werden genutzt, um den Dienst zu erbringen, abzurechnen, den Dienst zu sichern und gesetzliche Pflichten zu erfüllen.",
          "Der Kunde kann einen Export seiner Daten an info@iqsoftcore.fi verlangen. Die Daten werden in einem üblichen maschinenlesbaren Format geliefert, sobald die Anfrage bearbeitet ist.",
          "Die Daten eines Geschäftskunden werden 90 Tage nach der Kündigung aufbewahrt. In dieser Zeit kann der Geschäftskunde die Daten exportieren, auch durch eine Exportanfrage an info@iqsoftcore.fi. Nach 90 Tagen werden die Daten automatisch gelöscht. Danach werden nur die Rechnungsdaten aufbewahrt, die das Buchhaltungsrecht verlangt.",
          "Die Daten eines Verbrauchers werden so behandelt, dass zwingender Verbraucherschutz und Datenschutz eingehalten werden. Ein Verbraucher kann Export oder Löschung seiner Daten an info@iqsoftcore.fi verlangen."
        ]
      ],
      [
        "10. Datenschutz",
        [
          "Die Verarbeitung personenbezogener Daten ist auf der Seite [[privacy]] beschrieben.",
          "Verarbeitet der Anbieter personenbezogene Daten für den Kunden, ist der Anbieter Auftragsverarbeiter und der Kunde Verantwortlicher, sofern die Rollen nicht anders vereinbart sind. Für die eigenen Konto- und Rechnungsdaten ist der Anbieter selbst Verantwortlicher. Verarbeitet werden können zum Beispiel Name und E-Mail eines Benutzers, eine optionale Telefonnummer nur als Kontaktfeld, ein per E-Mail gesendeter Anmeldecode, eine Passkey-Kennung und vom Kunden gespeicherte Daten, soweit sie personenbezogene Daten enthalten. Die Telefonnummer wird nicht zur Anmeldung verwendet."
        ]
      ],
      [
        "11. Verfügbarkeit und Wartung",
        [
          "Der Dienst wird mit zumutbarem Aufwand verfügbar gehalten. Eine ununterbrochene Nutzung wird nicht zugesagt.",
          "Wartung, ein Update, ein Fehler oder das Netz können eine Unterbrechung verursachen. Eine geplante längere Unterbrechung wird vorab im Dienst oder per E-Mail angekündigt, wenn das möglich ist. Der Dienst wird so bereitgestellt, wie er ist."
        ]
      ],
      [
        "12. Zulässige Nutzung",
        [
          "Ein Dienst von IQSoftCore darf nur für einen rechtmäßigen Zweck genutzt werden.",
          "Der Dienst darf genutzt werden, um Wartungsdaten eines Fuhrparks zu erfassen und zu verwalten.",
          "Der Dienst darf nicht rechtswidrig genutzt werden, nicht zur Verbreitung von Schadsoftware, nicht zur Störung des Dienstes, nicht zum Zugriff auf Daten eines anderen Kunden und nicht zur Umgehung von Zugriffsrechten. Der Anbieter kann die Nutzung einschränken, wenn diese Bedingungen schwer verletzt werden."
        ]
      ],
      [
        "13. Änderungen der Bedingungen und Preise",
        [
          "Der Anbieter kann diese Bedingungen und die Preise ändern. Eine Änderung wird im Dienst oder per E-Mail mindestens 30 Tage vor ihrem Inkrafttreten mitgeteilt.",
          "Wenn der Kunde eine Änderung nicht annimmt, kann er die Nutzung beenden, bevor sie gilt. Wenn ein Geschäftskunde den Dienst nach der Änderung weiter nutzt, nimmt er die aktualisierten Bedingungen an. Schweigen oder weitere Nutzung eines Verbrauchers beseitigt kein zwingendes Verbraucherrecht. Eine Preisänderung gilt nicht für einen bereits berechneten Zeitraum."
        ]
      ],
      [
        "14. Höhere Gewalt",
        [
          "Der Anbieter haftet nicht für eine Verzögerung oder Unterbrechung durch höhere Gewalt. Dazu gehören zum Beispiel Krieg, Streik, Strom- oder Netzausfall, eine behördliche Anordnung oder ein anderes Hindernis, das vernünftigerweise nicht vermieden werden kann.",
          "Das Hindernis und sein Ende werden mitgeteilt, wenn das möglich ist."
        ]
      ],
      [
        "15. Anwendbares Recht",
        [
          "Für diese Bedingungen gilt finnisches Recht. Die Parteien versuchen zuerst, eine Meinungsverschiedenheit gemeinsam zu lösen.",
          "Eine Streitigkeit eines Geschäftskunden verhandelt das Bezirksgericht am Sitz des Anbieters in Finnland, soweit zwingendes Recht sie nicht anders zuweist. Wie eine Verbraucherstreitigkeit behandelt wird, steht in Abschnitt 8."
        ]
      ],
      [
        "16. Kontakt",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finnland. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "no": {
    "metaTitle": "Vilkår | IQSoftCore",
    "metaDescription": "Vilkår for iqFleetSync og generelle vilkår for tjenestene til IQSoftCore. Utkast.",
    "title": "Vilkår",
    "draft": "Utkast. Dette er et utkast på klart språk til generelle vilkår for tjenestene til IQSoftCore og vilkårene for iqFleetSync. Det er ikke juridisk rådgivning. Leverandøren må gå gjennom teksten før den publiseres.",
    "updated": "Utkast oppdatert 2026-10-04.",
    "translationNote": "Den finske teksten er den offisielle versjonen. Denne oversettelsen er til hjelp og er ikke gjennomgått separat som juridisk tekst.",
    "scope": "Dette er generelle vilkår for tjenestene til IQSoftCore. De gjelder forbrukere og bedriftskunder. Hvis et produkt har egne vilkår, gjelder de i tillegg. Pris kreves bare hvis den er publisert eller avtalt særskilt.",
    "privacyLink": "Personvern",
    "pricing": "Priser",
    "product": "iqFleetSync",
    "home": "Forside",
    "sections": [
      [
        "1. Parter og leverandøren",
        [
          "Leverandøren er det finske enkeltpersonforetaket toiminimi IqSoftCore, Finland.",
          "Organisasjonsnummer (Y-tunnus): 3658340-4",
          "Adresse: Siihtalantie 56, 62710 Kurejoki, Finland.",
          "En kunde kan være en privat forbruker eller en bedriftskunde. En forbruker er en fysisk person som inngår avtalen hovedsakelig utenfor næring. En bedriftskunde er et foretak eller en annen organisasjon. Kontakt: info@iqsoftcore.fi og +358 45 133 4009."
        ]
      ],
      [
        "2. Hvem vilkårene gjelder",
        [
          "Punktene 1–5 og 9–16 gjelder alle kunder.",
          "Punktene 6 og 7 gjelder bare bedriftskunder og iqFleetSync. Punkt 8 gjelder bare forbrukere.",
          "Hvis ufravikelig forbrukervern er gunstigere for forbrukeren, gjelder det. Et vilkår som ville begrense en slik rett, binder ikke forbrukeren."
        ]
      ],
      [
        "3. Tjenester",
        [
          "IQSoftCore lager programvare, applikasjoner og elektronikkdesign. En privat forbruker kan kjøpe applikasjoner og andre produkter.",
          "iqFleetSync er bare en bedriftstjeneste. En forbruker kan ikke åpne en iqFleetSync-konto."
        ]
      ],
      [
        "4. Priser og mva.",
        [
          "En pris som vises til en forbruker, inkluderer merverdiavgift. Hvis en pris publiseres for Tuntilappu eller iqRallyNote, vises den inkludert merverdiavgift.",
          "Prisene for iqFleetSync gjelder bedriftskunder og er mva. 0 %. Merverdiavgift legges til på fakturaen etter gjeldende sats. Den gjeldende siden [[pricing]] er en del av vilkårene.",
          "For en bedriftskunde i et annet EU-land med et gyldig MVA-nummer brukes omvendt avgiftsplikt (reverse charge) på fakturaen når det gjelder.",
          "Når en forbruker kjøper fra et annet EU-land, kreves merverdiavgift etter satsen i kundens land når loven krever det."
        ]
      ],
      [
        "5. Betaling",
        [
          "Betalt bruk betales med kort via Stripe. Fakturaen er månedlig og etterskuddsvis.",
          "En faktura forfaller 14 dager etter fakturadato. Ved for sen betaling fra en bedriftskunde kan leverandøren kreve forsinkelsesrente etter den finske renteloven (korkolaki) og rimelige inkassokostnader.",
          "Hvis en bedriftskundes faktura er ubetalt 7 dager etter forfallsdagen, går kontoen i skrivebeskyttet modus. Lagrede opplysninger kan leses, men nye opplysninger kan ikke lagres. Skrivebeskyttet modus opphører automatisk når betalingen er gjort.",
          "Forfallsdagen og vilkåret om forsinkelse ovenfor gjelder en bedriftskunde. En forbruker betaler ved kjøpet den prisen tjenesten viser. Bedriftskundens forfall og forsinkelsesvilkår brukes ikke mot en forbruker på en måte som svekker ufravikelige forbrukerrettigheter."
        ]
      ],
      [
        "6. iqFleetSync (bare bedriftskunder)",
        [
          "Å åpne en iqFleetSync-konto krever et finsk organisasjonsnummer (Y-tunnus).",
          "iqFleetSync er en nettjeneste for vedlikehold av en flåte på fleetsync.iqsoftcore.fi. Hvert kundeforetaks data holdes atskilt fra andre kunder.",
          "iqFleetSync kjører i nettleseren på telefon eller datamaskin. Sjåfører, vedlikehold og administratorer installerer ingen app. QR-merket identifiserer enheten og logger ikke inn noen. Merkene kan skrives ut fra tjenesten. Skanning med telefonens kamera åpner enheten og legger den til blant sjåførens egne enheter. Administratoren ser hvem som brukte en enhet og når.",
          "En administrator inviterer en person med en lenke på e-post. Deretter er innlogging fingeravtrykk eller ansikt (passkey). En 6-sifret e-postkode er reserven. En delt kjøretøytelefon kan ha en valgfri PIN på 4 sifre, som administratoren kan se. Et telefonnummer er bare et valgfritt kontaktfelt. Administratoren ser kostnader, fakturering, personer og revisjonsloggen. Vedlikehold håndterer enheter, QR-merker, rapporter, feil og arbeidsordrer, men ikke kostnader, fakturering eller personer. Sjåføren ser bare tildelte enheter og enheter lagt til ved skanning, melder feil og km- eller timeavlesninger og ser bare fremdriften på egne feil. Kostnader og priser vises ikke for sjåføren. Rapporter kan ha underrapporter for tilhenger og bilder. En feil kan merkes som ikke kjørbar. Vedlikehold kvitterer, merker pågående og rettet, og sjåføren får beskjed i appen. Tjenesten har arbeidsordrer, vedlikeholdshistorikk, kostnadslinjer for administratoren, serviceplaner og frister i kilometer, timer eller dato, og påminnelser på e-post eller i appen. En enhet kan arkiveres og en person kan redigeres eller fjernes, og historikken beholdes.",
          "Kunden utpeker en administrator som åpner kontoen og styrer brukerne. Administratoren bestemmer hvem som får tilgang og hvilke rettigheter de har.",
          "Kunden svarer for det egne brukere gjør i tjenesten. En personlig e-postkode, invitasjonslenke og passkey er personlige og skal ikke gis videre. PIN-koden på en delt telefon tilhører den personen. Kunden svarer for at opplysningene som lagres, kan lagres.",
          "En ny kunde kan prøve iqFleetSync gratis i 30 dager.",
          "Prøveperioden kan avsluttes når som helst før den tar slutt. Det koster ingenting. I prøveperioden brukes tjenesten etter disse vilkårene.",
          "Disse prisene gjelder bedriftskunder og er mva. 0 %. Merverdiavgift legges til på fakturaen etter gjeldende sats.",
          "Grunnavgiften er 10,00 € per måned per kundeforetak. Et kjøretøy, for eksempel en lastebil, er en hel enhet. En arbeidsmaskin, for eksempel en gravemaskin eller en hjullaster, er også en hel enhet. Kjøretøy og arbeidsmaskiner fyller prisnivåene sammen. Kjøretøy telles først, deretter arbeidsmaskiner.",
          "Prisen er trinnvis. De første 15 enhetene er 1,50 €, enhetene 16–50 er 1,30 €, enhetene 51–100 er 1,10 €, og enheter over 100 er 0,90 € hver.",
          "En tilhenger er en halv enhet i nivået den havner i. Den koster halvparten av kjøretøyprisen i det nivået: 0,75 €, 0,65 €, 0,55 € eller 0,45 €. Et utstyr, for eksempel en tiltrotator, en hydraulisk hammer eller en feiekost, koster 0,00 € og telles ikke som en enhet. Antall brukere er ubegrenset, og brukere faktureres ikke.",
          "Månedsprisen bruker det høyeste enhetsantallet i den kalendermåneden. Hvis utstyr legges til i løpet av måneden, faktureres måneden etter toppantallet. En arkivert enhet faktureres ikke.",
          "Hvis prøveperioden tar slutt og det ikke er betalt, blir kontoen skrivebeskyttet. Hvis en bedriftskundes faktura er ubetalt 7 dager etter forfallsdagen, er kontoen skrivebeskyttet til fakturaen er betalt.",
          "I skrivebeskyttet modus kan lagrede opplysninger leses. Nye meldinger og endringer kan ikke lagres. Skrivebeskyttet modus opphører automatisk når betalingen er gjort."
        ]
      ],
      [
        "7. Oppsigelse og ansvar (bare bedriftskunder)",
        [
          "Dette punktet gjelder bare bedriftskunder. Det gjelder ikke en forbruker og begrenser ikke forbrukerens ufravikelige rettigheter.",
          "[[prominent]]iqFleetSync er bare et verktøy for registrering, påminnelser og rapportering. Kunden svarer alene for kjøretøyets og arbeidsmaskinens trafikksikkerhet, for kvaliteten på vedlikeholdet, for kontroller, for lovpålagte plikter og for avgjørelsen om å bruke et kjøretøy. IqSoftCore svarer ikke for skade, ulykker eller havari på kjøretøy eller arbeidsmaskiner. Det gjelder også når en påminnelse er oversett, en opplysning er ført inn feil, eller en sjåfør har brukt et kjøretøy som ikke er trafikksikkert. Dette vilkåret påvirker ikke forbrukerens rettigheter.",
          "Bedriftskunden sier selv opp den betalte tjenesten i appen under Tilaus ja laskutus → Irtisano palvelu (Abonnement og fakturering → Si opp tjenesten), eller på e-post til info@iqsoftcore.fi. Oppsigelsen gjelder fra slutten av den faktureringsperioden som allerede er påbegynt. En måned som allerede er fakturert, refunderes ikke, med mindre ufravikelig lov krever det.",
          "Å avbryte prøveperioden koster ingenting. Når oppsigelsen har trådt i kraft, oppbevares bedriftskundens data i 90 dager slik at kunden kan se og eksportere dem. Deretter slettes dataene automatisk. Igjen blir bare de fakturaopplysningene bokføringsloven krever.",
          "Leverandøren kan avslutte kundens bruk hvis kunden bryter vilkårene vesentlig og ikke retter det etter en skriftlig merknad. Hvis hele tjenesten legges ned, varsles det på forhånd når det er mulig.",
          "I den grad ufravikelig finsk lov tillater det, svarer leverandøren ikke for indirekte tap, tapt fortjeneste eller tapte data.",
          "Ansvaret for direkte tap er høyst de avgiftene kunden har betalt for den tjenesten i de 12 månedene før skaden. Hvis ingen avgifter er betalt, er taket 0 €.",
          "Begrensningen gjelder ikke skade som er forårsaket forsettlig eller ved grov uaktsomhet, og heller ikke ansvar som ikke kan begrenses etter loven."
        ]
      ],
      [
        "8. Forbrukere",
        [
          "Ufravikelig finsk og EU-forbrukervern gjelder for en forbruker. Et vilkår som strider mot det, viker.",
          "Ansvarstaket i punkt 7, regelen om at en allerede fakturert periode ikke refunderes, og vilkåret om at iqFleetSync bare er et verktøy for registrering, påminnelser og rapportering, begrenser ikke forbrukerens rettigheter.",
          "Ved fjernsalg har forbrukeren 14 dagers angrerett for en digital tjeneste eller digitalt innhold. Fristen regnes fra den dagen avtalen inngås.",
          "Angreretten opphører hvis forbrukeren i angrefristen uttrykkelig ber om at levering eller utførelse starter, og samtidig bekrefter at retten opphører når leveringen av det digitale innholdet har startet eller når den digitale tjenesten er fullt utført.",
          "Inntil da kan forbrukeren gå fra avtalen med en tydelig melding, for eksempel e-post til info@iqsoftcore.fi. Leverandøren tilbakebetaler mottatt betaling innen 14 dager etter meldingen i den grad loven krever tilbakebetaling.",
          "Forbrukeren kan bringe en tvist inn for den finske forbrukertvistnemnda Kuluttajariitalautakunta (www.kuluttajariita.fi). EUs plattform for nettbasert tvisteløsning ble stengt 20.7.2025 etter forordning (EU) 2024/3228, så det er ingen lenke dit. En liste over tvisteløsningsorganer finnes på https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "En forbruker som bor i et annet EU-land, mister ikke det ufravikelige vernet i hjemlandet."
        ]
      ],
      [
        "9. Kundens opplysninger",
        [
          "Flåte-, vedlikeholds- og brukerdata som kunden lagrer i tjenesten, tilhører kunden.",
          "Leverandøren selger ikke disse opplysningene. De brukes til å levere tjenesten, fakturere, sikre tjenesten og oppfylle lovpålagte plikter.",
          "Kunden kan be om eksport av dataene sine til info@iqsoftcore.fi. Dataene leveres i et vanlig maskinlesbart format når forespørselen er behandlet.",
          "En bedriftskundes data oppbevares i 90 dager etter oppsigelse. I den tiden kan bedriftskunden eksportere dataene, også ved å be om eksport til info@iqsoftcore.fi. Etter 90 dager slettes dataene automatisk. Deretter oppbevares bare de fakturaopplysningene bokføringsloven krever.",
          "En forbrukers opplysninger behandles slik at ufravikelig forbrukervern og personvern følges. Forbrukeren kan be om eksport eller sletting av opplysningene sine til info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Personvern",
        [
          "Behandling av personopplysninger er beskrevet på siden [[privacy]].",
          "Når leverandøren behandler personopplysninger for kunden, er leverandøren databehandler og kunden behandlingsansvarlig, med mindre rollene er avtalt annerledes. Leverandøren er selv behandlingsansvarlig for egne konto- og fakturaopplysninger. Opplysninger som kan behandles, er for eksempel en brukers navn og e-post, et valgfritt telefonnummer som bare er et kontaktfelt, en innloggingskode som sendes på e-post, en passkey-identifikator og data kunden lagrer hvis de inneholder personopplysninger. Telefonnummeret brukes ikke til innlogging."
        ]
      ],
      [
        "11. Tilgjengelighet og vedlikehold",
        [
          "Tjenesten holdes tilgjengelig med rimelig innsats. Uavbrutt bruk loves ikke.",
          "Vedlikehold, en oppdatering, en feil eller nettet kan gi et brudd. Et planlagt lengre brudd varsles på forhånd i tjenesten eller på e-post når det er mulig. Tjenesten leveres slik den er."
        ]
      ],
      [
        "12. Tillatt bruk",
        [
          "En tjeneste fra IQSoftCore kan bare brukes til et lovlig formål.",
          "Tjenesten kan brukes til å registrere vedlikeholdsdata for en flåte og til å administrere disse dataene.",
          "Tjenesten skal ikke brukes ulovlig, til å spre skadelig programvare, til å forstyrre tjenesten, til å nå en annen kundes data eller til å omgå tilgangsrettigheter. Leverandøren kan begrense bruken hvis vilkårene brytes alvorlig."
        ]
      ],
      [
        "13. Endringer i vilkår og priser",
        [
          "Leverandøren kan endre vilkårene og prisene. En endring varsles i tjenesten eller på e-post minst 30 dager før den trer i kraft.",
          "Hvis kunden ikke godtar en endring, kan kunden slutte å bruke tjenesten før endringen trer i kraft. Hvis en bedriftskunde fortsetter å bruke tjenesten etter endringen, godtar kunden de oppdaterte vilkårene. En forbrukers taushet eller fortsatte bruk fjerner ikke en ufravikelig forbrukerrett. En prisendring gjelder ikke en periode som allerede er fakturert."
        ]
      ],
      [
        "14. Force majeure",
        [
          "Leverandøren svarer ikke for forsinkelse eller avbrudd som skyldes force majeure. Det kan for eksempel være krig, streik, strøm- eller nettbrudd, pålegg fra en myndighet eller en annen hindring som ikke med rimelighet kan unngås.",
          "Hindringen og når den opphører, varsles når det er mulig."
        ]
      ],
      [
        "15. Lovvalg",
        [
          "Finsk lov gjelder for vilkårene. Partene prøver først å løse en uenighet sammen.",
          "En bedriftskundes tvist behandles av tingretten på leverandørens hjemsted i Finland, med mindre ufravikelig lov legger den et annet sted. Hvordan en forbrukertvist behandles, står i punkt 8."
        ]
      ],
      [
        "16. Kontakt",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "da": {
    "metaTitle": "Vilkår | IQSoftCore",
    "metaDescription": "Vilkår for iqFleetSync og generelle vilkår for IQSoftCores tjenester. Udkast.",
    "title": "Vilkår",
    "draft": "Udkast. Dette er et udkast i klart sprog til generelle vilkår for IQSoftCores tjenester og vilkårene for iqFleetSync. Det er ikke juridisk rådgivning. Leverandøren skal gennemgå teksten før offentliggørelse.",
    "updated": "Udkast opdateret 2026-10-04.",
    "translationNote": "Den finske tekst er den officielle version. Denne oversættelse er en hjælp og er ikke gennemgået særskilt som juridisk tekst.",
    "scope": "Dette er generelle vilkår for IQSoftCores tjenester. De gælder forbrugere og erhvervskunder. Hvis et produkt har egne vilkår, gælder de også. Pris opkræves kun, hvis den er offentliggjort eller aftalt særskilt.",
    "privacyLink": "Privatliv",
    "pricing": "Priser",
    "product": "iqFleetSync",
    "home": "Forside",
    "sections": [
      [
        "1. Parter og leverandøren",
        [
          "Leverandøren er den finske enkeltmandsvirksomhed toiminimi IqSoftCore, Finland.",
          "Virksomhedsnummer (Y-tunnus): 3658340-4",
          "Adresse: Siihtalantie 56, 62710 Kurejoki, Finland.",
          "En kunde kan være en privat forbruger eller en erhvervskunde. En forbruger er en fysisk person, der indgår aftalen hovedsagelig uden for erhverv. En erhvervskunde er en virksomhed eller en anden organisation. Kontakt: info@iqsoftcore.fi og +358 45 133 4009."
        ]
      ],
      [
        "2. Hvem vilkårene gælder",
        [
          "Punkterne 1–5 og 9–16 gælder alle kunder.",
          "Punkterne 6 og 7 gælder kun erhvervskunder og iqFleetSync. Punkt 8 gælder kun forbrugere.",
          "Hvis ufravigelig forbrugerbeskyttelse er gunstigere for forbrugeren, gælder den. Et vilkår, der ville begrænse en sådan ret, binder ikke forbrugeren."
        ]
      ],
      [
        "3. Tjenester",
        [
          "IQSoftCore laver software, applikationer og elektronikdesign. En privat forbruger kan købe applikationer og andre produkter.",
          "iqFleetSync er kun en erhvervstjeneste. En forbruger kan ikke åbne en iqFleetSync-konto."
        ]
      ],
      [
        "4. Priser og moms",
        [
          "En pris, der vises til en forbruger, indeholder moms. Hvis en pris offentliggøres for Tuntilappu eller iqRallyNote, vises den med moms.",
          "Priserne for iqFleetSync gælder erhvervskunder og er moms 0 %. Moms lægges til på fakturaen efter den gældende sats. Den gældende side [[pricing]] er en del af vilkårene.",
          "For en erhvervskunde i et andet EU-land med et gyldigt momsnummer bruges omvendt betalingspligt (reverse charge) på fakturaen, når det gælder.",
          "Når en forbruger køber fra et andet EU-land, opkræves moms efter satsen i kundens land, når loven kræver det."
        ]
      ],
      [
        "5. Betaling",
        [
          "Betalt brug betales med kort via Stripe. Fakturaen er månedlig og bagud.",
          "En faktura forfalder 14 dage efter fakturadatoen. Ved for sen betaling fra en erhvervskunde kan leverandøren opkræve morarente efter den finske rentelov (korkolaki) og rimelige inddrivelsesomkostninger.",
          "Hvis en erhvervskundes faktura er ubetalt 7 dage efter forfaldsdagen, går kontoen i skrivebeskyttet tilstand. Gemte oplysninger kan læses, men nye oplysninger kan ikke gemmes. Den skrivebeskyttede tilstand ophører automatisk, når betalingen er sket.",
          "Forfaldsdagen og vilkåret om forsinkelse ovenfor gælder en erhvervskunde. En forbruger betaler ved købet den pris, tjenesten viser. Erhvervskundens forfald og forsinkelsesvilkår bruges ikke over for en forbruger på en måde, der svækker ufravigelige forbrugerrettigheder."
        ]
      ],
      [
        "6. iqFleetSync (kun erhvervskunder)",
        [
          "At åbne en iqFleetSync-konto kræver et finsk virksomhedsnummer (Y-tunnus).",
          "iqFleetSync er en webtjeneste til vedligehold af en flåde på fleetsync.iqsoftcore.fi. Hver kundes data holdes adskilt fra andre kunder.",
          "iqFleetSync kører i browseren på telefon eller computer. Chauffører, vedligehold og administratorer installerer ingen app. QR-mærket identificerer enheden og logger ikke nogen ind. Mærker kan udskrives fra tjenesten. Scanning med telefonens kamera åbner enheden og tilføjer den til chaufførens egne enheder. Administratoren ser, hvem der brugte en enhed, og hvornår.",
          "En administrator inviterer en person med et link i e-mail. Derefter er login fingeraftryk eller ansigt (passkey). En 6-cifret e-mailkode er reserven. En delt køretøjstelefon kan have en valgfri PIN på 4 cifre, som administratoren kan se. Et telefonnummer er kun et valgfrit kontaktfelt. Administratoren ser omkostninger, fakturering, personer og revisionsloggen. Vedligehold håndterer enheder, QR-mærker, rapporter, fejl og arbejdsordrer, men ikke omkostninger, fakturering eller personer. Chaufføren ser kun tildelte enheder og enheder tilføjet ved scanning, laver fejlmeldinger og km- eller timeaflæsninger og ser kun fremdriften på egne fejl. Omkostninger og priser vises ikke for chaufføren. Rapporter kan have underrapporter for anhænger og fotos. En fejl kan markeres som ikke køreklar. Vedligehold kvitterer, markerer i gang og udbedret, og chaufføren får besked i appen. Tjenesten har arbejdsordrer, vedligeholdelseshistorik, omkostningslinjer for administratoren, serviceplaner og frister i kilometer, timer eller dato samt påmindelser via e-mail eller i appen. En enhed kan arkiveres og en person kan redigeres eller fjernes, og historikken beholdes.",
          "Kunden udpeger en administrator, som åbner kontoen og styrer brugerne. Administratoren bestemmer, hvem der får adgang, og hvilke rettigheder de har.",
          "Kunden hæfter for det, egne brugere gør i tjenesten. En personlig e-mailkode, invitationslink og passkey er personlige og må ikke gives videre. PIN-koden på en delt telefon tilhører den person. Kunden er ansvarlig for, at de indtastede oplysninger må gemmes.",
          "En ny kunde kan prøve iqFleetSync gratis i 30 dage.",
          "Prøveperioden kan stoppes når som helst, før den slutter. Det koster ikke noget. I prøveperioden bruges tjenesten efter disse vilkår.",
          "Disse priser gælder erhvervskunder og er moms 0 %. Moms lægges til på fakturaen efter den gældende sats.",
          "Grundgebyret er 10,00 € pr. måned pr. kundevirksomhed. Et køretøj, for eksempel en lastbil, er en hel enhed. En arbejdsmaskine, for eksempel en gravemaskine eller en gummiged, er også en hel enhed. Køretøjer og arbejdsmaskiner fylder pristrinnene sammen. Køretøjer tælles først, derefter arbejdsmaskiner.",
          "Prisen er trinvis. De første 15 enheder er 1,50 €, enhederne 16–50 er 1,30 €, enhederne 51–100 er 1,10 €, og enheder over 100 er 0,90 € hver.",
          "En anhænger er en halv enhed i det trin, den lander i. Den koster halvdelen af køretøjsprisen i det trin: 0,75 €, 0,65 €, 0,55 € eller 0,45 €. Et udstyr, for eksempel en tiltrotator, en hydraulisk hammer eller en fejekost, koster 0,00 € og tæller ikke som en enhed. Antallet af brugere er ubegrænset, og brugere faktureres ikke.",
          "Månedsprisen bruger det højeste antal enheder i den kalendermåned. Hvis udstyr tilføjes i løbet af måneden, faktureres måneden efter toppen. En arkiveret enhed faktureres ikke.",
          "Hvis prøveperioden slutter, og der ikke er betalt, bliver kontoen skrivebeskyttet. Hvis en erhvervskundes faktura er ubetalt 7 dage efter forfaldsdagen, er kontoen skrivebeskyttet, indtil fakturaen er betalt.",
          "I skrivebeskyttet tilstand kan gemte oplysninger læses. Nye indberetninger og ændringer kan ikke gemmes. Den skrivebeskyttede tilstand ophører automatisk, når betalingen er sket."
        ]
      ],
      [
        "7. Opsigelse og ansvar (kun erhvervskunder)",
        [
          "Dette punkt gælder kun erhvervskunder. Det gælder ikke en forbruger og begrænser ikke forbrugerens ufravigelige rettigheder.",
          "[[prominent]]iqFleetSync er kun et værktøj til registrering, påmindelser og rapportering. Kunden er alene ansvarlig for køretøjets og arbejdsmaskinens trafiksikkerhed, for vedligeholdelsens kvalitet, for syn og kontroller, for lovpligtige pligter og for beslutningen om at bruge et køretøj. IqSoftCore hæfter ikke for skader, ulykker eller nedbrud på køretøjer eller arbejdsmaskiner. Det gælder også, når en påmindelse er overset, en oplysning er indtastet forkert, eller en chauffør har brugt et køretøj, der ikke er trafiksikkert. Dette vilkår påvirker ikke forbrugerens rettigheder.",
          "Erhvervskunden opsiger selv den betalte tjeneste i appen under Tilaus ja laskutus → Irtisano palvelu (Abonnement og fakturering → Opsig tjenesten) eller på e-mail til info@iqsoftcore.fi. Opsigelsen gælder fra slutningen af den faktureringsperiode, der allerede er begyndt. En måned, der allerede er faktureret, refunderes ikke, medmindre ufravigelig lov kræver det.",
          "At stoppe prøveperioden koster ikke noget. Når opsigelsen er trådt i kraft, opbevares erhvervskundens data i 90 dage, så kunden kan se og eksportere dem. Derefter slettes dataene automatisk. Tilbage bliver kun de fakturaoplysninger, bogføringsloven kræver.",
          "Leverandøren kan afslutte kundens brug, hvis kunden væsentligt bryder vilkårene og ikke retter det efter en skriftlig påmindelse. Hvis hele tjenesten lukkes, varsles det på forhånd, når det er muligt.",
          "I det omfang ufravigelig finsk lov tillader det, hæfter leverandøren ikke for indirekte tab, tabt fortjeneste eller tabte data.",
          "Ansvaret for direkte tab er højst de gebyrer, kunden har betalt for den tjeneste i de 12 måneder før skaden. Hvis der ikke er betalt gebyrer, er loftet 0 €.",
          "Begrænsningen gælder ikke skade, der er forvoldt forsætligt eller ved grov uagtsomhed, og heller ikke ansvar, der ikke kan begrænses efter loven."
        ]
      ],
      [
        "8. Forbrugere",
        [
          "Ufravigelig finsk og EU-forbrugerbeskyttelse gælder for en forbruger. Et vilkår, der strider mod den, viger.",
          "Ansvarsloftet i punkt 7, reglen om at en allerede faktureret periode ikke refunderes, og vilkåret om at iqFleetSync kun er et værktøj til registrering, påmindelser og rapportering, begrænser ikke forbrugerens rettigheder.",
          "Ved fjernsalg har forbrugeren 14 dages fortrydelsesret for en digital tjeneste eller digitalt indhold. Fristen regnes fra den dag, aftalen indgås.",
          "Fortrydelsesretten ophører, hvis forbrugeren i fortrydelsesfristen udtrykkeligt beder om, at levering eller udførelse begynder, og samtidig anerkender, at retten ophører, når leveringen af det digitale indhold er begyndt, eller når den digitale tjeneste er fuldt udført.",
          "Indtil da kan forbrugeren fortryde med en klar meddelelse, for eksempel e-mail til info@iqsoftcore.fi. Leverandøren tilbagebetaler modtaget betaling inden 14 dage efter meddelelsen i det omfang, loven kræver tilbagebetaling.",
          "Forbrugeren kan indbringe en tvist for det finske forbrugerklagenævn Kuluttajariitalautakunta (www.kuluttajariita.fi). EU’s platform til online tvistbilæggelse lukkede 20.7.2025 efter forordning (EU) 2024/3228, så der er ikke et link dertil. En liste over tvistbilæggelsesorganer findes på https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "En forbruger, der bor i et andet EU-land, mister ikke den ufravigelige beskyttelse i hjemlandet."
        ]
      ],
      [
        "9. Kundens oplysninger",
        [
          "Flåde-, vedligeholdelses- og brugerdata, som kunden gemmer i tjenesten, tilhører kunden.",
          "Leverandøren sælger ikke disse oplysninger. De bruges til at levere tjenesten, fakturere, sikre tjenesten og opfylde lovpligtige pligter.",
          "Kunden kan bede om eksport af sine data til info@iqsoftcore.fi. Dataene leveres i et almindeligt maskinlæsbart format, når anmodningen er behandlet.",
          "En erhvervskundes data opbevares i 90 dage efter opsigelse. I den tid kan erhvervskunden eksportere dataene, også ved at bede om eksport til info@iqsoftcore.fi. Efter 90 dage slettes dataene automatisk. Derefter opbevares kun de fakturaoplysninger, bogføringsloven kræver.",
          "En forbrugers oplysninger behandles, så ufravigelig forbrugerbeskyttelse og databeskyttelse overholdes. Forbrugeren kan bede om eksport eller sletning af sine oplysninger til info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Privatliv",
        [
          "Behandling af personoplysninger er beskrevet på siden [[privacy]].",
          "Når leverandøren behandler personoplysninger for kunden, er leverandøren databehandler, og kunden er dataansvarlig, medmindre rollerne er aftalt anderledes. Leverandøren er selv dataansvarlig for egne konto- og fakturaoplysninger. Oplysninger, der kan behandles, er for eksempel en brugers navn og e-mail, et valgfrit telefonnummer der kun er et kontaktfelt, en login-kode der sendes på e-mail, en passkey-identifikator og data, kunden gemmer, hvis de indeholder personoplysninger. Telefonnummeret bruges ikke til login."
        ]
      ],
      [
        "11. Tilgængelighed og vedligehold",
        [
          "Tjenesten holdes tilgængelig med en rimelig indsats. Uafbrudt brug loves ikke.",
          "Vedligeholdelse, en opdatering, en fejl eller nettet kan give et afbrud. Et planlagt længere afbrud varsles på forhånd i tjenesten eller på e-mail, når det er muligt. Tjenesten leveres, som den er."
        ]
      ],
      [
        "12. Tilladt brug",
        [
          "En tjeneste fra IQSoftCore må kun bruges til et lovligt formål.",
          "Tjenesten må bruges til at registrere vedligeholdelsesdata for en flåde og til at administrere de data.",
          "Tjenesten må ikke bruges ulovligt, til at sprede skadelig software, til at forstyrre tjenesten, til at få adgang til en anden kundes data eller til at omgå adgangsrettigheder. Leverandøren kan begrænse brugen, hvis vilkårene brydes alvorligt."
        ]
      ],
      [
        "13. Ændringer af vilkår og priser",
        [
          "Leverandøren kan ændre vilkårene og priserne. En ændring varsles i tjenesten eller på e-mail mindst 30 dage før den træder i kraft.",
          "Hvis kunden ikke accepterer en ændring, kan kunden stoppe brugen, før ændringen træder i kraft. Hvis en erhvervskunde fortsætter med at bruge tjenesten efter ændringen, accepterer kunden de opdaterede vilkår. En forbrugers tavshed eller fortsatte brug fjerner ikke en ufravigelig forbrugerret. En prisændring gælder ikke en periode, der allerede er faktureret."
        ]
      ],
      [
        "14. Force majeure",
        [
          "Leverandøren hæfter ikke for forsinkelse eller afbrydelse, der skyldes force majeure. Det kan for eksempel være krig, strejke, strøm- eller netafbrydelse, et påbud fra en myndighed eller en anden hindring, der ikke med rimelighed kan undgås.",
          "Hindringen og dens ophør varsles, når det er muligt."
        ]
      ],
      [
        "15. Lovvalg",
        [
          "Finsk lov gælder for vilkårene. Parterne forsøger først at løse en uenighed sammen.",
          "En erhvervskundes tvist behandles af byretten på leverandørens hjemsted i Finland, medmindre ufravigelig lov placerer den et andet sted. Hvordan en forbrugertvist behandles, står i punkt 8."
        ]
      ],
      [
        "16. Kontakt",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "nl": {
    "metaTitle": "Gebruiksvoorwaarden | IQSoftCore",
    "metaDescription": "Voorwaarden voor iqFleetSync en algemene voorwaarden voor diensten van IQSoftCore. Concept.",
    "title": "Gebruiksvoorwaarden",
    "draft": "Concept. Dit is een concept in gewone taal van de algemene voorwaarden voor diensten van IQSoftCore en de voorwaarden voor iqFleetSync. Het is geen juridisch advies. De aanbieder moet de tekst controleren vóór publicatie.",
    "updated": "Concept bijgewerkt op 2026-10-04.",
    "translationNote": "De Finse tekst is de officiële versie. Deze vertaling is een hulpmiddel en is niet apart beoordeeld als juridische tekst.",
    "scope": "Dit zijn de algemene voorwaarden voor diensten van IQSoftCore. Ze gelden voor consumenten en zakelijke klanten. Als een product eigen voorwaarden heeft, gelden die erbij. Een prijs wordt alleen gerekend als die is gepubliceerd of apart afgesproken.",
    "privacyLink": "Privacy",
    "pricing": "Prijzen",
    "product": "iqFleetSync",
    "home": "Home",
    "sections": [
      [
        "1. Partijen en de aanbieder",
        [
          "De aanbieder is de Finse eenmanszaak toiminimi IqSoftCore, Finland.",
          "Ondernemingsnummer (Y-tunnus): 3658340-4",
          "Adres: Siihtalantie 56, 62710 Kurejoki, Finland.",
          "Een klant kan een particuliere consument of een zakelijke klant zijn. Een consument is een natuurlijk persoon die de overeenkomst vooral buiten zijn bedrijfsactiviteit sluit. Een zakelijke klant is een bedrijf of andere organisatie. Contact: info@iqsoftcore.fi en +358 45 133 4009."
        ]
      ],
      [
        "2. Voor wie deze voorwaarden gelden",
        [
          "De punten 1–5 en 9–16 gelden voor elke klant.",
          "De punten 6 en 7 gelden alleen voor zakelijke klanten en voor iqFleetSync. Punt 8 geldt alleen voor consumenten.",
          "Als dwingend consumentenrecht gunstiger is voor de consument, geldt dat. Een beding dat zo’n recht zou beperken, bindt de consument niet."
        ]
      ],
      [
        "3. Diensten",
        [
          "IQSoftCore maakt software en applicaties en doet elektronica-ontwerp. Een particuliere consument kan applicaties en andere producten kopen.",
          "iqFleetSync is alleen een zakelijke dienst. Een consument kan geen iqFleetSync-account openen."
        ]
      ],
      [
        "4. Prijzen en btw",
        [
          "Een prijs die aan een consument wordt getoond, is inclusief btw. Als een prijs voor Tuntilappu of iqRallyNote wordt gepubliceerd, wordt die inclusief btw getoond.",
          "De prijzen van iqFleetSync gelden voor zakelijke klanten en zijn btw 0%. Btw wordt op de factuur bijgeteld volgens het geldende tarief. De geldende pagina [[pricing]] hoort bij deze voorwaarden.",
          "Voor een zakelijke klant in een ander EU-land met een geldig btw-nummer geldt op de factuur de verleggingsregeling (reverse charge) waar die van toepassing is.",
          "Als een consument uit een ander EU-land koopt, wordt btw gerekend volgens het tarief van het land van de klant wanneer de wet dat eist."
        ]
      ],
      [
        "5. Betaling",
        [
          "Betaald gebruik wordt met een kaart via Stripe betaald. De factuur is maandelijks en achteraf.",
          "Een factuur vervalt 14 dagen na de factuurdatum. Bij te late betaling door een zakelijke klant kan de aanbieder vertragingsrente volgens de Finse rentewet (korkolaki) en redelijke incassokosten rekenen.",
          "Als de factuur van een zakelijke klant 7 dagen na de vervaldatum onbetaald is, gaat het account naar de alleen-lezenstand. Opgeslagen gegevens kunnen worden bekeken, nieuwe gegevens kunnen niet worden opgeslagen. De alleen-lezenstand eindigt automatisch wanneer de betaling is gedaan.",
          "De vervaldatum en het beding over te late betaling hierboven gelden voor een zakelijke klant. Een consument betaalt bij de aankoop de prijs die de dienst toont. De vervaldatum en het vertragingsbeding van de zakelijke klant worden niet zo op een consument toegepast dat dwingende consumentenrechten worden verzwakt."
        ]
      ],
      [
        "6. iqFleetSync (alleen zakelijke klanten)",
        [
          "Voor een iqFleetSync-account is een Fins ondernemingsnummer (Y-tunnus) nodig.",
          "iqFleetSync is een webdienst voor onderhoud van een wagenpark op fleetsync.iqsoftcore.fi. De gegevens van elk klantbedrijf blijven gescheiden van andere klanten.",
          "iqFleetSync draait in de browser op een telefoon of computer. Bestuurders, onderhoud en beheerders installeren geen app. De QR-sticker herkent de eenheid en meldt niemand aan. Stickers kunnen vanuit de dienst worden afgedrukt. Scannen met de camera van de telefoon opent de eenheid en voegt hem toe aan de eigen eenheden. De beheerder ziet wie een eenheid gebruikte en wanneer.",
          "Een beheerder nodigt een persoon uit met een link per e-mail. Daarna is aanmelden een vingerafdruk of gezicht (passkey). Een e-mailcode van 6 cijfers is de reserve. Een gedeelde voertuigtelefoon kan een optionele pincode van 4 cijfers hebben, die de beheerder kan bekijken. Een telefoonnummer is alleen een optioneel contactveld. De beheerder ziet kosten, facturatie, personen en het auditlogboek. Onderhoud behandelt eenheden, QR-stickers, rapporten, gebreken en werkorders, maar geen kosten, facturatie of personen. Een bestuurder ziet alleen toegewezen eenheden en eenheden die door scannen zijn toegevoegd, meldt gebreken en km- of urenstanden en ziet alleen de voortgang van de eigen gebreken. Kosten en prijzen zijn niet zichtbaar. Rapporten kunnen deelrapporten van de aanhanger en foto’s bevatten. Een gebrek kan als niet rijwaardig worden gemarkeerd. Onderhoud bevestigt het, markeert het als bezig en als hersteld, en de bestuurder krijgt bericht in de app. De dienst heeft werkorders, onderhoudshistorie, kostenregels voor de beheerder, onderhoudsplannen en termijnen in kilometers, uren of datum, en herinneringen per e-mail of in de app. Een eenheid kan worden gearchiveerd en een persoon kan worden bewerkt of verwijderd, en de geschiedenis blijft.",
          "De klant wijst een beheerder aan die het account opent en gebruikers beheert. De beheerder bepaalt wie toegang krijgt en welke rechten die heeft.",
          "De klant is verantwoordelijk voor wat de eigen gebruikers in de dienst doen. Een persoonlijke e-mailcode, uitnodigingslink en passkey zijn persoonlijk en mogen niet worden doorgegeven. De pincode op een gedeelde telefoon hoort bij die persoon. De klant is ervoor verantwoordelijk dat de ingevoerde gegevens opgeslagen mogen worden.",
          "Een nieuwe klant kan iqFleetSync 30 dagen gratis proberen.",
          "De proefperiode kan op elk moment vóór het einde worden gestopt. Dat kost niets. Tijdens de proefperiode gelden deze voorwaarden.",
          "Deze prijzen gelden voor zakelijke klanten en zijn btw 0%. Btw wordt op de factuur bijgeteld volgens het geldende tarief.",
          "Het basisbedrag is 10,00 € per maand per klantbedrijf. Een voertuig, bijvoorbeeld een vrachtwagen, is een hele eenheid. Een werkmachine, bijvoorbeeld een graafmachine of een wiellader, is ook een hele eenheid. Voertuigen en werkmachines vullen de prijsstaffels samen. Voertuigen worden eerst geteld, daarna werkmachines.",
          "De prijs loopt op. De eerste 15 eenheden zijn 1,50 €, eenheden 16–50 zijn 1,30 €, eenheden 51–100 zijn 1,10 € en eenheden boven 100 zijn 0,90 € per stuk.",
          "Een aanhanger is een halve eenheid in de staffel waarin hij valt. Hij kost de helft van de voertuigprijs van die staffel: 0,75 €, 0,65 €, 0,55 € of 0,45 €. Een uitrustingsstuk, bijvoorbeeld een tiltrotator, een hydraulische hamer of een veegmachine, kost 0,00 € en telt niet als eenheid. Het aantal gebruikers is onbeperkt en gebruikers worden niet apart gerekend.",
          "De maandprijs gebruikt het hoogste aantal eenheden in die kalendermaand. Wordt er tijdens de maand materieel toegevoegd, dan wordt de maand tegen het hoogste aantal gerekend. Een gearchiveerde eenheid wordt niet gefactureerd.",
          "Eindigt de proefperiode zonder betaling, dan wordt het account alleen-lezen. Als de factuur van een zakelijke klant 7 dagen na de vervaldatum onbetaald is, blijft het account alleen-lezen tot de factuur is betaald.",
          "In de alleen-lezenstand kunnen opgeslagen gegevens worden bekeken. Nieuwe meldingen en wijzigingen kunnen niet worden opgeslagen. De alleen-lezenstand eindigt automatisch wanneer de betaling is gedaan."
        ]
      ],
      [
        "7. Opzegging en aansprakelijkheid (alleen zakelijke klanten)",
        [
          "Dit punt geldt alleen voor zakelijke klanten. Het geldt niet voor een consument en beperkt niet diens dwingende rechten.",
          "[[prominent]]iqFleetSync is alleen een hulpmiddel voor registratie, herinneringen en rapportage. De klant is als enige verantwoordelijk voor de verkeersveiligheid van voertuigen en werkmachines, voor de kwaliteit van het onderhoud, voor keuringen, voor wettelijke plichten en voor de beslissing om een voertuig te gebruiken. IqSoftCore is niet aansprakelijk voor schade, ongevallen of pech aan voertuigen of werkmachines. Dat geldt ook wanneer een herinnering is gemist, gegevens verkeerd zijn ingevoerd of een bestuurder een voertuig heeft gebruikt dat niet verkeersveilig was. Dit beding laat de rechten van de consument onverlet.",
          "De zakelijke klant zegt de betaalde dienst zelf op in de app via Tilaus ja laskutus → Irtisano palvelu (Abonnement en facturering → Dienst opzeggen), of per e-mail aan info@iqsoftcore.fi. De opzegging werkt aan het einde van de al begonnen factureringsperiode. Een al gefactureerde maand wordt niet terugbetaald, tenzij dwingend recht dat vereist.",
          "De proefperiode stoppen kost niets. Zodra de opzegging werkt, blijven de gegevens van de zakelijke klant 90 dagen bewaard zodat de klant ze kan bekijken en exporteren. Daarna worden de gegevens automatisch verwijderd. Alleen de factuurgegevens die de boekhoudwet vereist, blijven bewaard.",
          "De aanbieder kan het gebruik van de klant beëindigen als de klant deze voorwaarden wezenlijk schendt en dat na een schriftelijke aanmaning niet herstelt. Wordt de hele dienst beëindigd, dan wordt dat vooraf gemeld als dat kan.",
          "Voor zover dwingend Fins recht het toestaat, is de aanbieder niet aansprakelijk voor indirecte schade, gederfde winst of verloren gegevens.",
          "De aansprakelijkheid voor directe schade is beperkt tot de bedragen die de klant voor die dienst heeft betaald in de 12 maanden vóór de schade. Zijn er geen bedragen betaald, dan is het maximum 0 €.",
          "De beperking geldt niet voor schade door opzet of grove nalatigheid en niet voor aansprakelijkheid die wettelijk niet mag worden beperkt."
        ]
      ],
      [
        "8. Consumenten",
        [
          "Op een consument is dwingend Fins en EU-consumentenrecht van toepassing. Een strijdig beding wijkt.",
          "Het aansprakelijkheidsplafond in punt 7, de regel dat een al gefactureerde periode niet wordt terugbetaald, en het beding dat iqFleetSync alleen een hulpmiddel voor registratie, herinneringen en rapportage is, beperken de rechten van de consument niet.",
          "Bij verkoop op afstand heeft de consument 14 dagen herroepingsrecht voor een digitale dienst of digitale inhoud. De termijn begint op de dag van de overeenkomst.",
          "Het herroepingsrecht eindigt als de consument tijdens de herroepingstermijn uitdrukkelijk vraagt dat levering of uitvoering begint en tegelijk erkent dat het recht eindigt zodra de levering van de digitale inhoud is begonnen of de digitale dienst volledig is uitgevoerd.",
          "Tot dan kan de consument herroepen met een duidelijke mededeling, bijvoorbeeld per e-mail aan info@iqsoftcore.fi. De aanbieder betaalt de ontvangen betaling terug binnen 14 dagen na de mededeling, voor zover de wet terugbetaling eist.",
          "De consument kan een geschil voorleggen aan de Finse geschillencommissie voor consumenten, Kuluttajariitalautakunta (www.kuluttajariita.fi). Het EU-platform voor onlinegeschillenbeslechting is op 20.7.2025 gesloten op grond van Verordening (EU) 2024/3228, dus er is geen link naartoe. Een lijst van geschilleninstanties staat op https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Een consument die in een ander EU-land woont, verliest niet de dwingende bescherming van zijn woonland."
        ]
      ],
      [
        "9. Gegevens van de klant",
        [
          "Wagenpark-, onderhouds- en gebruikersgegevens die de klant in de dienst opslaat, zijn van de klant.",
          "De aanbieder verkoopt deze gegevens niet. Ze worden gebruikt om de dienst te leveren, te factureren, de dienst te beveiligen en wettelijke plichten na te komen.",
          "De klant kan een export van de gegevens vragen via info@iqsoftcore.fi. De gegevens worden in een gangbaar machineleesbaar formaat geleverd zodra het verzoek is afgehandeld.",
          "De gegevens van een zakelijke klant worden 90 dagen na opzegging bewaard. In die tijd kan de zakelijke klant de gegevens exporteren, ook door export te vragen aan info@iqsoftcore.fi. Na 90 dagen worden de gegevens automatisch verwijderd. Daarna worden alleen de factuurgegevens bewaard die de boekhoudwet vereist.",
          "De gegevens van een consument worden zo behandeld dat dwingende consumentenbescherming en gegevensbescherming worden nageleefd. Een consument kan export of verwijdering van zijn gegevens vragen aan info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Privacy",
        [
          "De verwerking van persoonsgegevens staat op de pagina [[privacy]].",
          "Verwerkt de aanbieder persoonsgegevens voor de klant, dan is de aanbieder verwerker en de klant verwerkingsverantwoordelijke, tenzij de rollen anders zijn afgesproken. Voor de eigen account- en factuurgegevens is de aanbieder zelf verwerkingsverantwoordelijke. Verwerkt kunnen worden bijvoorbeeld naam en e-mailadres van een gebruiker, een optioneel telefoonnummer alleen als contactveld, een inlogcode die per e-mail wordt verstuurd, een passkey-kenmerk en gegevens die de klant opslaat als daarin persoonsgegevens staan. Het telefoonnummer wordt niet gebruikt om in te loggen."
        ]
      ],
      [
        "11. Beschikbaarheid en onderhoud",
        [
          "De dienst wordt met redelijke inspanning beschikbaar gehouden. Ononderbroken gebruik wordt niet beloofd.",
          "Onderhoud, een update, een storing of het netwerk kan een onderbreking geven. Een geplande langere onderbreking wordt vooraf in de dienst of per e-mail gemeld als dat kan. De dienst wordt geleverd zoals hij is."
        ]
      ],
      [
        "12. Toegestaan gebruik",
        [
          "Een dienst van IQSoftCore mag alleen voor een rechtmatig doel worden gebruikt.",
          "De dienst mag worden gebruikt om onderhoudsgegevens van een wagenpark vast te leggen en te beheren.",
          "De dienst mag niet onrechtmatig worden gebruikt, niet om malware te verspreiden, niet om de dienst te verstoren, niet om gegevens van een andere klant te bereiken en niet om toegangsrechten te omzeilen. De aanbieder kan het gebruik beperken als deze voorwaarden ernstig worden geschonden."
        ]
      ],
      [
        "13. Wijzigingen van voorwaarden en prijzen",
        [
          "De aanbieder kan deze voorwaarden en de prijzen wijzigen. Een wijziging wordt in de dienst of per e-mail minstens 30 dagen vóór de ingang gemeld.",
          "Als de klant een wijziging niet aanvaardt, kan hij het gebruik stoppen voordat de wijziging ingaat. Als een zakelijke klant de dienst na de wijziging blijft gebruiken, aanvaardt hij de bijgewerkte voorwaarden. Zwijgen of voortgezet gebruik van een consument neemt geen dwingend consumentenrecht weg. Een prijswijziging geldt niet voor een periode die al is gefactureerd."
        ]
      ],
      [
        "14. Overmacht",
        [
          "De aanbieder is niet aansprakelijk voor vertraging of onderbreking door overmacht. Dat is bijvoorbeeld oorlog, staking, stroom- of netuitval, een bevel van een overheid of een andere hindernis die redelijkerwijs niet te vermijden is.",
          "De hindernis en het einde ervan worden gemeld als dat kan."
        ]
      ],
      [
        "15. Toepasselijk recht",
        [
          "Op deze voorwaarden is Fins recht van toepassing. De partijen proberen een verschil eerst samen op te lossen.",
          "Een geschil van een zakelijke klant wordt behandeld door de rechtbank van de woonplaats van de aanbieder in Finland, tenzij dwingend recht het elders legt. Hoe een consumentengeschil wordt behandeld, staat in punt 8."
        ]
      ],
      [
        "16. Contact",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finland. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "fr": {
    "metaTitle": "Conditions d’utilisation | IQSoftCore",
    "metaDescription": "Conditions d’iqFleetSync et conditions générales des services IQSoftCore. Projet.",
    "title": "Conditions d’utilisation",
    "draft": "Projet. Ceci est un projet en langage clair des conditions générales des services IQSoftCore et des conditions d’iqFleetSync. Ce n’est pas un conseil juridique. Le prestataire doit relire le texte avant publication.",
    "updated": "Projet mis à jour le 2026-10-04.",
    "translationNote": "Le texte finlandais est la version officielle. Cette traduction est une aide et n’a pas été revue séparément comme texte juridique.",
    "scope": "Ce sont les conditions générales des services IQSoftCore. Elles s’appliquent aux consommateurs et aux clients professionnels. Si un produit a ses propres conditions, elles s’ajoutent. Un prix n’est facturé que s’il est publié ou convenu à part.",
    "privacyLink": "Confidentialité",
    "pricing": "Tarifs",
    "product": "iqFleetSync",
    "home": "Accueil",
    "sections": [
      [
        "1. Parties et prestataire",
        [
          "Le prestataire est l’entreprise individuelle finlandaise toiminimi IqSoftCore, Finlande.",
          "Numéro d’entreprise (Y-tunnus) : 3658340-4",
          "Adresse : Siihtalantie 56, 62710 Kurejoki, Finlande.",
          "Le client peut être un consommateur privé ou un client professionnel. Un consommateur est une personne physique qui conclut le contrat principalement en dehors de son activité professionnelle. Un client professionnel est une entreprise ou une autre organisation. Contact : info@iqsoftcore.fi et +358 45 133 4009."
        ]
      ],
      [
        "2. Qui est concerné",
        [
          "Les points 1 à 5 et 9 à 16 s’appliquent à tous les clients.",
          "Les points 6 et 7 ne s’appliquent qu’aux clients professionnels et à iqFleetSync. Le point 8 ne s’applique qu’aux consommateurs.",
          "Si une protection impérative du consommateur lui est plus favorable, elle s’applique. Une clause qui limiterait un tel droit ne lie pas le consommateur."
        ]
      ],
      [
        "3. Services",
        [
          "IQSoftCore réalise des logiciels, des applications et de la conception électronique. Un consommateur privé peut acheter des applications et d’autres produits.",
          "iqFleetSync est un service réservé aux professionnels. Un consommateur ne peut pas ouvrir un compte iqFleetSync."
        ]
      ],
      [
        "4. Prix et TVA",
        [
          "Un prix affiché à un consommateur inclut la TVA. Si un prix est publié pour Tuntilappu ou iqRallyNote, il est affiché TTC.",
          "Les prix d’iqFleetSync concernent les clients professionnels et sont TVA 0 %. La taxe sur la valeur ajoutée est ajoutée sur la facture au taux en vigueur. La page [[pricing]] en vigueur fait partie de ces conditions.",
          "Pour un client professionnel dans un autre pays de l’UE disposant d’un numéro de TVA valide, la facture applique l’autoliquidation (reverse charge) lorsqu’elle s’applique.",
          "Lorsqu’un consommateur achète depuis un autre pays de l’UE, la TVA est facturée au taux du pays du client lorsque la loi l’exige."
        ]
      ],
      [
        "5. Paiement",
        [
          "L’usage payant est payé par carte via Stripe. La facture est mensuelle et à terme échu.",
          "Une facture est due 14 jours après sa date. Si le paiement d’un client professionnel est en retard, le prestataire peut facturer des intérêts de retard selon la loi finlandaise sur les intérêts (korkolaki) et des frais de recouvrement raisonnables.",
          "Si la facture d’un client professionnel est impayée 7 jours après l’échéance, le compte passe en lecture seule. Les données enregistrées peuvent être consultées, de nouvelles données ne peuvent pas être enregistrées. Le mode lecture seule prend fin automatiquement lorsque le paiement est fait.",
          "L’échéance et la clause de retard ci-dessus concernent un client professionnel. Un consommateur paie au moment de l’achat le prix que le service affiche. L’échéance et la clause de retard du client professionnel ne sont pas appliquées à un consommateur d’une manière qui affaiblirait des droits impératifs."
        ]
      ],
      [
        "6. iqFleetSync (clients professionnels seulement)",
        [
          "L’ouverture d’un compte iqFleetSync exige un numéro d’entreprise finlandais (Y-tunnus).",
          "iqFleetSync est un service web d’entretien de parc à fleetsync.iqsoftcore.fi. Les données de chaque entreprise cliente restent séparées des autres clients.",
          "iqFleetSync fonctionne dans le navigateur sur téléphone ou ordinateur. Conducteurs, entretien et administrateurs n’installent pas d’application. L’autocollant QR identifie l’unité et ne connecte personne. Les autocollants s’impriment depuis le service. Le scan avec l’appareil photo du téléphone ouvre l’unité et l’ajoute aux unités du conducteur. L’administrateur voit qui a utilisé une unité et quand.",
          "Un administrateur invite une personne par un lien envoyé par e-mail. Ensuite, la connexion se fait par empreinte ou visage (passkey). Un code e-mail à 6 chiffres sert de recours. Un téléphone partagé peut avoir un PIN facultatif de 4 chiffres, que l’administrateur peut voir. Un numéro de téléphone n’est qu’un champ de contact facultatif. L’administrateur voit les coûts, la facturation, les personnes et le journal d’audit. L’entretien gère les unités, les autocollants QR, les rapports, les défauts et les ordres de travail, mais pas les coûts, la facturation ni les personnes. Un conducteur ne voit que les unités assignées et celles ajoutées par scan, signale des défauts et des relevés de km ou d’heures, et voit seulement l’avancement de ses propres défauts. Les coûts et les prix sont cachés. Les rapports peuvent comprendre des sous-rapports de remorque et des photos. Un défaut peut être marqué non apte à circuler. L’entretien accuse réception, le marque en cours puis réparé, et le conducteur est prévenu dans l’application. Le service a des ordres de travail, un historique d’entretien, des lignes de coût pour l’administrateur, des plans et des échéances en kilomètres, heures ou date, et des rappels par e-mail ou dans l’application. Une unité peut être archivée et une personne modifiée ou retirée, et l’historique est conservé.",
          "Le client désigne un administrateur qui ouvre le compte et gère les utilisateurs. L’administrateur décide qui a accès et quels droits il a.",
          "Le client répond de ce que font ses utilisateurs dans le service. Un code e-mail personnel, un lien d’invitation et un passkey sont personnels et ne doivent pas être transmis. Le PIN d’un téléphone partagé appartient à cette personne. Le client est responsable du droit d’enregistrer les données saisies.",
          "Un nouveau client peut essayer iqFleetSync gratuitement pendant 30 jours.",
          "L’essai peut être arrêté à tout moment avant la fin. Cela ne crée aucun prix. Pendant l’essai, le service est utilisé selon ces conditions.",
          "Ces prix concernent les clients professionnels et sont TVA 0 %. La taxe sur la valeur ajoutée est ajoutée sur la facture au taux en vigueur.",
          "Le forfait de base est de 10,00 € par mois et par entreprise cliente. Un véhicule, par exemple un camion, est une unité entière. Un engin, par exemple une pelle ou une chargeuse, est aussi une unité entière. Les véhicules et les engins remplissent les paliers ensemble. Les véhicules sont comptés d’abord, puis les engins.",
          "Le prix est progressif. Les 15 premières unités sont à 1,50 €, les unités 16–50 à 1,30 €, les unités 51–100 à 1,10 €, et les unités au-delà de 100 à 0,90 € chacune.",
          "Une remorque est une demi-unité dans le palier où elle tombe. Elle coûte la moitié du prix d’un véhicule de ce palier : 0,75 €, 0,65 €, 0,55 € ou 0,45 €. Un équipement, par exemple un tiltrotateur, un brise-roche ou une balayeuse, coûte 0,00 € et ne compte pas comme unité. Le nombre d’utilisateurs est illimité et les utilisateurs ne sont pas facturés.",
          "Le prix du mois repose sur le nombre d’unités le plus élevé de ce mois calendaire. Si du matériel est ajouté en cours de mois, le mois est facturé au nombre le plus élevé. Une unité archivée n’est pas facturée.",
          "Si l’essai se termine sans paiement, le compte passe en lecture seule. Si la facture d’un client professionnel est impayée 7 jours après l’échéance, le compte reste en lecture seule jusqu’au paiement de la facture.",
          "En lecture seule, les données enregistrées peuvent être consultées. Les nouveaux signalements et les modifications ne peuvent pas être enregistrés. Le mode lecture seule prend fin automatiquement lorsque le paiement est fait."
        ]
      ],
      [
        "7. Résiliation et responsabilité (clients professionnels seulement)",
        [
          "Ce point ne concerne que les clients professionnels. Il ne s’applique pas à un consommateur et ne limite pas ses droits impératifs.",
          "[[prominent]]iqFleetSync est seulement un outil de tenue de dossiers, de rappels et de rapports. Le client est seul responsable de l’aptitude à la circulation des véhicules et des engins, de la qualité de l’entretien, des contrôles, des obligations légales et de la décision d’utiliser un véhicule. IqSoftCore n’est pas responsable des dommages, accidents ou pannes des véhicules ou des engins. Cela vaut aussi lorsqu’un rappel a été manqué, qu’une donnée a été saisie de façon incorrecte, ou qu’un conducteur a utilisé un véhicule qui n’était pas apte à circuler. Cette clause n’affecte pas les droits du consommateur.",
          "Le client professionnel résilie lui-même le service payant dans l’application, à Tilaus ja laskutus → Irtisano palvelu (Abonnement et facturation → Résilier le service), ou par e-mail à info@iqsoftcore.fi. La résiliation prend effet à la fin de la période de facturation déjà commencée. Un mois déjà facturé n’est pas remboursé, sauf si une loi impérative l’exige.",
          "Arrêter l’essai ne coûte rien. Lorsque la résiliation a pris effet, les données du client professionnel sont conservées 90 jours pour qu’il puisse les consulter et les exporter. Ensuite, les données sont supprimées automatiquement. Seules restent les données de facturation que la loi comptable exige.",
          "Le prestataire peut mettre fin à l’usage du client si le client enfreint gravement ces conditions et ne corrige pas la situation après un avis écrit. Si tout le service est arrêté, cela est annoncé à l’avance lorsque c’est possible.",
          "Dans la mesure où la loi finlandaise impérative le permet, le prestataire n’est pas responsable des dommages indirects, du manque à gagner ni des données perdues.",
          "La responsabilité pour un dommage direct est limitée aux sommes que le client a payées pour ce service pendant les 12 mois précédant le dommage. Si aucune somme n’a été payée, ce plafond est de 0 €.",
          "La limite ne s’applique pas à un dommage causé intentionnellement ou par négligence grave, ni à une responsabilité que la loi interdit de limiter."
        ]
      ],
      [
        "8. Consommateurs",
        [
          "La protection impérative du consommateur en Finlande et dans l’UE s’applique au consommateur. Une clause contraire cède.",
          "Le plafond de responsabilité du point 7, la règle selon laquelle une période déjà facturée n’est pas remboursée, et la clause selon laquelle iqFleetSync est seulement un outil de tenue de dossiers, de rappels et de rapports, ne limitent pas les droits du consommateur.",
          "En vente à distance, le consommateur a un délai de rétractation de 14 jours pour un service numérique ou un contenu numérique. Le délai court à compter du jour du contrat.",
          "Le droit de rétractation prend fin si, pendant ce délai, le consommateur demande expressément que la livraison ou l’exécution commence et reconnaît en même temps qu’il perd ce droit dès que la fourniture du contenu numérique a commencé ou dès que le service numérique a été entièrement exécuté.",
          "Jusque-là, le consommateur peut se rétracter par un avis clair, par exemple un e-mail à info@iqsoftcore.fi. Le prestataire rembourse le paiement reçu dans les 14 jours suivant l’avis, dans la mesure où la loi exige un remboursement.",
          "Le consommateur peut saisir la commission finlandaise des litiges de consommation, Kuluttajariitalautakunta (www.kuluttajariita.fi). La plateforme européenne de règlement en ligne des litiges a fermé le 20.7.2025 en application du règlement (UE) 2024/3228, il n’y a donc pas de lien vers elle. Une liste des organismes de règlement des litiges se trouve sur https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Un consommateur qui réside dans un autre pays de l’UE ne perd pas la protection impérative de son pays de résidence."
        ]
      ],
      [
        "9. Données du client",
        [
          "Les données de parc, d’entretien et d’utilisateurs que le client enregistre dans le service appartiennent au client.",
          "Le prestataire ne vend pas ces données. Elles servent à fournir le service, à facturer, à sécuriser le service et à remplir les obligations prévues par la loi.",
          "Le client peut demander l’export de ses données à info@iqsoftcore.fi. Les données sont fournies dans un format courant lisible par machine une fois la demande traitée.",
          "Les données d’un client professionnel sont conservées 90 jours après la résiliation. Pendant ce délai, le client professionnel peut exporter les données, y compris en demandant un export à info@iqsoftcore.fi. Après 90 jours, les données sont supprimées automatiquement. Ensuite, seules les données de facturation exigées par la loi comptable sont conservées.",
          "Les données d’un consommateur sont traitées de façon à respecter la protection impérative du consommateur et la protection des données. Un consommateur peut demander l’export ou la suppression de ses données à info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Confidentialité",
        [
          "Le traitement des données personnelles est décrit sur la page [[privacy]].",
          "Lorsque le prestataire traite des données personnelles pour le client, le prestataire est sous-traitant et le client est responsable du traitement, sauf accord contraire sur les rôles. Le prestataire est responsable de ses propres données de compte et de facturation. Peuvent être traitées, par exemple, le nom et l’adresse e-mail d’un utilisateur, un numéro de téléphone facultatif utilisé seulement comme contact, un code de connexion envoyé par e-mail, un identifiant passkey et les données enregistrées par le client si elles contiennent des données personnelles. Le numéro de téléphone ne sert pas à se connecter."
        ]
      ],
      [
        "11. Disponibilité et maintenance",
        [
          "Le service est maintenu disponible avec un effort raisonnable. Un usage sans interruption n’est pas promis.",
          "Une maintenance, une mise à jour, une panne ou le réseau peuvent provoquer une interruption. Une interruption prévue plus longue est annoncée à l’avance dans le service ou par e-mail lorsque c’est possible. Le service est fourni tel quel."
        ]
      ],
      [
        "12. Usage permis",
        [
          "Un service d’IQSoftCore ne peut être utilisé que dans un but licite.",
          "Le service peut servir à enregistrer les données d’entretien d’un parc et à les gérer.",
          "Le service ne doit pas être utilisé de façon illicite, pour diffuser un logiciel malveillant, pour perturber le service, pour accéder aux données d’un autre client ou pour contourner les droits d’accès. Le prestataire peut limiter l’usage en cas de manquement grave à ces conditions."
        ]
      ],
      [
        "13. Modifications des conditions et des prix",
        [
          "Le prestataire peut modifier ces conditions et les prix. Une modification est annoncée dans le service ou par e-mail au moins 30 jours avant son entrée en vigueur.",
          "Si le client n’accepte pas une modification, il peut cesser l’usage avant qu’elle prenne effet. Si un client professionnel continue d’utiliser le service après la modification, il accepte les conditions mises à jour. Le silence ou la poursuite de l’usage par un consommateur ne supprime pas un droit impératif. Un changement de prix ne concerne pas une période déjà facturée."
        ]
      ],
      [
        "14. Force majeure",
        [
          "Le prestataire n’est pas responsable d’un retard ou d’une interruption dus à un cas de force majeure. Il s’agit par exemple d’une guerre, d’une grève, d’une coupure d’électricité ou de réseau, d’un ordre d’une autorité ou d’un autre obstacle qui ne peut pas raisonnablement être évité.",
          "L’obstacle et sa fin sont annoncés lorsque c’est possible."
        ]
      ],
      [
        "15. Droit applicable",
        [
          "Le droit finlandais s’applique à ces conditions. Les parties cherchent d’abord à régler un désaccord ensemble.",
          "Le litige d’un client professionnel est porté devant le tribunal de district du domicile du prestataire en Finlande, sauf si une loi impérative le place ailleurs. Le traitement d’un litige de consommateur est décrit au point 8."
        ]
      ],
      [
        "16. Contact",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlande. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "es": {
    "metaTitle": "Condiciones de uso | IQSoftCore",
    "metaDescription": "Condiciones de iqFleetSync y condiciones generales de los servicios de IQSoftCore. Borrador.",
    "title": "Condiciones de uso",
    "draft": "Borrador. Este es un borrador en lenguaje claro de las condiciones generales de los servicios de IQSoftCore y de las condiciones de iqFleetSync. No es asesoramiento jurídico. El proveedor debe revisar el texto antes de publicarlo.",
    "updated": "Borrador actualizado el 2026-10-04.",
    "translationNote": "El texto en finés es la versión oficial. Esta traducción es una ayuda y no se ha revisado por separado como texto jurídico.",
    "scope": "Estas son las condiciones generales de los servicios de IQSoftCore. Se aplican a consumidores y a clientes de empresa. Si un producto tiene condiciones propias, se añaden. Solo se cobra un precio si está publicado o se ha acordado aparte.",
    "privacyLink": "Privacidad",
    "pricing": "Precios",
    "product": "iqFleetSync",
    "home": "Inicio",
    "sections": [
      [
        "1. Partes y proveedor",
        [
          "El proveedor es el empresario individual finlandés toiminimi IqSoftCore, Finlandia.",
          "Número de empresa (Y-tunnus): 3658340-4",
          "Dirección: Siihtalantie 56, 62710 Kurejoki, Finlandia.",
          "El cliente puede ser un consumidor particular o un cliente de empresa. Un consumidor es una persona física que celebra el contrato principalmente fuera de su actividad económica. Un cliente de empresa es una empresa u otra organización. Contacto: info@iqsoftcore.fi y +358 45 133 4009."
        ]
      ],
      [
        "2. A quién se aplican",
        [
          "Los puntos 1 a 5 y 9 a 16 se aplican a todos los clientes.",
          "Los puntos 6 y 7 se aplican solo a clientes de empresa y a iqFleetSync. El punto 8 se aplica solo a consumidores.",
          "Si una protección imperativa del consumidor le es más favorable, se aplica. Una cláusula que limitara ese derecho no vincula al consumidor."
        ]
      ],
      [
        "3. Servicios",
        [
          "IQSoftCore hace software, aplicaciones y diseño electrónico. Un consumidor particular puede comprar aplicaciones y otros productos.",
          "iqFleetSync es solo un servicio para empresas. Un consumidor no puede abrir una cuenta de iqFleetSync."
        ]
      ],
      [
        "4. Precios e IVA",
        [
          "Un precio mostrado a un consumidor incluye el IVA. Si se publica un precio de Tuntilappu o iqRallyNote, se muestra con IVA incluido.",
          "Los precios de iqFleetSync son para clientes de empresa y son IVA 0 %. El impuesto sobre el valor añadido se añade en la factura según el tipo vigente. La página vigente [[pricing]] forma parte de estas condiciones.",
          "Para un cliente de empresa en otro país de la UE con un NIF-IVA válido, la factura usa la inversión del sujeto pasivo (reverse charge) cuando corresponde.",
          "Cuando un consumidor compra desde otro país de la UE, el IVA se cobra según el tipo del país del cliente cuando la ley lo exige."
        ]
      ],
      [
        "5. Pago",
        [
          "El uso de pago se paga con tarjeta a través de Stripe. La factura es mensual y a mes vencido.",
          "Una factura vence 14 días después de su fecha. Si el pago de un cliente de empresa se retrasa, el proveedor puede cobrar intereses de demora según la ley finlandesa de intereses (korkolaki) y costes razonables de cobro.",
          "Si la factura de un cliente de empresa sigue impagada 7 días después del vencimiento, la cuenta pasa a modo de solo lectura. Los datos guardados se pueden ver, y no se pueden guardar datos nuevos. El modo de solo lectura termina automáticamente cuando se hace el pago.",
          "El vencimiento y la cláusula de retraso de arriba se aplican a un cliente de empresa. Un consumidor paga en el momento de la compra el precio que muestra el servicio. El vencimiento y la cláusula de retraso del cliente de empresa no se aplican a un consumidor de un modo que debilite derechos imperativos."
        ]
      ],
      [
        "6. iqFleetSync (solo clientes de empresa)",
        [
          "Abrir una cuenta de iqFleetSync exige un número de empresa finlandés (Y-tunnus).",
          "iqFleetSync es un servicio web de mantenimiento de flota en fleetsync.iqsoftcore.fi. Los datos de cada empresa cliente se mantienen separados de los demás clientes.",
          "iqFleetSync funciona en el navegador en el teléfono o el ordenador. Conductores, mantenimiento y administradores no instalan una aplicación. La pegatina QR identifica la unidad y no inicia la sesión de nadie. Las pegatinas se imprimen desde el servicio. Escanear con la cámara del teléfono abre la unidad y la añade a las unidades del conductor. El administrador ve quién usó una unidad y cuándo.",
          "Un administrador invita a una persona con un enlace por correo. Después, el acceso es con huella o cara (passkey). Un código de correo de 6 dígitos es el recurso. Un teléfono compartido puede tener un PIN opcional de 4 dígitos, que el administrador puede ver. Un número de teléfono es solo un dato de contacto opcional. El administrador ve costes, facturación, personas y el registro de auditoría. Mantenimiento gestiona unidades, pegatinas QR, informes, defectos y órdenes de trabajo, pero no costes, facturación ni personas. Un conductor solo ve las unidades asignadas y las añadidas al escanear, registra defectos y lecturas de km u horas, y solo ve el avance de sus propios defectos. Los costes y los precios no se muestran. Los informes pueden incluir subinformes del remolque y fotos. Un defecto se puede marcar como no apto para circular. Mantenimiento lo acusa, lo marca en curso y lo marca reparado, y el conductor recibe el aviso en la aplicación. El servicio tiene órdenes de trabajo, historial de mantenimiento, líneas de coste para el administrador, planes y plazos por kilómetros, horas o fecha, y avisos por correo o en la aplicación. Una unidad se puede archivar y una persona se puede editar o quitar, y el historial se conserva.",
          "El cliente nombra a un administrador que abre la cuenta y gestiona a los usuarios. El administrador decide quién tiene acceso y qué derechos tiene.",
          "El cliente responde de lo que hacen sus usuarios en el servicio. Un código de correo personal, un enlace de invitación y un passkey son personales y no se deben compartir. El PIN de un teléfono compartido pertenece a esa persona. El cliente responde de tener derecho a guardar los datos que introduce.",
          "Un cliente nuevo puede probar iqFleetSync gratis durante 30 días.",
          "La prueba se puede terminar en cualquier momento antes de que acabe. Eso no genera un precio. Durante la prueba el servicio se usa según estas condiciones.",
          "Estos precios son para clientes de empresa y son IVA 0 %. El impuesto sobre el valor añadido se añade en la factura según el tipo vigente.",
          "La cuota base es de 10,00 € al mes por empresa cliente. Un vehículo, por ejemplo un camión, es una unidad entera. Una máquina de trabajo, por ejemplo una excavadora o una pala cargadora, también es una unidad entera. Los vehículos y las máquinas llenan los tramos juntos. Primero se cuentan los vehículos y después las máquinas.",
          "El precio es gradual. Las primeras 15 unidades son 1,50 €, las unidades 16–50 son 1,30 €, las unidades 51–100 son 1,10 € y las unidades por encima de 100 son 0,90 € cada una.",
          "Un remolque es media unidad en el tramo en el que cae. Cuesta la mitad del precio del vehículo de ese tramo: 0,75 €, 0,65 €, 0,55 € o 0,45 €. Un implemento, por ejemplo un tiltrotator, un martillo hidráulico o una barredora, cuesta 0,00 € y no cuenta como unidad. Los usuarios son ilimitados y no se cobran.",
          "El precio del mes usa la cantidad más alta de unidades de ese mes natural. Si se añade equipo durante el mes, el mes se factura por la cantidad máxima. Una unidad archivada no se factura.",
          "Si la prueba termina y no hay pago, la cuenta pasa a solo lectura. Si la factura de un cliente de empresa sigue impagada 7 días después del vencimiento, la cuenta permanece en solo lectura hasta que la factura se pague.",
          "En modo de solo lectura se pueden ver los datos guardados. No se pueden guardar avisos ni cambios nuevos. El modo de solo lectura termina automáticamente cuando se hace el pago."
        ]
      ],
      [
        "7. Cancelación y responsabilidad (solo clientes de empresa)",
        [
          "Este punto se aplica solo a clientes de empresa. No se aplica a un consumidor y no limita sus derechos imperativos.",
          "[[prominent]]iqFleetSync es solo una herramienta de registro, recordatorios e informes. El cliente es el único responsable de la aptitud para circular de los vehículos y las máquinas, de la calidad del mantenimiento, de las inspecciones, de las obligaciones legales y de la decisión de usar un vehículo. IqSoftCore no responde de los daños, accidentes o averías de vehículos o máquinas. Esto incluye el caso en que se haya pasado un recordatorio, se hayan anotado mal los datos o un conductor haya usado un vehículo que no era apto para circular. Esta cláusula no afecta a los derechos del consumidor.",
          "El cliente de empresa cancela él mismo el servicio de pago en la aplicación, en Tilaus ja laskutus → Irtisano palvelu (Suscripción y facturación → Cancelar el servicio), o por correo a info@iqsoftcore.fi. La cancelación surte efecto al final del período de facturación ya iniciado. Un mes ya facturado no se reembolsa, salvo que una ley imperativa lo exija.",
          "Detener la prueba no cuesta nada. Cuando la cancelación ha surtido efecto, los datos del cliente de empresa se conservan 90 días para que el cliente pueda verlos y exportarlos. Después los datos se borran automáticamente. Solo quedan los datos de facturación que exige la ley contable.",
          "El proveedor puede terminar el uso del cliente si este incumple de forma esencial estas condiciones y no lo corrige tras un aviso escrito. Si se cierra todo el servicio, se avisa antes cuando es posible.",
          "En la medida en que lo permita la ley finlandesa imperativa, el proveedor no responde de daños indirectos, de lucro cesante ni de datos perdidos.",
          "La responsabilidad por un daño directo se limita a las cantidades que el cliente haya pagado por ese servicio en los 12 meses anteriores al daño. Si no se ha pagado nada, el tope es 0 €.",
          "El límite no se aplica a un daño causado con dolo o negligencia grave, ni a una responsabilidad que la ley no permita limitar."
        ]
      ],
      [
        "8. Consumidores",
        [
          "Al consumidor se le aplica la protección imperativa del consumidor de Finlandia y de la UE. Una cláusula contraria cede.",
          "El tope de responsabilidad del apartado 7, la regla de que un período ya facturado no se reembolsa, y la cláusula de que iqFleetSync es solo una herramienta de registro, recordatorios e informes, no limitan los derechos del consumidor.",
          "En la venta a distancia, el consumidor tiene 14 días de derecho de desistimiento para un servicio digital o un contenido digital. El plazo se cuenta desde el día del contrato.",
          "El derecho de desistimiento termina si, durante ese plazo, el consumidor pide expresamente que empiece la entrega o la prestación y reconoce al mismo tiempo que pierde el derecho cuando ha empezado el suministro del contenido digital o cuando el servicio digital se ha ejecutado por completo.",
          "Hasta entonces, el consumidor puede desistir con un aviso claro, por ejemplo un correo a info@iqsoftcore.fi. El proveedor devuelve el pago recibido en un plazo de 14 días desde el aviso, en la medida en que la ley exija la devolución.",
          "El consumidor puede llevar una disputa a la junta finlandesa de litigios de consumo, Kuluttajariitalautakunta (www.kuluttajariita.fi). La plataforma europea de resolución de litigios en línea cerró el 20.7.2025 conforme al Reglamento (UE) 2024/3228, así que no hay enlace a ella. Una lista de organismos de resolución de litigios está en https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Un consumidor que vive en otro país de la UE no pierde la protección imperativa de su país de residencia."
        ]
      ],
      [
        "9. Datos del cliente",
        [
          "Los datos de flota, mantenimiento y usuarios que el cliente guarda en el servicio son del cliente.",
          "El proveedor no vende esos datos. Se usan para prestar el servicio, facturar, proteger el servicio y cumplir deberes exigidos por la ley.",
          "El cliente puede pedir una exportación de sus datos a info@iqsoftcore.fi. Los datos se entregan en un formato habitual legible por máquina cuando la solicitud se ha tratado.",
          "Los datos de un cliente de empresa se conservan 90 días después de la cancelación. Durante ese tiempo el cliente de empresa puede exportar los datos, también pidiendo la exportación a info@iqsoftcore.fi. A los 90 días los datos se borran automáticamente. Después solo se conservan los datos de facturación que exige la ley contable.",
          "Los datos de un consumidor se tratan de modo que se respeten la protección imperativa del consumidor y la protección de datos. Un consumidor puede pedir la exportación o la supresión de sus datos en info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Privacidad",
        [
          "El tratamiento de datos personales se describe en la página [[privacy]].",
          "Cuando el proveedor trata datos personales por cuenta del cliente, el proveedor es el encargado y el cliente es el responsable, salvo que los papeles se acuerden de otro modo. El proveedor es responsable de sus propios datos de cuenta y de facturación. Pueden tratarse, por ejemplo, el nombre y el correo de un usuario, un número de teléfono opcional usado solo como contacto, un código de acceso enviado por correo, un identificador passkey y los datos que guarda el cliente si contienen datos personales. El número de teléfono no se usa para entrar."
        ]
      ],
      [
        "11. Disponibilidad y mantenimiento",
        [
          "El servicio se mantiene disponible con un esfuerzo razonable. No se promete un uso sin interrupciones.",
          "El mantenimiento, una actualización, un fallo o la red pueden causar una interrupción. Una interrupción prevista más larga se avisa antes en el servicio o por correo cuando es posible. El servicio se ofrece tal como está."
        ]
      ],
      [
        "12. Uso permitido",
        [
          "Un servicio de IQSoftCore solo puede usarse con un fin lícito.",
          "El servicio se puede usar para anotar los datos de mantenimiento de una flota y para gestionarlos.",
          "No se puede usar de forma ilegal, para difundir programas dañinos, para perturbar el servicio, para acceder a los datos de otro cliente ni para saltarse los derechos de acceso. El proveedor puede limitar el uso si se incumplen gravemente estas condiciones."
        ]
      ],
      [
        "13. Cambios de condiciones y precios",
        [
          "El proveedor puede cambiar estas condiciones y los precios. Un cambio se avisa en el servicio o por correo al menos 30 días antes de que entre en vigor.",
          "Si el cliente no acepta un cambio, puede dejar de usar el servicio antes de que entre en vigor. Si un cliente de empresa sigue usando el servicio después del cambio, acepta las condiciones actualizadas. El silencio o el uso continuado de un consumidor no elimina un derecho imperativo. Un cambio de precio no afecta a un periodo ya facturado."
        ]
      ],
      [
        "14. Fuerza mayor",
        [
          "El proveedor no responde de un retraso o una interrupción causados por fuerza mayor. Eso incluye, por ejemplo, una guerra, una huelga, un corte de electricidad o de red, una orden de una autoridad u otro obstáculo que no se pueda evitar de forma razonable.",
          "El obstáculo y su fin se comunican cuando es posible."
        ]
      ],
      [
        "15. Ley aplicable",
        [
          "A estas condiciones se aplica la ley finlandesa. Las partes intentan resolver primero un desacuerdo juntas.",
          "La disputa de un cliente de empresa la conoce el tribunal de distrito del domicilio del proveedor en Finlandia, salvo que una ley imperativa la sitúe en otro lugar. Cómo se trata una disputa de un consumidor se explica en el punto 8."
        ]
      ],
      [
        "16. Contacto",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "pt": {
    "metaTitle": "Termos de uso | IQSoftCore",
    "metaDescription": "Termos do iqFleetSync e termos gerais dos serviços da IQSoftCore. Rascunho.",
    "title": "Termos de uso",
    "draft": "Rascunho. Este é um rascunho em linguagem simples dos termos gerais dos serviços da IQSoftCore e dos termos do iqFleetSync. Não é aconselhamento jurídico. O fornecedor deve rever o texto antes de o publicar.",
    "updated": "Rascunho atualizado em 2026-10-04.",
    "translationNote": "O texto em finlandês é a versão oficial. Esta tradução serve de ajuda e não foi revista à parte como texto jurídico.",
    "scope": "Estes são os termos gerais dos serviços da IQSoftCore. Aplicam-se a consumidores e a clientes empresariais. Se um produto tiver termos próprios, estes somam-se. Só se cobra um preço se estiver publicado ou tiver sido acordado à parte.",
    "privacyLink": "Privacidade",
    "pricing": "Preços",
    "product": "iqFleetSync",
    "home": "Início",
    "sections": [
      [
        "1. Partes e fornecedor",
        [
          "O fornecedor é o empresário em nome individual finlandês toiminimi IqSoftCore, Finlândia.",
          "Número de empresa (Y-tunnus): 3658340-4",
          "Endereço: Siihtalantie 56, 62710 Kurejoki, Finlândia.",
          "O cliente pode ser um consumidor particular ou um cliente empresarial. Um consumidor é uma pessoa singular que celebra o contrato sobretudo fora da sua atividade económica. Um cliente empresarial é uma empresa ou outra organização. Contacto: info@iqsoftcore.fi e +358 45 133 4009."
        ]
      ],
      [
        "2. A quem se aplicam",
        [
          "Os pontos 1 a 5 e 9 a 16 aplicam-se a todos os clientes.",
          "Os pontos 6 e 7 aplicam-se só a clientes empresariais e ao iqFleetSync. O ponto 8 aplica-se só a consumidores.",
          "Se uma proteção imperativa do consumidor for mais favorável, aplica-se. Uma cláusula que limitasse esse direito não vincula o consumidor."
        ]
      ],
      [
        "3. Serviços",
        [
          "A IQSoftCore faz software, aplicações e projeto de eletrónica. Um consumidor particular pode comprar aplicações e outros produtos.",
          "O iqFleetSync é apenas um serviço para empresas. Um consumidor não pode abrir uma conta iqFleetSync."
        ]
      ],
      [
        "4. Preços e IVA",
        [
          "Um preço mostrado a um consumidor inclui IVA. Se for publicado um preço do Tuntilappu ou do iqRallyNote, é mostrado com IVA incluído.",
          "Os preços do iqFleetSync são para clientes empresariais e são IVA 0%. O imposto sobre o valor acrescentado é acrescentado na fatura à taxa em vigor. A página vigente [[pricing]] faz parte destes termos.",
          "Para um cliente empresarial noutro país da UE com um NIF de IVA válido, a fatura usa a autoliquidação (reverse charge) quando se aplica.",
          "Quando um consumidor compra a partir de outro país da UE, o IVA é cobrado à taxa do país do cliente quando a lei o exige."
        ]
      ],
      [
        "5. Pagamento",
        [
          "O uso pago é pago com cartão através da Stripe. A fatura é mensal e a prazo.",
          "Uma fatura vence 14 dias após a data da fatura. Se o pagamento de um cliente empresarial se atrasar, o fornecedor pode cobrar juros de mora segundo a lei finlandesa dos juros (korkolaki) e custos razoáveis de cobrança.",
          "Se a fatura de um cliente empresarial estiver por pagar 7 dias após o vencimento, a conta passa a só leitura. Os dados guardados podem ser vistos, e não é possível guardar dados novos. O modo só leitura termina automaticamente quando o pagamento é feito.",
          "O vencimento e a cláusula de atraso acima aplicam-se a um cliente empresarial. Um consumidor paga no momento da compra o preço que o serviço mostra. O vencimento e a cláusula de atraso do cliente empresarial não se aplicam a um consumidor de modo a enfraquecer direitos imperativos."
        ]
      ],
      [
        "6. iqFleetSync (só clientes empresariais)",
        [
          "Abrir uma conta iqFleetSync exige um número de empresa finlandês (Y-tunnus).",
          "O iqFleetSync é um serviço web de manutenção de frota em fleetsync.iqsoftcore.fi. Os dados de cada empresa cliente ficam separados dos outros clientes.",
          "O iqFleetSync funciona no navegador no telemóvel ou no computador. Motoristas, manutenção e administradores não instalam uma aplicação. O autocolante QR identifica a unidade e não inicia a sessão de ninguém. Os autocolantes imprimem-se no serviço. Ler com a câmara do telemóvel abre a unidade e adiciona-a às unidades do motorista. O administrador vê quem usou uma unidade e quando.",
          "Um administrador convida uma pessoa com uma ligação por e-mail. Depois, o acesso é por impressão digital ou rosto (passkey). Um código de e-mail de 6 dígitos é a alternativa. Um telemóvel partilhado pode ter um PIN opcional de 4 dígitos, que o administrador pode ver. Um número de telefone é apenas um contacto opcional. O administrador vê custos, faturação, pessoas e o registo de auditoria. A manutenção trata de unidades, autocolantes QR, relatórios, defeitos e ordens de trabalho, mas não de custos, faturação ou pessoas. Um motorista só vê as unidades atribuídas e as adicionadas por leitura, regista defeitos e leituras de km ou horas e só vê o andamento dos próprios defeitos. Custos e preços ficam ocultos. Os relatórios podem incluir sub-relatórios do reboque e fotografias. Um defeito pode ser marcado como não apto a circular. A manutenção confirma, marca em curso e marca reparado, e o motorista é avisado na aplicação. O serviço tem ordens de trabalho, histórico de manutenção, linhas de custo para o administrador, planos e prazos em quilómetros, horas ou data, e lembretes por e-mail ou na aplicação. Uma unidade pode ser arquivada e uma pessoa editada ou removida, e o histórico fica guardado.",
          "O cliente nomeia um administrador que abre a conta e gere os utilizadores. O administrador decide quem tem acesso e que direitos tem.",
          "O cliente responde pelo que os seus utilizadores fazem no serviço. Um código de e-mail pessoal, um link de convite e um passkey são pessoais e não devem ser partilhados. O PIN de um telefone partilhado pertence a essa pessoa. O cliente é responsável por ter o direito de guardar os dados que introduz.",
          "Um cliente novo pode experimentar o iqFleetSync grátis durante 30 dias.",
          "O teste pode ser interrompido a qualquer momento antes do fim. Isso não gera um preço. Durante o teste o serviço é usado segundo estes termos.",
          "Estes preços são para clientes empresariais e são IVA 0%. O imposto sobre o valor acrescentado é acrescentado na fatura à taxa em vigor.",
          "A taxa base é de 10,00 € por mês por empresa cliente. Um veículo, por exemplo um camião, é uma unidade inteira. Uma máquina de trabalho, por exemplo uma escavadeira ou uma pá carregadeira, também é uma unidade inteira. Veículos e máquinas preenchem as faixas juntos. Os veículos contam primeiro e as máquinas a seguir.",
          "O preço é progressivo. As primeiras 15 unidades são 1,50 €, as unidades 16–50 são 1,30 €, as unidades 51–100 são 1,10 € e as unidades acima de 100 são 0,90 € cada.",
          "Um reboque é meia unidade na faixa em que cai. Custa metade do preço do veículo dessa faixa: 0,75 €, 0,65 €, 0,55 € ou 0,45 €. Um equipamento, por exemplo um tiltrotator, um martelo hidráulico ou uma vassoura, custa 0,00 € e não conta como unidade. Os utilizadores são ilimitados e não são cobrados.",
          "O preço do mês usa a maior quantidade de unidades desse mês. Se for acrescentado equipamento durante o mês, o mês é faturado pela quantidade máxima. Uma unidade arquivada não é faturada.",
          "Se o período de teste terminar sem pagamento, a conta fica só de leitura. Se a fatura de um cliente empresarial estiver por pagar 7 dias após o vencimento, a conta permanece só de leitura até a fatura ser paga.",
          "Em só leitura, os dados guardados podem ser vistos. Novos registos e alterações não podem ser guardados. O modo só leitura termina automaticamente quando o pagamento é feito."
        ]
      ],
      [
        "7. Cancelamento e responsabilidade (só clientes empresariais)",
        [
          "Este ponto aplica-se só a clientes empresariais. Não se aplica a um consumidor e não limita os seus direitos imperativos.",
          "[[prominent]]O iqFleetSync é apenas uma ferramenta de registo, lembretes e relatórios. O cliente é o único responsável pela aptidão para circular dos veículos e das máquinas, pela qualidade da manutenção, pelas inspeções, pelas obrigações legais e pela decisão de usar um veículo. A IqSoftCore não responde por danos, acidentes ou avarias de veículos ou máquinas. Isto inclui o caso em que um lembrete foi esquecido, os dados foram introduzidos de forma incorreta ou um motorista usou um veículo que não estava apto a circular. Esta cláusula não afeta os direitos do consumidor.",
          "O cliente empresarial cancela ele próprio o serviço pago na aplicação, em Tilaus ja laskutus → Irtisano palvelu (Subscrição e faturação → Cancelar o serviço), ou por e-mail para info@iqsoftcore.fi. O cancelamento produz efeitos no fim do período de faturação já iniciado. Um mês já faturado não é reembolsado, salvo se uma lei imperativa o exigir.",
          "Parar o período de teste não custa nada. Quando o cancelamento produz efeitos, os dados do cliente empresarial ficam guardados 90 dias para o cliente os ver e exportar. Depois disso os dados são apagados automaticamente. Ficam apenas os dados de faturação que a lei contabilística exige.",
          "O fornecedor pode terminar o uso do cliente se este violar de forma essencial estes termos e não corrigir a situação depois de um aviso escrito. Se todo o serviço for encerrado, isso é avisado antes, quando for possível.",
          "Na medida em que a lei finlandesa imperativa o permita, o fornecedor não responde por danos indiretos, lucros cessantes nem dados perdidos.",
          "A responsabilidade por dano direto limita-se aos valores que o cliente pagou por esse serviço nos 12 meses anteriores ao dano. Se nada tiver sido pago, o limite é 0 €.",
          "O limite não se aplica a dano causado com dolo ou negligência grave, nem a uma responsabilidade que a lei não permita limitar."
        ]
      ],
      [
        "8. Consumidores",
        [
          "Ao consumidor aplica-se a proteção imperativa do consumidor da Finlândia e da UE. Uma cláusula contrária cede.",
          "O limite de responsabilidade do ponto 7, a regra de que um período já faturado não é reembolsado, e a cláusula de que o iqFleetSync é apenas uma ferramenta de registo, lembretes e relatórios, não limitam os direitos do consumidor.",
          "Na venda à distância, o consumidor tem 14 dias de direito de arrependimento para um serviço digital ou conteúdo digital. O prazo conta-se a partir do dia do contrato.",
          "O direito de arrependimento termina se, durante esse prazo, o consumidor pedir expressamente que a entrega ou a execução comece e reconhecer ao mesmo tempo que perde o direito quando o fornecimento do conteúdo digital começou ou quando o serviço digital foi integralmente executado.",
          "Até lá, o consumidor pode arrepender-se com um aviso claro, por exemplo um e-mail para info@iqsoftcore.fi. O fornecedor devolve o pagamento recebido no prazo de 14 dias após o aviso, na medida em que a lei exija a devolução.",
          "O consumidor pode levar um litígio à comissão finlandesa de litígios de consumo, Kuluttajariitalautakunta (www.kuluttajariita.fi). A plataforma europeia de resolução de litígios em linha encerrou em 20.7.2025 ao abrigo do Regulamento (UE) 2024/3228, por isso não há ligação para ela. Uma lista de organismos de resolução de litígios está em https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Um consumidor que viva noutro país da UE não perde a proteção imperativa do seu país de residência."
        ]
      ],
      [
        "9. Dados do cliente",
        [
          "Os dados de frota, manutenção e utilizadores que o cliente guarda no serviço pertencem ao cliente.",
          "O fornecedor não vende esses dados. São usados para prestar o serviço, faturar, proteger o serviço e cumprir deveres exigidos por lei.",
          "O cliente pode pedir a exportação dos seus dados para info@iqsoftcore.fi. Os dados são entregues num formato corrente legível por máquina quando o pedido for tratado.",
          "Os dados de um cliente empresarial são guardados 90 dias após o cancelamento. Nesse período o cliente empresarial pode exportar os dados, inclusive pedindo a exportação para info@iqsoftcore.fi. Após 90 dias os dados são apagados automaticamente. Depois disso ficam apenas os dados de faturação que a lei contabilística exige.",
          "Os dados de um consumidor são tratados de modo a cumprir a proteção imperativa do consumidor e a proteção de dados. Um consumidor pode pedir a exportação ou a eliminação dos seus dados para info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Privacidade",
        [
          "O tratamento de dados pessoais está descrito na página [[privacy]].",
          "Quando o fornecedor trata dados pessoais por conta do cliente, o fornecedor é o subcontratante e o cliente é o responsável, salvo acordo diferente sobre os papéis. O fornecedor é responsável pelos seus próprios dados de conta e de faturação. Podem ser tratados, por exemplo, o nome e o e-mail de um utilizador, um número de telefone opcional usado apenas como contacto, um código de acesso enviado por e-mail, um identificador passkey e os dados que o cliente guarda se contiverem dados pessoais. O número de telefone não é usado para entrar."
        ]
      ],
      [
        "11. Disponibilidade e manutenção",
        [
          "O serviço é mantido disponível com um esforço razoável. Não se promete um uso sem interrupções.",
          "A manutenção, uma atualização, uma falha ou a rede podem causar uma interrupção. Uma interrupção planeada mais longa é avisada antes no serviço ou por e-mail, quando isso for possível. O serviço é fornecido tal como está."
        ]
      ],
      [
        "12. Uso permitido",
        [
          "Um serviço da IQSoftCore só pode ser usado para um fim lícito.",
          "O serviço pode ser usado para registar dados de manutenção de uma frota e para os gerir.",
          "O serviço não pode ser usado de forma ilegal, para espalhar software nocivo, para perturbar o serviço, para aceder aos dados de outro cliente nem para contornar direitos de acesso. O fornecedor pode limitar o uso se estes termos forem violados de forma grave."
        ]
      ],
      [
        "13. Alterações dos termos e preços",
        [
          "O fornecedor pode alterar estes termos e os preços. Uma alteração é comunicada no serviço ou por e-mail pelo menos 30 dias antes de entrar em vigor.",
          "Se o cliente não aceitar uma alteração, pode deixar de usar o serviço antes de ela produzir efeitos. Se um cliente empresarial continuar a usar o serviço depois da alteração, aceita os termos atualizados. O silêncio ou o uso continuado de um consumidor não elimina um direito imperativo. Uma alteração de preço não afeta um período já faturado."
        ]
      ],
      [
        "14. Força maior",
        [
          "O fornecedor não responde por atraso ou interrupção causados por força maior. Isso inclui, por exemplo, guerra, greve, corte de eletricidade ou de rede, uma ordem de uma autoridade ou outro obstáculo que não possa ser evitado de forma razoável.",
          "O obstáculo e o seu fim são comunicados quando isso for possível."
        ]
      ],
      [
        "15. Lei aplicável",
        [
          "A estes termos aplica-se a lei finlandesa. As partes tentam primeiro resolver um desacordo em conjunto.",
          "O litígio de um cliente empresarial é julgado pelo tribunal de comarca do domicílio do fornecedor na Finlândia, salvo se uma lei imperativa o colocar noutro lugar. O tratamento de um litígio de consumidor está no ponto 8."
        ]
      ],
      [
        "16. Contacto",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlândia. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "it": {
    "metaTitle": "Condizioni d’uso | IQSoftCore",
    "metaDescription": "Condizioni di iqFleetSync e condizioni generali dei servizi IQSoftCore. Bozza.",
    "title": "Condizioni d’uso",
    "draft": "Bozza. Questa è una bozza in linguaggio chiaro delle condizioni generali dei servizi IQSoftCore e delle condizioni di iqFleetSync. Non è una consulenza legale. Il fornitore deve rivedere il testo prima della pubblicazione.",
    "updated": "Bozza aggiornata il 2026-10-04.",
    "translationNote": "Il testo finlandese è la versione ufficiale. Questa traduzione è un aiuto e non è stata rivista separatamente come testo giuridico.",
    "scope": "Queste sono le condizioni generali dei servizi IQSoftCore. Si applicano ai consumatori e ai clienti imprese. Se un prodotto ha condizioni proprie, si aggiungono. Un prezzo si addebita solo se è pubblicato o concordato a parte.",
    "privacyLink": "Privacy",
    "pricing": "Prezzi",
    "product": "iqFleetSync",
    "home": "Home",
    "sections": [
      [
        "1. Parti e fornitore",
        [
          "Il fornitore è l’impresa individuale finlandese toiminimi IqSoftCore, Finlandia.",
          "Codice impresa (Y-tunnus): 3658340-4",
          "Indirizzo: Siihtalantie 56, 62710 Kurejoki, Finlandia.",
          "Il cliente può essere un consumatore privato o un cliente impresa. Un consumatore è una persona fisica che conclude il contratto principalmente al di fuori della propria attività economica. Un cliente impresa è un’impresa o un’altra organizzazione. Contatto: info@iqsoftcore.fi e +358 45 133 4009."
        ]
      ],
      [
        "2. A chi si applicano",
        [
          "I punti 1–5 e 9–16 si applicano a tutti i clienti.",
          "I punti 6 e 7 si applicano solo ai clienti imprese e a iqFleetSync. Il punto 8 si applica solo ai consumatori.",
          "Se una tutela imperativa del consumatore è più favorevole, si applica. Una clausola che limiterebbe un tale diritto non vincola il consumatore."
        ]
      ],
      [
        "3. Servizi",
        [
          "IQSoftCore realizza software, applicazioni e progettazione elettronica. Un consumatore privato può acquistare applicazioni e altri prodotti.",
          "iqFleetSync è solo un servizio per imprese. Un consumatore non può aprire un account iqFleetSync."
        ]
      ],
      [
        "4. Prezzi e IVA",
        [
          "Un prezzo mostrato a un consumatore include l’IVA. Se viene pubblicato un prezzo per Tuntilappu o iqRallyNote, è mostrato IVA inclusa.",
          "I prezzi di iqFleetSync sono per clienti imprese e sono IVA 0%. L’imposta sul valore aggiunto si aggiunge in fattura all’aliquota in vigore. La pagina vigente [[pricing]] fa parte di queste condizioni.",
          "Per un cliente impresa in un altro paese UE con una partita IVA valida, la fattura usa l’inversione contabile (reverse charge) quando si applica.",
          "Quando un consumatore acquista da un altro paese UE, l’IVA è addebitata all’aliquota del paese del cliente quando la legge lo richiede."
        ]
      ],
      [
        "5. Pagamento",
        [
          "L’uso a pagamento si paga con carta tramite Stripe. La fattura è mensile e posticipata.",
          "Una fattura scade 14 giorni dopo la data della fattura. Se il pagamento di un cliente impresa è in ritardo, il fornitore può addebitare interessi di mora secondo la legge finlandese sugli interessi (korkolaki) e costi ragionevoli di recupero.",
          "Se la fattura di un cliente impresa è impagata 7 giorni dopo la scadenza, l’account passa in sola lettura. I dati salvati si possono vedere e non si possono salvare dati nuovi. La sola lettura termina automaticamente quando il pagamento è stato fatto.",
          "La scadenza e la clausola di ritardo sopra si applicano a un cliente impresa. Un consumatore paga al momento dell’acquisto il prezzo che il servizio mostra. La scadenza e la clausola di ritardo del cliente impresa non si applicano a un consumatore in modo da indebolire diritti imperativi."
        ]
      ],
      [
        "6. iqFleetSync (solo clienti imprese)",
        [
          "Aprire un account iqFleetSync richiede un codice impresa finlandese (Y-tunnus).",
          "iqFleetSync è un servizio web per la manutenzione di una flotta all’indirizzo fleetsync.iqsoftcore.fi. I dati di ogni impresa cliente restano separati dagli altri clienti.",
          "iqFleetSync funziona nel browser sul telefono o sul computer. Conducenti, officina e amministratori non installano un’app. L’adesivo QR identifica l’unità e non fa accedere nessuno. Gli adesivi si stampano dal servizio. La scansione con la fotocamera del telefono apre l’unità e la aggiunge alle unità del conducente. L’amministratore vede chi ha usato un’unità e quando.",
          "Un amministratore invita una persona con un link via e-mail. Poi l’accesso è con impronta o volto (passkey). Un codice e-mail di 6 cifre è l’alternativa. Un telefono condiviso può avere un PIN facoltativo di 4 cifre, che l’amministratore può vedere. Un numero di telefono è solo un contatto facoltativo. L’amministratore vede costi, fatturazione, persone e il registro di audit. L’officina gestisce unità, adesivi QR, rapporti, difetti e ordini di lavoro, ma non costi, fatturazione o persone. Un conducente vede solo le unità assegnate e quelle aggiunte con la scansione, segnala difetti e letture di km o ore e vede solo l’avanzamento dei propri difetti. Costi e prezzi sono nascosti. I rapporti possono includere sotto-rapporti del rimorchio e foto. Un difetto si può segnare come non idoneo alla circolazione. L’officina lo conferma, lo segna in corso e lo segna riparato, e il conducente riceve l’avviso nell’app. Il servizio ha ordini di lavoro, storico di manutenzione, righe di costo per l’amministratore, piani e scadenze in chilometri, ore o data, e promemoria per e-mail o nell’app. Un’unità si può archiviare e una persona modificare o rimuovere, e lo storico resta.",
          "Il cliente nomina un amministratore che apre l’account e gestisce gli utenti. L’amministratore decide chi ha accesso e quali diritti ha.",
          "Il cliente risponde di ciò che i propri utenti fanno nel servizio. Un codice e-mail personale, un link di invito e un passkey sono personali e non vanno condivisi. Il PIN di un telefono condiviso appartiene a quella persona. Il cliente è responsabile del diritto di salvare i dati inseriti.",
          "Un nuovo cliente può provare iqFleetSync gratis per 30 giorni.",
          "La prova si può interrompere in qualsiasi momento prima della fine. Non nasce alcun prezzo. Durante la prova il servizio si usa secondo queste condizioni.",
          "Questi prezzi sono per clienti imprese e sono IVA 0%. L’imposta sul valore aggiunto si aggiunge in fattura all’aliquota in vigore.",
          "La quota base è di 10,00 € al mese per impresa cliente. Un veicolo, per esempio un camion, è un’unità intera. Una macchina operatrice, per esempio un escavatore o una pala gommata, è anch’essa un’unità intera. Veicoli e macchine riempiono gli scaglioni insieme. Prima si contano i veicoli, poi le macchine.",
          "Il prezzo è progressivo. Le prime 15 unità sono 1,50 €, le unità 16–50 sono 1,30 €, le unità 51–100 sono 1,10 € e le unità oltre 100 sono 0,90 € ciascuna.",
          "Un rimorchio è mezza unità nello scaglione in cui cade. Costa la metà del prezzo del veicolo di quello scaglione: 0,75 €, 0,65 €, 0,55 € o 0,45 €. Un’attrezzatura, per esempio un tiltrotator, un martello idraulico o una spazzatrice, costa 0,00 € e non conta come unità. Gli utenti sono illimitati e non si addebitano.",
          "Il prezzo del mese usa il numero più alto di unità di quel mese di calendario. Se si aggiunge attrezzatura durante il mese, il mese si fattura sul numero massimo. Un’unità archiviata non viene fatturata.",
          "Se la prova termina senza pagamento, l’account passa in sola lettura. Se la fattura di un cliente impresa è impagata 7 giorni dopo la scadenza, l’account resta in sola lettura fino al pagamento della fattura.",
          "In sola lettura i dati salvati si possono vedere. Nuove segnalazioni e modifiche non si possono salvare. La sola lettura termina automaticamente quando il pagamento è stato fatto."
        ]
      ],
      [
        "7. Recesso e responsabilità (solo clienti imprese)",
        [
          "Questo punto si applica solo ai clienti imprese. Non si applica a un consumatore e non limita i suoi diritti imperativi.",
          "[[prominent]]iqFleetSync è solo uno strumento di registrazione, promemoria e report. Il cliente è l’unico responsabile dell’idoneità alla circolazione di veicoli e macchine, della qualità della manutenzione, dei controlli, degli obblighi di legge e della decisione di usare un veicolo. IqSoftCore non risponde di danni, incidenti o guasti di veicoli o macchine. Questo vale anche se un promemoria è stato mancato, un dato è stato inserito in modo errato o un conducente ha usato un veicolo non idoneo alla circolazione. Questa clausola non incide sui diritti del consumatore.",
          "Il cliente impresa disdice da sé il servizio a pagamento nell’app, in Tilaus ja laskutus → Irtisano palvelu (Abbonamento e fatturazione → Disdici il servizio), oppure per e-mail a info@iqsoftcore.fi. La disdetta ha effetto alla fine del periodo di fatturazione già iniziato. Un mese già fatturato non è rimborsato, salvo che una legge inderogabile lo richieda.",
          "Interrompere la prova non costa nulla. Quando la disdetta ha effetto, i dati del cliente impresa restano per 90 giorni così che il cliente possa vederli ed esportarli. Poi i dati vengono cancellati automaticamente. Restano solo i dati di fatturazione che la legge contabile richiede.",
          "Il fornitore può chiudere l’uso del cliente se questi viola in modo essenziale queste condizioni e non corregge la situazione dopo un avviso scritto. Se l’intero servizio è chiuso, lo si comunica in anticipo quando è possibile.",
          "Nella misura in cui lo consente la legge finlandese imperativa, il fornitore non risponde di danni indiretti, di mancato guadagno né di dati persi.",
          "La responsabilità per un danno diretto è limitata alle somme che il cliente ha pagato per quel servizio nei 12 mesi precedenti il danno. Se non è stato pagato nulla, il tetto è 0 €.",
          "Il limite non si applica a un danno causato con dolo o colpa grave, né a una responsabilità che la legge non consente di limitare."
        ]
      ],
      [
        "8. Consumatori",
        [
          "Al consumatore si applica la tutela imperativa del consumatore finlandese e dell’UE. Una clausola contraria cede.",
          "Il tetto di responsabilità del punto 7, la regola per cui un periodo già fatturato non è rimborsato, e la clausola per cui iqFleetSync è solo uno strumento di registrazione, promemoria e report, non limitano i diritti del consumatore.",
          "Nella vendita a distanza il consumatore ha 14 giorni di diritto di recesso per un servizio digitale o un contenuto digitale. Il termine decorre dal giorno del contratto.",
          "Il diritto di recesso termina se, durante quel termine, il consumatore chiede espressamente che la consegna o l’esecuzione inizi e riconosce allo stesso tempo di perdere il diritto quando la fornitura del contenuto digitale è iniziata o quando il servizio digitale è stato interamente eseguito.",
          "Fino ad allora il consumatore può recedere con una comunicazione chiara, per esempio un’e-mail a info@iqsoftcore.fi. Il fornitore rimborsa il pagamento ricevuto entro 14 giorni dalla comunicazione, nella misura in cui la legge esige il rimborso.",
          "Il consumatore può portare una controversia alla commissione finlandese per le controversie dei consumatori, Kuluttajariitalautakunta (www.kuluttajariita.fi). La piattaforma europea di risoluzione delle controversie online ha chiuso il 20.7.2025 ai sensi del regolamento (UE) 2024/3228, quindi non c’è un link. Un elenco degli organismi di risoluzione è su https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Un consumatore che vive in un altro paese UE non perde la tutela imperativa del suo paese di residenza."
        ]
      ],
      [
        "9. Dati del cliente",
        [
          "I dati di flotta, manutenzione e utenti che il cliente salva nel servizio appartengono al cliente.",
          "Il fornitore non vende questi dati. Servono a erogare il servizio, a fatturare, a proteggere il servizio e a rispettare doveri previsti dalla legge.",
          "Il cliente può chiedere l’esportazione dei propri dati a info@iqsoftcore.fi. I dati sono consegnati in un formato comune leggibile da una macchina quando la richiesta è stata trattata.",
          "I dati di un cliente impresa sono conservati per 90 giorni dopo la disdetta. In quel periodo il cliente impresa può esportare i dati, anche chiedendo l’esportazione a info@iqsoftcore.fi. Dopo 90 giorni i dati vengono cancellati automaticamente. Poi restano solo i dati di fatturazione che la legge contabile richiede.",
          "I dati di un consumatore sono trattati nel rispetto della tutela inderogabile del consumatore e della protezione dei dati. Un consumatore può chiedere l’esportazione o la cancellazione dei propri dati a info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Privacy",
        [
          "Il trattamento dei dati personali è descritto nella pagina [[privacy]].",
          "Quando il fornitore tratta dati personali per conto del cliente, il fornitore è il responsabile del trattamento per conto terzi e il cliente è il titolare, salvo diverso accordo sui ruoli. Il fornitore è titolare dei propri dati di account e di fatturazione. Possono essere trattati, per esempio, il nome e l’e-mail di un utente, un numero di telefono facoltativo usato solo come contatto, un codice di accesso inviato per e-mail, un identificatore passkey e i dati salvati dal cliente se contengono dati personali. Il numero di telefono non si usa per accedere."
        ]
      ],
      [
        "11. Disponibilità e manutenzione",
        [
          "Il servizio è tenuto disponibile con uno sforzo ragionevole. Un uso senza interruzioni non è promesso.",
          "Manutenzione, un aggiornamento, un guasto o la rete possono causare un’interruzione. Un’interruzione pianificata più lunga è annunciata in anticipo nel servizio o per e-mail, quando è possibile. Il servizio è fornito così com’è."
        ]
      ],
      [
        "12. Uso consentito",
        [
          "Un servizio di IQSoftCore può essere usato solo per uno scopo lecito.",
          "Il servizio può essere usato per registrare i dati di manutenzione di una flotta e per gestirli.",
          "Il servizio non può essere usato in modo illecito, per diffondere software dannoso, per disturbare il servizio, per accedere ai dati di un altro cliente o per aggirare i diritti di accesso. Il fornitore può limitare l’uso se queste condizioni sono violate in modo grave."
        ]
      ],
      [
        "13. Modifiche delle condizioni e dei prezzi",
        [
          "Il fornitore può modificare queste condizioni e i prezzi. Una modifica è comunicata nel servizio o per e-mail almeno 30 giorni prima che entri in vigore.",
          "Se il cliente non accetta una modifica, può smettere di usare il servizio prima che abbia effetto. Se un cliente impresa continua a usare il servizio dopo la modifica, accetta le condizioni aggiornate. Il silenzio o l’uso continuato di un consumatore non elimina un diritto imperativo. Una modifica di prezzo non riguarda un periodo già fatturato."
        ]
      ],
      [
        "14. Forza maggiore",
        [
          "Il fornitore non risponde di un ritardo o di un’interruzione causati da forza maggiore. Ne sono esempio una guerra, uno sciopero, un’interruzione di corrente o di rete, un ordine di un’autorità o un altro ostacolo che non si può ragionevolmente evitare.",
          "L’ostacolo e la sua fine sono comunicati quando è possibile."
        ]
      ],
      [
        "15. Legge applicabile",
        [
          "A queste condizioni si applica la legge finlandese. Le parti cercano prima di risolvere un disaccordo insieme.",
          "La controversia di un cliente impresa è decisa dal tribunale distrettuale del domicilio del fornitore in Finlandia, salvo che una legge imperativa la collochi altrove. Come si tratta una controversia di un consumatore è indicato al punto 8."
        ]
      ],
      [
        "16. Contatto",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "pl": {
    "metaTitle": "Warunki korzystania | IQSoftCore",
    "metaDescription": "Warunki iqFleetSync i ogólne warunki usług IQSoftCore. Projekt.",
    "title": "Warunki korzystania",
    "draft": "Projekt. To jest projekt prostym językiem ogólnych warunków usług IQSoftCore i warunków iqFleetSync. To nie jest porada prawna. Usługodawca musi sprawdzić tekst przed publikacją.",
    "updated": "Projekt zaktualizowany 2026-10-04.",
    "translationNote": "Tekst fiński jest wersją oficjalną. To tłumaczenie jest pomocą i nie zostało osobno sprawdzone jako tekst prawny.",
    "scope": "To są ogólne warunki usług IQSoftCore. Dotyczą konsumentów i klientów firmowych. Jeśli produkt ma własne warunki, obowiązują one dodatkowo. Cenę pobiera się tylko wtedy, gdy jest opublikowana albo osobno uzgodniona.",
    "privacyLink": "Prywatność",
    "pricing": "Cennik",
    "product": "iqFleetSync",
    "home": "Strona główna",
    "sections": [
      [
        "1. Strony i usługodawca",
        [
          "Usługodawcą jest fińska jednoosobowa działalność toiminimi IqSoftCore, Finlandia.",
          "Numer firmy (Y-tunnus): 3658340-4",
          "Adres: Siihtalantie 56, 62710 Kurejoki, Finlandia.",
          "Klientem może być konsument prywatny albo klient firmowy. Konsument to osoba fizyczna, która zawiera umowę głównie poza swoją działalnością gospodarczą. Klient firmowy to firma lub inna organizacja. Kontakt: info@iqsoftcore.fi i +358 45 133 4009."
        ]
      ],
      [
        "2. Kogo dotyczą warunki",
        [
          "Punkty 1–5 i 9–16 dotyczą wszystkich klientów.",
          "Punkty 6 i 7 dotyczą tylko klientów firmowych i iqFleetSync. Punkt 8 dotyczy tylko konsumentów.",
          "Jeśli bezwzględnie obowiązująca ochrona konsumenta jest dla niego korzystniejsza, obowiązuje ona. Postanowienie, które ograniczałoby takie prawo, nie wiąże konsumenta."
        ]
      ],
      [
        "3. Usługi",
        [
          "IQSoftCore tworzy oprogramowanie, aplikacje i projektuje elektronikę. Konsument prywatny może kupować aplikacje i inne produkty.",
          "iqFleetSync jest tylko usługą dla firm. Konsument nie może otworzyć konta iqFleetSync."
        ]
      ],
      [
        "4. Ceny i VAT",
        [
          "Cena pokazana konsumentowi zawiera VAT. Jeśli zostanie opublikowana cena Tuntilappu albo iqRallyNote, jest pokazana z VAT.",
          "Ceny iqFleetSync są dla klientów firmowych i wynoszą VAT 0%. Podatek VAT dolicza się na fakturze według obowiązującej stawki. Obowiązująca strona [[pricing]] jest częścią tych warunków.",
          "Dla klienta firmowego w innym kraju UE z ważnym numerem VAT faktura stosuje odwrotne obciążenie (reverse charge), gdy ma ono zastosowanie.",
          "Gdy konsument kupuje z innego kraju UE, VAT nalicza się według stawki kraju klienta, jeśli wymaga tego ustawa."
        ]
      ],
      [
        "5. Płatność",
        [
          "Płatne korzystanie opłaca się kartą przez Stripe. Faktura jest miesięczna i z dołu.",
          "Faktura jest płatna 14 dni od daty faktury. Jeśli płatność klienta firmowego się spóźnia, usługodawca może naliczyć odsetki za opóźnienie według fińskiej ustawy o odsetkach (korkolaki) oraz rozsądne koszty windykacji.",
          "Jeśli faktura klienta firmowego jest niezapłacona 7 dni po terminie, konto przechodzi w tryb tylko do odczytu. Zapisane dane można przeglądać, nowych danych nie można zapisać. Tryb tylko do odczytu kończy się automatycznie po dokonaniu płatności.",
          "Termin płatności i postanowienie o opóźnieniu powyżej dotyczą klienta firmowego. Konsument płaci przy zakupie cenę, którą pokazuje usługa. Terminu i postanowienia o opóźnieniu klienta firmowego nie stosuje się wobec konsumenta w sposób, który osłabiałby bezwzględnie obowiązujące prawa."
        ]
      ],
      [
        "6. iqFleetSync (tylko klienci firmowi)",
        [
          "Otwarcie konta iqFleetSync wymaga fińskiego numeru firmy (Y-tunnus).",
          "iqFleetSync to usługa internetowa do utrzymania floty pod adresem fleetsync.iqsoftcore.fi. Dane każdej firmy klienta są oddzielone od innych klientów.",
          "iqFleetSync działa w przeglądarce na telefonie lub komputerze. Kierowcy, serwis i administratorzy nie instalują aplikacji. Naklejka QR identyfikuje jednostkę i nikogo nie loguje. Naklejki można drukować z usługi. Skan aparatem telefonu otwiera jednostkę i dodaje ją do jednostek kierowcy. Administrator widzi, kto używał jednostki i kiedy.",
          "Administrator zaprasza osobę linkiem w e-mailu. Potem logowanie jest odciskiem palca lub twarzą (passkey). Kod e-mail z 6 cyfr jest zapasowy. Wspólny telefon pojazdu może mieć opcjonalny PIN z 4 cyfr, który administrator może zobaczyć. Numer telefonu to tylko opcjonalne pole kontaktowe. Administrator widzi koszty, rozliczenia, osoby i dziennik audytu. Serwis obsługuje jednostki, naklejki QR, raporty, usterki i zlecenia, ale nie koszty, rozliczenia ani osoby. Kierowca widzi tylko przypisane jednostki i jednostki dodane skanem, zgłasza usterki oraz kilometry lub motogodziny i widzi tylko postęp własnych zgłoszeń. Koszty i ceny są ukryte. Raporty mogą mieć podraporty naczepy i zdjęcia. Usterkę można oznaczyć jako niezdatną do ruchu. Serwis potwierdza, oznacza jako w toku i jako naprawioną, a kierowca dostaje informację w aplikacji. Usługa ma zlecenia, historię serwisu, wiersze kosztów dla administratora, plany i terminy w kilometrach, motogodzinach lub dacie oraz przypomnienia e-mailem lub w aplikacji. Jednostkę można zarchiwizować, a osobę edytować lub usunąć, i historia zostaje.",
          "Klient wyznacza administratora, który otwiera konto i zarządza użytkownikami. Administrator decyduje, kto ma dostęp i jakie ma uprawnienia.",
          "Klient odpowiada za to, co jego użytkownicy robią w usłudze. Osobisty kod e-mail, link zaproszenia i passkey są osobiste i nie wolno ich przekazywać. PIN na wspólnym telefonie należy do tej osoby. Klient odpowiada za prawo do zapisania wprowadzonych danych.",
          "Nowy klient może wypróbować iqFleetSync bezpłatnie przez 30 dni.",
          "Okres próbny można zakończyć w dowolnej chwili przed jego końcem. Nie powstaje wtedy opłata. W czasie próby usługa jest używana według tych warunków.",
          "Te ceny są dla klientów firmowych i wynoszą VAT 0%. Podatek VAT dolicza się na fakturze według obowiązującej stawki.",
          "Opłata podstawowa wynosi 10,00 € miesięcznie na firmę klienta. Pojazd, na przykład ciężarówka, to pełna jednostka. Maszyna robocza, na przykład koparka albo ładowarka, to też pełna jednostka. Pojazdy i maszyny wypełniają progi razem. Najpierw liczone są pojazdy, potem maszyny.",
          "Cena jest stopniowana. Pierwsze 15 jednostek kosztuje 1,50 €, jednostki 16–50 kosztują 1,30 €, jednostki 51–100 kosztują 1,10 €, a jednostki powyżej 100 kosztują 0,90 € każda.",
          "Przyczepa to pół jednostki w progu, do którego trafia. Kosztuje połowę ceny pojazdu z tego progu: 0,75 €, 0,65 €, 0,55 € albo 0,45 €. Osprzęt, na przykład tiltrotator, młot hydrauliczny albo zamiatarka, kosztuje 0,00 € i nie liczy się jako jednostka. Użytkowników może być dowolnie wielu i nie są osobno rozliczani.",
          "Cena miesiąca wynika z największej liczby jednostek w tym miesiącu kalendarzowym. Jeśli sprzęt zostanie dodany w trakcie miesiąca, miesiąc jest liczony według liczby szczytowej. Zarchiwizowana jednostka nie jest rozliczana.",
          "Jeśli okres próbny kończy się bez płatności, konto jest tylko do odczytu. Jeśli faktura klienta firmowego jest niezapłacona 7 dni po terminie, konto pozostaje tylko do odczytu, aż faktura zostanie zapłacona.",
          "W trybie tylko do odczytu zapisane dane można przeglądać. Nowych zgłoszeń i zmian nie można zapisać. Tryb tylko do odczytu kończy się automatycznie po dokonaniu płatności."
        ]
      ],
      [
        "7. Wypowiedzenie i odpowiedzialność (tylko klienci firmowi)",
        [
          "Ten punkt dotyczy tylko klientów firmowych. Nie dotyczy konsumenta i nie ogranicza jego bezwzględnie obowiązujących praw.",
          "[[prominent]]iqFleetSync jest wyłącznie narzędziem do ewidencji, przypomnień i raportowania. Klient ponosi wyłączną odpowiedzialność za dopuszczenie pojazdów i maszyn do ruchu, za jakość utrzymania, za przeglądy, za obowiązki prawne i za decyzję o użyciu pojazdu. IqSoftCore nie odpowiada za szkody, wypadki ani awarie pojazdów lub maszyn. Dotyczy to także sytuacji, w której pominięto przypomnienie, dane wpisano błędnie albo kierowca użył pojazdu niezdolnego do ruchu. To postanowienie nie wpływa na prawa konsumenta.",
          "Klient firmowy sam wypowiada płatną usługę w aplikacji w miejscu Tilaus ja laskutus → Irtisano palvelu (Subskrypcja i rozliczenia → Wypowiedz usługę) albo e-mailem na info@iqsoftcore.fi. Wypowiedzenie działa z końcem już rozpoczętego okresu rozliczeniowego. Miesiąc już zafakturowany nie podlega zwrotowi, chyba że bezwzględnie obowiązujące prawo wymaga zwrotu.",
          "Przerwanie okresu próbnego nic nie kosztuje. Gdy wypowiedzenie zaczyna działać, dane klienta firmowego są przechowywane przez 90 dni, aby klient mógł je przeglądać i wyeksportować. Potem dane są usuwane automatycznie. Zostają tylko dane fakturowe, których wymaga prawo o rachunkowości.",
          "Usługodawca może zakończyć użycie przez klienta, jeśli klient istotnie narusza te warunki i nie naprawi tego po pisemnym upomnieniu. Jeśli cała usługa jest zamykana, informuje się o tym wcześniej, gdy to możliwe.",
          "W zakresie, w jakim pozwala na to bezwzględnie obowiązujące prawo fińskie, usługodawca nie odpowiada za szkody pośrednie, utracony zysk ani utracone dane.",
          "Odpowiedzialność za szkodę bezpośrednią jest ograniczona do opłat, które klient zapłacił za tę usługę w ciągu 12 miesięcy przed szkodą. Jeśli opłat nie było, limit wynosi 0 €.",
          "Ograniczenie nie dotyczy szkody wyrządzonej umyślnie albo przez rażące niedbalstwo ani odpowiedzialności, której prawo nie pozwala ograniczyć."
        ]
      ],
      [
        "8. Konsumenci",
        [
          "Do konsumenta stosuje się bezwzględnie obowiązującą ochronę konsumenta Finlandii i UE. Sprzeczne postanowienie ustępuje.",
          "Limit odpowiedzialności z punktu 7, zasada, że już rozliczony okres nie podlega zwrotowi, oraz postanowienie, że iqFleetSync jest wyłącznie narzędziem do ewidencji, przypomnień i raportowania, nie ograniczają praw konsumenta.",
          "Przy sprzedaży na odległość konsument ma 14 dni na odstąpienie od umowy o usługę cyfrową lub treść cyfrową. Termin liczy się od dnia umowy.",
          "Prawo odstąpienia wygasa, jeśli w tym terminie konsument wyraźnie żąda, aby dostawa albo wykonanie się rozpoczęło, i jednocześnie potwierdza, że traci to prawo, gdy dostawa treści cyfrowej się rozpoczęła albo gdy usługa cyfrowa została w całości wykonana.",
          "Do tego czasu konsument może odstąpić jasnym zawiadomieniem, na przykład e-mailem na info@iqsoftcore.fi. Usługodawca zwraca otrzymaną płatność w ciągu 14 dni od zawiadomienia w zakresie, w jakim ustawa wymaga zwrotu.",
          "Konsument może skierować spór do fińskiej komisji sporów konsumenckich Kuluttajariitalautakunta (www.kuluttajariita.fi). Unijna platforma internetowego rozstrzygania sporów została zamknięta 20.7.2025 na podstawie rozporządzenia (UE) 2024/3228, więc nie ma do niej linku. Lista organów rozstrzygania sporów jest pod adresem https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Konsument mieszkający w innym kraju UE nie traci bezwzględnie obowiązującej ochrony swojego kraju."
        ]
      ],
      [
        "9. Dane klienta",
        [
          "Dane floty, serwisu i użytkowników, które klient zapisuje w usłudze, należą do klienta.",
          "Usługodawca nie sprzedaje tych danych. Służą do świadczenia usługi, rozliczeń, bezpieczeństwa usługi i obowiązków wymaganych przez prawo.",
          "Klient może poprosić o eksport swoich danych na adres info@iqsoftcore.fi. Dane są przekazywane w zwykłym formacie czytelnym maszynowo po obsłużeniu prośby.",
          "Dane klienta firmowego są przechowywane przez 90 dni po wypowiedzeniu. W tym czasie klient firmowy może wyeksportować dane, także prosząc o eksport na info@iqsoftcore.fi. Po 90 dniach dane są usuwane automatycznie. Potem zostają tylko dane fakturowe, których wymaga prawo o rachunkowości.",
          "Dane konsumenta są przetwarzane tak, aby przestrzegać bezwzględnej ochrony konsumenta i ochrony danych. Konsument może poprosić o eksport albo usunięcie swoich danych na info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Prywatność",
        [
          "Przetwarzanie danych osobowych jest opisane na stronie [[privacy]].",
          "Gdy usługodawca przetwarza dane osobowe na rzecz klienta, usługodawca jest podmiotem przetwarzającym, a klient administratorem, chyba że role uzgodniono inaczej. Usługodawca jest administratorem własnych danych konta i rozliczeń. Przetwarzane mogą być na przykład imię i e-mail użytkownika, opcjonalny numer telefonu używany tylko jako kontakt, kod logowania wysyłany e-mailem, identyfikator passkey oraz dane zapisane przez klienta, jeśli zawierają dane osobowe. Numer telefonu nie służy do logowania."
        ]
      ],
      [
        "11. Dostępność i utrzymanie",
        [
          "Usługa jest utrzymywana w dostępności rozsądnym staraniem. Nie obiecuje się działania bez przerw.",
          "Konserwacja, aktualizacja, awaria albo sieć mogą spowodować przerwę. Planowaną dłuższą przerwę podaje się z wyprzedzeniem w usłudze albo e-mailem, gdy to możliwe. Usługa jest świadczona w takim stanie, w jakim jest."
        ]
      ],
      [
        "12. Dozwolone użycie",
        [
          "Z usługi IQSoftCore można korzystać tylko w zgodnym z prawem celu.",
          "Usługi można używać do zapisywania danych serwisowych floty i do zarządzania nimi.",
          "Usługi nie wolno używać niezgodnie z prawem, do rozsyłania złośliwego oprogramowania, do zakłócania usługi, do sięgania po dane innego klienta ani do obchodzenia uprawnień. Usługodawca może ograniczyć użycie, jeśli te warunki zostaną poważnie naruszone."
        ]
      ],
      [
        "13. Zmiany warunków i cen",
        [
          "Usługodawca może zmienić te warunki i ceny. O zmianie informuje w usłudze albo e-mailem co najmniej 30 dni przed jej wejściem w życie.",
          "Jeśli klient nie przyjmuje zmiany, może zaprzestać używania przed jej wejściem w życie. Jeśli klient firmowy nadal korzysta z usługi po zmianie, przyjmuje zaktualizowane warunki. Milczenie albo dalsze korzystanie przez konsumenta nie odbiera bezwzględnie obowiązującego prawa. Zmiana ceny nie dotyczy okresu już rozliczonego."
        ]
      ],
      [
        "14. Siła wyższa",
        [
          "Usługodawca nie odpowiada za opóźnienie albo przerwę spowodowane siłą wyższą. Chodzi na przykład o wojnę, strajk, przerwę w zasilaniu albo w sieci, nakaz organu albo inną przeszkodę, której nie da się rozsądnie uniknąć.",
          "O przeszkodzie i jej ustaniu informuje się, gdy to możliwe."
        ]
      ],
      [
        "15. Prawo właściwe",
        [
          "Do tych warunków stosuje się prawo fińskie. Strony najpierw próbują rozstrzygnąć spór wspólnie.",
          "Spór klienta firmowego rozpoznaje sąd rejonowy miejsca siedziby usługodawcy w Finlandii, chyba że bezwzględnie obowiązujące prawo kieruje go gdzie indziej. Sposób rozpoznania sporu konsumenta opisuje punkt 8."
        ]
      ],
      [
        "16. Kontakt",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finlandia. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "cs": {
    "metaTitle": "Podmínky použití | IQSoftCore",
    "metaDescription": "Podmínky iqFleetSync a obecné podmínky služeb IQSoftCore. Návrh.",
    "title": "Podmínky použití",
    "draft": "Návrh. Toto je návrh srozumitelným jazykem obecných podmínek služeb IQSoftCore a podmínek iqFleetSync. Není to právní porada. Poskytovatel musí text zkontrolovat před zveřejněním.",
    "updated": "Návrh aktualizován 2026-10-04.",
    "translationNote": "Finský text je oficiální verze. Tento překlad je pomůcka a nebyl samostatně posouzen jako právní text.",
    "scope": "Toto jsou obecné podmínky služeb IQSoftCore. Platí pro spotřebitele i firemní zákazníky. Pokud má produkt vlastní podmínky, platí navíc. Cena se účtuje jen tehdy, když je zveřejněná nebo zvlášť dohodnutá.",
    "privacyLink": "Ochrana soukromí",
    "pricing": "Ceník",
    "product": "iqFleetSync",
    "home": "Domů",
    "sections": [
      [
        "1. Strany a poskytovatel",
        [
          "Poskytovatelem je finská živnost toiminimi IqSoftCore, Finsko.",
          "IČ (Y-tunnus): 3658340-4",
          "Adresa: Siihtalantie 56, 62710 Kurejoki, Finsko.",
          "Zákazníkem může být soukromý spotřebitel nebo firemní zákazník. Spotřebitel je fyzická osoba, která smlouvu uzavírá převážně mimo své podnikání. Firemní zákazník je firma nebo jiná organizace. Kontakt: info@iqsoftcore.fi a +358 45 133 4009."
        ]
      ],
      [
        "2. Koho se podmínky týkají",
        [
          "Body 1–5 a 9–16 platí pro všechny zákazníky.",
          "Body 6 a 7 platí jen pro firemní zákazníky a iqFleetSync. Bod 8 platí jen pro spotřebitele.",
          "Pokud je kogentní ochrana spotřebitele pro spotřebitele výhodnější, platí ona. Ujednání, které by takové právo omezilo, spotřebitele nezavazuje."
        ]
      ],
      [
        "3. Služby",
        [
          "IQSoftCore dělá software, aplikace a návrh elektroniky. Soukromý spotřebitel může kupovat aplikace a další produkty.",
          "iqFleetSync je jen služba pro firmy. Spotřebitel si nemůže otevřít účet iqFleetSync."
        ]
      ],
      [
        "4. Ceny a DPH",
        [
          "Cena ukázaná spotřebiteli zahrnuje DPH. Pokud se zveřejní cena Tuntilappu nebo iqRallyNote, ukáže se včetně DPH.",
          "Ceny iqFleetSync jsou pro firemní zákazníky a jsou DPH 0 %. Daň z přidané hodnoty se připočte na faktuře podle platné sazby. Platná stránka [[pricing]] je součástí těchto podmínek.",
          "Pro firemního zákazníka v jiné zemi EU s platným DIČ se na faktuře použije přenesení daňové povinnosti (reverse charge), pokud se uplatní.",
          "Když spotřebitel nakupuje z jiné země EU, DPH se účtuje podle sazby země zákazníka, pokud to zákon vyžaduje."
        ]
      ],
      [
        "5. Platba",
        [
          "Placené užívání se platí kartou přes Stripe. Faktura je měsíční a zpětně.",
          "Faktura je splatná 14 dní od data. Při prodlení firemního zákazníka může poskytovatel účtovat úrok podle finského zákona o úrocích (korkolaki) a přiměřené náklady vymáhání.",
          "Pokud je faktura firemního zákazníka nezaplacená 7 dní po splatnosti, účet přejde do režimu jen pro čtení. Uložené údaje lze prohlížet, nové údaje nelze uložit. Režim jen pro čtení skončí automaticky, jakmile je platba provedena.",
          "Splatnost a ujednání o prodlení výše platí pro firemního zákazníka. Spotřebitel platí při nákupu cenu, kterou služba ukáže. Splatnost a ujednání o prodlení firemního zákazníka se vůči spotřebiteli nepoužijí tak, aby oslabily kogentní práva."
        ]
      ],
      [
        "6. iqFleetSync (jen firemní zákazníci)",
        [
          "Otevření účtu iqFleetSync vyžaduje finské IČ (Y-tunnus).",
          "iqFleetSync je webová služba pro údržbu vozového parku na adrese fleetsync.iqsoftcore.fi. Údaje každé zákaznické firmy jsou oddělené od ostatních zákazníků.",
          "iqFleetSync běží v prohlížeči na telefonu nebo počítači. Řidiči, údržba a správci neinstalují aplikaci. QR štítek identifikuje jednotku a nikoho nepřihlásí. Štítky se tisknou ze služby. Sken fotoaparátem telefonu otevře jednotku a přidá ji k jednotkám řidiče. Správce vidí, kdo jednotku použil a kdy.",
          "Správce pozve osobu odkazem v e-mailu. Potom je přihlášení otiskem prstu nebo obličejem (passkey). Šestimístný e-mailový kód je záloha. Sdílený telefon vozidla může mít volitelný PIN o 4 číslicích, který správce může zobrazit. Telefonní číslo je jen volitelný kontakt. Správce vidí náklady, fakturaci, osoby a auditní záznam. Údržba spravuje jednotky, QR štítky, hlášení, závady a pracovní příkazy, ale ne náklady, fakturaci ani osoby. Řidič vidí jen přidělené jednotky a jednotky přidané skenem, hlásí závady a km nebo motohodiny a vidí jen postup vlastních hlášení. Náklady a ceny se nezobrazují. Hlášení mohou obsahovat dílčí hlášení návěsu a fotografie. Závadu lze označit jako nezpůsobilou k provozu. Údržba ji potvrdí, označí jako rozpracovanou a jako opravenou a řidič dostane zprávu v aplikaci. Služba má pracovní příkazy, historii údržby, řádky nákladů pro správce, servisní plány a termíny v kilometrech, motohodinách nebo datu a připomínky e-mailem nebo v aplikaci. Jednotku lze archivovat a osobu upravit nebo odebrat, a historie zůstane.",
          "Zákazník určí správce, který účet otevře a spravuje uživatele. Správce rozhoduje, kdo dostane přístup a jaká práva má.",
          "Zákazník odpovídá za to, co jeho uživatelé ve službě dělají. Osobní e-mailový kód, odkaz na pozvánku a passkey jsou osobní a nesmí se předávat dál. PIN na sdíleném telefonu patří této osobě. Zákazník odpovídá za to, že zadané údaje smí uložit.",
          "Nový zákazník může iqFleetSync zkoušet 30 dní zdarma.",
          "Zkušební dobu lze kdykoli před koncem ukončit. Nevznikne z toho cena. Během zkoušky se služba používá podle těchto podmínek.",
          "Tyto ceny jsou pro firemní zákazníky a jsou DPH 0 %. Daň z přidané hodnoty se připočte na faktuře podle platné sazby.",
          "Základní poplatek je 10,00 € měsíčně na zákaznickou firmu. Vozidlo, například nákladní auto, je celá jednotka. Pracovní stroj, například bagr nebo kolový nakladač, je také celá jednotka. Vozidla a stroje plní pásma společně. Nejdřív se počítají vozidla, potom stroje.",
          "Cena je odstupňovaná. Prvních 15 jednotek je za 1,50 €, jednotky 16–50 za 1,30 €, jednotky 51–100 za 1,10 € a jednotky nad 100 za 0,90 € každá.",
          "Přívěs je půl jednotky v pásmu, do kterého spadá. Stojí polovinu ceny vozidla toho pásma: 0,75 €, 0,65 €, 0,55 € nebo 0,45 €. Nástavba, například tiltrotátor, hydraulické kladivo nebo zametač, stojí 0,00 € a nepočítá se jako jednotka. Uživatelů může být neomezeně a neúčtují se.",
          "Měsíční cena vychází z nejvyššího počtu jednotek v daném kalendářním měsíci. Když se během měsíce přidá technika, měsíc se účtuje podle nejvyššího počtu. Archivovaná jednotka se neúčtuje.",
          "Když zkušební doba skončí bez platby, účet je jen pro čtení. Pokud je faktura firemního zákazníka nezaplacená 7 dní po splatnosti, účet zůstane jen pro čtení, dokud není faktura zaplacena.",
          "V režimu jen pro čtení lze uložené údaje prohlížet. Nová hlášení a změny nelze uložit. Režim jen pro čtení skončí automaticky, jakmile je platba provedena."
        ]
      ],
      [
        "7. Zrušení a odpovědnost (jen firemní zákazníci)",
        [
          "Tento bod platí jen pro firemní zákazníky. Neplatí pro spotřebitele a neomezuje jeho kogentní práva.",
          "[[prominent]]iqFleetSync je jen nástroj pro evidenci, připomínky a výkazy. Zákazník sám odpovídá za způsobilost vozidel a strojů k provozu, za kvalitu údržby, za kontroly, za zákonné povinnosti a za rozhodnutí vozidlo použít. IqSoftCore neodpovídá za škody, nehody ani poruchy vozidel nebo strojů. To platí i tehdy, když byla připomínka přehlédnuta, údaj byl zapsán chybně nebo řidič použil vozidlo nezpůsobilé k provozu. Toto ujednání se nedotýká práv spotřebitele.",
          "Firemní zákazník zruší placenou službu sám v aplikaci v části Tilaus ja laskutus → Irtisano palvelu (Předplatné a fakturace → Zrušit službu), nebo e-mailem na info@iqsoftcore.fi. Zrušení platí od konce už započatého fakturačního období. Už vyfakturovaný měsíc se nevrací, pokud to nevynucuje kogentní zákon.",
          "Ukončení zkušební doby nic nestojí. Jakmile zrušení nabude účinnosti, údaje firemního zákazníka se uchovávají 90 dní, aby je zákazník mohl prohlížet a exportovat. Potom se údaje smažou automaticky. Zůstanou jen fakturační údaje, které vyžaduje účetní zákon.",
          "Poskytovatel může ukončit užívání zákazníkem, pokud zákazník tyto podmínky podstatně poruší a nenapraví to po písemné výzvě. Pokud se celá služba ukončuje, oznámí se to předem, když je to možné.",
          "V rozsahu, v jakém to dovoluje finské kogentní právo, poskytovatel neodpovídá za nepřímou škodu, ušlý zisk ani ztracené údaje.",
          "Odpovědnost za přímou škodu je omezena na poplatky, které zákazník za tuto službu zaplatil v 12 měsících před škodou. Pokud žádné poplatky nebyly, strop je 0 €.",
          "Omezení se netýká škody způsobené úmyslně nebo hrubou nedbalostí ani odpovědnosti, kterou zákon nedovoluje omezit."
        ]
      ],
      [
        "8. Spotřebitelé",
        [
          "Na spotřebitele se vztahuje kogentní ochrana spotřebitele Finska a EU. Odporující ujednání ustoupí.",
          "Strop odpovědnosti v bodě 7, pravidlo, že už vyfakturované období se nevrací, a ujednání, že iqFleetSync je jen nástroj pro evidenci, připomínky a výkazy, neomezují práva spotřebitele.",
          "Při prodeji na dálku má spotřebitel 14 dní na odstoupení od smlouvy o digitální službě nebo digitálním obsahu. Lhůta běží ode dne smlouvy.",
          "Právo odstoupit končí, pokud spotřebitel v této lhůtě výslovně požádá, aby dodání nebo plnění začalo, a zároveň potvrdí, že o právo přijde, jakmile dodání digitálního obsahu začalo nebo jakmile byla digitální služba zcela provedena.",
          "Do té doby může spotřebitel odstoupit jasným oznámením, například e-mailem na info@iqsoftcore.fi. Poskytovatel vrátí přijatou platbu do 14 dnů od oznámení v rozsahu, v jakém zákon vracení vyžaduje.",
          "Spotřebitel může spor předložit finskému výboru pro spotřebitelské spory Kuluttajariitalautakunta (www.kuluttajariita.fi). Platforma EU pro online řešení sporů byla 20. 7. 2025 uzavřena podle nařízení (EU) 2024/3228, proto na ni není odkaz. Seznam orgánů pro řešení sporů je na https://consumer-redress.ec.europa.eu/dispute-resolution-bodies.",
          "Spotřebitel, který bydlí v jiné zemi EU, neztrácí kogentní ochranu své země."
        ]
      ],
      [
        "9. Údaje zákazníka",
        [
          "Údaje o vozovém parku, údržbě a uživatelích, které zákazník ve službě uloží, patří zákazníkovi.",
          "Poskytovatel tyto údaje neprodává. Používají se k poskytování služby, k fakturaci, k zabezpečení služby a ke splnění povinností podle zákona.",
          "Zákazník může požádat o export svých údajů na info@iqsoftcore.fi. Údaje se předají v běžném strojově čitelném formátu, jakmile je žádost vyřízena.",
          "Údaje firemního zákazníka se uchovávají 90 dní po zrušení. V té době může firemní zákazník údaje exportovat, také žádostí o export na info@iqsoftcore.fi. Po 90 dnech se údaje smažou automaticky. Potom se uchovávají jen fakturační údaje, které vyžaduje účetní zákon.",
          "Údaje spotřebitele se zpracovávají tak, aby byla dodržena kogentní ochrana spotřebitele a ochrana údajů. Spotřebitel může požádat o export nebo výmaz svých údajů na info@iqsoftcore.fi."
        ]
      ],
      [
        "10. Soukromí",
        [
          "Zpracování osobních údajů je popsáno na stránce [[privacy]].",
          "Když poskytovatel zpracovává osobní údaje pro zákazníka, je poskytovatel zpracovatelem a zákazník správcem, pokud nejsou role dohodnuty jinak. Poskytovatel je správcem vlastních údajů o účtu a fakturaci. Zpracovávány mohou být například jméno a e-mail uživatele, volitelné telefonní číslo použité jen jako kontakt, přihlašovací kód odeslaný e-mailem, identifikátor passkey a údaje, které zákazník uloží, pokud obsahují osobní údaje. Telefonní číslo se k přihlášení nepoužívá."
        ]
      ],
      [
        "11. Dostupnost a údržba",
        [
          "Služba je udržována dostupná s přiměřeným úsilím. Nepřerušovaný provoz se neslibuje.",
          "Údržba, aktualizace, závada nebo síť mohou způsobit výpadek. Plánovaný delší výpadek se oznamuje předem ve službě nebo e-mailem, když je to možné. Služba se poskytuje tak, jak je."
        ]
      ],
      [
        "12. Dovolené použití",
        [
          "Službu IQSoftCore lze používat jen k zákonnému účelu.",
          "Službu lze používat k zápisu údajů o údržbě vozového parku a k jejich správě.",
          "Službu nelze používat protiprávně, k šíření škodlivého softwaru, k narušování služby, k přístupu k údajům jiného zákazníka ani k obcházení oprávnění. Poskytovatel může použití omezit, pokud jsou tyto podmínky vážně porušeny."
        ]
      ],
      [
        "13. Změny podmínek a cen",
        [
          "Poskytovatel může tyto podmínky a ceny změnit. Změna se oznámí ve službě nebo e-mailem nejméně 30 dní předtím, než nabude účinnosti.",
          "Pokud zákazník změnu nepřijme, může používání ukončit před její účinností. Pokud firemní zákazník službu po změně dál používá, přijímá aktualizované podmínky. Mlčení nebo další používání spotřebitelem neruší kogentní spotřebitelské právo. Změna ceny se netýká období, které už bylo vyfakturováno."
        ]
      ],
      [
        "14. Vyšší moc",
        [
          "Poskytovatel neodpovídá za prodlevu nebo výpadek způsobený vyšší mocí. Jde například o válku, stávku, výpadek elektřiny nebo sítě, příkaz úřadu nebo jinou překážku, které se nelze rozumně vyhnout.",
          "O překážce a jejím konci se informuje, když je to možné."
        ]
      ],
      [
        "15. Rozhodné právo",
        [
          "Na tyto podmínky se vztahuje finské právo. Strany se nejprve pokusí neshodu vyřešit společně.",
          "Spor firemního zákazníka projedná okresní soud v sídle poskytovatele ve Finsku, pokud kogentní zákon neurčí jinak. Jak se řeší spor spotřebitele, je v bodě 8."
        ]
      ],
      [
        "16. Kontakt",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, Finsko. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "ja": {
    "metaTitle": "利用規約 | IQSoftCore",
    "metaDescription": "iqFleetSyncの利用規約とIQSoftCoreのサービスの一般条件。草案。",
    "title": "利用規約",
    "draft": "草案です。これは IQSoftCore のサービスの一般条件と iqFleetSync の条件を平易な言葉で書いた草案であり、法的助言ではありません。公開前に提供者が本文を確認する必要があります。",
    "updated": "草案の更新日 2026-10-04。",
    "translationNote": "フィンランド語の本文が正式版です。この訳は理解のためのもので、法律文書として別に審査されたものではありません。",
    "scope": "これは IQSoftCore のサービスの一般条件です。消費者と事業者顧客の両方に適用されます。製品に独自の条件がある場合は、それも併せて適用されます。価格は、公表されているか別途合意された場合にだけ請求します。",
    "privacyLink": "プライバシー",
    "pricing": "料金",
    "product": "iqFleetSync",
    "home": "ホーム",
    "sections": [
      [
        "1. 当事者と提供者",
        [
          "提供者は、フィンランドの個人事業主 toiminimi IqSoftCore です。",
          "事業者番号（Y-tunnus）: 3658340-4",
          "住所: Siihtalantie 56, 62710 Kurejoki, フィンランド。",
          "顧客は、個人の消費者または事業者顧客です。消費者とは、主に自己の事業以外のために契約する自然人です。事業者顧客とは、会社またはその他の団体です。連絡先: info@iqsoftcore.fi および +358 45 133 4009。"
        ]
      ],
      [
        "2. この条件の対象",
        [
          "第1項から第5項および第9項から第16項は、すべての顧客に適用されます。",
          "第6項と第7項は、事業者顧客と iqFleetSync にだけ適用されます。第8項は消費者にだけ適用されます。",
          "強行的な消費者保護の方が消費者に有利な場合は、それが優先します。そのような権利を制限する条項は、消費者を拘束しません。"
        ]
      ],
      [
        "3. サービス",
        [
          "IQSoftCore は、ソフトウェア、アプリ、電子設計を行います。個人の消費者もアプリやその他の製品を購入できます。",
          "iqFleetSync は事業者向けのサービスだけです。消費者は iqFleetSync のアカウントを開けません。"
        ]
      ],
      [
        "4. 価格と消費税",
        [
          "消費者に示す価格には消費税が含まれます。Tuntilappu または iqRallyNote の価格を公表する場合は、税込で示します。",
          "iqFleetSync の価格は事業者顧客向けで、消費税 0% です。消費税は、適用される税率で請求書に加算します。現行の [[pricing]] はこの条件の一部です。",
          "有効なVAT番号を持つ他のEU加盟国の事業者顧客には、該当する場合、請求書でリバースチャージ（reverse charge）を使います。",
          "他のEU加盟国の消費者が購入する場合、法律が求めるときは、顧客の国の税率で消費税を請求します。"
        ]
      ],
      [
        "5. 支払い",
        [
          "有料利用はStripeのカードで支払います。請求は毎月、後払いです。",
          "請求書は、請求日の14日後が期限です。事業者顧客の支払いが遅れると、提供者はフィンランドの利息法（korkolaki）に基づく遅延利息と合理的な回収費用を請求できます。",
          "事業者顧客の請求書が支払期限の7日後も未払いのとき、アカウントは閲覧専用になります。保存済みのデータは見られますが、新しいデータは保存できません。閲覧専用は、支払いが完了すると自動的に解除されます。",
          "上の支払期限と遅延の定めは事業者顧客に適用されます。消費者は、購入時にサービスが表示する価格を支払います。事業者顧客の支払期限と遅延の定めは、強行的な消費者の権利を弱める形では消費者に適用しません。"
        ]
      ],
      [
        "6. iqFleetSync（事業者顧客のみ）",
        [
          "iqFleetSync のアカウント開設には、フィンランドの事業者番号（Y-tunnus）が必要です。",
          "iqFleetSync は fleetsync.iqsoftcore.fi にある車両・機械の整備用ウェブサービスです。各顧客会社のデータは他の顧客と分けて保管します。",
          "iqFleetSyncは電話またはパソコンのブラウザで動きます。運転者、整備、管理者はアプリをインストールしません。QRシールはユニットを識別し、誰もログインさせません。シールはサービスから印刷できます。電話のカメラで読み取るとユニットが開き、運転者の自分のユニットに追加されます。管理者は、誰がいつユニットを使ったかを見ます。",
          "管理者がメールのリンクで人を招待します。その後のログインは指紋または顔（パスキー）です。代わりにメールの6桁コードがあります。共用の車両電話には任意の4桁PINを付けられ、管理者はそれを見られます。電話番号は任意の連絡先項目だけです。管理者は費用、請求、担当者、監査ログを見ます。整備はユニット、QRシール、報告、不具合、作業指示を扱い、費用、請求、担当者は扱いません。運転者は割り当てられたユニットと読み取りで追加したユニットだけを見て、不具合とキロまたはアワーを記録し、自分の不具合の進み具合だけを見ます。費用と価格は表示しません。報告にはトレーラーの子報告と写真を含められます。不具合は走行不可とできます。整備が確認し、作業中にし、完了にし、運転者にはアプリ内で知らせます。サービスには作業指示、整備履歴、管理者向けの費用行、キロ・アワー・日付の計画と期限、メールまたはアプリ内の通知があります。ユニットはアーカイブでき、担当者は編集または削除でき、履歴は残ります。",
          "顧客は、アカウントを開きユーザーを管理する管理者を指名します。管理者は、誰にどの権限を与えるかを決めます。",
          "顧客は、自社ユーザーのサービス内の行為について責任を負います。個人のメールコード、招待リンク、パスキーは本人用であり、他人に渡してはなりません。共用電話のPINはその人のものです。顧客は、入力するデータを保存する権利があることについて責任を負います。",
          "新しい顧客は iqFleetSync を30日間無料で試せます。",
          "試用は終了前ならいつでも止められます。料金は発生しません。試用中もこの規約に従ってサービスを使います。",
          "これらの価格は事業者顧客向けで、消費税 0% です。消費税は、適用される税率で請求書に加算します。",
          "基本料金は顧客会社ごとに月 10.00 € です。車両（例: トラック）は1単位です。作業機械（例: 油圧ショベル、ホイールローダー）も1単位です。車両と作業機械は一緒に料金段階を埋めます。先に車両、その次に作業機械を数えます。",
          "料金は累進です。最初の15単位は 1.50 €、16–50 は 1.30 €、51–100 は 1.10 €、100を超える単位はそれぞれ 0.90 € です。",
          "トレーラーは入った段階の0.5単位です。その段階の車両価格の半分、つまり 0.75 €、0.65 €、0.55 €、0.45 € のいずれかです。アタッチメント（チルトローテーター、油圧ブレーカー、スイーパーなど）は 0.00 € で、単位に数えません。ユーザー数に制限はなく、ユーザーごとの料金はありません。",
          "月額は、その暦月の最大単位数で計算します。月の途中で機材を増やすと、その月は最大数で請求します。 アーカイブした単位は請求しません。",
          "試用が終わり支払いがない場合、アカウントは閲覧専用になります。事業者顧客の請求書が支払期限の7日後も未払いのとき、請求が支払われるまでアカウントは閲覧専用のままです。",
          "閲覧専用では保存済みのデータを見られます。新しい報告や変更は保存できません。閲覧専用は、支払いが完了すると自動的に解除されます。"
        ]
      ],
      [
        "7. 解約と責任（事業者顧客のみ）",
        [
          "この項は事業者顧客にだけ適用されます。消費者には適用されず、消費者の強行的な権利を制限しません。",
          "[[prominent]]iqFleetSync は、記録、リマインダー、報告のための道具にすぎません。車両と作業機械の走行安全性、整備の質、点検、法令上の義務、および車両を使用する判断は、顧客が単独で責任を負います。IqSoftCore は、車両または作業機械の損害、事故、故障について責任を負いません。リマインダーを見逃した場合、データを誤って入力した場合、または運転者が走行に適さない車両を使用した場合も含まれます。この条項は消費者の権利に影響しません。",
          "事業者顧客は、アプリの Tilaus ja laskutus → Irtisano palvelu（契約と請求 → サービスを解約）から自分で有料サービスを解約するか、info@iqsoftcore.fi にメールします。解約は、すでに始まった請求期間の終わりに効力を生じます。すでに請求した月は、強行法規が求める場合を除き返金しません。",
          "試用の中止に料金はかかりません。解約の効力が生じたあと、事業者顧客のデータは90日間保持され、顧客は閲覧と書き出しができます。その後、データは自動的に削除されます。残るのは、会計法が求める請求データだけです。",
          "顧客がこの規約に重大に違反し、書面の通知後も是正しない場合、提供者は利用を終了できます。サービス全体を終了する場合は、可能なときは事前に知らせます。",
          "フィンランドの強行法規が許す範囲で、提供者は間接損害、得られなかった利益、失われたデータについて責任を負いません。",
          "直接損害の責任は、損害の前12か月に顧客がそのサービスに支払った料金を上限とします。支払いがなければ上限は 0 € です。",
          "この制限は、故意または重大な過失による損害、および法律上制限できない責任には適用しません。"
        ]
      ],
      [
        "8. 消費者",
        [
          "消費者には、フィンランドとEUの強行的な消費者保護が適用されます。これに反する条項は後退します。",
          "第7項の責任の上限、すでに請求した期間を返金しない規則、および iqFleetSync が記録、リマインダー、報告のための道具にすぎないという条項は、消費者の権利を制限しません。",
          "通信販売では、消費者はデジタルサービスまたはデジタルコンテンツについて、契約日から14日間の撤回権を持ちます。",
          "撤回権は、撤回期間中に消費者が提供または履行の開始を明示的に求め、かつ、デジタルコンテンツの提供が始まったとき、またはデジタルサービスが完全に履行されたときに権利を失うことを認めた場合に終わります。",
          "それまでは、消費者は明確な通知、たとえば info@iqsoftcore.fi へのメールで撤回できます。提供者は、法律が返金を求める範囲で、通知から14日以内に受領した代金を返します。",
          "消費者は、フィンランドの消費者紛争委員会 Kuluttajariitalautakunta（www.kuluttajariita.fi）に紛争を持ち込めます。EUのオンライン紛争解決プラットフォームは、規則（EU）2024/3228 により2025年7月20日に終了したため、リンクはありません。紛争解決機関の一覧は https://consumer-redress.ec.europa.eu/dispute-resolution-bodies にあります。",
          "他のEU加盟国に住む消費者は、自国の強行的な保護を失いません。"
        ]
      ],
      [
        "9. 顧客のデータ",
        [
          "顧客がサービスに保存した車両、整備、ユーザーのデータは顧客のものです。",
          "提供者はこのデータを販売しません。サービスの提供、請求、安全、法律上の義務のために使います。",
          "顧客は info@iqsoftcore.fi にデータの書き出しを依頼できます。依頼を処理したあと、一般的な機械可読形式で渡します。",
          "事業者顧客のデータは、解約後90日間保持されます。この間、事業者顧客はデータを書き出せます。info@iqsoftcore.fi に書き出しを依頼することもできます。90日後、データは自動的に削除されます。その後残るのは、会計法が求める請求データだけです。",
          "消費者のデータは、強行的な消費者保護とデータ保護に従って取り扱います。消費者は info@iqsoftcore.fi に、データの書き出しまたは削除を依頼できます。"
        ]
      ],
      [
        "10. プライバシー",
        [
          "個人データの取り扱いは [[privacy]] のページに記載します。",
          "提供者が顧客のために個人データを扱うとき、別の合意がなければ提供者は処理者、顧客は管理者です。提供者は自社のアカウントと請求データの管理者です。扱われうるデータには、ユーザーの氏名とメール、連絡先としてだけの任意の電話番号、メールで送るログインコード、パスキー識別子、個人データを含む顧客の保存データがあります。電話番号はログインには使いません。"
        ]
      ],
      [
        "11. 可用性と保守",
        [
          "サービスは合理的な努力で利用できるよう保ちます。中断のない利用は約束しません。",
          "保守、更新、障害、通信が中断の原因になることがあります。計画した長めの中断は、可能なときは事前にサービス内またはメールで知らせます。サービスはその時点の状態で提供します。"
        ]
      ],
      [
        "12. 許される利用",
        [
          "IQSoftCore のサービスは、合法な目的にだけ使えます。",
          "サービスは、車両・機械の整備データの記録とその管理に使えます。",
          "違法な利用、悪意のあるソフトウェアの配布、サービスの妨害、他の顧客のデータへのアクセス、権限の回避はできません。この規約に重大な違反がある場合、提供者は利用を制限できます。"
        ]
      ],
      [
        "13. 条件と価格の変更",
        [
          "提供者はこの規約と料金を変更できます。変更は、効力が生じる少なくとも30日前に、サービス内またはメールで知らせます。",
          "顧客が変更に同意しない場合は、効力発生前に利用をやめられます。事業者顧客が変更後も利用を続ける場合は、更新された条件に同意したことになります。消費者の沈黙や利用の継続は、強行的な消費者の権利を失わせません。価格の変更は、すでに請求した期間には及びません。"
        ]
      ],
      [
        "14. 不可抗力",
        [
          "提供者は、不可抗力による遅延または中断について責任を負いません。例として、戦争、ストライキ、停電や通信障害、当局の命令、合理的に避けられないその他の障害があります。",
          "障害とその終了は、可能なときに知らせます。"
        ]
      ],
      [
        "15. 準拠法",
        [
          "この条件にはフィンランド法が適用されます。当事者はまず話し合いで解決を試みます。",
          "事業者顧客の紛争は、強行法規が別の裁判所を定めない限り、フィンランドにある提供者の住所地の地方裁判所が扱います。消費者の紛争の扱いは第8項にあります。"
        ]
      ],
      [
        "16. 連絡先",
        [
          "toiminimi IqSoftCore、Y-tunnus 3658340-4、Siihtalantie 56, 62710 Kurejoki、フィンランド。info@iqsoftcore.fi、+358 45 133 4009。"
        ]
      ]
    ]
  },
  "ko": {
    "metaTitle": "이용약관 | IQSoftCore",
    "metaDescription": "iqFleetSync 이용약관과 IQSoftCore 서비스의 일반 약관. 초안.",
    "title": "이용약관",
    "draft": "초안입니다. 이것은 IQSoftCore 서비스의 일반 약관과 iqFleetSync 약관을 쉬운 말로 쓴 초안이며 법률 자문이 아닙니다. 공개 전에 제공자가 본문을 확인해야 합니다.",
    "updated": "초안 업데이트 2026-10-04.",
    "translationNote": "핀란드어 본문이 공식 버전입니다. 이 번역은 이해를 돕기 위한 것이며 법률 문서로 따로 검토되지 않았습니다.",
    "scope": "이것은 IQSoftCore 서비스의 일반 약관입니다. 소비자와 사업자 고객 모두에게 적용됩니다. 제품에 자체 약관이 있으면 함께 적용됩니다. 가격은 공개되었거나 따로 합의된 경우에만 청구합니다.",
    "privacyLink": "개인정보",
    "pricing": "요금",
    "product": "iqFleetSync",
    "home": "홈",
    "sections": [
      [
        "1. 당사자와 제공자",
        [
          "제공자는 핀란드 개인사업자 toiminimi IqSoftCore입니다.",
          "사업자번호(Y-tunnus): 3658340-4",
          "주소: Siihtalantie 56, 62710 Kurejoki, 핀란드.",
          "고객은 개인 소비자 또는 사업자 고객일 수 있습니다. 소비자는 주로 자신의 사업이 아닌 목적으로 계약하는 자연인입니다. 사업자 고객은 회사 또는 그 밖의 단체입니다. 연락처: info@iqsoftcore.fi 및 +358 45 133 4009."
        ]
      ],
      [
        "2. 약관의 적용 대상",
        [
          "제1항부터 제5항과 제9항부터 제16항은 모든 고객에게 적용됩니다.",
          "제6항과 제7항은 사업자 고객과 iqFleetSync에만 적용됩니다. 제8항은 소비자에게만 적용됩니다.",
          "강행적인 소비자 보호가 소비자에게 더 유리하면 그것이 적용됩니다. 그러한 권리를 제한하는 조항은 소비자를 구속하지 않습니다."
        ]
      ],
      [
        "3. 서비스",
        [
          "IQSoftCore는 소프트웨어, 앱, 전자 설계를 합니다. 개인 소비자도 앱과 다른 제품을 살 수 있습니다.",
          "iqFleetSync는 사업자 전용 서비스입니다. 소비자는 iqFleetSync 계정을 열 수 없습니다."
        ]
      ],
      [
        "4. 가격과 부가세",
        [
          "소비자에게 보이는 가격에는 부가가치세가 포함됩니다. Tuntilappu 또는 iqRallyNote의 가격이 공개되면 부가세 포함 가격으로 표시합니다.",
          "iqFleetSync 가격은 사업자 고객용이며 부가세 0%입니다. 부가가치세는 적용 세율에 따라 청구서에 더합니다. 현재 [[pricing]] 페이지는 이 약관의 일부입니다.",
          "유효한 VAT 번호가 있는 다른 EU 국가의 사업자 고객에게는, 해당하는 경우 청구서에 역과세(reverse charge)를 적용합니다.",
          "다른 EU 국가의 소비자가 구매하는 경우, 법이 요구하면 고객 국가의 세율로 부가가치세를 청구합니다."
        ]
      ],
      [
        "5. 결제",
        [
          "유료 사용은 Stripe 카드로 결제합니다. 청구는 매월 후불입니다.",
          "청구서는 청구일로부터 14일 뒤에 만기가 됩니다. 사업자 고객의 결제가 늦으면 제공자는 핀란드 이자법(korkolaki)에 따른 지연 이자와 합리적인 추심 비용을 청구할 수 있습니다.",
          "사업자 고객의 청구서가 지급 기한 7일 뒤에도 미납이면 계정은 읽기 전용이 됩니다. 저장된 데이터는 볼 수 있고, 새 데이터는 저장할 수 없습니다. 읽기 전용은 결제가 되면 자동으로 해제됩니다.",
          "위의 지급 기한과 연체 조항은 사업자 고객에게 적용됩니다. 소비자는 구매 시 서비스가 보여주는 가격을 냅니다. 사업자 고객의 지급 기한과 연체 조항은 강행적인 소비자 권리를 약화하는 방식으로 소비자에게 적용하지 않습니다."
        ]
      ],
      [
        "6. iqFleetSync(사업자 고객만)",
        [
          "iqFleetSync 계정을 열려면 핀란드 사업자번호(Y-tunnus)가 필요합니다.",
          "iqFleetSync는 fleetsync.iqsoftcore.fi의 차량·장비 정비 웹 서비스입니다. 각 고객 회사의 데이터는 다른 고객과 분리합니다.",
          "iqFleetSync는 전화나 컴퓨터의 브라우저에서 돌아갑니다. 운전자, 정비, 관리자는 앱을 설치하지 않습니다. QR 스티커는 장비를 식별하며 아무도 로그인시키지 않습니다. 스티커는 서비스에서 인쇄합니다. 전화 카메라로 읽으면 장비가 열리고 운전자의 자기 장비에 추가됩니다. 관리자는 누가 언제 장비를 썼는지 봅니다.",
          "관리자가 이메일 링크로 사람을 초대합니다. 그다음 로그인은 지문 또는 얼굴(패스키)입니다. 이메일 6자리 코드가 대안입니다. 공용 차량 전화에는 선택 4자리 PIN을 둘 수 있고, 관리자가 볼 수 있습니다. 전화번호는 선택 연락처 항목일 뿐입니다. 관리자는 비용, 청구, 사람, 감사 기록을 봅니다. 정비는 장비, QR 스티커, 보고, 고장, 작업 지시를 다루고, 비용, 청구, 사람은 다루지 않습니다. 운전자는 배정된 장비와 읽어서 추가한 장비만 보고, 고장과 킬로미터 또는 시간을 기록하며, 자기 고장의 진행만 봅니다. 비용과 가격은 보이지 않습니다. 보고에는 트레일러 하위 보고와 사진을 넣을 수 있습니다. 고장은 운행 불가로 표시할 수 있습니다. 정비가 확인하고, 진행 중으로, 완료로 표시하며, 운전자는 앱 안에서 알림을 받습니다. 서비스에는 작업 지시, 정비 이력, 관리자용 비용 줄, 킬로미터·시간·날짜의 계획과 기한, 이메일 또는 앱 안 알림이 있습니다. 장비는 보관할 수 있고 사람은 수정하거나 제거할 수 있으며, 이력은 남습니다.",
          "고객은 계정을 열고 사용자를 관리할 관리자를 지정합니다. 관리자가 누구에게 어떤 권한을 줄지 정합니다.",
          "고객은 자기 사용자가 서비스에서 하는 일에 책임을 집니다. 개인 이메일 코드, 초대 링크, 패스키는 개인용이며 다른 사람에게 주면 안 됩니다. 공용 전화의 PIN은 그 사람의 것입니다. 고객은 입력하는 데이터를 저장할 권리가 있는지에 책임을 집니다.",
          "새 고객은 iqFleetSync를 30일 동안 무료로 써 볼 수 있습니다.",
          "체험은 끝나기 전에 언제든 중단할 수 있습니다. 요금은 생기지 않습니다. 체험 중에도 이 약관에 따라 서비스를 사용합니다.",
          "이 가격은 사업자 고객용이며 부가세 0%입니다. 부가가치세는 적용 세율에 따라 청구서에 더합니다.",
          "기본요금은 고객 회사당 월 10.00 €입니다. 차량(예: 트럭)은 1단위입니다. 작업기계(예: 굴착기, 휠로더)도 1단위입니다. 차량과 작업기계가 함께 요금 구간을 채웁니다. 차량을 먼저 세고 그다음 작업기계를 셉니다.",
          "요금은 누진입니다. 처음 15단위는 1.50 €, 16–50은 1.30 €, 51–100은 1.10 €, 100을 넘는 단위는 각각 0.90 €입니다.",
          "트레일러는 해당 구간의 0.5단위입니다. 그 구간 차량 가격의 절반, 즉 0.75 €, 0.65 €, 0.55 €, 0.45 € 중 하나입니다. 어태치먼트(틸트로테이터, 유압 브레이커, 스위퍼 등)는 0.00 €이며 단위에 넣지 않습니다. 사용자 수는 제한이 없고 사용자별 요금은 없습니다.",
          "월 요금은 그 달의 최대 단위 수를 기준으로 합니다. 달 중에 장비를 늘리면 그 달은 최대 수로 청구합니다. 보관 처리한 단위는 청구하지 않습니다.",
          "체험이 끝나고 결제가 없으면 계정은 읽기 전용이 됩니다. 사업자 고객의 청구서가 지급 기한 7일 뒤에도 미납이면 청구서가 결제될 때까지 계정은 읽기 전용으로 남습니다.",
          "읽기 전용에서는 저장된 데이터를 볼 수 있습니다. 새 보고와 변경은 저장할 수 없습니다. 읽기 전용은 결제가 되면 자동으로 해제됩니다."
        ]
      ],
      [
        "7. 해지와 책임(사업자 고객만)",
        [
          "이 항은 사업자 고객에게만 적용됩니다. 소비자에게는 적용되지 않으며 소비자의 강행적인 권리를 제한하지 않습니다.",
          "[[prominent]]iqFleetSync는 기록, 알림, 보고를 위한 도구일 뿐입니다. 차량과 작업기계의 운행 적합성, 정비 품질, 검사, 법적 의무, 차량 사용에 대한 결정은 고객이 단독으로 책임집니다. IqSoftCore는 차량이나 작업기계의 손해, 사고, 고장에 책임지지 않습니다. 알림을 놓친 경우, 데이터를 잘못 입력한 경우, 운전자가 운행에 적합하지 않은 차량을 사용한 경우도 포함됩니다. 이 조항은 소비자의 권리에 영향을 주지 않습니다.",
          "사업자 고객은 앱의 Tilaus ja laskutus → Irtisano palvelu(구독 및 청구 → 서비스 해지)에서 직접 유료 서비스를 해지하거나 info@iqsoftcore.fi로 이메일을 보냅니다. 해지는 이미 시작된 청구 기간이 끝날 때 효력이 있습니다. 이미 청구한 달은 강행법이 요구하지 않는 한 환불하지 않습니다.",
          "체험 중단에는 요금이 없습니다. 해지가 효력을 내면 사업자 고객의 데이터는 90일 동안 보관되어 고객이 보고 내보낼 수 있습니다. 그 뒤 데이터는 자동으로 삭제됩니다. 남는 것은 회계법이 요구하는 청구 데이터뿐입니다.",
          "고객이 이 약관을 중대하게 위반하고 서면 통지 뒤에도 바로잡지 않으면 제공자는 사용을 끝낼 수 있습니다. 서비스 전체를 종료하면 가능할 때 미리 알립니다.",
          "핀란드 강행법이 허용하는 범위에서 제공자는 간접 손해, 얻지 못한 이익, 잃어버린 데이터에 책임지지 않습니다.",
          "직접 손해에 대한 책임은 손해 전 12개월 동안 고객이 그 서비스에 낸 요금을 한도로 합니다. 낸 요금이 없으면 한도는 0 €입니다.",
          "이 제한은 고의 또는 중대한 과실로 생긴 손해와, 법률상 제한할 수 없는 책임에는 적용하지 않습니다."
        ]
      ],
      [
        "8. 소비자",
        [
          "소비자에게는 핀란드와 EU의 강행적인 소비자 보호가 적용됩니다. 이에 어긋나는 조항은 뒤로 물러납니다.",
          "제7항의 책임 한도, 이미 청구한 기간을 환불하지 않는 규칙, 그리고 iqFleetSync가 기록, 알림, 보고를 위한 도구일 뿐이라는 조항은 소비자의 권리를 제한하지 않습니다.",
          "원격 판매에서 소비자는 디지털 서비스 또는 디지털 콘텐츠에 대해 계약일부터 14일의 청약 철회권을 가집니다.",
          "철회권은, 철회 기간 동안 소비자가 제공 또는 이행의 시작을 명시적으로 요청하고, 디지털 콘텐츠의 공급이 시작되거나 디지털 서비스가 전부 이행되면 그 권리를 잃는다는 점을 함께 인정한 때에 끝납니다.",
          "그때까지 소비자는 info@iqsoftcore.fi 로 보내는 이메일처럼 분명한 통지로 철회할 수 있습니다. 제공자는 법이 환불을 요구하는 범위에서 통지 후 14일 안에 받은 대금을 돌려줍니다.",
          "소비자는 핀란드 소비자 분쟁 위원회 Kuluttajariitalautakunta(www.kuluttajariita.fi)에 분쟁을 제기할 수 있습니다. EU 온라인 분쟁 해결 플랫폼은 규정 (EU) 2024/3228에 따라 2025년 7월 20일에 종료되어 링크가 없습니다. 분쟁 해결 기관 목록은 https://consumer-redress.ec.europa.eu/dispute-resolution-bodies 에 있습니다.",
          "다른 EU 국가에 사는 소비자는 자국의 강행적인 보호를 잃지 않습니다."
        ]
      ],
      [
        "9. 고객의 데이터",
        [
          "고객이 서비스에 저장한 차량, 정비, 사용자 데이터는 고객의 것입니다.",
          "제공자는 이 데이터를 팔지 않습니다. 서비스 제공, 청구, 보안, 법률상 의무를 위해 사용합니다.",
          "고객은 info@iqsoftcore.fi로 데이터 내보내기를 요청할 수 있습니다. 요청을 처리한 뒤 일반적인 기계 판독 형식으로 전달합니다.",
          "사업자 고객의 데이터는 해지 후 90일 동안 보관됩니다. 이 동안 사업자 고객은 데이터를 내보낼 수 있으며, info@iqsoftcore.fi로 내보내기를 요청할 수도 있습니다. 90일이 지나면 데이터는 자동으로 삭제됩니다. 그 뒤 남는 것은 회계법이 요구하는 청구 데이터뿐입니다.",
          "소비자의 데이터는 강행적인 소비자 보호와 데이터 보호를 지키며 처리합니다. 소비자는 info@iqsoftcore.fi로 데이터 내보내기 또는 삭제를 요청할 수 있습니다."
        ]
      ],
      [
        "10. 개인정보",
        [
          "개인정보 처리는 [[privacy]] 페이지에 설명합니다.",
          "제공자가 고객을 위해 개인정보를 처리할 때, 역할을 달리 정하지 않으면 제공자는 수탁자이고 고객은 관리자입니다. 제공자는 자신의 계정과 청구 데이터의 관리자입니다. 처리할 수 있는 데이터에는 사용자 이름과 이메일, 연락처로만 쓰는 선택 전화번호, 이메일로 보내는 로그인 코드, 패스키 식별자, 개인정보가 포함된 고객 저장 데이터가 있습니다. 전화번호는 로그인에 쓰지 않습니다."
        ]
      ],
      [
        "11. 가용성과 유지보수",
        [
          "서비스는 합리적인 노력으로 사용할 수 있게 유지합니다. 중단 없는 사용은 약속하지 않습니다.",
          "유지보수, 업데이트, 장애, 통신이 중단을 일으킬 수 있습니다. 계획된 긴 중단은 가능할 때 서비스 안이나 이메일로 미리 알립니다. 서비스는 당시 상태 그대로 제공합니다."
        ]
      ],
      [
        "12. 허용되는 사용",
        [
          "IQSoftCore 서비스는 적법한 목적에만 사용할 수 있습니다.",
          "서비스는 차량·장비 정비 데이터를 기록하고 관리하는 데 사용할 수 있습니다.",
          "불법 사용, 악성 소프트웨어 배포, 서비스 방해, 다른 고객 데이터 접근, 권한 우회는 할 수 없습니다. 이 약관을 중대하게 위반하면 제공자가 사용을 제한할 수 있습니다."
        ]
      ],
      [
        "13. 약관과 가격의 변경",
        [
          "제공자는 이 약관과 요금을 변경할 수 있습니다. 변경은 효력이 생기기 최소 30일 전에 서비스 안이나 이메일로 알립니다.",
          "고객이 변경에 동의하지 않으면 효력 발생 전에 사용을 멈출 수 있습니다. 사업자 고객이 변경 후에도 서비스를 계속 사용하면 갱신된 약관에 동의한 것입니다. 소비자의 침묵이나 계속 사용은 강행적인 소비자 권리를 없애지 않습니다. 가격 변경은 이미 청구한 기간에는 적용되지 않습니다."
        ]
      ],
      [
        "14. 불가항력",
        [
          "제공자는 불가항력으로 생긴 지연이나 중단에 책임지지 않습니다. 예로는 전쟁, 파업, 정전이나 통신 장애, 당국의 명령, 합리적으로 피할 수 없는 다른 장애가 있습니다.",
          "장애와 그 끝은 가능할 때 알립니다."
        ]
      ],
      [
        "15. 준거법",
        [
          "이 약관에는 핀란드 법이 적용됩니다. 당사자는 먼저 함께 이견을 해결하려고 합니다.",
          "사업자 고객의 분쟁은, 강행 법이 다른 곳을 정하지 않는 한, 핀란드에 있는 제공자 주소지의 지방법원이 다룹니다. 소비자 분쟁의 처리는 제8항에 있습니다."
        ]
      ],
      [
        "16. 연락처",
        [
          "toiminimi IqSoftCore, Y-tunnus 3658340-4, Siihtalantie 56, 62710 Kurejoki, 핀란드. info@iqsoftcore.fi, +358 45 133 4009."
        ]
      ]
    ]
  },
  "zh": {
    "metaTitle": "使用条款 | IQSoftCore",
    "metaDescription": "iqFleetSync 使用条款以及 IQSoftCore 服务的一般条款。草案。",
    "title": "使用条款",
    "draft": "草案。这是用平白语言写的 IQSoftCore 服务一般条款和 iqFleetSync 条款的草案，不是法律意见。提供者必须在发布前审阅本文。",
    "updated": "草案更新日期 2026-10-04。",
    "translationNote": "芬兰语文本是正式版本。本译文便于阅读，并未另行作为法律文本审查。",
    "scope": "这是 IQSoftCore 服务的一般条款。适用于消费者和企业客户。如果某项产品另有条款，则一并适用。只有价格已经公布或另行约定时才收费。",
    "privacyLink": "隐私",
    "pricing": "价格",
    "product": "iqFleetSync",
    "home": "首页",
    "sections": [
      [
        "1. 当事人与提供者",
        [
          "提供者是芬兰个体工商户 toiminimi IqSoftCore。",
          "营业编号（Y-tunnus）：3658340-4",
          "地址：Siihtalantie 56, 62710 Kurejoki, 芬兰。",
          "客户可以是私人消费者或企业客户。消费者是主要为自身经营以外的目的订立合同的自然人。企业客户是公司或其他组织。联系方式：info@iqsoftcore.fi 和 +358 45 133 4009。"
        ]
      ],
      [
        "2. 条款适用于谁",
        [
          "第1至5条以及第9至16条适用于所有客户。",
          "第6条和第7条只适用于企业客户和 iqFleetSync。第8条只适用于消费者。",
          "如果强制性消费者保护对消费者更有利，则适用该保护。限制该权利的条款不约束消费者。"
        ]
      ],
      [
        "3. 服务",
        [
          "IQSoftCore 制作软件、应用并做电子设计。私人消费者可以购买应用和其他产品。",
          "iqFleetSync 只面向企业。消费者不能开设 iqFleetSync 账户。"
        ]
      ],
      [
        "4. 价格与增值税",
        [
          "向消费者展示的价格含增值税。如果公布 Tuntilappu 或 iqRallyNote 的价格，则按含税价展示。",
          "iqFleetSync 的价格面向企业客户，为增值税 0%。增值税按适用税率加在账单上。现行 [[pricing]] 页是本条款的一部分。",
          "对持有有效增值税号、位于其他欧盟国家的企业客户，在适用时发票使用反向征税（reverse charge）。",
          "消费者从其他欧盟国家购买时，在法律要求的情况下按客户所在国的税率收取增值税。"
        ]
      ],
      [
        "5. 付款",
        [
          "付费使用通过 Stripe 用卡支付。账单按月开具，事后结算。",
          "账单在账单日期后 14 天到期。企业客户逾期时，提供者可以按芬兰利息法（korkolaki）收取逾期利息和合理的催收费用。",
          "如果企业客户的账单在到期日后 7 天仍未支付，账户进入只读。已保存的数据可以查看，不能保存新数据。付款完成后，只读自动解除。",
          "上文的付款期限和逾期条款适用于企业客户。消费者在购买时支付服务显示的价格。企业客户的付款期限和逾期条款不得以削弱强制性消费者权利的方式适用于消费者。"
        ]
      ],
      [
        "6. iqFleetSync（仅企业客户）",
        [
          "开设 iqFleetSync 账户需要芬兰营业编号（Y-tunnus）。",
          "iqFleetSync 是位于 fleetsync.iqsoftcore.fi 的车队维护网页服务。每家客户公司的数据与其他客户分开保存。",
          "iqFleetSync 在手机或电脑的浏览器里运行。驾驶员、维修和管理员都不安装应用。二维码贴识别设备，不会让任何人登录。贴纸可以在服务里打印。用手机相机扫描会打开设备，并把它加入驾驶员自己的设备。管理员可以看到谁在何时使用了设备。",
          "管理员用电子邮件链接邀请人员。之后用指纹或人脸登录（通行密钥）。备用方式是电子邮件里的 6 位数字。共用的车辆电话可以使用可选的 4 位 PIN，管理员可以查看。电话号码只是可选的联系方式。管理员看到费用、账单、人员和审计日志。维修处理设备、二维码贴、报告、缺陷和工单，但不处理费用、账单和人员。驾驶员只看到分配的设备和扫描加入的设备，提交缺陷和公里或小时读数，并且只看到自己缺陷的进展。费用和价格不显示。报告可以包含挂车子报告和照片。缺陷可以标为不能上路。维修确认、标为进行中、再标为已修复，驾驶员在应用内收到通知。服务有工单、维护历史、管理员的费用行、按公里、小时或日期的计划和期限，以及电子邮件或应用内提醒。设备可以归档，人员可以编辑或移除，历史会保留。",
          "客户指定一名管理员开设账户并管理用户。管理员决定谁可以访问以及拥有哪些权限。",
          "客户对自己的用户在服务中的行为负责。个人电子邮件验证码、邀请链接和通行密钥只供本人使用，不得交给他人。共用电话上的 PIN 属于该人。客户负责自己有权保存所填写的数据。",
          "新客户可以免费试用 iqFleetSync 30 天。",
          "试用结束前可以随时停止。不会产生费用。试用期间按照本条款使用服务。",
          "这些价格面向企业客户，为增值税 0%。增值税按适用税率加在账单上。",
          "基础费为每家客户公司每月 10.00 €。车辆（例如卡车）是一个完整单位。工程机械（例如挖掘机或轮式装载机）也是一个完整单位。车辆和工程机械一起填满价格档。先计算车辆，再计算工程机械。",
          "价格是累进的。前 15 个单位为 1.50 €，第 16–50 个为 1.30 €，第 51–100 个为 1.10 €，超过 100 的每个单位为 0.90 €。",
          "挂车按其落入的档计为半个单位，按该档车辆价格的一半收费：0.75 €、0.65 €、0.55 € 或 0.45 €。属具（例如倾斜旋转器、液压破碎锤或清扫器）为 0.00 €，不计入单位。用户数量不限，也不另收费。",
          "月费按该自然月的最高单位数计算。如果月中增加设备，该月按最高数量计费。 已归档的单位不计费。",
          "如果试用结束且没有付款，账户变为只读。如果企业客户的账单在到期日后 7 天仍未支付，账户保持只读，直到账单付清。",
          "只读状态下可以查看已保存的数据。不能保存新的填报和修改。付款完成后，只读自动解除。"
        ]
      ],
      [
        "7. 解除与责任（仅企业客户）",
        [
          "本条只适用于企业客户。不适用于消费者，也不限制消费者的强制性权利。",
          "[[prominent]]iqFleetSync 只是记录、提醒和报告工具。车辆和工程机械的适行性、维护质量、检验、法定义务，以及是否使用车辆的决定，均由客户单独负责。IqSoftCore 不对车辆或工程机械的损坏、事故或故障负责。提醒被错过、数据填写错误，或驾驶员使用了不适行的车辆，也属于这种情况。本条款不影响消费者权利。",
          "企业客户在应用中自行取消付费服务，路径为 Tilaus ja laskutus → Irtisano palvelu（订阅与账单 → 解除服务），或发邮件到 info@iqsoftcore.fi。取消在已经开始的计费周期结束时生效。已经计费的月份不予退还，除非强制性法律要求退还。",
          "停止试用不产生费用。取消生效后，企业客户的数据保留 90 天，以便客户查看和导出。之后数据自动删除。只保留会计法要求的账单数据。",
          "如果客户严重违反本条款，并且在书面通知后仍不改正，提供者可以终止该客户的使用。如果整个服务停止，会在可能时事先说明。",
          "在芬兰强制性法律允许的范围内，提供者不对间接损失、未获得的利润或丢失的数据负责。",
          "对直接损失的责任，以客户在损失发生前 12 个月内为该服务支付的费用为上限。如果没有支付过费用，该上限为 0 €。",
          "该限制不适用于故意或重大过失造成的损失，也不适用于法律不允许限制的责任。"
        ]
      ],
      [
        "8. 消费者",
        [
          "芬兰和欧盟的强制性消费者保护适用于消费者。与之冲突的条款让位。",
          "第7条的责任上限、已计费期间不予退还的规则，以及 iqFleetSync 只是记录、提醒和报告工具这一条款，不限制消费者权利。",
          "远程销售中，消费者对数字服务或数字内容享有自合同订立之日起14日的撤回权。",
          "如果消费者在撤回期内明确要求开始交付或履行，并同时确认在数字内容开始提供时或数字服务已全部履行时丧失该权利，则撤回权终止。",
          "在此之前，消费者可以用明确通知撤回，例如发邮件至 info@iqsoftcore.fi。提供者在收到通知后14日内，在法律要求退款的范围内退还已收款项。",
          "消费者可以把争议提交给芬兰消费者争议委员会 Kuluttajariitalautakunta（www.kuluttajariita.fi）。欧盟在线争议解决平台已根据条例（EU）2024/3228 于2025年7月20日关闭，因此没有链接。争议解决机构名单见 https://consumer-redress.ec.europa.eu/dispute-resolution-bodies。",
          "居住在其他欧盟国家的消费者不丧失其居住国的强制性保护。"
        ]
      ],
      [
        "9. 客户的数据",
        [
          "客户保存在服务中的车队、维护和用户数据属于客户。",
          "提供者不出卖这些数据。数据用于提供服务、计费、保障服务安全，以及履行法律要求的义务。",
          "客户可以发邮件到 info@iqsoftcore.fi 要求导出数据。请求处理完成后，以常见的机器可读格式提供。",
          "企业客户的数据在取消后保留 90 天。在此期间，企业客户可以导出数据，也可以发邮件到 info@iqsoftcore.fi 要求导出。90 天后数据自动删除。之后只保留会计法要求的账单数据。",
          "消费者的数据按照强制性消费者保护和数据保护规则处理。消费者可以发邮件到 info@iqsoftcore.fi 要求导出或删除自己的数据。"
        ]
      ],
      [
        "10. 隐私",
        [
          "个人信息的处理见 [[privacy]] 页面。",
          "当提供者为客户处理个人信息时，除非另有约定，提供者是处理者，客户是控制者。提供者是其自身账户和账单数据的控制者。可能处理的数据包括用户的姓名和电子邮件、仅作为联系方式的可选电话号码、通过电子邮件发送的登录码、通行密钥标识，以及客户保存的含有个人信息的数据。电话号码不用于登录。"
        ]
      ],
      [
        "11. 可用性与维护",
        [
          "提供者会以合理努力保持服务可用。不承诺不中断地使用。",
          "维护、更新、故障或网络可能导致中断。计划中的较长时间中断，会在可能时事先通过服务或电子邮件说明。服务按当时的状态提供。"
        ]
      ],
      [
        "12. 允许的使用",
        [
          "IQSoftCore 的服务只能用于合法目的。",
          "服务可用于记录和管理车队维护数据。",
          "不得非法使用，不得传播恶意软件，不得干扰服务，不得访问其他客户的数据，也不得绕过访问权限。如果严重违反本条款，提供者可以限制使用。"
        ]
      ],
      [
        "13. 条款和价格的变更",
        [
          "提供者可以修改本条款和价格。变更会在生效前至少 30 天通过服务或电子邮件说明。",
          "如果客户不接受变更，可以在变更生效前停止使用。企业客户在变更后继续使用的，视为接受更新后的条款。消费者的沉默或继续使用不消灭强制性消费者权利。价格变更不涉及已经结算的期间。"
        ]
      ],
      [
        "14. 不可抗力",
        [
          "提供者不对不可抗力造成的延误或中断负责。例如战争、罢工、停电或通信中断、机关命令，以及其他无法合理避免的障碍。",
          "障碍及其结束会在可能时告知。"
        ]
      ],
      [
        "15. 适用法律",
        [
          "本条款适用芬兰法律。双方首先尝试共同解决分歧。",
          "企业客户的争议由提供者在芬兰住所地的地区法院审理，但强制性法律另有规定的除外。消费者争议的处理见第8条。"
        ]
      ],
      [
        "16. 联系方式",
        [
          "toiminimi IqSoftCore，Y-tunnus 3658340-4，Siihtalantie 56, 62710 Kurejoki，芬兰。info@iqsoftcore.fi，+358 45 133 4009。"
        ]
      ]
    ]
  }
};

function escapeTermsHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTermsParagraph(paragraph, page) {
  const tokens = {
    "[[privacy]]": `<a href="privacy.html">${escapeTermsHtml(page.privacyLink)}</a>`,
    "[[pricing]]": `<a href="hinnasto.html">${escapeTermsHtml(page.pricing)}</a>`,
  };
  const parts = String(paragraph).split(/(\[\[privacy\]\]|\[\[pricing\]\])/);
  return parts.map((part) => (tokens[part] ? tokens[part] : escapeTermsHtml(part))).join("");
}

function renderTermsPage(lang) {
  const root = document.getElementById("terms-root");
  if (!root || typeof TERMS_PAGE === "undefined") return;
  const page = TERMS_PAGE[lang] || TERMS_PAGE.en;

  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = page.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);

  const sections = page.sections
    .map(([heading, paragraphs]) => {
      const bodyHtml = paragraphs
        .map((paragraph) => {
          const prominent = String(paragraph).startsWith("[[prominent]]");
          const text = prominent ? String(paragraph).slice("[[prominent]]".length) : paragraph;
          const cls = prominent ? ` class="terms-prominent"` : "";
          return `<p${cls}>${renderTermsParagraph(text, page)}</p>`;
        })
        .join("");
      return `<section class="policy-section"><h2>${escapeTermsHtml(heading)}</h2>${bodyHtml}</section>`;
    })
    .join("");

  const translation = page.translationNote
    ? `<p class="note translation-note">${escapeTermsHtml(page.translationNote)}</p>`
    : "";

  root.innerHTML = `<h1>${escapeTermsHtml(page.title)}</h1>
    <p class="note">${escapeTermsHtml(page.draft)}</p>
    ${translation}
    <p class="policy-updated">${escapeTermsHtml(page.updated)}</p>
    <p>${escapeTermsHtml(page.scope)}</p>
    ${sections}
    <p class="policy-nav">
      <a class="btn btn-ghost" href="hinnasto.html">${escapeTermsHtml(page.pricing)}</a>
      <a class="btn btn-ghost" href="iqfleetsync.html">${escapeTermsHtml(page.product)}</a>
      <a class="btn btn-ghost" href="privacy.html">${escapeTermsHtml(page.privacyLink)}</a>
      <a class="btn btn-ghost" href="index.html">${escapeTermsHtml(page.home)}</a>
    </p>`;
}
