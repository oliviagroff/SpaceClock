var angle0 = 0;
var angle = 180;
var angle1 = 180;
var angle2 = 180;
var angle3 = 0;
var angle4 = 0;
var saturn = 240;
var hourMark = hour();
var minuteMark = minute();
var xSpacing = 10;
var ySpacing = 10;

function setup() {
  // put setup code here
createCanvas(1100, 1100);

angleMode(DEGREES);
noStroke();

//frameRate(30);
}

function draw() {
  // put drawing code here
hourMark = hour();
minuteMark = minute();
if(hour() >= 12) {
  background(20, 5, 60);
} else {
  background(41, 28, 119)
}


//stars
for(var i = 0; i < width/10; i++) {
  for(var j = 0; j < height/10; j++){
    fill(255, 255, 255, 175);
    ellipse(i * 90, j * 90, 2, 2);
  }
}

//solar ellipses
push();
noFill();
stroke(78, 98, 125, 100);
strokeWeight(2);
ellipse(width/2, height/2, 120, 120);
ellipse(width/2, height/2, 300, 300);
ellipse(width/2, height/2, 500, 500);
ellipse(width/2, height/2, 700, 700);
ellipse(width/2, height/2, 950, 950);
ellipse(width/2, height/2, 1050, 1050);
ellipse(width/2, height/2, 1130, 1130);
pop();

//sunrays
translate(width/2, height/2);
push();
var ang = 360/60
for(var i = 0; i <= 60; i++) {
  rotate(angle4);
  stroke(250, 254, 65, 150);
  line(100, 0, 0, 0);
  rotate(ang);
}
for(var i = 0; i <= 60; i++) {
  rotate(angle4);
  stroke(250, 254, 65, 200);
  line(80, 0, 0, 0);
  rotate(ang);
}
for(var i = 0; i <= 60; i++) {
  rotate(angle4);
  stroke(250, 254, 65);
  strokeWeight(2);
  line(60, 0, 0, 0);
  rotate(ang);
}
pop();
//sun center
fill(255);
ellipse(0, 0, 60, 60);
fill(255, 255, 200);
ellipse(0, 0, 58, 58);
fill(255, 255, 28);
ellipse(0, 0, 53 ,53);
fill(255, 208, 38);
ellipse(0, 0, 40 ,40);

//first planet
push();
angle4 = map(hour(), 0, 23, 0, 360);
rotate(angle4);
fill(110, 15, 15);
ellipse(0, -565, 25, 25);

fill(169, 9, 9);
ellipse(500, 500, 20, 20);
pop();

//yellow planet
push();
rotate(angle0);
fill(189, 166, 46);
ellipse(370, 370, 60, 10);
fill(255, 255, 28);
ellipse(370, 370, 30, 30);
fill(255, 255, 150);
ellipse(369, 369, 28, 28);

pop();

//red planet

angle = map(minuteMark, 0, 59, 0, 360);
rotate(angle)+45;
fill(255, 0, 0);
ellipse(100, 100, 100, 100);
fill(255, 80, 0);
ellipse(98, 98, 90, 90);
fill(255, 100, 0);
ellipse(95, 95, 70, 70);


///red moon
push();
angle2 = map(second(), 0, 59, 0, 360);
translate(100, 100);
rotate(angle2);
fill(255);
ellipse(43, 43, 10, 10);
pop();


//blue planet
push();
rotate(angle1);
noFill();
stroke(100);
strokeWeight(3);
ellipse(175, 175, 70, 20);
noStroke();
fill(0, 245, 255);
ellipse(175, 175, 50, 50);
stroke(150);
//planet rings
noFill();
arc(175, 175, 70, 20, 180, 0);
stroke(190);
arc(172, 175, 70, 20, 180, 0);

//blue moon
angle = map(second(), 0, 59, 0, 360);
translate(175, 175);
rotate(angle);
fill(0, 5, 195);
stroke(200);
strokeWeight(.5);
ellipse(30, 30, 10, 10);
pop();

//green planet
push();
rotate(angle);
stroke(0, 150, 100);
strokeWeight(3);
fill(0, 150, 100);
ellipse(saturn, saturn, 120, 50);
fill(100, 200, 100);
//planet rings
ellipse(saturn, saturn, 90, 90);
noFill();
arc(saturn, saturn, 120, 50, 0, 180)
pop();

//purple planet
angle3 = map(minuteMark, 0, 59, 0, 360);
rotate(angle3);
fill(250, 147, 255);
ellipse(330, 330, 120, 120);
fill(255, 177, 254);
ellipse(325, 325, 100, 100);
fill(255, 190, 255);
ellipse(320, 320, 80, 80);

//purple moon
push();
translate(330, 330);
rotate(angle1);
fill(255);
ellipse(50, 50, 10, 10);
pop();





angle0++;
angle1++;
angle++;
angle3++;
angle2++;






}
