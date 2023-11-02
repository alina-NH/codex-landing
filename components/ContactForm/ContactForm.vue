<template>
  <section class="contact-form">
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
            {{ data.companyInput.label }}
          </span>
          <input
            type="text"
            :placeholder="data.companyInput.placeholder"
            :required="data.companyInput.required"
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
            {{ data.phoneInput.label }}
          </span>
          <input
            type="text"
            :placeholder="data.phoneInput.placeholder"
            :required="data.phoneInput.required"
            class="text-default"
          />
        </label>
      </div>
      <label class="contact-form__textarea">
        <span class="text-small">
          {{ data.messageInput.label }}
        </span>
        <textarea
          :placeholder="data.messageInput.placeholder"
          :required="data.messageInput.required"
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
</template>

<script setup lang="ts">
import Button from '../Button/Button.vue';
import { ButtonSize, ButtonStyle } from '../../types/default';

const { data } = defineProps<{
  data: object
}>();
</script>

<style scoped lang="scss" src="./ContactForm.scss" />