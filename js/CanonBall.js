class CanonBall {
  constructor(x, y, radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "isStatic" : true,
      "frictionAir":0.06
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  };

  display(){
    ellipseMode(RADIUS);
    fill("yellow");
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    
  };
};
