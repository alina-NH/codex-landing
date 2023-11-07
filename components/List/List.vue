<template>
  <ul class="list">
    <li
      v-for="item in data"
      class="list-item"
    >
      <img
        v-if="item?.icon"
        :src="useImages(item.icon)"
        role="background"
        class="list-item__icon"
      />
      <div class="list-item__body">
        <h4 class="heading-4">
          {{ item.title }}
        </h4>
        <p class="text-default">
          {{ item.text }}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
const {
  data
} = defineProps<{
  data: ListItem[],
}>();
</script>

<style scoped lang="scss" src="./List.scss" />