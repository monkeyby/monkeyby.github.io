var dustObj = function(){

	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];
	this.alpha = 0;
}
dustObj.prototype.num = 30;

dustObj.prototype.init = function(){

	for(var i = 0;i < this.num; i ++){
		this.x[i] = Math.random() * can2W;
		this.y[i] = Math.random() * can2H;
		this.amp[i] = Math.random()* 20 + 20;
		this.NO[i] = Math.floor(Math.random()* 7);
		//this.alpha[i] = 0;
	}
}
dustObj.prototype.draw = function(){

	this.alpha += deltaTime * 0.001;
	var  sinX = Math.sin(this.alpha);

	for(var i = 0 ;i < this.num ; i++){
		var no = this.NO[i];
		ctx1.drawImage(dustPic[no],this.x[i] + sinX * this.amp[i] ,this.y[i]);
	}
}