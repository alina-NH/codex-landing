<template>
  <div class="icon-boxes">
    <IconBox
      v-for="icon in data"
      :data="icon"
    />
  </div>
</template>

<script setup lang="ts">
const {
  data,
} = defineProps<{
  data: IconBox[],
}>();
</script>

<style scoped lang="scss" src="./IconBoxes.scss" />