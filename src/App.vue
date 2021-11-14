<template>
  <div class="info absolute height-100 width-100 display-grid justify-content-center align-items-center" v-if="info">
    <p>
      Diese Webseite dient zur Veranschaulichung meiner Entwicklungsarbeit.
      Graphische Elemente können aus externen Seiten sein, die <strong>nicht</strong> mir
      gehören. Die angegebenen Elemente und Informationen sind rein fiktiv und
      treffen auf keine Wahrheit zu. <br />
      Beschwerden bitte an
      <a href="mailto:info@blackdayz.de" class="link">info(at)blackdayz.de</a>
      <button @click="acceptinfo">Ok</button>
    </p>
  </div>
  <router-view />
</template>

<script>
export default {
  data: () => {
    return {
      info: true,
      cookiename: "bd_work_pg_info"
    }
  },
  methods: {
    checkCookie(cb) {
      let cookies = document.cookie;
      console.log(this.getCookie(this.cookiename))
      return (cookies.search(this.cookiename) < 0) ? cb(false) : (this.getCookie(this.cookiename) === "true") ? cb("pass") : cb("show");
    },
    setCookie() {
      document.cookie = `${this.cookiename}=false`;
    },
    acceptinfo() {
      document.cookie = `${this.cookiename}=true`;
      this.removeinfo();
    },
    removeinfo() {
      this.info = false;
    },
    getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if ((c.indexOf(name)) == 0) {
            return c.substr(name.length);
        }
    }
}
  },
  mounted() {
    this.checkCookie((res) => {
      if(!res) {
        this.setCookie();
      }else if(res === "pass") {
        this.removeinfo();
      }else {
        return;
      }
    });
  },
}
</script>

<style>
@import url("assets/css/root/main.css");
.info {
  background: rgba(0, 0, 0, 0.692);
  z-index: 9999;
}
.info p {
  width: 400px;
  color: white;
  margin: 0;
  padding: 0;
}
.info p button {
  margin: 20px 0;
  width: 100px;
}
</style>
