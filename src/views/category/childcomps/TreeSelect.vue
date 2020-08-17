<!--  -->
<template>
  <div>
    <van-tree-select
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
    />
  </div>
</template>

<script>
export default {
  name: "TreeSelect",
  data() {
    return {
      items: [
        { text: "浙江", children: [{ text: "浙江" }, { text: "浙江" }] },
        { text: "江苏", children: [] },
        { text: "浙江", children: [] },
        { text: "江苏", children: [] },
        { text: "浙江", children: [] },
        { text: "江苏", children: [] },
      ],
      activeId: 1,
      activeIndex: 0,
    };
  },

  components: {},

  methods: {},
};
</script>

<style scoped>
</style>