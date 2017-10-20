// 导入vue模块
import Vue from 'vue';
// 导入路由模块
import VueRouter from 'vue-router';
// 把路由模块注册到vue上
Vue.use(VueRouter);



// 导入login.vue组件
import login from '../components/account/login.vue';
// 导入register.vue组件
import register from '../components/account/register.vue';



// 创建router对象
const router = new VueRouter({
  routes: [
    { path: '/login',component: login},
    { path: '/register',component: register},
  ]
});


// 将路由模块导出
export default router;
