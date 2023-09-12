<template>
  <v-app>
    <v-main>
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>
    </v-main>
  </v-app>
</template>

<script setup>
  import NavBar from './components/Header.vue';
  import About from './components/About.vue';
  import Projects from './components/Projects.vue';
  import Contact from './components/Contact.vue';
</script>
