<!-- 商品卡片 -->
<template>
  <div id="goods">
    <GoodsItem class="goods-item" v-for="v in 12" :key="v" />
  </div>
</template>

<script>
import GoodsItem from "common/goods/GoodsItem";

export default {
  name: "Goods",
  data() {
    return {};
  },

  components: {
    GoodsItem,
  },

  methods: {},
};
</script>

<style scoped>
#goods {
  display: flex;
  flex-wrap: wrap;
  background-color: #f4f4f4;
}

.goods-item {
  margin: 6px;
  width: 46%;
  border-radius: 7px;
}
</style>