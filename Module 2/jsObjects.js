const person={
    fname:"Shammikumar"

}
console.log(person);

 const person1=new Object();
 person1.firstname="Sanjay";
console.log(person1);




function person2(firstname,lastname){
    this.firstname=firstname;
    this.secondname=lastname;
    this.fullName=function(){
        return this.fullName+" "+this.lastname;
    };
}
const p1=new person2("Shammi","kumar");
const p2=new person2("Ram","Prasad");
console.log(p1);
console.log(p2);;
