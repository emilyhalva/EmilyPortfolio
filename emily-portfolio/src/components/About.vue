<script></script>

<template>
  <div id="about"></div>
  <div class="About">
    <div class="content">
      <v-container style="margin-top: 5%">
        <v-row>
          <v-col cols="12" sm="12" med="3" lg="6" align-self="center">
            <div class="greetingWrapper">
              <div id="AboutGreeting">
                <div style="color: white; display: ">Hello :) &nbsp;</div>
                <div>
                  <span style="color: purple; display: inline"
                    >Emily&nbsp;</span
                  >
                  <span style="color: white; display: inline">Here!</span>
                </div>
              </div>
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
      <!-- 
      <div>linkedin icons, email, github?</div> -->
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
.greeting-wrapper {
  width: 100%;
  text-align: center; /* Center the text horizontally */
  margin-top: 20px; /* Add margin at the top */
}
#AboutGreeting {
  text-align: left;
  font-family: "Sulphur Point", sans-serif;
  font-weight: 600;
  flex: wrap;

  @media only screen and (max-width: 400px) {
    text-align: center;
    font-size: 2rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 2.2rem;
  }
  @media only screen and (min-width: 960px) {
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
#AboutParagraph {
  color: #35193f;
  background-color: #f7e7ff;
  font-family: "Sulphur Point", sans-serif;
  font-weight: bold;
  border-radius: 10%;
  padding: 20px;
  filter: drop-shadow(10px 8px 13px #472254);

  @media only screen and (min-width: 960px) {
    font-size: 1rem;
  }
  @media only screen and (min-width: 1280px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 1904px) {
    font-size: 2rem;
  }
}
</style>
