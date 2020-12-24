class Bob {
    constructor(x,y,width,height,angle) {
      var options = {
         restitution: 1,
         frictionAir: 0.005,
         slop: 1,
         inertia: Infinity,

      }
      this.body = Bodies.rectangle(x,y,40,40,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x , pos.y);
      rotate(angle);
      stroke("white");
      fill("green")
      ellipse(0,0,60,60);
      pop();
    }
  }
