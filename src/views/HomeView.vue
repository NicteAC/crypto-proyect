<template>
  <div class="home my-5">
    <div class="mb-5 container">
      <cryptoTable :cryptoData="paginated_data" />
    </div>
    <nav aria-label="Page navigation example">
      <div class="pagination m-auto justify-content-center">
        <button
          class="btn btn-outline-info rounded-circle me-2"
          aria-label="Previous"
          @click="navigatePages('Prev')"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
        <button
          class="btn btn-outline-info rounded-circle me-2"
          v-for="(pages, i) in pagination"
          :key="i"
          :class="i + 1 == actual_page ? 'active' : ''"
        >
          <span class="rounded-circle" href="#" @click="getDataByPage(i + 1)">{{
            i + 1
          }}</span>
        </button>
        <button
          class="btn btn-outline-info rounded-circle"
          aria-label="Next"
          @click="navigatePages('Next')"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CryptoTable from "@/components/CryptoTable.vue";

export default {
  name: "HomeView",
  components: {
    CryptoTable,
  },
  data() {
    return {
      actual_page: 1,
      max_elems: 15,
      total_pages: 0,
      paginated_data: [],
      pagination: [],
    };
  },
  computed: {
    ...mapState(["cryptoCoins"]),
  },
  async mounted() {
    await this.getData();
    this.getPaginatedCryptoData();
  },
  methods: {
    ...mapActions(["getData"]),
    splitDataToPages(data_arr, pages) {
      let splitted = [];
      for (let i = 0; i < data_arr.length; i += pages) {
        splitted.push(data_arr.slice(i, i + pages));
      }
      return splitted;
    },
    getPaginatedCryptoData() {
      this.total_pages = Math.floor(this.cryptoCoins.length / this.max_elems);
      this.pagination = this.splitDataToPages(this.cryptoCoins, this.max_elems);
      this.paginated_data = this.pagination[this.actual_page - 1];
    },
    getDataByPage(page_) {
      this.actual_page = page_;
      this.getPaginatedCryptoData();
    },
    navigatePages(direction) {
      if (direction == "Prev") {
        if (this.actual_page > 1) {
          this.actual_page = this.actual_page - 1;
        }
      }
      if (direction == "Next") {
        if (this.actual_page < this.total_pages) {
          this.actual_page = this.actual_page + 1;
        }
      }
      this.getPaginatedCryptoData();
    },
  },
};
</script>
