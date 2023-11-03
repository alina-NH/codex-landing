<template>
  <section
    class="text-boxes"
    :class="{ 'text-boxes--filtered': filterMode }"
  >
    <SectionTitle
      v-if="hasTitle"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div
      class="text-boxes__body"
      :class="{ 'text-boxes__body--short': !withIcon }"
    >
      <TextBox
        v-for="textBoxData in data.textBoxes"
        :data="textBoxData"
        :withIcon="withIcon"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
  withIcon,
  hasTitle,
  filterMode
} = defineProps<{
  data: TextBoxes,
  titlePosition?: keyof typeof SectionTitlePosition,
  withIcon?: boolean,
  hasTitle?: boolean,
  filterMode?: boolean,
}>();
</script>

<style scoped lang="scss" src="./TextBoxes.scss" />