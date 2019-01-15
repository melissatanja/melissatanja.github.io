/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * Introduces the grid of clickable objects we will use in the next exampl
 * Example of dealing with simple classes in javascript
 * 
 * takes the coordinates of everyone's mouse that is connected and draws the average
 */

// server variables
var dataServer;
var pubKey = 'pub-c-a705a585-4407-4f88-8b83-ac846c45e13a';
var subKey = 'sub-c-64587bc8-b0cf-11e6-a7bb-0619f8945a4f';
var channelName = "cursors";


var cs = window.innerHeight;
var cell = (cs-200)/8;





var x = cs-100-cell/2;
var y = cs-100-cell/2;








function setup() {

  createCanvas(window.innerHeight, window.innerHeight);
  noStroke();
  background(111);


}

  function draw() {






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

  //Play Area
  rectMode(CENTER);
  fill('#E7F7BD');
  rect(cs/2,cs/2,cs-200,cs-200);

  strokeWeight(3);

  //grid
  stroke('#CBED6C');
  // line(100,100,cs-100,cs-100);

  for(let i=0;i<9;i++){
    // strokeCap(SQUARE);                                                    <--------Fix this later when prof is done
    line(map(cs/8*i,0,cs,100,cs-100),100,map(cs/8*i,0,cs,100,cs-100),cs-100);
    line(100,map(cs/8*i,0,cs,100,cs-100),cs-100,map(cs/8*i,0,cs,100,cs-100));
  }

  strokeWeight(0);


ellipseMode(RADIUS);


var speed = .5;
var psize = 15;

//characters
  fill('#006600');

ellipse(x,y,psize);




if(x< cs/2)



  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }


  if (keyIsDown(UP_ARROW)) {
    y -= speed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += speed;
  }









}











