// JavaScript Document]
window.onload = function(){
	
		var nav = document.getElementById("nav").getElementsByTagName('li');
		var cont = document.getElementById("container");
		var list = document.getElementById("list");
		var buttons = document.getElementById("buttons").getElementsByTagName('span');
		var prev = document.getElementById("prev");
		var next = document.getElementById("next");
		var index =1;
		var flag=false;
		var timer;
		
		/*标题导航悬浮效果*/
		//alert(nav.length);
		
		for(var i = 0;i<nav.length;i++){
			nav[i].onmouseover = function(){
				this.style.height = 65+"px";
				}
			nav[i].onmouseout = function(){
				this.style.height = 60+"px";
				}
			}
		
		
		/*定时循环滚动*/
		var play=function (){
			timer = setInterval(function(){
				next.onclick();
				},2000)
			}
		var stop=function(){
			clearInterval(timer);
			}
		
		cont.onmouseover = stop;
		cont.onmouseout = play;
		play();
		
		/*点击arrow换页*/
		var animate =function(offset){
			 flag=true;
			var newLeft = parseInt(list.style.left) +offset;
			
			var time = 600;		//总时间
			var interval = 10;  //次数
			var speed = offset / (time/interval);
			
			var go=function(){
			if(speed<0&& parseInt(list.style.left)>newLeft||speed>0&& parseInt(list.style.left)<newLeft){
				list.style.left = parseInt(list.style.left)+speed+"px";
				setTimeout(go,interval);
				}
			else{
					
					if(newLeft>-600){
					list.style.left = -3000+"px";
					}
					if(newLeft<-3000){
					list.style.left = -600+"px";
					}
					flag=false;
				}
				
			}
			go();
			}
		next.onclick=function(){
			if(flag==false){
			animate(-600);
			
			if(index==5){
				index=1;
				}
			else{index+=1;}
			showButton();
			}
			else{return;}
		}
		
		prev.onclick=function(){
			if(flag==false){
			animate(600);
			
			if(index==1){
				index=5;
				}
			else{index-=1;}
			showButton();
			}
			else{return;}
		}
		
		/*点击按钮换图*/
		for(var i=0;i<buttons.length;i++){
			buttons[i].onclick = function(){
				if(this.className=="on"){
					return;
					}
				var myIndex = parseInt(this.getAttribute("index"));
				//alert(myIndex);
				var offset=(myIndex-index)*(-600);
				animate(offset);
				index =myIndex;
				showButton();
				}
			}
		/*按钮背景改变函数*/
		var showButton = function(){
			for(var i=0;i<buttons.length;i++){
				if(buttons[i].className=="on"){
					buttons[i].className="";
					break;
					}
				}
			buttons[index-1].className="on";
			}
			
		/*content_1  pic_bottom下拉菜单效果*/
		
		/*var pic_area=document.getElementById("pic_area");
		var pic_bottom=document.getElementById("pic_bottom");
		pic_bottom.style.display="none";
		pic_area.onmouseover = function (){
			pic_bottom.style.display="block";
			}
		pic_area.onmouseout = function (){
			pic_bottom.style.display="none";
			}
		*/
		var timer_2;
		var speed_2=-5;
		var pic_list = document.getElementById("pic_list");
		var newLeft_2 =0;
		
		var play_2 = function(){
			
		timer_2 = setInterval(function(){
			
			pic_list.style.left = newLeft_2+speed_2+"px";
			
			newLeft_2 = parseInt(pic_list.style.left);
			if(newLeft_2<-1200){
				newLeft_2 = -10;
				}
			//loop();
			},50)
		}
		
		var stop_2 = function(){
			clearInterval(timer_2);
			}
		
			
			
		play_2();
		pic_list.onmouseover=stop_2;
		pic_list.onmouseout=play_2;
		
	}