import { Link, Route, Switch } from 'wouter-preact'
import { useTranslations } from '../i18n/i18n'
import { CvPage } from '../pages/CvPage/CvPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage'
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage'
import styles from './App.module.css'

export function App() {
  const t = useTranslations()

  return (
    <div class={styles.siteShell}>
      <header class={styles.siteHeader}>
        <p class={styles.eyebrow}>{t.app.eyebrow}</p>
        <nav class={styles.siteNav} aria-label="Primary">
          <Link class={styles.navLink} href="/">
            {t.nav.home}
          </Link>
          <Link class={styles.navLink} href="/cv">
            {t.nav.cv}
          </Link>
          <Link class={styles.navLink} href="/projects">
            {t.nav.projects}
          </Link>
        </nav>
      </header>

      <main class={styles.siteMain}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/cv" component={CvPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>

      <footer class={styles.siteFooter}>
        <p>{t.app.footer}</p>
      </footer>
    </div>
  )
}
