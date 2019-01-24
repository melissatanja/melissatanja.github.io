var dataServer;
var pubKey = 'pub-c-2aaa0bce-4824-4395-9800-dfc7dbca679d';
var subKey = 'sub-c-ce34fffc-1de8-11e9-a469-92940241a6b5';

var trade_red = 0;
var trade_blue = 0;
var trade_green = 0;
var trade_yellow = 0;

var redCount;
var blueCount;
var greenCount;
var yellowCount;

var red_bird;
var blue_bird;
var green_bird;
var yellow_bird;

var win = 0;
var rwin = 0;
var bwin = 0;
var gwin = 0;

//size of the active area
var w = window.innerWidth;
var h = window.innerHeight;

var tradeReq;
var tradeWithWho;

var nope = 0;

var channelName = "movement";
var tradeChannel = "trade";

var y_start = 0;

function preload(){

  Rbird = loadImage('bird_icons/scarlet_tanager.png');
  Bbird = loadImage('bird_icons/bluejay.png');
  Gbird = loadImage('bird_icons/tree_swallow.png');
  Ybird = loadImage('bird_icons/meadowlark.png');

}


function setup() {

  createCanvas(w, h);
  background(255);
  
  textSize(40);
  stroke("#F0E91B");
  fill(0);
  textAlign(CENTER);
  text("MEADOWLARK", w/2, 35);
  noStroke();

   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true,  //enables a secure connection. This option has to be used if using the OCAD webspace
    uuid: "yellow"
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({channels: [channelName, tradeChannel]});

  setInterval(sendData, 300);

}
    
function draw() {

  whoWon();

  // console.log("r: " + redCount + "b: " + blueCount + "g: " + greenCount + "y: " + yellowCount);

if(redCount != undefined){

    fill("red");
    if(redCount > 0){
      image(Rbird, (width/5) * redCount, height/8, 50, 50);
    }
    // if(redCount > 1){
    //   image(Rbird, (width/5) * redCount, height/8, 50, 50);
    //   image(Rbird, (width/5) * (redCount - 1), height/8, 50, 50);
    // }

}

if(blueCount != undefined){

    fill("blue");
    if(blueCount > 0){
      image(Bbird, (width/5) * blueCount, height/8 * 2, 50, 50);
    }
    // if(blueCount > 1){
    //   image(Bbird, (width/5) * blueCount, height/8 * 2, 50, 50);
    //   image(Bbird, (width/5) * (blueCount - 1), height/8 * 2, 50, 50);
    // }

}

if(greenCount != undefined){

    fill("green");
    if(greenCount > 0){
      image(Gbird, (width/5) * greenCount, height/8 * 3, 50, 50);
    }
    // if(greenCount > 1){
    //   image(Gbird, (width/5) * greenCount, height/8 * 3, 50, 50);
    //   image(Gbird, (width/5) * (greenCount - 1), height/8 * 3, 50, 50);
    // }

}

if(yellowCount != undefined){

    fill("yellow");
    if(yellowCount > 0){
      image(Ybird, (width/5) * yellowCount, height/8 * 4, 50, 50);
    }
    // if(yellowCount > 1){
    //   image(Ybird, (width/5) * yellowCount, height/8 * 4, 50, 50);
    //   image(Ybird, (width/5) * (yellowCount - 1), height/8 * 4, 50, 50);
    // }

}

}

function whoWon(){

  if(win === 1){

    window.alert("a little birdie told me you won!!!");

  }

  if(rwin === 1 || bwin === 1 || gwin === 1){

    window.alert("better luck next time, silly goose");

  }

}

function start(){

  y_start = 1;
  sendTrade();

}

function tradeR(){

  tradeWithWho = "r";
  sendTrade();

}

function tradeB(){

  tradeWithWho = "b";
  sendTrade();

}

function tradeG(){

  tradeWithWho = "g";
  sendTrade();

}

function Nope(){

  window.alert("nothing but goose eggs (no birds to trade)");

}

function sendData() {
 
  var yNum = round(rotationY/4.5) + 10;
  var xNum = round(rotationX/4.5);

  var xPos = constrain(xNum, -10, 10);
  var yPos = constrain(yNum, -10, 10);

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
      channel: channelName,
      message: 
    {
      x_angle: xPos, 
      y_angle: yPos,
      red_bird: redCount, 
      blue_bird: blueCount, 
      green_bird: greenCount, 
      yellow_bird: yellowCount 
      // start_press: r_start

    }
  });

}



function sendTrade()
{
  dataServer.publish({
      channel: tradeChannel,
      message: 
    {
      tradeReq: tradeWithWho,
      start_press: y_start,
      birds_unavail: nope
    }
  });

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

      redCount = inMessage.message.user_y_red_bird;
      blueCount = inMessage.message.user_y_blue_bird;
      greenCount = inMessage.message.user_y_green_bird;
      yellowCount = inMessage.message.user_y_yellow_bird;
      win = inMessage.message.user_y_win;
      bwin = inMessage.message.user_r_win;
      gwin = inMessage.message.user_b_win;
      ywin = inMessage.message.user_g_win;

      if(inMessage.message.user_y_nope === 1){

        Nope();

        nope = inMessage.message.user_y_nope;
        nope = 0;

      }

  }
}