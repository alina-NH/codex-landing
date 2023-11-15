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
    <span
      v-if="isLoading"
      class="button__loader"
    />
  </button>
</template>

<script setup lang="ts">
const {
  style,
  size,
  isLoading,
} = defineProps<{
  style: keyof typeof ButtonStyle,
  size?: keyof typeof ButtonSize,
  isLoading?: boolean,
}>();
</script>

<style scoped lang="scss" src="./Button.scss" />