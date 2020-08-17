<!-- 商品详情 -->
<template>
  <div>
    <NavBar class="home-nav-bar">
      <div slot="left" @click="fRoute">
        <van-icon name="arrow-left" />
      </div>
      <div slot="center">商品详情</div>
    </NavBar>
    <div class="mar">
      <div>
        <van-swipe :autoplay="3000" height="320">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="goods-title">
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <h4 class="custom-title sz-title">Apple iPhone 11 (A2223) 128GB 黑色 移动联通电信4G手机 双卡双待</h4>
            <span class="center">进口手机好用的不得了</span>
            <h5 class="price">
              <span class="new">$1000.00</span>
              <span class="old">$2000.00</span>
              <span class="sale">已售:1000</span>
            </h5>
          </template>
        </van-cell>

        <van-cell value="七天无理由退货" class="gu" />
        <van-cell value="由 京东 发货, 并提供售后服务. 23:10前下单，预计明天(08月18日)送达" class="zz" />
      </div>

      <div class="specs">
        <van-cell title="规格" size="large" />
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="span-s pad-span">256GB</span>
            <span class="span-s">A2220</span>
          </template>
        </van-cell>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="span-s pad-span">金色</span>
            <span class="span-s">官方标配</span>
          </template>
        </van-cell>
      </div>
      <!-- 图片区 -->
      <div class="specs" id="goods-img">
        <img
          src="https://img14.360buyimg.com/n1/s450x450_jfs/t1/53315/37/10408/159271/5d780aa4E9411a2a9/2ec40ebacc44ed6f.jpg"
          alt
        />
        <img
          src="https://img11.360buyimg.com/cms/jfs/t1/91459/39/12111/188699/5e427ff6Ee6d87bec/8bdd52bf99d146a5.png"
          alt
        />
      </div>
      <div class="bo"></div>
    </div>

    <van-goods-action :placeholder="false">
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";

export default {
  data() {
    return {
      images: [
        "https://img.jrjimg.cn/2019/08/cms_20190830225323849.jpg",
        "https://img14.360buyimg.com/n1/s450x450_jfs/t1/53315/37/10408/159271/5d780aa4E9411a2a9/2ec40ebacc44ed6f.jpg",
      ],
    };
  },

  components: {
    NavBar,
  },

  methods: {
    fRoute() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
.mar {
  margin-top: 44px;
  background-color: #f5f5f5;
}
.imgwg img {
  width: 100%;
  height: 100%;
}

.goods-title {
  margin-top: 4px;
}

.sz-title {
  color: black;
  font-size: 0.8rem;
  font-weight: 400;
}

.center {
  color: grey;
  font-size: 0.6rem;
}

.new {
  color: #e25450;
  padding-right: 0.5rem;
  font-size: 0.8rem;
  font-weight: 400;
}

.old {
  color: grey;
  font-size: 0.5rem;
  text-decoration: line-through;
  font-weight: 400;
}

.sale {
  float: right;
  color: #e25450;
  font-size: 0.8rem;
  font-weight: 400;
}

.bo {
  height: 50px;
  width: 100%;
}

.specs {
  margin-top: 10px;
}

.gu {
  font-size: 0.6rem;
  color: grey;
}

.zz {
  font-size: 0.6rem;
  color: grey;
}

.span-s {
  font-size: 12px;
  color: #808080;
}

.pad-span {
  padding-right: 20px;
}

#goods-img img {
  width: 100%;
  height: 100%;
}
</style>