//JavaScript
$(document).ready(function(e){	
document.addEventListener("deviceready", function(){
	$('#btnBeep').tap(function(){
		navigator.notification.beep(2);		
		alert("Hola");
		});
	$('#btnVibrar').tap(function(){
		navigator.notification.vibrate(1000);		
		});		
	},false);		
});//ready
