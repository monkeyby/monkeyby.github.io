var momObj = function (){
	this.x = [];
	this.y = [];
	//this.bigEye = new Image();
	//this.bigBody = new Image();
	//this.bigTail = new Image();
	this.angle = [];

	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyCount = 0;
}

momObj.prototype.init = function (){
	this.x = can2W*0.5;
	this.y = can2H*0.5;
	//this.bigEye.src = "src/bigEye0.png";
	//this.bigBody.src = "src/bigSwim0.png";
	//this.bigTail.src = "src/bigTail0.png";
	this.angle = 0;
}

momObj.prototype.draw = function (){

	ctx1.save();
	//大鱼趋向于鼠标
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);
	//大鱼的方向趋向于鼠标
	var Xdelta = mx - this.x;
	var Ydelta = my - this.y;
	var aimangle = Math.atan2(Ydelta,Xdelta) + Math.PI;//-PI,PI

	this.angle = lerpAngle(aimangle,this.angle,0.1);

	//大鱼尾巴时间间隔，无限循环

	this.momTailTimer += deltaTime;
	if(this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount + 1)%8;
		this.momTailTimer %= 50;
	}

	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount + 1)%2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeCount == 0){
			this.momEyeInterval = Math.random() * 1500 + 2000;
		}else{
			this.momEyeInterval = 100;
		}
	}

	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);
	
	var momTailCount = this.momTailCount;
	ctx1.drawImage(momTail[momTailCount],momTail[momTailCount].width*0.4,-momTail[momTailCount].height*0.5);

	var momBodyCount = this.momBodyCount;
	if(data.double == 1){

		ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
	}else{

		ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5);
	}

	var momEyeCount = this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount],-momEye[momEyeCount].width*0.5,-momEye[momEyeCount].height*0.5);
	ctx1.restore();
}