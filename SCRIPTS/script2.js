
var alunos = new Array("Gabriel", "Eduardo", "Andre", "BATATA");
var notas1 = new Array( 7, 8.5, 5.0, 4);
var notas2 = new Array( 7, 8.5, 5.0, 4);
var notas3 = new Array( 7, 8.5, 5.0, 4);
var notas4 = new Array( 7, 8.5, 5.0, 4);

var media = new Array();

aux = 1;

for (i=0; i <=4; i++){
	
	if(aux == 1){
		alunos[i] = notas1;	
		media[i] = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / 4;
		aux = aux++;
	}
	else if(aux == 2){
		alunos[i] = notas2;	
		media[i] = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / 4;
		aux = aux++;
	}
	else if(aux == 3){
		alunos[i] = notas3;	
		media[i] = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / 4;
		aux = aux++;
	}
	else{
		alunos[i] = notas4;	
		media[i] = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / 4;
	}
	
}

var statusA ="";

function status(media){
	
	for(i =0; i<= 4; i++){

		if(media[i] >=7){

		return statusA = "aprovado";

		}
		else if (media[i] >=5 && media < 7){

		return statusA = "Aula de reforço";

		}
		else if(media[i] >= 3 && media <5){

		return statusA = "recuperação";

		}
		else{

		return statusA = "Reprovado";

		}
	}
}

status(statusA);
alert("Estatus aluno " +statusA);

