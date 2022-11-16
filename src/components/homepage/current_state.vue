<template>
    <main class="white currentstatebody">
        <img src="../../assets/gif/homepage/we_are_def_working_rn.gif" />
        <h1>
            Wir sind gerade dabei an dem Server zu arbeiten! Mehr informationen findest du auf
            unserem Discord <a href="https://discord.gg/SBC3Edh">https://discord.gg/SBC3Edh</a>
        </h1>
    </main>
</template>

<style scoped>
@import url('../../assets/css/homepage/assets/currentstate/currentstate.css');
</style>

<script>
import { getlang } from '../../assets/js/getlang';
const language = getlang.getlang();

export default {
    name: 'Current State',
    data: () => {
        return {
            lang: language,
        };
    },
};
</script>
