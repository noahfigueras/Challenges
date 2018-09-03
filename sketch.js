
//MAIN GAME 

const apple = new Apple();
const snake = new Snake();
let cols = 20;
let rows = 20;

function setup() {
	createCanvas(600, 600);
	frameRate(13);
}

function draw() {

	background(220);
	//DISPLAY APPLE
	apple.display()

	//DISPLAY SNAKE
	snake.death()
	snake.display()
	snake.move()
	snake.checkborders()


	//check the distance between the apple and snake (collision check) 
	if(snake.x == apple.x && snake.y == apple.y){
		//apple changes position and makes snake bigger.
		apple.update()
		snake.total++
	}

	//SCORE
	fill(255);
	rect(320,0,400,20);
	fill(0,0,255);
	text("score: "+ snake.total,330,15);
	
}
