<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
      rail: true,
      items: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'About',
          to: '/about',
        },
        {
          text: 'Projects',
          to: '/projects',
        },
        {
          text: 'Contact',
          to: '/contact',
        },
      ],
    }
  },
  methods: {
    isMobile() {
        return this.$vuetify.display.mobile;
    },
    scrollToElement(elementId, offset = 0){
        const elementY = document.getElementById(elementId).offsetTop;
        window.scrollTo({
            top: elementY + offset,
            behavior: 'smooth'
        });
    }
  },
  computed: {
    
  }
}
</script>

<template>
    <v-app-bar color="purple-lighten-2" prominent>
        <v-app-bar-nav-icon v-if="isMobile()" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Emily's Portfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="scrollToElement('home', -100)">Home</v-btn>
        <v-btn variant="text" @click="scrollToElement('about', -100)">About</v-btn>
        <v-btn variant="text" @click="scrollToElement('projects', -100)">Projects</v-btn>
        <v-btn variant="text" @click="scrollToElement('contact', -100)">Contact</v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        location="left"
        temporary
      >
        <v-list>
            <v-list-item v-for="item in items" :key="item.text" link :to="item.to">
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<style>

</style>