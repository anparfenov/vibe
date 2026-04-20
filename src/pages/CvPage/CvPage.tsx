import { useTranslations } from '../../i18n/i18n'
import styles from './CvPage.module.css'

export function CvPage() {
  const t = useTranslations()

  return (
    <section class={styles.stack}>
      <article class={styles.panel}>
        <p>{t.cvPage.intro}</p>
      </article>
      <article class={styles.panel}>
        <h2>{t.cvPage.highlightsHeading}</h2>
        <ul>
          {t.cvPage.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article class={styles.panel}>
        <h2>{t.cvPage.skillsHeading}</h2>
        <ul class={styles.pillList}>
          {t.cvPage.skills.map((skill) => (
            <li class={styles.listElement} key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
