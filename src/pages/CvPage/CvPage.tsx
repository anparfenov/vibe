import './CvPage.css'

const highlights = [
  'Product engineering across frontend and backend',
  'Performance-first architecture and tooling',
  'Clear communication with cross-functional teams',
]

export function CvPage() {
  return (
    <section class="stack">
      <article class="panel">
        <h1>CV</h1>
        <p>
          Engineer focused on shipping reliable experiences with clean UX and
          maintainable code.
        </p>
      </article>
      <article class="panel">
        <h2>Core highlights</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article class="panel">
        <h2>Skills</h2>
        <ul class="pill-list">
          <li>TypeScript</li>
          <li>Preact</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>CI/CD</li>
        </ul>
      </article>
    </section>
  )
}
