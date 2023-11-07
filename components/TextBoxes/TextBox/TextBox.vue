<template>
  <div class="textbox">
    <img
      v-if="data?.icon"
      :src="useImages(data.icon)"
      :alt="data.title"
      class="textbox__icon"
    >
    <h4 class="heading-4 textbox__title">
      {{ data.title }}
    </h4>
    <p class="text-default-bold textbox__subtitle">
      {{ data.subtitle }}
    </p>
    <p class="text-default">
      {{ data.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
const {
  data,
} = defineProps<{
  data: TextBox,
}>();
</script>

<style scoped lang="scss" src="./TextBox.scss" />