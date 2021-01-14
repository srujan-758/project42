class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
          
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.image= loadImage("Walking Frame/walking_2.png");
        this.radius= radius;
        World.add(world,this.body);
      
     
    }
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0, 300,300 );
        pop();
    }
}