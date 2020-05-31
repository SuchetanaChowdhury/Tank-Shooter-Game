class Tanker {
  constructor(x, y, width, height) {
      var options = {
      'isStatic': true
     }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      };

    display(){
      rectMode(CENTER);
      fill(225);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    };
}

// class TankerHead {
//   constructor(x, y, width, height, angle) {
//     var options = {
//     'isStatic': true,
//    }
//     this.body = Bodies.rectangle(x, y, width, height, options);
//     this.width = width;
//     this.height = height;
//     Matter.Body.setAngle(this.body, angle);
    
//     World.add(world, this.body);
//     };

//     display(){
//       var angle = this.body.angle;
//       angleMode(DEGREES);

//       if(keyIsDown(DOWN_ARROW) && angle<=1 && angle>-28){
//         angle -= 1;
//         Matter.Body.setAngle(this.body, angle); 
//        }
//        if(keyIsDown(UP_ARROW) && angle>=-28 && angle<1){
//          angle += 1;
//         Matter.body.setAngle(this.body, angle);
//        }  

//       push();
//       translation(this.body.position.x, this.body.position.y)
//       rotate(angle);
//       rectMode(CENTER);
//       fill(225);
//       rect(this.body.position.x, this.body.position.y, this.width, this.height);
//       pop();
//     };
// }
