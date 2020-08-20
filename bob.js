class Bob{

    constructor(x,y){
        
        var options = {
            isStatic : false,
            restitution : 0.5,
            density : 1
        } 
        
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,20,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0,0,20,20);
        pop();
    }
}
