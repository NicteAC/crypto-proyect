<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title d-flex align-items-start justify-content-center">
        {{ title }}
        <i
          class="bi bi-info-circle-fill info-icon ms-2"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          :title="info"
        ></i>
      </h5>
      <p v-if="detail != null" class="card-text">
        {{ detail }}
      </p>
      <p class="mb-0" v-else>-</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    info: String,
    detail: String,
  },
};
</script>

<style scoped>
.info-icon {
  font-size: 13px;
}
</style>
