function atualizaTamanho () {
	console.log(this.value);
	var outputTamanho=document.querySelector("[name=valorTamanho]")
	outputTamanho.value=this.value;
}

var inputRange=document.querySelector("[name=tamanho]");
inputRange.oninput=atualizaTamanho;

