// 项目的入口文件
// 导入vue模块
import Vue from 'vue';
// 导入自己的router模块
import router from './router.js';


// 导入App.vue组件
import App from '../components/App.vue';


// 创建vm实例
const vm = new Vue({
  el: '#app',
  render: c=>c(App),
  router
})