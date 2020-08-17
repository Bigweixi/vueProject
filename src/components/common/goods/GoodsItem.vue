<!-- 商品组件 -->
<template>
  <div id="goods-div" @click="goodsClick(goodsList.id)">
    <img :src="goodsList.url" alt />

    <h3 class="title">{{goodsList.title}}</h3>
    <div class="price-div">
      <span class="price">
        <i>¥</i>
        {{goodsList.price}}
      </span>
      <span class="mai">已售{{goodsList.num}}件</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsList: {
      type: Object,
      default: () => {
        return {
          id: 30002,
          url:
            "https://image.000111.cn/upload/mall/202008/14/5f3631573bbf364797600.jpg",
          title: "【泉润泰沃】优质燕麦片450克*5袋",
          price: "50.00",
          num: 426,
        };
      },
    },
  },
  data() {
    return {};
  },

  components: {},

  methods: {
    goodsClick(id) {
      this.$router.push("/goods");
    },
  },
};
</script>

<style scoped>
#goods-div {
  background-color: #ffffff;
}

#goods-div img {
  width: 100%;
}

.title {
  margin-top: 8px;
  margin-bottom: 8px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #2c2c2c;
  font-size: 12px;
  font-weight: 400;
}

.price-div {
  display: flex;
  padding-bottom: 7px;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: red;
  font-size: 15px;
  font-weight: 400;
  padding-left: 10px;
}

.mai {
  color: #afadad;
  font-size: 12px;
  font-weight: 300;
  padding-right: 6px;
}
</style>