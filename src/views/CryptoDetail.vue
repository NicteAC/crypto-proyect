<template>
  <div class="container">
    <h1 class="text-capitalize mt-3">{{ this.$route.params.id }}</h1>
    <div class="d-flex justify-content-between mt-5">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5
            class="card-title"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
            ref="info"
          >
            Market Cap
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            class="btn btn-lg btn-danger"
            data-bs-toggle="popover"
            title="Popover title"
            data-bs-content="And here's some amazing content. It's very engaging. Right?"
          >
            Click to toggle popover
          </button>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Volume 24h</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top"
            id="tooltip"
            @mouseover="showTooltip()"
          >
            Tooltip on top
          </button>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Circulating Supply</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
    <table class="mt-5 table table-bordered border-info table-hover">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Precio USD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in sortedByDays" :key="crypto.date">
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
    this.getCoinDetail(this.id);
    this.coinDetail;
  },
  methods: {
    ...mapActions(["getCoinDetail", "getData"]),
    formatedDate(date_) {
      let date = new Date(date_);
      return date.toLocaleDateString();
    },
    showTooltip() {
      console.log("prueba");
    },
  },
};
</script>
