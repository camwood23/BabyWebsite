<template>
  <div>
    Name: <input type="text" v-model="name" /> <br />Section:
    <select v-model="section">
      <option value="essentials">Essentials</option>
      <option value="babygear">Baby Gear</option>
      <option value="toys">Toys</option>
    </select>
    <br />Link: <input type="text" v-model="link" /> <br />
    <button @click="createItem">Submit</button>
  </div>
</template>

<script>
import mongoService from "../services/mongo.service";
export default {
  name: "admin",
  data: function() {
    return {
      name: "",
      section: "",
      link: "",
    };
  },
  methods: {
    createItem() {
      mongoService.createItem(this.name, this.link, this.section);
      this.name = "";
      this.link = "";
      this.section = "";
    },
  },
};
</script>

<style></style>
