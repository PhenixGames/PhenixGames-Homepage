<template>
    <main>
        <div class="aboutbody white bold">
            <center>
                <header>
                    <div class="aboutbody_heads">
                        <img
                            src="../../assets/img/Homepage/aboutbody/Ghoster599PB.png"
                            alt="Ghoster599 profilepicture" />
                        <p>{{ lang.about.user.pl1 }}</p>
                        <p>{{ lang.about.pl }}</p>
                        <p>
                            <i>{{ lang.about.sd }}</i>
                        </p>
                    </div>
                    <div class="aboutbody_heads">
                        <img
                            src="../../assets/img/Homepage/aboutbody/mittelblut9.png"
                            alt="Mittelblut9 profilepicture" />
                        <p>{{ lang.about.user.pl2 }}</p>
                        <p>{{ lang.about.pl }}</p>
                        <p>
                            <i>{{ lang.about.sd }}</i>
                        </p>
                    </div>
                </header>
                <main>
                    <!-- <div class="aboutbody_heads">
            <img src="../../assets/img/Homepage/aboutbody/samurai.png" alt="StreetSamurai profilepicture"/>
            <p>{{ lang.about.user.ctn1 }}</p>
            <p>{{ lang.about.ct }}</p>
            <p>
              <i>{{ lang.about.id }}</i>
            </p>
          </div> -->
                </main>
            </center>
        </div>
    </main>
</template>

<style scoped>
@import url('../../assets/css/homepage/assets/aboutbody/aboutbody.css');
</style>

<script>
import { getlang } from '../../assets/js/getlang';
const language = getlang.getlang();

export default {
    name: 'About Page',
    data: () => {
        return {
            lang: language,
        };
    },
};
</script>
