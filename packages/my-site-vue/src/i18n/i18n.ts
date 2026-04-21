import { inject } from "vue"
import { en, type Translations } from "./locales/en"

export const translationsKey = Symbol("translations")
export const defaultTranslations = en

export function useTranslations(): Translations {
  const translations = inject<Translations>(translationsKey)

  if (!translations) {
    throw new Error("Translations are not provided")
  }

  return translations
}
