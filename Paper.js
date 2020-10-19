class Paper {
    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution : 0.3,
            density : 0.5,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,19,options);
        this.radius = 30;
        this.image = loadImage("paper.png");
        

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        stroke("black");
        image(this.image,0, 0, 50, 50);
        
        
        pop();
         //strokeWeight(4);
        // push()
        // translate(pos.x,pos.y);
        // fill("lightblue");
        // ellipse(0,0,25,25);
        // pop();
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(20,10,1,1);
        // pop();
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(20,-10,1,1);
        // pop();        
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(-20,-10,1,1);
        // pop();      
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(0,-20,1,1);
        // pop();   
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(0,20,1,1);
        // pop();   
        // push();
        // translate(pos.x,pos.y);
        // fill("white");
        // stroke("white");
        // ellipse(-20,10,1,1);
        // pop(); 
        



    }

}