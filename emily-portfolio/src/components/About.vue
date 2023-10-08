<script>

</script>

<template>
    <div id="about">
    <div class="aboutHeader">
        <h1>About</h1>
    </div>

    <div class="school">
        <!-- <h2>Schooling</h2> -->
        <v-timeline-item>
            <template v-slot:opposite>
                 <v-card>
                <v-card-title>Arizona State University</v-card-title>
                <v-card-subtitle>Mesa, AZ</v-card-subtitle>
                <v-card-text>
                    <p>Graduated May 2023</p>
                    <p>Bachelor of Science in Software Engineering</p>
                    <p>GPA : 3.68</p>
                </v-card-text>
            </v-card>
            </template>
            <v-card>
                <v-card-title>Chandler Gilbert Community College</v-card-title>
                <v-card-subtitle>Chandler, AZ</v-card-subtitle>
                <v-card-text>
                    <p>Graduated May 2021</p>
                    <p>Associates in Science</p>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </div>

</div>

</template>

<style>

    #about{
        margin-top: 80px; /*Take away hard coded values*/
    }
    .aboutHeader {
        height: 50px;
        color:#28333f; /*dark blue*/
        
    }


    .school {
        margin-top: 40px;
        height: 500px;
        color: #5e7794; /*med blue*/
       
    }
</style>