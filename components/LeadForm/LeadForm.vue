<template>
  <section
    class="lead-form"
    :class="{ 'lead-form--open': store.leadForm.isVisible }"
  >
    <div
      class="lead-form-card"
      :class="{ 'lead-form-card--short': !data?.background }"
    >
      <img
        v-if="data?.background"
        :src="useImages(data.background)"
        role="presentation"
        class="lead-form__background"
      />
      <div class="lead-form-body">
        <div
          @click="store.toggleLeadFormVisible(false)"
          class="lead-form__close"
        />
        <div class="lead-form-context">
          <h2
            v-if="data?.title"
            class="heading-3 lead-form__title"
          >
            {{ data.title }}
          </h2>
          <p
            v-if="data?.subtitle"
            class="text-default lead-form__subtitle"
          >
            {{ data.subtitle }}
          </p>
          <form
            novalidate
            @submit.prevent="submitForm"
          >
            <label
              class="base-input"
              :class="{ 'base-input--error': emailError }"
            >
              <input
                v-model.trim="emailInput"
                type="email"
                :placeholder="data.form.emailInput.placeholder"
                required
                class="text-default"
              />
              <p class="text-small">
                {{ emailError }}
              </p>
            </label>
            <Button
              :size="ButtonSize.small"
              :style="ButtonStyle.fill"
              :isLoading="isLoading"
            >
              {{ data.form.button }}
            </Button>
          </form>
          <p class="text-small lead-form__bottom-text">
            {{ data.bottomText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const {
  data,
  pageScrollEvent,
  browserBackEvent,
  percentToScroll,
} = defineProps<{
  data: LeadForm,
  pageScrollEvent?: boolean,
  browserBackEvent?: boolean,
  percentToScroll?: number,
}>();

const store = useContentStore();

const emailInput = ref('');
const emailError = ref('');
const isLoading = ref(false);

const isFormValid = () => {
  emailError.value = validateEmail(emailInput.value, true);

  return !emailError.value;
};

const submitForm = async () => {
  if (!isFormValid()) return;

  try {
    isLoading.value = true;

    const body = {
      pageTitle: store.pageContent.meta.title,
      email: {
        value: emailInput.value,
        required: true,
      },
      type: ContactFormType.lead,
    };

    const response = await $fetch('/email', {
      body,
      method: 'POST'
    });

    if (response) {
      store.setAlert({
        isVisible: true,
        type: AlertType.success,
        message: data.successMessage,
      });
      store.toggleLeadFormVisible(false);
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

const showLeadForm = (event: Event) => {
  if (event.type === LeadFormEvent.scroll && percentToScroll) {
    if (window.scrollY <= document.body.scrollHeight * (percentToScroll / 100)) return;
  }
  if (!store.leadForm.isInitiated) {
    store.toggleLeadFormVisible(true);
  }
};

const addLeadFormEvents = () => {
  pageScrollEvent && window.addEventListener('scroll', showLeadForm);
  if (browserBackEvent) {
    onBeforeRouteLeave((to, from, next) => {
      if (!store.leadForm.isInitiated) {
        store.toggleLeadFormVisible(true);
        next(false);
      }
      next(true);
    });
  }
};

const removeLeadFormEvents = () => {
  window.removeEventListener('scroll', showLeadForm);
};

onMounted(addLeadFormEvents);

onUnmounted(removeLeadFormEvents);
</script>

<style scoped lang="scss" src="./LeadForm.scss" />