<!-- 个人中心 -->
<template>
  <div>
    <NavBar class="home-nav-bar">
      <div slot="center">个人中心</div>
    </NavBar>
    <div class="main">
      <!-- 用户数据 -->
      <ProFileUser />

      <van-cell value="查看全部订单" is-link icon="label">
        <template #title>
          <span class="custom-title">我的订单</span>
        </template>
      </van-cell>

      <van-grid :border="false">
        <van-grid-item icon="cart-circle" text="待支付" :dot="true" />
        <van-grid-item icon="point-gift-o" text="待收货" />
        <van-grid-item icon="chat-o" text="待评价" />
        <van-grid-item icon="balance-o" text="售后/退款" />
      </van-grid>

      <div class="ma">
        <van-cell is-link icon="gold-coin">
          <template #title>
            <span class="custom-title">我的优惠券</span>
          </template>
        </van-cell>
        <van-cell is-link icon="wap-home">
          <template #title>
            <span class="custom-title">我的收货地址</span>
          </template>
        </van-cell>
      </div>

      <div class="ma bot">
        <van-cell value="15xxx" is-link icon="service">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">联系客服</span>
            <van-tag type="danger">电话</van-tag>
          </template>
        </van-cell>
        <van-cell is-link icon="setting">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">设置</span>
          </template>
        </van-cell>
      </div>
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
import ProFileUser from "./childcpmps/ProFileUser";

export default {
  name: "ProFile",
  data() {
    return {};
  },

  components: {
    NavBar,
    ProFileUser,
  },

  methods: {},
};
</script>

<style scoped>
.main {
  margin-top: 44px;
  background-color: #f5f5f5;
}

.ma {
  margin-top: 7px;
}

.bot {
  border-bottom: 1px solid #f5f5f5;
}
</style>