<template>
  <div class="burger-menu">
    <div
      class="burger-menu__icon"
      :class="{ 'burger-menu__icon--open': isMenuOpen }"
      @click="toggleIsMenuOpen"
    >
      <span class="burger-menu__line" />
      <span class="burger-menu__line" />
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  isMenuOpen,
  toggleIsMenuOpen,
} = defineProps<{
  isMenuOpen: boolean,
  toggleIsMenuOpen: () => void,
}>();
</script>

<style scoped lang="scss" src="./BurgerMenu.scss" />