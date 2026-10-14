/**
 * Apps page copy. Language switcher re-renders via renderAppsPage(lang).
 */
const APPS_PAGE = {
  fi: {
    metaTitle: "Sovellukset ja ohjelmistot | IQSoftCore",
    metaDescription: "Android-sovellus työajanseurantaan. 14 päivän ilmainen kokeilu, sen jälkeen kertamaksu. Yli 70 kieltä. Entinen Tuntilappu.",
    pageTitle: "Sovellukset ja ohjelmistot",
    pageIntro: "Kehitämme selkeitä sovelluksia arjen käyttöön. Ensimmäinen julkaisu on iqWorkLog.",
    featuresHeading: "Tärkeimmät ominaisuudet",
    privacyLink: "Tietosuojakäytäntö",
    playLabel: "Google Play",
    backHome: "Takaisin etusivulle",
    short: "Android-sovellus työajanseurantaan. 14 päivän ilmainen kokeilu, sen jälkeen kertamaksu. Yli 70 kieltä. Entinen Tuntilappu.",
    long: "iqWorkLog on suunniteltu sinulle, joka haluat hoitaa työaikakirjaukset ilman turhaa säätöä. Se on kevyt, luotettava ja täysin yksityinen sovellus tuntien seurantaan ja raportointiin.",
    features: [
      "Helppo käyttää: Kirjaa päivittäiset tunnit ja työtehtävät sekunneissa.",
      "Ammattimaiset raportit: Luo tyylikkäät PDF- ja CSV-tiedostot (Excel-yhteensopiva) suoraan puhelimestasi.",
      "Yksityisyys edellä: Sovellus ei vaadi kirjautumista. Kaikki tiedot tallennetaan vain sinun laitteellesi – emme kerää tietojasi palvelimille.",
      "Monikielinen: Yli 70 kieltä.",
      "Yritystiedot: Lisää omat tai yrityksesi tiedot, niin ne näkyvät automaattisesti PDF-raporteissa.",
    ],
    closing: "Lataa iqWorkLog ja unohda paperiset listat – hoida työaikakirjanpito helposti ja ammattimaisesti!",
  },
  en: {
    metaTitle: "Apps and software | IQSoftCore",
    metaDescription: "IQSoftCore apps – start with iqWorkLog, a simple timesheet manager.",
    pageTitle: "Apps and software",
    pageIntro: "We build clear apps for everyday use. Our first release is iqWorkLog.",
    featuresHeading: "Key features",
    privacyLink: "Privacy policy",
    playLabel: "Google Play",
    backHome: "Back to home",
    short: "Android timesheet app. A 14-day free trial, then a one-time purchase. 70+ languages. Formerly Tuntilappu.",
    long: "iqWorkLog is the ultimate tool for anyone who wants to track working hours without any hassle. It’s a lightweight, reliable, and privacy-focused app for logging hours and generating professional reports.",
    features: [
      "Effortless logging: Record your daily hours and tasks in seconds.",
      "Professional reports: Export clean PDF and CSV (Excel-compatible) files directly from your phone.",
      "Privacy first: No registration or login required. All your data stays on your device – we never collect your data on servers.",
      "Multilingual support: Available in 70+ languages.",
      "Company customization: Add your company details to make your PDF reports look professional and ready for invoicing or HR.",
    ],
    closing: "Download iqWorkLog today and simplify your work life – fast, secure, and professional!",
  },
  sv: {
    metaTitle: "Appar och programvara | IQSoftCore",
    metaDescription: "IQSoftCores appar – börja med iqWorkLog, en enkel tidrapporteringsapp.",
    pageTitle: "Appar och programvara",
    pageIntro: "Vi bygger tydliga appar för vardagsbruk. Vår första lansering är iqWorkLog.",
    featuresHeading: "Viktigaste funktionerna",
    privacyLink: "Integritetspolicy",
    playLabel: "Google Play",
    backHome: "Tillbaka till startsidan",
    short: "Android-app för tidrapportering. 14 dagars gratis prov, sedan ett engångsköp. Över 70 språk. Tidigare Tuntilappu.",
    long: "iqWorkLog är gjord för dig som vill hantera tidrapporter utan onödigt krångel. Det är en lätt, pålitlig och integritetsvänlig app för att logga timmar och skapa professionella rapporter.",
    features: [
      "Enkel att använda: Registrera dagliga timmar och arbetsuppgifter på sekunder.",
      "Professionella rapporter: Skapa snygga PDF- och CSV-filer (Excel-kompatibla) direkt från telefonen.",
      "Integritet först: Ingen registrering eller inloggning krävs. All data sparas endast på din enhet – vi samlar inte in dina uppgifter på servrar.",
      "Flerspråkig: Stöd för över 70 språk.",
      "Företagsuppgifter: Lägg till dina eller företagets uppgifter så syns de automatiskt i PDF-rapporterna.",
    ],
    closing: "Ladda ner iqWorkLog och glöm papperslistorna – sköt tidrapporteringen enkelt och professionellt!",
  },
  no: {
    metaTitle: "Apper og programvare | IQSoftCore",
    metaDescription: "IQSoftCores apper – start med iqWorkLog, en enkel timeføringsapp.",
    pageTitle: "Apper og programvare",
    pageIntro: "Vi bygger tydelige apper for hverdagsbruk. Vår første utgivelse er iqWorkLog.",
    featuresHeading: "Viktigste funksjoner",
    privacyLink: "Personvernerklæring",
    playLabel: "Google Play",
    backHome: "Tilbake til forsiden",
    short: "Android-app for timeføring. 14 dagers gratis prøve, deretter et engangskjøp. Over 70 språk. Tidligere Tuntilappu.",
    long: "iqWorkLog er laget for deg som vil håndtere timeføring uten unødvendig styr. Det er en lett, pålitelig og personvernvennlig app for å logge timer og lage profesjonelle rapporter.",
    features: [
      "Enkel å bruke: Registrer daglige timer og arbeidsoppgaver på sekunder.",
      "Profesjonelle rapporter: Lag rene PDF- og CSV-filer (Excel-kompatible) direkte fra telefonen.",
      "Personvern først: Ingen registrering eller innlogging kreves. Alle data lagres kun på enheten din – vi samler ikke inn data på servere.",
      "Flerspråklig: Støtte for over 70 språk.",
      "Firmainformasjon: Legg til dine eller bedriftens opplysninger, så vises de automatisk i PDF-rapportene.",
    ],
    closing: "Last ned iqWorkLog og glem papirlister – gjør timeføringen enkel og profesjonell!",
  },
  da: {
    metaTitle: "Apps og software | IQSoftCore",
    metaDescription: "IQSoftCores apps – start med iqWorkLog, en enkel timeregistreringsapp.",
    pageTitle: "Apps og software",
    pageIntro: "Vi bygger klare apps til daglig brug. Vores første udgivelse er iqWorkLog.",
    featuresHeading: "Vigtigste funktioner",
    privacyLink: "Privatlivspolitik",
    playLabel: "Google Play",
    backHome: "Tilbage til forsiden",
    short: "Android-app til timeregistrering. 14 dages gratis prøve, derefter et engangskøb. Over 70 sprog. Tidligere Tuntilappu.",
    long: "iqWorkLog er lavet til dig, der vil håndtere timeregistrering uden unødigt besvær. Det er en let, pålidelig og privatlivsvenlig app til at logge timer og lave professionelle rapporter.",
    features: [
      "Nem at bruge: Registrer daglige timer og arbejdsopgaver på sekunder.",
      "Professionelle rapporter: Lav rene PDF- og CSV-filer (Excel-kompatible) direkte fra telefonen.",
      "Privatliv først: Ingen registrering eller login kræves. Alle data gemmes kun på din enhed – vi indsamler ikke dine data på servere.",
      "Flersproget: Understøttelse af over 70 sprog.",
      "Firmadata: Tilføj dine eller virksomhedens oplysninger, så de vises automatisk i PDF-rapporterne.",
    ],
    closing: "Download iqWorkLog og glem papirlisterne – håndter timeregistrering nemt og professionelt!",
  },
  de: {
    metaTitle: "Apps und Software | IQSoftCore",
    metaDescription: "IQSoftCore-Apps – starten Sie mit iqWorkLog, einer einfachen Zeiterfassungs-App.",
    pageTitle: "Apps und Software",
    pageIntro: "Wir entwickeln klare Apps für den Alltag. Unsere erste Veröffentlichung ist iqWorkLog.",
    featuresHeading: "Wichtigste Funktionen",
    privacyLink: "Datenschutzerklärung",
    playLabel: "Google Play",
    backHome: "Zurück zur Startseite",
    short: "Android-App zur Zeiterfassung. 14 Tage kostenlos testen, danach ein Einmalkauf. Über 70 Sprachen. Früher Tuntilappu.",
    long: "iqWorkLog ist für alle gedacht, die Arbeitszeiten ohne unnötigen Aufwand erfassen möchten. Es ist eine leichte, zuverlässige und datenschutzfreundliche App zum Loggen von Stunden und Erstellen professioneller Berichte.",
    features: [
      "Einfach zu bedienen: Tägliche Stunden und Aufgaben in Sekunden erfassen.",
      "Professionelle Berichte: Saubere PDF- und CSV-Dateien (Excel-kompatibel) direkt vom Handy exportieren.",
      "Datenschutz zuerst: Keine Registrierung oder Anmeldung nötig. Alle Daten bleiben auf Ihrem Gerät – wir erheben keine Daten auf Servern.",
      "Mehrsprachig: Unterstützung für über 70 Sprachen.",
      "Firmendaten: Fügen Sie Ihre oder die Firmendaten hinzu – sie erscheinen automatisch in den PDF-Berichten.",
    ],
    closing: "Laden Sie iqWorkLog herunter und vergessen Sie Papierlisten – erfassen Sie Arbeitszeiten einfach und professionell!",
  },
  nl: {
    metaTitle: "Apps en software | IQSoftCore",
    metaDescription: "IQSoftCore-apps – begin met iqWorkLog, een eenvoudige urenregistratie-app.",
    pageTitle: "Apps en software",
    pageIntro: "We bouwen duidelijke apps voor dagelijks gebruik. Onze eerste release is iqWorkLog.",
    featuresHeading: "Belangrijkste functies",
    privacyLink: "Privacybeleid",
    playLabel: "Google Play",
    backHome: "Terug naar home",
    short: "Android-app voor urenregistratie. 14 dagen gratis proberen, daarna een eenmalige aankoop. Meer dan 70 talen. Voorheen Tuntilappu.",
    long: "iqWorkLog is gemaakt voor wie werktijden wil bijhouden zonder gedoe. Het is een lichte, betrouwbare en privacygerichte app om uren te loggen en professionele rapporten te maken.",
    features: [
      "Eenvoudig te gebruiken: Registreer dagelijkse uren en taken in seconden.",
      "Professionele rapporten: Exporteer nette PDF- en CSV-bestanden (Excel-compatibel) direct vanaf je telefoon.",
      "Privacy first: Geen registratie of login nodig. Alle data blijft op jouw apparaat – we verzamelen niets op servers.",
      "Meertalig: Ondersteuning voor meer dan 70 talen.",
      "Bedrijfsgegevens: Voeg jouw of bedrijfsgegevens toe, zodat ze automatisch in PDF-rapporten verschijnen.",
    ],
    closing: "Download iqWorkLog en vergeet papierlijsten – doe urenregistratie eenvoudig en professioneel!",
  },
  fr: {
    metaTitle: "Applications et logiciels | IQSoftCore",
    metaDescription: "Applications IQSoftCore – commencez avec iqWorkLog, une app simple de suivi du temps.",
    pageTitle: "Applications et logiciels",
    pageIntro: "Nous créons des applications claires pour un usage quotidien. Notre première publication est iqWorkLog.",
    featuresHeading: "Fonctionnalités clés",
    privacyLink: "Politique de confidentialité",
    playLabel: "Google Play",
    backHome: "Retour à l’accueil",
    short: "Application Android de suivi du temps. Essai gratuit de 14 jours, puis achat unique. Plus de 70 langues. Anciennement Tuntilappu.",
    long: "iqWorkLog est conçue pour ceux qui veulent gérer le suivi du temps sans complication. C’est une application légère, fiable et respectueuse de la vie privée pour enregistrer les heures et générer des rapports professionnels.",
    features: [
      "Simple d’utilisation : Enregistrez vos heures et tâches quotidiennes en quelques secondes.",
      "Rapports professionnels : Exportez des fichiers PDF et CSV (compatibles Excel) directement depuis votre téléphone.",
      "Confidentialité d’abord : Aucune inscription ni connexion requise. Toutes vos données restent sur votre appareil – nous ne collectons rien sur des serveurs.",
      "Multilingue : Prise en charge de plus de 70 langues.",
      "Informations d’entreprise : Ajoutez vos informations pour qu’elles apparaissent automatiquement dans les rapports PDF.",
    ],
    closing: "Téléchargez iqWorkLog et oubliez les listes papier – gérez le suivi du temps facilement et professionnellement !",
  },
  es: {
    metaTitle: "Aplicaciones y software | IQSoftCore",
    metaDescription: "Apps de IQSoftCore – empieza con iqWorkLog, un gestor de horas sencillo.",
    pageTitle: "Aplicaciones y software",
    pageIntro: "Creamos aplicaciones claras para el uso diario. Nuestro primer lanzamiento es iqWorkLog.",
    featuresHeading: "Funciones principales",
    privacyLink: "Política de privacidad",
    playLabel: "Google Play",
    backHome: "Volver al inicio",
    short: "App Android de control de horas. Prueba gratis de 14 días y después una compra única. Más de 70 idiomas. Antes Tuntilappu.",
    long: "iqWorkLog está pensada para quien quiere registrar horas de trabajo sin complicaciones. Es una app ligera, fiable y centrada en la privacidad para anotar horas y generar informes profesionales.",
    features: [
      "Fácil de usar: Registra horas y tareas diarias en segundos.",
      "Informes profesionales: Exporta archivos PDF y CSV (compatibles con Excel) directamente desde el teléfono.",
      "Privacidad primero: No requiere registro ni inicio de sesión. Todos los datos se guardan solo en tu dispositivo – no recopilamos datos en servidores.",
      "Multilingüe: Compatible con más de 70 idiomas.",
      "Datos de empresa: Añade tus datos o los de tu empresa para que aparezcan automáticamente en los informes PDF.",
    ],
    closing: "Descarga iqWorkLog y olvida las listas en papel: gestiona el control horario de forma fácil y profesional.",
  },
  pt: {
    metaTitle: "Aplicativos e software | IQSoftCore",
    metaDescription: "Apps da IQSoftCore – comece com o iqWorkLog, um app simples de horas.",
    pageTitle: "Aplicativos e software",
    pageIntro: "Criamos aplicativos claros para o uso diário. Nosso primeiro lançamento é o iqWorkLog.",
    featuresHeading: "Principais recursos",
    privacyLink: "Política de privacidade",
    playLabel: "Google Play",
    backHome: "Voltar ao início",
    short: "App Android de controle de horas. Teste grátis de 14 dias e depois uma compra única. Mais de 70 idiomas. Antigo Tuntilappu.",
    long: "O iqWorkLog foi feito para quem quer registrar horas de trabalho sem complicação. É um app leve, confiável e focado em privacidade para lançar horas e gerar relatórios profissionais.",
    features: [
      "Fácil de usar: Registre horas e tarefas diárias em segundos.",
      "Relatórios profissionais: Exporte arquivos PDF e CSV (compatíveis com Excel) direto do celular.",
      "Privacidade em primeiro lugar: Sem cadastro ou login. Todos os dados ficam só no seu dispositivo – não coletamos dados em servidores.",
      "Multilíngue: Compatível com mais de 70 idiomas.",
      "Dados da empresa: Adicione seus dados ou os da empresa para aparecerem automaticamente nos relatórios PDF.",
    ],
    closing: "Baixe o iqWorkLog e esqueça as listas em papel – faça o controle de horas de forma fácil e profissional!",
  },
  it: {
    metaTitle: "App e software | IQSoftCore",
    metaDescription: "App IQSoftCore – inizia con iqWorkLog, un semplice gestore delle ore.",
    pageTitle: "App e software",
    pageIntro: "Creiamo app chiare per l’uso quotidiano. Il nostro primo rilascio è iqWorkLog.",
    featuresHeading: "Funzionalità principali",
    privacyLink: "Informativa sulla privacy",
    playLabel: "Google Play",
    backHome: "Torna alla home",
    short: "App Android per le ore di lavoro. Prova gratuita di 14 giorni, poi un acquisto una tantum. Oltre 70 lingue. Prima Tuntilappu.",
    long: "iqWorkLog è pensata per chi vuole registrare le ore di lavoro senza complicazioni. È un’app leggera, affidabile e incentrata sulla privacy per annotare le ore e generare report professionali.",
    features: [
      "Facile da usare: Registra ore e attività giornaliere in pochi secondi.",
      "Report professionali: Esporta file PDF e CSV (compatibili con Excel) direttamente dal telefono.",
      "Privacy prima di tutto: Nessuna registrazione o accesso richiesti. Tutti i dati restano sul tuo dispositivo – non raccogliamo dati su server.",
      "Multilingue: Supporto per oltre 70 lingue.",
      "Dati aziendali: Aggiungi i tuoi dati o quelli dell’azienda e appariranno automaticamente nei report PDF.",
    ],
    closing: "Scarica iqWorkLog e dimentica le liste cartacee: gestisci le ore in modo semplice e professionale!",
  },
  pl: {
    metaTitle: "Aplikacje i oprogramowanie | IQSoftCore",
    metaDescription: "Aplikacje IQSoftCore – zacznij od iqWorkLog, prostej ewidencji czasu pracy.",
    pageTitle: "Aplikacje i oprogramowanie",
    pageIntro: "Tworzymy przejrzyste aplikacje do codziennego użytku. Nasza pierwsza publikacja to iqWorkLog.",
    featuresHeading: "Najważniejsze funkcje",
    privacyLink: "Polityka prywatności",
    playLabel: "Google Play",
    backHome: "Powrót do strony głównej",
    short: "Aplikacja Android do ewidencji czasu pracy. 14 dni bezpłatnie, potem jednorazowy zakup. Ponad 70 języków. Dawniej Tuntilappu.",
    long: "iqWorkLog jest dla osób, które chcą rejestrować czas pracy bez zbędnych komplikacji. To lekka, niezawodna i dbająca o prywatność aplikacja do logowania godzin i tworzenia profesjonalnych raportów.",
    features: [
      "Łatwa w użyciu: Rejestruj dzienne godziny i zadania w kilka sekund.",
      "Profesjonalne raporty: Eksportuj czyste pliki PDF i CSV (zgodne z Excelem) bezpośrednio z telefonu.",
      "Prywatność przede wszystkim: Bez rejestracji i logowania. Wszystkie dane zostają na Twoim urządzeniu – nie zbieramy ich na serwerach.",
      "Wielojęzyczna: Obsługa ponad 70 języków.",
      "Dane firmy: Dodaj swoje lub firmowe dane, a pojawią się automatycznie w raportach PDF.",
    ],
    closing: "Pobierz iqWorkLog i zapomnij o papierowych listach – prowadź ewidencję czasu pracy łatwo i profesjonalnie!",
  },
  cs: {
    metaTitle: "Aplikace a software | IQSoftCore",
    metaDescription: "Aplikace IQSoftCore – začněte s iqWorkLog, jednoduchou evidencí pracovní doby.",
    pageTitle: "Aplikace a software",
    pageIntro: "Vytváříme přehledné aplikace pro každodenní použití. Naše první vydání je iqWorkLog.",
    featuresHeading: "Nejdůležitější funkce",
    privacyLink: "Zásady ochrany osobních údajů",
    playLabel: "Google Play",
    backHome: "Zpět na úvod",
    short: "Androidová aplikace pro evidenci pracovní doby. 14 dní zdarma, pak jednorázový nákup. Více než 70 jazyků. Dříve Tuntilappu.",
    long: "iqWorkLog je pro každého, kdo chce sledovat pracovní dobu bez zbytečných komplikací. Je to lehká, spolehlivá a na soukromí zaměřená aplikace pro zápis hodin a tvorbu profesionálních reportů.",
    features: [
      "Snadné použití: Zaznamenejte denní hodiny a úkoly během sekund.",
      "Profesionální reporty: Exportujte čisté PDF a CSV soubory (kompatibilní s Excelem) přímo z telefonu.",
      "Soukromí na prvním místě: Není potřeba registrace ani přihlášení. Všechna data zůstávají na vašem zařízení – nic neshromažďujeme na serverech.",
      "Vícejazyčnost: Podpora více než 70 jazyků.",
      "Firemní údaje: Přidejte své nebo firemní údaje a automaticky se zobrazí v PDF reportech.",
    ],
    closing: "Stáhněte iqWorkLog a zapomeňte na papírové seznamy – evidujte pracovní dobu snadno a profesionálně!",
  },
  ja: {
    metaTitle: "アプリとソフトウェア | IQSoftCore",
    metaDescription: "IQSoftCoreのアプリ – シンプルな勤務時間管理 iqWorkLog から始めましょう。",
    pageTitle: "アプリとソフトウェア",
    pageIntro: "日常で使いやすい明確なアプリを開発しています。最初のリリースは iqWorkLog です。",
    featuresHeading: "主な機能",
    privacyLink: "プライバシーポリシー",
    playLabel: "Google Play",
    backHome: "ホームに戻る",
    short: "Androidの勤務時間管理アプリ。14日間の無料試用のあと、買い切り。70以上の言語。旧Tuntilappu。",
    long: "iqWorkLog は、余計な手間なく勤務時間を記録したい方のためのアプリです。軽量・信頼性・プライバシー重視で、時間の記録とプロ品質のレポート作成ができます。",
    features: [
      "簡単操作：日々の勤務時間と作業を数秒で記録。",
      "プロのレポート：きれいな PDF / CSV（Excel互換）をスマホから直接出力。",
      "プライバシー優先：登録やログイン不要。データは端末のみに保存 – サーバーには収集しません。",
      "多言語対応：70以上の言語。",
      "会社情報：自分や会社の情報を追加すると、PDFレポートに自動反映。",
    ],
    closing: "iqWorkLog をダウンロードして紙のリストを卒業 – 勤務時間管理を簡単かつプロフェッショナルに！",
  },
  ko: {
    metaTitle: "앱 및 소프트웨어 | IQSoftCore",
    metaDescription: "IQSoftCore 앱 – 간단한 근무시간 관리 앱 iqWorkLog로 시작하세요.",
    pageTitle: "앱 및 소프트웨어",
    pageIntro: "일상에서 쓰기 쉬운 명확한 앱을 만듭니다. 첫 번째 출시는 iqWorkLog입니다.",
    featuresHeading: "주요 기능",
    privacyLink: "개인정보 처리방침",
    playLabel: "Google Play",
    backHome: "홈으로 돌아가기",
    short: "Android 근무시간 관리 앱. 14일 무료 체험 후 일회성 구매. 70개 이상의 언어. 이전 이름 Tuntilappu.",
    long: "iqWorkLog는 복잡한 설정 없이 근무시간을 기록하려는 분들을 위한 앱입니다. 가볍고 신뢰할 수 있으며 개인정보를 중시하는 시간 기록·보고서 앱입니다.",
    features: [
      "쉬운 사용: 일일 근무시간과 작업을 몇 초 만에 기록.",
      "전문 보고서: 깔끔한 PDF 및 CSV(Excel 호환) 파일을 휴대폰에서 바로 내보내기.",
      "개인정보 우선: 가입·로그인 불필요. 모든 데이터는 기기에만 저장 – 서버로 수집하지 않습니다.",
      "다국어: 70개 이상의 언어.",
      "회사 정보: 본인 또는 회사 정보를 추가하면 PDF 보고서에 자동 반영.",
    ],
    closing: "iqWorkLog를 다운로드하고 종이 목록은 잊으세요 – 근무시간 기록을 쉽고 전문적으로!",
  },
  zh: {
    metaTitle: "应用与软件 | IQSoftCore",
    metaDescription: "IQSoftCore 应用 – 从简单的工时管理应用 iqWorkLog 开始。",
    pageTitle: "应用与软件",
    pageIntro: "我们打造日常易用的清晰应用。首款发布为 iqWorkLog。",
    featuresHeading: "主要功能",
    privacyLink: "隐私政策",
    playLabel: "Google Play",
    backHome: "返回首页",
    short: "Android 工时管理应用。14 天免费试用，之后一次性购买。70 多种语言。原名 Tuntilappu。",
    long: "iqWorkLog 专为希望轻松记录工时的人设计。它轻量、可靠且注重隐私，用于记录工时并生成专业报告。",
    features: [
      "易于使用：几秒记录每日工时与任务。",
      "专业报告：直接从手机导出清晰的 PDF 与 CSV（Excel 兼容）文件。",
      "隐私优先：无需注册或登录。所有数据仅保存在您的设备上 – 我们不会在服务器上收集数据。",
      "多语言：支持 70 多种语言。",
      "公司信息：添加您或公司的信息，将自动显示在 PDF 报告中。",
    ],
    closing: "下载 iqWorkLog，告别纸质清单 – 轻松、专业地管理工时！",
  },
};

function escapeAppsHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const WORKLOG_NAME = "iqWorkLog";
const WORKLOG_OG_LOCALE = {
  fi: "fi_FI",
  en: "en_US",
  sv: "sv_SE",
  no: "nb_NO",
  da: "da_DK",
  de: "de_DE",
  nl: "nl_NL",
  fr: "fr_FR",
  es: "es_ES",
  pt: "pt_BR",
  it: "it_IT",
  pl: "pl_PL",
  cs: "cs_CZ",
  ja: "ja_JP",
  ko: "ko_KR",
  zh: "zh_CN",
};

function syncWorkLogSocial(lang, title, description) {
  const set = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute("content", value);
  };
  set('meta[property="og:title"]', title);
  set('meta[property="og:description"]', description);
  set('meta[name="twitter:title"]', title);
  set('meta[name="twitter:description"]', description);
  set('meta[property="og:locale"]', WORKLOG_OG_LOCALE[lang] || "en_US");
}

function renderTuntilappuPage(lang) {
  const root = document.getElementById("tuntilappu-root");
  if (!root || typeof APPS_PAGE === "undefined") return;

  const page = APPS_PAGE[lang] || APPS_PAGE.en || APPS_PAGE.fi;
  if (!page) return;

  const ui = (typeof window.iqStringsFor === "function" && window.iqStringsFor(lang)) || ((typeof translations !== "undefined" && (translations[lang] || translations.fi)) || {});
  const appName = typeof tuntilappuName === "function" ? tuntilappuName(lang) : WORKLOG_NAME;
  const title = `${WORKLOG_NAME} | IQSoftCore`;

  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && page.short) metaDesc.setAttribute("content", page.short);
  syncWorkLogSocial(lang, title, page.short);

  let html = `<div class="product-heading">
      <img class="product-icon" src="assets/iqworklog-icon.svg" width="72" height="72" alt="" />
      <div>
        <h1>${WORKLOG_NAME}</h1>
        <p class="app-short">${escapeAppsHtml(page.short)}</p>
      </div>
    </div>`;
  html += `<p class="status-pill status-soon">${escapeAppsHtml(ui.statusSoon || "Tulossa")}</p>`;
  html += `<p>${escapeAppsHtml(page.long)}</p>`;
  html += `<h2>${escapeAppsHtml(page.featuresHeading)}</h2>`;
  html += `<ul>${page.features.map((item) => `<li>${escapeAppsHtml(item)}</li>`).join("")}</ul>`;
  html += `<p>${escapeAppsHtml(ui.worklogSoon || "iqWorkLog ei ole vielä julkinen. Tällä sivulla ei ole latauslinkkiä.")}</p>`;
  if (ui.noPublicPrice) {
    html += `<p>${escapeAppsHtml(ui.noPublicPrice)} <a href="index.html#contact">${escapeAppsHtml(ui.ctaContact || "")}</a></p>`;
  }
  html += `<div class="app-actions">`;
  html += `<a class="btn btn-primary" id="cta-contact-worklog" data-cta="contact" href="index.html#contact">${escapeAppsHtml(ui.ctaContact || "Ota yhteyttä")}</a>`;
  html += `<a class="btn btn-ghost" href="privacy-tuntilappu.html">${escapeAppsHtml(page.privacyLink)}</a>`;
  html += `</div>`;
  html += `<p class="policy-nav"><a class="btn btn-ghost" href="apps.html">${escapeAppsHtml(ui.backApps || page.backHome)}</a></p>`;

  root.innerHTML = html;
}
