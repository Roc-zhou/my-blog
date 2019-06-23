<template>
  <div class="articleList">
    <div class="articleList_list" v-for="x in 5">
      <h1>聊聊中国的通信行业：从“七国八制”到“中华”脊梁</h1>
      <div class="justify-start">
        <p class="timeC justify-start items-center">2019-05-25</p>
        <p class="tagC justify-start items-center">Html</p>
      </div>
      <p class="abs">致敬中国通信行业，致敬华为、中兴</p>
      <p class="read_btn justify-start">
        <span class="cursor-pointer">阅读更多</span>
      </p>
    </div>

    <div class="pageBox justify-center items-center">
      <page :page-index="1" :total="10" :page-size="8" @change="changeone"></page>
    </div>
  </div>
</template>

<script>
import page from "../templete/page";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: "articleListList",
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
.articleList_list {
  padding: 10px 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  background: #fff;
  margin-bottom: 10px;
  color: #000;
}
.articleList_list h1 {
  font-size: 20px;
  color: #565a5f;
}
.articleList_list h1:hover {
  cursor: pointer;
  color: #38b7ea;
}
.timeC,
.tagC {
  font-size: 14px;
  margin-right: 20px;
}
.timeC::before {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url("../assets/public/Images/time.png");
  background-size: 100% 100%;
  margin-right: 5px;
}
.tagC::before {
  content: "";
  width: 16px;
  height: 16px;
  background-image: url("../assets/public/Images/tag.png");
  background-size: 100% 100%;
  margin-right: 5px;
}
.abs {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0;
}
.read_btn span {
  width: 120px;
  height: 35px;
  line-height: 35px;
  background: #f5f8f9;
  border-radius: 4px;
  color: #999;
  text-align: center;
  font-size: 14px;
}
.read_btn span:hover {
  background: #38b7ea;
  color: #fff;
}
.pageBox {
  padding: 20px 0;
}
</style>