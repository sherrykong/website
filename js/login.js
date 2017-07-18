
//鼠标移动到忘记登录密码和免费注册上时，颜色变成红色
//移开颜色变成黑色
//点击忘记密码可以弹出警示框，内容为密码是：123
//点击免费注册转到另一个新的注册界面


$('#text_box').on('ifChecked', function(event){
		$('input').iCheck('check');
	});
	$('#text_box').on('ifUnchecked', function(event){
		$('input').iCheck('uncheck');
	});














//var c=document.getElementById("myCanvas");
//var cxt=c.getContext("2d");
//
//cxt.beginPath();
//cxt.arc(70,10,5,0,Math.PI*2,true);
//cxt.fillStyle="#66DD00";
//
//
//cxt.closePath();
//cxt.fill();
//cxt.lineTo(170,10);
//
//cxt.stroke();
//
//var d=document.getElementById("myCanvas");
//var dxt=d.getContext("2d");
//
//dxt.beginPath();
//cxt.arc(175,10,5,0,Math.PI*2,true);
//dxt.fillStyle="white";
//
//
//dxt.closePath();
//dxt.fill();
//dxt.lineTo(270,10);
//
//dxt.stroke();
//
//
//var e=document.getElementById("myCanvas");
//var ext=e.getContext("2d");
//
//ext.beginPath();
//ext.arc(275,10,5,0,Math.PI*2,true);
//ext.fillStyle="white";
//
//
//ext.closePath();
//ext.fill();
//ext.lineTo(370,10);
//
//ext.stroke();

function on(obj){
switch(obj){
case forgetPassword:
	document.getElementById("forgetPassword").style.color="red";
	break;
case freeRegister:
	document.getElementById("freeRegister").style.color="red";
	break;
case loginHelp:
	document.getElementById("loginHelp").style.color="red";
	break;
case wish:
	document.getElementById("hidden").style.display="inline";
	break;
}

}
function out(obj){
switch(obj){
case forgetPassword:
	document.getElementById("forgetPassword").style.color="black";
	break;
case freeRegister:
	document.getElementById("freeRegister").style.color="black";
	break;
case loginHelp:
	document.getElementById("loginHelp").style.color="black";
	break;
case wish:
	document.getElementById("hidden").style.display="none";
	break;
}

}



function jump(obj){
switch(obj){
case forgetPassword:
	alert("your password is 123");
	break;
case freeRegister:
	window.location.href="register.html";
	break;
case loginHelp:
	window.location.href="http://101.201.67.56/";
	break;
case redlogin:	
	window.location.href="login.html";
	break;
case redregister:	
	window.location.href="register.html";
	break;
case luck:
	window.location.href="rotate.html";
	break;
}

}


















//function showTable(obj){
//switch(obj){
//
//
//case Login:
//	document.getElementById("Register").style.color="gray";
//	document.getElementById("Login").style.color="black";
//	
//document.getElementById("Context1").style.display="inline";
//
//document.getElementById("Context2").style.display="none";
//
//
//
//break;
//  
//case Register:
//	
//	document.getElementById("Register").style.color="black";
//
//	document.getElementById("Login").style.color="gray";
//	
//document.getElementById("Context1").style.display="none";
//
//document.getElementById("Context2").style.display="inline";
//
//var temp=document.getElementById("Context2");
//var temp0=document.getElementById("lin");
//temp.removeChild(temp0);
//
//break;
//
//break;
//
//}
//}
//
