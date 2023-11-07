<template>
  <div
    class="textbox"
    :class="{
      'textbox--left': textAlignment === Alignment.left,
      'textbox--right': textAlignment === Alignment.right,
      'textbox--center': textAlignment === Alignment.center,
    }"
  >
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
  textAlignment,
} = defineProps<{
  data: TextBox,
  textAlignment?: keyof typeof Alignment,
}>();
</script>

<style scoped lang="scss" src="./TextBox.scss" />