import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _28c77682 = () => interopDefault(import('../pages/autres.vue' /* webpackChunkName: "pages/autres" */))
const _22960a9d = () => interopDefault(import('../pages/git-github.vue' /* webpackChunkName: "pages/git-github" */))
const _5cc6d180 = () => interopDefault(import('../pages/html-css.vue' /* webpackChunkName: "pages/html-css" */))
const _0d426368 = () => interopDefault(import('../pages/javascript.vue' /* webpackChunkName: "pages/javascript" */))
const _031c6514 = () => interopDefault(import('../pages/cours-autres/conception-objet.vue' /* webpackChunkName: "pages/cours-autres/conception-objet" */))
const _6ed1a961 = () => interopDefault(import('../pages/cours-autres/developpement-back.vue' /* webpackChunkName: "pages/cours-autres/developpement-back" */))
const _4eadbdcc = () => interopDefault(import('../pages/cours-autres/strapi-nuxt.vue' /* webpackChunkName: "pages/cours-autres/strapi-nuxt" */))
const _a0965fa4 = () => interopDefault(import('../pages/cours-autres/symfony.vue' /* webpackChunkName: "pages/cours-autres/symfony" */))
const _ebfb3b68 = () => interopDefault(import('../pages/cours-autres/wordpress.vue' /* webpackChunkName: "pages/cours-autres/wordpress" */))
const _140e2537 = () => interopDefault(import('../pages/cours-git-github/git-et-github.vue' /* webpackChunkName: "pages/cours-git-github/git-et-github" */))
const _2c584841 = () => interopDefault(import('../pages/cours-git-github/le-terminal.vue' /* webpackChunkName: "pages/cours-git-github/le-terminal" */))
const _20882ec1 = () => interopDefault(import('../pages/cours-html-css/animations-css.vue' /* webpackChunkName: "pages/cours-html-css/animations-css" */))
const _194be4fc = () => interopDefault(import('../pages/cours-html-css/bootstrap.vue' /* webpackChunkName: "pages/cours-html-css/bootstrap" */))
const _59d27bca = () => interopDefault(import('../pages/cours-html-css/sass.vue' /* webpackChunkName: "pages/cours-html-css/sass" */))
const _4c51e84c = () => interopDefault(import('../pages/cours-javascript/full-stack.vue' /* webpackChunkName: "pages/cours-javascript/full-stack" */))
const _379e7404 = () => interopDefault(import('../pages/cours-javascript/javascript-web.vue' /* webpackChunkName: "pages/cours-javascript/javascript-web" */))
const _54e54e22 = () => interopDefault(import('../pages/cours-javascript/vuejs.vue' /* webpackChunkName: "pages/cours-javascript/vuejs" */))
const _0adb98e1 = () => interopDefault(import('../pages/cours-autres/cours-conception-objet-damien/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-conception-objet-damien/_slug" */))
const _10d17f7f = () => interopDefault(import('../pages/cours-autres/cours-developpement-back/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-developpement-back/_slug" */))
const _c12e62dc = () => interopDefault(import('../pages/cours-autres/cours-strapi-nuxt/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-strapi-nuxt/_slug" */))
const _305b4526 = () => interopDefault(import('../pages/cours-autres/cours-symfony/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-symfony/_slug" */))
const _11dcad84 = () => interopDefault(import('../pages/cours-autres/cours-wordpress/_slug.vue' /* webpackChunkName: "pages/cours-autres/cours-wordpress/_slug" */))
const _9b1ae1a2 = () => interopDefault(import('../pages/cours-git-github/cours-git-et-github/_slug.vue' /* webpackChunkName: "pages/cours-git-github/cours-git-et-github/_slug" */))
const _51b91df9 = () => interopDefault(import('../pages/cours-git-github/cours-le-terminal/_slug.vue' /* webpackChunkName: "pages/cours-git-github/cours-le-terminal/_slug" */))
const _c72fd9c2 = () => interopDefault(import('../pages/cours-html-css/cours-animations-css/_slug.vue' /* webpackChunkName: "pages/cours-html-css/cours-animations-css/_slug" */))
const _c34f590c = () => interopDefault(import('../pages/cours-html-css/cours-bootstrap/_slug.vue' /* webpackChunkName: "pages/cours-html-css/cours-bootstrap/_slug" */))
const _0216a528 = () => interopDefault(import('../pages/cours-html-css/cours-sass/_slug.vue' /* webpackChunkName: "pages/cours-html-css/cours-sass/_slug" */))
const _4f887bf8 = () => interopDefault(import('../pages/cours-javascript/cours-full-stack/_slug.vue' /* webpackChunkName: "pages/cours-javascript/cours-full-stack/_slug" */))
const _2a8099bc = () => interopDefault(import('../pages/cours-javascript/cours-javascript-web/_slug.vue' /* webpackChunkName: "pages/cours-javascript/cours-javascript-web/_slug" */))
const _1af786a7 = () => interopDefault(import('../pages/cours-javascript/cours-vuejs/_slug.vue' /* webpackChunkName: "pages/cours-javascript/cours-vuejs/_slug" */))
const _095a7d7a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _28c77682,
    name: "autres"
  }, {
    path: "/git-github",
    component: _22960a9d,
    name: "git-github"
  }, {
    path: "/html-css",
    component: _5cc6d180,
    name: "html-css"
  }, {
    path: "/javascript",
    component: _0d426368,
    name: "javascript"
  }, {
    path: "/cours-autres/conception-objet",
    component: _031c6514,
    name: "cours-autres-conception-objet"
  }, {
    path: "/cours-autres/developpement-back",
    component: _6ed1a961,
    name: "cours-autres-developpement-back"
  }, {
    path: "/cours-autres/strapi-nuxt",
    component: _4eadbdcc,
    name: "cours-autres-strapi-nuxt"
  }, {
    path: "/cours-autres/symfony",
    component: _a0965fa4,
    name: "cours-autres-symfony"
  }, {
    path: "/cours-autres/wordpress",
    component: _ebfb3b68,
    name: "cours-autres-wordpress"
  }, {
    path: "/cours-git-github/git-et-github",
    component: _140e2537,
    name: "cours-git-github-git-et-github"
  }, {
    path: "/cours-git-github/le-terminal",
    component: _2c584841,
    name: "cours-git-github-le-terminal"
  }, {
    path: "/cours-html-css/animations-css",
    component: _20882ec1,
    name: "cours-html-css-animations-css"
  }, {
    path: "/cours-html-css/bootstrap",
    component: _194be4fc,
    name: "cours-html-css-bootstrap"
  }, {
    path: "/cours-html-css/sass",
    component: _59d27bca,
    name: "cours-html-css-sass"
  }, {
    path: "/cours-javascript/full-stack",
    component: _4c51e84c,
    name: "cours-javascript-full-stack"
  }, {
    path: "/cours-javascript/javascript-web",
    component: _379e7404,
    name: "cours-javascript-javascript-web"
  }, {
    path: "/cours-javascript/vuejs",
    component: _54e54e22,
    name: "cours-javascript-vuejs"
  }, {
    path: "/cours-autres/cours-conception-objet-damien/:slug?",
    component: _0adb98e1,
    name: "cours-autres-cours-conception-objet-damien-slug"
  }, {
    path: "/cours-autres/cours-developpement-back/:slug?",
    component: _10d17f7f,
    name: "cours-autres-cours-developpement-back-slug"
  }, {
    path: "/cours-autres/cours-strapi-nuxt/:slug?",
    component: _c12e62dc,
    name: "cours-autres-cours-strapi-nuxt-slug"
  }, {
    path: "/cours-autres/cours-symfony/:slug?",
    component: _305b4526,
    name: "cours-autres-cours-symfony-slug"
  }, {
    path: "/cours-autres/cours-wordpress/:slug?",
    component: _11dcad84,
    name: "cours-autres-cours-wordpress-slug"
  }, {
    path: "/cours-git-github/cours-git-et-github/:slug?",
    component: _9b1ae1a2,
    name: "cours-git-github-cours-git-et-github-slug"
  }, {
    path: "/cours-git-github/cours-le-terminal/:slug?",
    component: _51b91df9,
    name: "cours-git-github-cours-le-terminal-slug"
  }, {
    path: "/cours-html-css/cours-animations-css/:slug?",
    component: _c72fd9c2,
    name: "cours-html-css-cours-animations-css-slug"
  }, {
    path: "/cours-html-css/cours-bootstrap/:slug?",
    component: _c34f590c,
    name: "cours-html-css-cours-bootstrap-slug"
  }, {
    path: "/cours-html-css/cours-sass/:slug?",
    component: _0216a528,
    name: "cours-html-css-cours-sass-slug"
  }, {
    path: "/cours-javascript/cours-full-stack/:slug?",
    component: _4f887bf8,
    name: "cours-javascript-cours-full-stack-slug"
  }, {
    path: "/cours-javascript/cours-javascript-web/:slug?",
    component: _2a8099bc,
    name: "cours-javascript-cours-javascript-web-slug"
  }, {
    path: "/cours-javascript/cours-vuejs/:slug?",
    component: _1af786a7,
    name: "cours-javascript-cours-vuejs-slug"
  }, {
    path: "/",
    component: _095a7d7a,
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
