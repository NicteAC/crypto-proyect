<template>
  <div class="">
    <table class="table table-bordered border-info table-hover">
      <thead>
        <tr>
          <th scope="col">Lugar</th>
          <th scope="col">Simbolo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Ver Más</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in cryptoData" :key="crypto.id">
          <td>{{ crypto.rank }}</td>
          <td>{{ crypto.symbol }}</td>
          <td>{{ crypto.name }}</td>
          <td>
            <button
              type="button"
              class="btn btn-info btn-sm text-white rounded-pill"
              @click="getDetailCoin(crypto.id)"
            >
              Detalle
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    cryptoData: Array,
  },
  methods: {
    getDetailCoin(id_) {
      this.$router.push({ name: "cripto-detail", params: { id: id_ } });
    },
  },
};
</script>

<style></style>
