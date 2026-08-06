/**
 * Google Play–oriented display titles for Tuntilappu by language.
 * Used on the website when the user switches language.
 */
const TUNTILAPPU_NAMES = {
  fi: "Tuntilappu PDF – Tuntikirjaus",
  en: "Timesheet PDF – Work Hours Log",
  de: "Stundenzettel PDF – Arbeitszeiterfassung",
  fr: "Feuille de Temps PDF – Suivi des Heures",
  es: "Hoja de Horas PDF – Registro de Trabajo",
  pt: "Planilha de Horas PDF – Registro de Trabalho",
  it: "Foglio Ore PDF – Registro Lavoro",
  nl: "Urenstaat PDF – Werkuren Registratie",
  sv: "Tidrapport PDF – Arbetstimmar",
  no: "Timeliste PDF – Arbeidstimer",
  da: "Timeseddel PDF – Arbejdstimer",
  pl: "Karta Czasu Pracy PDF",
  cs: "Výkaz Práce PDF – Evidence Hodin",
  ja: "勤務時間表 PDF – 勤務記録",
  ko: "근무시간표 PDF – 작업시간 기록",
  zh: "工时表 PDF – 工作时间记录",
};

function tuntilappuName(lang) {
  return TUNTILAPPU_NAMES[lang] || TUNTILAPPU_NAMES.en;
}
