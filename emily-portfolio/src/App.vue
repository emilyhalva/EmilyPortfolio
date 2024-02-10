<template>
   <v-app>
    <v-main class="mainBackground">
      <NavBar/>
      <Home/>
      <Collection/>
      <Resources/>
      <About/>
    </v-main>
  </v-app>
</template>

<script setup>
  import NavBar from './components/Header.vue';
  import About from './components/About.vue';
  import Resources from './components/Resources.vue';
  import Collection from './components/Collection.vue';
  import Home from './components/Home.vue';
</script>

<style>







</style>
