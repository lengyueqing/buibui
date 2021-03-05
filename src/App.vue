<template>
  <div id="app">
    <Comics />
  </div>
</template>

<script>
import Comics from './views/Comics'
export default {
  name: 'App',
  components: {
    Comics,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
