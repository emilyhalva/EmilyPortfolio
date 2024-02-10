<template>
    <div id="home"></div>
    <div class="Home">
        <div class="content">
            <div id="welcomeMsg">   
                <h2> Unwind and Explore: My Cozy Crochet Corner</h2>
                <p>I'm happy you're here :)</p>
            </div>
            <img id="collageImg" src="../Resources/crochetCollage.png">
        </div>
    </div>
</template>

<style>
    .Home {
        height: 100vh;
        background-image: url("../Resources/GradientOverlay.png");
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
        padding-left: 10px;
        padding-right: 100px;
        font-size: 2em;
        color: #156669;
        font-family: Oswald;
    }
    #collageImg {
        width: 450px;
        padding-right: 10px;
        border-radius: 100%;
    }
</style>