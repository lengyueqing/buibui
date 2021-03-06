import VueRouter from "vue-router";
import Vue from "vue";
import Comics from "../views/Comics";
// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
Vue.use(VueRouter);
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return push.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return push.call(this, location, onComplete, () => {});
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  // 如果用户想处理失败，就处理
  if (onComplete && onAbort) {
    return replace.call(this, location, onComplete, onAbort);
  }
  // 如果用户不处理失败，给默认值：空函数
  return replace.call(this, location, onComplete, () => {});
};
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/Comics",
      component: Comics,
    }
  ],
});
export default router;