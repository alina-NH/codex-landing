<template>
  <section
    v-if="type === ContactFormType.extended"
    class="contact-form"
  >
    <form class="contact-form__body">
      <h3 class="heading-3 contact-form__title">
        {{ data.title }}
      </h3>
      <div class="contact-form__inline-block">
        <label class="contact-form__input">
          <span class="text-small">
            {{ data.nameInput.label }}
          </span>
          <input
            type="text"
            :placeholder="data.nameInput.placeholder"
            :required="data.nameInput.required"
            class="text-default"
          />
        </label>
        <label class="contact-form__input">
          <span class="text-small">
            {{ data?.companyInput?.label }}
          </span>
          <input
            type="text"
            :placeholder="data?.companyInput?.placeholder"
            :required="data?.companyInput?.required"
            class="text-default"
          />
        </label>
      </div>
      <div class="contact-form__inline-block">
        <label class="contact-form__input">
          <span class="text-small">
            {{ data.emailInput.label }}
          </span>
          <input
            type="text"
            :placeholder="data.emailInput.placeholder"
            :required="data.emailInput.required"
            class="text-default"
          />
        </label>
        <label class="contact-form__input">
          <span class="text-small">
            {{ data?.phoneInput?.label }}
          </span>
          <input
            type="text"
            :placeholder="data?.phoneInput?.placeholder"
            :required="data?.phoneInput?.required"
            class="text-default"
          />
        </label>
      </div>
      <label class="contact-form__textarea">
        <span class="text-small">
          {{ data?.messageInput?.label }}
        </span>
        <textarea
          :placeholder="data?.messageInput?.placeholder"
          :required="data?.messageInput?.required"
          class="text-default"
        />
      </label>
      <Button
        :size="ButtonSize.small"
        :style="ButtonStyle.fill"
        class="contact-form__button"
      >
        {{ data.button }}
      </Button>
    </form>
  </section>
  <section
    v-else
    class="contact-form contact-form--simplified"
    :class="{ 'contact-form--reversed': formToLeft }"
  >
    <ImageArticle
      :data="(data.imageArticle as ImageArticle)"
      :component="(component as keyof typeof ImageArticleComponent)"
      :textAlignment="textAlignment"
      :titleSize="titleSize"
      filterMode
    />
    <form class="contact-form__body contact-form__body--simplified">
      <h3 class="heading-3 contact-form__title">
        {{ data.title }}
      </h3>
      <label class="contact-form__input">
        <span class="text-small">
          {{ data.nameInput.label }}
        </span>
        <input
          type="text"
          :placeholder="data.nameInput.placeholder"
          :required="data.nameInput.required"
          class="text-default"
        />
      </label>
      <label class="contact-form__input">
        <span class="text-small">
          {{ data.emailInput.label }}
        </span>
        <input
          type="text"
          :placeholder="data.emailInput.placeholder"
          :required="data.emailInput.required"
          class="text-default"
        />
      </label>
      <Button
        :size="ButtonSize.large"
        :style="ButtonStyle.fill"
        class="contact-form__button contact-form__button--stretch"
      >
        {{ data.button }}
      </Button>
    </form>
  </section>
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';

const {
  data,
  type,
  component,
  textAlignment,
  titleSize,
  formToLeft,
} = defineProps<{
  data: ContactForm,
  type: keyof typeof ContactFormType,
  component?: keyof typeof ImageArticleComponent,
  textAlignment?: keyof typeof Alignment,
  titleSize?: keyof typeof TitleSize,
  formToLeft?: boolean,
}>();
</script>

<style scoped lang="scss" src="./ContactForm.scss" />