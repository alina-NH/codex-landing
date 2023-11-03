<template>
  <section class="square-timeline">
    <SectionTitle
      v-if="hasTitle"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div class="square-timeline__body">
      
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  hasTitle,
  titlePosition,
} = defineProps<{
  data: SquaresTimeline,
  hasTitle?: boolean,
  titlePosition?: SectionTitlePosition
}>();
</script>

<style scoped lang="scss" src="./SquaresTimeline.scss" />