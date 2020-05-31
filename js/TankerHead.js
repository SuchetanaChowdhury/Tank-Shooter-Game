class TankerHead {
  constructor(x, y, width, height, angle) {
    var options = {
    'isStatic': true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    Matter.Body.setAngle(this.body, angle);
    
    World.add(world, this.body);
    };

    display(){
      var angle = this.body.angle;
      angleMode(DEGREES);
      console.log(angle);
      if(keyIsDown(UP_ARROW) && angle<=8 && angle>-28){
        angle -= 0.5;
        Matter.Body.setAngle(this.body, angle);
       }
      
      if(keyIsDown(DOWN_ARROW) && angle>=-28 && angle<6){
        angle += 0.5;
        Matter.Body.setAngle(this.body, angle); 
       }

      push();
      translate(this.body.position.x, this.body.position.y)
      rotate(angle);
      rectMode(CENTER);
      fill(225);
      rect(0, 0, this.width, this.height);
      pop();
    };
}