<template>
  <div class="loading" style="width:100%">
    <div class="font items-center justify-center flex-column">
      <svg
        version="1.1"
        id="loader-1"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
        style="enable-background:new 0 0 50 50;"
        xml:space="preserve"
      >
        <path
          fill="#000"
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <div>加载中</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {},
  computed: {},
  created() {},
  data() {
    return {
      chart: ""
    };
  },
  watch: {},
  mounted() {},
  methods: {}
};
</script>
<style>
svg path,
svg rect {
  fill: #2b85e4;
}
</style>
