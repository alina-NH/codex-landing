<template>
  <div class="person">
    <img
      :src="useImages(data.avatar)"
      :alt="data.name"
      class="person-avatar"
    />
    <div class="person-data">
      <p class="text-default-bold person-data__name">
        {{ data.name }}
      </p>
      <p class="text-small person-data__position">
        {{ data.position }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps<{
  data: object
}>();
</script>

<style scoped lang="scss" src="./Person.scss" />