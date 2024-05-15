function setup() {
    createCanvas(400, 400);
    background("#FAADFF")
  }
  
  function draw() {
    stroke("#77008B");
    fill("#068FFC")
    
    
    if (mouseIsPressed){
      rect(mouseX,mouseY,20,35);
        }
  }