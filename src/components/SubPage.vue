<template>
  <div class="sub_container">
    <div class="line"></div>
    <img src="img/Eucalyptus_Leaves.png" alt="SideImg" class="side_img" />
    <div class="heading">
      <h2 class="heading_secondary">BABY WOOD</h2>
      <h1 class="heading_primary">{{ title }}</h1>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "subpage",
  props: ["title"],
};
</script>

<style scoped="true">
.sub_container {
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.heading_primary {
  font-size: 8rem;
  text-transform: capitalize;
}

.line {
  position: fixed;
  top: 0;
  right: 11rem;
  height: 30vh;
  width: 2px;
  background-color: #000;
  margin-left: auto;
}

@media only screen and (max-width: 28.125em) {
  .line {
    right: 14rem;
  }
}

.side_img {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 50vh;
  transform: rotate(-20deg);
}

.heading {
  margin-bottom: 3rem;
}
</style>
