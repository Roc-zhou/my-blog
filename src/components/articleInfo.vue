<template>
  <div class="articleInfo">
    <header>
      <h2>{{articleTitle}}</h2>
      <div class="justify-start meta items-center">
        <p class="items-center">
          <i class="date_icon"></i>
          <span>{{date}}</span>
        </p>
        <p class="items-center">
          <i class="eys_icon"></i>
          <span>{{num}}次浏览</span>
        </p>
      </div>
    </header>
    <div class="info_center markdown-body" v-html="info"></div>
  </div>
</template>

<script>
import "mavon-editor/dist/css/index.css";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "articleInfo",
  data() {
    return {
      date: "2019-04-08 23:56:41",
      num: 123,
      articleTitle: "这是文章标题这是文章标题这是文章标题这是文章",
      info: ""
    };
  }
};
</script>
<style scoped>
.articleInfo {
  background-color: #fff;
  padding: 0 20px 20px 20px;
}
header h2 {
  font-size: 2em;
  padding: 20px 0 10px 0;
  font-weight: normal;
}
.meta p {
  color: #999;
  font-size: 12px;
  margin-right: 20px;
}
.meta p i {
  width: 14px;
  height: 14px;
  background-size: 100% 100%;
  margin-right: 3px;
}
.date_icon {
  background-image: url("../assets/public/Images/date.png");
}
.eys_icon {
  width: 18px !important;
  height: 18px !important;
  background-image: url("../assets/public/Images/eys.png");
}
.info_center {
  margin: 20px 0 0 0;
}
.articleInfo >>> .markdown-body pre {
  padding: 0;
}
</style>