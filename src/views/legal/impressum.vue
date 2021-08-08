<template>
  <homepageNav />
  <div class="white impressum">
    <h1>Impressum</h1>
    <h2 id="m46">Diensteanbieter</h2>
    <p>PhenixGames</p>
    <p>Aachener Str. 12</p>
    <p>10115 Berlin</p>
    <h2 id="m56">Kontaktmöglichkeiten</h2>
    <p>
      E-Mail-Adresse:
      <a href="mailto:Info@phenixgames.de">Info@phenixgames.de</a>
    </p>
    <p>Telefon: +49 123456789</p>
    <h2 id="m172">Social Media und andere Onlinepräsenzen</h2>
    <p>
      Dieses Impressum gilt auch für die folgenden Social-Media-Präsenzen und
      Onlineprofile:
    </p>
    <p>
      <a href="https://www.instagram.com/phenixgames.de/" target="_blank"
        >https://www.instagram.com/phenixgames.de/</a
      >
    </p>
    <p>
      <a
        href="https://www.youtube.com/channel/UCcaZGaoo2h9oV5r7JfuEvvw"
        target="_blank"
        >https://www.youtube.com/channel/UCcaZGaoo2h9oV5r7JfuEvvw</a
      >
    </p>
    <h2 id="m65">Haftungs- und Schutzrechtshinweise</h2>
    <p>
      <strong>Haftungsausschluss</strong>: Die Inhalte dieses Onlineangebotes
      wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt,
      dienen jedoch nur der Information und entfalten keine rechtlich bindende
      Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen
      (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende
      Belehrungen von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte
      vollständig oder teilweise zu ändern oder zu löschen, soweit vertragliche
      Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und
      unverbindlich.
    </p>
    <p>
      <strong>Hinweise auf Rechtsverstöße</strong>: Sollten Sie innerhalb
      unseres Internetauftritts Rechtsverstöße bemerken, bitten wir Sie uns auf
      diese hinzuweisen. Wir werden rechtswidrige Inhalte und Links nach
      Kenntnisnahme unverzüglich entfernen.
    </p>
  </div>
  <footerbody />
</template>

<style>
@import url("../../assets/css/root/main.css");
body {
  background: var(--black);
}

.impressum {
  margin: 0 auto;
  width: 90%;
}

a {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media only screen and (max-width: 540px) {
  .impressum {
    margin: 80px auto !important;
    width: 95%;
  }
}
</style>

<script>
import homepageNav from "../../components/homepage/nav.vue";
import footerbody from "../../components/homepage/footer-body.vue";

export default {
  name: "Impressum",
  components: {
    homepageNav,
    footerbody,
  },
};
</script>