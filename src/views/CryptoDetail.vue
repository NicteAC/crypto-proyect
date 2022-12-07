<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <h1 class="text-capitalize mt-3">
        {{ this.$route.params.id }}
        <span class="">{{ detailCoin.symbol }}</span>
      </h1>
      <div class="">
        <div>
          {{ formatUsd(detailCoin.priceUsd) }}
          <span>{{ detailCoin.changePercent24Hr }}%</span>
        </div>
      </div>
    </div>
    <div class="text-start">Rank #{{ detailCoin.rank }}</div>
    <div class="mt-3">
      <div class="row">
        <div class="col">
          <DetailCard
            :title="`supply`"
            :info="`Suministro disponible para el comercio.`"
            :detail="detailCoin.supply"
          />
        </div>
        <div class="col">
          <DetailCard
            :title="`maxSupply`"
            :info="`Cantidad total de activos emitidos`"
            :detail="detailCoin.maxSupply"
          />
        </div>
        <div class="col">
          <DetailCard
            :title="`marketCapUsd`"
            :info="`Oferta x precio`"
            :detail="formatUsd(detailCoin.marketCapUsd)"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <DetailCard
            :title="`volumeUsd24Hr`"
            :info="`Cantidad de volumen de operaciones representada en USD durante las últimas 24 horas`"
            :detail="formatUsd(detailCoin.volumeUsd24Hr)"
          />
        </div>
        <div class="col">
          <DetailCard
            :title="`priceUsd`"
            :info="`Precio ponderado por volumen basado en datos de mercado en tiempo real, traducido a USD`"
            :detail="formatUsd(detailCoin.priceUsd)"
          />
        </div>
        <div class="col">
          <DetailCard
            :title="`vwap24Hr`"
            :info="`Precio medio ponderado por volumen en las últimas 24 horas`"
            :detail="formatUsd(detailCoin.vwap24Hr)"
          />
        </div>
      </div>
    </div>
    <h2 class="mt-3">Historico {{ this.$route.params.id }}</h2>
    <table class="mt-3 table table-bordered border-info table-hover">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Precio USD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in sortedByDays" :key="crypto.date">
          <td>{{ formatedDate(crypto.date) }}</td>
          <td>{{ formatUsd(crypto.priceUsd) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DetailCard from "./DetailCard.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { Tooltip } from "bootstrap";
export default {
  name: "CoinDetail",
  components: {
    DetailCard,
  },
  props: ["id"],
  data() {
    return {
      detailCoin: [],
    };
  },
  computed: {
    ...mapState(["cryptoCoins"]),
    ...mapGetters(["sortedByDays", "getSpecificCoin"]),
    coinDetail() {
      return this.getSpecificCoin(this.id);
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    new Tooltip(document.body, { selector: "[data-bs-toggle='tooltip']" });
    this.getCoinDetail(this.id);
  },
  updated() {
    this.detailCoin = this.coinDetail;
  },
  methods: {
    ...mapActions(["getCoinDetail", "getData"]),
    formatedDate(date_) {
      let date = new Date(date_);
      return date.toLocaleDateString();
    },
    formatUsd(usd_) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        maximumFractionDigits: 2,
        currency: "USD",
      });
      return formatter.format(usd_);
    },
  },
};
</script>
