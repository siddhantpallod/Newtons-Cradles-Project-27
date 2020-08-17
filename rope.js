class Rope{
    constructor(body1,body2, offsetX,offsetY){
       
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            body1 : body1,
            body2 : body2,
            pointB:{x: this.offsetX, y : this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var posA = this.rope.body1.position;
        var posB = this.rope.body2.position;
        
        strokeWeight(2);

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointB.x + this.offsetX;
        var Anchor2Y = pointB.y + this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}