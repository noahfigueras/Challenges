class Apple {
	constructor(x, y) {
		this.x = 3 * 20;
		this.y = 3 * 20;
	}
	
	update(){
		this.x = Math.floor((Math.random() * 30) + 1)*20;
		this.y = Math.floor((Math.random() * 30) + 1)*20;
	}

	display() {
		fill(255, 0, 0)
		rect(this.x, this.y, 20, 20)
	}
}