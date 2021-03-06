var haloObj = function(){

	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];
}

haloObj.prototype.num = 10;
haloObj.prototype.init = function(){

	for(var i = 0; i < this.num; i++){

		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;

	}
	
}
haloObj.prototype.draw = function(){

	for(var i = 0; i< this.num; i++){

		if(this.alive[i]){

			this.r[i] += deltaTime * 0.05;
			var alpha = 1 - this.r[i] / 100;
			if(this.r[i] > 100){
				this.alive[i] = false;
				continue ; 
			}
			ctx1.save();
			ctx1.beginPath();
			ctx1.lineWidth = 2;
			ctx1.shadowBlur = 10;
			ctx1.shadowColor = "rgba(203,91,0,1)";
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			ctx1.strokeStyle = "rgba(203,91,0," + alpha + ")";
			ctx1.stroke();
			ctx1.restore();

		}
	}
}
haloObj.prototype.born = function(x,y){

	for(var i =0; i < this.num; i++){

		if(!this.alive[i]){
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
		}
	}
}