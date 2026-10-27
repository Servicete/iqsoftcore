# iqFleetSync-videot

iqFleetSync-sivun esittelyvideo on `assets/video/iqfleetsync_mainos_fi.mp4` ja juliste `assets/video/iqfleetsync_mainos_fi_thumb.jpg`. Suomenkielinen tekstitys on poltettu kuvaan. Pehmeä WebVTT-raita on jokaiselle sivuston kielelle tiedostona `assets/video/iqfleetsync_mainos_fi.<kieli>.vtt`. Soitin ei käynnisty itsestään, eikä videon alla ole otsikkopalkkia. Saavutettava nimi on videon `aria-label`- ja `title`-attribuuteissa.

# iqFleetSync-ohjevideot

Ohjekeskus on iqFleetSync-sivun osio `#ohjekeskus`. Se soittaa nämä tiedostot kansiosta `videos/iqfleetsync/`, kun tiedosto on olemassa. Paikkamerkkejä ei näytetä. Puhe on suomeksi, ja suomenkielinen tekstitys on poltettu kuvaan. Jokaisella klipillä on lisäksi pehmeä WebVTT-raita jokaiselle sivuston kielelle: `videos/iqfleetsync/<nimi>.<kieli>.vtt`. Videot eivät käynnisty itsestään.

- `videos/iqfleetsync/qr-kirjautuminen-kuljettaja.mp4`
- `videos/iqfleetsync/qr-kirjautuminen-kuljettaja.vtt`
- `videos/iqfleetsync/lukemat-vs-vikailmoitus.mp4`
- `videos/iqfleetsync/lukemat-vs-vikailmoitus.vtt`
- `videos/iqfleetsync/huolto-raportit.mp4`
- `videos/iqfleetsync/huolto-raportit.vtt`
- `videos/iqfleetsync/paakayttaja-kutsut-roolit.mp4`
- `videos/iqfleetsync/paakayttaja-kutsut-roolit.vtt`
- `videos/iqfleetsync/qr-tarrat.mp4`
- `videos/iqfleetsync/qr-tarrat.vtt`
- `videos/iqfleetsync/varasto-viivakoodi.mp4`
- `videos/iqfleetsync/varasto-viivakoodi.vtt`
- `videos/iqfleetsync/tukibotti.mp4`
- `videos/iqfleetsync/tukibotti.vtt`

Soitin lisää `<track kind="subtitles">` -raidan jokaiselle kielelle. Oletuksena näkyy sivuston valittu kieli, sitten englanti, sitten suomi. Käyttäjä voi vaihtaa raidan soittimen valikosta. Vanha osoite `ohjekeskus.html` ohjaa tähän osioon. Tiedosto ilman kielipäätettä, esimerkiksi `qr-kirjautuminen-kuljettaja.vtt`, on edelleen suomenkielinen raita.
