function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mariojump = loadSound("jump.wav");
	mariodie = loadSound("mariodie.wav");
	mariokick = loadSound("kick.wav");
	mariocoin  = loadSound("coin.wav");
	gameend = loadSound("gameover.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("webcam");
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotResults);
}
function modelLoaded(){
	console.log("Model Is Loaded")
}
function gotResults(results){
	if (results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}


function draw() {
	game()
}






