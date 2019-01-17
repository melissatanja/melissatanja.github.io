// server variables

var dataServer;
var pubKey = '';
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

}

function draw() 
{



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

    var moveX = map(xPos, 0, width/2);
    var moveY = map(yPos, 0, height/2);

  }
}