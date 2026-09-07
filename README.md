# IQSoftCore

Staattinen, monikielinen yrityssivusto IQSoftCorelle (ei build-työkalua). Julkaisu: GitHub Pages → `iqsoftcore.fi`.

## Sisältö

| Sivu | Tiedosto | Huomio |
|------|----------|--------|
| Etusivu | `index.html` | Yritysesittely + yhteystiedot |
| Sovellukset | `apps.html` | Tuntilappu; copy `js/apps-content.js` |
| Tietosuoja (yritys) | `privacy.html` | `js/privacy-policies.js` |
| Tuntilappu-tietosuoja | `privacy-tuntilappu.html` | `js/privacy-tuntilappu.js` (Play-URL) |
| Tyylit / logo | `css/styles.css`, `assets/` | SVG-merkki (IQC) + wordmark |

Kielet (sivuston valitsin): fi, en, sv, no, da, de, nl, fr, es, pt, it, pl, cs, ja, ko, zh.

## Paikallinen esikatselu

Avaa `index.html` selaimessa, tai:

```bash
npx --yes serve .
```

## Arkkitehtuuri

Puhdas staattinen HTML + CSS + JS. Ei bundleria.

```
index.html / apps.html / privacy*.html
  ├── css/styles.css
  ├── assets/*.svg
  └── js/
      ├── i18n.js              # yhteiset UI-käännökset + kielen valinta
      ├── apps-content.js      # Sovellukset-sivun copy + renderAppsPage()
      ├── tuntilappu-names.js  # lokalisoitu Play-otsikko
      ├── privacy-policies.js  # yritystietosuoja
      └── privacy-tuntilappu.js
```

### i18n

`js/i18n.js`:

1. Tunnistaa kielen: `?lang=` → `localStorage` (`iqsoftcore-lang`) → selaimen kieli → oletus `fi`
2. Päivittää `[data-i18n]` / `[data-i18n-attr]` -elementit
3. Synkronoi `#lang-select` ja URL-parametrin
4. Kutsuu sivukohtaiset rendererit: `renderPrivacyPolicy(lang)`, `renderAppsPage(lang)`

### Tuntilappu / Google Play

- Näyttönimi kielittäin: `js/tuntilappu-names.js` (`tuntilappuName(lang)`)
- Sovelluskuvaukset: `js/apps-content.js`
- Tietosuoja-URL Playlle: `https://iqsoftcore.fi/privacy-tuntilappu.html`

## Julkaisu (GitHub Pages)

Nykyinen malli on **branch-based Pages** juuresta (`main` / root). Repossa ei ole `.github/workflows/pages.yml` (Actions-deploy poistettiin).

| Tiedosto | Tehtävä |
|----------|---------|
| `CNAME` | Custom domain: `iqsoftcore.fi` |
| `.nojekyll` | Estää Jekyll-prosessoinnin (tarvitaan staattisille asseteille) |

Tyypillinen workflow:

1. Merge / push `main`-haaraan
2. Varmista repo Settings → Pages: lähde = branch `main` / root (ei vanha `gh-pages`)
3. DNS: CNAME/A records osoittavat GitHub Pagesiin; domainin pitää vastata `CNAME`-tiedostoa

Jos Pages ei päivity: tarkista branch-asetus, odota deploy-jonotusta, ja että `.nojekyll` on juuressa. Remote-haara `gh-pages` voi olla vanhentunut Actions-ajan jäänne — älä käytä sitä, jos Settings osoittaa `main`-juureen.

## Kielen / sisällön lisääminen

1. **Yhteinen UI** — lisää kielikoodi ja avaimet `translations`-objektiin `js/i18n.js`; lisää `<option>` jokaiseen HTML-sivun `#lang-select`-listaan.
2. **Apps** — lisää sama kielikoodi `APPS_PAGE`-objektiin `js/apps-content.js`.
3. **Play-nimi** — `TUNTILAPPU_NAMES` tiedostossa `js/tuntilappu-names.js`.
4. **Tietosuojat** — vastaavat kielilohkot `privacy-policies.js` / `privacy-tuntilappu.js`.

Pidä kielikoodit synkassa kaikkien tiedostojen ja select-optioiden välillä; puuttuva kieli putoaa fallbackeihin (`i18n` → `fi`; apps/privacy → `en` sitten `fi`).

## Yhteystiedot

- Email: info@iqsoftcore.fi
- Phone: +358 45 133 4009
- Location: Finland
