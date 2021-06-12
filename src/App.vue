<template>
  <section class="app-container">
    <TheSideBar />
    <section>
      <router-view />
    </section>
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

<style>
html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  display: grid;
  grid-template-columns: 48px auto;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
