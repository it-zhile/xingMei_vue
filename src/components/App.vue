<template>
  <div class="box">
    <h1>这是App.vue根组件</h1>
    <router-link to="/login">登陆</router-link>
    <router-link to="/register">注册</router-link>

    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.box {
  overflow: hidden;
}
h1 {
  color: red;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
