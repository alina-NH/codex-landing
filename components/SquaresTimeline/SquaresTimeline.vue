<template>
  <section class="squares-timeline">
    <SectionTitle
      v-if="data.title"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div class="squares-timeline__body">
      <div
        v-for="item in data.items"
        class="squares-timeline__item"
        :style="{ background: (item as ImageArticle).colors?.background }"
      >
        <ImageArticle
          v-if="item.type === SquaresTimelineType.text"
          :data="(item as ImageArticle)"
          :buttonStyle="ButtonStyle.fill"
          :component="ImageArticleComponent.text"
          :textAlignment="Alignment.left"
          :buttonAlignment="FlexAlignment.left"
          :titleSize="TitleSize.large"
          filterMode
        />
        <List
          v-if="item.type === SquaresTimelineType.list"
          :data="((item as List).list)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
} = defineProps<{
  data: SquaresTimeline,
  titlePosition?: keyof typeof SectionTitlePosition
}>();
</script>

<style scoped lang="scss" src="./SquaresTimeline.scss" />