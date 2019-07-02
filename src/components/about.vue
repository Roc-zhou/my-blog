<template>
  <div class='about'>
    这是关于我
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: 'about',
  data() {
    return {};
  },
}
</script>
<style scoped>

</style>