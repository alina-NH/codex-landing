<template>
  <FooterMobile v-if="isMobile() || isTablet()"/>
  <FooterDesktop v-else />
</template>