
<template>
  <header class="header">
    <NuxtLink to="/">
      <img
        :src="useImages(header.logo.src)"
        :alt="header.logo.alt"
      />
    </NuxtLink>
    <nav class="header-content">
      <ul class="header-nav">
        <li
          v-for="nav in header.nav"
          class="text-small-bold header-nav__item"
        >
          <NavLink
            :data="nav"
            class="header-nav__item-link"
            :class="{ 'header-nav__item-link--collapsed': nav.subnav }"
          />
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
    </nav>
  </header>
</template>

<script setup lang="ts">
const { defaultContent: { header } } = useContentStore();
</script>

<style scoped lang="scss" src="./Header.scss" />