<template>
  <button
    class="text-small-bold button"
    :class="{
      'button--filled': style === ButtonStyle.fill,
      'button--outlined': style === ButtonStyle.outline,
      'button--large': size === ButtonSize.large
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const { style } = defineProps<{
  style: keyof typeof ButtonStyle,
  size?: keyof typeof ButtonSize,
}>();
</script>

<style scoped lang="scss" src="./Button.scss" />