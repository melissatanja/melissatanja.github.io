var birdcolour = ["blue","red","green","yellow"];

var birdN = 4;
var birdS = 3;

var birdsBlue = [];
var birdsRed = [];
var birdsYellow = [];
var birdsGreen = [];

var dataServer;
var pubKey = 'pub-c-a705a585-4407-4f88-8b83-ac846c45e13a';
var subKey = 'sub-c-64587bc8-b0cf-11e6-a7bb-0619f8945a4f';
var channelName = "cursors";


var cs = window.innerHeight;
var cell = (cs-200)/8;



var x = cs-100-cell/2;
var y = cs-100-cell/2;

///////////-1 or 1 generator
var num = Math.floor(Math.random()) + 1; // this will get a number between 1 and 99;
num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

function setup() {

  createCanvas(window.innerHeight, window.innerHeight);
  noStroke();
  background(111);




//setup birds
  for (let i = 0; i < 4; i++) {
    birdsBlue[i] = new BirdieB(random(cs),random(cs));
    birdsRed[i] = new BirdieR(random(cs),random(cs));
    birdsYellow[i] = new BirdieY(random(cs),random(cs));
    birdsGreen[i] = new BirdieG(random(cs),random(cs));

  }




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


background(0,0,0,50)

ellipseMode(RADIUS);


var speed = 1.5;
var r = 15;

//characters
  // fill('#006600');
fill("blue");
ellipse(x,y,r);

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


x = constrain(x,100+r,width-100-r);
y = constrain(y,100+r,width-100-r);




for(let i=0;i<birdsBlue.length;i++){
    fill("blue");
    birdsBlue[i].move();
    birdsBlue[i].show();
}

for(let i=0;i<birdsRed.length;i++){
     fill("red");
    birdsRed[i].move();
    birdsRed[i].show();
}

for(let i=0;i<birdsGreen.length;i++){
    fill("green");
    birdsGreen[i].move();
    birdsGreen[i].show();
}
for(let i=0;i<birdsYellow.length;i++){
    fill("yellow");
    birdsYellow[i].move();
    birdsYellow[i].show();
}

/*
    fill("red");
    birdsRed[i].move();
    birdsRed[i].show();
    fill("green");
    birdsGreen[i].move();
    birdsGreen[i].show();
    fill("yellow");
    birdsYellow[i].move();
    birdsYellow[i].show();
}
*/

birdCatchB();
birdCatchR();
birdCatchY();
birdCatchG();



}














function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y,x,y) <= bsize+15){
      birdsBlue.splice(i,1);

    }
  }
}





function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y,x,y) <= bsize+15){
      birdsRed.splice(i,1);
    }
  }

}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y,x,y) <= bsize+15){
      birdsYellow.splice(i,1);
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y,x,y) <= bsize+15){
      birdsGreen.splice(i,1);
    }
  }
}

















































//-------Bird Creation

var bsize = 10;
var bspeed = 3;

class BirdieB{
  constructor(x,y) {
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.x = x;
    this.y = y;
    this.xs = bspeed*num;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.ys = bspeed*num;
  }
  move(){
    this.x += this.xs;
    this.y += this.ys;

    if(this.x >= cs-bsize){
      this.x = cs-bsize;
      this.xs*= -1;
    }
    if(this.y >= cs-bsize){
      this.y = cs-bsize;
      this.ys*= -1;
    }

    if(this.x<=0+bsize){
      this.x = 0+bsize;
      this.xs *= -1; 
    }
    if(this.y<=0){
      this.y = 0+bsize;
      this.ys *= -1;
    }

  }
  show(){
    ellipse(this.x,this.y, bsize);
  }
}

class BirdieR{

  constructor(x,y) {
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.x = x;
    this.y = y;
    this.xs = bspeed*num;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.ys = bspeed*num;
  }

  move(){
    this.x += this.xs;
    this.y += this.ys;

    if(this.x >= cs-bsize){
      this.x = cs-bsize;
      this.xs*= -1;
    }
    if(this.y >= cs-bsize){
      this.y = cs-bsize;
      this.ys*= -1;
    }

    if(this.x<=0+bsize){
      this.x = 0+bsize;
      this.xs *= -1; 
    }
    if(this.y<=0){
      this.y = 0+bsize;
      this.ys *= -1;
    }


  }

  show(){
    ellipse(this.x,this.y, bsize);
  }
}


class BirdieG{

  constructor(x,y) {
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.x = x;
    this.y = y;
    this.xs = bspeed*num;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.ys = bspeed*num;
  }

  move(){
    this.x += this.xs;
    this.y += this.ys;

    if(this.x >= cs-bsize){
      this.x = cs-bsize;
      this.xs*= -1;
    }
    if(this.y >= cs-bsize){
      this.y = cs-bsize;
      this.ys*= -1;
    }

    if(this.x<=0+bsize){
      this.x = 0+bsize;
      this.xs *= -1; 
    }
    if(this.y<=0){
      this.y = 0+bsize;
      this.ys *= -1;
    }


  }
  show(){
    ellipse(this.x,this.y, bsize);
  }
}


class BirdieY{

  constructor(x,y) {
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.x = x;
    this.y = y;
    this.xs = bspeed*num;
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

    this.ys = bspeed*num;

  }

  move(){
    this.x += this.xs;
    this.y += this.ys;

    if(this.x >= cs-bsize){
      this.x = cs-bsize;
      this.xs*= -1;
    }
    if(this.y >= cs-bsize){
      this.y = cs-bsize;
      this.ys*= -1;
    }

    if(this.x<=0+bsize){
      this.x = 0+bsize;
      this.xs *= -1; 
    }
    if(this.y<=0){
      this.y = 0+bsize;
      this.ys *= -1;
    }

  }
  show(){
    ellipse(this.x,this.y, bsize);
  }
}