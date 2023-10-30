<template>
  <button
    class="text-small-bold button"
    :class="{
      'button--filled': style === ButtonStyle.fill,
      'button--outlined': style === ButtonStyle.outline,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonStyle } from '../../types/default.ts';

const { style } = defineProps<{
  style: ButtonStyle,
}>();
</script>

<style scoped lang="scss" src="./Button.scss" />