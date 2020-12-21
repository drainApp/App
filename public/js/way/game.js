var game = new Phaser.Game(1200 , 1200, Phaser.CANVAS, "GameDiv");
var text;
var score;
var scoreText;
var buttons=[];


var textMessage = new Array( 
    "주변에 현혹되지 않고, 앞을 보고 가십시오." //0
  , "벡터 (1, 0)"
  , "         해를 따라 가십시오.         ");


var play = {
    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.startGame(1 , 1, 0, 0);
        // this.startGame(0.85 , 0.85);
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#ffffff";
        game.world.setBounds(0, 0, 1200, 700);
        score = 0;
        game.input.mouse.capture = true;
        

    },
    update : function(){

        // if(itemDragOn[0] == false){
        //     if(itemUSB != null)
        //         game.physics.arcade.collide(itemUSB.sprite, PC.sprite, USBOn, null, this);
        // }
        // if(itemDragOn[1] == false){
        // if(itemKEY != null)
        //         game.physics.arcade.collide(itemKEY.sprite, Door.sprite, DoorOn, null, this);
        // }
    },
    startGame : function(xScale, yScale, num, answer){
        var c = game.add.sprite(0, 0, "BG");
        c.scale.x = xScale; c.scale.y = yScale;
        var a = game.add.sprite(320 * xScale, 400 * yScale, "sok");
        a.scale.x = xScale;  a.scale.y = yScale;
        var b = game.add.sprite(580 * xScale, 400 * yScale, "player");
        b.scale.x = xScale;  b.scale.y = yScale;
        for(var i =100 ; i<=1000 ; i+=150){
            var d = game.add.sprite(i, 741, "sunFlower");
            d.scale.x = xScale*0.8; d.scale.y = yScale*0.8;
        }
        buttons[0] = game.add.sprite(600-86, 200, "front");
        buttons[0].scale.x = xScale*0.8; buttons[0].scale.y = yScale*0.8;
        buttons[1] = game.add.sprite(300-86, 200, "left");
        buttons[1].scale.x = xScale*0.8; buttons[1].scale.y = yScale*0.8;
        buttons[2] = game.add.sprite(900-86, 200, "right");
        buttons[2].scale.x = xScale*0.8; buttons[2].scale.y = yScale*0.8;
        var style2 = { font: "22px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 1200, align: "center" };
        text = game.add.text((game.camera.x+430)* xScale, 100 * yScale, textMessage[num], style2);
    } 
}
    game.state.add("Play", play);