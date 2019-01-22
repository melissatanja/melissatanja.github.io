/*

Blank pubnub sketch
 */

// server variables

var dataServer;
var pubKey = 'pub-c-2aaa0bce-4824-4395-9800-dfc7dbca679d';
var subKey = 'sub-c-ce34fffc-1de8-11e9-a469-92940241a6b5';

// var colours = ['red', 'blue', 'green', 'yellow'];
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


// var redUser = [];

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


function setup() 
{
  // getAudioContext().resume();
  createCanvas(w, h);
  noStroke();
  background(111);
  
  

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

  // redButton = createButton('TRADE RED');
  // redButton.position(w/5, h/2);
  // redButton.mouseClicked(trade_red = true);

  blueButton = createButton('TRADE BLUE');
  blueButton.position((w/4), h/4*3);
  blueButton.mouseClicked(tradeB());

  greenButton = createButton('TRADE GREEN');
  greenButton.position((w/2), h/4*3);
  greenButton.mouseClicked(tradeG());

  yellowButton = createButton('TRADE YELLOW');
  yellowButton.position((w/4) * 3, h/4*3);
  yellowButton.mouseClicked(tradeY());

  setInterval(sendData, 100);

  // console.log("interval 500");   

}
    
function draw() {

// red_bird = 5;
// yellow_bird = 3;
// blue_bird = 2;
// green_bird = 1;

// var redCount = 1;
// var blueCount = 1;
// var greenCount = 1;
// var yellowCount = 1;

if(redCount != undefined){

  // text("red: " + redCount, width/5, height/2);

  // for(var r=0;r<=3;r++){
    fill("red");
    // ellipse(map(width/4*r, 0, w*3/4,300, w-300),height/5-100,100,100);
    if(redCount > 0){
      image(Rbird, (width/5) * redCount, height/8, 50, 50);
    }
    if(redCount > 1){
      image(Rbird, (width/5) * redCount, height/8, 50, 50);
      image(Rbird, (width/5) * (redCount - 1), height/8, 50, 50);
    }
  //   if(r+1 == redCount){
  //     break;}
  // }
}

if(blueCount != undefined){

  // text("blue: " + blueCount, (width/5) * 2, height/2);

  // for(var b=0;b<=3;b++){
    fill("blue");
    // ellipse(map(width/4*b,0,w*3/4,300,w-300),2*height/5-100,100,100);
    if(blueCount > 0){
      image(Bbird, (width/5) * blueCount, height/8 * 2, 50, 50);
    }
    if(blueCount > 1){
      image(Bbird, (width/5) * blueCount, height/8 * 2, 50, 50);
      image(Bbird, (width/5) * (blueCount - 1), height/8 * 2, 50, 50);
    }
  //   if(b+1 == blueCount){
  //     break;}
  // }
}

if(greenCount != undefined){

  // text("green: " + greenCount, (width/5) * 3, height/2);

  // for(var g=0;g<=3;g++){
    fill("green");
    // ellipse(map(width/4*g,0,w*3/4,300,w-300),3*height/5-100,100,100);
    if(greenCount > 0){
      image(Gbird, (width/5) * greenCount, height/8 * 3, 50, 50);
    }
    if(greenCount > 1){
      image(Gbird, (width/5) * greenCount, height/8 * 3, 50, 50);
      image(Gbird, (width/5) * (greenCount - 1), height/8 * 3, 50, 50);
    }
  //   if(g+1 == greenCount){
  //     break;}
  // } 
}

if(yellowCount != undefined){

  // text("yellow: " + yellowCount, (width/5) * 4, height/2);         

  // for(var y=0;y<=3;y++){
    fill("yellow");
    // ellipse(map(width/4*y,0,w*3/4,300,w-300),4*height/5-100,100,100);
    if(yellowCount > 0){
      image(Ybird, (width/5) * yellowCount, height/8 * 4, 50, 50);
    }
    if(yellowCount > 1){
      image(Ybird, (width/5) * yellowCount, height/8 * 4, 50, 50);
      image(Ybird, (width/5) * (yellowCount - 1), height/8 * 4, 50, 50);
    }
    // if(y+1 == yellowCount){
      // break;}
  // }  
}

}

function tradeB(){

  tradeWithWho = "b";
  sendTrade();
  // tradeReq = true;

  // def();

}

function tradeG(){

  tradeWithWho = "g";
  sendTrade();
  // tradeReq = true;

  // def();

}

function tradeY(){

  tradeWithWho = "y";
  sendTrade();
  // tradeReq = true;

  // def();

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

      // tradeY: trade_yellow,
      // tradeG: trade_green,
      // tradeB: trade_blue
    }
  });

  // trade_yellow = 0;
  // trade_green = 0;
  // trade_blue = 0;
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

    // if (inMessage.publisher = "red"){

    // redUser[0]=inMessage.message.user_r.red_bird;
    // redUser[1]=inMessage.message.user_r.blue_bird;
    // redUser[2]=inMessage.message.user_r.yellow_bird;
    // redUser[3]=inMessage.message.user_r.green_bird;

    // if(inMessage.message.user_r){
    // inMessage.message.redCount = red_bird;
    // inMessage.message.blueCount = blue_bird;
    // inMessage.message.greenCount = green_bird;
    // inMessage.message.yellowCount = yellow_bird;

      redCount = inMessage.message.user_r_red_bird;
      blueCount = inMessage.message.user_r_blue_bird;
      greenCount = inMessage.message.user_r_green_bird;
      yellowCount = inMessage.message.user_r_yellow_bird;

    // }

    // text("red: ", redCount, width/5, height/2);
    // text("blue: ", blueCount, (width/5) * 2, height/2);
    // text("green: ", greenCount, (width/5) * 3, height/2);
    // text("yellow: ", yellowCount, (width/5) * 4, height/2);

    // this is where we get info about bird count
    // }


  }
}