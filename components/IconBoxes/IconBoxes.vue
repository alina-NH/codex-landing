<template>
  <div class="icon-boxes">
    <IconBox
      v-for="icon in data"
      :data="icon"
      :background="background"
    />
  </div>
</template>

<script setup lang="ts">
const {
  data,
  background,
} = defineProps<{
  data: IconBox[],
  background?: string,
}>();
</script>

<style scoped lang="scss" src="./IconBoxes.scss" />