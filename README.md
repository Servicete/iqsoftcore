# IQSoftCore

Yksinkertaiset yrityskotisivut IQSoftCorelle. Yritys tekee ohjelmistoja, sovelluksia (muun muassa Tuntilappu, iqFleetSync ja iqRallyNote) ja elektroniikkasuunnittelua. Vain iqFleetSync-sivu on kalustokohtainen.

## Sisältö

- Etusivu: lyhyt yritysesittely ja yhteystiedot
- Sovellukset: `apps.html` (Tuntilappu, iqFleetSync, iqRallyNote)
- iqFleetSync: `iqfleetsync.html` (myyntisivu: yritys-, huolto- ja kuljettajanäkymä, laskuri, kokeilu)
- Hinnasto: `hinnasto.html`
- Käyttöehdot: `kayttoehdot.html` (luonnos)
- Tietosuoja: yritystason käytäntö (`privacy.html`, iqFleetSync-osio `#iqfleetsync`) ja Tuntilapun oma sivu (`privacy-tuntilappu.html`)
- Logo: SVG-merkki (IQC) ja wordmark
- Kielet: fi, en, sv, no, da, de, nl, fr, es, pt, it, pl, cs, ja, ko, zh

## iqFleetSync-sivu (2026-10-05)

`iqfleetsync.html` on myyntisivu, ei käyttöohje. Se kertoo kolmesta näkymästä: yritys (pääkäyttäjä), huolto ja kuljettaja. Jokaisessa kerrotaan, mitä siinä tehdään ja miten työ helpottuu. Kirjautumistapoja, PIN-koodeja ja näkyvyyssääntöjä ei kuvailla.

- Selain, ei asennusta. QR-tarrat ajoneuvoihin, perävaunuihin ja koneisiin.
- Vikailmoitus puhelimesta, kilometrit ja tunnit, huoltohistoria, muistutukset ja työmääräykset.
- Jokaisessa näkymässä on omat ohjeet. Käyttäjiä on rajattomasti. 30 päivän kokeilu ja yhteydenotto.
- Kuukausihinnan laskuri ja korostettu yhteensä-rivi ovat sivulla ja hinnastossa. Laskuri erittelee yhä perävaunun puolikkaana yksikkönä ja laitteen nollahintaisena.
- Tietosuoja on yrityksen sivulla `privacy.html#iqfleetsync`. iqFleetSync-sivun alatunniste linkittää siihen.

## Paikallinen esikatselu

Avaa `index.html` selaimessa, tai käynnistä paikallinen palvelin:

```bash
npx --yes serve .
```

## Google Play

Tuntilapun tietosuoja-URL: `privacy-tuntilappu.html` (julkaistuna domainillasi).

Lokalisoitujen nimien lähde: `js/tuntilappu-names.js`.  
Sovelluskuvaukset: `js/apps-content.js`.

## Yhteystiedot

- Email: info@iqsoftcore.fi
- Phone: +358 45 133 4009
- Location: Finland
