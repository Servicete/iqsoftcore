# IQSoftCore

Yksinkertaiset yrityskotisivut IQSoftCorelle. Yritys tekee ohjelmistoja, sovelluksia (muun muassa Tuntilappu, iqFleetSync ja iqRallyNote) ja elektroniikkasuunnittelua. Vain iqFleetSync-sivu on kalustokohtainen.

## Sisältö

- Etusivu: lyhyt yritysesittely ja yhteystiedot
- Sovellukset: `apps.html` (Tuntilappu, iqFleetSync, iqRallyNote)
- iqFleetSync: `iqfleetsync.html` (myyntisivu: yritys-, huolto- ja kuljettajanäkymä, laskuri, kokeilu)
- Hinnasto: `hinnasto.html`
- Käyttöehdot: `kayttoehdot.html`
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

## Tekijänoikeus

Jokaisen sivun alatunnisteessa on merkintä © 2026 IqSoftCore ja lause ”Kaikki oikeudet pidätetään.” Vuodesta 2027 alkaen pieni skripti vaihtaa vuoden muotoon © 2026–kuluva vuosi. Jos JavaScript ei ole käytössä, näkyviin jää staattinen 2026. Samassa alatunnisteessa kerrotaan, että iqFleetSync™ ja iqRallyNote™ ovat IqSoftCoren tuotemerkkejä. ™-merkkiä ei toisteta sivun muussa tekstissä.

Käyttöehtojen kohta 17 kertoo, että ohjelmistot, sisältö, ohjevideot ja logot ovat IqSoftCoren omaisuutta, asiakas saa käyttöoikeuden eikä omistusoikeutta, ja asiakkaan omat tiedot pysyvät asiakkaan omaisuutena. Suomenkielinen teksti on virallinen versio. Käännökset ovat `js/i18n.js`- ja `js/terms-content.js`-tiedostoissa.

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
