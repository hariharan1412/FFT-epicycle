var time = 0;
var wave = [];
var slider;

function setup(){

  createCanvas(1900 , 400);  
  slider = createSlider(1 , 10 , 1);
}
// let n = 1; 
function draw(){


  background(0);
  let x = 0;
  let y = 0;

  translate(200 , 200);

  for( let i = 0 ; i < slider.value(); i++){

    let prevx = x;
    let prevy = y;
    
    n = 2 * i + 1;
    let raduis = 50 * (4 / (n * PI)); 

    
    x += raduis * cos(n * time);
    y += raduis * sin(n * time);    
  
    time += 0.05;

    noFill();
    stroke(255 , 100);
    ellipse(prevx , prevy , raduis*2);

    stroke(255);
    line(prevx , prevy , x , y );
 
  }
  wave.unshift(y);


  beginShape();
  translate(200 , 0);
  line(x-200 , y , 0 , wave[0]);
  for(let i = 0 ; i < wave.length ; i++){
    // point(i , wave[i]);
    vertex(i , wave[i]);
  }
  endShape()


  if (wave.length > 1000){
    wave.pop();
  }
  
}