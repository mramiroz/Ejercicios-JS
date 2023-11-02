document.addEventListener('DOMContentLoaded', function(){
	mostarInfo();
	cambiarColor();
})

const mostarInfo = function(){
	var mouse = document.getElementById("raton");
	var key = document.getElementById("teclado");
	var box = document.getElementsByClassName("box");
	document.addEventListener("mousemove", function(event){
		mouse.innerHTML = "";
		box[0].style.backgroundColor = "white";
		var nav = document.createElement("p");
		var pag = document.createElement("p");
		nav.innerText = "Navegador ["+event.clientX+", "+event.clientY+"]";
		pag.innerText = "Página ["+event.pageX+", "+event.pageY+"]";
		mouse.appendChild(nav);
		mouse.appendChild(pag);
	})
	document.addEventListener("keypress", function(event){
		key.innerHTML = "";
		box[1].style.backgroundColor = "#CCE6FF";

		var cara = document.createElement("p");
		var cod = document.createElement("p");

		cara.innerHTML = "Caracter ["+event.key+"]";
		cod.innerHTML = "Código ["+event.keyCode+"]";
		key.appendChild(cara);
		key.appendChild(cod);
	})
}

const cambiarColor = function(){
	var box = document.getElementsByClassName("box")
	document.addEventListener("click", function(){
		box[0].style.backgroundColor = "#FFFFCC";
	})
	document.addEventListener("keyup", function(){
		box[1].style.backgroundColor = "white";
	})
}