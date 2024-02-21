<script>
export default {
  name: "Collection",
  data() {
    return {
      clothes: [
        // {
        //   name: "Cat Beanie",
        //   descriptions: "cat description",
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
        // {
        //   name: "Strawberry Cat Beanie",
        //   descriptions: 30,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
        {
          name: "Light Blue Beanie",
          descriptions:
            "Stay cozy and stylish with our blue beanie! Handcrafted from soft yarn, it's the perfect accessory to add a pop of color to your winter ensemble.",

          link: "https://via.placeholder.com/150",
          image: "./Resources/blueBeanie.png",
        },
        {
          name: "Green Brown Beanie",
          descriptions:
            "Embrace nature's hues with our green brown beanie! Knit with care, it blends earthy tones for a versatile addition to any outfit.",
          link: "https://via.placeholder.com/150",
          image: "./Resources/greenBrownBeanie.png",
        },
        {
          name: "Sunset Shorts",
          descriptions:
            "Relax in style with our sunset lounge shorts! Crafted from breathable yarn in warm tones, they're perfect for lounging at home or strolling in comfort.",
          link: "https://via.placeholder.com/150",
          image: "./Resources/sunsetShorts.png",
        },
        {
          name: "Grey Shorts",
          descriptions:
            " Elevate your loungewear game with our grey shorts! Soft and comfortable, they're designed for lazy days at home or casual outings with friends.",
          link: "https://via.placeholder.com/150",
          image: "./Resources/greyShortsWhiteBack.png",
        },
        // {
        //   name: "Hexagon Cardigan",
        //   descriptions: 30,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
        // {
        //   name: "Grunge Mesh Sweater",
        //   descriptions: 50,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
        {
          name: "Long Sleeve Top",
          descriptions: 50,
          link: "https://via.placeholder.com/150",
          image: "./Resources/longsleeveShirt.png",
        },
        {
          name: "Red Tank Top",
          descriptions:
            "Make a statement in our red tank top with a charming tie detail at the neck! Effortlessly chic, it's perfect for adding a touch of flair to your everyday look.",
          link: "https://via.placeholder.com/150",
          image: "./Resources/redTop.png",
        },
        {
          name: "Orange Tank Top",
          descriptions:
            "Embrace vibrant hues with our orange bralette! Crafted for both style and comfort, it's the perfect choice for adding a pop of color to your lingerie collection.",
          link: "https://via.placeholder.com/150",
          image: "./Resources/orangeTop.png",
        },
        {
          name: "Green Tank Top",
          descriptions: 50,
          link: "https://via.placeholder.com/150",
          image: "./Resources/greenTankTop.png",
        },
      ],
      flowers: [
        // {
        //   name: "Lavander",
        //   descriptions: "pruple  description",
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
        {
          name: "White Roses",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "./Resources/whiteRoses.png",
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
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "./Resources/chunky_bee_side.png",
        },
        {
          name: "Small Bee",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "./Resources/smallBee.png",
        },
        {
          name: "Chunky Christmas Gnome",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "./Resources/chunkyGnome.png",
        },
      ],
      others: [
        {
          name: "Chunky Blanket",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "./Resources/greyBlanket1.png",
        },
        {
          name: "Peach Coaster",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "./Resources/peachCoaster.png",
        },
        {
          name: "Green Decorative Cushion",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "./Resources/greenPillow.png",
        },
        // {
        //   name: "Orange Coaster",
        //   descriptions: 40,
        //   link: "https://via.placeholder.com/150",
        //   image: "https://via.placeholder.com/150",
        // },
        {
          name: "Bear Mug Cozie",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "./Resources/bearCozie.png",
        },
        {
          name: "Farmers Market Tote",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "./Resources/brownMarketBag.png",
        },
        {
          name: "Grey Bag",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "./Resources/greyBag.png",
        },
      ],
      // show: false,
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
    <div id="clothingSegment">
      <v-container>
        <h2 class="pb-4 text-center">Garments</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col
            v-for="clothingPiece in clothes"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-img
                :src="clothingPiece.image"
                height="200px"
                cover="true"
              ></v-img>
              <v-card-title>{{ clothingPiece.name }}</v-card-title>

              <!-- <v-card-actions>
                <v-btn text>Tutorial</v-btn>
              </v-card-actions> -->

              <v-card-actions>
                <v-btn color="#156669" variant="text"> Read More </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :icon="
                    clothingPiece.show ? 'mdi-chevron-up' : 'mdi-chevron-down'
                  "
                  @click="clothingPiece.show = !clothingPiece.show"
                ></v-btn>
              </v-card-actions>

              <v-expand-transition up>
                <div v-show="clothingPiece.show">
                  <v-divider></v-divider>

                  <v-card-text>
                    {{ clothingPiece.descriptions }}
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="flowersSegment">
      <v-container>
        <h2 style="text-align: center" class="pb-4">Floral Arrangements</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col v-for="flowerPiece in flowers" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                :src="flowerPiece.image"
                height="200px"
                cover="true"
              ></v-img>
              <v-card-title>{{ flowerPiece.name }}</v-card-title>
              <v-card-subtitle>{{ flowerPiece.descriptions }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>Tutorial</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="stuffedAnimalsSegment">
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
            <v-card>
              <v-img
                :src="stuffedAnimal.image"
                height="200px"
                cover="true"
              ></v-img>
              <v-card-title>{{ stuffedAnimal.name }}</v-card-title>
              <v-card-subtitle>{{
                stuffedAnimal.descriptions
              }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>Tutorial</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="othersSegment">
      <v-container>
        <h2 style="text-align: center" class="pb-4">Miscellaneous Projects</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col v-for="otherPiece in others" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                :src="otherPiece.image"
                height="200px"
                cover="true"
              ></v-img>
              <v-card-title>{{ otherPiece.name }}</v-card-title>
              <v-card-subtitle>{{ otherPiece.descriptions }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>Tutorial</v-btn>
              </v-card-actions>
            </v-card>
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
  background-color: #fef8f2;
}

#othersSegment {
  background-color: #fff2f7;
}
h2 {
  color: #156669;
}
</style>
