<template>
  <div
    class="text-small-bold alert"
    :class="{
      'alert--visible': alert.isVisible,
      'alert--error': alert.type === AlertType.error,
      'alert--success': alert.type === AlertType.success,
    }"
  >
    {{ alert.message }}
  </div>
</template>

<script setup lang="ts">
const { alert } = useContentStore();
</script>

<style scoped lang="scss" src="./Alert.scss" />