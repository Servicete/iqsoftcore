/**
 * Help-center articles for fault photos, the service book, fuel logging,
 * file attachments and QR sticker recommendations.
 * Same card markup as the other help articles. No prices in driver or
 * mechanic text. Role visibility is phrased positively.
 */
const FEATURE_HELP = {
  fi: [
    { id: "fault-photos", title: "Vikailmoituksen kuvat", paragraphs: [
      "Kuljettaja lisää vikailmoitukseen enintään viisi kuvaa. Kuvat pakataan ennen lähetystä.",
      "Kuvat näkyvät huoltohenkilölle ja pääkäyttäjälle.",
    ]},
    { id: "service-book", title: "Huoltokirja", paragraphs: [
      "Näkyy vain pääkäyttäjälle.",
      "Yksikön huoltokirjassa ovat huoltokirjaukset, lukemat, työt ja osat sekä liitetiedostojen nimet.",
      "Huoltokirjan voi tulostaa tai tallentaa PDF:nä. Saman listan voi ladata CSV-tiedostona.",
    ]},
    { id: "fuel-log", title: "Tankkaus", paragraphs: [
      "Kuljettaja kirjaa tankkauksen niille yksiköille, jotka on osoitettu hänelle. Kirjaukseen tulevat päivä, litrat ja kilometrit tai käyttötunnit. Kuitti ja muistiinpano ovat valinnaisia.",
      "Kulutus näkyy litroina sataa kilometriä kohti tai litroina tuntia kohti. Poikkeama korostetaan.",
      "Uudempi lukema päivittää yksikön mittarin.",
    ]},
    { id: "file-attachments", title: "Liitetiedostot", paragraphs: [
      "Yksikköön, työmääräimeen ja huoltokirjaukseen voi liittää PDF-tiedoston tai kuvan. Yhden tiedoston koko on enintään 10 megatavua.",
      "Pääkäyttäjä ja huoltohenkilö lisäävät tiedostoja. Tiedoston poistaa sen lisääjä tai pääkäyttäjä.",
      "Laskuluokan tiedostot näkyvät vain pääkäyttäjälle.",
    ]},
    { id: "qr-sticker-advice", title: "QR-tarrasuositukset", paragraphs: [
      "Tarrassa näkyvät QR-koodi, rekisterinumero pääasiallisena tunnuksena, kalustonumero, merkki ja malli, iqFleetSync™ sekä lyhyt osoite r.iqsoftcore.fi ja koodi tekstinä.",
      "Sisätiloihin ja kokeiluun riittää paperi tai vinyylitarra-arkki. Useimpiin ohjaamoihin, kuorma-autoihin ja koneisiin sopii polyesteri ja mattapintainen UV-laminaatti. Se kestää pyyhinnän, öljyn, kosteuden, pakkasen ja pesun.",
      "Vaativiin paikkoihin, kuten perävaunuihin, puutavaraperävaunuihin, painepesuun ja suolaan, sopii anodisoitu alumiini tai ruostumaton teräs. Kiinnitys vahvalla VHB-tyyppisellä teipillä tai niiteillä. Puutavaraperävaunussa tarra on mieluiten pienellä levyllä, joka kiinnitetään runkoon: aisan puolelle lähelle kytkintä, runkopalkin sisäpuolelle tai valotelineeseen.",
      "Kiinnitä suojaiseen paikkaan, pois roiskealueelta. Puhdista pinta ennen kiinnitystä. Pinta on matta, ei kiiltävä. Ulkona koko on vähintään 50×50 mm tai 100×50 mm.",
      "Tulostuspohjat ovat A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) sekä yksittäinen 100×50 mm ja 50×50 mm. Osittain käytetystä arkista valitaan aloitusruutu. Tulosta 100 % eli todellisessa koossa, älä sovita sivulle. Oma tulostus on PDF. Painolle on SVG-paketti zip-tiedostona.",
      "Pääkäyttäjä voi tilata tarrat sovelluksesta: arkki, polyesteri tai ruostumaton teräs. Jos tarra vahingoittuu, paina Uusi koodi ja Tulosta. Vanha koodi lakkaa toimimasta.",
    ]},
  ],
  en: [
    { id: "fault-photos", title: "Fault report photos", paragraphs: [
      "The driver adds up to five photos to a fault report. The photos are compressed before upload.",
      "The photos are visible to maintenance and the administrator.",
    ]},
    { id: "service-book", title: "Service book", paragraphs: [
      "Visible only to the administrator.",
      "A unit’s service book lists service entries, readings, work and parts, and the names of attached files.",
      "The service book can be printed or saved as a PDF. The same list can be downloaded as a CSV file.",
    ]},
    { id: "fuel-log", title: "Fuel logging", paragraphs: [
      "The driver logs fuel for the units assigned to them. The entry has the date, litres, and kilometres or engine hours. A receipt photo and a note are optional.",
      "Consumption shows as litres per 100 kilometres or litres per hour. A deviation is highlighted.",
      "A newer reading updates the unit’s meter.",
    ]},
    { id: "file-attachments", title: "File attachments", paragraphs: [
      "A PDF or an image can be attached to a unit, a work order and a service entry. One file is at most 10 megabytes.",
      "The administrator and maintenance add files. The person who added a file, or the administrator, deletes it.",
      "Invoice-category files are visible only to the administrator.",
    ]},
    { id: "qr-sticker-advice", title: "QR sticker recommendations", paragraphs: [
      "The sticker shows the QR code, the registration number as the main identifier, the fleet number, make and model, iqFleetSync™, and the short address r.iqsoftcore.fi plus the code as text.",
      "Paper or a vinyl sheet is enough indoors and for a trial. Polyester with a matte UV laminate suits most cabs, trucks and machines. It stands up to wiping, oil, moisture, frost and washing.",
      "Anodised aluminium or stainless steel suits harsh spots such as trailers, log trailers, pressure washing and salt. Fix it with strong VHB-type tape or rivets. On a log trailer, put the sticker on a small plate fixed to the frame: on the drawbar side near the coupling, on the inner side of the frame rail, or on a light bracket.",
      "Place it in a sheltered spot, away from the splash zone. Clean the surface before fixing. Use a matte surface, not gloss. Outdoors the size is at least 50×50 mm or 100×50 mm.",
      "Print layouts are A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48.5×25.4 mm), and a single 100×50 mm and 50×50 mm. On a partly used sheet, choose the start cell. Print at 100 %, actual size, and do not fit to page. A PDF is for your own printing. An SVG package in a zip file is for a print shop.",
      "The administrator can order stickers from the app: a sheet, polyester or stainless steel. If a sticker is damaged, press New code and Print. The old code stops working.",
    ]},
  ],
  sv: [
    { id: "fault-photos", title: "Bilder i felanmälan", paragraphs: [
      "Föraren lägger till högst fem bilder i en felanmälan. Bilderna komprimeras före sändning.",
      "Bilderna syns för underhållspersonal och administratören.",
    ]},
    { id: "service-book", title: "Servicebok", paragraphs: [
      "Syns bara för administratören.",
      "Enhetens servicebok listar serviceposter, mätarställningar, arbete och delar samt namnen på bifogade filer.",
      "Serviceboken kan skrivas ut eller sparas som PDF. Samma lista kan laddas ner som CSV.",
    ]},
    { id: "fuel-log", title: "Tankning", paragraphs: [
      "Föraren skriver tankning för de enheter som är tilldelade hen. Posten har datum, liter och kilometer eller drifttimmar. Kvittobild och anteckning är valfria.",
      "Förbrukningen visas som liter per 100 kilometer eller liter per timme. En avvikelse markeras.",
      "En nyare ställning uppdaterar enhetens mätare.",
    ]},
    { id: "file-attachments", title: "Bilagor", paragraphs: [
      "En PDF eller en bild kan bifogas en enhet, en arbetsorder och en servicepost. En fil är högst 10 megabyte.",
      "Administratören och underhållspersonal lägger till filer. Den som lade till filen, eller administratören, tar bort den.",
      "Filer i fakturaklassen syns bara för administratören.",
    ]},
    { id: "qr-sticker-advice", title: "Rekommendationer för QR-dekaler", paragraphs: [
      "Dekalen visar QR-koden, registreringsnumret som huvudbeteckning, fordonsnumret, märke och modell, iqFleetSync™ samt den korta adressen r.iqsoftcore.fi och koden som text.",
      "Papper eller ett vinylark räcker inomhus och för prov. Polyester med matt UV-laminat passar de flesta hytter, lastbilar och maskiner. Det tål avtorkning, olja, fukt, frost och tvätt.",
      "Anodiserad aluminium eller rostfritt stål passar tuffa platser som släp, timmersläp, högtryckstvätt och salt. Fäst med stark tejp av VHB-typ eller nitar. På ett timmersläp sitter dekalen helst på en liten plåt fäst i ramen: på dragstångssidan nära kopplingen, på ramens insida eller på en lamphållare.",
      "Fäst på en skyddad plats, borta från stänk. Rengör ytan före fästning. Ytan är matt, inte blank. Utomhus är storleken minst 50×50 mm eller 100×50 mm.",
      "Trycklayouter är A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) samt enstaka 100×50 mm och 50×50 mm. På ett delvis använt ark väljs startrutan. Skriv ut i 100 %, verklig storlek, och anpassa inte till sidan. PDF är för egen utskrift. Ett SVG-paket i en zip-fil är för tryckeriet.",
      "Administratören kan beställa dekaler i appen: ark, polyester eller rostfritt stål. Om dekalen skadas, tryck Ny kod och Skriv ut. Den gamla koden slutar fungera.",
    ]},
  ],
  no: [
    { id: "fault-photos", title: "Bilder i feilmelding", paragraphs: [
      "Sjåføren legger til inntil fem bilder i en feilmelding. Bildene komprimeres før sending.",
      "Bildene er synlige for vedlikehold og administrator.",
    ]},
    { id: "service-book", title: "Servicebok", paragraphs: [
      "Synlig bare for administrator.",
      "Enhetens servicebok viser serviceposter, målerstand, arbeid og deler, og navnene på vedlagte filer.",
      "Serviceboken kan skrives ut eller lagres som PDF. Samme liste kan lastes ned som CSV.",
    ]},
    { id: "fuel-log", title: "Tanking", paragraphs: [
      "Sjåføren skriver tanking for enhetene som er tildelt hen. Posten har dato, liter og kilometer eller driftstimer. Kvitteringsbilde og notat er valgfritt.",
      "Forbruket vises som liter per 100 kilometer eller liter per time. Et avvik utheves.",
      "En nyere stilling oppdaterer enhetens måler.",
    ]},
    { id: "file-attachments", title: "Vedlegg", paragraphs: [
      "En PDF eller et bilde kan legges ved en enhet, en arbeidsordre og en servicepost. Én fil er høyst 10 megabyte.",
      "Administrator og vedlikehold legger til filer. Den som la til filen, eller administrator, sletter den.",
      "Filer i fakturaklassen er synlige bare for administrator.",
    ]},
    { id: "qr-sticker-advice", title: "Anbefalinger for QR-merker", paragraphs: [
      "Merket viser QR-koden, registreringsnummeret som hovedkjennetegn, flåtenummer, merke og modell, iqFleetSync™ og den korte adressen r.iqsoftcore.fi pluss koden som tekst.",
      "Papir eller et vinylark holder innendørs og til prøve. Polyester med matt UV-laminat passer de fleste førerhus, lastebiler og maskiner. Det tåler avtørking, olje, fukt, frost og vask.",
      "Anodisert aluminium eller rustfritt stål passer tøffe steder som tilhengere, tømmerhengere, høytrykksspyling og salt. Fest med sterk teip av VHB-type eller nagler. På en tømmerhenger sitter merket helst på en liten plate festet til rammen: på dragstangsiden nær koplingen, på innsiden av rammebjelken eller på en lampebrakett.",
      "Fest på et skjermet sted, unna sprut. Rengjør flaten før festing. Overflaten er matt, ikke blank. Utendørs er størrelsen minst 50×50 mm eller 100×50 mm.",
      "Utskriftsoppsett er A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) og enkeltmerke 100×50 mm og 50×50 mm. På et delvis brukt ark velges startruten. Skriv ut i 100 %, faktisk størrelse, og ikke tilpass siden. PDF er til egen utskrift. En SVG-pakke i en zip-fil er til trykkeriet.",
      "Administratoren kan bestille merker i appen: ark, polyester eller rustfritt stål. Hvis merket skades, trykk Ny kode og Skriv ut. Den gamle koden slutter å virke.",
    ]},
  ],
  da: [
    { id: "fault-photos", title: "Billeder i fejlmelding", paragraphs: [
      "Chaufføren tilføjer højst fem billeder til en fejlmelding. Billederne komprimeres før afsendelse.",
      "Billederne er synlige for vedligehold og administrator.",
    ]},
    { id: "service-book", title: "Servicebog", paragraphs: [
      "Synlig kun for administrator.",
      "Enhedens servicebog viser serviceposter, målerstand, arbejde og dele samt navnene på vedhæftede filer.",
      "Servicebogen kan udskrives eller gemmes som PDF. Samme liste kan hentes som CSV.",
    ]},
    { id: "fuel-log", title: "Tankning", paragraphs: [
      "Chaufføren skriver tankning for de enheder, der er tildelt vedkommende. Posten har dato, liter og kilometer eller driftstimer. Kvitteringsbillede og note er valgfrie.",
      "Forbruget vises som liter pr. 100 kilometer eller liter pr. time. En afvigelse fremhæves.",
      "En nyere stilling opdaterer enhedens måler.",
    ]},
    { id: "file-attachments", title: "Vedhæftede filer", paragraphs: [
      "En PDF eller et billede kan vedhæftes en enhed, en arbejdsordre og en servicepost. Én fil er højst 10 megabyte.",
      "Administrator og vedligehold tilføjer filer. Den, der tilføjede filen, eller administrator, sletter den.",
      "Filer i fakturaklassen er kun synlige for administrator.",
    ]},
    { id: "qr-sticker-advice", title: "Anbefalinger til QR-mærker", paragraphs: [
      "Mærket viser QR-koden, registreringsnummeret som hovedkendetegn, flådenummer, mærke og model, iqFleetSync™ og den korte adresse r.iqsoftcore.fi plus koden som tekst.",
      "Papir eller et vinylark rækker indendørs og til prøve. Polyester med mat UV-laminat passer til de fleste førerhuse, lastbiler og maskiner. Det tåler aftørring, olie, fugt, frost og vask.",
      "Anodiseret aluminium eller rustfrit stål passer til hårde steder som anhængere, tømmeranhængere, højtryksvask og salt. Fastgør med stærk tape af VHB-type eller nitter. På en tømmeranhænger sidder mærket helst på en lille plade fastgjort til rammen: på trækstangssiden nær koblingen, på indersiden af rammebjælken eller på en lygteholder.",
      "Sæt det et beskyttet sted, væk fra stænk. Rengør fladen før fastgørelse. Overfladen er mat, ikke blank. Udendørs er størrelsen mindst 50×50 mm eller 100×50 mm.",
      "Udskriftslayout er A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) samt enkeltmærke 100×50 mm og 50×50 mm. På et delvist brugt ark vælges startruden. Udskriv i 100 %, faktisk størrelse, og tilpas ikke til siden. PDF er til egen udskrift. En SVG-pakke i en zip-fil er til trykkeriet.",
      "Administratoren kan bestille mærker i appen: ark, polyester eller rustfrit stål. Hvis mærket beskadiges, tryk Ny kode og Udskriv. Den gamle kode holder op med at virke.",
    ]},
  ],
  de: [
    { id: "fault-photos", title: "Fotos in der Mängelmeldung", paragraphs: [
      "Der Fahrer fügt einer Mängelmeldung bis zu fünf Fotos hinzu. Die Fotos werden vor dem Senden komprimiert.",
      "Die Fotos sind für die Werkstatt und die Administration sichtbar.",
    ]},
    { id: "service-book", title: "Servicebuch", paragraphs: [
      "Sichtbar nur für die Administration.",
      "Das Servicebuch einer Einheit listet Serviceeinträge, Zählerstände, Arbeiten und Teile sowie die Namen der angehängten Dateien.",
      "Das Servicebuch kann gedruckt oder als PDF gespeichert werden. Dieselbe Liste kann als CSV geladen werden.",
    ]},
    { id: "fuel-log", title: "Tanken", paragraphs: [
      "Der Fahrer erfasst das Tanken für die ihm zugewiesenen Einheiten. Der Eintrag enthält Datum, Liter und Kilometer oder Betriebsstunden. Ein Belegfoto und eine Notiz sind optional.",
      "Der Verbrauch erscheint als Liter je 100 Kilometer oder Liter je Stunde. Eine Abweichung wird hervorgehoben.",
      "Ein neuerer Stand aktualisiert den Zähler der Einheit.",
    ]},
    { id: "file-attachments", title: "Dateianhänge", paragraphs: [
      "Ein PDF oder ein Foto kann an eine Einheit, einen Auftrag und einen Serviceeintrag angehängt werden. Eine Datei ist höchstens 10 Megabyte groß.",
      "Die Administration und die Werkstatt fügen Dateien hinzu. Wer die Datei hinzugefügt hat, oder die Administration, löscht sie.",
      "Dateien der Rechnungsklasse sind nur für die Administration sichtbar.",
    ]},
    { id: "qr-sticker-advice", title: "Empfehlungen für QR-Aufkleber", paragraphs: [
      "Der Aufkleber zeigt den QR-Code, das Kennzeichen als Hauptkennung, die Fuhrparknummer, Marke und Modell, iqFleetSync™ sowie die Kurzadresse r.iqsoftcore.fi und den Code als Text.",
      "Papier oder eine Vinylfolie genügt in Innenräumen und für einen Versuch. Polyester mit mattem UV-Laminat passt zu den meisten Fahrerhäusern, Lkw und Maschinen. Es hält Wischen, Öl, Feuchte, Frost und Waschen stand.",
      "Eloxiertes Aluminium oder Edelstahl passt an raue Stellen wie Anhänger, Holzanhänger, Hochdruckreinigung und Salz. Befestigung mit starkem Klebeband vom Typ VHB oder mit Nieten. Am Holzanhänger sitzt der Aufkleber am besten auf einem kleinen Blech am Rahmen: an der Deichselseite nahe der Kupplung, an der Innenseite des Rahmenholmes oder an einem Leuchtenhalter.",
      "An einem geschützten Ort anbringen, weg vom Spritzbereich. Die Fläche vor dem Anbringen reinigen. Die Oberfläche ist matt, nicht glänzend. Im Freien beträgt die Größe mindestens 50×50 mm oder 100×50 mm.",
      "Drucklayouts sind A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) sowie einzeln 100×50 mm und 50×50 mm. Auf einem angebrochenen Bogen wird die Startzelle gewählt. Druck mit 100 %, in Originalgröße, nicht an die Seite anpassen. PDF ist für den eigenen Druck. Ein SVG-Paket als Zip-Datei ist für die Druckerei.",
      "Die Administration kann Aufkleber in der App bestellen: Bogen, Polyester oder Edelstahl. Ist der Aufkleber beschädigt, Neuer Code und Drucken wählen. Der alte Code funktioniert nicht mehr.",
    ]},
  ],
  es: [
    { id: "fault-photos", title: "Fotos del aviso de avería", paragraphs: [
      "El conductor añade hasta cinco fotos a un aviso de avería. Las fotos se comprimen antes del envío.",
      "Las fotos son visibles para mantenimiento y la administración.",
    ]},
    { id: "service-book", title: "Libro de mantenimiento", paragraphs: [
      "Visible solo para la administración.",
      "El libro de mantenimiento de una unidad lista los registros, las lecturas, el trabajo y las piezas, y los nombres de los archivos adjuntos.",
      "El libro se puede imprimir o guardar como PDF. La misma lista se puede descargar como CSV.",
    ]},
    { id: "fuel-log", title: "Repostaje", paragraphs: [
      "El conductor anota el repostaje de las unidades que tiene asignadas. El registro lleva fecha, litros y kilómetros u horas de motor. La foto del recibo y una nota son opcionales.",
      "El consumo se ve en litros por 100 kilómetros o en litros por hora. Una desviación se resalta.",
      "Una lectura más reciente actualiza el contador de la unidad.",
    ]},
    { id: "file-attachments", title: "Archivos adjuntos", paragraphs: [
      "Se puede adjuntar un PDF o una imagen a una unidad, una orden de trabajo y un registro de mantenimiento. Un archivo pesa como máximo 10 megabytes.",
      "La administración y el mantenimiento añaden archivos. Quien añadió el archivo, o la administración, lo elimina.",
      "Los archivos de la categoría de factura son visibles solo para la administración.",
    ]},
    { id: "qr-sticker-advice", title: "Recomendaciones de etiquetas QR", paragraphs: [
      "La etiqueta muestra el código QR, la matrícula como identificador principal, el número de flota, la marca y el modelo, iqFleetSync™ y la dirección corta r.iqsoftcore.fi más el código en texto.",
      "El papel o una hoja de vinilo bastan en interior y para una prueba. El poliéster con laminado UV mate sirve para la mayoría de cabinas, camiones y máquinas. Resiste el frotado, el aceite, la humedad, el hielo y el lavado.",
      "El aluminio anodizado o el acero inoxidable sirven en sitios duros, como remolques, remolques de troncos, lavado a presión y sal. Se fija con cinta fuerte de tipo VHB o con remaches. En un remolque de troncos, la etiqueta va mejor en una placa pequeña fijada al bastidor: en el lado de la lanza cerca del enganche, en el interior del larguero o en un soporte de luz.",
      "Colóquela en un lugar resguardado, lejos de las salpicaduras. Limpie la superficie antes de fijarla. La superficie es mate, no brillante. En exterior el tamaño es al menos 50×50 mm o 100×50 mm.",
      "Los diseños de impresión son A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) y una sola de 100×50 mm y 50×50 mm. En una hoja a medias se elige la casilla de inicio. Imprima al 100 %, tamaño real, sin ajustar a la página. El PDF es para imprimir uno mismo. Un paquete SVG en zip es para la imprenta.",
      "La administración puede pedir etiquetas en la aplicación: hoja, poliéster o acero inoxidable. Si la etiqueta se daña, pulse Código nuevo e Imprimir. El código antiguo deja de funcionar.",
    ]},
  ],
  it: [
    { id: "fault-photos", title: "Foto della segnalazione", paragraphs: [
      "Il conducente aggiunge fino a cinque foto a una segnalazione di guasto. Le foto vengono compresse prima dell’invio.",
      "Le foto sono visibili all’officina e all’amministratore.",
    ]},
    { id: "service-book", title: "Libretto di manutenzione", paragraphs: [
      "Visibile solo all’amministratore.",
      "Il libretto di un’unità elenca gli interventi, le letture, il lavoro e i ricambi, e i nomi dei file allegati.",
      "Il libretto si può stampare o salvare in PDF. Lo stesso elenco si può scaricare in CSV.",
    ]},
    { id: "fuel-log", title: "Rifornimento", paragraphs: [
      "Il conducente registra il rifornimento per le unità assegnate. La voce ha data, litri e chilometri o ore motore. La foto dello scontrino e una nota sono facoltative.",
      "Il consumo si vede in litri per 100 chilometri o in litri all’ora. Uno scostamento viene evidenziato.",
      "Una lettura più recente aggiorna il contatore dell’unità.",
    ]},
    { id: "file-attachments", title: "File allegati", paragraphs: [
      "Un PDF o un’immagine si può allegare a un’unità, a un ordine di lavoro e a una voce di manutenzione. Un file è al massimo di 10 megabyte.",
      "L’amministratore e l’officina aggiungono i file. Chi ha aggiunto il file, o l’amministratore, lo elimina.",
      "I file della categoria fattura sono visibili solo all’amministratore.",
    ]},
    { id: "qr-sticker-advice", title: "Consigli per le etichette QR", paragraphs: [
      "L’etichetta mostra il codice QR, la targa come identificativo principale, il numero di flotta, marca e modello, iqFleetSync™ e l’indirizzo breve r.iqsoftcore.fi più il codice in testo.",
      "Carta o un foglio in vinile bastano al chiuso e per una prova. Il poliestere con laminato UV opaco va bene per la maggior parte di cabine, camion e macchine. Resiste a strofinamento, olio, umidità, gelo e lavaggio.",
      "Alluminio anodizzato o acciaio inox vanno nei punti duri, come rimorchi, rimorchi per tronchi, idropulizia e sale. Si fissa con nastro forte di tipo VHB o con rivetti. Su un rimorchio per tronchi l’etichetta sta meglio su una piastrina fissata al telaio: lato timone vicino all’aggancio, lato interno del longherone o staffa delle luci.",
      "Mettila in un punto riparato, lontano dagli spruzzi. Pulisci la superficie prima di fissarla. La superficie è opaca, non lucida. All’aperto la misura è almeno 50×50 mm o 100×50 mm.",
      "I layout di stampa sono A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) e singole 100×50 mm e 50×50 mm. Su un foglio già usato si sceglie la cella di partenza. Stampa al 100 %, dimensioni reali, senza adattare alla pagina. Il PDF è per la stampa propria. Un pacchetto SVG in zip è per la tipografia.",
      "L’amministratore può ordinare le etichette dall’app: foglio, poliestere o acciaio inox. Se l’etichetta si rovina, premi Nuovo codice e Stampa. Il vecchio codice smette di funzionare.",
    ]},
  ],
  fr: [
    { id: "fault-photos", title: "Photos du signalement", paragraphs: [
      "Le conducteur ajoute jusqu’à cinq photos à un signalement de panne. Les photos sont compressées avant l’envoi.",
      "Les photos sont visibles pour l’entretien et l’administrateur.",
    ]},
    { id: "service-book", title: "Carnet d’entretien", paragraphs: [
      "Visible seulement pour l’administrateur.",
      "Le carnet d’une unité liste les écritures d’entretien, les relevés, le travail et les pièces, et les noms des fichiers joints.",
      "Le carnet peut être imprimé ou enregistré en PDF. La même liste peut être téléchargée en CSV.",
    ]},
    { id: "fuel-log", title: "Plein de carburant", paragraphs: [
      "Le conducteur note le plein pour les unités qui lui sont attribuées. L’écriture a la date, les litres et les kilomètres ou les heures moteur. La photo du reçu et une note sont facultatives.",
      "La consommation s’affiche en litres aux 100 kilomètres ou en litres par heure. Un écart est mis en évidence.",
      "Un relevé plus récent met à jour le compteur de l’unité.",
    ]},
    { id: "file-attachments", title: "Fichiers joints", paragraphs: [
      "Un PDF ou une image peut être joint à une unité, à un ordre de travail et à une écriture d’entretien. Un fichier fait au plus 10 mégaoctets.",
      "L’administrateur et l’entretien ajoutent les fichiers. La personne qui a ajouté le fichier, ou l’administrateur, le supprime.",
      "Les fichiers de la catégorie facture sont visibles seulement pour l’administrateur.",
    ]},
    { id: "qr-sticker-advice", title: "Recommandations pour les étiquettes QR", paragraphs: [
      "L’étiquette montre le code QR, l’immatriculation comme identifiant principal, le numéro de parc, la marque et le modèle, iqFleetSync™, et l’adresse courte r.iqsoftcore.fi plus le code en texte.",
      "Le papier ou une feuille vinyle suffit à l’intérieur et pour un essai. Le polyester avec un laminé UV mat convient à la plupart des cabines, camions et machines. Il résiste à l’essuyage, à l’huile, à l’humidité, au gel et au lavage.",
      "L’aluminium anodisé ou l’acier inoxydable convient aux endroits durs : remorques, remorques forestières, lavage haute pression et sel. Fixation avec un ruban fort de type VHB ou des rivets. Sur une remorque forestière, l’étiquette est de préférence sur une petite plaque fixée au châssis : côté timon près de l’attelage, côté intérieur du longeron, ou support de feu.",
      "Placez-la à l’abri, loin des projections. Nettoyez la surface avant de la fixer. La surface est mate, pas brillante. Dehors, la taille est d’au moins 50×50 mm ou 100×50 mm.",
      "Les mises en page sont A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm), et une seule de 100×50 mm et 50×50 mm. Sur une feuille entamée, choisissez la case de départ. Imprimez à 100 %, taille réelle, sans ajuster à la page. Le PDF sert à l’impression soi-même. Un paquet SVG en zip sert à l’imprimeur.",
      "L’administrateur peut commander des étiquettes dans l’application : feuille, polyester ou acier inoxydable. Si l’étiquette est abîmée, appuyez sur Nouveau code et Imprimer. L’ancien code cesse de fonctionner.",
    ]},
  ],
  et: [
    { id: "fault-photos", title: "Rikketeate fotod", paragraphs: [
      "Juht lisab rikketeatele kuni viis fotot. Fotod pakitakse enne saatmist.",
      "Fotod on nähtavad hooldusele ja haldurile.",
    ]},
    { id: "service-book", title: "Hooldusraamat", paragraphs: [
      "Nähtav ainult haldurile.",
      "Üksuse hooldusraamatus on hoolduskirjed, näidud, tööd ja osad ning lisatud failide nimed.",
      "Hooldusraamatu saab printida või salvestada PDF-ina. Sama nimekirja saab alla laadida CSV-failina.",
    ]},
    { id: "fuel-log", title: "Tankimine", paragraphs: [
      "Juht kirjutab tankimise talle määratud üksustele. Kirjes on kuupäev, liitrid ja kilomeetrid või töötunnid. Kviitungi foto ja märkus on valikulised.",
      "Kulu näeb liitrites 100 kilomeetri kohta või liitrites tunnis. Kõrvalekalle tuuakse esile.",
      "Uuem näit uuendab üksuse mõõdikut.",
    ]},
    { id: "file-attachments", title: "Lisatud failid", paragraphs: [
      "Üksusele, töökäsule ja hoolduskirjele saab lisada PDF-i või pildi. Üks fail on kuni 10 megabaiti.",
      "Haldur ja hooldus lisavad faile. Faili kustutab selle lisanu või haldur.",
      "Arveklassi failid on nähtavad ainult haldurile.",
    ]},
    { id: "qr-sticker-advice", title: "QR-kleebise soovitused", paragraphs: [
      "Kleebisel on QR-kood, registreerimisnumber peamise tunnusena, masinapargi number, mark ja mudel, iqFleetSync™ ning lühiaadress r.iqsoftcore.fi ja kood tekstina.",
      "Siseruumis ja prooviks piisab paberist või vinüülilehest. Enamikule kabiinidele, veokitele ja masinatele sobib polüester mati UV-laminaadiga. See talub pühkimist, õli, niiskust, pakast ja pesu.",
      "Rasketesse kohtadesse, nagu haagised, palgiveohaagised, survepesu ja sool, sobib anodeeritud alumiinium või roostevaba teras. Kinnitus tugeva VHB-tüüpi teibiga või neetidega. Palgiveohaagisel on kleebis parem väikesel plaadil, mis kinnitatakse raamile: tiisli poolele haakeseadme lähedale, raamitala siseküljele või tuleklambrile.",
      "Kinnita varjatud kohta, eemale pritsmetest. Puhasta pind enne kinnitamist. Pind on matt, mitte läikiv. Õues on suurus vähemalt 50×50 mm või 100×50 mm.",
      "Trükipaigutused on A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) ning üksik 100×50 mm ja 50×50 mm. Osaliselt kasutatud lehel valitakse algusruut. Trüki 100 %, tegelikus suuruses, ära mahuta lehele. Oma trükk on PDF. Trükikojale on SVG-pakett zip-failina.",
      "Haldur saab tellida kleebised rakendusest: leht, polüester või roostevaba teras. Kui kleebis saab viga, vajuta Uus kood ja Prindi. Vana kood lakkab töötamast.",
    ]},
  ],
  lv: [
    { id: "fault-photos", title: "Defekta ziņojuma foto", paragraphs: [
      "Vadītājs defekta ziņojumam pievieno līdz piecām fotogrāfijām. Tās tiek saspiestas pirms nosūtīšanas.",
      "Fotogrāfijas ir redzamas apkopei un administratoram.",
    ]},
    { id: "service-book", title: "Apkopes grāmata", paragraphs: [
      "Redzama tikai administratoram.",
      "Vienības apkopes grāmatā ir apkopes ieraksti, rādījumi, darbs un detaļas, kā arī pievienoto failu nosaukumi.",
      "Apkopes grāmatu var izdrukāt vai saglabāt kā PDF. To pašu sarakstu var lejupielādēt kā CSV.",
    ]},
    { id: "fuel-log", title: "Uzpilde", paragraphs: [
      "Vadītājs raksta uzpildi viņam piešķirtajām vienībām. Ierakstā ir datums, litri un kilometri vai motora stundas. Čeka foto un piezīme nav obligāti.",
      "Patēriņš redzams litros uz 100 kilometriem vai litros stundā. Novirze tiek izcelta.",
      "Jaunāks rādījums atjaunina vienības skaitītāju.",
    ]},
    { id: "file-attachments", title: "Pievienotie faili", paragraphs: [
      "Vienībai, darba uzdevumam un apkopes ierakstam var pievienot PDF vai attēlu. Viens fails ir līdz 10 megabaitiem.",
      "Administrators un apkope pievieno failus. Failu dzēš tā pievienotājs vai administrators.",
      "Rēķina kategorijas faili ir redzami tikai administratoram.",
    ]},
    { id: "qr-sticker-advice", title: "QR uzlīmju ieteikumi", paragraphs: [
      "Uzlīme rāda QR kodu, reģistrācijas numuru kā galveno apzīmējumu, autoparka numuru, marku un modeli, iqFleetSync™ un īso adresi r.iqsoftcore.fi plus kodu kā tekstu.",
      "Iekštelpās un izmēģinājumam pietiek ar papīru vai vinila lapu. Lielākajai daļai kabīņu, kravas auto un mašīnu der poliesters ar matētu UV laminātu. Tas iztur slaucīšanu, eļļu, mitrumu, salu un mazgāšanu.",
      "Anodēts alumīnijs vai nerūsējošs tērauds der skarbām vietām, piemēram, piekabēm, kokvedēja piekabēm, augstspiediena mazgāšanai un sālim. Stiprinājums ar stipru VHB tipa lenti vai kniedēm. Kokvedēja piekabē uzlīme labāk ir uz nelielas plāksnes, kas piestiprināta rāmim: jūgstieņa pusē pie sakabes, rāmja sijas iekšpusē vai luktura kronšteinā.",
      "Nostipriniet aizsargātā vietā, prom no šļakatām. Pirms stiprināšanas notīriet virsmu. Virsma ir matēta, nevis spīdīga. Ārā izmērs ir vismaz 50×50 mm vai 100×50 mm.",
      "Drukas izkārtojumi ir A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) un atsevišķi 100×50 mm un 50×50 mm. Daļēji lietotā lapā izvēlas sākuma rūtiņu. Drukājiet 100 %, īstajā izmērā, nepielāgojot lapai. PDF ir savai drukai. SVG pakete zip failā ir tipogrāfijai.",
      "Administrators var pasūtīt uzlīmes lietotnē: lapa, poliesters vai nerūsējošs tērauds. Ja uzlīme bojāta, spiediet Jauns kods un Drukāt. Vecais kods vairs nedarbojas.",
    ]},
  ],
  lt: [
    { id: "fault-photos", title: "Gedimo pranešimo nuotraukos", paragraphs: [
      "Vairuotojas prie gedimo pranešimo prideda ne daugiau kaip penkias nuotraukas. Jos suglaudinamos prieš siuntimą.",
      "Nuotraukos matomos priežiūrai ir administratoriui.",
    ]},
    { id: "service-book", title: "Priežiūros knyga", paragraphs: [
      "Matoma tik administratoriui.",
      "Vieneto priežiūros knygoje yra priežiūros įrašai, rodmenys, darbas ir dalys bei pridėtų failų pavadinimai.",
      "Priežiūros knygą galima atspausdinti arba išsaugoti kaip PDF. Tą patį sąrašą galima atsisiųsti kaip CSV.",
    ]},
    { id: "fuel-log", title: "Pilamas kuras", paragraphs: [
      "Vairuotojas rašo kuro pylimą jam priskirtiems vienetams. Įraše yra data, litrai ir kilometrai arba variklio valandos. Kvito nuotrauka ir pastaba neprivalomos.",
      "Sąnaudos matomos litrais 100 kilometrų arba litrais per valandą. Nuokrypis paryškinamas.",
      "Naujesnis rodmuo atnaujina vieneto skaitiklį.",
    ]},
    { id: "file-attachments", title: "Pridėti failai", paragraphs: [
      "Prie vieneto, darbo užsakymo ir priežiūros įrašo galima pridėti PDF arba paveikslą. Vienas failas yra ne didesnis kaip 10 megabaitų.",
      "Administratorius ir priežiūra prideda failus. Failą ištrina jį pridėjęs asmuo arba administratorius.",
      "Sąskaitos kategorijos failai matomi tik administratoriui.",
    ]},
    { id: "qr-sticker-advice", title: "QR lipdukų rekomendacijos", paragraphs: [
      "Lipduke matomas QR kodas, registracijos numeris kaip pagrindinis žymuo, parko numeris, markė ir modelis, iqFleetSync™ ir trumpas adresas r.iqsoftcore.fi bei kodas tekstu.",
      "Viduje ir bandymui pakanka popieriaus arba vinilo lapo. Daugumai kabinų, sunkvežimių ir mašinų tinka poliesteris su matiniu UV laminatu. Jis atlaiko valymą, alyvą, drėgmę, šaltį ir plovimą.",
      "Anoduotas aliuminis arba nerūdijantis plienas tinka atšiaurioms vietoms, pavyzdžiui, priekaboms, rąstų priekaboms, aukšto slėgio plovimui ir druskai. Tvirtinama stipria VHB tipo juosta arba kniedėmis. Rąstų priekaboje lipdukas geriau ant mažos plokštelės, pritvirtintos prie rėmo: grąžulo pusėje prie sukabinimo, rėmo sijos viduje arba žibinto laikiklyje.",
      "Tvirtinkite apsaugotoje vietoje, toliau nuo purslų. Prieš tvirtinimą nuvalykite paviršių. Paviršius matinis, ne blizgus. Lauke dydis bent 50×50 mm arba 100×50 mm.",
      "Spausdinimo išdėstymai yra A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) ir pavieniai 100×50 mm bei 50×50 mm. Dalinai naudotame lape pasirenkamas pradžios langelis. Spausdinkite 100 %, tikru dydžiu, netalpinkite į puslapį. PDF skirtas savam spausdinimui. SVG paketas zip faile skirtas spaustuvei.",
      "Administratorius gali užsakyti lipdukus programoje: lapas, poliesteris arba nerūdijantis plienas. Jei lipdukas pažeistas, paspauskite Naujas kodas ir Spausdinti. Senas kodas nustoja veikti.",
    ]},
  ],
  pl: [
    { id: "fault-photos", title: "Zdjęcia zgłoszenia usterki", paragraphs: [
      "Kierowca dodaje do zgłoszenia usterki najwyżej pięć zdjęć. Zdjęcia są kompresowane przed wysłaniem.",
      "Zdjęcia są widoczne dla serwisu i administratora.",
    ]},
    { id: "service-book", title: "Książka serwisowa", paragraphs: [
      "Widoczna tylko dla administratora.",
      "Książka serwisowa jednostki wymienia wpisy serwisowe, odczyty, pracę i części oraz nazwy dołączonych plików.",
      "Książkę można wydrukować albo zapisać jako PDF. Tę samą listę można pobrać jako CSV.",
    ]},
    { id: "fuel-log", title: "Tankowanie", paragraphs: [
      "Kierowca zapisuje tankowanie dla przypisanych mu jednostek. Wpis ma datę, litry i kilometry albo motogodziny. Zdjęcie paragonu i notatka są opcjonalne.",
      "Zużycie widać w litrach na 100 kilometrów albo w litrach na godzinę. Odchylenie jest wyróżnione.",
      "Nowszy odczyt aktualizuje licznik jednostki.",
    ]},
    { id: "file-attachments", title: "Załączone pliki", paragraphs: [
      "Do jednostki, zlecenia i wpisu serwisowego można dołączyć PDF albo zdjęcie. Jeden plik ma najwyżej 10 megabajtów.",
      "Administrator i serwis dodają pliki. Plik usuwa osoba, która go dodała, albo administrator.",
      "Pliki kategorii faktury są widoczne tylko dla administratora.",
    ]},
    { id: "qr-sticker-advice", title: "Zalecenia dotyczące naklejek QR", paragraphs: [
      "Naklejka pokazuje kod QR, numer rejestracyjny jako główny identyfikator, numer floty, markę i model, iqFleetSync™ oraz krótki adres r.iqsoftcore.fi i kod jako tekst.",
      "W pomieszczeniu i do próby wystarczy papier albo arkusz winylu. Do większości kabin, ciężarówek i maszyn pasuje poliester z matowym laminatem UV. Wytrzymuje wycieranie, olej, wilgoć, mróz i mycie.",
      "Anodowane aluminium albo stal nierdzewna pasuje do trudnych miejsc, takich jak naczepy, naczepy do drewna, mycie ciśnieniowe i sól. Mocowanie mocną taśmą typu VHB albo nitami. Na naczepie do drewna naklejka najlepiej na małej płytce przy ramie: od strony dyszla przy sprzęgu, po wewnętrznej stronie podłużnicy albo na wsporniku lampy.",
      "Umieść w osłoniętym miejscu, z dala od ochlapania. Przed mocowaniem oczyść powierzchnię. Powierzchnia jest matowa, nie błyszcząca. Na zewnątrz rozmiar to co najmniej 50×50 mm albo 100×50 mm.",
      "Układy druku to A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) oraz pojedyncze 100×50 mm i 50×50 mm. Na częściowo zużytym arkuszu wybiera się pole startowe. Drukuj w 100 %, w rzeczywistym rozmiarze, bez dopasowania do strony. PDF jest do własnego druku. Paczka SVG w zip jest dla drukarni.",
      "Administrator może zamówić naklejki w aplikacji: arkusz, poliester albo stal nierdzewna. Jeśli naklejka jest uszkodzona, naciśnij Nowy kod i Drukuj. Stary kod przestaje działać.",
    ]},
  ],
  cs: [
    { id: "fault-photos", title: "Fotografie hlášení závady", paragraphs: [
      "Řidič přidá k hlášení závady nejvýše pět fotografií. Fotografie se před odesláním zkomprimují.",
      "Fotografie jsou viditelné pro údržbu a správce.",
    ]},
    { id: "service-book", title: "Servisní knížka", paragraphs: [
      "Viditelná jen pro správce.",
      "Servisní knížka jednotky uvádí servisní zápisy, odečty, práci a díly a názvy připojených souborů.",
      "Knížku lze vytisknout nebo uložit jako PDF. Stejný seznam lze stáhnout jako CSV.",
    ]},
    { id: "fuel-log", title: "Tankování", paragraphs: [
      "Řidič zapisuje tankování u jednotek, které má přidělené. Zápis má datum, litry a kilometry nebo motohodiny. Fotografie účtenky a poznámka jsou volitelné.",
      "Spotřeba se ukazuje v litrech na 100 kilometrů nebo v litrech za hodinu. Odchylka se zvýrazní.",
      "Novější odečet aktualizuje počítadlo jednotky.",
    ]},
    { id: "file-attachments", title: "Připojené soubory", paragraphs: [
      "K jednotce, zakázce a servisnímu zápisu lze připojit PDF nebo obrázek. Jeden soubor má nejvýše 10 megabajtů.",
      "Správce a údržba soubory přidávají. Soubor smaže ten, kdo ho přidal, nebo správce.",
      "Soubory kategorie faktury jsou viditelné jen pro správce.",
    ]},
    { id: "qr-sticker-advice", title: "Doporučení k QR nálepkám", paragraphs: [
      "Nálepka ukazuje QR kód, registrační značku jako hlavní označení, číslo parku, značku a model, iqFleetSync™ a krátkou adresu r.iqsoftcore.fi plus kód jako text.",
      "Uvnitř a na zkoušku stačí papír nebo vinylový arch. Většině kabin, nákladních aut a strojů vyhovuje polyester s matným UV laminátem. Odolá otírání, oleji, vlhkosti, mrazu a mytí.",
      "Eloxovaný hliník nebo nerezová ocel se hodí na náročná místa, jako jsou návěsy, návěsy na dřevo, tlakové mytí a sůl. Upevnění silnou páskou typu VHB nebo nýty. Na návěsu na dřevo je nálepka nejlépe na malé destičce připevněné k rámu: na straně oje u spojky, na vnitřní straně podélníku nebo na držáku světla.",
      "Umístěte ji do chráněného místa, mimo odstřik. Před upevněním očistěte povrch. Povrch je matný, ne lesklý. Venku je velikost alespoň 50×50 mm nebo 100×50 mm.",
      "Tiskové rozvržení je A4 3×8 (70×37 mm), A4 2×5 (99×57 mm), A4 4×10 (48,5×25,4 mm) a jednotlivé 100×50 mm a 50×50 mm. Na částečně použitém archu se zvolí počáteční buňka. Tiskněte na 100 %, ve skutečné velikosti, bez přizpůsobení stránce. PDF je pro vlastní tisk. Balíček SVG v zipu je pro tiskárnu.",
      "Správce může objednat nálepky v aplikaci: arch, polyester nebo nerez. Když se nálepka poškodí, stiskněte Nový kód a Tisk. Starý kód přestane fungovat.",
    ]},
  ],
};

function featureGuidesHtml(lang) {
  const articles = FEATURE_HELP[lang] || FEATURE_HELP.en;
  return articles.map((article) => {
    const copy = article.paragraphs
      .map((paragraph) => "<p>" + escapeHelpHtml(paragraph) + "</p>")
      .join("");
    return `<article class="help-card" id="${escapeHelpHtml(article.id)}">
      <h2>${escapeHelpHtml(article.title)}</h2>
      <div class="help-copy">${copy}</div>
    </article>`;
  }).join("");
}
