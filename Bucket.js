class Bucket {
    constructor(x,y) {
        var options = {
            isStatic : true
        }
        this.width = 150;
        this.height = 100;
        this.thickness = 10;
        this.bottomBody = Bodies.rectangle(x,y,this.width,this.thickness,options);
        this.image = loadImage("dustbingreen.png");
        this.leftBody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
        this.rightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
        this.upleftBody = Bodies.rectangle(x-85,y-100,this.thickness/2,this.height,options);
        this.uprightBody = Bodies.rectangle(x+85,y-100,this.thickness/2,this.height,options);
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.upleftBody);
        World.add(world,this.uprightBody);
        
    }
    display(){
        var bottomPos = this.bottomBody.position;
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        var upleftPos = this.upleftBody.position;
        var uprightPos = this.uprightBody.position;
        push();
        imageMode(CENTER);
        translate(bottomPos.x,bottomPos.y);
        fill("purple");
        stroke("purple");
        image(this.image,0,-50,160,120);
        pop();
        // push();
        // rectMode(CENTER);
        // translate(leftPos.x,leftPos.y);
        // fill("purple");
        // stroke("purple");
        // rect(0,0,this.thickness,this.height);
        // pop();
        // push();
        // rectMode(CENTER);
        // translate(rightPos.x,rightPos.y);
        // fill("purple");
        // stroke("purple");
        // rect(0,0,this.thickness,this.height);
        // pop();
        // push();
        // rectMode(CENTER);
        // translate(upleftPos.x,upleftPos.y);
        // fill("purple");
        // stroke("purple");
        // rect(0,0,this.width/5,this.thickness);
        // pop();
        // push();
        // rectMode(CENTER);
        // translate(uprightPos.x,uprightPos.y);
        // fill("purple");
        // stroke("purple");
        // rect(0,0,this.width/5,this.thickness);
        // pop();
    }
}