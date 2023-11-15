<template>
  <a
    v-if="data?.external"
    :href="data?.link"
    rel="noindex, nofollow, noreferrer"
    target="_blank"
  >
  {{ data.name }}
  </a>
  <NuxtLink
    v-else
    :to="data?.link"
  >
    {{ data.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
const {
  data,
} = defineProps<{
  data: NavLink,
}>();
</script>