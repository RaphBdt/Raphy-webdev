import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4135fed4 = () => interopDefault(import('../pages/autres.vue' /* webpackChunkName: "pages/autres" */))
const _495f02f4 = () => interopDefault(import('../pages/git-github.vue' /* webpackChunkName: "pages/git-github" */))
const _fd6018d2 = () => interopDefault(import('../pages/html-css.vue' /* webpackChunkName: "pages/html-css" */))
const _2027c6a3 = () => interopDefault(import('../pages/javascript.vue' /* webpackChunkName: "pages/javascript" */))
const _1255afbf = () => interopDefault(import('../pages/cours-autres/conception-objet.vue' /* webpackChunkName: "pages/cours-autres/conception-objet" */))
const _19461d6a = () => interopDefault(import('../pages/cours-autres/developpement-back.vue' /* webpackChunkName: "pages/cours-autres/developpement-back" */))
const _236087c5 = () => interopDefault(import('../pages/cours-autres/symfony.vue' /* webpackChunkName: "pages/cours-autres/symfony" */))
const _7cc2dfba = () => interopDefault(import('../pages/cours-autres/wordpress.vue' /* webpackChunkName: "pages/cours-autres/wordpress" */))
const _7ca68c0e = () => interopDefault(import('../pages/cours-git-github/git-et-github.vue' /* webpackChunkName: "pages/cours-git-github/git-et-github" */))
const _24ba78d8 = () => interopDefault(import('../pages/cours-git-github/le-terminal.vue' /* webpackChunkName: "pages/cours-git-github/le-terminal" */))
const _346c110a = () => interopDefault(import('../pages/cours-html-css/animations-css.vue' /* webpackChunkName: "pages/cours-html-css/animations-css" */))
const _96bbbcce = () => interopDefault(import('../pages/cours-html-css/bootstrap.vue' /* webpackChunkName: "pages/cours-html-css/bootstrap" */))
const _7e95f553 = () => interopDefault(import('../pages/cours-html-css/sass.vue' /* webpackChunkName: "pages/cours-html-css/sass" */))
const _3cb0ec63 = () => interopDefault(import('../pages/cours-javascript/full-stack.vue' /* webpackChunkName: "pages/cours-javascript/full-stack" */))
const _3bda2fe6 = () => interopDefault(import('../pages/cours-javascript/javascript-web.vue' /* webpackChunkName: "pages/cours-javascript/javascript-web" */))
const _0d2986c6 = () => interopDefault(import('../pages/cours-javascript/vuejs.vue' /* webpackChunkName: "pages/cours-javascript/vuejs" */))
const _1a7e97f8 = () => interopDefault(import('../pages/cours-autres/cours-conception-objet-damien/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-conception-objet-damien/_slug" */))
const _6ed32e08 = () => interopDefault(import('../pages/cours-autres/cours-developpement-back/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-developpement-back/_slug" */))
const _57155b86 = () => interopDefault(import('../pages/cours-autres/cours-symfony/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-symfony/_slug" */))
const _17a7d0db = () => interopDefault(import('../pages/cours-autres/cours-wordpress/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-wordpress/_slug" */))
const _7bac6b86 = () => interopDefault(import('../pages/cours-git-github/cours-git-et-github/_slug.vue' /* webpackChunkName: "pages/cours-git-github/cours-git-et-github/_slug" */))
const _079c2410 = () => interopDefault(import('../pages/cours-git-github/cours-le-terminal/_slug.vue' /* webpackChunkName: "pages/cours-git-github/cours-le-terminal/_slug" */))
const _ba346030 = () => interopDefault(import('../pages/cours-html-css/cours-animations-css/_slug.vue' /* webpackChunkName: "pages/cours-html-css/cours-animations-css/_slug" */))
const _5de7fd11 = () => interopDefault(import('../pages/cours-html-css/cours-bootstrap/_slug.vue' /* webpackChunkName: "pages/cours-html-css/cours-bootstrap/_slug" */))
const _a6e9cd9e = () => interopDefault(import('../pages/cours-html-css/cours-sass/_slug.vue' /* webpackChunkName: "pages/cours-html-css/cours-sass/_slug" */))
const _7eb0d701 = () => interopDefault(import('../pages/cours-javascript/cours-full-stack/_slug.vue' /* webpackChunkName: "pages/cours-javascript/cours-full-stack/_slug" */))
const _48c161ab = () => interopDefault(import('../pages/cours-javascript/cours-javascript-web/_slug.vue' /* webpackChunkName: "pages/cours-javascript/cours-javascript-web/_slug" */))
const _20c2a9fe = () => interopDefault(import('../pages/cours-javascript/cours-vuejs/_slug.vue' /* webpackChunkName: "pages/cours-javascript/cours-vuejs/_slug" */))
const _3bb0a2e8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/autres",
    component: _4135fed4,
    name: "autres"
  }, {
    path: "/git-github",
    component: _495f02f4,
    name: "git-github"
  }, {
    path: "/html-css",
    component: _fd6018d2,
    name: "html-css"
  }, {
    path: "/javascript",
    component: _2027c6a3,
    name: "javascript"
  }, {
    path: "/cours-autres/conception-objet",
    component: _1255afbf,
    name: "cours-autres-conception-objet"
  }, {
    path: "/cours-autres/developpement-back",
    component: _19461d6a,
    name: "cours-autres-developpement-back"
  }, {
    path: "/cours-autres/symfony",
    component: _236087c5,
    name: "cours-autres-symfony"
  }, {
    path: "/cours-autres/wordpress",
    component: _7cc2dfba,
    name: "cours-autres-wordpress"
  }, {
    path: "/cours-git-github/git-et-github",
    component: _7ca68c0e,
    name: "cours-git-github-git-et-github"
  }, {
    path: "/cours-git-github/le-terminal",
    component: _24ba78d8,
    name: "cours-git-github-le-terminal"
  }, {
    path: "/cours-html-css/animations-css",
    component: _346c110a,
    name: "cours-html-css-animations-css"
  }, {
    path: "/cours-html-css/bootstrap",
    component: _96bbbcce,
    name: "cours-html-css-bootstrap"
  }, {
    path: "/cours-html-css/sass",
    component: _7e95f553,
    name: "cours-html-css-sass"
  }, {
    path: "/cours-javascript/full-stack",
    component: _3cb0ec63,
    name: "cours-javascript-full-stack"
  }, {
    path: "/cours-javascript/javascript-web",
    component: _3bda2fe6,
    name: "cours-javascript-javascript-web"
  }, {
    path: "/cours-javascript/vuejs",
    component: _0d2986c6,
    name: "cours-javascript-vuejs"
  }, {
    path: "/cours-autres/cours-conception-objet-damien/:slug?",
    component: _1a7e97f8,
    name: "cours-autres-cours-conception-objet-damien-slug"
  }, {
    path: "/cours-autres/cours-developpement-back/:slug?",
    component: _6ed32e08,
    name: "cours-autres-cours-developpement-back-slug"
  }, {
    path: "/cours-autres/cours-symfony/:slug?",
    component: _57155b86,
    name: "cours-autres-cours-symfony-slug"
  }, {
    path: "/cours-autres/cours-wordpress/:slug?",
    component: _17a7d0db,
    name: "cours-autres-cours-wordpress-slug"
  }, {
    path: "/cours-git-github/cours-git-et-github/:slug?",
    component: _7bac6b86,
    name: "cours-git-github-cours-git-et-github-slug"
  }, {
    path: "/cours-git-github/cours-le-terminal/:slug?",
    component: _079c2410,
    name: "cours-git-github-cours-le-terminal-slug"
  }, {
    path: "/cours-html-css/cours-animations-css/:slug?",
    component: _ba346030,
    name: "cours-html-css-cours-animations-css-slug"
  }, {
    path: "/cours-html-css/cours-bootstrap/:slug?",
    component: _5de7fd11,
    name: "cours-html-css-cours-bootstrap-slug"
  }, {
    path: "/cours-html-css/cours-sass/:slug?",
    component: _a6e9cd9e,
    name: "cours-html-css-cours-sass-slug"
  }, {
    path: "/cours-javascript/cours-full-stack/:slug?",
    component: _7eb0d701,
    name: "cours-javascript-cours-full-stack-slug"
  }, {
    path: "/cours-javascript/cours-javascript-web/:slug?",
    component: _48c161ab,
    name: "cours-javascript-cours-javascript-web-slug"
  }, {
    path: "/cours-javascript/cours-vuejs/:slug?",
    component: _20c2a9fe,
    name: "cours-javascript-cours-vuejs-slug"
  }, {
    path: "/",
    component: _3bb0a2e8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
