
import webpack from "webpack";

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script : [
      {src: "https://code.jquery.com/jquery-3.5.1.min.js"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {src: '~assets/web/scss/style.scss'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~plugins/plugins.js", mode: "client", ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      './assets/web/scss/*.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    module: {
      resolve: {
        alias: {
          jquery$: "jquery"
        }
      },
      rules: [
        {
          test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          loader: "file-loader?name=[name].[ext]?[hash]"
        }
      ]
    },
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ["vue/dist/vue.esm.js", "default"],
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery"
      })
    ],
    extend (config, ctx) {
    }
  }
}
