
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
          :class="{ 'header-nav__item--collapsed': nav.subnav }"
        >
          <NuxtLink
            :to="nav.link"
            class="header-nav__item-link"
          >
            
              {{ nav.name }}
            
          </NuxtLink>
          <!-- <ul
            v-if="nav.subnav"
            class="header-subnav"
          >
            <li
              v-for="subnav in nav.subnav"
              class="header-subnav__item"
            >
              <NuxtLink :to="subnav.link">
                <span class="heaser-subnav__item-link">
                  {{ subnav.name }}
                </span>
              </NuxtLink>
            </li>
          </ul> -->
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