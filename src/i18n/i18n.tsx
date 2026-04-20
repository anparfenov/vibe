import { createContext } from 'preact'
import { useContext } from 'preact/hooks'
import type { ComponentChildren } from 'preact'
import { en } from './locales/en'

export type Translations = typeof en

const I18nContext = createContext<Translations>(en)

export function I18nProvider({ children }: { children: ComponentChildren }) {
  return <I18nContext.Provider value={en}>{children}</I18nContext.Provider>
}

export function useTranslations(): Translations {
  return useContext(I18nContext)
}
