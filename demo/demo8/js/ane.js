var aneObj = function(){

	this.x = [];
	this.heady = [];
	this.alpha = 0;
	this.swing = [];
	this.aneX = [];
	this.aneH = [];
}
aneObj.prototype.num = 50;
aneObj.prototype.init = function(){

	for(var i = 0; i<this.num; i++){
		this.x[i] = i*16 + Math.random()*20; // [0 - 1)
		this.heady[i] = can2H - 250 + Math.random()*50;
		this.swing[i] = 50 + Math.random()*30;
		this.aneH[i] = 0;
	}
	
}

aneObj.prototype.draw = function(){

	ctx2.save();
	this.alpha += deltaTime * 0.001;
	var sinX = Math.sin(this.alpha); //[-1 , 1]
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle ="#3b154e";
	for(var i =0; i<this.num; i++){
		//benginPath, moveTo, lineTo, stroke, strokeStyle, lineCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.x[i],can2H);
		this.aneX[i] = sinX * this.swing[i] + this.x[i];
		ctx2.quadraticCurveTo(this.x[i],can2H - 150, this.aneX[i] , this.heady[i]);
		//this.aneH[i] =  Math.sqrt(Math.pow((this.heady[i] - (can2H - 150)),2) - Math.pow(sinX * this.swing[i] , 2));
		//ctx2.lineTo(this.x[i],can2H - this.len[i]);
		ctx2.stroke();

	}
	ctx2.restore();
}