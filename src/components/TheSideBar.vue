<template>
  <nav class="container">
    <router-link to="/">
      <v-icon>mdi-home</v-icon>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'TheSideBar'
};
</script>

<style lang="scss">
@import '@/style/colors.scss';

.container {
  background-color: $navbar-grey;
}
</style>
