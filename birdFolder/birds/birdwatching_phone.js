/*

Blank pubnub sketch
 */

// server variables

var dataServer;
var pubKey = 'pub-c-2aafee3c-55a2-4069-be1b-babd1a8407f4';
var subKey = 'sub-c-9f62ae9e-16be-11e9-b4a6-026d6924b094';

var colours = ['red', 'blue', 'green', 'yellow'];
var trade_red = false;
var trade_blue = false;
var trade_green = false;
var trade_yellow = false;

//size of the active area
var cSizeX = 900;
var cSizeY = 600;

//consider making a channel for each user?
var channelName = "messageChannel";

function setup() 
{
  // getAudioContext().resume();
  createCanvas(cSizeX, cSizeY);
  background(255);
  
  

   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming});
  dataServer.subscribe({channels: [channelName]});

  redButton = createButton('TRADE RED');
  redButton.position(width/5, height/2);
  redButton.mouseClicked(trade_red = true);

  blueButton = createButton('TRADE BLUE');
  blueButton.position((width/5) * 2, height/2);
  blueButton.mouseClicked(trade_blue = true);

  greenButton = createButton('TRADE GREEN');
  greenButton.position((width/5) * 3, height/2);
  greenButton.mouseClicked(trade_green = true);

  yellowButton = createButton('TRADE YELLOW');
  yellowButton.position((width/5) * 4, height/2);
  yellowButton.mouseClicked(trade_yellow = true);

}

function draw() 
{


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
    user: "red",
    x_angle: xPos, 
    y_angle: yPos,
    red_bird: , 
    blue_bird: , 
    green_bird: , 
    yellow_bird: 
  }
});