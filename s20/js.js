function routage () {
s=document.getElementById('liens')
indicechoisit=s.selectedIndex;
window.location=s.options[indicechoisit].value
}

function changer_langue(){
	s=document.getElementById('langue')
indicechoisit=s.selectedIndex;
lang=s.options[indicechoisit].value
if(lang=="en"){
document.getElementById('lsalaire').innerHTML="salary";
document.getElementById('lnom').innerHTML="name";

}else{
document.getElementById('lsalaire').innerHTML="salaire";
document.getElementById('lnom').innerHTML="nom";

}
}

function date_face(){
	age_sghir = 10
	d=new Date();
	hadl3am=d.getFullYear();
	
a=document.getElementById('annees')

for (var i =hadl3am-age_sghir ; i >= hadl3am-100; i--) {
	
//s+= "<option value='"+i+"'>"+i+"</option>";
	o=document.createElement("option");//<option></option>
o.value=i;
o.innerHTML=i;
o.onclick=function(){ // closure
alert(this.value)
}
a.appendChild(o);
};
}


function valider_salaire () {
	
}

function valider_nom() {
		nom=document.getElementById('nom');
		modele_nom=/^[A-Z]{1,}[a-z]{2,}/
		if(!modele_nom.test(nom.value) ){/* || nom.value.length<3*/
alert("nom doit commencer par MAJ et contenir 3 lettres min");
		}
}









