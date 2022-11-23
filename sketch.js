//HARIHARAN FOURIER EPICYCLES

let x = [];
let y = [];

let fourierX;
let fourierY;


var time = 0;
var path = [];

function setup(){ 

  createCanvas(800 , 600);  

  for(let i = 0 ; i < 60 ; i++){

    x[i] = i;
    y[i] = i;
    
  }

  // y = [100 , 100 , 100 , -100 , -100 , -100 , 100 , 100 , 100 , -100 , -100 , -100];

  fourierX = dft(x);
  fourierY = dft(y);

}

function epicycle(x , y , rotation ,  fourier){

  for( let i = 0 ; i < fourier.length; i++){

    let prevx = x;
    let prevy = y;
    
    let freq = fourier[i].freq;
    let raduis = fourier[i].amp;
    let phase = fourier[i].phase; 
    
    x += raduis * cos(freq * time + phase + rotation);
    y += raduis * sin(freq * time + phase + rotation);    
      
    noFill();
    stroke(255 , 100);
    ellipse(prevx , prevy , raduis*2);

    stroke(255);
    line(prevx , prevy , x , y );
    
  }

  return createVector(x , y);

}


// let n = 1; 
function draw(){


  background(0);
  // let x = 0;
  // let y = 0;

  // translate(200 , 200);

  let vx = epicycle(100 , 200 , 0 ,  fourierX);
  let vy = epicycle(300 , 200 , HALF_PI , fourierY);
  
  let v =  createVector(vx.x , vy.y);

  path.unshift(v);
  

  // translate(200 , 0);
  line(vx.x , vx.y , v.x , v.y);
  line(vy.x , vy.y , v.x , v.y);

  beginShape();
  for(let i = 0 ; i < path.length ; i++){
    // point(i , wave[i]);
    vertex(path[i].x , path[i].y);
  }
  endShape()
  
  let dt = TWO_PI / fourierY.length;
  time += dt;

  // if (wave.length > 1000){
  //   wave.pop();
  // }
  
}