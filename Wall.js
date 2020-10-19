class Wall{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }       
        this.width = width;
        this.height = height;
        this.leftBody = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.leftBody);
        
        this.rightBody = Bodies.rectangle(x+990,y,width,height,options);
        World.add(world,this.rightBody);
        
        this.topBody = Bodies.rectangle(x+495,y-195,height,width,options);
        World.add(world,this.topBody);
        
    }
    display(){
        var rightPos = this.rightBody.position;
        var leftPos = this.leftBody.position;
        var topPos = this.topBody.position;

        push();
        rectMode(CENTER);
        translate(rightPos.x,rightPos.y);
        fill("black");
        stroke("black");
        rect(0,0,this.width,this.height);
        pop();

        push();
        rectMode(CENTER);
        translate(leftPos.x,leftPos.y);
        fill("black");
        stroke("black");
        rect(0,0,this.width,this.height);
        pop();

        push();
        rectMode(CENTER);
        translate(topPos.x,topPos.y);
        fill("black");
        stroke("black");
        rect(0,0,this.height+500,this.width);
        pop();
    }
}
