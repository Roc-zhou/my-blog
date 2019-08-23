<template>
  <div class="articleList">
    <div class="articleList_list" v-for="(x,index) in list" :key="index">
      <!-- :class="x > 5 ? 'animates ani' : ''" data-animation="fadeInUp" -->
      <h1 @click.stop="$goto(`/article/${typeValue}/info/${x.id}`)">{{x.title}}</h1>
      <div class="justify-start">
        <p class="timeC justify-start items-center">最近修改时间：{{$util.formatDate(x.createTime)}}</p>
        <p class="tagC justify-start items-center">{{x.targeName}}</p>
      </div>
      <p class="abs">{{x.abs}}</p>
      <p class="read_btn justify-start">
        <span class="cursor-pointer" @click.stop="$goto(`/article/${typeValue}/info/${x.id}`)">阅读更多</span>
      </p>
    </div>

    <div class="articleList_list" v-if="list.length === 0">
      <p style="font-size:18px">正在努力更新中...</p>
    </div>
    <Loading v-if="loading" class="fiexdBox"></Loading>
    <div class="pageBox justify-center items-center" v-if="total > pageSize">
      <Page :page-index="pageNo" :total="total" :page-size="pageSize" @change="changeone"></Page>
    </div>
  </div>
</template>

<script>
import Page from "../templete/page";
import Loading from "../templete/svgLoading";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {
      vm.getList();
    });
  },
  name: "articleListList",
  components: {
    Page,
    Loading
  },
  props: {
    typeValue: {
      type: Number,
      default: 0
    }
  },
  watch: {
    typeValue(n, o) {
      this.getList();
    }
  },
  data() {
    return {
      pageNo: 1,
      pageSize: 8,
      total: null,
      list: [],
      loading: false
    };
  },
  mounted() {
    this.$isScroll.init(".animates");
  },
  methods: {
    changeone(e) {
      this.pageNo = e;
      this.getList();
    },
    getList() {
      this.loading = true;
      this.$api(`one/getArticleList`, {
        pageSize: this.pageSize,
        pageNo: this.pageNo,
        type: this.typeValue
      })
        .then(r => {
          this.loading = false;
          this.list = r.data;
          this.total = r.total;
        })
        .catch(e => {
          this.loading = false;
        });
    }
  }
};
</script>
<style scoped>
.ani {
  opacity: 0;
}
.articleList {
  position: relative;
}
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
.fiexdBox {
  position: absolute;
  top: 0;
  left: 0;
}
</style>