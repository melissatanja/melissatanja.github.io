// server variables

var dataServer;
var pubKey = 'pub-c-2aaa0bce-4824-4395-9800-dfc7dbca679d';
var subKey = 'sub-c-ce34fffc-1de8-11e9-a469-92940241a6b5';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "movement";

var birdcolour = ["blue","red","green","yellow"];

var birdN = 4;
var birdS = 3;

var birdsBlue = [];
var birdsRed = [];
var birdsYellow = [];
var birdsGreen = [];

let img_red;
let img_blue;
let img_green;
let img_yellow;
let bg;

var blue_bird = 0;
var red_bird = 0;
var green_bird = 0;
var yellow_bird = 0;

var user;

var xposition;
var yposition;

// var speedX = 1;
// var speedY = 1;

var cs = window.innerHeight;

// var w = window.innerWidth;
// var h = window

var r = 60;
var moveX = 0;
var moveY = 0;
let X;
let Y;
var prevX;
var prevY;

function preload(){

  img_red = loadImage('user_icons/user_icon_red.png');
  img_blue = loadImage('user_icons/user_icon_blue.png');
  img_green = loadImage('user_icons/user_icon_green.png');
  img_yellow = loadImage('user_icons/user_icon_yellow.png');

  Rbird = loadImage('bird_icons/scarlet_tanager.png');
  Bbird = loadImage('bird_icons/bluejay.png');
  Gbird = loadImage('bird_icons/tree_swallow.png');
  Ybird = loadImage('bird_icons/meadowlark.png');

  bg = loadImage('other/bg3.png');

}

function setup() 
{
  // getAudioContext().resume();
  createCanvas(cs, cs);
  // background(255);
  
  noStroke();
  rectMode(CORNER);
  //red section
  fill('#FF3333');
  rect(0,0,cs/2,cs/2);

  //green
  fill('#99FF00');
  rect(cs/2, 0,cs/2,cs/2);

  //yellow
  fill('#FFFF00');
  rect(0,cs/2,cs/2,cs/2);

  //blue
  fill('#0099FF');
  rect(cs/2,cs/2,cs/2,cs/2);

   // initialize pubnub
  dataServer = new PubNub(
  {
    subscribe_key : subKey, 
    publish_key: pubKey, 
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});

  console.log("update17");

  //setup birds
  for (let i = 0; i < 4; i++) {
    birdsBlue[i] = new BirdieB(random(cs),random(cs));
    birdsRed[i] = new BirdieR(random(cs),random(cs));
    birdsYellow[i] = new BirdieY(random(cs),random(cs));
    birdsGreen[i] = new BirdieG(random(cs),random(cs));

  }

  setInterval(sendBirds, 300);

}

function draw() 
{

  // speedX += moveX

if(xposition != undefined && yposition != undefined){

  X = map(xposition, -10, 10,  45, cs/2 - 45);
  Y = map(yposition, -10, 10, cs/2 - 45, 45);

  // X = constrain(moveX, 45, cs/2 - 45);
  // Y = constrain(moveY, 45, cs/2 - 25);

  // prevX = moveX;
  // prevY = moveY;

  console.log("x: " + X);
  console.log("y: " + Y);

}
// else{

//   X = constrain(prevX, 45, cs/2 - 45);
//   Y = constrain(prevY, 45, cs/2 - 25);

// }

 // moveX = speedX * xposition;
 // moveY = speedY * yposition;

 // console.log(xposition);

  noStroke();
  rectMode(CORNER);
  imageMode(CENTER);
  //red section
  fill('#FF3333');
  rect(0,0,cs/2,cs/2);

  // image(bg, cs/4, cs/4, cs/2 - 50, cs/2 - 50);

  //green
  fill('#99FF00');
  rect(cs/2, 0,cs/2,cs/2);

  // image(bg, cs/4 * 3, cs/4, cs/2 - 50, cs/2 - 50);

  //yellow
  fill('#FFFF00');
  rect(0,cs/2,cs/2,cs/2);

  // image(bg, cs/4, cs/4 * 3, cs/2 - 50, cs/2 - 50);

  //blue
  fill('#0099FF');
  rect(cs/2,cs/2,cs/2,cs/2);

  // image(bg, cs/4 * 3, cs/4 * 3, cs/2 - 50, cs/2 - 50);

  //background image
  image(bg, cs/2, cs/2, cs - 50, cs - 50);

  //red binoculars
  // image(img_red, X, Y, r, r);

  for(let i=0;i<birdsBlue.length;i++){
    fill("blue");
    birdsBlue[i].move();
    birdsBlue[i].show();
  }

  for(let i=0;i<birdsRed.length;i++){
       fill("red");
      birdsRed[i].move();
      birdsRed[i].show();
  }

  for(let i=0;i<birdsGreen.length;i++){
      fill("green");
      birdsGreen[i].move();
      birdsGreen[i].show();
  }
  for(let i=0;i<birdsYellow.length;i++){
      fill("yellow");
      birdsYellow[i].move();
      birdsYellow[i].show();
  }

  birdCatchB();
  birdCatchR();
  birdCatchY();
  birdCatchG();

}

function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y, moveX, moveY) <= bsize+15){
      birdsBlue.splice(i,1);

      if(user === 0){

        blue_bird += 1;

      }
    }
  }
}

function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y, moveX, moveY) <= bsize+15){
      birdsRed.splice(i,1);

      if(user === 0){

        red_bird += 1;

      }
    }
  }

}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y, moveX, moveY) <= bsize+15){
      birdsYellow.splice(i,1);

      if(user === 0){

        yellow_bird += 1;
        
      }
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y, moveX, moveY) <= bsize+15){
      birdsGreen.splice(i,1);

        if(user === 0){

        green_bird += 1;
        
      }
    }
  }
}

// function tradeRequest(){

//   if(inMessage.message.user = "red"){

//     //trading with blue user
//     if(trade_blue === true){

//       if(inMessage.message.blue_bird > 0){

//         //trading blue bird
//         inMessage.message.blue_bird -= 1;

//         if(inMessage.message.user = "blue"){

//           //receiving blue bird
//           inMessage.message.blue_bird += 1;

//         }

//       }else if(inMessage.message.green_bird > 0){

//         //trading green bird
//         inMessage.message.green_bird -= 1;

//         if(inMessage.message.user = "blue"){

//           //receiving green bird
//           inMessage.message.green_bird += 1;

//         }

//       }else if(inMessage.message.yellow_bird > 0){

//         //trading yellow bird
//         inMessage.message.yellow_bird -= 1;

//         if(inMessage.message.user = "blue"){

//           //receiving yellow bird
//           inMessage.message.yellow_bird += 1;

//         }

//       }else{

//         window.alert("No birds available");

//       }

//     }

//     //trading with green user
//     if(trade_green === true){



//     }

//     //trading with yellow user
//     if(trade_yellow === true){



//     }

//   }

// }

function sendBirds() {

  // console.log("red: " + red_bird);
  // console.log("blue: " + blue_bird);
  // console.log("green: " + green_bird);
  // console.log("yellow: " + yellow_bird);

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
      channel: channelName,
      message: 
    {
      red_bird: red_bird, 
      blue_bird: blue_bird, 
      green_bird: green_bird, 
      yellow_bird: yellow_bird, 
    }
  });
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

    if(inMessage.message.user = "red"){

      user = 0;

      xposition = inMessage.message.x_angle;
      yposition = inMessage.message.y_angle;
      
      // moveX = map(xposition, -10, 10,  0, cs/2);
      // moveY = map(yposition, -10, 10, cs/2, 0);

      // trade_blue = inMessage.message.tradeB;
      // trade_green = inMessage.message.tradeG;
      // trade_yellow = inMessage.message.tradeY;

      // if(trade_blue === true){

      //   console.log("trade blue");

      // }

    }

  // birdCatchB();
  // birdCatchR();
  // birdCatchY();
  // birdCatchG();

  }
}