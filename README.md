# IQSoftCore

Yksinkertaiset yrityskotisivut IQSoftCorelle. Yritys tekee ohjelmistoja, sovelluksia (muun muassa Tuntilappu, iqFleetSync ja iqRallyNote) ja elektroniikkasuunnittelua. Vain iqFleetSync-sivu on kalustokohtainen.

## Sisältö

- Etusivu: lyhyt yritysesittely ja yhteystiedot
- Sovellukset: `apps.html` (Tuntilappu, iqFleetSync, iqRallyNote)
- iqFleetSync: `iqfleetsync.html` (nykyiset ominaisuudet, kysymykset, linkki palveluun)
- Hinnasto: `hinnasto.html`
- Käyttöehdot: `kayttoehdot.html` (luonnos)
- Tietosuoja: yritystason käytäntö, iqFleetSync-osio ja Tuntilapun oma sivu (`privacy-tuntilappu.html`)
- Logo: SVG-merkki (IQC) ja wordmark
- Kielet: fi, en, sv, no, da, de, nl, fr, es, pt, it, pl, cs, ja, ko, zh

## iqFleetSync-kuvaus (2026-10-04)

Sivuston iqFleetSync-tekstit päivitettiin vastaamaan palvelua osoitteessa fleetsync.iqsoftcore.fi.

- Kirjautuminen ilman salasanaa samassa välilehdessä: sähköpostin 6-numeroinen koodi, kutsulinkki tai passkey. Jaetulla ajoneuvopuhelimella nimi ja valinnainen 4–6 numeron PIN (30 minuuttia).
- QR-tarra (r.iqsoftcore.fi) tunnistaa yksikön eikä kirjaa sisään. Arkistoidun yksikön tarra näyttää tekstin Yksikkö poistettu.
- Puhelinnumero on vain valinnainen yhteystieto.
- Kuljettajan sivu, henkilöt, kalusto (tuonti ja vienti, arkistointi), määräajat, työmääräykset, korjaamon määräaikainen linkki, kustannusoikeus, vikojen tilat, sähköposti- ja sovellusilmoitukset, audit-loki, tietojen vienti ja anonymisointi, asetukset ja ohjekeskus.
- Hintaportaat pidettiin ennallaan: perusmaksu 10 €/kk; yksiköt 1–15 / 16–50 / 51–100 / yli 100 hinnoilla 1,50 / 1,30 / 1,10 / 0,90 €. Ajoneuvo ja työkone ovat yksi yksikkö, perävaunu puoli, laite 0 €. Arkistoitua yksikköä ei laskuteta. Hinnat alv 0 %.
- Maksu kuvataan kuukausilaskuna tilisiirtona. Kortti-, PayPal- ja SEPA-lupausta ei ole, koska verkkomaksu kortilla ei ole käytössä.
- Erillistä UKK-sivua ei ollut. Lyhyet kysymykset ovat iqFleetSync-sivulla.

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
