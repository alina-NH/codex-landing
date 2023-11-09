<template>
  <footer class="footer">
    <NuxtLink to="/">
      <img
        :src="useImages(footer.logo.src)"
        :alt="footer.logo.alt"
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
    </div>
  </footer>
</template>

<script setup lang="ts">
const { defaultContent: { footer } } = useContentStore();
</script>

<style scoped lang="scss" src="./FooterMobile.scss" />