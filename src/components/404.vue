<template>
  <div class='error justify-center flex-column items-center'>
    <img src="../assets/public/Images/404.png" alt="">
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: 'error',
  data() {
    return {};
  },
}
</script>
<style scoped>
.error {
  height: 100vh;
}
.error img{
  width: 600px;
  margin-bottom: 30px;
}
.error a{
  color: #2d8cf0;
  text-decoration: none;
  font-size: 18px;
}
.error a:hover {
  text-decoration: underline;
  color: #0064ff
}
</style>