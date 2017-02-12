var waveObj = function(){

	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];

}

waveObj.prototype.num = 10;
waveObj.prototype.init = function(){

	for(var i = 0; i < this.num; i++ ){

		this.alive[i] = false;
	}

}
waveObj.prototype.draw = function(){

	for(var i = 0; i < this.num ;i++){

		if(this.alive[i]){
			//draw arc
			//ctx1.save();
			this.r[i] +=  deltaTime * 0.04;
			var alpha = 1 - this.r[i]/50; 
			if(this.r[i] > 50){

				this.alive[i] = false;
				continue ;
			}
			ctx1.save();
			ctx1.beginPath();
			ctx1.lineWidth = 2;
			ctx1.shadowBlur = 5;
			ctx1.shadowColor = "white";
			ctx1.arc(this.x[i],this.y[i],this.r[i],0,Math.PI*2);
			ctx1.closePath();
			
			ctx1.strokeStyle = "rgba(255,255,255," + alpha + ")";
			ctx1.stroke();
			ctx1.restore();

			//console.log("draw"+ this.r[i]);
		}
	}
}
waveObj.prototype.born = function(x,y){

	for(var i = 0;i<this.num; i++){

		if(!this.alive[i]){

		this.alive[i] = true;
		this.x[i] = x;
		this.y[i] = y;
		this.r[i] = 20;
		return ;
		}
	}
}

