# IQSoftCore

Staattinen, monikielinen yrityssivusto IQSoftCorelle (ei build-työkalua). Julkaisu: GitHub Pages → `iqsoftcore.fi`. Yritys tekee ohjelmistoja, sovelluksia (Tuntilappu, iqFleetSync, iqRallyNote) ja elektroniikkasuunnittelua.

## Sivukartta

| Sivu | Tiedosto | Sisältömoduuli |
|------|----------|----------------|
| Etusivu | `index.html` | `js/i18n.js` |
| Sovellukset | `apps.html` | `js/apps-content.js`, `js/apps-index.js` |
| Tuntilappu | `tuntilappu.html` | `js/apps-content.js` |
| iqFleetSync | `iqfleetsync.html` | `js/fleetsync-content.js` |
| iqRallyNote | `iqrallynote.html` | `js/rallynote-content.js` |
| Hinnasto | `hinnasto.html` | `js/pricing-content.js`, `js/pricing-calc.js` |
| Käyttöehdot | `kayttoehdot.html` | `js/terms-content.js` |
| Tietosuoja (yritys) | `privacy.html` | `js/privacy-policies.js` |
| Tuntilappu-tietosuoja | `privacy-tuntilappu.html` | `js/privacy-tuntilappu.js` |

Kielet (sivuston valitsin): fi, en, sv, no, da, de, nl, fr, es, pt, it, pl, cs, ja, ko, zh.

## Paikallinen esikatselu

```bash
npx --yes serve .
```

## Arkkitehtuuri

Puhdas staattinen HTML + CSS + JS. Ei bundleria.

```
*.html
  ├── css/styles.css
  ├── assets/
  └── js/
      ├── i18n.js                 # yhteiset UI-käännökset + kielen valinta
      ├── apps-content.js / apps-index.js
      ├── fleetsync-content.js / rallynote-content.js
      ├── pricing-content.js / pricing-calc.js
      ├── terms-content.js
      ├── privacy-policies.js / privacy-tuntilappu.js
      └── tuntilappu-names.js
```

### i18n (`js/i18n.js`)

1. Tunnistaa kielen: `?lang=` → `localStorage` (`iqsoftcore-lang`) → selaimen kieli → oletus `fi`
2. Päivittää `[data-i18n]` / `[data-i18n-attr]`
3. Synkronoi `#lang-select` ja URL-parametrin
4. Kutsuu sivukohtaiset rendererit: `renderPrivacyPolicy`, `renderAppsPage`, `renderTuntilappuPage`, `renderFleetSyncPage`, `renderRallyNotePage`, `renderPricingPage`, `renderTermsPage`

### iqFleetSync-kuvaus (pidä synkassa fleetsync.iqsoftcore.fi:n kanssa)

Sivuston tekstit (`js/fleetsync-content.js`):

- Kirjautuminen ilman salasanaa: sähköpostin 6-numeroinen koodi, kutsulinkki tai passkey. Jaetulla ajoneuvopuhelimella nimi ja valinnainen **4 numeron PIN** (30 min). Ylläpitäjä näkee PIN:n Henkilöt-sivulla; kuljettaja vaihtaa omansa.
- QR-tarra (`r.iqsoftcore.fi`) tunnistaa yksikön, ei kirjaa sisään. Arkistoidun yksikön tarra: "Yksikkö poistettu".
- Puhelinnumero on vain valinnainen yhteystieto.
- Kuljettajan sivu, henkilöt, kalusto (tuonti/vienti, arkistointi), määräajat, työmääräykset, korjaamon linkki, kustannusoikeus, vikojen tilat, ilmoitukset, audit-loki, vienti/anonymisointi, asetukset, ohjekeskus.
- Maksu kuvataan kuukausilaskuna tilisiirtona (ei kortti-/PayPal-/SEPA-lupausta tällä sivustolla).

### Hinnastolaskuri (`js/pricing-calc.js`)

`quoteFleetSync(vehicles, machines, trailers, attachments)`:

| Laji | Yksikköarvo | Tier-käyttö |
|------|-------------|-------------|
| Ajoneuvo / työkone | 1.0 (2 half) | Täyttävät portaat tässä järjestyksessä |
| Perävaunu | 0.5 (1 half) | Puolet sen portaan ajoneuvohinnasta |
| Laite (attachment) | 0 € | Ei vie portaasta paikkaa |

Portaat (alv 0 %): perusmaksu **10 €/kk**; yksiköt 1–15 / 16–50 / 51–100 / yli 100 hinnoilla **1,50 / 1,30 / 1,10 / 0,90 €**. Arkistoitua yksikköä ei laskuteta (kuvattu copy-teksteissä; laskuri ei itse arkistoi). Summat pysyvät senteissä.

UI-copy ja rivit: `js/pricing-content.js`. Testattavissa Nodeissa (`module.exports`).

## Julkaisu (GitHub Pages)

**Branch-based Pages** juuresta (`main` / root). Repossa ei ole `.github/workflows/`-deployta.

| Tiedosto | Tehtävä |
|----------|---------|
| `CNAME` | `iqsoftcore.fi` |
| `.nojekyll` | Estää Jekyll-prosessoinnin |

1. Merge / push `main`
2. Settings → Pages: lähde = branch `main` / root (ei vanha `gh-pages`)
3. DNS vastaa `CNAME`-tiedostoa

Remote-haara `gh-pages` voi olla vanhentunut — älä käytä sitä, jos Settings osoittaa `main`-juureen.

## Kielen / sisällön lisääminen

1. **Yhteinen UI** — kielikoodi + avaimet `translations`-objektiin `js/i18n.js`; `<option>` jokaiseen sivun `#lang-select`-listaan.
2. **Apps / FleetSync / RallyNote / Pricing / Terms** — vastaavat content-moduulit.
3. **Play-nimi** — `js/tuntilappu-names.js`.
4. **Tietosuojat** — `privacy-policies.js` / `privacy-tuntilappu.js`.

Pidä kielikoodit synkassa; puuttuva kieli putoaa fallbackeihin (`i18n` → `fi`; apps/privacy → `en` sitten `fi`).

## Uuden sovelluksen tietosuoja (kuvio)

Tuntilappu on malli:

1. Luo `privacy-<app>.html` juureen `data-policy="<id>"`.
2. Luo `js/privacy-<app>.js` → `PRIVACY_POLICIES.<id> = { … }` (vähintään `fi` / `en`).
3. Skriptijärjestys: `privacy-policies.js` → `privacy-<app>.js` → `i18n.js`.
4. Lisää app-policy myös `privacy.html`-sivulle.
5. Lisää `{ id, href, blurb }` `company.apps`-listaan (`privacy-policies.js`).

`renderPrivacyPolicy` lukee `#policy-root[data-policy]` ja renderöi `PRIVACY_POLICIES[policyId]`.

> **Huom:** iqRallyNote-tietosuoja elää avoimessa PR:ssä (`cursor/iqrallynote-privacy-policy-0f7a`) eikä ole vielä `main`-haarassa.

## Google Play

Tuntilapun tietosuoja-URL: `https://iqsoftcore.fi/privacy-tuntilappu.html`.

## Yhteystiedot

- Email: info@iqsoftcore.fi
- Phone: +358 45 133 4009
- Location: Finland (Siihtalantie 56, 62710 Kurejoki; Y-tunnus 3658340-4)
