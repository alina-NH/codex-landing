<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <img
          :src="useImages(footer.logo.src)"
          :alt="footer.logo.alt"
        />
        <p class="text-small footer-description">
          <span v-for="text in footer.description">
            {{ text }}
          </span>
        </p>
      </div>
      <div class="footer-nav">
        <div
          v-for="nav in footer.nav"
          class="footer-nav__section"
        >
          <NuxtLink
            :to="nav.link"
            class="text-default footer-nav__title"
          >
            {{ nav.name }}
          </NuxtLink>
          <div class="text-small footer-nav__subnav">
            <NuxtLink
              v-for="subnav in nav.subnav"
              :to="subnav.link"
              class="footer-nav__link"
            >
              {{ subnav.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="text-small footer-trademark">
      <span v-for="text in footer.trademark">
        {{ text }}
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import useContentStore from '../store/index';

const { defaultContent: { footer } } = useContentStore();
</script>

<style scoped lang="scss" src="./Footer.scss" />