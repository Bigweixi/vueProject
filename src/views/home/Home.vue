<template>
  <div id="home">
    <!-- 头部 -->
    <NavBar class="home-nav-bar">
      <div slot="center">购物街</div>
    </NavBar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" class="banner">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分类区 -->
    <van-grid :clickable="true" :icon-size="50" :border="false" class="home-category">
      <van-grid-item v-for="(r, index) in  recommend" :icon="r.image" :text="r.title" :key="index" />
    </van-grid>
    <!-- bar -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-tabs v-model="activeName">
        <van-tab title="流行" name="a">
          <Goods></Goods>
        </van-tab>
        <van-tab title="新款" name="b">
          <Goods></Goods>
        </van-tab>
        <van-tab title="精选" name="c">
          <Goods></Goods>
        </van-tab>
      </van-tabs>
    </van-pull-refresh>
    <div class="bo"></div>
    <!-- 商品卡片 -->
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
import Axios from "network/axios";
import Goods from "components/common/goods/Goods";

export default {
  name: "Home",
  data() {
    return {
      count: 0,
      images: [],
      recommend: [],
      keywords: [],
      activeName: "a",
      isLoading: false,
    };
  },
  components: {
    NavBar,
    Goods,
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
  created() {
    Axios("https://renwei.vip/api/getHomeData").then((res) => {
      let data = json.parse(res);
      this.images = data.data.banner.list;
      this.recommend = data.data.recommend.list;
      this.keywords = data.data.keywords.list;
    });
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.banner {
  margin-top: 44px;
  height: 150px;
}

.banner img {
  width: 100%;
  height: 100%;
}
.beijin {
  background-color: #f6f6f6;
}

.home-category {
  border-bottom: 7px solid #eee;
}

.bo {
  height: 50px;
  width: 100%;
}
</style>
