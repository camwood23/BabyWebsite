<template>
  <div class="registry-section">
    <h2 class="heading_secondary">{{ title }}</h2>
    <ul class="link_list">
      <li v-for="item in links" :key="item.name">
        <a
          :href="item.link"
          class="link"
          :class="{ purchased: item.collected }"
          >{{ item.name }}</a
        >
        -
        <button @click="updateItem(item)">Purchased?</button>
      </li>
    </ul>
  </div>
</template>

<script>
import mongoService from "../services/mongo.service";
export default {
  name: "registry-list",
  props: ["title", "links"],
  methods: {
    updateItem(item) {
      mongoService.updateItem(item.name);
      item.collected = true;
    },
  },
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
  text-transform: uppercase;
}
.purchased {
  text-decoration: line-through;
}
</style>
