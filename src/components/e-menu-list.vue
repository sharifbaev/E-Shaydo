<template>
  <div class="section">
    <div class="list">
      <ul
          v-for="(item, index) in list" :key="index"
          class="list-element">
        <li><a href="#">{{ item }}</a></li>
      </ul>
    </div>
    <div class="ml-sm">
      <e-button
          text="Регистрация"
          url="#"/>
    </div>
  </div>
</template>

<script>
import EButton from "@/components/e-button.vue";

export default {
  name: "e-menu-list",
  components: {EButton},
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<style scoped>
.section {
  display: flex;
  align-items: center;
}
.list{
  display: flex;
  align-items: center;
  border-right: 1px solid #fff;
}
.list-element {
  list-style: none;
  padding: 5px 20px;
}
a {
  text-decoration: none;
  color: white;
}
.ml-sm {
  margin-left: 20px;
}
</style>