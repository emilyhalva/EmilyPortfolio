<script>
export default {
  name: "Collection",
  data() {
    return {
      clothes: [
        // {
        //   name: "Strawberry Cat Beanie",
        //   descriptions: 30,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // tutorialFlag:false,

        // },
        {
          name: "Cat Beanie",
          descriptions:
            "Adorable crochet cat beanie. Featuring a playful twist on the classic beanie style, this pattern is perfect for beginners and seasoned crafters alike.",
          link: "https://youtu.be/YUhqyvy5cKg?si=w7XGmen1UVdgLt7h",
          image: [
            "./Resources/catBeanie.png",
            "./Resources/catSideBeanie.png",
            "./Resources/catBeanieSmile.png",
          ],
          tutorialFlag: true,
        },
        {
          name: "Light Blue Beanie",
          descriptions:
            "Stay cozy and stylish with this blue beanie! Handcrafted from soft yarn, it's the perfect accessory to add a pop of color to your winter ensemble.",
          link: "https://youtu.be/o0YCzR0TmtA?si=LMQXCbsZVD3IQ50S",
          image: [
            "./Resources/blueBeanie.png",
            "./Resources/beanieOn_1.png",
            "./Resources/beanieOn_2.png",
          ],
          tutorialFlag: true,
        },
        {
          name: "Green Brown Beanie",
          descriptions:
            "Embrace nature's hues with this green brown beanie! Crocheted with care, it blends earthy tones for a versatile addition to any outfit.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/greenBrownBeanie.png"],
          tutorialFlag: false,
        },
        {
          name: "Sunset Shorts",
          descriptions:
            "Relax in style with these sunset lounge shorts! Crafted from breathable yarn in warm tones, they're perfect for lounging at home.",
          link: "https://youtu.be/a1_UBP0SkX8?si=IvlWV7w7-CLHvN3K",
          image: ["./Resources/sunsetShorts.png"],
          tutorialFlag: true,
        },
        {
          name: "Grey Shorts",
          descriptions:
            " Elevate your loungewear game with these grey shorts! Soft and comfortable, they're perfect for lazy days at home or casual outings with friends.",
          link: "https://youtu.be/XO314GJyJyY?si=NFglrnByThzfS8GA",
          image: ["./Resources/greyShortsWhiteBack.png"],
          tutorialFlag: true,
        },
        // {
        //   name: "Hexagon Cardigan",
        //   descriptions: 30,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // tutorialFlag:true,

        // },
        {
          name: "Red Tank Top",
          descriptions:
            "Make a statement in this red tank top with a charming tie detail at the neck! Effortlessly chic, it's perfect for adding a touch of flair to any look.",
          link: "https://youtu.be/rQiID7WqrBI?si=fF22ZfYqhdyW_BTO",
          image: ["./Resources/redTop.png"],
          tutorialFlag: true,
        },
        {
          name: "Orange Tank Top",
          descriptions:
            "Embrace vibrant hues with this orange bralette! Crafted for both style and comfort, it's the perfect choice for adding a pop of color to your lingerie collection.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/orangeTop.png"],
          tutorialFlag: false,
        },
        {
          name: "Green Tank Top",
          descriptions:
            "Stylish green crochet tank top offers adjustable straps and a chic tie-back detail for a personalized fit.",
          link: "https://youtu.be/mSHUui7WPvQ?si=DIQrOMfej4Bv2pjY",
          image: [
            "./Resources/greenTankTop.png",
            "./Resources/greenCloseTank.png",
          ],
          tutorialFlag: true,
        },
        {
          name: "Long Sleeve Top",
          descriptions:
            "Experience the perfect blend of style and comfort in this crochet long sleeve white top, featuring a front tie and purple stripe accents at the back.",
          link: "https://youtu.be/tAy76ZjkUkg?si=9FeJk4wE9mIyrU2t",
          image: ["./Resources/longsleeveShirt.png"],
          tutorialFlag: true,
        },
        {
          name: "Grunge Mesh Sweater",
          descriptions:
            "Mesh crochet crop top with long sleeves, featuring a stylish blue and black design.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/blueBlackMeshTop.png"],
          tutorialFlag: false,
        },
      ],
      flowers: [
        // {
        //   name: "Lavander",
        //   descriptions: "pruple  description",
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // tutorialFlag: true,

        // },
        {
          name: "White Roses",
          descriptions:
            "Embrace the timeless elegance of this crochet white rose bouquet, expertly crafted to bring a touch of natural charm to any space.",
          link: "https://youtu.be/ptWYK10MeQU?si=oW-rp_qr2J5cAuR6",
          image: ["./Resources/whiteRoses.png"],
          tutorialFlag: true,
        },
        // {
        //   name: "Tulips",
        //   descriptions: 40,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
      ],
      stuffedAnimals: [
        {
          name: "Chunky Bee",
          descriptions:
            "Meet your new cuddly companion – this adorable chunky bee is handmade with love and ready to BEE part of your collection!",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/chunky_bee_side.png"],
          tutorialFlag: false,
        },
        {
          name: "Small Bee",
          descriptions:
            "This adorable crocheted bee brings a touch of handmade charm to any space.",
          link: "https://youtu.be/HjKT5OgQJRo?si=VqCSJwNOKF2HrCSR",
          image: ["./Resources/smallBee.png"],
          tutorialFlag: true,
        },
        {
          name: "Chunky Christmas Gnome",
          descriptions:
            "Capture the festive spirit with this Chunky Christmas Gnome! Crafted with care and bursting with holiday cheer, this adorable gnome is the perfect addition to your seasonal decor.",
          link: "https://youtu.be/SfSms_Dozio?si=6HBJwv-qw-LW2-if",
          image: ["./Resources/chunkyGnome.png"],
          tutorialFlag: true,
        },
      ],
      others: [
        {
          name: "Chunky Blanket",
          descriptions:
            "Indulge in the softness of a handmade chunky crochet blanket. Plush and perfect for snuggling up on cool evenings, it adds a cozy touch to any space.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/greyBlanket1.png"],
          tutorialFlag: false,
        },
        {
          name: "Peach Coaster",
          descriptions:
            "Add a sweet touch to your table with a peach crochet coaster, crafted with care for a charming addition to any setting.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/peachCoaster.png"],
          tutorialFlag: false,
        },
        {
          name: "Green Decorative Cushion",
          descriptions:
            "When I was still learning, I set out to create a purse. However, as I worked on it, the project grew larger than expected. Instead of a purse, I ended up with a pillow! It's funny how mistakes can lead to unexpected creations.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/greenPillow.png"],
          tutorialFlag: false,
        },
        // {
        //   name: "Orange Coaster",
        //   descriptions: 40,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // tutorialFlag: false,

        // },
        {
          name: "Bear Mug Cozie",
          descriptions:
            "Add a charming twist to your coffee breaks with this bear-shaped mug cozie, designed to keep your beverage warm and your spirits high.",
          link: "https://youtu.be/wBm313_qcPg?si=q1Ftmspe7bQg5fKL",
          image: ["./Resources/bearCozie.png", "./Resources/bearCozieBack.png"],
          tutorialFlag: true,
        },
        {
          name: "Farmers Market Tote",
          descriptions:
            "Effortlessly blend style and sustainability with a contemporary mesh tote, ideal for transporting your favorite market finds.",
          link: "https://youtu.be/GcuFJcBl36g?si=RjkN5zApQdQ95S-O",
          image: [
            "./Resources/brownMarketBag.png",
            "./Resources/marketBagClose.png",
          ],
          tutorialFlag: true,
        },
        {
          name: "Grey Bag",
          descriptions:
            "Chic and functional, this grey crochet tote bag adds a touch of handmade charm to your everyday carry.",
          link: "https://via.placeholder.com/150",
          image: ["./Resources/greyBag.png", "./Resources/greyBagCloseUp.png"],
          tutorialFlag: false,
        },
      ],
    };
  },
  methods: {
    sampleMethod() {},
  },
};
</script>

<template>
  <div id="collection"></div>
  <div class="Collection">
    <h1 style="text-align: center; color: #156669">Collection</h1>
    <div id="clothingSegment" class="pb-10">
      <v-container>
        <h2 class="pb-4 text-center">Garments</h2>
        <!-- Row for cards -->
        <v-row>
          <!-- Individual Card screen occupation: Small Screen - half the screen, Med Screen - 1/3 the screen, Lg Screen: WHAT? -->
          <v-col
            v-for="clothingPiece in clothes"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <!-- Individual clothing cards -->
            <div class="d-flex justify-center">
              <v-card elevation="3" max-width="273px">
                <v-carousel
                  v-if="clothingPiece.image.length > 1"
                  show-arrows="hover"
                  hide-delimiters
                  height="200px"
                >
                  <v-carousel-item
                    v-for="(image, index) in clothingPiece.image"
                    :key="index"
                    :src="image"
                    cover
                    class="puff-in-center"
                  >
                  </v-carousel-item>
                </v-carousel>

                <v-img
                  v-else
                  :src="clothingPiece.image[0]"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>{{ clothingPiece.name }}</v-card-title>
                <v-card-subtitle>{{
                  clothingPiece.descriptions
                }}</v-card-subtitle>

                <!-- Tutorial button and link -->
                <v-card-actions>
                  <v-btn
                    class="wiggle-on-hover"
                    block
                    elevation="1"
                    variant="tonal"
                    color="#769794"
                    :href="clothingPiece.link"
                    target="_blank"
                    text
                    v-if="clothingPiece.tutorialFlag"
                    >Tutorial</v-btn
                  >
                </v-card-actions>

                <!-- Read more button -->
                <v-card-actions>
                  <v-btn
                    color="#156669"
                    variant="text"
                    @click="clothingPiece.show = !clothingPiece.show"
                  >
                    Read More
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :icon="
                      clothingPiece.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                    "
                    @click="clothingPiece.show = !clothingPiece.show"
                  ></v-btn>
                </v-card-actions>
                <!-- Expose read more -->
                <v-expand-transition up>
                  <div v-show="clothingPiece.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ clothingPiece.descriptions }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="flowersSegment" class="pb-10">
      <v-container>
        <h2 style="text-align: center" class="pb-4">Floral Arrangements</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col v-for="flowerPiece in flowers" cols="12" sm="6" md="4" lg="3">
            <div class="d-flex justify-center">
              <v-card elevation="3" max-width="273px">
                <v-carousel
                  v-if="flowerPiece.image.length > 1"
                  show-arrows="hover"
                  hide-delimiters
                  height="200px"
                >
                  <v-carousel-item
                    v-for="(image, index) in flowerPiece.image"
                    :key="index"
                    :src="image"
                    cover
                    class="puff-in-center"
                  >
                  </v-carousel-item>
                </v-carousel>

                <v-img
                  v-else
                  :src="flowerPiece.image[0]"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>{{ flowerPiece.name }}</v-card-title>
                <v-card-subtitle>{{
                  flowerPiece.descriptions
                }}</v-card-subtitle>

                <!-- Tutorial button and link -->
                <v-card-actions>
                  <v-btn
                    class="wiggle-on-hover"
                    block
                    elevation="1"
                    variant="tonal"
                    color="#769794"
                    :href="flowerPiece.link"
                    target="_blank"
                    text
                    v-if="flowerPiece.tutorialFlag"
                    >Tutorial</v-btn
                  >
                </v-card-actions>

                <!-- Read more button -->
                <v-card-actions>
                  <v-btn
                    color="#156669"
                    variant="text"
                    @click="flowerPiece.show = !flowerPiece.show"
                  >
                    Read More
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :icon="
                      flowerPiece.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                    "
                    @click="flowerPiece.show = !flowerPiece.show"
                  ></v-btn>
                </v-card-actions>
                <!-- Expose read more -->
                <v-expand-transition up>
                  <div v-show="flowerPiece.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ flowerPiece.descriptions }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="stuffedAnimalsSegment" class="pb-10">
      <v-container>
        <h2 style="text-align: center" class="pb-4">
          Cuddle Buddies and Cutie Patooties
        </h2>
        <!-- Row for cards -->
        <v-row>
          <v-col
            v-for="stuffedAnimal in stuffedAnimals"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <div class="d-flex justify-center">
              <v-card elevation="3" max-width="273px">
                <v-carousel
                  v-if="stuffedAnimal.image.length > 1"
                  show-arrows="hover"
                  hide-delimiters
                  height="200px"
                >
                  <v-carousel-item
                    v-for="(image, index) in stuffedAnimal.image"
                    :key="index"
                    :src="image"
                    cover
                    class="puff-in-center"
                  >
                  </v-carousel-item>
                </v-carousel>

                <v-img
                  v-else
                  :src="stuffedAnimal.image[0]"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>{{ stuffedAnimal.name }}</v-card-title>
                <v-card-subtitle>{{
                  stuffedAnimal.descriptions
                }}</v-card-subtitle>

                <!-- Tutorial button and link -->
                <v-card-actions>
                  <v-btn
                    class="wiggle-on-hover"
                    block
                    elevation="1"
                    variant="tonal"
                    color="#769794"
                    :href="stuffedAnimal.link"
                    target="_blank"
                    text
                    v-if="stuffedAnimal.tutorialFlag"
                    >Tutorial</v-btn
                  >
                </v-card-actions>

                <!-- Read more button -->
                <v-card-actions>
                  <v-btn
                    color="#156669"
                    variant="text"
                    @click="stuffedAnimal.show = !stuffedAnimal.show"
                  >
                    Read More
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :icon="
                      stuffedAnimal.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                    "
                    @click="stuffedAnimal.show = !stuffedAnimal.show"
                  ></v-btn>
                </v-card-actions>
                <!-- Expose read more -->
                <v-expand-transition up>
                  <div v-show="stuffedAnimal.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ stuffedAnimal.descriptions }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="othersSegment" class="pb-10">
      <v-container>
        <h2 style="text-align: center" class="pb-4">Miscellaneous Projects</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col v-for="otherPiece in others" cols="12" sm="6" md="4" lg="3">
            <div class="d-flex justify-center">
              <v-card elevation="3" max-width="273px">
                <v-carousel
                  v-if="otherPiece.image.length > 1"
                  show-arrows="hover"
                  hide-delimiters
                  height="200px"
                >
                  <v-carousel-item
                    v-for="(image, index) in otherPiece.image"
                    :key="index"
                    :src="image"
                    cover
                    class="puff-in-center"
                  >
                  </v-carousel-item>
                </v-carousel>

                <v-img
                  v-else
                  :src="otherPiece.image[0]"
                  height="200px"
                  cover
                ></v-img>

                <v-card-title>{{ otherPiece.name }}</v-card-title>
                <v-card-subtitle>{{ otherPiece.descriptions }}</v-card-subtitle>

                <!-- Tutorial button and link -->
                <v-card-actions>
                  <v-btn
                    class="wiggle-on-hover"
                    block
                    elevation="1"
                    variant="tonal"
                    color="#769794"
                    :href="otherPiece.link"
                    target="_blank"
                    text
                    v-if="otherPiece.tutorialFlag"
                    >Tutorial</v-btn
                  >
                </v-card-actions>

                <!-- Read more button -->
                <v-card-actions>
                  <v-btn
                    color="#156669"
                    variant="text"
                    @click="otherPiece.show = !otherPiece.show"
                  >
                    Read More
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn
                    :icon="
                      otherPiece.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                    "
                    @click="otherPiece.show = !otherPiece.show"
                  ></v-btn>
                </v-card-actions>
                <!-- Expose read more -->
                <v-expand-transition up>
                  <div v-show="otherPiece.show">
                    <v-divider></v-divider>

                    <v-card-text>
                      {{ otherPiece.descriptions }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style>
.Collection {
  background-color: #f9f7f3;
}

#clothingSegment {
  background-color: #f9f7f3;
}
#flowersSegment {
  background-color: #deebe9;
}
#stuffedAnimalsSegment {
  background-color: #fff2f7;
}

#othersSegment {
  background-color: #f2ecf5;
}
h2 {
  color: #156669;
  font-family: "Sulphur Point", sans-serif;
}
h1 {
  font-family: "Sulphur Point", sans-serif;
}

@keyframes wiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(3deg);
  }
}

/* Apply the animation to the button when hovered over */
.wiggle-on-hover:hover {
  animation: wiggle 0.9s ease infinite;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-2-23 14:38:29
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation puff-in-center
 * ----------------------------------------
 */

.puff-in-center {
  -webkit-animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
    both;
  animation: puff-in-center 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}

@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>
