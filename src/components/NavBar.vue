<template>
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="/"
          >CriptoMonedas
          <i class="bi bi-currency-bitcoin"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex ms-auto">
            <input
              height="30"
              class="form-control me-2"
              type="text"
              placeholder="Buscar por nombre"
              aria-label="Search"
              required
            />
            <button class="btn btn-dark btn-sm" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    actualRoute: String,
  },
};
</script>

<style></style>
