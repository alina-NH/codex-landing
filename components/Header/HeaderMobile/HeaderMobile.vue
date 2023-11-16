<template>
  <header class="header">
    <NuxtLink to="/">
      <img
        :src="useImages(header.logo.src)"
        :alt="header.logo.alt"
        width="104"
        height="32"
        class="header__logo"
      />
    </NuxtLink>
    <BurgerMenu
      :isMenuOpen="isMenuOpen"
      :toggleIsMenuOpen="toggleIsMenuOpen"
    />
    <div
      class="header-content"
      :class="{ 'header-content--open': isMenuOpen }"
    >
      <div>
        <ul class="header-nav">
          <li
            v-for="(nav, index) in header.nav"
            class="text-default-bold header-nav__item"
            :class="{ 'header-nav__item--open': openedSubnav === index }"
          >
            <div class="header-nav__item-title">
              <span
                v-if="nav.subnav"
                class="header-nav__item-link"
                :class="{ 'header-nav__item-link--collapsed': nav.subnav }"
              >
                {{ nav.name }}
              </span>
              <NavLink
                v-else
                :data="nav"
                class="header-nav__item-link"
                :class="{ 'header-nav__item-link--collapsed': nav.subnav }"
                @click="isMenuOpen = false"
              />
              <div
                v-if="nav?.subnav"
                class="header-nav__item-arrow"
                @click="toggleSubnav(index)"
              />
            </div>
            <ul
              v-if="nav.subnav"
              class="header-subnav"
            >
              <li
                v-for="subnav in nav.subnav"
                class="header-subnav__item"
              >
                <NavLink
                  :data="subnav"
                  class="text-small header-subnav__item-link"
                  @click="isMenuOpen = false"
                />
              </li>
            </ul>
          </li>
        </ul>
        <Button
          :style="ButtonStyle.outline"
          :size="ButtonSize.small"
          class="header__button"
          @click="scrollToElement"
          >
          {{ header.button.text }}
        </Button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { defaultContent: { header } } = useContentStore();

const isMenuOpen = ref<boolean>(false);
const openedSubnav = ref<number>(-1);

const toggleIsMenuOpen = () => isMenuOpen.value = !isMenuOpen.value;

const toggleSubnav = (index: number) => {
  openedSubnav.value = openedSubnav.value === index
    ? -1
    : index;
};

const scrollToElement = () => {
  isMenuOpen.value = false;
  scrollTo(`#${header.button.idToScroll}` as ScrollToOptions);
}

const handleMenuOpen = (isMenuOpen: boolean) => {
  if (!isMenuOpen) openedSubnav.value = -1;
  document.body.style.overflowY = isMenuOpen ? 'hidden' : 'auto';
};

watch(isMenuOpen, handleMenuOpen);
</script>

<style scoped lang="scss" src="./HeaderMobile.scss" />