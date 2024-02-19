<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      rail: true,
      items: [
        {
          text: "Collection",
          to: "collection",
        },
        {
          text: "Resources",
          to: "resources",
        },
        {
          text: "About",
          to: "about",
        },
        {
          text: "Home",
          to: "home",
        },
      ],
    };
  },
  methods: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    scrollToElement(elementId, offset = 0) {
      const elementY = document.getElementById(elementId).offsetTop;
      window.scrollTo({
        top: elementY + offset,
        behavior: "smooth",
      });
    },
  },
  computed: {},
};
</script>

<template>
  <v-app-bar class="navBar" prominent>
    <v-app-bar-nav-icon
      v-if="isMobile()"
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <div v-if="!isMobile()">
      <v-btn variant="text" @click="scrollToElement('home', -100)">Home</v-btn>
      <v-btn variant="text" @click="scrollToElement('collection', -100)"
        >Collection</v-btn
      >
      <!-- <v-btn variant="text" @click="scrollToElement('resources', -100)"
        >Resources</v-btn
      > -->
      <v-btn variant="text" @click="scrollToElement('about', 0)">About</v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.text"
        @click="
          scrollToElement(item.to, -60);
          drawer = false;
        "
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.navBar {
  background-color: #fff2f7 !important;
  color: #156669 !important;
}
</style>
