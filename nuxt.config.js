// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/transportation-expenses/"
        }
      }
    : {};

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "transportation-expenses",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A Nuxt.js Github.io site"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/transportation-expenses/favicon.ico"
      }
    ]
  },

  router: routerBase.router,

  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  css: [
    // node.js module but we specify the pre-processor
    { src: "bulma/bulma.sass", lang: "sass" }
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    publicPath: "/static/",
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  /*
   ** nuxt generate の結果を docs フォルダ配下に出力
   */
  generate: {
    publicPath: "/static/",
    dir: "docs"
  }
};
