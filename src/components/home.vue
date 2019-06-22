<template>
  <div class="home">
    <div class="header items-center">
      <div class="header_con">
        <img src="../assets/public/Images/logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "home",
  data() {
    return {};
  }
};
</script>
<style scoped>
.home {
  background-color: #f4f4f4;
}
.header {
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: #fff;
}
.header_con {
  width: 1200px;
}
</style>