import styles from './ProjectsPage.module.css'

type Project = {
  name: string
  summary: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'Realtime Analytics Dashboard',
    summary:
      'A responsive dashboard for monitoring product events and conversion funnels in near real time.',
    stack: ['TypeScript', 'Preact', 'WebSocket'],
  },
  {
    name: 'Developer Workflow CLI',
    summary:
      'A command line tool that standardized project bootstrap, quality checks, and release automation.',
    stack: ['Node.js', 'TypeScript', 'GitHub Actions'],
  },
  {
    name: 'Knowledge Base Search',
    summary:
      'An internal semantic search tool to make technical documentation easier to discover and maintain.',
    stack: ['PostgreSQL', 'API Design', 'UX Writing'],
  },
]

export function ProjectsPage() {
  return (
    <section class={styles.stack}>
      <article class={styles.panel}>
        <h1>My Projects</h1>
        <p>
          A shortlist of projects that demonstrate scope, impact, and craft.
        </p>
      </article>

      {projects.map((project) => (
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
