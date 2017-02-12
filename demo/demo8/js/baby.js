var babyObj = function(){
	this.x = [];
	this.y = [];
	//this.babyEye = new Image();
	//this.babyBody = new Image();
	//this.babyTail = new Image();
	this.angle = [];
	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

}

babyObj.prototype.init = function(){
	this.x = can2W * 0.5;
	this.y = can2H * 0.5;
	//this.babyEye.src = "src/babyEye0.png";
	//this.babyBody.src = "src/babyFade0.png";
	//this.babyTail.src = "src/babyTail0.png";
	this.angle = 0;
}
babyObj.prototype.draw = function(){

	ctx1.save();

	// lerp x y
	this.x = lerpDistance(mom.x, this.x, 0.99);
	this.y = lerpDistance(mom.y, this.y, 0.99);
	// lerp angle
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var babyaimangle = Math.atan2(deltaY,deltaX) + Math.PI;
	this.angle = lerpAngle(babyaimangle, this.angle, 0.1);

	//设置尾巴时间间隔，改变尾巴图片，每50秒改变，无限循环
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1)%8;
		this.babyTailTimer = this.babyTailTimer % 50;
	}

	//设置眼睛时间间隔，改变眼睛图片，睁眼1-2.5s随机，闭眼100ms固定
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount + 1)%2;
		this.babyEyeTimer %= this.babyEyeInterval; 
		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1500 + 1000;
			
		}else{
			this.babyEyeInterval = 100;
			
		}

	}

	//设置身体时间间隔，改变身体图片，到最后一张保持不变

	this.babyBodyTimer += deltaTime ; 
	if(this.babyBodyTimer > 300){
		this.babyBodyCount = (this.babyBodyCount +1)%20;
		this.babyBodyTimer %= 300;
		if(this.babyBodyCount == 19){
			this.babyBodyCount = 18;
			//game over
			data.gameOver = true;
		}
	}

	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle);

	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width*0.5 + 23,-babyTail[babyTailCount].height*0.5);

	var babyBodyCount =this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);

	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);
	ctx1.restore();
}