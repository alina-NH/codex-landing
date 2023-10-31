<template>
  <a
    v-if="data.external"
    :href="data.link"
    target="_blank"
  >
  {{ data.name }}
  </a>
  <NuxtLink
    v-else
    :to="data.link"
  >
    {{ data.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
const { data } = defineProps<{
  data: object
}>();
</script>