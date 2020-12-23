var press = "...Press Spacebar..."
var Main = {
    preload : function(){
        game.load.spritesheet("player", "./assets/main/Hero.png", 44, 110);
        game.load.image("textPanel", "./assets/main/TEXTPANEL.png");
        game.load.image("ground", "./assets/main/Ground.png");
        game.load.image("ground2", "./assets/main/Ground2.png");
        game.load.image("NoCard", "./assets/main/NoCard.png");
        game.load.image("EV", "./assets/main/EV.png");
        game.load.audio("bgm", "./assets/main/BaekHwaJeom.mp3");
        game.load.image("Black", "./assets/main/black.png");
        game.load.image("Black2", "./assets/main/black2.png");
        //
        game.load.image("BG", "./assets/main/map/BG.png");
        game.load.image("building1", "./assets/main/map/top.png");
        game.load.image("building2", "./assets/main/map/mid.png");
        game.load.image("building3", "./assets/main/map/mid_2.png");
        game.load.image("building4", "./assets/main/map/bot.png");
        //
        game.load.spritesheet("NPC1", "./assets/main/Gomacho.png", 60, 87);
        game.load.spritesheet("SOK", "./assets/main/SOK.png", 34, 96);
        game.load.image("SOK2", "./assets/main/SOK2.png");
        game.load.image("SOK_NULL", "./assets/main/SOK_NULL.png");
        game.load.image("Table", "./assets/main/SitSitSit.png");
        game.load.image("PeopleSit", "./assets/main/People_Sit.png");
        game.load.spritesheet("Crow", "./assets/main/crow.png", 80, 78);
        game.load.image("Draw", "./assets/main/WhiteCenter.png");
        //
        game.load.image("goorm1", "./assets/main/goorm.png");
        game.load.image("goorm2", "./assets/main/goorm2.png");
        game.load.image("goorm3", "./assets/main/goorm3.png");
        game.load.image("pond", "./assets/main/pond.png");
        game.load.image("nakha", "./assets/main/nakha.png");
    },
    create : function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#1c242e";
        this.start();
        let text = game.add.text(0 , 0, press);
    },
    start : function(){
        game.state.start("Play");
    }

}
game.state.add("Main", Main);
game.state.start("Main");