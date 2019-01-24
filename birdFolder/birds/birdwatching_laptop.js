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

//blue user
var Blue = [0, 0, 0, 0];

//green user
var Green = [0, 0, 0, 0];

//yellow user 
var Yellow = [0, 0, 0, 0];

var tradeReq;

var cs = window.innerHeight;

var r = 60;
var moveX = 0;
var moveY = 0;

var r_xpos;
var r_ypos;
let rX = window.innerWidth/4;
let rY = window.innerWidth/4;
var r_prevX = 0;
var r_prevY = 0;

var b_xpos;
var b_ypos;
let bX = 3*window.innerWidth/4;
let bY = 3*window.innerWidth/4;
var b_prevX = 0;
var b_prevY = 0;

var g_xpos;
var g_ypos;
let gX = 3*window.innerWidth/4;
let gY = window.innerWidth/4;
var g_prevX = 0;
var g_prevY = 0;

/////////I ADDED YELLOW - D

var y_xpos;
var y_ypos;
let yX = window.innerWidth/4;
let yY = 3*window.innerWidth/4;
var y_prevX = 0;
var y_prevY = 0;


// var r = 60;
// var moveX = 0;
// var moveY = 0;

// var r_xpos;
// var r_ypos;
// let rX = 0;
// let rY = 0;
// var r_prevX = 0;
// var r_prevY = 0;

// var b_xpos;
// var b_ypos;
// let bX = 0;
// let bY = 0;
// var b_prevX = 0;
// var b_prevY = 0;

// var g_xpos;
// var g_ypos;
// let gX = 0;
// let gY = 0;
// var g_prevX = 0;
// var g_prevY = 0;

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

  instructions = loadImage('bird_icons/instructions.png');

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

  //red 
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

  //background image
  image(bg, cs/2, cs/2, cs - 50, cs - 50);







  // //red binoculars
  // if(r_xpos != undefined && r_ypos != undefined){
  //   rX = map(r_xpos, -10, 10,  45, cs/2 - 45);
  //   rY = map(r_ypos, -10, 10, cs/2 - 45, 45);
  //   r_prevX = rX;
  //   r_prevY = rY;
  // }else{
  //   rX = map(r_prevX, -10, 10,  45, cs/2 - 45);
  //   rY = map(r_prevY, -10, 10, cs/2 - 45, 45);
  // }

    if(r_xpos > 1){
    rX = constrain(rX+2,width/2,width);
  }else if(r_xpos < -0.2){
    rX = constrain(rX-2,width/2,width);
  }

  if(r_ypos > 1){
    rY = constrain(rY-2,0,width/2);
  }else if(r_ypos < -0.2){
    rY = constrain(rY+2,0,width/2);
  }

  image(img_red, rX, rY, r, r);






  // //blue binoculars
  // if(b_xpos != undefined && b_ypos != undefined){
  //   bX = map(b_xpos, -10, 10,  cs/2 + 45, cs);
  //   bY = map(b_ypos, -10, 10, cs, cs/2 + 45);
  //   b_prevX = bX;
  //   b_prevY = bY;
  // }else{
  //   bX = map(b_prevX, -10, 10,  cs/2 + 45, cs);
  //   bY = map(b_prevY, -10, 10, cs, cs/2 + 45);
  // }

    if(b_xpos > 1){
    bX = constrain(bX+2,width/2,width);
  }else if(b_xpos < -0.2){
    bX = constrain(bX-2,width/2,width);
  }

  if(b_ypos > 1){
    bY = constrain(bY-2,0,width/2);
  }else if(b_ypos < -0.2){
    bY = constrain(bY+2,0,width/2);
  }


  image(img_blue, bX, bY, r, r);







  // //green binoculars
  // if(g_xpos != undefined && g_ypos != undefined){
  //   gX = map(g_xpos, -10, 10,  cs/2 + 45, cs);
  //   gY = map(g_ypos, -10, 10, cs/2 - 45, 45);
  //   g_prevX = gX;
  //   g_prevY = gY;
  // }else{
  //   gX = map(g_prevX, -10, 10,  cs/2 + 45, cs);
  //   gY = map(g_prevY, -10, 10, cs/2 - 45, 45);
  // }

  if(g_xpos > 1){
    gX = constrain(gX+2,width/2,width);
  }else if(g_xpos < -0.2){
    gX = constrain(gX-2,width/2,width);
  }

  if(g_ypos > 1){
    gY = constrain(gY-2,0,width/2);
  }else if(g_ypos < -0.2){
    gY = constrain(gY+2,0,width/2);
  }

  image(img_green, gX, gY, r, r);







  //   //yellow binoculars


  // if(y_xpos != undefined && y_ypos != undefined){
  //   yX = map(y_xpos, -10, 10,  45, cs/2 - 45);
  //   yY = map(y_ypos, -10, 10, cs, cs/2 + 45);
  //   y_prevX = yX;
  //   y_prevY = yY;
  // }else{
  //   yX = map(y_prevX, -10, 10,  45, cs/2 - 45);
  //   yY = map(y_prevY, -10, 10, cs, cs/2 + 45);
  // }


  if(y_xpos > 1){
    yX = constrain(yX+2,width/2,width);
  }else if(y_xpos < -0.2){
    yX = constrain(yX-2,width/2,width);
  }

  if(y_ypos > 1){
    yY = constrain(yY-2,0,width/2);
  }else if(y_ypos < -0.2){
    yY = constrain(yY+2,0,width/2);
  }


  image(img_yellow, yX, yY, r, r);







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


  // console.log("red: " + Red[0] + " blue: " + Red[1] + " green: " + Red[2] + " yellow: " + Red[3]);

image(instructions, width/2,height/2,200,200);


}

function sendBirds() {

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
      channel: channelName,
      message: 
    {
      user_r_red_bird: Red[0], 
      user_r_blue_bird: Red[1], 
      user_r_green_bird: Red[2], 
      user_r_yellow_bird: Red[3],
    
      user_b_red_bird: Blue[0], 
      user_b_blue_bird: Blue[1], 
      user_b_green_bird: Blue[2], 
      user_b_yellow_bird: Blue[3],

      user_g_red_bird: Green[0], 
      user_g_blue_bird: Green[1], 
      user_g_green_bird: Green[2], 
      user_g_yellow_bird: Green[3],
    }
  });
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

    if(inMessage.publisher === "red"){

      r_xpos = inMessage.message.x_angle;
      r_ypos = inMessage.message.y_angle;

    }

    if(inMessage.publisher === "blue"){

      b_xpos = inMessage.message.x_angle;
      b_ypos = inMessage.message.y_angle;

    }

    if(inMessage.publisher === "green"){

      g_xpos = inMessage.message.x_angle;
      g_ypos = inMessage.message.y_angle;

    }
  }

  if(inMessage.channel == tradeChannel){

    trade(inMessage.publisher, inMessage.message.tradeReq);

  }
}