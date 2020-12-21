var press = "...Press Spacebar..."
var Main = {
    preload : function(){
        game.load.image("textPanel", "./assets/way/TEXTPANEL.png");
        //
        game.load.image("sok", "./assets/way/sok.png")
        game.load.image("player", "./assets/way/player.png")
        game.load.image("left", "./assets/way/left.png")
        game.load.image("front", "./assets/way/front.png")
        game.load.image("right", "./assets/way/right.png")
        game.load.image("sunFlower", "./assets/way/sunFlower.png")
        game.load.image("BG", "./assets/way/WhiteBackGround.png")
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