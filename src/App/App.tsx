import { Link, Route, Switch } from 'wouter-preact'
import { CvPage } from '../pages/CvPage/CvPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage'
import styles from './App.module.css'

function NotFoundPage() {
  return (
    <section class={styles.panel}>
      <h1>Page not found</h1>
      <p>That page does not exist. Use the navigation to get back on track.</p>
    </section>
  )
}

export function App() {
  return (
    <div class={styles.siteShell}>
      <header class={styles.siteHeader}>
        <p class={styles.eyebrow}>Personal Site</p>
        <nav class={styles.siteNav} aria-label="Primary">
          <Link class={styles.navLink} href="/">
            Home
          </Link>
          <Link class={styles.navLink} href="/cv">
            CV
          </Link>
          <Link class={styles.navLink} href="/projects">
            My Projects
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
        <p>Built with Preact, Vite, pnpm and Biome.</p>
      </footer>
    </div>
  )
}
