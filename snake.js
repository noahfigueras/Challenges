class Snake {
	constructor(x, y) {
		this.x = 20;
		this.y = 20;
		this.total = 0;
		this.tail = [];
	}

	move() {
		if(this.total === this.tail.length){
			for(let i = 0; i < this.tail.length-1; i++){
				this.tail[i] = this.tail[i+1]
			}
		}	
		this.tail[this.total-1] = createVector(this.x, this.y)
				
		if (keyCode == 39) {
			this.x += 20
		}
		if (keyCode == 37) {
			this.x -= 20
		}
		if (keyCode == 38) {
			this.y -= 20
		}
		if (keyCode == 40) {
			this.y += 20
		}
	}
	
	death(){
		//if snake eats the tail dies
		let location = createVector(this.x,this.y);
		for(let i = 0; i < this.tail.length; i++){
			let d = dist(this.x,this.y,this.tail[i].x,this.tail[i].y)
			if(d == 0){
				this.total = 0;
				this.tail = [];
			}
		}
	}

	
	checkborders(){
		if(this.x > width){
    	this.x = 0;
  	} else if(this.x < 0){
    	this.x = width;
  	}
  	if(this.y > height){
    	this.y = 0;
  	} else if(this.y < 0){
    	this.y = height;
  	}
	}

	display() {
		fill(0)
		for(let i = 0; i < this.tail.length; i++){
				rect(this.tail[i].x, this.tail[i].y, 20, 20)
			}
		rect(this.x, this.y, 20, 20)
	}
}
