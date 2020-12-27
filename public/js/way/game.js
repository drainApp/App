var game = new Phaser.Game(700 , 700, Phaser.CANVAS, "GameDiv");
var text;
var score;
var music;
var gameLevel = 0;
var scoreText;
var buttons=[];
var answer = [0, 2, 1, 2, 1];
var x = 0.583;
var y = 0.583;


var textMessage = new Array( 
    "          그저 직진하십시오.          " //0
    , "          해를 따라 가십시오.          " //2
  , "      '벽'의 진행 방향으로 가십시오.      " //1
  , "   까마귀가 보는 방향을 따라 가십시오. " //2
  , "      벡터(1, 0)쪽으로 가십시오.      "); //1

function buttonClick(_btn){
    var a = -1;
    for(let i = 0; i<=2; i++)
    {
        if(_btn == buttons[i]){
            a = i;
            break;
        }

    }
    if(a != -1){
    console.log(a);
    console.log(gameLevel);
    if(answer[gameLevel] == a && gameLevel < 4){
        console.log("bbb");
        x *= 0.85;
        y *= 0.85;
        startGame(x, y, ++gameLevel);
    }
    else if(answer[gameLevel] == a && gameLevel == 4)
    {
        buttons[0] = null;buttons[1] = null;buttons[2] = null;
        console.log("aaa");
        var bbg = game.add.sprite(0, 0, "BBG");
        x *= 0.8;
        y *= 0.8;
        bbg.scale.x = x; bbg.scale.y = y;
        var style2 = { font: "28px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 1200, align: "center" };
        text = game.add.text(100*x, 200 * y, "We found our W   Y", style2);
        text = game.add.text(100*x, 300 * y, "We found our    AY", style2);
        text = game.add.text(100*x, 400 * y, "We found our WA   ", style2);
        text = game.add.text(330*x, 700 * y, " Back to 'Wall'..", { font: "20px Arial", fill: "#ffffff", wordWrap: true, wordWrapWidth: 1200, align: "center" });
        localStorage.setItem("whiteWay", true);
    }
    else{
        x = 0.583;
        gameLevel = 0;
        y = 0.583;
        startGame(x, y, gameLevel);
    }
}
}
function startGame(xScale, yScale, num){
    console.log(xScale + " " + yScale);
    var c = game.add.sprite(0, 0, "BG");
    c.scale.x = xScale; c.scale.y = yScale;
    var a = game.add.sprite(320 * xScale, 400 * yScale, "sok");
    a.scale.x = xScale;  a.scale.y = yScale;
    var b = game.add.sprite(580 * xScale, 400 * yScale, "player");
    b.scale.x = xScale;  b.scale.y = yScale;
    for(var i =100 ; i<=1000 ; i+=150){
        var d = game.add.sprite(xScale*i, yScale*741, "sunFlower");
        d.scale.x = xScale*0.8; d.scale.y = yScale*0.8;
    }
    buttons[0] = game.add.sprite((600-86)* xScale, 200* yScale, "front");
    buttons[2] = game.add.sprite((300-86)* xScale, 200* yScale, "left");
    buttons[1] = game.add.sprite((900-86)* xScale, 200* yScale, "right");
    for(var i = 0 ; i<=2; i++){
        buttons[i].scale.x = xScale*0.8; buttons[i].scale.y = yScale*0.8;
        buttons[i].inputEnabled = true;
        buttons[i].events.onInputDown.add(buttonClick, this);
    }
    var style2 = { font: "46px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 1200, align: "center" };
    var style = { font: "32px Arial", fill: "#000000", wordWrap: true, wordWrapWidth: 1200, align: "center" };
    text = game.add.text(253*xScale, 100 * yScale, textMessage[num], style2);
    text.scale.x = xScale; text.scale.y = yScale;
    var text2 = game.add.text(410*xScale, 150 * yScale, "방향 버튼을 골라주세요.", style);
    text2.scale.x = xScale; text2.scale.y = yScale;
} 

var play = {
    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        startGame(0.583 , 0.583, 0);
        // this.startGame(0.85 , 0.85);
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#ffffff";
        game.world.setBounds(0, 0, 1200, 700);
        score = 0;
        game.input.mouse.capture = true;
        
        if(music == null)
        {
        console.log("music on");
        music = game.add.audio('bgm');
        if(localStorage.getItem("configComplete") != 'true'){
            localStorage.setItem('volume', 0.5);
        }
        console.log(localStorage.getItem('volume'));
        music.volume = localStorage.getItem('volume');

        music.loop = true;
        music.play();
        }
    },
    update : function(){

    }
}
    game.state.add("Play", play);