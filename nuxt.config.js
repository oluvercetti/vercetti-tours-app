import { env } from "./config/env";
/** Get host and port from BASE_URL */
const [HOST, PORT] = process.env.BASE_URL.replace(
    // eslint-disable-next-line prefer-regex-literals
    new RegExp(/^https?:\/\//),
    "",
).split(":");
export default {
    env,
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Vetours",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "static/scss/main.scss",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{
        path: "~/components",
        pathPrefix: false,
        extensions: ["vue"],
    }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        ["@nuxtjs/moment"],
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        ["cookie-universal-nuxt", { alias: "cookies" }],
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    /** Define server host and port */
    server: {
        host: HOST,
        port: PORT,
    },

    /** Express server */
    serverMiddleware: ["~/server/express.js"],
};