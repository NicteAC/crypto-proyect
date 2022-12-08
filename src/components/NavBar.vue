<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="/"
          >CriptoMonedas
          <i class="bi bi-currency-bitcoin"></i>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchData(id_) {
      this.$router.push({ name: "cripto-detail", params: { id: id_ } });
    },
  },
};
</script>

<style></style>
