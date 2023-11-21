<template>
  <footer class="footer">
    <NuxtLink to="/">
      <img
        :src="useImages(footer.logo.src)"
        :alt="footer.logo.alt"
        width="104"
        height="32"
        class="footer__logo"
      />
    </NuxtLink>
    <p class="text-small footer__description">
      <span v-for="text in footer.description">
        {{ text }}
      </span>
    </p>
    <div class="footer__icons">
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
    <div class="text-small footer__trademark">
      <span v-for="text in footer.trademark">
        {{ text }}
      </span>
      <div class="footer-notes">
        Icons by <a href="https://icons8.com" rel="noindex, nofollow, noreferrer">Icons8</a>,
        Illustrations by <a href="https://storyset.com/" rel="noindex, nofollow, noreferrer">Storyset</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { defaultContent: { footer } } = useContentStore();
</script>

<style scoped lang="scss" src="./FooterMobile.scss" />