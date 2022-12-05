<template>
  <div class="home m-5">
    <div class="container">
      <cryptoTable :cryptoData="cryptoCoins" />
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination m-auto justify-content-center">
        <li class="page-item me-2">
          <a class="page-link rounded-circle" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item me-2">
          <a class="page-link rounded-circle" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link rounded-circle" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
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
  computed: {
    ...mapState(["cryptoCoins"]),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapActions(["getData"]),
  },
};
</script>
