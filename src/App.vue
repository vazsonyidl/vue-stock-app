<template>
  <TheSideBar />
  <section class="content">
    <router-view />
  </section>
</template>

<script>
import TheSideBar from '@/components/TheSideBar';

export default {
  name: 'App',
  components: {
    TheSideBar
  }
};
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 48px auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
