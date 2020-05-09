import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/view/redirect/index")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/view/login/index"),
    hidden: true
  },
  {
    path: "/auth-redirect",
    component: () => import("@/view/login/auth-redirect"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/view/error-page/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/view/error-page/401"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/datacenter",
    children: [
      {
        path: "datacenter",
        component: () => import("@/view/datacenter/index"),
        name: "datacenter",
        meta: {title: "数据中心", icon: "eye", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/users",
    children: [
      {
        path: "users",
        component: () => import("@/view/users/index"),
        name: "users",
        meta: {title: "用户管理", icon: "user", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/presetweb",
    children: [
      {
        path: "presetweb",
        component: () => import("@/view/presetweb/index"),
        name: "presetweb",
        meta: {title: "预设网站配置", icon: "international", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/commpanies",
    children: [
      {
        path: "commpanies",
        component: () => import("@/view/commpanies/index"),
        name: "commpanies",
        meta: {title: "交易商名单管理", icon: "component", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/quickennode",
    children: [
      {
        path: "quickennode",
        component: () => import("@/view/quickennode/index"),
        name: "quickennode",
        meta: {title: "加速节点管理", icon: "dashboard", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/guidemanner",
    meta: {title: "网址导航管理", icon: "guide", affix: false},
    children: [
      {
        path: "guidemanner",
        component: () => import("@/view/guideweb/guidemanner/index"),
        name: "guidemanner",
        meta: {title: "网址导航管理", icon: "table", affix: false}
      },
      {
        path: "guidesort",
        component: () => import("@/view/guideweb/guidesort/index"),
        name: "guidesort",
        meta: {title: "导航分类管理", icon: "list", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/hotwords",
    children: [
      {
        path: "hotwords",
        component: () => import("@/view/hotwords/index"),
        name: "hotwords",
        meta: {title: "搜索热词管理", icon: "hot", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/backusers",
    children: [
      {
        path: "backusers",
        component: () => import("@/view/backusers/index"),
        name: "backusers",
        meta: {title: "后台用户管理", icon: "peoples", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/permission",
    children: [
      {
        path: "permission",
        component: () => import("@/view/permission/index"),
        name: "permission",
        meta: {title: "权限管理", icon: "tree-table", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/feedback",
    children: [
      {
        path: "feedback",
        component: () => import("@/view/feedback/index"),
        name: "feedback",
        meta: {title: "意见反馈管理", icon: "eye-open", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/appeal",
    children: [
      {
        path: "appeal",
        component: () => import("@/view/appeal/index"),
        name: "appeal",
        meta: {title: "误报申诉管理", icon: "example", affix: true}
      }
    ]
  },
  {
    path: "/",
    component: Layout,
    redirect: "/backsetting",
    children: [
      {
        path: "backsetting",
        component: () => import("@/view/backsetting/index"),
        name: "backsetting",
        meta: {title: "后台配置管理", icon: "people", affix: true}
      }
    ]
  }
];

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  {path: "*", redirect: "/404", hidden: true}
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
