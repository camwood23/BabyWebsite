<template>
  <div>
    <sub-page title="Registry">
      <p class="info_text">
        If you purchase an item, you can click the underscore to check it off
        the list
      </p>
      <registry-list title="Essentials" :links="sections.essentials"></registry-list>
      <registry-list title="Baby Gear" :links="sections.babygear"></registry-list>
      <registry-list title="Toys" :links="sections.toys"></registry-list>
    </sub-page>
  </div>
</template>

<script>
import SubPage from "./SubPage";
import RegistryList from "./RegistryList";
import mongoService from "../services/mongo.service";

export default {
  name: "registry",
  components: { RegistryList, SubPage },
  data: function() {
    return {
      sections: {
        essentials: [],
        babygear: [],
        toys: []
      }
    };
  },
  beforeCreate() {
    mongoService.findItems().then(data => {
      data.forEach(item => {
        if (!this.sections[item.section]) {
          this.sections[item.section] = [];
          console.log("Random Section: " + item.section);
        }
        this.sections[item.section].push(item);
      });
    });
  }
};
</script>

<style scoped="true">
.sub_container {
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.heading {
}

.heading_primary {
  font-size: 8rem;
}

.line {
  position: fixed;
  top: 0;
  right: 10rem;
  height: 30vh;
  width: 2px;
  background-color: #000;
  margin-left: auto;
}

.side_img {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 35rem;
  transform: rotate(-20deg);
}

.info_text {
  font-size: 2rem;
  margin-bottom: 3rem;
}
</style>
