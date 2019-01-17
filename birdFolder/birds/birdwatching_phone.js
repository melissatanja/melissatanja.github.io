/*

Blank pubnub sketch
 */

// server variables

var dataServer;
var pubKey = 'pub-c-ec3ff967-067c-4cd4-9793-79b8f7f11c56';
var subKey = 'sub-c-f43fe396-14f2-11e9-b552-46d61eed2fbc';

// var colours = ['red', 'blue', 'green', 'yellow'];
var trade_red = false;
var trade_blue = false;
var trade_green = false;
var trade_yellow = false;

//size of the active area
var w = window.innerWidth;
var h = window.innerHeight;

//consider making a channel for each user?
var channelName = "movement";

function setup() 
{
  // getAudioContext().resume();
  createCanvas(w, h);
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

  // redButton = createButton('TRADE RED');
  // redButton.position(w/5, h/2);
  // redButton.mouseClicked(trade_red = true);

  blueButton = createButton('TRADE BLUE');
  blueButton.position((w/4), h/2);
  blueButton.mouseClicked(tradeB);

  greenButton = createButton('TRADE GREEN');
  greenButton.position((w/2), h/2);
  greenButton.mouseClicked(tradeG);

  yellowButton = createButton('TRADE YELLOW');
  yellowButton.position((w/4) * 3, h/2);
  yellowButton.mouseClicked(tradeY);

  setInterval(sendData, 500);

  // console.log("interval 500");

}

function draw() 
{


}

function tradeB(){

  trade_blue = true;

}

function tradeG(){

  trade_green = true;

}

function tradeY(){

  trade_yellow = true;

}

function sendData() {
 
  var yNum = round(rotationY * 4) + 180;
  var xNum = round(rotationX * 4);

  var xPos = constrain(xNum, -180, 180);
  var yPos = constrain(yNum, -180, 180);

  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
      channel: channelName,
      message: 
    {
      user: "red",
      x_angle: xPos, 
      y_angle: yPos
      // red_bird: , 
      // blue_bird: , 
      // green_bird: , 
      // yellow_bird: 
    }
  });
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

    // this is where we get info about bird count


  }
}