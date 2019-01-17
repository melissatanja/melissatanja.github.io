//-------Bird Creation

var bsize = 10;
var bspeed = 3;

var num = Math.floor(Math.random()) + 1; // this will get a number between 1 and 99;
num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

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