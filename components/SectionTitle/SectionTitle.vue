<template>
  <div
    class="section-title"
    :class="{
      'section-title--center': position === SectionTitlePosition.center,
      'section-title--left': position === SectionTitlePosition.left,
    }"
  >
    <h3 class="heading-3">
      <a
        v-if="id"
        :href="`#${id}`"
      >
        <slot />
      </a>
      <span v-else>
        <slot />
      </span>
    </h3>
    <div
      class="text-default section-subtitle"
      :class="{
        'section-subtitle--center': position === SectionTitlePosition.center,
        'section-subtitle--left': position === SectionTitlePosition.left,
      }"
    >
      <p>
        <slot name="subtitle" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  id,
  position,
} = defineProps<{
  id?: string,
  position?: keyof typeof SectionTitlePosition,
}>();
</script>

<style scoped lang="scss" src="./SectionTitle.scss" />