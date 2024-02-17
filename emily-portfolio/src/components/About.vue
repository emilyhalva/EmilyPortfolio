<script></script>

<template>
  <div class="About">
    <div class="content">
      <v-container style="margin-top: 5%">
        <v-row>
          <v-col cols="6" align-self="center">
            <div id="AboutGreeting">
              <h2 style="color: white; display: ">Hello :) &nbsp;</h2>
              <h2 style="color: purple; display: inline">Emily &nbsp;</h2>
              <h2 style="color: white; display: inline">Here!</h2>
            </div>
            <v-container id="AboutParagraph">
              I started crocheting around 2 years back, and it's become my go-to
              escape and a delightful way to let my creativity flow. From
              crafting clothing to adorable stuffed animals and useful items,
              I've found joy in making a variety of things. Crochet might seem
              intimidating at first, but I'm here to cheer on anyone who wants
              to give it a shot. Remember, I've only been at it for about two
              years myself, so don't hesitate to dive in!
            </v-container>
          </v-col>
          <v-col cols="6">
            <div class="d-flex justify-end align-end h-100">
              <v-img
                id="aboutAvatar"
                width="100%"
                height="auto"
                max-width="450px"
                aspect-ratio="1/1"
                src="../../public/Resources/crochetCyberAvatar.png"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style>
.About {
  background: #e6cdf2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  align-items: center;
}
#aboutAvatar {
  border-radius: 60px/40px;
  border: 2px solid #35193f;
  box-shadow: 0 0 20px 5px #472254;
}
#AboutGreeting {
  text-align: left;
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
#AboutParagraph {
  color: #35193f;
  background-color: rgba(255, 255, 255, 0.246);
  font-family: Oswald;
  font-size: 50%;
  border-radius: 10%;
  padding: 20px;

  @media only screen and (min-width: 600px) {
    font-size: 94%;
  }
  @media only screen and (min-width: 960px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1904px) {
    font-size: 100%;
  }
}
</style>
