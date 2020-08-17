<!-- 购物车 -->
<template>
  <div>
    <NavBar class="home-nav-bar">
      <div slot="center">购物车({{num}})</div>
    </NavBar>

    <div class="content">
      <CartItem class="cart-item" />
      <CartItem class="cart-item" />
    </div>

    <van-tabbar route class="beijin" active-color="#ff5777">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="qr">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/profile" icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import CartItem from "views/cart/childcpmps/CartItem";

export default {
  name: "Cart",
  data() {
    return {
      num: 0,
    };
  },

  components: {
    NavBar,
    CartItem,
  },

  methods: {},
};
</script>

<style scoped>
.content {
  margin-top: 50px;
}

.cart-item {
  margin-top: 5px;
}
</style>