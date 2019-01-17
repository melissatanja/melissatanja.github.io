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


function setup() {

  createCanvas(window.innerHeight, window.innerHeight);
  noStroke();
  background(111);




//setup birds
  for (let i = 0; i < 4; i++) {
    // birdsBlue[i] = new BirdieB(0,cs);
    birdsRed[i] = new BirdieR(random(cs),random(cs));
    // birdsYellow[i] = new BirdieY(0,cs);
    // birdsGreen[i] = new BirdieG(0,cs);

  }




}

  function draw() {

///////////-1 or 1 generator
// var num = Math.floor(Math.random()) + 1; // this will get a number between 1 and 99;
// num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
// console.log("number: "+num);

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


var speed = 1.5;
var r = 15;

//characters
  fill('#006600');

ellipse(x,y,r);

// x = constrain(x);
console.log(constrain(x,100,cs-100));

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




for(let i=0;i<4;i++){
    // stroke(map(BirdieB[i].x,0,width,0,255),0,0);

    // fill("blue");
    // birdsBlue[i].move();
    // birdsBlue[i].show();
    fill("red");
    birdsRed[i].move();
    birdsRed[i].show();
    // fill("green");
    // birdsGreen[i].move();
    // birdsGreen[i].show();
    // fill("yellow");
    // birdsYellow[i].move();
    // birdsYellow[i].show();


}







}



// class BirdieB{
//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//     this.xs = 3;
//     this.ys = 3;
//   }
//   move(){
//     this.x += this.xs;
//     this.y += this.ys;
//     // if(this.x)
//   }
//   show(){
//     ellipse(this.x,this.y, 10,10);
//   }
// }




class BirdieR{

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.xs = 3;
    this.ys = 3;
  }

  move(){
    this.x += this.xs;
    this.y += this.ys;
    if(this.x >= cs){
      this.x = cs;
      this.xs*= -1;
    }
    if(this.y >= cs){
      this.y = cs;
      this.ys*= -1;
    }

  }

  show(){
    ellipse(this.x,this.y, 10,10);
  }
}








// class BirdieG{

//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//     this.xs = 3;
//     this.ys = 3;
//   }

//   move(){
//     this.x += this.xs;
//     this.y += this.ys;

//     // if(this.x)
//   }
//   show(){
//     ellipse(this.x,this.y, 10,10);
//   }
// }






// class BirdieY{

//   constructor(x,y) {
//     this.x = x;
//     this.y = y;
//     this.xs = 3;
//     this.ys = 3;

//   }

//   move(){
//     this.x += this.xs;
//     this.y += this.ys;

//     // if(this.x)
//   }
//   show(){
//     ellipse(this.x,this.y, 10,10);
//   }
// }
