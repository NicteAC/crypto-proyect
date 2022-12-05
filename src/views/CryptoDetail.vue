<template>
  <div class="container">
    <h1 class="text-capitalize mt-3">{{ this.$route.params.id }}</h1>
    <table class="mt-5 table table-bordered border-info table-hover">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Precio USD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in SortedByDays" :key="crypto.date">
          <td>{{ formatedDate(crypto.date) }}</td>
          <td>$ {{ crypto.priceUsd }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "CoinDetail",
  props: ["id"],
  computed: {
    ...mapState(["coinsDetail"]),
    ...mapGetters(["SortedByDays"]),
  },
  created() {
    this.getCoinDetail(this.id);
  },
  methods: {
    ...mapActions(["getCoinDetail"]),
    formatedDate(date_) {
      let date = new Date(date_);
      return date.toLocaleDateString();
    },
  },
};
</script>

<!--  let date = new Date(coin.date);
        let formatedDate = date.toLocaleDateString(); -->
