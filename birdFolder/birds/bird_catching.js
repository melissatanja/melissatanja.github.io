//red user
function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y, rX, rY) <= bsize+15){

console.log("functional");

      birdsBlue.splice(i,1);

      Red[1] += 1;
    }
  }
}

function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y, rX, rY) <= bsize+15){
      birdsRed.splice(i,1);

      Red[0] += 1;
    }
  }
}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y, rX, rY) <= bsize+15){
      birdsYellow.splice(i,1);

      Red[3] += 1;   
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y, rX, rY) <= bsize+15){
      birdsGreen.splice(i,1);

      Red[2] += 1;
    }
  }
}

//blue user
function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y, bX, bY) <= bsize+15){
      birdsBlue.splice(i,1);

      Blue[1] += 1;
    }
  }
}

function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y, bX, bY) <= bsize+15){
      birdsRed.splice(i,1);

      Blue[0] += 1;
    }
  }
}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y, bX, bY) <= bsize+15){
      birdsYellow.splice(i,1);

      Blue[3] += 1; 
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y, bX, bY) <= bsize+15){
      birdsGreen.splice(i,1);

      Blue[2] += 1;
    }
  }
}

//green user
function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y, gX, gY) <= bsize+15){
      birdsBlue.splice(i,1);

      Green[1] += 1;
    }
  }
}

function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y, gX, gY) <= bsize+15){
      birdsRed.splice(i,1);

      Green[0] += 1;
    }
  }
}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y, gX, gY) <= bsize+15){
      birdsYellow.splice(i,1);

      Green[3] += 1;  
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y, gX, gY) <= bsize+15){
      birdsGreen.splice(i,1);

      Green[2] += 1;
    }
  }
}

//yellow user
function birdCatchB(){
  for(let i=0;i<birdsBlue.length;i++){
    if(dist(birdsBlue[i].x,birdsBlue[i].y, yX, yY) <= bsize+15){
      birdsBlue.splice(i,1);

      Yellow[1] += 1;
    }
  }
}

function birdCatchR(){
  for(let i=0;i<birdsRed.length;i++){
    if(dist(birdsRed[i].x,birdsRed[i].y, yX, yY) <= bsize+15){
      birdsRed.splice(i,1);

      Yellow[0] += 1;
    }
  }
}
function birdCatchY(){
  for(let i=0;i<birdsYellow.length;i++){
    if(dist(birdsYellow[i].x,birdsYellow[i].y, yX, yY) <= bsize+15){
      birdsYellow.splice(i,1);

      Yellow[3] += 1;  
    }
  }
}
function birdCatchG(){
  for(let i=0;i<birdsGreen.length;i++){
    if(dist(birdsGreen[i].x,birdsGreen[i].y, yX, yY) <= bsize+15){
      birdsGreen.splice(i,1);

      Yellow[2] += 1;
    }
  }
}