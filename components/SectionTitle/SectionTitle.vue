<template>
  <h3
    class="heading-3 section-title"
    :class="{
      'section-title--center': position === SectionTitlePosition.center,
      'section-title--left': position === SectionTitlePosition.left,
    }"
  >
    <slot />
  </h3>
</template>

<script setup lang="ts">
const {
  position,
} = defineProps<{
  position?: keyof typeof SectionTitlePosition,
}>();
</script>

<style scoped lang="scss" src="./SectionTitle.scss" />