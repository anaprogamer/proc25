class paper {
	constructor(x,y)   {
		var options={
			isStatic:false, 
            
            restitution: 0.3,
            friction: 0.0,
            density: 1.2

        }
		
		this.width = 30;
		this.height = 30;
		this.x = x;
		this.y = y;
		this.body = Bodies.rectangle (this.x,this.y,this.width,this.height,options);
		

		this.Image = loadImage ("paper.png");
		
		World.add(world,this.body);

	}
	display() {
			
		var paperPos=this.body.position;
        push()
		translate(paperPos.x, paperPos.y);
		//rectMode(CENTER)
		fill(128,128,128)
		//rect(0,0,this.w, this.h);
        imageMode(CENTER);
		image(this.Image,0,0,this.width,this.height);
		pop()
			
	}

}