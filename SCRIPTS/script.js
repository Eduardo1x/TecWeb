var nomeA = "Piroca no cú da tua mãe";
var nota1 = 7;
var nota2 = 8.5;
var mult1 = nota1 * 0.6;
var multi2 = nota2 * 0.4;
var media = mult1 + multi2;

	alert("Aluno "+nomeA+" teve média de "+media);

var alunos = new Array();

alunos[0] = "João da Silva";
alunos[1] = "Pedro Henrique";

var notas1 = new Array(7, 8.5);
media1 = (notas1[0] * 0.6) + (notas1[1] * 0.4);
var notas2 = new Array(5, 2.4);
media2 = (notas2[0] * 0.6) + (notas2[1] * 0.4);


	alert("O Aluno "+alunos[0]+" teve média de "+media1+" e o aluno "+alunos[1]+" teve média de "+media2);


function alertar(mensagem){
	alert(mensagem);
}

alertar("Olá nova função");

var calculanota = function(nota, peso){
	var media = nota * peso;
	return media
	return nota * peso;
}

var nota = calculanota(8, 0.6);
alertar("Nota do aluno: "+nota);



function status(nota){
	if(nota >=7){
		return statusA = "aprovado";
	}
	else if (nota >=5 && nota < 7){
		return statusA = "Aula de reforço";
	}
	else if(nota >= 3 && nota <5){

		return statusA = "recuperação"
	}
	else{
		return statusA = "Reprovado"
	}

}
