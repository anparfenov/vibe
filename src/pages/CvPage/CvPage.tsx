import styles from './CvPage.module.css'

const highlights = [
  'Product engineering across frontend and backend',
  'Performance-first architecture and tooling',
  'Clear communication with cross-functional teams',
]

export function CvPage() {
  return (
    <section class={styles.stack}>
      <article class={styles.panel}>
        <p>
          Engineer focused on shipping reliable experiences with clean UX and
          maintainable code.
        </p>
      </article>
      <article class={styles.panel}>
        <h2>Core highlights</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article class={styles.panel}>
        <h2>Skills</h2>
        <ul class={styles.pillList}>
          <li class={styles.listElement}>TypeScript</li>
          <li class={styles.listElement}>Preact</li>
          <li class={styles.listElement}>Node.js</li>
          <li class={styles.listElement}>PostgreSQL</li>
          <li class={styles.listElement}>CI/CD</li>
        </ul>
      </article>
    </section>
  )
}
