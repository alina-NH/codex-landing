<template>
  <div
    class="image-box"
    :class="{ 'image-box--link': data?.link || data?.leadFormIdToTrigger }"
    @click="handleButtonClick"
  >
    <img
      :src="useImages(data.background)"
      :alt="data.title"
      class="image-box__background"
    />
    <div class="image-box__body">
      <h4 class="heading-4 image-box__title">
        {{ data.title }}
      </h4>
      <p
        v-if="data?.description"
        class="text-default image-box__description"
      >
        {{ data.description }}
      </p>
      <p
        v-if="data?.testimonial"
        class="text-default image-box__testimonial"
      >
        {{ data.testimonial }}
      </p>
      <Person
        v-if="data.author"
        :data="data.author"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  data,
} = defineProps<{
  data: ImageBox,
}>();

const store = useContentStore();

const handleButtonClick = () => {
  data?.link && openLink(data.link);
  data.leadFormIdToTrigger && store.toggleLeadFormVisible(true, data.leadFormIdToTrigger);
};
</script>

<style scoped lang="scss" src="./ImageBox.scss" />