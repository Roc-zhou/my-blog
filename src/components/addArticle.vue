<template>
  <div class="addArticle justify-center">
    <div class="box">
      <div class="top justify-between items-center">
        <div>
          <span>标题：</span>
          <Input v-model="title" placeholder="请输入内容" :clearable="true" style="width:400px"></Input>
        </div>
        <div>
          <span>分组：</span>
          <Select v-model="groupVal" placeholder="请选择" style="width:200px">
            <Option v-for="(i,index) in groupList" :key="index" :label="i.groupName" :value="i.id"></Option>
          </Select>
        </div>
        <div>
          <span>标签：</span>
          <Select v-model="tagVal" placeholder="请选择" style="width:200px">
            <Option v-for="(i,index) in tagList" :key="index" :label="i.targeName" :value="i.id"></Option>
          </Select>
        </div>
      </div>
      <div class="center justify-start items-center" style="margin-top:10px;">
        <span style="white-space: nowrap;">摘要：</span>
        <Input v-model="abs" placeholder="请输入内容" :clearable="true"></Input>
      </div>
      <div class="con" style="white-space: normal;">
        <mavon-editor
          v-model="articleContent"
          @change="changeMd"
          style="height:700px"
          :tabSize="2"
          :codeStyle="'dark'"
        />
      </div>
      <div class="footerBtn">
        <Button @click.stop="$goto().back()">取消</Button>
        <Button type="primary" @click.stop="commit">提交</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { Button, Select, Input, Option, Message } from "element-ui";
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {
      vm.getGroupList();
      vm.gettagList();
      if (vm.id) {
        vm.$api(`one/getArticle`, {
          id: Number(vm.id)
        })
          .then(r => {
            vm.title = r.title;
            vm.groupVal = r.groupId;
            vm.tagVal = r.targetId;
            vm.articleContent = r.infoValue;
            vm.abs = r.abs;
          })
          .catch(e => {});
      }
    });
  },
  name: "addArticle",
  components: {
    mavonEditor,
    Button,
    Select,
    Input,
    Option
  },
  data() {
    return {
      title: "",
      groupVal: "",
      groupList: [],
      tagVal: "",
      tagList: [],
      articleContent: "",
      info: "",
      infoValue: "",
      id: this.$route.query.id || null,
      abs: ""
    };
  },
  methods: {
    changeMd(v, r) {
      this.infoValue = v;
      this.info = r;
      console.log(r);
    },
    getGroupList() {
      this.$api(`one/getGroupList`).then(r => (this.groupList = r));
    },
    gettagList() {
      this.$api(`one/getTagList`).then(r => (this.tagList = r));
    },
    commit() {
      if (!this.title) return Message.error("请输入标题！");
      if (!this.groupVal) return Message.error("请选择分组！");
      if (!this.tagVal) return Message.error("请选择标签！");
      this.$http(
        this.id ? `one/updateArticle` : `one/addArticle`,
        this.id
          ? {
              id: this.id,
              title: this.title,
              groupId: this.groupVal,
              targetId: this.tagVal,
              info: this.info,
              infoValue: this.infoValue,
              abs: this.abs
            }
          : {
              title: this.title,
              groupId: this.groupVal,
              targetId: this.tagVal,
              info: this.info,
              infoValue: this.infoValue,
              abs: this.abs
            }
      ).then(r => {
        if (r) {
          Message({
            message: this.id ? "修改成功！" : "添加成功！",
            type: "success",
            duration: 1000
          });
          return this.$goto("/");
        }
      });
    }
  }
};
</script>
<style scoped>
.box {
  width: 1400px;
  padding: 20px 0;
}
.con {
  margin: 30px 0;
}
.box >>> .markdown-body pre {
  padding: 0;
}
</style>