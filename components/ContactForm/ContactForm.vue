<template>
  <section
    v-if="type === ContactFormType.extended"
    class="contact-form"
    :id="data.id"
  >
    <form
      class="contact-form__body"
      novalidate
      @submit.prevent="submitForm"
    >
      <h3 class="heading-3 contact-form__title">
        <a :href="`#${data.id}`">
          {{ data.title }}
        </a>
      </h3>
      <div class="contact-form__inline-block">
        <label
          class="base-input"
          :class="{ 'base-input--error': nameError }"
        >
          <span class="text-small">
            {{ data.nameInput.label }}
          </span>
          <input
            v-model.trim="nameInput"
            type="text"
            :placeholder="data.nameInput.placeholder"
            :required="data.nameInput.required"
            class="text-default"
          />
          <p class="text-small">
            {{ nameError }}
          </p>
        </label>
        <label
          class="base-input"
          :class="{ 'base-input--error': companyError }"
        >
          <span class="text-small">
            {{ data?.companyInput?.label }}
          </span>
          <input
            v-model.trim="companyInput"
            type="text"
            :placeholder="data?.companyInput?.placeholder"
            :required="data?.companyInput?.required"
            class="text-default"
          />
          <p class="text-small">
            {{ companyError }}
          </p>
        </label>
      </div>
      <div class="contact-form__inline-block">
        <label
          class="base-input"
          :class="{ 'base-input--error': emailError }"
        >
          <span class="text-small">
            {{ data.emailInput.label }}
          </span>
          <input
            v-model.trim="emailInput"
            type="email"
            :placeholder="data.emailInput.placeholder"
            :required="data.emailInput.required"
            class="text-default"
          />
          <p class="text-small">
            {{ emailError }}
          </p>
        </label>
        <label
          class="base-input"
          :class="{ 'base-input--error': phoneError }"
        >
          <span class="text-small">
            {{ data?.phoneInput?.label }}
          </span>
          <input
            v-model.trim="phoneInput"
            type="text"
            :placeholder="data?.phoneInput?.placeholder"
            :required="data?.phoneInput?.required"
            class="text-default"
          />
          <p class="text-small">
            {{ phoneError }}
          </p>
        </label>
      </div>
      <label
          class="contact-form__textarea"
          :class="{ 'contact-form__textarea--error': messageError }"
        >
        <span class="text-small">
          {{ data?.messageInput?.label }}
        </span>
        <textarea
          v-model.trim="messageInput"
          :placeholder="data?.messageInput?.placeholder"
          :required="data?.messageInput?.required"
          class="text-default"
        />
        <p class="text-small">
          {{ messageError }}
        </p>
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
    <form
      novalidate
      class="contact-form__body contact-form__body--simplified"
      @submit.prevent="submitForm"
    >
      <h3 class="heading-3 contact-form__title">
        {{ data.title }}
      </h3>
      <label
        class="base-input"
        :class="{ 'base-input--error': nameError }"
      >
        <span class="text-small">
          {{ data.nameInput.label }}
        </span>
        <input
          v-model.trim="nameInput"
          type="text"
          :placeholder="data.nameInput.placeholder"
          :required="data.nameInput.required"
          class="text-default"
        />
        <p class="text-small">
          {{ nameError }}
        </p>
      </label>
      <label
        class="base-input"
        :class="{ 'base-input--error': emailError }"
      >
        <span class="text-small">
          {{ data.emailInput.label }}
        </span>
        <input
          v-model.trim="emailInput"
          type="email"
          :placeholder="data.emailInput.placeholder"
          :required="data.emailInput.required"
          class="text-default"
        />
        <p class="text-small">
          {{ emailError }}
        </p>
      </label>
      <Button
        :size="ButtonSize.large"
        :style="ButtonStyle.fill"
        :isLoading="isLoading"
        class="contact-form__button contact-form__button--stretch"
      >
        {{ data.button }}
      </Button>
    </form>
  </section>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const store = useContentStore();

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

const nameInput = ref('');
const nameError = ref('');

const companyInput = ref('');
const companyError = ref('');

const emailInput = ref('');
const emailError = ref('');

const phoneInput = ref('');
const phoneError = ref('');

const messageInput = ref('');
const messageError = ref('');

const isLoading = ref(false);

const submitForm = async () => {
  if (!isFormValid()) return;

  const body = getBody();

  try {
    isLoading.value = true;

    const response = await $fetch('/email', {
      body,
      method: 'POST'
    });

    if (response) {
      await navigateTo({ path: '/thank-you' });
    }
  } catch (error) {
    store.setAlert({
      isVisible: true,
      type: AlertType.error,
      message: (error as NuxtError).statusMessage as string,
    });
  } finally {
    isLoading.value = false;
  }
};

const isFormValid = () => {
  nameError.value = validateName(
    nameInput.value,
    data.nameInput.required
  );

  emailError.value = validateEmail(
    emailInput.value,
    data.emailInput.required
  );

  if (data.companyInput) {
    companyError.value = validateCompany(
      companyInput.value,
      data.companyInput.required
    );
  }

  if (data.phoneInput) {
    phoneError.value = validatePhone(
      phoneInput.value,
      data.phoneInput.required
    );
  }

  if (data.messageInput) {
    messageError.value = validateMessage(
      messageInput.value,
      data.messageInput.required
    );
  }

  return !nameError.value
    && !companyError.value
    && !emailError.value
    && !phoneError.value
    && !messageError.value;
};

const getBody = () => {
  return type === ContactFormType.simplified
    ? {
      name: {
        value: nameInput.value,
        required: data.nameInput.required,
      },
      email: {
        value: emailInput.value,
        required: data.emailInput.required,
      },
      pageTitle: store.pageContent.meta.title,
      type,
    }
    : {
      name: {
        value: nameInput.value,
        required: data.nameInput.required,
      },
      company: {
        value: companyInput.value,
        required: data.companyInput?.required,
      },
      email: {
        value: emailInput.value,
        required: data.emailInput.required,
      },
      phone: {
        value: phoneInput.value,
        required: data.phoneInput?.required
      },
      message: {
        value: messageInput.value,
        required: data.messageInput?.required
      },
      pageTitle: store.pageContent.meta.title,
      type,
    }
};
</script>

<style scoped lang="scss" src="./ContactForm.scss" />