<!--  -->
<template>
  <div id="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style scoped>
#nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
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

.nav-left {
  width: 60px;
}

.nav-center {
  flex: 1;
}

.nav-right {
  width: 60px;
}
</style>