import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from 'axios';
import VueAxios from "vue-axios";



import NProgress from 'nprogress';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/nprogress/nprogress.css";
var VueResource =require('vue-resource');
import Create from "./components/Create.vue";
import Edit from "./components/Edit.vue";
import Index from "./components/Index.vue";

Vue.use(VueRouter);
Vue.use(axios);
Vue.use(VueAxios);
Vue.use(VueResource);
Vue.http = axios;

Vue.config.productionTip = false;

const routes = [
  {
    name: "Create",
    path: "/create",
    component: Create,
  },

  {
    name: "Edit",
    path: "/edit",
    component: Edit,
  },
  {
    name: "Index",
    path: "/index",
    component: Index,
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});
router.beforeResolve((to,from,next)=>{
  if(to.name){
    NProgress.start()
  }
  next()
})
router.afterEach(()=>{
  NProgress.done()
})

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
