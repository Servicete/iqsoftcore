/**
 * Apps page copy. Language switcher re-renders via renderAppsPage(lang).
 */
const APPS_PAGE = {
  fi: {
    metaTitle: "Sovellukset ja ohjelmistot | IQSoftCore",
    metaDescription: "IQSoftCoren sovellukset – aloita Tuntilapulla, yksinkertaisella työajanseurannalla.",
    pageTitle: "Sovellukset ja ohjelmistot",
    pageIntro: "Kehitämme selkeitä sovelluksia arjen käyttöön. Ensimmäinen julkaisu on Tuntilappu.",
    featuresHeading: "Tärkeimmät ominaisuudet",
    privacyLink: "Tietosuojakäytäntö",
    playLabel: "Google Play",
    playSoon: "Tulossa Google Playhin",
    backHome: "Takaisin etusivulle",
    short: "Yksinkertainen ja ammattimainen työajanseuranta. Luo PDF-raportit hetkessä.",
    long: "Tuntilappu on suunniteltu sinulle, joka haluat hoitaa työaikakirjaukset ilman turhaa säätöä. Se on kevyt, luotettava ja täysin yksityinen sovellus tuntien seurantaan ja raportointiin.",
    features: [
      "Helppo käyttää: Kirjaa päivittäiset tunnit ja työtehtävät sekunneissa.",
      "Ammattimaiset raportit: Luo tyylikkäät PDF- ja CSV-tiedostot (Excel-yhteensopiva) suoraan puhelimestasi.",
      "Yksityisyys edellä: Sovellus ei vaadi kirjautumista. Kaikki tiedot tallennetaan vain sinun laitteellesi – emme kerää tietojasi palvelimille.",
      "Monikielinen: Tuki 10 eri kielelle (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Yritystiedot: Lisää omat tai yrityksesi tiedot, niin ne näkyvät automaattisesti PDF-raporteissa.",
    ],
    closing: "Lataa Tuntilappu ja unohda paperiset listat – hoida työaikakirjanpito helposti ja ammattimaisesti!",
  },
  en: {
    metaTitle: "Apps and software | IQSoftCore",
    metaDescription: "IQSoftCore apps – start with Tuntilappu, a simple timesheet manager.",
    pageTitle: "Apps and software",
    pageIntro: "We build clear apps for everyday use. Our first release is Tuntilappu.",
    featuresHeading: "Key features",
    privacyLink: "Privacy policy",
    playLabel: "Google Play",
    playSoon: "Coming soon on Google Play",
    backHome: "Back to home",
    short: "Simple and professional timesheet manager. Generate PDF reports in seconds.",
    long: "Tuntilappu is the ultimate tool for anyone who wants to track working hours without any hassle. It’s a lightweight, reliable, and privacy-focused app for logging hours and generating professional reports.",
    features: [
      "Effortless logging: Record your daily hours and tasks in seconds.",
      "Professional reports: Export clean PDF and CSV (Excel-compatible) files directly from your phone.",
      "Privacy first: No registration or login required. All your data stays on your device – we never collect your data on servers.",
      "Multilingual support: Available in 10 languages (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Company customization: Add your company details to make your PDF reports look professional and ready for invoicing or HR.",
    ],
    closing: "Download Tuntilappu today and simplify your work life – fast, secure, and professional!",
  },
  sv: {
    metaTitle: "Appar och programvara | IQSoftCore",
    metaDescription: "IQSoftCores appar – börja med Tuntilappu, en enkel tidrapporteringsapp.",
    pageTitle: "Appar och programvara",
    pageIntro: "Vi bygger tydliga appar för vardagsbruk. Vår första lansering är Tuntilappu.",
    featuresHeading: "Viktigaste funktionerna",
    privacyLink: "Integritetspolicy",
    playLabel: "Google Play",
    playSoon: "Kommer snart till Google Play",
    backHome: "Tillbaka till startsidan",
    short: "Enkel och professionell tidrapportering. Skapa PDF-rapporter på några sekunder.",
    long: "Tuntilappu är gjord för dig som vill hantera tidrapporter utan onödigt krångel. Det är en lätt, pålitlig och integritetsvänlig app för att logga timmar och skapa professionella rapporter.",
    features: [
      "Enkel att använda: Registrera dagliga timmar och arbetsuppgifter på sekunder.",
      "Professionella rapporter: Skapa snygga PDF- och CSV-filer (Excel-kompatibla) direkt från telefonen.",
      "Integritet först: Ingen registrering eller inloggning krävs. All data sparas endast på din enhet – vi samlar inte in dina uppgifter på servrar.",
      "Flerspråkig: Stöd för 10 språk (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Företagsuppgifter: Lägg till dina eller företagets uppgifter så syns de automatiskt i PDF-rapporterna.",
    ],
    closing: "Ladda ner Tuntilappu och glöm papperslistorna – sköt tidrapporteringen enkelt och professionellt!",
  },
  no: {
    metaTitle: "Apper og programvare | IQSoftCore",
    metaDescription: "IQSoftCores apper – start med Tuntilappu, en enkel timeføringsapp.",
    pageTitle: "Apper og programvare",
    pageIntro: "Vi bygger tydelige apper for hverdagsbruk. Vår første utgivelse er Tuntilappu.",
    featuresHeading: "Viktigste funksjoner",
    privacyLink: "Personvernerklæring",
    playLabel: "Google Play",
    playSoon: "Kommer snart på Google Play",
    backHome: "Tilbake til forsiden",
    short: "Enkel og profesjonell timeføring. Lag PDF-rapporter på sekunder.",
    long: "Tuntilappu er laget for deg som vil håndtere timeføring uten unødvendig styr. Det er en lett, pålitelig og personvernvennlig app for å logge timer og lage profesjonelle rapporter.",
    features: [
      "Enkel å bruke: Registrer daglige timer og arbeidsoppgaver på sekunder.",
      "Profesjonelle rapporter: Lag rene PDF- og CSV-filer (Excel-kompatible) direkte fra telefonen.",
      "Personvern først: Ingen registrering eller innlogging kreves. Alle data lagres kun på enheten din – vi samler ikke inn data på servere.",
      "Flerspråklig: Støtte for 10 språk (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Firmainformasjon: Legg til dine eller bedriftens opplysninger, så vises de automatisk i PDF-rapportene.",
    ],
    closing: "Last ned Tuntilappu og glem papirlister – gjør timeføringen enkel og profesjonell!",
  },
  da: {
    metaTitle: "Apps og software | IQSoftCore",
    metaDescription: "IQSoftCores apps – start med Tuntilappu, en enkel timeregistreringsapp.",
    pageTitle: "Apps og software",
    pageIntro: "Vi bygger klare apps til daglig brug. Vores første udgivelse er Tuntilappu.",
    featuresHeading: "Vigtigste funktioner",
    privacyLink: "Privatlivspolitik",
    playLabel: "Google Play",
    playSoon: "Kommer snart på Google Play",
    backHome: "Tilbage til forsiden",
    short: "Enkel og professionel timeregistrering. Lav PDF-rapporter på sekunder.",
    long: "Tuntilappu er lavet til dig, der vil håndtere timeregistrering uden unødigt besvær. Det er en let, pålidelig og privatlivsvenlig app til at logge timer og lave professionelle rapporter.",
    features: [
      "Nem at bruge: Registrer daglige timer og arbejdsopgaver på sekunder.",
      "Professionelle rapporter: Lav rene PDF- og CSV-filer (Excel-kompatible) direkte fra telefonen.",
      "Privatliv først: Ingen registrering eller login kræves. Alle data gemmes kun på din enhed – vi indsamler ikke dine data på servere.",
      "Flersproget: Understøttelse af 10 sprog (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Firmadata: Tilføj dine eller virksomhedens oplysninger, så de vises automatisk i PDF-rapporterne.",
    ],
    closing: "Download Tuntilappu og glem papirlisterne – håndter timeregistrering nemt og professionelt!",
  },
  de: {
    metaTitle: "Apps und Software | IQSoftCore",
    metaDescription: "IQSoftCore-Apps – starten Sie mit Tuntilappu, einer einfachen Zeiterfassungs-App.",
    pageTitle: "Apps und Software",
    pageIntro: "Wir entwickeln klare Apps für den Alltag. Unsere erste Veröffentlichung ist Tuntilappu.",
    featuresHeading: "Wichtigste Funktionen",
    privacyLink: "Datenschutzerklärung",
    playLabel: "Google Play",
    playSoon: "Demnächst bei Google Play",
    backHome: "Zurück zur Startseite",
    short: "Einfache und professionelle Zeiterfassung. PDF-Berichte in Sekunden erstellen.",
    long: "Tuntilappu ist für alle gedacht, die Arbeitszeiten ohne unnötigen Aufwand erfassen möchten. Es ist eine leichte, zuverlässige und datenschutzfreundliche App zum Loggen von Stunden und Erstellen professioneller Berichte.",
    features: [
      "Einfach zu bedienen: Tägliche Stunden und Aufgaben in Sekunden erfassen.",
      "Professionelle Berichte: Saubere PDF- und CSV-Dateien (Excel-kompatibel) direkt vom Handy exportieren.",
      "Datenschutz zuerst: Keine Registrierung oder Anmeldung nötig. Alle Daten bleiben auf Ihrem Gerät – wir erheben keine Daten auf Servern.",
      "Mehrsprachig: Unterstützung für 10 Sprachen (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Firmendaten: Fügen Sie Ihre oder die Firmendaten hinzu – sie erscheinen automatisch in den PDF-Berichten.",
    ],
    closing: "Laden Sie Tuntilappu herunter und vergessen Sie Papierlisten – erfassen Sie Arbeitszeiten einfach und professionell!",
  },
  nl: {
    metaTitle: "Apps en software | IQSoftCore",
    metaDescription: "IQSoftCore-apps – begin met Tuntilappu, een eenvoudige urenregistratie-app.",
    pageTitle: "Apps en software",
    pageIntro: "We bouwen duidelijke apps voor dagelijks gebruik. Onze eerste release is Tuntilappu.",
    featuresHeading: "Belangrijkste functies",
    privacyLink: "Privacybeleid",
    playLabel: "Google Play",
    playSoon: "Binnenkort op Google Play",
    backHome: "Terug naar home",
    short: "Eenvoudige en professionele urenregistratie. Maak PDF-rapporten in seconden.",
    long: "Tuntilappu is gemaakt voor wie werktijden wil bijhouden zonder gedoe. Het is een lichte, betrouwbare en privacygerichte app om uren te loggen en professionele rapporten te maken.",
    features: [
      "Eenvoudig te gebruiken: Registreer dagelijkse uren en taken in seconden.",
      "Professionele rapporten: Exporteer nette PDF- en CSV-bestanden (Excel-compatibel) direct vanaf je telefoon.",
      "Privacy first: Geen registratie of login nodig. Alle data blijft op jouw apparaat – we verzamelen niets op servers.",
      "Meertalig: Ondersteuning voor 10 talen (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Bedrijfsgegevens: Voeg jouw of bedrijfsgegevens toe, zodat ze automatisch in PDF-rapporten verschijnen.",
    ],
    closing: "Download Tuntilappu en vergeet papierlijsten – doe urenregistratie eenvoudig en professioneel!",
  },
  fr: {
    metaTitle: "Applications et logiciels | IQSoftCore",
    metaDescription: "Applications IQSoftCore – commencez avec Tuntilappu, une app simple de suivi du temps.",
    pageTitle: "Applications et logiciels",
    pageIntro: "Nous créons des applications claires pour un usage quotidien. Notre première publication est Tuntilappu.",
    featuresHeading: "Fonctionnalités clés",
    privacyLink: "Politique de confidentialité",
    playLabel: "Google Play",
    playSoon: "Bientôt sur Google Play",
    backHome: "Retour à l’accueil",
    short: "Suivi du temps simple et professionnel. Créez des rapports PDF en quelques secondes.",
    long: "Tuntilappu est conçue pour ceux qui veulent gérer le suivi du temps sans complication. C’est une application légère, fiable et respectueuse de la vie privée pour enregistrer les heures et générer des rapports professionnels.",
    features: [
      "Simple d’utilisation : Enregistrez vos heures et tâches quotidiennes en quelques secondes.",
      "Rapports professionnels : Exportez des fichiers PDF et CSV (compatibles Excel) directement depuis votre téléphone.",
      "Confidentialité d’abord : Aucune inscription ni connexion requise. Toutes vos données restent sur votre appareil – nous ne collectons rien sur des serveurs.",
      "Multilingue : Prise en charge de 10 langues (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Informations d’entreprise : Ajoutez vos informations pour qu’elles apparaissent automatiquement dans les rapports PDF.",
    ],
    closing: "Téléchargez Tuntilappu et oubliez les listes papier – gérez le suivi du temps facilement et professionnellement !",
  },
  es: {
    metaTitle: "Aplicaciones y software | IQSoftCore",
    metaDescription: "Apps de IQSoftCore – empieza con Tuntilappu, un gestor de horas sencillo.",
    pageTitle: "Aplicaciones y software",
    pageIntro: "Creamos aplicaciones claras para el uso diario. Nuestro primer lanzamiento es Tuntilappu.",
    featuresHeading: "Funciones principales",
    privacyLink: "Política de privacidad",
    playLabel: "Google Play",
    playSoon: "Próximamente en Google Play",
    backHome: "Volver al inicio",
    short: "Control de horas simple y profesional. Genera informes PDF en segundos.",
    long: "Tuntilappu está pensada para quien quiere registrar horas de trabajo sin complicaciones. Es una app ligera, fiable y centrada en la privacidad para anotar horas y generar informes profesionales.",
    features: [
      "Fácil de usar: Registra horas y tareas diarias en segundos.",
      "Informes profesionales: Exporta archivos PDF y CSV (compatibles con Excel) directamente desde el teléfono.",
      "Privacidad primero: No requiere registro ni inicio de sesión. Todos los datos se guardan solo en tu dispositivo – no recopilamos datos en servidores.",
      "Multilingüe: Compatible con 10 idiomas (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Datos de empresa: Añade tus datos o los de tu empresa para que aparezcan automáticamente en los informes PDF.",
    ],
    closing: "Descarga Tuntilappu y olvida las listas en papel: gestiona el control horario de forma fácil y profesional.",
  },
  pt: {
    metaTitle: "Aplicativos e software | IQSoftCore",
    metaDescription: "Apps da IQSoftCore – comece com o Tuntilappu, um app simples de horas.",
    pageTitle: "Aplicativos e software",
    pageIntro: "Criamos aplicativos claros para o uso diário. Nosso primeiro lançamento é o Tuntilappu.",
    featuresHeading: "Principais recursos",
    privacyLink: "Política de privacidade",
    playLabel: "Google Play",
    playSoon: "Em breve no Google Play",
    backHome: "Voltar ao início",
    short: "Controle de horas simples e profissional. Gere relatórios PDF em segundos.",
    long: "O Tuntilappu foi feito para quem quer registrar horas de trabalho sem complicação. É um app leve, confiável e focado em privacidade para lançar horas e gerar relatórios profissionais.",
    features: [
      "Fácil de usar: Registre horas e tarefas diárias em segundos.",
      "Relatórios profissionais: Exporte arquivos PDF e CSV (compatíveis com Excel) direto do celular.",
      "Privacidade em primeiro lugar: Sem cadastro ou login. Todos os dados ficam só no seu dispositivo – não coletamos dados em servidores.",
      "Multilíngue: Compatível com 10 idiomas (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Dados da empresa: Adicione seus dados ou os da empresa para aparecerem automaticamente nos relatórios PDF.",
    ],
    closing: "Baixe o Tuntilappu e esqueça as listas em papel – faça o controle de horas de forma fácil e profissional!",
  },
  it: {
    metaTitle: "App e software | IQSoftCore",
    metaDescription: "App IQSoftCore – inizia con Tuntilappu, un semplice gestore delle ore.",
    pageTitle: "App e software",
    pageIntro: "Creiamo app chiare per l’uso quotidiano. Il nostro primo rilascio è Tuntilappu.",
    featuresHeading: "Funzionalità principali",
    privacyLink: "Informativa sulla privacy",
    playLabel: "Google Play",
    playSoon: "Presto su Google Play",
    backHome: "Torna alla home",
    short: "Gestione ore semplice e professionale. Genera report PDF in pochi secondi.",
    long: "Tuntilappu è pensata per chi vuole registrare le ore di lavoro senza complicazioni. È un’app leggera, affidabile e incentrata sulla privacy per annotare le ore e generare report professionali.",
    features: [
      "Facile da usare: Registra ore e attività giornaliere in pochi secondi.",
      "Report professionali: Esporta file PDF e CSV (compatibili con Excel) direttamente dal telefono.",
      "Privacy prima di tutto: Nessuna registrazione o accesso richiesti. Tutti i dati restano sul tuo dispositivo – non raccogliamo dati su server.",
      "Multilingue: Supporto per 10 lingue (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Dati aziendali: Aggiungi i tuoi dati o quelli dell’azienda e appariranno automaticamente nei report PDF.",
    ],
    closing: "Scarica Tuntilappu e dimentica le liste cartacee: gestisci le ore in modo semplice e professionale!",
  },
  pl: {
    metaTitle: "Aplikacje i oprogramowanie | IQSoftCore",
    metaDescription: "Aplikacje IQSoftCore – zacznij od Tuntilappu, prostej ewidencji czasu pracy.",
    pageTitle: "Aplikacje i oprogramowanie",
    pageIntro: "Tworzymy przejrzyste aplikacje do codziennego użytku. Nasza pierwsza publikacja to Tuntilappu.",
    featuresHeading: "Najważniejsze funkcje",
    privacyLink: "Polityka prywatności",
    playLabel: "Google Play",
    playSoon: "Wkrótce w Google Play",
    backHome: "Powrót do strony głównej",
    short: "Prosta i profesjonalna ewidencja czasu pracy. Twórz raporty PDF w kilka sekund.",
    long: "Tuntilappu jest dla osób, które chcą rejestrować czas pracy bez zbędnych komplikacji. To lekka, niezawodna i dbająca o prywatność aplikacja do logowania godzin i tworzenia profesjonalnych raportów.",
    features: [
      "Łatwa w użyciu: Rejestruj dzienne godziny i zadania w kilka sekund.",
      "Profesjonalne raporty: Eksportuj czyste pliki PDF i CSV (zgodne z Excelem) bezpośrednio z telefonu.",
      "Prywatność przede wszystkim: Bez rejestracji i logowania. Wszystkie dane zostają na Twoim urządzeniu – nie zbieramy ich na serwerach.",
      "Wielojęzyczna: Wsparcie dla 10 języków (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Dane firmy: Dodaj swoje lub firmowe dane, a pojawią się automatycznie w raportach PDF.",
    ],
    closing: "Pobierz Tuntilappu i zapomnij o papierowych listach – prowadź ewidencję czasu pracy łatwo i profesjonalnie!",
  },
  cs: {
    metaTitle: "Aplikace a software | IQSoftCore",
    metaDescription: "Aplikace IQSoftCore – začněte s Tuntilappu, jednoduchou evidencí pracovní doby.",
    pageTitle: "Aplikace a software",
    pageIntro: "Vytváříme přehledné aplikace pro každodenní použití. Naše první vydání je Tuntilappu.",
    featuresHeading: "Nejdůležitější funkce",
    privacyLink: "Zásady ochrany osobních údajů",
    playLabel: "Google Play",
    playSoon: "Již brzy na Google Play",
    backHome: "Zpět na úvod",
    short: "Jednoduchá a profesionální evidence pracovní doby. Vytvořte PDF reporty během sekund.",
    long: "Tuntilappu je pro každého, kdo chce sledovat pracovní dobu bez zbytečných komplikací. Je to lehká, spolehlivá a na soukromí zaměřená aplikace pro zápis hodin a tvorbu profesionálních reportů.",
    features: [
      "Snadné použití: Zaznamenejte denní hodiny a úkoly během sekund.",
      "Profesionální reporty: Exportujte čisté PDF a CSV soubory (kompatibilní s Excelem) přímo z telefonu.",
      "Soukromí na prvním místě: Není potřeba registrace ani přihlášení. Všechna data zůstávají na vašem zařízení – nic neshromažďujeme na serverech.",
      "Vícejazyčnost: Podpora 10 jazyků (FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "Firemní údaje: Přidejte své nebo firemní údaje a automaticky se zobrazí v PDF reportech.",
    ],
    closing: "Stáhněte Tuntilappu a zapomeňte na papírové seznamy – evidujte pracovní dobu snadno a profesionálně!",
  },
  ja: {
    metaTitle: "アプリとソフトウェア | IQSoftCore",
    metaDescription: "IQSoftCoreのアプリ – シンプルな勤務時間管理 Tuntilappu から始めましょう。",
    pageTitle: "アプリとソフトウェア",
    pageIntro: "日常で使いやすい明確なアプリを開発しています。最初のリリースは Tuntilappu です。",
    featuresHeading: "主な機能",
    privacyLink: "プライバシーポリシー",
    playLabel: "Google Play",
    playSoon: "まもなく Google Play で公開",
    backHome: "ホームに戻る",
    short: "シンプルでプロフェッショナルな勤務時間管理。PDFレポートをすぐに作成。",
    long: "Tuntilappu は、余計な手間なく勤務時間を記録したい方のためのアプリです。軽量・信頼性・プライバシー重視で、時間の記録とプロ品質のレポート作成ができます。",
    features: [
      "簡単操作：日々の勤務時間と作業を数秒で記録。",
      "プロのレポート：きれいな PDF / CSV（Excel互換）をスマホから直接出力。",
      "プライバシー優先：登録やログイン不要。データは端末のみに保存 – サーバーには収集しません。",
      "多言語対応：10言語（FI, EN, SV, NO, DA, DE, ES, IT, JA, KO）。",
      "会社情報：自分や会社の情報を追加すると、PDFレポートに自動反映。",
    ],
    closing: "Tuntilappu をダウンロードして紙のリストを卒業 – 勤務時間管理を簡単かつプロフェッショナルに！",
  },
  ko: {
    metaTitle: "앱 및 소프트웨어 | IQSoftCore",
    metaDescription: "IQSoftCore 앱 – 간단한 근무시간 관리 앱 Tuntilappu로 시작하세요.",
    pageTitle: "앱 및 소프트웨어",
    pageIntro: "일상에서 쓰기 쉬운 명확한 앱을 만듭니다. 첫 번째 출시는 Tuntilappu입니다.",
    featuresHeading: "주요 기능",
    privacyLink: "개인정보 처리방침",
    playLabel: "Google Play",
    playSoon: "곧 Google Play에 출시",
    backHome: "홈으로 돌아가기",
    short: "간단하고 전문적인 근무시간 관리. PDF 보고서를 순식간에 생성.",
    long: "Tuntilappu는 복잡한 설정 없이 근무시간을 기록하려는 분들을 위한 앱입니다. 가볍고 신뢰할 수 있으며 개인정보를 중시하는 시간 기록·보고서 앱입니다.",
    features: [
      "쉬운 사용: 일일 근무시간과 작업을 몇 초 만에 기록.",
      "전문 보고서: 깔끔한 PDF 및 CSV(Excel 호환) 파일을 휴대폰에서 바로 내보내기.",
      "개인정보 우선: 가입·로그인 불필요. 모든 데이터는 기기에만 저장 – 서버로 수집하지 않습니다.",
      "다국어: 10개 언어 지원(FI, EN, SV, NO, DA, DE, ES, IT, JA, KO).",
      "회사 정보: 본인 또는 회사 정보를 추가하면 PDF 보고서에 자동 반영.",
    ],
    closing: "Tuntilappu를 다운로드하고 종이 목록은 잊으세요 – 근무시간 기록을 쉽고 전문적으로!",
  },
  zh: {
    metaTitle: "应用与软件 | IQSoftCore",
    metaDescription: "IQSoftCore 应用 – 从简单的工时管理应用 Tuntilappu 开始。",
    pageTitle: "应用与软件",
    pageIntro: "我们打造日常易用的清晰应用。首款发布为 Tuntilappu。",
    featuresHeading: "主要功能",
    privacyLink: "隐私政策",
    playLabel: "Google Play",
    playSoon: "即将登陆 Google Play",
    backHome: "返回首页",
    short: "简单专业的工时管理。几秒生成 PDF 报告。",
    long: "Tuntilappu 专为希望轻松记录工时的人设计。它轻量、可靠且注重隐私，用于记录工时并生成专业报告。",
    features: [
      "易于使用：几秒记录每日工时与任务。",
      "专业报告：直接从手机导出清晰的 PDF 与 CSV（Excel 兼容）文件。",
      "隐私优先：无需注册或登录。所有数据仅保存在您的设备上 – 我们不会在服务器上收集数据。",
      "多语言：支持 10 种语言（FI, EN, SV, NO, DA, DE, ES, IT, JA, KO）。",
      "公司信息：添加您或公司的信息，将自动显示在 PDF 报告中。",
    ],
    closing: "下载 Tuntilappu，告别纸质清单 – 轻松、专业地管理工时！",
  },
};

function escapeAppsHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTuntilappuPage(lang) {
  const root = document.getElementById("tuntilappu-root");
  if (!root || typeof APPS_PAGE === "undefined") return;

  const page = APPS_PAGE[lang] || APPS_PAGE.en || APPS_PAGE.fi;
  if (!page) return;

  const ui = (typeof translations !== "undefined" && (translations[lang] || translations.en)) || {};
  const appName = typeof tuntilappuName === "function" ? tuntilappuName(lang) : "Tuntilappu";

  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = "Tuntilappu | IQSoftCore";

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && page.short) metaDesc.setAttribute("content", page.short);

  let html = `<h1>Tuntilappu</h1>`;
  if (appName && appName !== "Tuntilappu") {
    const playLabel = ui.playNameLabel || "Google Play";
    html += `<p class="store-title">${escapeAppsHtml(playLabel)}: ${escapeAppsHtml(appName)}</p>`;
  }
  html += `<p class="app-short">${escapeAppsHtml(page.short)}</p>`;
  html += `<p>${escapeAppsHtml(page.long)}</p>`;
  html += `<h2>${escapeAppsHtml(page.featuresHeading)}</h2>`;
  html += `<ul>${page.features.map((item) => `<li>${escapeAppsHtml(item)}</li>`).join("")}</ul>`;
  html += `<p>${escapeAppsHtml(page.closing)}</p>`;
  if (ui.noPublicPrice) {
    html += `<p>${escapeAppsHtml(ui.noPublicPrice)} <a href="index.html#contact">${escapeAppsHtml(ui.ctaContact || "")}</a></p>`;
  }
  html += `<div class="app-actions">`;
  html += `<span class="btn btn-primary btn-disabled" aria-disabled="true">${escapeAppsHtml(page.playLabel)}</span>`;
  html += `<span class="play-soon">${escapeAppsHtml(page.playSoon)}</span>`;
  html += `<a class="btn btn-ghost" href="privacy-tuntilappu.html">${escapeAppsHtml(page.privacyLink)}</a>`;
  html += `</div>`;
  html += `<p class="policy-nav"><a class="btn btn-ghost" href="apps.html">${escapeAppsHtml(ui.backApps || page.backHome)}</a></p>`;

  root.innerHTML = html;
}
