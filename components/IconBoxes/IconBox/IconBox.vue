<template>
  <div class="icon-box">
    <img
      :src="useImages(data.icon)"
      :alt="data.alt"
      class="icon-box__icon"
    />
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps<{
  data: IconBox,
}>();
</script>

<style scoped lang="scss" src="./IconBox.scss" />