/**
 * Pricing page. iqFleetSync prices are the ones supplied for this site.
 * Tuntilappu and iqRallyNote have no published price in the repo.
 */
const PRICE_LOCALES = {
  fi: "fi-FI",
  en: "en-GB",
  sv: "sv-SE",
  no: "nb-NO",
  da: "da-DK",
  de: "de-DE",
  nl: "nl-NL",
  fr: "fr-FR",
  es: "es-ES",
  pt: "pt-BR",
  it: "it-IT",
  pl: "pl-PL",
  cs: "cs-CZ",
  ja: "ja-JP",
  ko: "ko-KR",
  zh: "zh-CN",
};

const PRICING_PAGE = {
  fi: {
    metaTitle: "Hinnasto | IQSoftCore",
    metaDescription: "iqFleetSync-hinnasto. Hinnat alv 0 %. Perusmaksu ja porrastettu yksikköhinta.",
    title: "Hinnasto",
    intro: "iqFleetSync hinnoitellaan yrityksen perusmaksulla ja kaluston yksiköillä. Hinnat alv 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Perusmaksu",
    baseValue: "10,00 € / kuukausi / yritys",
    unitHeading: "Ajoneuvo tai kone, kuukautta kohden",
    unitNote: "Hinta lasketaan portaittain. Ensimmäiset 15 yksikköä ovat 1,50 €, seuraavat 35 yksikköä (16–50) ovat 1,30 €, seuraavat 50 yksikköä (51–100) ovat 1,10 € ja sitä suuremmat yksiköt ovat 0,90 €. Koko määrää ei hinnoitella sen portaan mukaan, johon viimeinen yksikkö osuu.",
    colRange: "Yksiköt",
    colPrice: "Hinta / yksikkö / kk",
    tiers: [
      ["1–15", "1,50 €"],
      ["16–50", "1,30 €"],
      ["51–100", "1,10 €"],
      ["yli 100", "0,90 €"],
    ],
    trailer: "Perävaunu on 0,5 yksikköä eli 50 % ajoneuvon tai koneen hinnasta samassa portaassa.",
    mounted: "Asennettu laite on maksuton, eikä sitä lasketa yksiköihin.",
    users: "Käyttäjiä voi olla rajattomasti. Käyttäjämäärästä ei veloiteta.",
    peak: "Lasku perustuu kalenterikuukauden suurimpaan yksikkömäärään.",
    trial: "30 päivän ilmainen kokeilu. Maksukorttia ei tarvita. Laskuri näyttää hinnan kokeilun jälkeen.",
    cta: "Kokeile ilmaiseksi 30 päivää",
    terms: "Käyttöehdot",
    calcTitle: "Kuukausihinnan laskuri",
    calcIntro: "Syötä ajoneuvojen ja koneiden määrä sekä perävaunujen määrä. Laskuri jakaa yksiköt portaisiin.",
    vehiclesLabel: "Ajoneuvot ja koneet",
    trailersLabel: "Perävaunut",
    vehiclesMath: "Ajoneuvot ja koneet",
    trailersMath: "Perävaunut × 0,5",
    totalUnits: "Yksiköitä yhteensä",
    unitsSum: "Yksiköiden hinta",
    baseLine: "Perusmaksu",
    monthTotal: "Kuukausihinta",
    vatShort: "hinnat alv 0 %",
    otherTitle: "Muut tuotteet",
    otherIntro: "Julkaistua hintaa ei ole.",
    contact: "Ota yhteyttä",
    others: [
      ["tuntilappu.html", "Tuntilappu"],
      ["iqrallynote.html", "iqRallyNote"],
    ],
  },
  en: {
    metaTitle: "Pricing | IQSoftCore",
    metaDescription: "iqFleetSync pricing. Prices VAT 0%. A base fee plus a graduated per-unit price.",
    title: "Pricing",
    intro: "iqFleetSync is priced with a company base fee and units of equipment. Prices are VAT 0%.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Base fee",
    baseValue: "10.00 € / month / company",
    unitHeading: "Vehicle or machine, per month",
    unitNote: "The price is graduated. The first 15 units are 1.50 €, the next 35 units (16–50) are 1.30 €, the next 50 units (51–100) are 1.10 €, and any units above that are 0.90 €. The whole quantity is not priced at the tier of the last unit.",
    colRange: "Units",
    colPrice: "Price / unit / month",
    tiers: [
      ["1–15", "1.50 €"],
      ["16–50", "1.30 €"],
      ["51–100", "1.10 €"],
      ["over 100", "0.90 €"],
    ],
    trailer: "A trailer is 0.5 units, which is 50% of the vehicle or machine price in the same tier.",
    mounted: "Mounted equipment is free and is not counted as a unit.",
    users: "Users are unlimited. There is no charge per user.",
    peak: "The bill uses the highest unit count in that calendar month.",
    trial: "30-day free trial. No card needed. The calculator shows the price after the trial.",
    cta: "Try free for 30 days",
    terms: "Terms of use",
    calcTitle: "Monthly price calculator",
    calcIntro: "Enter the number of vehicles and machines, and the number of trailers. The calculator splits the units across the tiers.",
    vehiclesLabel: "Vehicles and machines",
    trailersLabel: "Trailers",
    vehiclesMath: "Vehicles and machines",
    trailersMath: "Trailers × 0.5",
    totalUnits: "Units in total",
    unitsSum: "Price of the units",
    baseLine: "Base fee",
    monthTotal: "Monthly price",
    vatShort: "prices VAT 0%",
    otherTitle: "Other products",
    otherIntro: "There is no published price.",
    contact: "Get in touch",
    others: [
      ["tuntilappu.html", "Tuntilappu"],
      ["iqrallynote.html", "iqRallyNote"],
    ],
  },
  sv: {
    metaTitle: "Priser | IQSoftCore",
    metaDescription: "Pris för iqFleetSync. Priser moms 0 %. Grundavgift och stegvis enhetspris.",
    title: "Priser",
    intro: "iqFleetSync prissätts med en grundavgift per företag och enheter i flottan. Priserna är moms 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Grundavgift",
    baseValue: "10,00 € / månad / företag",
    unitHeading: "Fordon eller maskin, per månad",
    unitNote: "Priset är stegvis. De första 15 enheterna är 1,50 €, de följande 35 (16–50) är 1,30 €, de följande 50 (51–100) är 1,10 € och enheter däröver är 0,90 €. Hela mängden prissätts inte enligt steget för den sista enheten.",
    colRange: "Enheter",
    colPrice: "Pris / enhet / mån",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["över 100", "0,90 €"]],
    trailer: "Ett släp är 0,5 enheter, alltså 50 % av priset för ett fordon eller en maskin i samma steg.",
    mounted: "Monterad utrustning är gratis och räknas inte som en enhet.",
    users: "Antalet användare är obegränsat. Det finns ingen avgift per användare.",
    peak: "Fakturan utgår från det högsta enhetsantalet under kalendermånaden.",
    trial: "30 dagars gratis provperiod. Inget kort behövs. Räknaren visar priset efter provperioden.",
    cta: "Prova gratis i 30 dagar",
    terms: "Användarvillkor",
    calcTitle: "Räknare för månadspris",
    calcIntro: "Ange antal fordon och maskiner samt antal släp. Räknaren fördelar enheterna på stegen.",
    vehiclesLabel: "Fordon och maskiner",
    trailersLabel: "Släp",
    vehiclesMath: "Fordon och maskiner",
    trailersMath: "Släp × 0,5",
    totalUnits: "Enheter totalt",
    unitsSum: "Pris för enheterna",
    baseLine: "Grundavgift",
    monthTotal: "Månadspris",
    vatShort: "priser moms 0 %",
    otherTitle: "Övriga produkter",
    otherIntro: "Det finns inget publicerat pris.",
    contact: "Kontakta oss",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  no: {
    metaTitle: "Priser | IQSoftCore",
    metaDescription: "Pris for iqFleetSync. Priser mva. 0 %. Grunnavgift og trinnvis enhetspris.",
    title: "Priser",
    intro: "iqFleetSync prises med en grunnavgift per bedrift og enheter i flåten. Prisene er mva. 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Grunnavgift",
    baseValue: "10,00 € / måned / bedrift",
    unitHeading: "Kjøretøy eller maskin, per måned",
    unitNote: "Prisen er trinnvis. De første 15 enhetene er 1,50 €, de neste 35 (16–50) er 1,30 €, de neste 50 (51–100) er 1,10 €, og enheter over det er 0,90 €. Hele antallet prises ikke etter trinnet til den siste enheten.",
    colRange: "Enheter",
    colPrice: "Pris / enhet / mnd",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["over 100", "0,90 €"]],
    trailer: "En tilhenger er 0,5 enheter, altså 50 % av prisen for et kjøretøy eller en maskin i samme trinn.",
    mounted: "Montert utstyr er gratis og telles ikke som en enhet.",
    users: "Antall brukere er ubegrenset. Det er ingen pris per bruker.",
    peak: "Fakturaen bruker det høyeste enhetsantallet i kalendermåneden.",
    trial: "30 dagers gratis prøveperiode. Ingen kort nødvendig. Kalkulatoren viser prisen etter prøveperioden.",
    cta: "Prøv gratis i 30 dager",
    terms: "Vilkår",
    calcTitle: "Kalkulator for månedspris",
    calcIntro: "Oppgi antall kjøretøy og maskiner, og antall tilhengere. Kalkulatoren fordeler enhetene på trinnene.",
    vehiclesLabel: "Kjøretøy og maskiner",
    trailersLabel: "Tilhengere",
    vehiclesMath: "Kjøretøy og maskiner",
    trailersMath: "Tilhengere × 0,5",
    totalUnits: "Enheter totalt",
    unitsSum: "Pris for enhetene",
    baseLine: "Grunnavgift",
    monthTotal: "Månedspris",
    vatShort: "priser mva. 0 %",
    otherTitle: "Andre produkter",
    otherIntro: "Det er ingen offentlig pris.",
    contact: "Ta kontakt",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  da: {
    metaTitle: "Priser | IQSoftCore",
    metaDescription: "Pris for iqFleetSync. Priser moms 0 %. Grundgebyr og trinvis enhedspris.",
    title: "Priser",
    intro: "iqFleetSync prissættes med et grundgebyr pr. virksomhed og enheder i flåden. Priserne er moms 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Grundgebyr",
    baseValue: "10,00 € / måned / virksomhed",
    unitHeading: "Køretøj eller maskine, pr. måned",
    unitNote: "Prisen er trinvis. De første 15 enheder er 1,50 €, de næste 35 (16–50) er 1,30 €, de næste 50 (51–100) er 1,10 €, og enheder derover er 0,90 €. Hele mængden prises ikke efter trinnet for den sidste enhed.",
    colRange: "Enheder",
    colPrice: "Pris / enhed / md",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["over 100", "0,90 €"]],
    trailer: "En anhænger er 0,5 enheder, altså 50 % af prisen for et køretøj eller en maskine i samme trin.",
    mounted: "Monteret udstyr er gratis og tælles ikke som en enhed.",
    users: "Antallet af brugere er ubegrænset. Der er ingen pris pr. bruger.",
    peak: "Regningen bruger det højeste enhedstal i kalendermåneden.",
    trial: "30 dages gratis prøve. Intet kort nødvendigt. Beregneren viser prisen efter prøven.",
    cta: "Prøv gratis i 30 dage",
    terms: "Vilkår",
    calcTitle: "Beregner til månedspris",
    calcIntro: "Angiv antal køretøjer og maskiner samt antal anhængere. Beregneren fordeler enhederne på trinnene.",
    vehiclesLabel: "Køretøjer og maskiner",
    trailersLabel: "Anhængere",
    vehiclesMath: "Køretøjer og maskiner",
    trailersMath: "Anhængere × 0,5",
    totalUnits: "Enheder i alt",
    unitsSum: "Pris for enhederne",
    baseLine: "Grundgebyr",
    monthTotal: "Månedspris",
    vatShort: "priser moms 0 %",
    otherTitle: "Andre produkter",
    otherIntro: "Der er ingen offentlig pris.",
    contact: "Kontakt os",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  de: {
    metaTitle: "Preise | IQSoftCore",
    metaDescription: "Preise für iqFleetSync. Preise MwSt. 0 %. Grundgebühr und gestaffelter Einheitspreis.",
    title: "Preise",
    intro: "iqFleetSync wird mit einer Grundgebühr je Unternehmen und mit Einheiten des Bestands berechnet. Preise MwSt. 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Grundgebühr",
    baseValue: "10,00 € / Monat / Unternehmen",
    unitHeading: "Fahrzeug oder Maschine, pro Monat",
    unitNote: "Der Preis ist gestaffelt. Die ersten 15 Einheiten kosten 1,50 €, die nächsten 35 (16–50) 1,30 €, die nächsten 50 (51–100) 1,10 €, und weitere Einheiten 0,90 €. Die gesamte Menge wird nicht nach der Stufe der letzten Einheit berechnet.",
    colRange: "Einheiten",
    colPrice: "Preis / Einheit / Monat",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["über 100", "0,90 €"]],
    trailer: "Ein Anhänger ist 0,5 Einheiten, also 50 % des Preises eines Fahrzeugs oder einer Maschine in derselben Stufe.",
    mounted: "Anbaugeräte sind kostenlos und zählen nicht als Einheit.",
    users: "Die Zahl der Nutzer ist unbegrenzt. Es gibt keinen Preis je Nutzer.",
    peak: "Die Rechnung verwendet die höchste Einheitenanzahl im Kalendermonat.",
    trial: "30 Tage kostenlos testen. Keine Karte nötig. Der Rechner zeigt den Preis nach der Testphase.",
    cta: "30 Tage kostenlos testen",
    terms: "Nutzungsbedingungen",
    calcTitle: "Rechner für den Monatspreis",
    calcIntro: "Geben Sie die Zahl der Fahrzeuge und Maschinen sowie der Anhänger ein. Der Rechner verteilt die Einheiten auf die Stufen.",
    vehiclesLabel: "Fahrzeuge und Maschinen",
    trailersLabel: "Anhänger",
    vehiclesMath: "Fahrzeuge und Maschinen",
    trailersMath: "Anhänger × 0,5",
    totalUnits: "Einheiten gesamt",
    unitsSum: "Preis der Einheiten",
    baseLine: "Grundgebühr",
    monthTotal: "Monatspreis",
    vatShort: "Preise MwSt. 0 %",
    otherTitle: "Weitere Produkte",
    otherIntro: "Für diese Produkte ist kein Preis veröffentlicht.",
    contact: "Kontakt aufnehmen",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  nl: {
    metaTitle: "Prijzen | IQSoftCore",
    metaDescription: "Prijzen voor iqFleetSync. Prijzen btw 0%. Basisbedrag en staffelprijs per eenheid.",
    title: "Prijzen",
    intro: "iqFleetSync wordt gerekend met een basisbedrag per bedrijf en eenheden in het park. Prijzen zijn btw 0%.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Basisbedrag",
    baseValue: "10,00 € / maand / bedrijf",
    unitHeading: "Voertuig of machine, per maand",
    unitNote: "De prijs is gestaffeld. De eerste 15 eenheden zijn 1,50 €, de volgende 35 (16–50) zijn 1,30 €, de volgende 50 (51–100) zijn 1,10 €, en eenheden daarboven zijn 0,90 €. Het hele aantal wordt niet gerekend tegen de staffel van de laatste eenheid.",
    colRange: "Eenheden",
    colPrice: "Prijs / eenheid / maand",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["meer dan 100", "0,90 €"]],
    trailer: "Een aanhanger is 0,5 eenheid, dus 50% van de prijs van een voertuig of machine in dezelfde staffel.",
    mounted: "Gemonteerde apparatuur is gratis en telt niet als eenheid.",
    users: "Het aantal gebruikers is onbeperkt. Er is geen prijs per gebruiker.",
    peak: "De rekening gebruikt het hoogste aantal eenheden in die kalendermaand.",
    trial: "30 dagen gratis proberen. Geen kaart nodig. De rekenhulp toont de prijs na de proefperiode.",
    cta: "30 dagen gratis proberen",
    terms: "Gebruiksvoorwaarden",
    calcTitle: "Rekenhulp voor de maandprijs",
    calcIntro: "Vul het aantal voertuigen en machines in, en het aantal aanhangers. De rekenhulp verdeelt de eenheden over de staffels.",
    vehiclesLabel: "Voertuigen en machines",
    trailersLabel: "Aanhangers",
    vehiclesMath: "Voertuigen en machines",
    trailersMath: "Aanhangers × 0,5",
    totalUnits: "Eenheden totaal",
    unitsSum: "Prijs van de eenheden",
    baseLine: "Basisbedrag",
    monthTotal: "Maandprijs",
    vatShort: "prijzen btw 0%",
    otherTitle: "Andere producten",
    otherIntro: "Voor deze producten is geen prijs gepubliceerd.",
    contact: "Neem contact op",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  fr: {
    metaTitle: "Tarifs | IQSoftCore",
    metaDescription: "Tarifs d’iqFleetSync. Prix TVA 0 %. Forfait de base et prix unitaire par paliers.",
    title: "Tarifs",
    intro: "iqFleetSync se facture avec un forfait de base par entreprise et des unités du parc. Prix TVA 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Forfait de base",
    baseValue: "10,00 € / mois / entreprise",
    unitHeading: "Véhicule ou machine, par mois",
    unitNote: "Le prix est progressif. Les 15 premières unités sont à 1,50 €, les 35 suivantes (16–50) à 1,30 €, les 50 suivantes (51–100) à 1,10 €, et les unités au-delà à 0,90 €. L’ensemble n’est pas facturé au palier de la dernière unité.",
    colRange: "Unités",
    colPrice: "Prix / unité / mois",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["plus de 100", "0,90 €"]],
    trailer: "Une remorque compte pour 0,5 unité, soit 50 % du prix d’un véhicule ou d’une machine dans le même palier.",
    mounted: "Un équipement monté est gratuit et ne compte pas comme unité.",
    users: "Le nombre d’utilisateurs est illimité. Il n’y a pas de prix par utilisateur.",
    peak: "La facture utilise le nombre d’unités le plus élevé du mois civil.",
    trial: "Essai gratuit de 30 jours. Aucune carte demandée. Le calculateur montre le prix après l’essai.",
    cta: "Essayer gratuitement 30 jours",
    terms: "Conditions d’utilisation",
    calcTitle: "Calculateur de prix mensuel",
    calcIntro: "Indiquez le nombre de véhicules et de machines, et le nombre de remorques. Le calculateur répartit les unités sur les paliers.",
    vehiclesLabel: "Véhicules et machines",
    trailersLabel: "Remorques",
    vehiclesMath: "Véhicules et machines",
    trailersMath: "Remorques × 0,5",
    totalUnits: "Unités au total",
    unitsSum: "Prix des unités",
    baseLine: "Forfait de base",
    monthTotal: "Prix mensuel",
    vatShort: "prix TVA 0 %",
    otherTitle: "Autres produits",
    otherIntro: "Aucun prix n’est publié.",
    contact: "Nous contacter",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  es: {
    metaTitle: "Precios | IQSoftCore",
    metaDescription: "Precios de iqFleetSync. Precios IVA 0 %. Cuota base y precio por unidad en tramos.",
    title: "Precios",
    intro: "iqFleetSync se cobra con una cuota base por empresa y unidades del parque. Precios IVA 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Cuota base",
    baseValue: "10,00 € / mes / empresa",
    unitHeading: "Vehículo o máquina, al mes",
    unitNote: "El precio es por tramos. Las primeras 15 unidades son 1,50 €, las 35 siguientes (16–50) son 1,30 €, las 50 siguientes (51–100) son 1,10 € y las que superan 100 son 0,90 €. El total no se cobra según el tramo de la última unidad.",
    colRange: "Unidades",
    colPrice: "Precio / unidad / mes",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["más de 100", "0,90 €"]],
    trailer: "Un remolque es 0,5 unidades, es decir el 50 % del precio de un vehículo o una máquina en el mismo tramo.",
    mounted: "El equipo montado es gratuito y no cuenta como unidad.",
    users: "Los usuarios son ilimitados. No hay un precio por usuario.",
    peak: "La factura usa el mayor número de unidades de ese mes natural.",
    trial: "Prueba gratis de 30 días. No hace falta tarjeta. La calculadora muestra el precio después de la prueba.",
    cta: "Probar gratis 30 días",
    terms: "Condiciones de uso",
    calcTitle: "Calculadora del precio mensual",
    calcIntro: "Indica el número de vehículos y máquinas, y el número de remolques. La calculadora reparte las unidades en los tramos.",
    vehiclesLabel: "Vehículos y máquinas",
    trailersLabel: "Remolques",
    vehiclesMath: "Vehículos y máquinas",
    trailersMath: "Remolques × 0,5",
    totalUnits: "Unidades en total",
    unitsSum: "Precio de las unidades",
    baseLine: "Cuota base",
    monthTotal: "Precio mensual",
    vatShort: "precios IVA 0 %",
    otherTitle: "Otros productos",
    otherIntro: "No hay un precio publicado.",
    contact: "Contactar",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  pt: {
    metaTitle: "Preços | IQSoftCore",
    metaDescription: "Preços do iqFleetSync. Preços IVA 0%. Taxa base e preço por unidade em faixas.",
    title: "Preços",
    intro: "O iqFleetSync é cobrado com uma taxa base por empresa e unidades da frota. Preços IVA 0%.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Taxa base",
    baseValue: "10,00 € / mês / empresa",
    unitHeading: "Veículo ou máquina, por mês",
    unitNote: "O preço é em faixas. As primeiras 15 unidades são 1,50 €, as 35 seguintes (16–50) são 1,30 €, as 50 seguintes (51–100) são 1,10 € e as unidades acima disso são 0,90 €. A quantidade toda não é cobrada pela faixa da última unidade.",
    colRange: "Unidades",
    colPrice: "Preço / unidade / mês",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["acima de 100", "0,90 €"]],
    trailer: "Um reboque é 0,5 unidade, ou seja, 50% do preço de um veículo ou máquina na mesma faixa.",
    mounted: "Equipamento montado é gratuito e não conta como unidade.",
    users: "Os usuários são ilimitados. Não há preço por usuário.",
    peak: "A cobrança usa a maior quantidade de unidades daquele mês.",
    trial: "Teste grátis de 30 dias. Não é preciso cartão. A calculadora mostra o preço depois do teste.",
    cta: "Testar grátis por 30 dias",
    terms: "Termos de uso",
    calcTitle: "Calculadora do preço mensal",
    calcIntro: "Informe o número de veículos e máquinas e o número de reboques. A calculadora divide as unidades nas faixas.",
    vehiclesLabel: "Veículos e máquinas",
    trailersLabel: "Reboques",
    vehiclesMath: "Veículos e máquinas",
    trailersMath: "Reboques × 0,5",
    totalUnits: "Unidades no total",
    unitsSum: "Preço das unidades",
    baseLine: "Taxa base",
    monthTotal: "Preço mensal",
    vatShort: "preços IVA 0%",
    otherTitle: "Outros produtos",
    otherIntro: "Não há preço publicado.",
    contact: "Fale conosco",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  it: {
    metaTitle: "Prezzi | IQSoftCore",
    metaDescription: "Prezzi di iqFleetSync. Prezzi IVA 0%. Quota base e prezzo a scaglioni per unità.",
    title: "Prezzi",
    intro: "iqFleetSync si paga con una quota base per azienda e con le unità del parco. Prezzi IVA 0%.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Quota base",
    baseValue: "10,00 € / mese / azienda",
    unitHeading: "Veicolo o macchina, al mese",
    unitNote: "Il prezzo è a scaglioni. Le prime 15 unità sono 1,50 €, le 35 successive (16–50) sono 1,30 €, le 50 successive (51–100) sono 1,10 € e le unità oltre 100 sono 0,90 €. L’intera quantità non viene calcolata con lo scaglione dell’ultima unità.",
    colRange: "Unità",
    colPrice: "Prezzo / unità / mese",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["oltre 100", "0,90 €"]],
    trailer: "Un rimorchio è 0,5 unità, cioè il 50% del prezzo di un veicolo o di una macchina nello stesso scaglione.",
    mounted: "L’attrezzatura montata è gratuita e non conta come unità.",
    users: "Gli utenti sono illimitati. Non c’è un prezzo per utente.",
    peak: "La fattura usa il numero di unità più alto di quel mese di calendario.",
    trial: "Prova gratuita di 30 giorni. Nessuna carta richiesta. Il calcolatore mostra il prezzo dopo la prova.",
    cta: "Prova gratis per 30 giorni",
    terms: "Condizioni d’uso",
    calcTitle: "Calcolatore del prezzo mensile",
    calcIntro: "Inserisci il numero di veicoli e macchine e il numero di rimorchi. Il calcolatore suddivide le unità negli scaglioni.",
    vehiclesLabel: "Veicoli e macchine",
    trailersLabel: "Rimorchi",
    vehiclesMath: "Veicoli e macchine",
    trailersMath: "Rimorchi × 0,5",
    totalUnits: "Unità in totale",
    unitsSum: "Prezzo delle unità",
    baseLine: "Quota base",
    monthTotal: "Prezzo mensile",
    vatShort: "prezzi IVA 0%",
    otherTitle: "Altri prodotti",
    otherIntro: "Non c’è un prezzo pubblicato.",
    contact: "Contattaci",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  pl: {
    metaTitle: "Cennik | IQSoftCore",
    metaDescription: "Cennik iqFleetSync. Ceny VAT 0%. Opłata podstawowa i cena jednostkowa progami.",
    title: "Cennik",
    intro: "iqFleetSync jest rozliczany opłatą podstawową firmy i jednostkami floty. Ceny VAT 0%.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Opłata podstawowa",
    baseValue: "10,00 € / miesiąc / firma",
    unitHeading: "Pojazd lub maszyna, miesięcznie",
    unitNote: "Cena jest progowa. Pierwsze 15 jednostek kosztuje 1,50 €, kolejne 35 (16–50) 1,30 €, kolejne 50 (51–100) 1,10 €, a jednostki powyżej 100 kosztują 0,90 €. Cała liczba nie jest liczona według progu ostatniej jednostki.",
    colRange: "Jednostki",
    colPrice: "Cena / jednostka / mies.",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["powyżej 100", "0,90 €"]],
    trailer: "Przyczepa to 0,5 jednostki, czyli 50% ceny pojazdu lub maszyny w tym samym progu.",
    mounted: "Zamontowane wyposażenie jest bezpłatne i nie liczy się jako jednostka.",
    users: "Liczba użytkowników jest nieograniczona. Nie ma opłaty za użytkownika.",
    peak: "Rachunek używa największej liczby jednostek w danym miesiącu kalendarzowym.",
    trial: "30 dni bezpłatnie. Karta nie jest potrzebna. Kalkulator pokazuje cenę po okresie próbnym.",
    cta: "Wypróbuj bezpłatnie przez 30 dni",
    terms: "Regulamin",
    calcTitle: "Kalkulator ceny miesięcznej",
    calcIntro: "Podaj liczbę pojazdów i maszyn oraz liczbę przyczep. Kalkulator dzieli jednostki na progi.",
    vehiclesLabel: "Pojazdy i maszyny",
    trailersLabel: "Przyczepy",
    vehiclesMath: "Pojazdy i maszyny",
    trailersMath: "Przyczepy × 0,5",
    totalUnits: "Jednostki łącznie",
    unitsSum: "Cena jednostek",
    baseLine: "Opłata podstawowa",
    monthTotal: "Cena miesięczna",
    vatShort: "ceny VAT 0%",
    otherTitle: "Inne produkty",
    otherIntro: "Nie ma opublikowanej ceny.",
    contact: "Skontaktuj się",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  cs: {
    metaTitle: "Ceník | IQSoftCore",
    metaDescription: "Ceník iqFleetSync. Ceny DPH 0 %. Základní poplatek a odstupňovaná cena za jednotku.",
    title: "Ceník",
    intro: "iqFleetSync se účtuje základním poplatkem firmy a jednotkami flotily. Ceny DPH 0 %.",
    fleetTitle: "iqFleetSync",
    baseLabel: "Základní poplatek",
    baseValue: "10,00 € / měsíc / firma",
    unitHeading: "Vozidlo nebo stroj, za měsíc",
    unitNote: "Cena je odstupňovaná. Prvních 15 jednotek je za 1,50 €, dalších 35 (16–50) za 1,30 €, dalších 50 (51–100) za 1,10 € a jednotky nad 100 za 0,90 €. Celé množství se nepočítá podle pásma poslední jednotky.",
    colRange: "Jednotky",
    colPrice: "Cena / jednotka / měsíc",
    tiers: [["1–15", "1,50 €"], ["16–50", "1,30 €"], ["51–100", "1,10 €"], ["nad 100", "0,90 €"]],
    trailer: "Přívěs je 0,5 jednotky, tedy 50 % ceny vozidla nebo stroje ve stejném pásmu.",
    mounted: "Namontované zařízení je zdarma a nepočítá se jako jednotka.",
    users: "Počet uživatelů není omezen. Za uživatele se nic neúčtuje.",
    peak: "Faktura používá nejvyšší počet jednotek v daném kalendářním měsíci.",
    trial: "30 dní zdarma. Karta není potřeba. Kalkulačka ukazuje cenu po zkušební době.",
    cta: "Vyzkoušet zdarma na 30 dní",
    terms: "Podmínky použití",
    calcTitle: "Kalkulačka měsíční ceny",
    calcIntro: "Zadejte počet vozidel a strojů a počet přívěsů. Kalkulačka rozdělí jednotky do pásem.",
    vehiclesLabel: "Vozidla a stroje",
    trailersLabel: "Přívěsy",
    vehiclesMath: "Vozidla a stroje",
    trailersMath: "Přívěsy × 0,5",
    totalUnits: "Jednotek celkem",
    unitsSum: "Cena jednotek",
    baseLine: "Základní poplatek",
    monthTotal: "Měsíční cena",
    vatShort: "ceny DPH 0 %",
    otherTitle: "Ostatní produkty",
    otherIntro: "Zveřejněná cena není.",
    contact: "Kontaktujte nás",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  ja: {
    metaTitle: "料金 | IQSoftCore",
    metaDescription: "iqFleetSyncの料金。価格は消費税0%。基本料金と段階制の単価。",
    title: "料金",
    intro: "iqFleetSyncは、会社ごとの基本料金と機材の単位数で計算します。価格は消費税0%です。",
    fleetTitle: "iqFleetSync",
    baseLabel: "基本料金",
    baseValue: "10.00 € / 月 / 会社",
    unitHeading: "車両または機械、1か月あたり",
    unitNote: "料金は段階制です。最初の15単位は1.50 €、次の35単位（16–50）は1.30 €、次の50単位（51–100）は1.10 €、それを超える単位は0.90 €です。全体を最後の単位の段階の単価では計算しません。",
    colRange: "単位",
    colPrice: "単価 / 月",
    tiers: [["1–15", "1.50 €"], ["16–50", "1.30 €"], ["51–100", "1.10 €"], ["100超", "0.90 €"]],
    trailer: "トレーラーは0.5単位です。同じ段階の車両または機械の価格の50%です。",
    mounted: "装着した機器は無料で、単位には数えません。",
    users: "ユーザー数は無制限です。ユーザーごとの料金はありません。",
    peak: "請求は、その暦月の最大単位数に基づきます。",
    trial: "30日間の無料試用。カードは不要です。計算機は試用後の料金を表示します。",
    cta: "30日間無料で試す",
    terms: "利用規約",
    calcTitle: "月額の計算機",
    calcIntro: "車両・機械の数とトレーラーの数を入力してください。計算機が単位を段階に分けます。",
    vehiclesLabel: "車両と機械",
    trailersLabel: "トレーラー",
    vehiclesMath: "車両と機械",
    trailersMath: "トレーラー × 0.5",
    totalUnits: "単位の合計",
    unitsSum: "単位の料金",
    baseLine: "基本料金",
    monthTotal: "月額",
    vatShort: "価格は消費税0%",
    otherTitle: "その他の製品",
    otherIntro: "公開された価格はありません。",
    contact: "お問い合わせ",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  ko: {
    metaTitle: "요금 | IQSoftCore",
    metaDescription: "iqFleetSync 요금. 가격 부가세 0%. 기본요금과 구간별 단위 가격.",
    title: "요금",
    intro: "iqFleetSync는 회사별 기본요금과 장비 단위로 계산합니다. 가격은 부가세 0%입니다.",
    fleetTitle: "iqFleetSync",
    baseLabel: "기본요금",
    baseValue: "10.00 € / 월 / 회사",
    unitHeading: "차량 또는 기계, 월 단위",
    unitNote: "요금은 구간제입니다. 처음 15단위는 1.50 €, 다음 35단위(16–50)는 1.30 €, 다음 50단위(51–100)는 1.10 €, 그 위는 0.90 €입니다. 전체 수량을 마지막 단위의 구간 가격으로 계산하지 않습니다.",
    colRange: "단위",
    colPrice: "단위 가격 / 월",
    tiers: [["1–15", "1.50 €"], ["16–50", "1.30 €"], ["51–100", "1.10 €"], ["100 초과", "0.90 €"]],
    trailer: "트레일러는 0.5단위이며, 같은 구간의 차량 또는 기계 가격의 50%입니다.",
    mounted: "장착 장비는 무료이며 단위에 포함하지 않습니다.",
    users: "사용자 수는 제한이 없습니다. 사용자별 요금은 없습니다.",
    peak: "청구는 해당 달의 최대 단위 수를 기준으로 합니다.",
    trial: "30일 무료 체험. 카드는 필요 없습니다. 계산기는 체험 이후 요금을 보여 줍니다.",
    cta: "30일 무료로 사용해 보기",
    terms: "이용약관",
    calcTitle: "월 요금 계산기",
    calcIntro: "차량·기계 수와 트레일러 수를 입력하세요. 계산기가 단위를 구간으로 나눕니다.",
    vehiclesLabel: "차량과 기계",
    trailersLabel: "트레일러",
    vehiclesMath: "차량과 기계",
    trailersMath: "트레일러 × 0.5",
    totalUnits: "단위 합계",
    unitsSum: "단위 요금",
    baseLine: "기본요금",
    monthTotal: "월 요금",
    vatShort: "가격 부가세 0%",
    otherTitle: "다른 제품",
    otherIntro: "공개된 가격이 없습니다.",
    contact: "문의하기",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
  zh: {
    metaTitle: "价格 | IQSoftCore",
    metaDescription: "iqFleetSync 价格。价格增值税 0%。基础费和分档单位价。",
    title: "价格",
    intro: "iqFleetSync 按每家公司的基础费和设备单位计费。价格为增值税 0%。",
    fleetTitle: "iqFleetSync",
    baseLabel: "基础费",
    baseValue: "10.00 € / 月 / 公司",
    unitHeading: "车辆或机器，每月",
    unitNote: "价格按档计算。前 15 个单位为 1.50 €，其后 35 个（16–50）为 1.30 €，再其后 50 个（51–100）为 1.10 €，超过 100 的单位为 0.90 €。不会把全部数量都按最后一个单位所在档的价格计算。",
    colRange: "单位",
    colPrice: "单价 / 月",
    tiers: [["1–15", "1.50 €"], ["16–50", "1.30 €"], ["51–100", "1.10 €"], ["100 以上", "0.90 €"]],
    trailer: "挂车计为 0.5 个单位，即同一档中车辆或机器价格的 50%。",
    mounted: "安装的设备免费，不计入单位。",
    users: "用户数量不限。不按用户收费。",
    peak: "账单按该自然月的最高单位数计算。",
    trial: "30 天免费试用。不需要银行卡。计算器显示试用结束后的价格。",
    cta: "免费试用 30 天",
    terms: "使用条款",
    calcTitle: "月费计算器",
    calcIntro: "输入车辆和机器的数量，以及挂车的数量。计算器会把单位分到各档。",
    vehiclesLabel: "车辆和机器",
    trailersLabel: "挂车",
    vehiclesMath: "车辆和机器",
    trailersMath: "挂车 × 0.5",
    totalUnits: "单位合计",
    unitsSum: "单位费用",
    baseLine: "基础费",
    monthTotal: "月费",
    vatShort: "价格增值税 0%",
    otherTitle: "其他产品",
    otherIntro: "没有公布价格。",
    contact: "联系我们",
    others: [["tuntilappu.html", "Tuntilappu"], ["iqrallynote.html", "iqRallyNote"]],
  },
};

function escapePriceHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatPriceAmount(cents, lang) {
  const locale = PRICE_LOCALES[lang] || "fi-FI";
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
  return formatted + " €";
}

function formatPriceUnits(value, lang) {
  const locale = PRICE_LOCALES[lang] || "fi-FI";
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value);
}

function renderPriceQuote(lang, page, quote) {
  const lines = [
    `<li><span>${escapePriceHtml(page.vehiclesMath)}</span><span>${escapePriceHtml(formatPriceUnits(quote.vehicleUnits, lang))}</span></li>`,
    `<li><span>${escapePriceHtml(page.trailersMath)}</span><span>${escapePriceHtml(formatPriceUnits(quote.trailerUnits, lang))}</span></li>`,
    `<li><span>${escapePriceHtml(page.totalUnits)}</span><span>${escapePriceHtml(formatPriceUnits(quote.totalUnits, lang))}</span></li>`,
  ];

  quote.tiers.forEach((tier) => {
    const label = `${formatPriceUnits(tier.units, lang)} × ${formatPriceAmount(tier.rateCents, lang)}`;
    lines.push(
      `<li><span>${escapePriceHtml(label)}</span><span>${escapePriceHtml(formatPriceAmount(tier.amountCents, lang))}</span></li>`
    );
  });

  lines.push(
    `<li><span>${escapePriceHtml(page.unitsSum)}</span><span>${escapePriceHtml(formatPriceAmount(quote.unitAmountCents, lang))}</span></li>`
  );
  lines.push(
    `<li><span>${escapePriceHtml(page.baseLine)}</span><span>${escapePriceHtml(formatPriceAmount(quote.baseCents, lang))}</span></li>`
  );
  lines.push(
    `<li class="calc-total"><span>${escapePriceHtml(page.monthTotal)}</span><span>${escapePriceHtml(formatPriceAmount(quote.totalCents, lang))}</span></li>`
  );

  return `<ul class="calc-lines">${lines.join("")}</ul><p>${escapePriceHtml(page.vatShort)}. ${escapePriceHtml(page.mounted)} ${escapePriceHtml(page.peak)}</p>`;
}

function renderPricingPage(lang) {
  const root = document.getElementById("pricing-root");
  if (!root || typeof quoteFleetSync !== "function") return;

  const page = PRICING_PAGE[lang] || PRICING_PAGE.en;
  const previousVehicles = document.getElementById("calc-vehicles");
  const previousTrailers = document.getElementById("calc-trailers");
  const vehicleValue = previousVehicles ? previousVehicles.value : "";
  const trailerValue = previousTrailers ? previousTrailers.value : "";

  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = page.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", page.metaDescription);

  const tierRows = page.tiers
    .map(
      ([range, price]) =>
        `<tr><td>${escapePriceHtml(range)}</td><td>${escapePriceHtml(price)}</td></tr>`
    )
    .join("");

  const others = page.others
    .map(
      ([href, name]) => `<article class="other-product">
        <h3><a href="${escapePriceHtml(href)}">${escapePriceHtml(name)}</a></h3>
        <p><a href="index.html#contact">${escapePriceHtml(page.contact)}</a></p>
      </article>`
    )
    .join("");

  root.innerHTML = `<h1>${escapePriceHtml(page.title)}</h1>
    <p>${escapePriceHtml(page.intro)}</p>
    <h2>${escapePriceHtml(page.fleetTitle)}</h2>
    <p><strong>${escapePriceHtml(page.baseLabel)}:</strong> ${escapePriceHtml(page.baseValue)}</p>
    <h2>${escapePriceHtml(page.unitHeading)}</h2>
    <p>${escapePriceHtml(page.unitNote)}</p>
    <table class="price-table">
      <thead><tr><th>${escapePriceHtml(page.colRange)}</th><th>${escapePriceHtml(page.colPrice)}</th></tr></thead>
      <tbody>${tierRows}</tbody>
    </table>
    <ul>
      <li>${escapePriceHtml(page.trailer)}</li>
      <li>${escapePriceHtml(page.mounted)}</li>
      <li>${escapePriceHtml(page.users)}</li>
      <li>${escapePriceHtml(page.peak)}</li>
      <li>${escapePriceHtml(page.trial)}</li>
    </ul>
    <div class="app-actions">
      <a class="btn btn-primary" href="https://fleetsync.iqsoftcore.fi/rekisteroidy">${escapePriceHtml(page.cta)}</a>
      <a class="btn btn-ghost" href="kayttoehdot.html">${escapePriceHtml(page.terms)}</a>
    </div>
    <h2>${escapePriceHtml(page.calcTitle)}</h2>
    <p>${escapePriceHtml(page.calcIntro)}</p>
    <div class="calc-box">
      <div class="calc-fields">
        <div class="field">
          <label for="calc-vehicles">${escapePriceHtml(page.vehiclesLabel)}</label>
          <input id="calc-vehicles" type="number" inputmode="numeric" min="0" step="1" value="">
        </div>
        <div class="field">
          <label for="calc-trailers">${escapePriceHtml(page.trailersLabel)}</label>
          <input id="calc-trailers" type="number" inputmode="numeric" min="0" step="1" value="">
        </div>
      </div>
      <div id="calc-result" aria-live="polite"></div>
    </div>
    <h2>${escapePriceHtml(page.otherTitle)}</h2>
    <p>${escapePriceHtml(page.otherIntro)}</p>
    <div class="other-products">${others}</div>`;

  const vehiclesInput = document.getElementById("calc-vehicles");
  const trailersInput = document.getElementById("calc-trailers");
  const result = document.getElementById("calc-result");
  vehiclesInput.value = vehicleValue;
  trailersInput.value = trailerValue;

  const update = () => {
    const quote = quoteFleetSync(vehiclesInput.value, trailersInput.value);
    result.innerHTML = renderPriceQuote(lang, page, quote);
  };

  vehiclesInput.addEventListener("input", update);
  trailersInput.addEventListener("input", update);
  update();
}
