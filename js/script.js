$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="🐷🐷 瑞熙 🐷🐷" &&  pwd=="123"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="Memories.html";},2000);
	}
	else{
		alert("别瞎改我告诉你奥，改了我不通过，哼");
	}
});
