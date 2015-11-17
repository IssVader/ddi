$(document).on('ready',iniciar);
var enlace;

function iniciar(){
	$('#tabla2 div img').on('click',copiar);

}

function copiar(){
	enlace=$(this).attr('src');
	$('#tabla1 div img').on('click',pegar);

}

function pegar(){
	$(this).attr('src',enlace);
}

