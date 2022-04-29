var speed = 0;
var topSpeed = 0;
function setup() {
  var offset;
  if (1920-windowWidth > 1080-windowHeight)
  {
    offset = windowWidth/1920
  }else
  {
    offset = windowHeight/1080
  }
  
  canvas = createCanvas(1920*offset-10,1080*offset-10);
intervalCurrentPosition(positionPing, 1)
  
}

function positionPing(position){
    speed = position.speed;
}
function draw() {
  background(25);
  meter(height/2.5);
  stats();
  if (speed > topSpeed)
  {
    topSpeed = speed;
  }
  
}
var maxSpeed = 150;
var divisor = 10;
function meter(size)
{
  
  push();
  translate(width/5.3,0)
  strokeCap(SQUARE)
  textFont('Chakra Petch')
  textStyle('bold')
  textSize(size*(24/150))
  
  fill(100)
  circle(width/2,height-height/2.4,size)
  
  grad(width/2,height-height/2.4,size,size*(170/150),color(3, 132, 255,155),color(3, 132, 255,0))
  noFill();
  strokeWeight(4)
  grad(width/2,height-height/2.4,size*(400/150),size*(420/150),color(3, 132, 255,50),color(3, 132, 255,0))
  stroke(175,200,225)
  circle(width/2,height-height/2.4,size*(400/150))
  
  var t = createVector(width/2,height-height/2.4)
  
  
  textAlign(CENTER,CENTER)
  for (var i = 0; i < maxSpeed/divisor+0.01; i++)
  {
    fill(230)
    var theta = map(i,0,maxSpeed/divisor,PI-PI/5,TWO_PI+PI/5)
    stroke(200)
    strokeWeight(3)
    line(width/2+cos(theta)*size*(160/150),height-height/2.4+sin(theta)*size*(160/150),width/2+cos(theta)*size*(200/150),height-height/2.4+sin(theta)*size*(200/150))
    stroke(3, 132, 252,100)
    text(i*divisor,width/2+cos(theta)*size*(140/150),height-height/2.4+sin(theta)*size*(140/150))
    strokeWeight(2)
    stroke(3, 132, 255,155)
    textSize(size*(24/150))
    text(i*divisor,width/2+cos(theta)*size*(140/150),height-height/2.4+sin(theta)*size*(140/150))
    
    strokeWeight(1)
    fill(250)
    text(i*divisor,width/2+cos(theta)*size*(140/150),height-height/2.4+sin(theta)*size*(140/150))
    
  }
  for (var i = 0; i < maxSpeed/(divisor)+0.01; i+=0.5)
  {
    var theta = map(i,0,maxSpeed/divisor,PI-PI/5,TWO_PI+PI/5)
    stroke(200)
    strokeWeight(2)
    line(width/2+cos(theta)*size*(180/150),height-height/2.4+sin(theta)*size*(180/150),width/2+cos(theta)*size*(200/150),height-height/2.4+sin(theta)*size*(200/150))
    
    
    
  }
  stroke(0)
  fill(50)
  circle(width/2,height-height/2.4,size-size/10)
  stroke(255,0,0,255)
  strokeWeight(2)
  var s = map(speed,0,maxSpeed,PI-PI/5,TWO_PI+PI/5)
  line(width/2+cos(s)*(size-size/10)/2,height-height/2.4+sin(s)*(size-size/10)/2,width/2+cos(s)*(size-size/10)*1.05,height-height/2.4+sin(s)*(size-size/10)*1.05)
  strokeWeight(4)
  stroke(255,0,0,100)
  line(width/2+cos(s)*(size-size/10)/2,height-height/2.4+sin(s)*(size-size/10)/2,width/2+cos(s)*(size-size/10)*1.05,height-height/2.4+sin(s)*(size-size/10)*1.05)
  
  fill(255);
  stroke(0)
  textSize(size*(70/150))
  textAlign(CENTER,CENTER)
  text(round(speed),width/2,height-height/2.4+textSize()/12)
  pop();
}

function stats()
{
  var size = 100;
  var x = 0;
  var y = 0;
  push();
  strokeWeight(4)
  stroke(color(3, 132, 255,40))
  noFill();
  for (var i = 1; i < 8; i++)
  {
    strokeWeight(i)
    stroke(color(3, 132, 255,100-(i*8)))
    rect(x+(size/10),y+(size/10),size*2,height-(size/5))
  }
  noStroke();
  fill(51)
  rect(x+(size/10),y+(size/10),size*2,height-(size/5))
  
  textSize(size/5)
  strokeWeight(2)
  stroke(3, 132, 252,100)
  fill(230)
  textFont("Chakra Petch")
  textAlign(LEFT,TOP)
  text("Top Speed: " + topSpeed,x+(size/10)+10,y+(size/10)+size/10)
  text("Top Time: ",x+(size/10)+10,y+(size/10)+(size/10)*4)
  stroke(30)
  line(x+(size/10)+2,(y+(size/10)+height-(size/5))/2,x+(size/10)+size*2-2,(y+(size/10)+height-(size/5))/2)
  stroke(3, 132, 252,100)
  text("Speed: " + topSpeed,x+(size/10)+10,(y+(size/10)+height-(size/5))/2+10)
  
  pop();
}

function grad(x,y,r1,r2,clr1,clr2)
{
  push();
  noFill();
  for (var i = r1; i < r2; i++)
  {
    stroke(lerpColor(clr1,clr2,map(i,r1,r2,0,1)));
    circle(x,y,i);
  }
  pop();
}



