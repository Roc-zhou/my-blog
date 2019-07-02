<template>
  <div class="about">
    <div class="ab_con">
      <div class="about_me">
        <h2>关于我</h2>
        <ul>
          <li>90后，2016年硕士毕业于 华中科技大学 电子信息工程专业，现从事IT类工作</li>
          <li>目前在南京栖息，天天被业务折腾得死去活来的同时依然保有对各项技术热忱的追求</li>
          <li>参加工作以后越来越理解交流与分享的重要性，我在不停汲取大家宝贵经验的同时，也想回馈自己的所学所感给读者</li>
          <li>本站主要关注但不限于 虚拟化、容器化、API化和微服务化的WEB技术</li>
          <li>本站主要分享 务实、能看懂、读者可复现 的原创文章</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "about",
  data() {
    return {};
  }
};
</script>
<style scoped>
.about {
  width: 1000px;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  padding: 100px 0 0 0;
  height: 100%;
  overflow: hidden;
}
.ab_con {
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 20px;
}
.about_me ul {
  margin: 0 20px;
  font-size: 14px;
}
</style>