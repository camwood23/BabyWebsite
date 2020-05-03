<template>
  <div class="registry-section">
    <h2 class="heading_secondary">{{ title }}</h2>
    <ul class="link_list">
      <li v-for="item in links" :key="item.link">
        <a :href="item.link" class="link">{{ item.name }}</a> - Purchased?
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "registry-list",
  props: ["title", "links"],
};
</script>

<style scoped>
.registry-section {
  margin-top: 10rem;
}
.link_list {
  display: block;
}
.heading_secondary {
  font-size: 4rem;
  font-weight: 600;
}
</style>
