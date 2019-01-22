/*

Blank pubnub sketch
 */

// server variables

var dataServer;
var pubKey = 'pub-c-2aaa0bce-4824-4395-9800-dfc7dbca679d';
var subKey = 'sub-c-ce34fffc-1de8-11e9-a469-92940241a6b5';

// var colours = ['red', 'blue', 'green', 'yellow'];
var trade_red = false;
var trade_blue = false;
var trade_green = false;
var trade_yellow = false;

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

//consider making a channel for each user?
var channelName = "movement";


function setup() 
{
  // getAudioContext().resume();
  createCanvas(w, h);
  background(111);
  
  

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

  // blueButton = createButton('TRADE BLUE');
  // blueButton.position((w/4), h/4*3);
  // blueButton.mouseClicked(tradeB);

  // greenButton = createButton('TRADE GREEN');
  // greenButton.position((w/2), h/4*3);
  // greenButton.mouseClicked(tradeG);

  // yellowButton = createButton('TRADE YELLOW');
  // yellowButton.position((w/4) * 3, h/4*3);
  // yellowButton.mouseClicked(tradeY);

  setInterval(sendData, 100);

  // console.log("interval 500");   

}
    
function draw() {
  noStroke();
  background(111);

// red_bird = 5;
// yellow_bird = 3;
// blue_bird = 2;
// green_bird = 1;

if(redCount != undefined){

  text("red: " + redCount, width/5, height/2);

  for(var r=0;r<=3;r++){
    fill("red");
    ellipse(map(width/4*r,0,w*3/4,300,w-300),height/5-100,100,100);
    if(r+1 == redCount){
      break;}
  }
}

if(blueCount != undefined){

  text("blue: " + blueCount, (width/5) * 2, height/2);

  for(var b=0;b<=3;b++){
    fill("blue");
    ellipse(map(width/4*b,0,w*3/4,300,w-300),2*height/5-100,100,100);
    if(b+1 == blueCount){
      break;}
  }
}

if(greenCount != undefined){

  text("green: " + greenCount, (width/5) * 3, height/2);

  for(var g=0;g<=3;g++){
    fill("green");
    ellipse(map(width/4*g,0,w*3/4,300,w-300),3*height/5-100,100,100);
    if(g+1 == greenCount){
      break;}
  } 
}

if(yellowCount != undefined){

  text("yellow: " + yellowCount, (width/5) * 4, height/2);         

  for(var y=0;y<=3;y++){
    fill("yellow");
    ellipse(map(width/4*y,0,w*3/4,300,w-300),4*height/5-100,100,100);
    if(y+1 == yellowCount){
      break;}
  }  
}

}



// function def(){

//   trade_blue = false;
//   trade_green = false;
//   trade_yellow = false;
//   tradeReq = false;

// }

// function tradeB(){

//   trade_blue = true;
//   // tradeReq = true;

//   // def();

// }

// function tradeG(){

//   trade_green = true;
//   // tradeReq = true;

//   // def();

// }

// function tradeY(){

//   trade_yellow = true;
//   // tradeReq = true;

//   // def();

// }

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
      y_angle: yPos
      // red_bird: red_bird, 
      // blue_bird: blue_bird, 
      // green_bird: green_bird, 
      // yellow_bird: yellow_bird, 
      // tradeY: trade_yellow,
      // tradeG: trade_green,
      // tradeB: trade_blue
    }
  });
}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

    // inMessage.message.redCount = red_bird;
    // inMessage.message.blueCount = blue_bird;
    // inMessage.message.greenCount = green_bird;
    // inMessage.message.yellowCount = yellow_bird;

    redCount = inMessage.message.red_bird;
    blueCount = inMessage.message.blue_bird;
    greenCount = inMessage.message.green_bird;
    yellowCount = inMessage.message.yellow_bird;

    // text("red: ", redCount, width/5, height/2);
    // text("blue: ", blueCount, (width/5) * 2, height/2);
    // text("green: ", greenCount, (width/5) * 3, height/2);
    // text("yellow: ", yellowCount, (width/5) * 4, height/2);

    // this is where we get info about bird count


  }
}