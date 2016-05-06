function trocaBanner () {
	var img=document.querySelector(".destaque img");
	//banners.reverse();
	banners.push(banners.shift());
	img.src=banners[0];
}

var banners =["img/destaque-home.png","img/destaque-home-2.png"];

setInterval(trocaBanner,3000);

$(".painel").addClass("painel-compacto");

$(".painel button").click(function() {
	$(this).closest(".painel").removeClass("painel-compacto");
});



//$(".mais-vendidos button").click(function() {
//	$(".mais-vendidos").removeClass("painel-compacto");
//});