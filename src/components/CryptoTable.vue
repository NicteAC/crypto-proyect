<template>
  <div class="">
    <table class="table table-bordered border-info table-hover bg-white">
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
          <td class="text-size">{{ crypto.rank }}</td>
          <td class="text-size">{{ crypto.symbol }}</td>
          <td class="text-size">{{ crypto.name }}</td>
          <td class="text-size">
            <button
              type="button"
              class="btn btn-info btn-sm text-white rounded-pill text-size"
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

<style scoped>
.text-size {
  font-size: 13px;
}
</style>
