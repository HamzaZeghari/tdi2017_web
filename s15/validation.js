function valider_email () {
	var email=document.getElementById('email');
requis();
em=email.value;
//alert(em.indexOf('@'));

emailvalide=(em.indexOf('@')!=-1 && em.indexOf('@')>0 && em.lastIndexOf('.')!=-1 && em.lastIndexOf('.')> em.lastIndexOf('@')+1 && em.length> em.lastIndexOf('.')+1);
if (!emailvalide) {
alert("email non valide");
};

function requis (champs) {
	if(champs.value.trim()==""){
alert(champs.id+ " est obligatoire")
	}
}

}