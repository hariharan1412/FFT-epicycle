//HARIHARAN FOURIER EPICYCLES

let x = [];
let y = [];

let fourierX;
let fourierY;

var time = 0;
var path = [];

function setup(){ 

  createCanvas(2000 , 1600);  
  
  // x = [60 , 60 , 60 , 61 , 61 , 61 , 61 , 61 , 61 , 61 , 61 , 61 , 61 , 61 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 62 , 63 , 63 , 63 , 63 , 63 , 63 , 63 , 63 , 63 , 63 , 63 , 64 , 64 , 64 , 64 , 64 , 64 , 64 , 64 , 64 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 65 , 66 , 66 , 66 , 66 , 66 , 66 , 66 , 66 , 67 , 67 , 67 , 67 , 67 , 67 , 67 , 67 , 67 , 68 , 68 , 68 , 68 , 68 , 68 , 68 , 69 , 69 , 69 , 69 , 69 , 69 , 69 , 70 , 70 , 70 , 70 , 70 , 70 , 70 , 70 , 71 , 71 , 71 , 71 ]
  // y = [570 , 571 , 572 , 559 , 560 , 561 , 562 , 563 , 564 , 565 , 566 , 567 , 568 , 569 , 549 , 550 , 551 , 552 , 553 , 554 , 555 , 556 , 557 , 558 , 570 , 571 , 572 , 541 , 542 , 543 , 544 , 545 , 546 , 547 , 548 , 568 , 569 , 570 , 534 , 535 , 536 , 537 , 538 , 539 , 540 , 567 , 568 , 527 , 528 , 529 , 530 , 531 , 532 , 533 , 565 , 566 , 567 , 521 , 522 , 523 , 524 , 525 , 526 , 564 , 565 , 515 , 516 , 517 , 518 , 519 , 520 , 562 , 563 , 564 , 510 , 511 , 512 , 513 , 514 , 561 , 562 , 505 , 506 , 507 , 508 , 509 , 560 , 561 , 500 , 501 , 502 , 503 , 504 , 558 , 559 , 560 , 496 , 497 , 498 , 499 ]

  x_cor = x_cor()
  y_cor = y_cor()

  for(let i = 0 ; i < x_cor.length ; i+= 100){

    x.push(x_cor[i])
    y.push(y_cor[i])

  }

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