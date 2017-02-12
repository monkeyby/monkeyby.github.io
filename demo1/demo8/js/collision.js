function momfruitcollision(){

	if(!data.gameOver ){

			for(var i =0; i<fruit.num; i++){
			if(fruit.alive[i]){
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l<900){
					fruit.death(i);
					if(mom.momBodyCount == 7){

						mom.momBodyCount = 7;
					}else{
						mom.momBodyCount += 1;
					}
					if(fruit.fruitType[i] == "orange"){
						data.fruitNum +=1;
					}else{
						data.double = 2;
					}

					wave.born(fruit.x[i],fruit.y[i]);
				}
			}
		}
	}
	
}

function mombabycollision(){

	if(data.fruitNum > 0 && !data.gameOver){
		var l = calLength2(mom.x, mom.y, baby.x, baby.y);
		if(l< 900){
			//baby recover
			baby.babyBodyCount = 0;
			mom.momBodyCount = 0;
			data.addScore();
			if(!data.gameOver){
				halo.born(baby.x,baby.y);
			}
		}
	}
	
}