var game = new Phaser.Game(1100, 700, Phaser.AUTO,document.getElementById("GameDiv"));
var text;
var score;
var scoreText;
var endGame = false;;

class Player {
    constructor(){
        this.setBG = 0;
        this.sprite = game.add.sprite(500, 2000, "player"); 
        this.sprite.anchor.setTo(0.5, 0.5);
        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.key = game.input.keyboard.createCursorKeys();
        this.jumpKey = game.input.keyboard.addKey(Phaser.Keyboard.X);
        this.talkKey = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        this.sprite.animations.add('move', [0, 1, 2], 7, true);
        this.moveSpeed= 200;
        this.jumpSpeed= -350;
        this.isJumping = false;
        this.sprite.body.gravity.y = 900;
        this.sprite.body.collideWorldBounds = true;
    }
    update() {
        
        score+=0.1;
    }
}
class Crow{
    constructor(x, y){
        this.sprite = platforms.create(x, y, "Crow"); 
        this.sprite.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(this.sprite);
        this.sprite.animations.add('move', [0, 1], 7, true);
        this.sprite.animations.play('move');
    }
}
class TextPanel{
    constructor(a){
        this.sprite = game.add.sprite(0, 600, "textPanel");
        this.style = { font: "22px Arial", fill: "#909099", wordWrap: true, wordWrapWidth: this.sprite.width, align: "center" };
        this.style2 = { font: "7px Arial", fill: "#909099", wordWrap: true, wordWrapWidth: this.sprite.width, align: "center" };
        this.text = game.add.text(game.camera.x+600, 750, textMessage[a], this.style);
        if(this.num == 42)
            this.text2 = game.add.text(game.camera.x+200, 800, "Back to 'Search'..", this.style);
        else
            this.text2 = game.add.text(game.camera.x+950, 800, 'press Z..', this.style);
        this.text.anchor.set(0.5);
        this.num = a;
    }
    destructor(){
            //this.text.destroy();
            console.log("dest");

            if(textMessage[this.num]!="")
            {
                this.text.setText(textMessage[this.num+1]);
            
                //this.text = game.add.text(game.camera.x+400, 750, textMessage[this.num+1], this.style);
                this.num = this.num+1;
                if(this.num == 38){
                    sokTalk = true;
                }
                if(textMessage[this.num]=="")
                    {
                        if(this.num != 43){
                        console.log("check");
                        canTalk= false;
                        this.text2.text = '';
                        textpanel.sprite.scale.x = 0;
                        textpanel.sprite.scale.y = 0;
                        }
                    }
                else{
                    if(this.num == 42){
                        this.text2.text = "Back to 'Search'..";
                    }

                    else{
                        this.text2.text = 'press Z..';
                    }
                    }
                }
            else{
                canTalk = true;
                }
    }
    changeText(n){
        if(n == 42){
            this.text2.text = "Back to 'Search'..";
        }
        else{
            this.text2.text = 'press Z..';
        }
        textpanel.sprite.scale.x = 1;
        textpanel.sprite.scale.y = 1;
        player.sprite.body.velocity.x = 0;
        console.log("ct");
        this.text.setText(textMessage[n]);
        this.num = n;
    }
}
class Npc{
    constructor(x, y, name, textIndex){
        this.sprite = npc.create(x, y, name);
        this.sprite.anchor.setTo(0.5, 0.5);
    }
}
function CloudCollision(_pc){
    console.log("This");
    player.sprite.loadTexture('nakha', 0);
    game.stage.backgroundColor = "#ABC1D3";
    ground.scale.setTo(0, 0);
    player.sprite.scale.x = 0.33;
    player.sprite.scale.y = 0.33;
}
function PondCollision(_pc){
    if(textpanel.num != 42){
        textpanel.changeText(42);
        localStorage.setItem('end', true);
        player.sprite.scale.setTo(0, 0);
        player.sprite.body.gravity = 0;
        endGame = true;
    }
}
function Npc1Collision (_pc, _npc){
    if(player.talkKey.downDuration(25) && textpanel.text._text == "" && canTalk){
    npc1 = _npc;
    switch(_npc.key){
        case "Table":
            textpanel.changeText(6);
            break;
        case "NPC1":
            textpanel.changeText(17);
            talkPeople = true;
            _npc.loadTexture("NPC1")
            break;
        case "PeopleSit":
            textpanel.changeText(13);
            break;
        case "EV":
            textpanel.changeText(9);
            break;
        case "SOK":
                textpanel.changeText(34);
                sok.loadTexture('SOK', 0);
                localStorage.setItem('way',true);
                break;
        case "SOK_NULL":
                textpanel.changeText(30);
                localStorage.setItem('redRoof',true);
                break;
        case "SOK2":
                textpanel.changeText(39);
                break;

    }
}
}
var textMessage = new Array( 
  "(어렸을 적, 그는 그림을 그리고 싶었다.)" //0
, "(그러나 이젠 그림을 그릴  수 없었다.)"
, "(그에겐 남은 시간이 얼마 없었기 때문에.)"
, "(도시에서 노동자는 소모품이었다.)"
, "(마지막으로, 그는 도시에서 벗어나기로 마음을 먹었다. . .)"
, ""
, "(수명단축의 맛, 무한노동 에너지 드링크.)" // 6
, "(책상엔 같은 캔이 여러 개 놓여있다. . .)"
, ""
, "(엘리베이터는 작동하지 않는다.)" //9
, "(근무시간에 들어오는 사람은 있어도 나가는 사람은 없기 때문이다.)"
, "(다른 출구를 찾아보자. . .)"
, ""
, "(그들은 쉴 틈 없이 일하고 있다.)" //13
, "(반복적인 일, 피폐한 정신, 내려온 다크서클.)"
, "(쌓이는 스트레스, 떡진 머리, 꿈이 없는 밤.)"
, ""
, "\"당신은 도시를 떠나려는 것 같아보이네요.\""//17
, "(그가 말했다.)"
, "(같은 회사를 다녔지만, 타인의 얼굴을 기억할 여유는 없었지만)"
, "(적어도 지금 그의 모습은 다른 도시 사람들과 조금은 달라보였다.)"
, "\"회사 밖에서, 붉은 지붕 집을 찾아가요.\""
, "\"도시 밖으로 나갈 방법을 알려줄 사람이 있을 거에요.\""
, "\"저는 결국 용기가 부족해 나가지 못했지만, 당신이라면 할 수 있을거에요.\""
, "(그 말을 끝으로, 그는 다시 자신의 할 일에 열중하기 시작했다.)"
, ""
, "(그는 창 밖으로 자신의 몸을 던지고 싶었으나,)" // 26
, "(아쉽게도 그는 '새'가 아니었다.)"
, "('까마귀' 키워드가 해금되었습니다.)"
, ""
, "(붉은 집의 문은 굳게 닫혀 있고, 초인종도 보이지 않는다.)" //30
, "(안에서 문을 열고 나올 때까지 기다려야 할 것 같다.)"
, "('붉은 지붕' 키워드가 해금되었습니다.)"
, ""
, "도시에서 나가고 싶어서 찾아온 거지?"// 34
, "길이 조금 복잡하고 험할지도 모르지만,"
, "나를 믿고 따라와."
, "('흰 길' 키워드가 해금되었습니다.)"
, ""
, "이 밑은, 도시 밖이야. 여기까지 오느라 수고했어." // 39
, "너가 그리던 자유가 바로 코앞에 있어."
, ""
, "('벽' 키워드가 '끝' 키워드로 순위가 갱신되었습니다.)" //42
, ""
, "(아직 회사에서 처리해야 할 일이 남은 것 같다.)" // 44
, ""
)

var npc1;
var h0;
var lastTextTime = 0;
var lastJumpTime = 0;
var textpanel;
var cardTime;
var cardTimeOn = false;
var cardDestroyAble = true;
var player;
var bullets = [];
var system;
var canTalk = false;
let platforms;
var music;
var canSlide = true;
var canJump = true;
let cards = [4];
var canInput = true;
var firstJumpPower;
var secondJumpPower;
let jumpButton;
let slideButton;
let rerollButton;
let trash;
var sok;
var sokTalk = false;
let npc;
let clouds;
var bg;
var stopTime;
var crow = [];
var crowOn = false;
var wayOn = false;
var sokOn = false;
let random3;
var talkPeople = false;
let pond;
let ground;
var fly = localStorage.getItem('fly')
var roomescapeclear = localStorage.getItem('room')
var whiteWayclear = localStorage.getItem('whiteWay')

var play = {
    create : function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        bg = game.add.sprite(1400, 2280, 'BG');
        bg.scale.x = 2.5; bg.scale.y = 2.5;
        let bg2 = game.add.sprite(4000, 1355, 'SF');
        bg2.scale.x = 0.9; bg2.scale.y = 0.9;
        stopTime = game.time.now;
        canJump = true;
        trash = game.add.group();
        platforms = game.add.group();
        npc = game.add.group();
        platforms.enableBody = true;
        pond = game.add.sprite(6120, 2650, 'pond');
        game.physics.enable(pond, Phaser.Physics.ARCADE);
        pond.body.immovable = true;
        ground = platforms.create(0, 2818, 'ground');
        // let ground2 = platforms.create(3700, 2818, 'ground2');
        let black = platforms.create(3160, 0, 'Black');
        let black2 = platforms.create(4000, 1409, 'Black2');
        let Exit = game.add.sprite(3900, 1240, 'EXIT');
        ground.body.immovable = true;
        // ground2.body.immovable = true;
        black.body.immovable = true;
        black2.body.immovable = true;
        ground.scale.setTo(200, 2);
        // ground2.scale.setTo(200, 2);
        // game.scale.pageAlignHorizontally = true;
        // game.scale.pageAlignVertically = true;
        game.stage.backgroundColor = "#1c242e";
        game.world.setBounds(0, 0, 7500, 4000);
        trash.create(334, 1806, 'building3');
        
        let h1= platforms.create(100, 200, 'building1');
        let h2= platforms.create(100, 1806, 'building2');
        let  h0= platforms.create(100, 2060, 'building4');
        // game.physics.enable(platforms, Phaser.Physics.ARCADE);
        // h0.body.collideWorldBounds = true;
        // h1.body.collideWorldBounds = true;
        // h2.body.collideWorldBounds = true;
        h0.body.immovable = true;
        h1.body.immovable = true;
        h2.body.immovable = true;
        sok = npc.create(3050, 2728, 'SOK_NULL');
        npc.create(4400, 1319, 'SOK2');
        npc.create(340, 1974, 'EV');
        npc.create(450, 1974, 'Table');
        npc.create(600, 1978, 'PeopleSit');
        npc.create(750, 1978, 'PeopleSit');
        npc1 = npc.create(900, 1974, 'NPC1');
        npc1.animations.add('blink', [0, 1], 7, true);
        npc1.animations.play('blink');
        npc.create(1050, 1978, 'PeopleSit');
        crow[0]= new Crow(1550, 200);
        crow[1]= new Crow(1680, 200);
        crow[2]= new Crow(1810, 200);
        game.physics.enable(npc, Phaser.Physics.ARCADE);
        for(let i = 0; i< npc.length ; i++){
            npc.children[i].body.immovable = true;
            npc.children[i].body.checkCollision.right = false;
            npc.children[i].body.checkCollision.left = false;
            npc.children[i].body.checkCollision.down = false;
            npc.children[i].body.checkCollision.up = false;
        }
        for(let i = 0; i< crow.length ; i++){
            crow[i].sprite.body.checkCollision.right = false;
            crow[i].sprite.body.checkCollision.left = false;
        }
        npc.enableBody = true;
        player = new Player();
        player.sprite.body.setSize(44, 102, 0, 0);
        textpanel = new TextPanel(0);
        player.sprite.animations.play('move');
        clouds = game.add.group();
        game.add.sprite(6426, 800, 'goorm1');
        game.add.sprite(6426, 500, 'goorm3');
        clouds.create(6326, 1300, 'goorm2');
        clouds.create(6526, 1400, 'goorm3');
        clouds.create(6226, 1250, 'goorm1');
        clouds.create(6026, 500, 'goorm2');
        clouds.create(6626, 650, 'goorm3');
        clouds.create(6726, 900, 'goorm1');
        clouds.create(6026, 1050, 'goorm2');
        clouds.create(6126, 780, 'goorm3');
        clouds.create(6726, 1150, 'goorm1');
        game.physics.enable(clouds, Phaser.Physics.ARCADE);
        for(let i = 0; i< clouds.length ; i++){
            clouds.children[i].body.immovable = true;
            clouds.children[i].body.checkCollision.right = false;
            clouds.children[i].body.checkCollision.left = false;
            clouds.children[i].body.checkCollision.down = false;
            clouds.children[i].body.checkCollision.up = false;
        }
        // clouds.enableBody = true;
        game.camera.follow(player.sprite);
        score = 0;
        game.input.mouse.capture = true;
        if(music == null)
        {
        console.log("music on");
        music = game.add.audio('bgm');
        if(localStorage.getItem("configComplete") != 'true')
            localStorage.setItem('volume', 0.5);
        music.volume = localStorage.getItem('volume');
        console.log(localStorage.getItem('volume'));
        music.loop = true;
        music.play();
        }
    },
    update : function(){
        fly = localStorage.getItem('fly')
        roomescapeclear = localStorage.getItem('room')
        whiteWayclear = localStorage.getItem('whiteWay')
        // if(music == null)
        // {
        // console.log("music on");
        // music = game.add.audio('bgm');
        // music.volume = 0.5;
        // music.play();
        // }
       player.update();
       textpanel.sprite.x = game.camera.x;
       textpanel.text.x = game.camera.x+600;
       if(textpanel.text2.text == 'press Z..')
            textpanel.text2.x = game.camera.x+950;
        else
            textpanel.text2.x = game.camera.x+880;
       textpanel.sprite.y = game.camera.y + 500;
       textpanel.text.y = game.camera.y + 580;
       textpanel.text2.y = game.camera.y + 630;
       if(textpanel.text.text == ""){
        if(player.key.right.isDown  && (player.sprite.x <3150 || player.sprite.x >4000) && !(player.sprite.x > 6000)){
           player.sprite.body.velocity.x = player.moveSpeed;
           player.sprite.scale.setTo(-1, 1);
        }
        else if(player.key.left.isDown && !(player.sprite.x > 6000)){
            player.sprite.body.velocity.x = -player.moveSpeed;
            player.sprite.scale.setTo(1, 1);
            }
        else{
            player.sprite.body.velocity.x = 0;
        }
        }

        // if(player.jumpKey.isDown ){
        //     console.log("JUMP");
        //     player.sprite.body.y -= 5;
        //     player.sprite.body.velocity.y = -400;
        //     }
       //game.input.activePointer.leftButton.isDown
       if(player.talkKey.downDuration(25)&& lastTextTime+50 < game.time.now && endGame == false){
            lastTextTime = game.time.now;
            textpanel.destructor();
       }
         if(player.sprite.x > 1380 && player.sprite.body.velocity.x > 0 && (fly != 'true' || !talkPeople)){ // 까마귀 올라갓으면
              player.sprite.body.velocity.x = 0;
              if(textpanel.text.text == '' && fly != 'true'){
                localStorage.setItem('crows',true);
                textpanel.changeText(26);
              }
              else if(!talkPeople && textpanel.text.text == ''){
                textpanel.changeText(44);
              }

         }
        if(player.sprite.x > 4500 && player.sprite.x < 6000 && player.sprite.y > 1500){
            player.sprite.y = 400;
            player.sprite.x = 6500; 
        }
        if(fly == 'true' && !crowOn){
            for(var i =0 ; i< crow.length ; i++){
                crow[i].sprite.y = 2150 + (i*230);
            }
            crowOn = true;
        }
        if(whiteWayclear == 'true' && !wayOn && sokTalk){
            player.sprite.y = 1362; player.sprite.x = 4076;
            wayOn= true;
        }
        if(roomescapeclear == 'true' && !sokOn){ // RoomEscape
            sok.loadTexture('SOK', 0);
            sok.animations.add('blink', [0, 1], 7, true);
            sok.animations.play('blink');
            sokOn = true;
        }
       game.physics.arcade.collide(player.sprite, platforms);
       game.physics.arcade.collide(player.sprite, clouds, CloudCollision, null);
       game.physics.arcade.collide(player.sprite, npc, Npc1Collision, null, this);
       game.physics.arcade.collide(player.sprite, pond, PondCollision, null);
    }

    
}



game.state.add("Play", play);