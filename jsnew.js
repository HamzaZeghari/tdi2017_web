function tester () {


o={}
o.age=90
o.nom="alami"
o.afficher=function(){
	if(this.age>18) 
		alert(this.nom + " est majeur");
else alert(this.nom+" est mineur")
}
o.afficher()


	function Person(nom,age){
this.nom=nom
this.age=age
this.valider=function  (n) {
	alert(this.nom)
}
	}









//pour ajouter une propriete ou methode
	Person.prototype.full_name = function(){
		alert(this.nom+" "+this.age+" ans")
	};
	p=new Person('alaoui',19)
	p.full_name()
// héritage

function Prof(){

}
Prof.prototype=new Person('harik',100)
Prof.prototype.constructor = Person;
Prof.prototype.salaire="9000";
Prof.prototype.valider=function  () {

	alert(this.nom+" salaire "+this.salaire+" age "+this.age)
}
pr=new Prof("alami",19,8000);
pr.valider(7)

}