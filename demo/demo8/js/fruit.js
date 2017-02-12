var fruitObj = function(){
	this.alive = []; //布尔值
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.Num = [];
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){

	for(var i = 0; i<this.num; i++){
		this.alive[i] = false ;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.spd[i] = Math.random() *0.2 + 0.03;
		//this.born(i);
		this.fruitType[i] = "";
		this.Num[i] = 0;
		
	}

	this.orange.src = "src/fruit.png";
	this.blue.src = "src/blue.png";

}

fruitObj.prototype.draw = function(){

	//position-x-y,born, grow, fly;
	for(var i =0; i < this.num; i++){

		//判断果实颜色
		if(this.fruitType[i] == "orange"){
			var pic = this.orange;
		}else{
			var pic = this.blue;
		}

		//判断是否死亡
		if(this.alive[i] == true){

			if(this.y[i]<10){

			this.alive[i] = false;
		}

		//判断是否长到足够大小
		if(this.l[i] <= 15){

			this.l[i] += this.spd[i] * deltaTime * 0.25;
			var aneID = this.Num[i]
			this.x[i] = ane.aneX[aneID] ;
			this.y[i] = ane.heady[aneID];
			
		}
		else{

			this.y[i] -= this.spd[i] * deltaTime;
		}
		ctx2.drawImage(pic,this.x[i] - this.l[i]*0.5  ,this.y[i] - this.l[i]*0.5,this.l[i],this.l[i]);

		}
		
		
	}

}

fruitObj.prototype.born = function(i){

	this.Num[i] = Math.floor(Math.random()*ane.num);
	var aneID = this.Num[i]
	this.x[i] = ane.x[aneID] ;
	this.y[i] = ane.heady[aneID];
	this.l[i] = 0;
	this.alive[i] = true ;

	var ran = Math.random();
	if(ran < 0.9){
		this.fruitType[i] = "orange";
	}else{
		this.fruitType[i] = "blue";
	}
}

fruitObj.prototype.death = function(i){
	this.alive[i] = false;
}

function fruitMoniter(){
	var num = 0;
	for(var i = 0; i<fruit.num; i++ ){
		if(fruit.alive[i] == true) num++;
	}
	if(num<15){
		//制造果实
		sendFruit();
		return ;
	}
}

function sendFruit(){

	for(var i = 0; i< fruit.num; i++){

		if(fruit.alive[i] == false){
		fruit.born(i);
		return ;
		}
	}
		
}

