<template>
  <div class="main">
    <div class="header items-center justify-center">
      <div class="header_con justify-between items-center">
        <img src="../assets/public/Images/logo.png" alt>
        <div class="header_menu justify-center items-center">
          <p :class="menu === 1 ? 'selectd' : ''" @click.stop="$goto('/');menu=1">首页</p>
          <p :class="menu === 2 ? 'selectd' : ''" @click.stop="$goto('/article');menu=2">目录</p>
          <p :class="menu === 3 ? 'selectd' : ''" @click.stop="$goto('/');menu=3">关于</p>
          <p @click.stop="$goto('https://github.com/Roc-zhou','open',false)">Github</p>
        </div>
      </div>
    </div>
    <div class="con">
      <router-view></router-view>
    </div>
    <div class="footer justify-center items-center flex-column">
      <p>© 2018 - 2019 @AB+ 版权所有</p>
      <div class="justify-center yq">
        <p>友情链接：</p>
        <p>
          <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer" title="百度">百度</a>
          <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer" title="百度">百度</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {
      const routerPath = vm.$route.path;
      vm.menu = routerPath === "/" ? 1 : routerPath === "/article" ? 2 : 1;
    });
  },
  name: "home-main",
  data() {
    return {
      menu: 1
    };
  },
  watch: {
    ["$route.path"](n, o) {
      this.menu = n === "/" ? 1 : n === "/article" ? 2 : 1;
    }
  }
};
</script>
<style scoped>
.main {
  background-color: #f4f4f4;
}
.header {
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  background-color: #222;
}
.header_con {
  width: 1200px;
}
.header_con img {
  width: 140px;
  height: 50px;
}
.header_menu p {
  width: 110px;
  color: #fff;
  font-size: 14px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-left: 10px;
}
.header_menu p:hover {
  cursor: pointer;
  background-color: #404040;
}
.selectd {
  background-color: #404040;
}
.footer {
  height: 70px;
  background-color: #222;
  color: #aaa;
  font-size: 14px;
}
.con {
  min-height: calc(100vh - 70px);
}
.yq {
  margin-top: 10px;
}
.yq a {
  color: inherit;
  margin-right: 10px;
  text-decoration: none;
}
.yq a:hover {
  color: #fff;
}
</style>