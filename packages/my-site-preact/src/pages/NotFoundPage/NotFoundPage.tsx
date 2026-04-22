import { usePageTitle } from "../../hooks/usePageTitle"
import { useTranslations } from "../../i18n/i18n"
import styles from "./NotFoundPage.module.css"

export function NotFoundPage() {
  const t = useTranslations()
  usePageTitle(t.notFoundPage.title)

  return (
    <section class={styles.panel}>
      <h1>{t.notFoundPage.heading}</h1>
      <p>{t.notFoundPage.body}</p>
    </section>
  )
}
