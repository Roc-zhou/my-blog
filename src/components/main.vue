<template>
  <div class="main">
    <div class="header items-center justify-center">
      <div class="header_con justify-between items-center">
        <img
          src="../assets/public/Images/logo.png"
          alt
          @click.stop="$goto('/')"
          class="cursor-pointer"
        />
        <h1 style="display:none;">周海鹏的博客</h1>
        <div class="header_menu justify-center items-center">
          <p :class="menu === 1 ? 'selectd' : ''" @click.stop="$goto('/');menu=1">首页</p>
          <p :class="menu === 2 ? 'selectd' : ''" @click.stop="$goto('/article/0');menu=2">目录</p>
          <p :class="menu === 3 ? 'selectd' : ''" @click.stop="$goto('/about');menu=3">关于</p>
          <p @click.stop="$goto('https://github.com/Roc-zhou','open',false)">Github</p>
        </div>
      </div>
    </div>
    <div class="con">
      <router-view :scrollTop="scrollTop"></router-view>
    </div>
    <div class="footer justify-center items-center flex-column">
      <p>© 2018 - 2019 @AB+ 版权所有</p>
      <div class="justify-center yq">
        <p>友情链接：</p>
        <p>
          <!-- <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer" title="百度">百度</a> -->
          <!-- <a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer" title="百度">百度</a> -->
        </p>
      </div>
    </div>
    <div class="backTop animates" v-if="fixedType" :class="fixedType ? 'slideInUp' : ''">
      <Button icon="el-icon-caret-top" circle @click="backTop"></Button>
    </div>
  </div>
</template>

<script>
import { Button } from "element-ui";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {
      const routerPath = vm.$route.path;
      vm.menu =
        routerPath === "/"
          ? 1
          : routerPath.indexOf("/article/") !== -1
          ? 2
          : routerPath === "/about"
          ? 3
          : 1;
    });
  },
  name: "home-main",
  data() {
    return {
      menu: 1,
      scrollTop: 0,
      fixedType: false
    };
  },
  components: {
    Button
  },
  watch: {
    ["$route.path"](n, o) {
      this.menu =
        n === "/"
          ? 1
          : n.indexOf("/article/") !== -1
          ? 2
          : n === "/about"
          ? 3
          : 1;
    }
  },
  methods: {
    getScrollTop() {
      return (
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      );
    },
    setScrollTop(scroll_top) {
      document.documentElement.scrollTop = scroll_top;
      // window.pageYOffset = scroll_top;
      document.body.scrollTop = scroll_top;
    },
    scrollTo(e) {
      this.scrollTop = this.getScrollTop();
      return (this.fixedType = this.scrollTop > 100);
    },
    backTop() {
      return this.setScrollTop(0);
    }
  },
  created() {
    return window.addEventListener
      ? window.addEventListener("scroll", this.scrollTo)
      : window.attachEvent("scroll", this.scrollTo);
  },
  destroyed() {
    // 销毁绑定在window的事件
    return window.removeEventListener
      ? window.removeEventListener("scroll", this.scrollTo)
      : window.detachEvent("scroll", this.scrollTo);
  }
};
</script>
<style scoped>
@media screen and (max-width: 800px) {
}
@media screen and (min-width: 800px) {
  .main {
    background-color: #f4f4f4;
    min-width: 1300px;
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
  .backTop {
    position: fixed;
    bottom: 100px;
    right: 40px;
  }
}
</style>