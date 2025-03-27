function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("#B9E6FC");
    fill ("#382424")
    ellipse (200, 200, 210, 260); //rosto
    fill ("#FEFFD7")
    circle (160, 175, 55); //olho
    circle (240, 175, 55); //olho
    stroke ("#fff")
    fill ("#382424")
    ellipse (200, 220, 40, 20) //nariz
    fill ("#fff")
    arc(200, 250, 90, 70, 0, 2.5, CHORD) //boca
    fill ("red")
    arc(225, 262, 25, 70, 0, 2.5, CHORD) //boca
    
     olhoX = map(mouseX, 0, width, 145, 165);
    olhoY = map(mouseY, 0, height, 155, 185);
  
    fill("#003E00")
    circle(olhoX, olhoY, 20); // nova pupila esquerda
    circle(olhoX + 80, olhoY, 20); //nova pupila direita
      stroke ("#382424")
     fill ("#382424")
    rect (124, 132, 150, 40)
    if(mouseIsPressed){
       console.log(mouseX, mouseY);
       }
  }