
function tester () {


o={}
o.age=90
o.nom="alami"
o.afficher=function(){
	if(this.age>18) 
		alert(this.nom + " est majeur");
else alert(this.nom+" est mineur")
}
alert("mo nom est "o['nom'])
o.afficher()
console.log('object',o)

	function Person(nom,age){
this.nom=nom
this.age=age
this.valider=function  (n) {

	alert(this.nom)
}	}
	//pour ajouter une propriete ou methode
	Person.prototype.nomcomplet = function(){
		return (this.nom+" "+this.age+" ans")
	};
	p=new Person('alaoui',19)
	alert(p.nomcomplet())
// héritage

function Prof(salaire){
this.salaire=salaire
}
Prof.prototype=new Person('alami',18)
Prof.prototype.constructor = Person;
//Prof.prototype.salaire="9000";
Prof.prototype.valider=function  () {

	alert(this.nom+" salaire "+this.salaire+" age "+this.age)
}
pr=new Prof(8000);
pr.valider(7)

}