# IQSoftCore

Yksinkertaiset yrityskotisivut IQSoftCorelle. Yritys tekee ohjelmistoja, sovelluksia (muun muassa Tuntilappu, iqFleetSync ja iqRallyNote) ja elektroniikkasuunnittelua. Vain iqFleetSync-sivu on kalustokohtainen.

## Sisältö

- Etusivu: lyhyt yritysesittely ja yhteystiedot
- Sovellukset: `apps.html` (Tuntilappu, iqFleetSync, iqRallyNote)
- iqFleetSync: `iqfleetsync.html` (nykyiset ominaisuudet, kysymykset, linkki palveluun)
- Hinnasto: `hinnasto.html`
- Käyttöehdot: `kayttoehdot.html` (luonnos)
- Tietosuoja: yritystason käytäntö, iqFleetSyncin oma seloste (`privacy-iqfleetsync.html`) ja Tuntilapun oma sivu (`privacy-tuntilappu.html`)
- Logo: SVG-merkki (IQC) ja wordmark
- Kielet: fi, en, sv, no, da, de, nl, fr, es, pt, it, pl, cs, ja, ko, zh

## iqFleetSync-kuvaus (2026-10-05)

Sivu `iqfleetsync.html` kirjoitettiin uudelleen vastaamaan palvelua osoitteessa fleetsync.iqsoftcore.fi.

- Selain kaikille rooleille: pääkäyttäjä, huolto ja kuljettaja. Mitään ei asenneta.
- QR-tarra tunnistaa yksikön eikä kirjaa sisään. Skannaus lisää yksikön kuljettajan omiin. Tarrat voi tulostaa palvelusta.
- Kutsu sähköpostilinkillä, sitten passkey. Varalla 6-numeroinen sähköpostikoodi. Jaetun puhelimen valinnainen 4 numeron PIN, jonka pääkäyttäjä näkee.
- Hinta: perusmaksu 10 €/kk ja yksiköt 1–15 / 16–50 / 51–100 / yli 100 hinnoilla 1,50 / 1,30 / 1,10 / 0,90 €. Käyttäjiä rajattomasti. Alv 0 %, alv laskulle. 30 päivän kokeilu. Maksu kortilla Stripen kautta, lasku kuukausittain jälkikäteen.
- Tiedot EU:ssa (Supabase EU-alue, Vercel). Oma tietosuojaseloste on `privacy-iqfleetsync.html`.
- Hinnaston laskuri ja sen korostettu yhteensä-rivi säilyivät. Laskuri erittelee yhä perävaunun puolikkaana yksikkönä ja laitteen nollahintaisena. Tätä erittelyä ei toisteta tuotesivulla.

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
