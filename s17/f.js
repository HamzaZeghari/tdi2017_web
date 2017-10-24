function modepayement () {
cash=document.getElementById('cash');
pay=document.getElementById('pay');
dcash=document.getElementById('dcash');
dpay=document.getElementById('dpay');

if (cash.checked) {
	dcash.style.display = 'block';


} else{
	dcash.style.display = 'none';
};
if (pay.checked) {
	dpay.style.display = 'block';
} else{
	dpay.style.display = 'none';
};
}

function show_valider () {
ok=document.getElementById('ok');
	t=document.getElementsByTagName('input');
	cpt=1;
	for (var i = 0; i < t.length; i++) {
	cpt *=t[i].value.length;	
};
ok.style.display = (cpt==0)? 'none':'block' ;
}