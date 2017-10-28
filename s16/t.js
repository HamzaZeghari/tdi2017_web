function qcm () {
r1=document.getElementById('r1');
r6=document.getElementById('r6');

resultat=document.getElementById('resultat');
score=0;
pas=10;
if(r1.checked){
	score +=pas;
}
r1.parentNode.style.backgroundColor='green';
r6.parentNode.style.backgroundColor='green';
r1.parentNode.style.color='white';
r6.parentNode.style.color='white';

if(r6.checked){
	score +=pas;
}

resultat.innerHTML="la note est "+score+ " /20";

}





function qcm2 () {
	resultat=document.getElementById('resultat');
	radios=document.querySelectorAll("input[type='radio']")
	rt=document.getElementById('responses').value.split(',');
console.log('response',rt);
	score=0;pas=10;
	total=rt.length*pas;
for (var i = 0; i < radios.length; i++) {
	radios[i].parentNode.style.color='red';

};
for (var i = 0; i < rt.length; i++) {
	r=document.getElementById('r'+rt[i]);
	r.parentNode.style.color = 'green';
	if(r.checked) {
		score+=pas;		
	}
};
resultat.innerHTML="la note est "+score+ " /"+total;

}
function shows () {
	var pp=document.getElementById('passe');
if(pp.value=='cisco'){
	document.getElementById('responses').style.display = 'inline-block';
}else{
	document.getElementById('responses').style.display = 'none';
}
}




