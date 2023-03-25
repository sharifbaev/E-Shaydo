<template>
  <div>
    <ul
        v-for="(item, index) in list" :key="index"
        class="list-style"
    >
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "e-list",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<style scoped>
.list-style {
  color: white;
  list-style: none;
}
</style>