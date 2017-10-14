function ajouter() {
 var n1=document.getElementById('nombre1');
var n2=document.getElementById('nombre2');
 var r=document.getElementById('resultat');
 op=document.getElementById('o+');
  om=document.getElementById('o-');
   od=document.getElementById('o/');
    oss =document.getElementById('o*');
       off =document.getElementById('of');

    nr=0
    
if (n1.value!="" && n2.value!="" && !isNaN(n1.value) && !isNaN(n2.value) ) {
if (op.checked) {
nr=parseFloat(n1.value)+parseFloat(n2.value);
o=op
}else if (om.checked) {
nr=parseFloat(n1.value)-parseFloat(n2.value);
o=om
}else if (od.checked) {
o=od
nr=parseFloat(n1.value)/parseFloat(n2.value);
}else if (oss.checked) {
nr=parseFloat(n1.value)*parseFloat(n2.value);
o=oss
}else{
	alert("veuillez effectuer un choix")
} 
resultat.innerHTML=n1.value + " "+o.value+" "+n2.value+"="+nr;
r.style.color='blue';
}else {
	r.innerHTML="ce n'est pas un nombre!!!";
	r.style.color='red';
}

}
function tog(){
	   off =document.getElementById('of');
if (off.value=="off") {
	off.value="on"
	document.getElementById("nombre1").disabled=false;

}
	else{ off.value="off";
	document.getElementById("nombre1").disabled=true;

}
}
function raz(){
	 var n1=document.getElementById('nombre1');
var n2=document.getElementById('nombre2');
 var r=document.getElementById('resultat');
 if (confirm("voulez vous vrm tout effacer?")) {
n1.value="";
n2.value="";
r.innerHTML="";
}
}