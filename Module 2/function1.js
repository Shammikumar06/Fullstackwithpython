function greetCustomer(customerName="Customer"){
    console.log("Hello" + customerName);
}
greetCustomer();
greetCustomer("Tom 1");
greetCustomer("Tom 2");
greetCustomer("Tom 3");



function checkforValidateAge(age){
   return age>18?true:false;
}
var person1=checkforValidateAge(13);
console.log(person1);
var person2=checkforValidateAge(20);
console.log(person2);


function checkforname(fname){
    return fname=='s'?true:false;
}
var name1=checkforname ('s');
console.log(name1);
var name2=checkforname('b');
console.log(name2);



// Anonymous Function

var test = function(pen){
    return pen%2==0 ? "Passed" : "Failed" ;
};
console.log(test(100));


// Es6 Arrow Function

const printfullname=(fname,lname)=>{
    console.log(fname+ " "+ lname); 
}
printfullname("shammikumar", "T");


function providedNumber1(number1){
    return function providedNumber2(number2){
        return parseInt(number1)+parseInt(number2);
    };
}

const result=providedNumber1(10);
const finalresult=result(20);
console.log(finalresult);