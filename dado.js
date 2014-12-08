


function inicio() {

	//VARIABLES
	var espacio1 = document.getElementById("espacio1");
	var espacio2 = document.getElementById("espacio2");

	var valor1 = aleatorio(0,99);
	var valor2 = aleatorio(0,99);

	//VALOR 1
	if (valor1 >= 0 && valor1 <85) {
		espacio1.innerHTML = "ACIERTO";
	}
	else if (valor1 >=85 && valor1 <100) {
		espacio1.innerHTML = "FALLO";
	}
	

	//VALOR 2
	if (valor2 >= 0 && valor2 <4) {

		if (valor1 >= 0 && valor1 <85) {
			espacio2.innerHTML = "CRÍTICO";
		}
		else if (valor1 >=85 && valor1 <100) {
			espacio2.innerHTML = "PIFIA";
		}

	}
	
	else if (valor2 >=5 && valor2 <36) {
		espacio2.innerHTML = "DÉBIL";
	}
	else if (valor2 >=36 && valor2 <68) {
		espacio2.innerHTML = "MODERADO";
	}
	else if (valor2 >=68 && valor2 <100) {
		espacio2.innerHTML = "FUERTE";
	}
	
};



//ALEATORIO
function  aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
	return numero;
}

