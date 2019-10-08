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
          <p
            @click.stop="$goto('https://github.com/Roc-zhou','open',false)"
            class="github items-center justify-center cursor-pointer"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              class="svg-inline--fa fa-github fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </p>
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
  .header_menu p:hover:not(.github) {
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
  .github > * {
    width: 25px;
  }
}
</style>