import { Link, Route, Switch } from 'wouter-preact'
import { CvPage } from '../pages/CvPage/CvPage'
import { HomePage } from '../pages/HomePage/HomePage'
import { ProjectsPage } from '../pages/ProjectsPage/ProjectsPage'
import './App.css'

function NotFoundPage() {
  return (
    <section class="panel">
      <h1>Page not found</h1>
      <p>That page does not exist. Use the navigation to get back on track.</p>
    </section>
  )
}

export function App() {
  return (
    <div class="site-shell">
      <header class="site-header">
        <p class="eyebrow">Personal Site</p>
        <nav class="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/cv">CV</Link>
          <Link href="/projects">My Projects</Link>
        </nav>
      </header>

      <main class="site-main">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/cv" component={CvPage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>

      <footer class="site-footer">
        <p>Built with Preact, Vite, pnpm and Biome.</p>
      </footer>
    </div>
  )
}
