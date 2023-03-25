<template>
  <div class="instruction-style">
    <p>{{ text }}</p>
    <img v-if="image" :src="image" alt="img">
  </div>
</template>

<script>
export default {
  name: "e-instruction",
  props: {
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
p {
  margin: 12px 0;
}

.instruction-style {
  width: 100%;
  color: #fff;
  font-weight: 400;
  font-size: 14px;
}

</style>