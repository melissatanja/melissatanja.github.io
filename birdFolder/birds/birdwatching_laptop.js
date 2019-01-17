// server variables

var dataServer;
var pubKey = 'pub-c-ec3ff967-067c-4cd4-9793-79b8f7f11c56';
var subKey = 'sub-c-f43fe396-14f2-11e9-b552-46d61eed2fbc';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "movement";

var img_red;
var img_blue;
var img_green;
var img_yellow;

var cs = window.innerHeight;

// var w = window.innerWidth;
// var h = window

function preload(){

  img_red = loadImage('user_icons/user_icon_red.png');
  img_blue = loadImage('user_icons/user_icon_blue.png');
  img_green = loadImage('user_icons/user_icon_green.png');
  img_yellow = loadImage('user_icons/user_icon_yellow.png');

}

function setup() 
{
  // getAudioContext().resume();
  createCanvas(cs, cs);
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

}

function draw() 
{
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

  // if(inMessage.message.user = "red"){

  //   // ellipseMode(RADIUS);
  //   imageMode(CENTER);

  //   // var speed = 1.5;
  //   var r = 15;

  //   //characters
  //     // fill('#006600');

    // image(red, moveX, moveY, r, r);

  //   // x = constrain(x);
  //   // console.log(constrain(x,100,cs-100));

  //     // if (keyIsDown(LEFT_ARROW)) {
  //     //   x -= speed;
  //     // }
  //     // if (keyIsDown(RIGHT_ARROW)) {
  //     //   x += speed;
  //     // }
  //     // if (keyIsDown(UP_ARROW)) {
  //     //   y -= speed;
  //     // }
  //     // if (keyIsDown(DOWN_ARROW)) {
  //     //   y += speed;
  //     // }


  //   // x = constrain(x,100+r,width-100-r);
  //   // y = constrain(y,100+r,width-100-r);

  // }

}

function tradeRequest(){

  if(inMessage.message.user = "red"){

    //trading with blue user
    if(trade_blue === true){

      if(inMessage.message.blue_bird > 0){

        //trading blue bird
        inMessage.message.blue_bird -= 1;

        if(inMessage.message.user = "blue"){

          //receiving blue bird
          inMessage.message.blue_bird += 1;

        }

      }else if(inMessage.message.green_bird > 0){

        //trading green bird
        inMessage.message.green_bird -= 1;

        if(inMessage.message.user = "blue"){

          //receiving green bird
          inMessage.message.green_bird += 1;

        }

      }else if(inMessage.message.yellow_bird > 0){

        //trading yellow bird
        inMessage.message.yellow_bird -= 1;

        if(inMessage.message.user = "blue"){

          //receiving yellow bird
          inMessage.message.yellow_bird += 1;

        }

      }else{

        window.alert("No birds available");

      }

    }

    //trading with green user
    if(trade_green === true){



    }

    //trading with yellow user
    if(trade_yellow === true){



    }

  }

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works because we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == channelName)
  {

    if(inMessage.message.user = "red"){
      /*
      var moveX = map(inMessage.message.x_angle, 0, width/2);
      var moveY = map(inMessage.message.y_angle, 0, height/2);

      image(red, moveX, moveY, r, r);

      console.log("red: " + moveX + ", " + moveY);
      */
      console.log(inMessage);


    }

  }
}