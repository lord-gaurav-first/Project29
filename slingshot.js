class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.6,
            length: 10
        }
        this.bodyA = bodyA;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            push();
            stroke("white");
            strokeWeight(2);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
            text(mouseX + ", " + mouseY, mouseX, mouseY)
        }
    }

    reattach(){
      this.sling.bodyA = this.bodyA;
    }

    adjust(){
      this.sling.bodyA.position.x = mouseX;
      this.sling.bodyA.position.y = mouseY;
    }

}
