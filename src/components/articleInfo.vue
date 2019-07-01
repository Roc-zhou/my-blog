<template>
  <div class='articleInfo'>
    <header>
      <h1>这是文章标题</h1>
    </header>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: 'articleInfo',
  data() {
    return {};
  },
}
</script>
<style scoped>

</style>