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
    <nav class="header-content">
      <div>
        <ul class="header-nav">
          <li
            v-for="nav in header.nav"
            class="text-small-bold header-nav__item"
          >
            <span
              class="header-nav__item-link"
              :class="{ 'header-nav__item-link--collapsed': nav.subnav }"
            >
              {{ nav.name }}
            </span>
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
                  class="header-subnav__item-link"
                />
              </li>
            </ul>
          </li>
        </ul>
        <Button
          :style="ButtonStyle.outline"
          :size="ButtonSize.small"
          @click="scrollTo(`#${header.button.idToScroll}`)"
        >
          {{ header.button.text }}
        </Button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { defaultContent: { header } } = useContentStore();
</script>

<style scoped lang="scss" src="./HeaderDesktop.scss" />