function valider_cin () {
	cin=document.getElementById('cin');
mcin=/^[a-zA-Z]{1,2}[0-9]{6}$/
if (!mcin.test(cin.value)) {
cin.classList.add('erreur');
cin.classList.remove('succes');

return false;
}else {
cin.classList.remove('erreur');
cin.classList.add('succes');
return true;
}

}
function valider_email () {
	email=document.getElementById('email');
memail=/^\w+@{1}(ofppt)\.ma$/
if (!memail.test(email.value)) {
email.classList.add('erreur');
email.classList.remove('succes');

return false;
}else {
email.classList.remove('erreur');
email.classList.add('succes');
return true;
}

}
function valider_tel () {
	tel=document.getElementById('tel');
mtel=/^[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/
if (!mtel.test(tel.value)) {
tel.classList.add('erreur');
tel.classList.remove('succes');

return false;
}else {
tel.classList.remove('erreur');
tel.classList.add('succes');
return true;
}

}
function valider_date () {
	date=document.getElementById('date');
	t=date.value.split('-');
alert(t[0])
alert(t[1])
alert(t[2])
if (!mdate.test(date.value)) {
date.classList.add('erreur');
date.classList.remove('succes');

return fdatealse;
}else {
date.classList.remove('erreur');
date.classList.add('succes');
return true;
}

}
function valider_tout () {
return valider_email() && valider_cin() && valider_tel();	
}