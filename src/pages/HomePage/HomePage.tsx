import { useTranslations } from '../../i18n/i18n'
import styles from './HomePage.module.css'

export function HomePage() {
  const t = useTranslations()

  return (
    <section class={styles.stack}>
      <article class={styles.panel}>
        <h1>{t.homePage.heading}</h1>
        <p>{t.homePage.intro}</p>
      </article>
      <article class={styles.panel}>
        <h2>{t.homePage.findHereHeading}</h2>
        <ul class={styles.pillList}>
          {t.homePage.findHereItems.map((item) => (
            <li class={styles.listElement} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
