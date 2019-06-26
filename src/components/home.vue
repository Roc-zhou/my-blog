<template>
  <div class="home justify-center">
    <!-- <p class="animates" data-animation="fadeInUp">this is home</p> -->

    <div class="home_bg">
      <div class="home_con_a justify-center flex-column items-center">
        <p class="animates" data-animation="fadeInLeft">@AB+</p>
        <p class="animates" data-animation="fadeInRight">周海鹏的个人博客</p>
        <p class="animates" data-animation="fadeInUp">每天收获小进步，积累起来就是大进步；每天收获小幸福，积攒起来便成大幸福。</p>
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
    return {
      menu: 1
    };
  },
  mounted() {
    this.isScroll.init(".animates");
  }
};
</script>
<style scoped>
.home_bg {
  width: 100%;
  height: calc(100vh - 70px);
  /* background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url(http://wx4.sinaimg.cn/large/006qOGxWgy1fwoy2d5smgj312w0pxmzw.jpg); */
  background-color: #222;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  background-size: 100% 100%;
  position: relative;
}
.home_con_a {
  position: absolute;
  left: 50%;
  top: 50%;
  color: #fff;
  transform: translateX(-50%);
}
.home_con_a p{
  font-size: 20px;
  flex-wrap: nowrap;
  white-space: nowrap;
  margin-bottom: 20px;
}
.home_con_a p:first-child {
  font-size: 25px;
  font-weight: bold;
}
</style>