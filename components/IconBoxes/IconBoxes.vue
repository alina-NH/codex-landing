<template>
  <section
    :id="data?.id"
    class="icon-boxes"
    :class="{ 'icon-boxes--filtered': filterMode }"
  >
    <SectionTitle
      v-if="data?.title"
      :id="data?.id"
      :position="titlePosition"
      class="icon-boxes__title"
    >
      {{ data.title }}
    </SectionTitle>
    <div
      class="icon-boxes__body"
      :class="{ 'icon-boxes__body--titled': data.iconBoxes.some(iconBox => iconBox?.title) }"
    >
      <IconBox
        v-for="iconBox in data.iconBoxes"
        :data="iconBox"
        :background="background"
        :iconToTop="iconToTop"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
  background,
  filterMode,
  iconToTop,
} = defineProps<{
  data: IconBoxes,
  titlePosition?: keyof typeof SectionTitlePosition,
  background?: string,
  filterMode?: boolean,
  iconToTop?: boolean,
}>();
</script>

<style scoped lang="scss" src="./IconBoxes.scss" />