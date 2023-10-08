<template>
   <v-app>
    <v-main class="mainBackground">
      <NavBar/>
      <div class="avatar">
        <div class="centered-text"> 
           <h1> Hello there! I'm ... </h1>
        </div>
        <img src="/Icons/avatar_personalWeb.png">
        <div class="centered-text">
          <h1>Emily Halva</h1>
          <!-- <h2>Full Stack Developer</h2> -->
        </div>
      </div>

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

<style>
 .mainBackground{
 /*background: rgb(226,166,255);
background: radial-gradient(circle, rgba(226,166,255,1) 0%, rgba(255,178,250,1) 14%, rgba(254,196,132,1) 72%, rgba(255,253,177,1) 100%); */
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  
}


.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh; /* Adjust as needed for your layout */

  font-family: palatino;

  animation: bounce 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}


@-webkit-keyframes bounce { 
  from { 
      -webkit-transform: translate3d(0, 0, 0); 
      transform: translate3d(0, 0, 0); 
  } 
  to { 
      -webkit-transform: translate3d(0, 50px, 0); 
      transform: translate3d(0, 50px, 0); 
  } 
} 


.centered-text{
  text-align: center;
}

img{
  border-radius: 70px;
  box-shadow: 10px 10px 10px 10px #ffffffcf
}


</style>
