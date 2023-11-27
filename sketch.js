function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  // fill(255)
  // textSize(50)
  // text("x:"+mouseX+",y:"+mouseY,50,50)
  
  translate(width/2,height/2)
  drawface()

}

function drawface() {
  push()
  fill("#04cf23") 
  arc(0,0,400,450,0.5*PI,1.5*PI)
  fill("#0d001f") 
  arc(0,0,400,450,1.5*PI,0.5*PI)
//------------------
 strokeWeight(3)
 stroke("#d6da06")
 line(-171,32,-195,40)
 line(-166,-41,-191,-60)
 line(-31,-62,-119,-178)

 line(-30,90,-60,120)
 line(-60,120,-120,90)
 line(-120,90,-173,109)
//---------------------- 
 line(-30,150,-60,180)
 line(-60,180,-110,160)
 line(-110,160,-128,170)
//**************************
 stroke("#6f00ff")
 line(170,32,196,40)
 line(165,-40,193,-60)
 line(30,-60,120,-180)

 line(30,90,60,120)
 line(60,120,120,90)
 line(120,90,173,109)
//---------------------- 
 line(30,150,60,180)
 line(60,180,110,160)
 line(110,160,128,170)
//分割線
 stroke(0)
 strokeWeight(1)
 rectMode(CENTER)
 fill(255)
 rect(0,0,60,450)
 rect(0,0,40,450)
 fill(0)
 rect(0,0,20,450)
//眼
  fill("#ff0000")
  ellipse(-105,0,143)
  ellipse(105,0,143)
//觸角  
  quad(0,0,-25,-30,0,-60,25,-30)
  fill(200)
  beginShape()
  vertex(0,-60)
  vertex(-30,-10)
  vertex(-300,-200)
  vertex(-30,-60)
  vertex(0,-100)
  vertex(30,-60)
  vertex(300,-200)
  vertex(30,-10)
  vertex(0,-60)
  endShape()

  pop()
}
