<script setup lang="ts">
import { useTranslations } from '../i18n/i18n'

const t = useTranslations()
</script>

<template>
  <section :class="$style.stack">
    <article :class="$style.panel">
      <h1>{{ t.projectsPage.heading }}</h1>
      <p>{{ t.projectsPage.intro }}</p>
    </article>

    <article v-for="project in t.projectsPage.projects" :key="project.name" :class="$style.panel">
      <h2>{{ project.name }}</h2>
      <p>{{ project.summary }}</p>
      <ul :class="$style.pillList">
        <li v-for="tech in project.stack" :key="tech" :class="$style.listElement">
          {{ tech }}
        </li>
      </ul>
    </article>
  </section>
</template>

<style module>
.panel {
  padding: 1.1rem;
  border: 1px solid var(--line);
  border-radius: 1rem;
  background: var(--surface-overlay);
}

.stack {
  display: grid;
  gap: 1rem;
}

.pillList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.listElement {
  background: var(--pill-bg);
  color: var(--text-pill);
  border-radius: 999px;
  padding: 0.25rem 0.65rem;
  font-size: 0.9rem;
}
</style>
