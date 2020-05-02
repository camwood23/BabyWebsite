<template>
  <div id="app" class="container">
    <h1 class="gender">
      It's
      <br />
      <span class="underline">A B</span>oy!
    </h1>

    <h2 class="due_date">
      Due Date August
      <br />31 2020
    </h2>
  </div>
</template>

<script>
export default {
  name: "HelloBaby",
  components: {}
};
</script>

<style scoped=true>
.container {
  background-image: url(../public/img/baby_backdrop.jpg) !important;
}

.underline {
  border-bottom: 0.4rem solid #000;
  padding-bottom: 0.3rem;
}

.gender {
  font-size: 7rem;
  font-weight: 400;
  position: fixed;
  top: 10rem;
  left: 10rem;
  font-family: "Bebas Neue", cursive;
}

.due_date {
  font-size: 4rem;
  font-weight: 400;
  transform: rotate(-90deg);

  position: fixed;
  bottom: 20rem;
  left: 0;
  font-family: "Anonymous Pro", monospace;
}

@media only screen and (max-width: 37.5em) {
  .gender {
    font-size: 10rem;
  }
  .due_date {
    font-size: 5rem;
  }
}
</style>
