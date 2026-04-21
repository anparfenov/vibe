import { createApp } from "vue"
import { registerSW } from "virtual:pwa-register"
import App from "./App.vue"
import { defaultTranslations, translationsKey } from "./i18n/i18n"
import { router } from "./router"
import "./styles/colors.css"
import "./index.css"

const shouldRegisterServiceWorker = import.meta.env.VITE_ENABLE_SW !== "false"

if (shouldRegisterServiceWorker) {
  registerSW({ immediate: true })
}

const app = createApp(App)
app.provide(translationsKey, defaultTranslations)

app.use(router)
app.mount("#app")
