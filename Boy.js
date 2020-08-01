class Boy {

    constructor(x,y,width,height){
        var options={
             isStatic:true
        }
        this.w=width;
        this.h=height;
        
        this.body = Bodies.rectangle(x,y,200,300,options);
        this.image = loadImage("Images/boy.png");
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,300);

        // rectMode(CENTER);
        // rect(pos.x,pos.y,this.w,this.h);
    }
}