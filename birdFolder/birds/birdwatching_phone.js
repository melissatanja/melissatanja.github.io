var dataServer;
var pubKey = 'pub-c-2aaa0bce-4824-4395-9800-dfc7dbca679d';
var subKey = 'sub-c-ce34fffc-1de8-11e9-a469-92940241a6b5';

var trade_red = 0;
var trade_blue = 0;
var trade_green = 0;
var trade_yellow = 0;

var redCount = 0;
var blueCount = 0;
var greenCount = 0;
var yellowCount = 0;

var red_bird;
var blue_bird;
var green_bird;
var yellow_bird;

//size of the active area
var w = window.innerWidth;
var h = window.innerHeight;

var tradeReq;
var tradeWithWho;

var channelName = "movement";
var tradeChannel = "trade";

function preload(){

  Rbird = loadImage('bird_icons/scarlet_tanager.png');
  Bbird = loadImage('bird_icons/bluejay.png');
  Gbird = loadImage('bird_icons/tree_swallow.png');
  Ybird = loadImage('bird_icons/meadowlark.png');

}


function setup() {

  createCanvas(w, h);
  background(111);
  
  textSize(20);
  stroke("red");
  text("SCARLET TANAGER", width/2, 25);
  noStroke();

   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true,  //enables a secure connection. This option has to be used if using the OCAD webspace
    uuid: "red"
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({channels: [channelName, tradeChannel]});

  blueButton = createButton('TRADE BLUE');
  blueButton.position((w/4), h/4*3);
  blueButton.mouseClicked(tradeB);

  greenButton = createButton('TRADE GREEN');
  greenButton.position((w/2), h/4*3);
  greenButton.mouseClicked(tradeG);

  yellowButton = createButton('TRADE YELLOW');
  yellowButton.position((w/4) * 3, h/4*3);
  yellowButton.mouseClicked(tradeY);

  setInterval(sendData, 100);

}
    
function draw() {

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

function tradeB(){

  tradeWithWho = "b";
  sendTrade();

}

function tradeG(){

  tradeWithWho = "g";
  sendTrade();

}

function tradeY(){

  tradeWithWho = "y";
  sendTrade();

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
      yellow_bird: yellowCount, 
      tradeReq: tradeReq

    }
  });

}



function sendTrade()
{
  dataServer.publish({
      channel: tradeChannel,
      message: 
    {
      tradeReq: tradeWithWho
    }
  });

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

      redCount = inMessage.message.user_r_red_bird;
      blueCount = inMessage.message.user_r_blue_bird;
      greenCount = inMessage.message.user_r_green_bird;
      yellowCount = inMessage.message.user_r_yellow_bird;

  }
}