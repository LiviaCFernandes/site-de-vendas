function trocaCor () {
	var h2=document.querySelector("#historia");
	h2.style.color="red";
}

function deletaFoto(){
	var figure=document.querySelector("#familia-pelho");
	figure.style.display="none";
}
function voltaFoto(){
	var figure=document.querySelector("#familia-pelho");
	figure.style.display="";
}

var h2=document.querySelector("#historia");
h2.onclick=trocaCor;
h2.onmouseover=deletaFoto;
h2.onmouseleave=voltaFoto;