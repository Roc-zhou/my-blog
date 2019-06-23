<template>
  <div class="article_con">
    <div class="blog_con justify-center">
      <div class="justify-between">
        <router-view class="con_left"></router-view>
        <div class="con_right flex-column">
          <div class="right_box flex-column">
            <h3>About me</h3>
            <p>网名：@AB+</p>
            <p>职业：前段开发工程师</p>
            <p>现居：北京</p>
            <p>Email：1137938565@qq.com</p>
          </div>
          <div class="right_box">
            <h3>Tags</h3>
            <div class="tagC flex-wrap justify-start items-start align-start">
              <span>JavaScript</span>
              <span>css</span>
              <span>NodeJs</span>
              <span>linux</span>
              <span>Git</span>
              <span>微信</span>
              <span>网络</span>
              <span>软件</span>
              <span>电脑</span>
            </div>
          </div>
          <div class="right_box">
            <h3>Links</h3>
            <div class="linkC flex-column">
              <a href="https://www.html.cn/demo/flexbox-playground/" target="_blank">FlexBox在线演示</a>
              <a href="https://daneden.github.io/animate.css/" target="_blank">Animate.css</a>
              <a href="https://tinypng.com/" target="_blank">在线压缩png</a>
              <a href="https://www.runoob.com/" target="_blank">菜鸟教程</a>
              <a href="http://overapi.com/" target="_blank">OverAPI</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import page from "../templete/page";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "article_con",
  components: {
    page
  },
  data() {
    return {};
  },
  methods: {
    changeone() {}
  }
};
</script>
<style scoped>
.blog_con {
  padding: 100px 0 0 0;
  min-height: calc(100vh - 70px);
}
.blog_con > * {
  width: 1200px;
  padding: 0 0 30px 0;
}
.con_left {
  width: 900px;
}
.con_right {
  width: 290px;
}
.right_box {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px 10px 20px 10px;
  color: #000;
}
.right_box h3 {
  padding: 15px 0;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
}
.right_box > p {
  font-size: 12px;
  margin: 10px 0 0 0;
}
.tagC span {
  padding: 4px 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #fff;
  color: #666;
  font-size: 12px;
  transition: all 0.3s ease 0s;
  margin: 10px 5px 0 0;
}
.tagC span:hover {
  cursor: pointer;
  color: #fff;
  background: #000;
  border: 1px solid #000;
}
.linkC a {
  font-size: 14px;
  margin: 10px 0 0 0;
  color: #000;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}
.linkC a:hover {
  cursor: pointer;
  color: #38b7ea;
}
</style>