<template>
  <div
    class="icon-box"
    :class="{ 'icon-box--link': data?.link }"
    :style="{
      'background': data?.background,
      'border-color': data?.background,
    }"
    @click="data?.link && openLink(data.link)"
  >
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