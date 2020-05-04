<template>
  <div class="registry-section">
    <h2 class="heading_secondary">{{ title }}</h2>
    <ul class="link_list">
      <li v-for="item in links" :key="item.name">
        <button class="btn" @click="updateItem(item)">
          <span v-if="item.collected">&#x2714;</span>
        </button>
        <a :href="item.link" class="link" :class="{ purchased: item.collected }">{{ item.name }}</a>
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
    }
  }
};
</script>

<style scoped>
.registry-section {
  margin-bottom: 5rem;
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
  font-size: 3rem;
}
.btn {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  /* border-radius: 50%; */
  padding: 0rem 0.3rem;
  font-size: 1.5rem;
  width: 1.5rem;
  height: 2rem;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
