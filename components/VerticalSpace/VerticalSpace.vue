<template>
  <div
    class="vertical-space"
    :style="{ 'height': height }"
  />
</template>

<script setup lang="ts">
const { height } = defineProps<{
  height: string,
}>();
</script>

<style scoped lang="scss" src="./VerticalSpace.scss" />