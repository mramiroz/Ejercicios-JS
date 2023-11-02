document.addEventListener("DOMContentLoaded", function(){

	this.addEventListener("click", function(event){
		tamanoVentanaNavegador(event);
	})
})


const tamanoVentanaNavegador = function(event){
	const posicion = document.getElementsByClassName("posicion");
	var width = window.innerWidth;
	var heigth = window.innerHeight;

	if (event.pageX <= width / 2 && event.pageY <= heigth / 2)
		posicion[0].innerHTML = "Izquierda Arriba";
	else if (event.pageX >= width / 2 && event.pageY <= heigth / 2)
		posicion[0].innerHTML = "Derecha Arriba";
	else if (event.pageX <= width / 2 && event.pageY >= heigth /2)
		posicion[0].innerHTML = "Izquierda Abajo";
	else
		posicion[0].innerHTML = "Derecha Abajo";
}