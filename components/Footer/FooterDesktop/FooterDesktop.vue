<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <NuxtLink to="/">
          <img
            :src="useImages(footer.logo.src)"
            :alt="footer.logo.alt"
            width="104"
            height="32"
            class="footer__logo"
          />
        </NuxtLink>
        <p class="text-small footer-description">
          <span v-for="text in footer.description">
            {{ text }}
          </span>
        </p>
        <div class="footer-icons">
          <a
            v-for="icon in footer.icons"
            :href="icon.link"
          >
            <img
              :src="useImages(icon.href)"
              :alt="icon.alt"
            />
          </a>
        </div>
      </div>
      <nav class="footer-nav">
        <ul
          v-for="nav in footer.nav"
          class="footer-nav__section"
        >
          <li class="text-default footer-nav__title">
            <span>
              {{ nav.name }}
            </span>
            <ul class="text-small footer-nav__subnav">
              <li v-for="subnav in nav.subnav">
                <NavLink
                  :data="subnav"
                  class="footer-nav__link"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="text-small footer-trademark">
      <span v-for="text in footer.trademark">
        {{ text }}
      </span>
      <div class="footer-notes">
        Icons by <a href="https://icons8.com">Icons8</a>,
        <a href="https://storyset.com/">Illustrations by Storyset</a>
      </div>
    </div>
    <div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { defaultContent: { footer } } = useContentStore();
</script>

<style scoped lang="scss" src="./FooterDesktop.scss" />