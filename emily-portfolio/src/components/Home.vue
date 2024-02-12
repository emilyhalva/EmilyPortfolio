<template>
  <div id="home"></div>
  <div class="Home">
    <div class="content">
      <v-container>
        <v-row>
          <v-col cols="6" align-self="center">
            <div id="welcomeMsg">
              <h2>Unwind and Explore: My Cozy Crochet Corner</h2>
              <p>Take a look around :)</p>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="d-flex justify-end">
              <v-img
                id="collageImg"
                width="100%"
                height="auto"
                max-width="500px"
                aspect-ratio="1/1"
                src="../Resources/crochetCollage.png"
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
  font-family: Oswald;
  flex: wrap;

  font-size: 90%;
  @media only screen and (min-width: 600px) {
    font-size: 94%;
  }
  @media only screen and (min-width: 960px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 1904px) {
    font-size: 100%;
  }
}
#collageImg {
  border-radius: 100%;
}
</style>
