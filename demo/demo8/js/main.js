document.body.onload = game;

var can1;
var ctx1;
var can2;
var ctx2;
var bgPic;
var can2W;
var can2H;
var ane;
var fruit;

var mom;

var mx;
var my;

var baby;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue =[];

var data;

var wave;
var halo;

var dust;
var dustPic = [];

//var size;
//var ctx3;
//var can3;

var now = Date.now();
var lastTime = now ;

function game(){

	init();  //初始化
	
	gameloop();
}

function init(){

	//获取canvas context
	can1 = document.getElementById("canvas1");//绘制鱼
	ctx1 = can1.getContext("2d");

	can2 = document.getElementById("canvas2");//绘制海葵背景
	ctx2 = can2.getContext("2d");

	//can3 = document.getElementById("canvas3");//绘制文字
	//ctx3 = can3.getContext("2d");

	can1.addEventListener("mousemove", onMousemove, false);

	bgPic = new Image();
	bgPic.src = "src/background.jpg";
	can2W = can2.width;
	can2H = can2.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	mx = can2W * 0.5;
	my = can2H * 0.5;

	baby = new babyObj();
	baby.init();

	//小鱼尾巴图片数组赋值
	for(var i=0 ; i<8; i++){
		babyTail[i] = new Image();
		babyTail[i].src = "src/babyTail" + i + ".png";
	}
	//小鱼眼睛图片数组赋值
	for(var i= 0; i<2; i++){
		babyEye[i] = new  Image();
		babyEye[i].src = "src/babyEye" + i + ".png";
	}
	//小鱼身体图片数组赋值
	for(var i =0; i<20;i++){
		babyBody[i] = new Image();
		babyBody[i].src = "src/babyFade" + i + ".png";
	}
	//鱼妈妈尾巴图片数组赋值
	for(var i = 0 ;i< 8 ; i++){
		momTail[i] = new Image();
		momTail[i].src = "src/bigTail" + i + ".png";
	}

	//鱼妈妈眼睛图片数组赋值
	for(var i= 0; i<2; i++){
		momEye[i] = new Image();
		momEye[i].src = "src/bigEye" + i + ".png";
	}

	data = new fruitNum();

	for(var i =0 ; i<8 ; i++ ){

		momBodyOra[i] = new Image();
		momBodyBlue[i] = new Image();

		momBodyOra[i].src = "src/bigSwim" + i + ".png";
		momBodyBlue[i].src = "src/bigSwimBlue" + i + ".png";

	}

	wave = new waveObj();
	wave.init();

	halo = new haloObj();
	halo.init();

	for(var i = 0; i < 7 ;i++){

		dustPic[i] = new Image();
		dustPic[i].src = "src/dust" + i + ".png";
	}

	dust = new dustObj();
	dust.init();

	//size = new sizeObj();
}

function gameloop(){
	window.requestAnimFrame(gameloop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	if(deltaTime>40) deltaTime = 40;

	drawBackground();
	ane.draw();
	fruit.draw();
	fruitMoniter();

	ctx1.clearRect(0,0,can2W,can2H);
	mom.draw();

	baby.draw();

	//data.draw();

	momfruitcollision();
	mombabycollision();
	data.draw();

	wave.draw();
	halo.draw();

	dust.draw();

	//size.draw();
	//drawsize();
	//ctx3.font="20px Georgia";
	//ctx3.fillText("开始游戏",0 , 0)
}

function onMousemove (e){

	if(!data.gameOver){

			if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}

	}
	
}