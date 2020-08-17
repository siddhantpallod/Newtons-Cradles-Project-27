class Bob{

    constructor(x,y){
        
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        } 
        
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,35,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,70,70);
        pop();
    }
}
