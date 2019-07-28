<template>
  <div class="about">
    <div class="ab_con">
      <div class="about_me">
        <h2>关于我</h2>
        <ul>
          <li>90后，一个从大学就开始入坑计算机应用专业的青年，现从事IT行业，一名前端工程师</li>
          <li>目前在北京（离家比较近），每天都是不停的代码、学习</li>
          <li>本站主要记录自己日常工作中问题的处理方法、以及技术的分享、工具的使用等等</li>
        </ul>
        <p class="line"></p>
        <h2>联系方式</h2>
        <ul>
          <li>
            <span>微信：</span>13031902163
          </li>
          <li>
            <span>QQ：</span>1137938565
          </li>

          <li>
            <span>简书：</span>

            <a
              href="https://www.jianshu.com/u/644a4156fbfc"
              target="_blank"
            >https://www.jianshu.com/u/644a4156fbfc</a>
          </li>
        </ul>
        <p class="line"></p>
        <h2>爱好</h2>
        <ul>
          <li>阅读</li>
          <li>电影</li>
          <li>DIY（暂时没时间）</li>
          <li>游戏（吃鸡、王者、LOL...）</li>
          <li>外设</li>
        </ul>
        <p class="line"></p>
        <h2>关于博客</h2>
        <ul>
          <li>博客使用技术：Vue+Node-koa 搭建，采用前后端分离模式。</li>
          <li>数据库：mysql</li>
          <li>markdown书写、html样式渲染。</li>
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
h2 {
  font-size: 30px;
}
.ab_con {
  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 20px;
}
.about_me ul {
  margin: 20px 20px;
  font-size: 16px;
}
.line {
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 30px 0;
}
ul a {
  color: #000;
}
ul a:hover {
  color: #38b7ea;
  text-decoration: underline;
}
ul li span {
  display: inline-block;
  width: 60px;
}
</style>