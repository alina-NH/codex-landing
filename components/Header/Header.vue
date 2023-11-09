
<template>
  <HeaderMobile v-if="isMobile() || isTablet()"/>
  <HeaderDesktop v-else />
</template>