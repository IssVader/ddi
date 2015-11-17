$(document).on('ready',iniciar);
var enlace;
var valor;
var n=0;

function iniciar(){
	$('#tabla2 div img').on('click',copiar);
	$('#tabla1 div img').on('click',pegar);

}

function copiar(){
	enlace=$(this).attr('src');
	valor=$(this).attr('value');
	

}

function pegar(){
	var resultado=$(this);
	var vdiv=$("#tabla1 div").length;
	var vimg=$(this).attr('src');
	$(this).attr('src',enlace);
	$(this).attr('value',valor);

	var valorDiv=$(this).parent().attr('value');
	var valorImagen=$(this).attr('value');

	if(vimg=="" && $(resultado).attr("result")=="" && valorDiv==valorImagen){
		$(resultado).attr("result","correcto");
		n+=1;
		$("#red").text(n);
	}

	if(vimg!=="" && $(resultado).attr("result")=="correcto" && valorDiv!=valorImagen){
		$(resultado).attr("result","incorrecto");
		n-=1;
		$("#red").text(n);
	}

	if(vimg!=="" && $(resultado).attr("result")=="incorrecto" && valorDiv==valorImagen){
		$(resultado).attr("result","correcto");
		n+=1;
		$("#red").text(n);


	}

	if(vimg!=="" && $(resultado).attr("result")=="" && valorDiv!=valorImagen){
		$(resultado).attr("result","incorrecto");
		n+=0;
		$("#red").text(n);
	}

	if(vimg!=="" && $(resultado).attr("result")=="incorrecto" && valorDiv==valorImagen){
		$(resultado).attr("result","correcto");
		n+=1;
		$("#red").text(n);
	}

	if(vdiv==n){
		alert("GANASTE!");
	}





}

