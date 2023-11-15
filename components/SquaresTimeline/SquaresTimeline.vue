<template>
  <section
    :id="data.id"
    class="squares-timeline"
  >
    <SectionTitle
      v-if="data?.title"
      :id="data.id"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <div class="squares-timeline__body">
      <div
        v-for="item in content"
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
  titlePosition?: keyof typeof SectionTitlePosition,
}>();

const content = ref(data.items);

onMounted(() => {
  if (isMobile()) {
    let i = 3;
    while (i <= content.value.length) {
      [content.value[i - 1], content.value[i]] = [content.value[i], content.value[i - 1]]
      i += 4;
    }
  }
});
</script>

<style scoped lang="scss" src="./SquaresTimeline.scss" />