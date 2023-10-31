<template>
  <section class="welcome">
    <div class="welcome__section">
      <h1 class="heading-1 welcome__title">
        <span v-for="titleLine in data.title">
          {{ titleLine }}
        </span>
      </h1>
      <Button
        :size="ButtonSize.large"
        :style="ButtonStyle.fill"
      >
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
import Button from '../Button/Button.vue';
import { ButtonSize, ButtonStyle } from '../../types/default';

const { data } = defineProps<{
  data: object
}>();
</script>

<style scoped lang="scss" src="./Welcome.scss" />