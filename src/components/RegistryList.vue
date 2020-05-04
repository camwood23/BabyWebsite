<template>
  <div class="registry-section">
    <h2 class="heading_secondary">{{ title }}</h2>
    <ul class="link_list">
      <li v-for="item in links" :key="item.name">
        <span v-if="!item.collected">
          <button class="btn" @click="updateItem(item)">&#x2714;</button>
          -
        </span>
        <a
          :href="item.link"
          class="link"
          :class="{ purchased: item.collected }"
          >{{ item.name }}</a
        >
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
  margin-bottom: 10rem;
}
.link_list {
  display: block;
}
.heading_secondary {
  font-size: 3rem;
  font-weight: 600;
  text-transform: uppercase;
}
.purchased {
  text-decoration: line-through;
}
.link {
  font-size: 2.5rem;
}
.btn {
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 50%;
  padding: 0rem 0.3rem;
  font-size: 1.5rem;
}
</style>
