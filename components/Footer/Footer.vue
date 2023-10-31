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
      <nav class="footer-nav">
        <ul
          v-for="nav in footer.nav"
          class="footer-nav__section"
        >
          <li class="text-default footer-nav__title">
            <NavLink :data="nav" />
          </li>
          <ul class="text-small footer-nav__subnav">
            <li v-for="subnav in nav.subnav">
              <NavLink
                :data="subnav"
                class="footer-nav__link"
              />
            </li>
          </ul>
        </ul>
      </nav>
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