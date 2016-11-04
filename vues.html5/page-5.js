$(document).ready(initialisations);

var index =15000;

function initialisations()
{
	$("#btnPrecedent").click (allerAuPrecedent);
	$("#btnSuivant").click (allerAuSuivant);
	setInterval("allerAuSuivant()", 2000);
};

function allerAuPrecedent()
{
	index--;
	rotationCarrousel(index);
};

function allerAuSuivant()
{
	index++;
	rotationCarrousel(index);
};

function rotationCarrousel(indexPhoto)
{
	var angle = indexPhoto * 24 * -1;
	var carrouselTransform = 'translateZ(-1150px) rotateY(' + angle + 'deg)';
	$('#carrousel').css({
		WebkitTransform: carrouselTransform,
		MozTransform: carrouselTransform,
		transform : carrouselTransform,
	});
	var texte = $("#carrousel img:nth-child("+((index % 15)+1)+")").attr("alt");
	$('#libelle-photo').html(texte);
}