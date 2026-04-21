<script setup lang="ts">
import { useTranslations } from './i18n/i18n'

const t = useTranslations()
</script>

<template>
  <div :class="$style.siteShell">
    <header :class="$style.siteHeader">
      <p :class="$style.eyebrow">{{ t.app.eyebrow }}</p>
      <nav :class="$style.siteNav" aria-label="Primary">
        <RouterLink :class="$style.navLink" to="/">{{ t.nav.home }}</RouterLink>
        <RouterLink :class="$style.navLink" to="/cv">{{ t.nav.cv }}</RouterLink>
        <RouterLink :class="$style.navLink" to="/projects">{{ t.nav.projects }}</RouterLink>
      </nav>
    </header>

    <main :class="$style.siteMain">
      <RouterView />
    </main>

    <footer :class="$style.siteFooter">
      <p>&copy; {{ new Date().getFullYear() }} {{ t.app.footer }}</p>
    </footer>
  </div>
</template>

<style module>
.siteShell {
  width: min(960px, 92vw);
  margin: 3rem auto;
  background: color-mix(in srgb, var(--card-bg) 88%, var(--mix-white) 12%);
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  box-shadow: 0 12px 40px var(--shadow-soft);
  overflow: hidden;
}

.siteHeader,
.siteFooter {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--line);
}

.siteFooter {
  border-bottom: 0;
  border-top: 1px solid var(--line);
  color: var(--text-soft);
  font-size: 0.95rem;
}

.eyebrow {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-soft);
}

.siteNav {
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.navLink {
  text-decoration: none;
  color: var(--text-strong);
  background: var(--highlight-soft);
  border: 1px solid transparent;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  transition: transform 120ms ease, border-color 120ms ease;
}

.navLink:hover {
  transform: translateY(-1px);
  border-color: var(--highlight);
}

.siteMain {
  padding: 1.75rem 1.5rem;
}

@media (max-width: 700px) {
  .siteShell {
    margin: 1rem auto;
    width: 94vw;
  }

  .siteHeader,
  .siteMain,
  .siteFooter {
    padding-inline: 1rem;
  }
}
</style>
