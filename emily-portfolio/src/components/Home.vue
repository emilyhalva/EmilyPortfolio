<template>
  <div id="home"></div>
  <div class="Home">
    <div class="content">
      <v-container>
        <v-row>
          <!-- Media Query -->
          <v-col cols="12" sm="12" md="6" align-self="center">
            <div id="welcomeMsg" class="slide-in-left">
              <p>Unwind and Explore: My Cozy Crochet Corner</p>
              <p>Take a look around :)</p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="6">
            <div class="d-flex justify-end pa-6">
              <v-img
                class="scale-in-center"
                id="collageImg"
                width="100%"
                height="auto"
                max-width="500px"
                aspect-ratio="1/1"
                src="../../public/Resources/crochetCollage.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style>
.Home {
  height: 100vh;
  background-image: url("../Resources/GradientOverlay.png");
  background-size: cover; /* Makes background img responsive */
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  align-items: center;
}
#welcomeMsg {
  text-align: left;
  margin-left: 60px;
  padding-right: 100px;
  color: #156669;
  font-family: "Sulphur Point", sans-serif;
  font-weight: 600;

  flex: wrap;
  text-shadow: #f6bbc0 2px 2px 0px, #f7c8cc 4px 4px 0px;

  /* Standard phone screen size */
  @media only screen and (max-width: 400px) {
    text-align: center;
    font-size: 1.5rem;
    margin-left: auto;
    max-right: auto;
    padding-right: 0;
  }
  @media only screen and (min-width: 600px) {
    text-align: center;
    font-size: 2rem;
  }
  @media only screen and (min-width: 960px) {
    text-align: left;
    font-size: 2.5rem;
  }
  /* Standard Laptop Screen Size */
  @media only screen and (min-width: 1280px) {
    font-size: 2.8rem;
  }
  @media only screen and (min-width: 1904px) {
    font-size: 4rem;
  }
}
#collageImg {
  border-radius: 100%;
  border: 2px solid #215338;
  box-shadow: 0 0 20px 5px #164f47;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-2-23 14:28:58
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
/**
 * ----------------------------------------
 * animation scale-in-center
 * ----------------------------------------
 */

.scale-in-center {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

/* ----------------------------------------------
 * Generated by Animista on 2024-2-23 14:32:57
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */

.slide-in-left {
  -webkit-animation: slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
