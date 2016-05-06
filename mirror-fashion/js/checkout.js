
var inputQuantidade=document.querySelector("#qt");
var ddPreco=document.querySelector("#preco");
var outputTotal=document.querySelector("#total");

inputQuantidade.oninput=function() {
	var quantidade=this.value;
	var preco=parseFloat(ddPreco.textContent.replace("R$","").replace(",","."));
	var total=quantidade*preco;
	outputTotal.value= "R$ " + total.toFixed(2).replace(".",",");
	console.log(total);
};

