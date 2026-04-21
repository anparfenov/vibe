<script setup lang="ts">
import { useTranslations } from '../i18n/i18n'

const t = useTranslations()
</script>

<template>
  <section :class="$style.panel">
    <h1>{{ t.notFoundPage.heading }}</h1>
    <p>{{ t.notFoundPage.body }}</p>
  </section>
</template>

<style module>
.panel {
  padding: 1.1rem;
  border: 1px solid var(--line);
  border-radius: 1rem;
  background: var(--surface-overlay);
}
</style>
