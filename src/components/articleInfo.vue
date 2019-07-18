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
import "mavon-editor/dist/highlightjs/styles/atom-one-dark.min.css";
// import "mavon-editor/dist/css/index.css";
// import "../assets/public/StyleSheet/github-markdown.min.css";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {
      if (!/^\d+$/.test(vm.id)) {
        return vm.$goto("/");
      }
      vm.$api(`one/addInfoNum`, { id: vm.id });
      vm.$api(`one/getArticle`, {
        id: Number(vm.id)
      })
        .then(r => {
          if (Object.keys(r).length === 0) {
            return vm
              .$msgbox({
                title: "警告",
                message: "请正常查看浏览！！！",
                type: "error",
                confirmButtonClass: "我错了",
                closeOnClickModal: false,
                closeOnPressEscape: false,
                showClose: false
              })
              .then(action => {
                vm.$goto("/");
              });
          }
          vm.date = vm.$util.formatDate(r.createTime);
          vm.num = r.num;
          vm.articleTitle = r.title;
          vm.info = r.info;
        })
        .catch(e => {});
    });
  },
  name: "articleInfo",
  data() {
    return {
      id: this.$route.params.id || null,
      date: "",
      num: null,
      articleTitle: "",
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
  padding: 15px 0;
}
.articleInfo >>> .markdown-body .hljs {
  border-radius: 8px;
  padding: 15px;
}
</style>