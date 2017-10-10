function saluer(jomla) {
	age=8;
	alert(jomla);
	age =9;	


}
/*DOM => document object model => API
=> permet de  cibler les éléments (de l'arbre ) html */
function afficher(){
	z=document.getElementById('zoom');
	e=document.getElementById('exp');
	z.innerHTML=e.innerHTML;

}
function effacer(){
	z=document.getElementById('zoom');
	//e=document.getElementById('exp');
	z.innerHTML="";

}