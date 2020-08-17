<!-- 购物车的商品 -->
<template>
  <div>
    <van-card
      :price="cartData.price"
      :desc="cartData.desc"
      :title="cartData.title"
      :thumb="cartData.thumb"
      class="card"
    >
      <template #tags v-if="cartData.status">
        <van-tag plain type="danger">秒杀</van-tag>
      </template>
      <template #footer>
        <van-button size="mini">删除</van-button>
        <van-button size="mini">修改</van-button>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartData: {
      type: Object,
      default: () => {
        return {
          price: "2.00",
          desc: "最新款平板电脑",
          title: "苹果平板电脑",
          thumb: "https://img.yzcdn.cn/vant/ipad.jpeg",
          status: 1,
        };
      },
    },
  },
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style scoped>
</style>