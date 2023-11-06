<template>
  <section class="squares-timeline">
    <SectionTitle
      v-if="hasTitle"
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
          :hasButton="!!(item as ImageArticle)?.button"
          :hasSubtitle="!!(item as ImageArticle)?.subtitle"
          :textAlignment="Alignment.left"
          :buttonAlignment="FlexAlignment.left"
          :titleSize="TitleSize.large"
          :hasBottomText="!!(item as ImageArticle)?.bottomText"
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
  hasTitle,
  titlePosition,
} = defineProps<{
  data: SquaresTimeline,
  hasTitle?: boolean,
  titlePosition?: keyof typeof SectionTitlePosition
}>();
</script>

<style scoped lang="scss" src="./SquaresTimeline.scss" />