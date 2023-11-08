<template>
  <div class="person">
    <img
      :src="useImages(data.avatar)"
      :alt="data.name"
      class="person__avatar"
    />
    <div>
      <p class="text-default-bold">
        {{ data.name }}
      </p>
      <p class="text-small">
        {{ data.position }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data,
} = defineProps<{
  data: Person,
}>();
</script>

<style scoped lang="scss" src="./Person.scss" />