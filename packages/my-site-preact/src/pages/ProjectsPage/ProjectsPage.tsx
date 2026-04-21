import { useTranslations } from "../../i18n/i18n"
import styles from "./ProjectsPage.module.css"

export function ProjectsPage() {
  const t = useTranslations()

  return (
    <section class={styles.stack}>
      <article class={styles.panel}>
        <h1>{t.projectsPage.heading}</h1>
        <p>{t.projectsPage.intro}</p>
      </article>

      {t.projectsPage.projects.map((project) => (
        <article class={styles.panel} key={project.name}>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
          <ul class={styles.pillList}>
            {project.stack.map((tech) => (
              <li class={styles.listElement} key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
