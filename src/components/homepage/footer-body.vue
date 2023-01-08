<template>
    <footer class="footerbody white">
        <div class="footer_left left">
            <router-link :to="{ path: datenschutz }">{{ lang.footer.ds }}</router-link>
            <router-link :to="{ path: impressum }">{{ lang.footer.im }}</router-link>
        </div>
        <div class="footer_center">
            <img src="../../assets/img/logo/PhenixGames_Logo_no_text.svg" />
        </div>
        <div class="footer_right">&copy;{{ lang.projectname }} {{ getYear() }}</div>
    </footer>
</template>

<style scoped>
@import url('../../assets/css/homepage/assets/footer/footer.css');
</style>

<script>
import { getConfig } from '../../assets/js/getconfig';
import { getlang } from '../../assets/js/getlang';
const language = getlang.getlang();
const config = getConfig.getConfig();

export default {
    name: 'Footer',
    data: () => {
        return {
            datenschutz: config.routing.legal.datenschutz.route,
            impressum: config.routing.legal.impressum.route,
            lang: language,
        };
    },
    methods: {
        getYear() {
            return new Date().getFullYear();
        },
    },
};
</script>
