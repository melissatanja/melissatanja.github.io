// server variables

var dataServer;
var pubKey = 'pub-c-2aaa0bce-4824-4395-9800-dfc7dbca679d';
var subKey = 'sub-c-ce34fffc-1de8-11e9-a469-92940241a6b5';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "movement";
var tradeChannel = "trade";

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

//bird counts
//red user
var Red = [0, 0, 0, 0];

// var bbird_r = 0;
// var rbird_r = 0;
// var gbird_r = 0;
// var ybird_r = 0;

//blue user
var Blue = [0, 0, 0, 0];

// var bbird_b = 0;
// var rbird_b = 0;
// var gbird_b = 0;
// var ybird_b = 0;

//green user
var Green = [0, 0, 0, 0];

// var bbird_g = 0;
// var rbird_g = 0;
// var gbird_g = 0;
// var ybird_g = 0;

//yellow user 
var Yellow = [0, 0, 0, 0];

// var bbird_y = 0;
// var rbird_y = 0;
// var gbird_y = 0;
// var ybird_y = 0;

// var user;

// var Ytrade;
// var Gtrade;
// var Btrade;

var r_xpos;
var r_ypos;
var tradeReq;

// var speedX = 1;
// var speedY = 1;

var cs = window.innerHeight;

// var w = window.innerWidth;
// var h = window

var r = 60;
var moveX = 0;
var moveY = 0;
let rX = 0;
let rY = 0;
var r_prevX = 0;
var r_prevY = 0;

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
  dataServer.subscribe({channels: [channelName, tradeChannel]});

  console.log("update20");

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

  if(r_xpos != undefined && r_ypos != undefined){

    rX = map(r_xpos, -10, 10,  45, cs/2 - 45);
    rY = map(r_ypos, -10, 10, cs/2 - 45, 45);

    // X = constrain(moveX, 45, cs/2 - 45);
    // Y = constrain(moveY, 45, cs/2 - 25);

    r_prevX = rX;
    r_prevY = rY;

    // console.log("x: " + X);
    // console.log("y: " + Y);

  }else{

    rX = map(r_prevX, -10, 10,  45, cs/2 - 45);
    rY = map(r_prevY, -10, 10, cs/2 - 45, 45);

  }

  image(img_red, rX, rY, r, r);




  //birds moving

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



  //bird catching 

  birdCatchB();
  birdCatchR();
  birdCatchY();
  birdCatchG();


  console.log("red: " + Red[0] + "blue: " + Red[1] + "green: " + Red[2] + "yellow: " + Red[3]);

}

function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y, rX, rY) <= bsize+15){
      birdsBlue.splice(i,1);

        Red[1] += 1;

    }
  }
}

function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y, rX, rY) <= bsize+15){
      birdsRed.splice(i,1);

        Red[0] += 1;

    }
  }

}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y, rX, rY) <= bsize+15){
      birdsYellow.splice(i,1);

        Red[3] += 1;
        
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y, rX, rY) <= bsize+15){
      birdsGreen.splice(i,1);

        Red[2] += 1;
        
    }
  }
}

function sendBirds() {

  // console.log("red: " + Red[0]);
  // console.log("blue: " + Red[1]);
  // console.log("green: " + Red[2]);
  // console.log("yellow: " + Red[3]);

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
      channel: channelName,
      message: 
    {
      user_r_red_bird: Red[0], 
      user_r_blue_bird: Red[1], 
      user_r_green_bird: Red[2], 
      user_r_yellow_bird: Red[3]
    
      // user_b_red_bird: Blue[0], 
      // user_b_blue_bird: Blue[1], 
      // user_b_green_bird: Blue[2], 
      // user_b_yellow_bird: Blue[3]
    }
  });
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

    if(inMessage.publisher === "red"){

      //get red user's current bird count
      Red[0] = inMessage.message.red_bird;
      Red[1] = inMessage.message.blue_bird;
      Red[2] = inMessage.message.green_bird;
      Red[3] = inMessage.message.yellow_bird;

      //get red user's phone angles
      r_xpos = inMessage.message.x_angle;
      r_ypos = inMessage.message.y_angle;

      //get red user's button-pressing actions

      // if(inMessage.publisher === "red"){

      //   user = "red"

      // }

      // if(inMessage.message.tradeY === 1){

      //   Ytrade = 1;

      // }

      // if(inMessage.message.tradeG === 1){

      //   Gtrade = 1;

      // }

      // if(inMessage.message.tradeB === 1){

      //   Btrade = 1;

      // }
    }
  }

  if(inMessage.channel == tradeChannel){

    trade(inMessage.publisher, inMessage.message.tradeReq);

    // if(inMessage.publisher === "red"){

    //   trader: "red",
    //   tradeReq: tradeReq // who are we trading with

    // }

  }
}