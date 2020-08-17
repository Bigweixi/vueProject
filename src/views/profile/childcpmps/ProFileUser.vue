<!-- 用户数据 -->
<template>
  <div id="user" @click="clickUser">
    <div id="av">
      <img
        class="av-img"
        src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=254528806,950894871&fm=26&gp=0.jpg"
        alt
      />
      <span>立即登录</span>
    </div>
    <div class="rt">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProFileUser",
  data() {
    return {};
  },

  components: {},

  methods: {
    clickUser() {},
  },
};
</script>

<style scoped>
#user {
  height: 100px;
  display: flex;
  background-color: var(--color-tint);
}
#av {
  width: 50px;
  flex: 1;
  margin-left: 15px;
}

#av img {
  width: 75px;
  height: 75px;
  border-radius: 70px;
}

#av span {
  margin-left: 15px;
  color: #ffffff;
}

#av img,
span {
  vertical-align: middle;
  display: inline-block;
  line-height: 100px;
}

.av-img {
  width: 100%;
  height: 100%;
}

.rt {
  line-height: 100px;
  padding-right: 15px;
}
</style>