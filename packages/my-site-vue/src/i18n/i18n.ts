import { inject } from "vue"
import {
  vueEn as en,
  type VueTranslations as Translations,
} from "../../../shared/locales/vue.en"

export const translationsKey = Symbol("translations")
export const defaultTranslations = en

export function useTranslations(): Translations {
  const translations = inject<Translations>(translationsKey)

  if (!translations) {
    throw new Error("Translations are not provided")
  }

  return translations
}
