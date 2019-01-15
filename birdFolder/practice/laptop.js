// server variables

var dataServer;
var subKey = 'sub-c-920db3fa-1363-11e9-a843-26c2824ead74';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "movement";

function setup() 
{
  // getAudioContext().resume();
  createCanvas(windowWidth, windowHeight);
  background(255);
  


   // initialize pubnub
  dataServer = new PubNub(
  {
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});


    //display a waiting message
    background(255);
    noStroke();
    fill(0);  
    textSize(30)
    text("Waiting... update1", width/2, height/2);

}

function draw() 
{

// text("no angle info");

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               
  background(255);
  text('x pos: ' + inMessage.message.xVal, width/2, height/4);
  text('y pos: ' + inMessage.message.yVal, width/2, height/2);

  console.log(inMessage.message.x);
  console.log(inMessage.message.y);

}

