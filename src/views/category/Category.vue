<template>
  <div>
    <van-nav-bar title="分类" :fixed="true" left-text="返回" left-arrow @click-left="onClickLeft" />

    <TreeSelect class="tree" />

    <van-tabbar route class="beijin" active-color="#ff5777">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="qr">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>    

<script>
import { Toast } from "vant";
import TreeSelect from "views/category/childcomps/TreeSelect";

export default {
  name: "Category",
  components: {
    TreeSelect,
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.home-nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #fff;
  z-index: 5;
}

.tree {
  margin-top: 50px;
}
</style>