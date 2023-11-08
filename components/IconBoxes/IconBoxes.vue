<template>
  <div class="icon-boxes">
    <SectionTitle
      v-if="data.title"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div class="icon-boxes__body">
      <IconBox
        v-for="iconBox in data.iconBoxes"
        :data="iconBox"
        :background="background"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
  background,
} = defineProps<{
  data: IconBoxes,
  titlePosition?: keyof typeof SectionTitlePosition,
  background?: string,
}>();
</script>

<style scoped lang="scss" src="./IconBoxes.scss" />