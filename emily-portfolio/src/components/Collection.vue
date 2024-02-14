<script>
export default {
  name: "Collection",
  data() {
    return {
      clothes: [
        {
          name: "Cat Beanie",
          descriptions: "cat description",
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Strawberry Cat Beanie",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Regular Beanie",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Sunset Shorts",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Grey Shorts",
          descriptions: 50,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Hexagon Cardigan",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Grunge Mesh Sweater",
          descriptions: 50,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Long Sleeve Top",
          descriptions: 50,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
      ],
      flowers: [
        {
          name: "Lavander",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "White Roses",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Tulips",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "White Roses",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Kylie",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
      ],
      stuffedAnimals: [
        {
          name: "Chunky Bee",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Small Bee",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Gnome",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
      ],
      others: [
        {
          name: "Chunky Blanket",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Peach Coaster",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Orange Coaster",
          descriptions: 40,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Mug Cozy",
          descriptions: 30,
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
        },
        {
          name: "Farmers Market Tote",
          descriptions: "pruple  description",
          link: "https://via.placeholder.com/150",
          image: "https://via.placeholder.com/150",
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
    <div id="clothingSegment">
      <v-container>
        <h2 style="text-align: center">Clothing</h2>
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
                src="https://via.placeholder.com/150"
                height="200px"
              ></v-img>
              <v-card-title>{{ clothingPiece.name }}</v-card-title>
              <v-card-subtitle>{{
                clothingPiece.descriptions
              }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text>Tutorial</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="flowersSegment">
      <v-container>
        <h2 style="text-align: center">Flowers</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col v-for="flowerPiece in flowers" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                src="https://via.placeholder.com/150"
                height="200px"
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
        <h2 style="text-align: center">Cuddle Buddies and Cutie Patooties</h2>
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
                src="https://via.placeholder.com/150"
                height="200px"
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
        <h2 style="text-align: center">Miscelaneous Projects</h2>
        <!-- Row for cards -->
        <v-row>
          <v-col v-for="otherPiece in others" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-img
                src="https://via.placeholder.com/150"
                height="200px"
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
  background-color: #f7ede2;
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
