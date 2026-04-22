import { useState } from "preact/hooks"
import { Link, Route, Switch } from "wouter-preact"
import { FloatingWindow } from "../components/FloatingWindow/FloatingWindow"
import { useTranslations } from "../i18n/i18n"
import { CvPage } from "../pages/CvPage/CvPage"
import { HomePage } from "../pages/HomePage/HomePage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage"
import styles from "./App.module.css"

export function App() {
  const t = useTranslations()
  const [windowOpen, setWindowOpen] = useState(false)

  return (
    <div class={styles.siteShell}>
      <header class={styles.siteHeader}>
        <div class={styles.headerTop}>
          <p class={styles.eyebrow}>{t.app.eyebrow}</p>
          <button class={styles.windowBtn} onClick={() => setWindowOpen(true)} aria-label="Open info window">
            ↗
          </button>
        </div>
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
        <p>
          © {new Date().getFullYear()} {t.app.footer}
        </p>
      </footer>

      {windowOpen && (
        <FloatingWindow title={t.app.eyebrow} onClose={() => setWindowOpen(false)}>
          <p>{t.app.footer}</p>
        </FloatingWindow>
      )}
    </div>
  )
}
