<template>
  <nav class="container">
    <router-link to="/"><img src="../assets/home.svg" alt="Home icon"/></router-link>
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
