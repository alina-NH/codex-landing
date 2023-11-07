<template>
  <section
    class="welcome"
    :class="{ 'welcome--reversed': imageToLeft }"
  >
    <div class="welcome__section">
      <h1
        class="heading-2 welcome__title"
        :style="{ 'color': data?.colors?.title }"
      >
        <span v-for="titleLine in data.title">
          {{ titleLine }}
        </span>
      </h1>
      <p
        v-if="data.subtitle"
        class="text-default welcome__subtitle"
        :style="{ 'color': data?.colors?.subtitle }"
      >
        {{ data.subtitle }}
      </p>
      <Button :size="ButtonSize.large" :style="ButtonStyle.fill">
        {{ data.button }}
      </Button>
    </div>
    <div class="welcome__section">
      <img
        :src="useImages(data.background)"
        role="background"
        class="welcome__background"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "../Button/Button.vue";
import { ButtonSize, ButtonStyle } from "../../types/default";

const { data } = defineProps<{
  data: Welcome,
  imageToLeft?: boolean,
}>();
</script>

<style scoped lang="scss" src="./Welcome.scss" />
