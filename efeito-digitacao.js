var elementoSaida = document.querySelector(".efeito.digitacao .objeto");
var textos = elementoSaida.getAttribute("data-frases").split(",");
var frase = 0;
var contador = 0;
var caracteres = textos[0].split('');

var controle = function(){
	
	if (frase < textos.length) {
		var caracteres = textos[frase].split('');
		if (contador < caracteres.length){
			digita(caracteres);
		}
		if (contador == caracteres.length){        				
			setTimeout(function(){
				apaga();
			},3000);
		}
	}
	if (frase == textos.length) {
		frase = 0;
		var caracteres = textos[frase].split('');
		digita(caracteres);
	}        		
};

var digita = function(listaCaracteres){
	setTimeout(function(){
		var valorDigitado = elementoSaida.textContent += listaCaracteres[contador];
		elementoSaida.innerHTML = valorDigitado;
		contador++;
		controle();
	}, 200);
};

var apaga = function(){
	if (contador > 0 ){
		setTimeout(function(){
			var valorDigitado = elementoSaida.textContent.slice(0, -1);
			elementoSaida.innerHTML = valorDigitado;
			contador--;
    		apaga();
    	}, 50);
	}
	if(contador == 0){
		frase++; 
		setTimeout(function(){
			controle();
		},1000);
	}
};

digita(caracteres);
    	
        	