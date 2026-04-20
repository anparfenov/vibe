import { render } from 'preact'
import { registerSW } from 'virtual:pwa-register'
import { App } from './App/App'
import { I18nProvider } from './i18n/i18n'
import './styles/colors.css'
import './index.css'

const shouldRegisterServiceWorker = import.meta.env.VITE_ENABLE_SW !== 'false'

if (shouldRegisterServiceWorker) {
  registerSW({ immediate: true })
}

const root = document.getElementById('app')

if (!root) {
  throw new Error('Missing #app root element')
}

render(
  <I18nProvider>
    <App />
  </I18nProvider>,
  root,
)
