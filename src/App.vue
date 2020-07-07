<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import jwt_decode from "jwt-decode";
import { getToken } from "./utils/auch.js";
export default {
  name: "App",
  created() {
    if (sessionStorage.userToken) {
      const USER = jwt_decode(sessionStorage.userToken);
      this.$store.dispatch("setIsAuthenticated", !this.isEmpty(USER));
      this.$store.dispatch("setUser", USER);
    }
  },
  methods: {
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>
<style lang="scss">
  @import "assets/styles/base.css";
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
