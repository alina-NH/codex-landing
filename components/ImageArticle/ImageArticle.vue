<template>
  <section
    :id="data?.id"
    class="image-article"
    :class="{
      'image-article--reversed': imageToRight,
      'image-article--left': articleAlignment === Alignment.left,
      'image-article--right': articleAlignment === Alignment.right,
      'image-article--center': articleAlignment === Alignment.center,
      'image-article--filtered': filterMode,
    }"
    :style="{ 'color': data?.colors?.text }"
  >
    <img
      v-if="data?.image"
      :src="useImages(data.image)"
      role="background"
      class="image-article__background"
    />
    <article
      class="image-article__body"
      :class="{
        'image-article__body--left': textAlignment === Alignment.left,
        'image-article__body--right': textAlignment === Alignment.right,
        'image-article__body--center': textAlignment === Alignment.center,
      }"
    >
      <h2
        v-if="data?.title"
        class="heading-3 image-article__title"
        :class="{
        'image-article__title--small': titleSize === TitleSize.small,
        'image-article__title--large': titleSize === TitleSize.large,
      }"
      >
        <a
          v-if="data?.id"
          :href="`#${data.id}`"
        >
          {{ data.title }}
        </a>
        <span v-else>
          {{ data.title }}
        </span>
      </h2>
      <p
        v-if="data?.subtitle"
        class="text-default-bold image-article__subtitle"
        :style="{ 'color': data?.colors?.subtitle }"
      >
        {{ data.subtitle }}
      </p>
      <ul
        v-if="component === ImageArticleComponent.list"
        class="text-default image-article__list"
      >
        <li v-for="item in data.list">
          {{ item }}
        </li>
      </ul>
      <p
        v-if="component === ImageArticleComponent.text"
        class="text-default image-article__text"
      >
        {{ data.text }}
      </p>
      <div
        v-if="data?.bottomText"
        class="image-article__bottom-text"
        :style="{ 'color': data?.colors?.bottomText }"
      >
        <img
          v-if="data.bottomText.icon"
          :src="useImages(data.bottomText.icon)"
          role="background"
        />
        <span class="heading-4">
          {{ data.bottomText.text }}
        </span>
      </div>
      <Button
        v-if="data?.button"
        :style="buttonStyle || ButtonStyle.fill"
        class="image-article__button"
        :class="{
          'image-article__button--left': buttonAlignment === FlexAlignment.left,
          'image-article__button--right': buttonAlignment === FlexAlignment.right,
          'image-article__button--center': buttonAlignment === FlexAlignment.center,
          'image-article__button--stretch': buttonAlignment === FlexAlignment.stretch,
        }"
        @click="handleButtonClick"
      >
        {{ data.button.text }}
      </Button>
    </article>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  buttonStyle,
  imageToRight,
  component,
  textAlignment,
  articleAlignment,
  buttonAlignment,
  titleSize,
  filterMode,
} = defineProps<{
  data: ImageArticle,
  buttonStyle?: keyof typeof ButtonStyle,
  imageToRight?: boolean,
  component: keyof typeof ImageArticleComponent,
  textAlignment?: keyof typeof Alignment,
  articleAlignment?: keyof typeof Alignment,
  buttonAlignment?: keyof typeof FlexAlignment,
  titleSize?: keyof typeof TitleSize,
  filterMode?: boolean,
}>();

const handleButtonClick = () => {
  data.button?.idToScroll && scrollTo(`#${data.button?.idToScroll}` as ScrollToOptions);
  data.button?.pageToRedirect && navigateTo(data.button?.pageToRedirect);
};
</script>

<style scoped lang="scss" src="./ImageArticle.scss" />