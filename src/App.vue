<template>
  <div id="app">
    <NavBar :actualRoute="actualRoute" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      actualRoute: "",
    };
  },
  updated() {
    this.actualRoute = this.$route.name;
  },
  created() {
    this.actualRoute = this.$route.name;
  },
};
</script>
