import { createContext } from "preact"
import { useContext } from "preact/hooks"
import type { ComponentChildren } from "preact"
import {
  preactEn as en,
  type PreactTranslations as Translations,
} from "../../../shared/locales/preact.en"

const I18nContext = createContext<Translations>(en)

export function I18nProvider({ children }: { children: ComponentChildren }) {
  return <I18nContext.Provider value={en}>{children}</I18nContext.Provider>
}

export function useTranslations(): Translations {
  return useContext(I18nContext)
}
