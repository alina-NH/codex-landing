
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
          <NuxtLink
            :to="nav.link"
            class="header-nav__item-link"
            :class="{ 'header-nav__item-link--collapsed': nav.subnav }"
          >
            {{ nav.name }}
          </NuxtLink>
          <ul
            v-if="nav.subnav"
            class="header-subnav"
          >
            <li
              v-for="subnav in nav.subnav"
              class="header-subnav__item"
            >
              <NuxtLink
                :to="subnav.link"
                class="header-subnav__item-link"
              >
                {{ subnav.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import useContentStore from '../store/index';

const { defaultContent: { header } } = useContentStore();
</script>

<style scoped lang="scss" src="./Header.scss" />