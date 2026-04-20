import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <section class={styles.stack}>
      <article class={styles.panel}>
        <h1>Hi, I am Andrey.</h1>
        <p>
          I build products and tools that are fast, useful, and thoughtful. This
          space is my digital business card with a compact overview of who I am
          and what I build.
        </p>
      </article>
      <article class={styles.panel}>
        <h2>What you can find here</h2>
        <ul class={styles.pillList}>
          <li class={styles.listElement}>Career highlights</li>
          <li class={styles.listElement}>Technical strengths</li>
          <li class={styles.listElement}>Selected projects</li>
          <li class={styles.listElement}>Contact direction</li>
        </ul>
      </article>
    </section>
  )
}
