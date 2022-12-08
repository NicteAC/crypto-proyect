<template>
  <div class="container">
    <div v-if="coinDetail != undefined" class="">
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="text-capitalize mt-3 d-flex align-items-start">
          {{ this.$route.params.id }}
          <span class="coin-simbol bg-light ms-3">{{ detailCoin.symbol }}</span>
        </h1>
        <div class="">
          <p class="coin-price mb-0">
            {{ formatUsd(detailCoin.priceUsd) }}
            <span class="percentage-coin bg-info text-white ms-2"
              >{{ formatNumbers(detailCoin.changePercent24Hr) }}%</span
            >
          </p>
        </div>
      </div>
      <p class="text-start bg-success mb-0 text-white coin-rank">
        Rank #{{ detailCoin.rank }}
      </p>
      <div class="mt-3 d-flex flex-wrap justify-content-between">
        <div class="col-12 col-sm-4 mb-2">
          <div class="pe-1">
            <DetailCard
              :title="`supply`"
              :info="`Suministro disponible para el comercio.`"
              :detail="formatNumbers(detailCoin.supply)"
            />
          </div>
        </div>
        <div class="col-12 col-sm-4 mb-2">
          <div class="px-1">
            <DetailCard
              :title="`maxSupply`"
              :info="`Cantidad total de activos emitidos`"
              :detail="formatNumbers(detailCoin.maxSupply)"
            />
          </div>
        </div>
        <div class="col-12 col-sm-4 mb-2">
          <div class="ps-1">
            <DetailCard
              :title="`marketCapUsd`"
              :info="`Oferta x precio`"
              :detail="formatUsd(detailCoin.marketCapUsd)"
            />
          </div>
        </div>

        <div class="col-12 col-sm-4 mb-2">
          <div class="pe-1">
            <DetailCard
              :title="`volumeUsd24Hr`"
              :info="`Cantidad de volumen de operaciones representada en USD durante las últimas 24 horas`"
              :detail="formatUsd(detailCoin.volumeUsd24Hr)"
            />
          </div>
        </div>
        <div class="col-12 col-sm-4 mb-2">
          <div class="px-1">
            <DetailCard
              :title="`priceUsd`"
              :info="`Precio ponderado por volumen basado en datos de mercado en tiempo real, traducido a USD`"
              :detail="formatUsd(detailCoin.priceUsd)"
            />
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="ps-1">
            <DetailCard
              :title="`vwap24Hr`"
              :info="`Precio medio ponderado por volumen en las últimas 24 horas`"
              :detail="formatUsd(detailCoin.vwap24Hr)"
            />
          </div>
        </div>
      </div>
      <h2 class="mt-3">Historico {{ this.$route.params.id }}</h2>
      <table class="mt-3 table table-bordered border-info table-hover bg-white">
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
    <div class="" v-else>
      <NotFound />
    </div>
  </div>
</template>

<script>
import DetailCard from "@/components/DetailCard.vue";
import NotFound from "@/components/NotFound.vue";
import { mapState, mapActions, mapGetters } from "vuex";
import { Tooltip } from "bootstrap";
export default {
  name: "CoinDetail",
  components: {
    DetailCard,
    NotFound,
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
  async created() {
    await this.getData();
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
    formatNumbers(value_) {
      if (value_ != null && value_ != undefined) {
        const formatter = new Intl.NumberFormat("en-US", {
          maximumFractionDigits: 2,
        });
        return formatter.format(value_);
      }
    },
  },
};
</script>
