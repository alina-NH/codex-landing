<template>
  <section
    class="text-boxes"
    :class="{ 'text-boxes--filtered': filterMode }"
  >
    <SectionTitle
      v-if="data.title"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div
      class="text-boxes__body"
      :class="{ 'text-boxes__body--short': !data.textBoxes[0]?.icon }"
    >
      <TextBox
        v-for="textBoxData in data.textBoxes"
        :data="textBoxData"
        :text-alignment="textAlignment"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
  filterMode,
  textAlignment,
} = defineProps<{
  data: TextBoxes,
  titlePosition?: keyof typeof SectionTitlePosition,
  filterMode?: boolean,
  textAlignment?: keyof typeof Alignment,
}>();
</script>

<style scoped lang="scss" src="./TextBoxes.scss" />