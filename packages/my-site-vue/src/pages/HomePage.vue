<script setup lang="ts">
import { useTranslations } from '../i18n/i18n'

const t = useTranslations()
</script>

<template>
  <section :class="$style.stack">
    <article :class="$style.panel">
      <h1>{{ t.homePage.heading }}</h1>
      <p>{{ t.homePage.intro }}</p>
    </article>
    <article :class="$style.panel">
      <h2>{{ t.homePage.findHereHeading }}</h2>
      <ul :class="$style.pillList">
        <li v-for="item in t.homePage.findHereItems" :key="item" :class="$style.listElement">
          {{ item }}
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
