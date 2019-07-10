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
            <Option
              v-for="item in groupList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></Option>
          </Select>
        </div>
        <div>
          <span>标签：</span>
          <Select v-model="tagVal" placeholder="请选择" style="width:200px">
            <Option
              v-for="item in tagList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></Option>
          </Select>
        </div>
      </div>
      <div class="con">
        <mavon-editor
          v-model="articleContent"
          @change="changeMd"
          :ishljs="true"
          style="height:700px"
          :codeStyle="'dark'"
        />
      </div>
      <div class="footerBtn">
        <Button @click.stop="$goto().back()">取消</Button>
        <Button type="primary" @click.stop="commit">主要按钮</Button>
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
    return next(vm => {});
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
      infoValue: ""
    };
  },
  methods: {
    changeMd(v, r) {
      this.infoValue = v;
      this.info = r;
    },
    commit() {
      if (!this.title) return Message.error("请输入标题！");
      if (!this.groupVal) return Message.error("请选择分组！");
      if (!this.tagVal) return Message.error("请选择标签！");
    }
  }
};
</script>
<style scoped>
.box {
  width: 1200px;
  padding: 50px 0;
}
.con {
  margin: 30px 0;
}
.box >>> .markdown-body pre {
  padding: 0;
}
</style>