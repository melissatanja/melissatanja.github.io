// server variables

var dataServer;
var pubKey = 'pub-c-182a2099-8001-444d-9c8f-35f7b37c8846';
var subKey = 'sub-c-920db3fa-1363-11e9-a843-26c2824ead74';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "movement";

function setup() 
{
  getAudioContext().resume();
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  

   // initialize pubnub
  dataServer = new PubNub(
  {
    publish_key   : pubKey,  //get these from the pubnub account online
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });

  setInterval(getOrientation, 300);

}

function draw() 
{

  // x+=accelerationX*0.05;
  // y+=accelerationY*0.05;
  // z+=accelerationZ*0.05;
  // normalMaterial();
  // rotateX(x);
  // rotateY(y);
  // rotateZ(z);
  // box(200, 200, 200);

  text("Waiting... update2", width/2, height/2);

}


//sends from the button press
function getOrientation() {

  var yNum = round(rotationY)/10 + 4.5;
  var xNum = round(rotationX)/10;

  var xPos = constrain(xNum, -4.5, 4.5);
  var yPos = constrain(yNum, -4.5, 4.5);


// console.log(round(rotationY));
// console.log(round(rotationX));

  //publish the number to everyone.
  dataServer.publish(
    {
      channel: channelName,
      message: 
      {
        xVal: xPos,
        yVal: yPos, 
        y: yNum,
        x: xNum      
      }
    });

}


