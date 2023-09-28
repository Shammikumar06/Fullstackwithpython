var fullname;
function greet(){                //Global Variable
    fullname='sanjay';
    console.log(fullname);
}
greet();


function agenumber(){
    var age=18;
    console.log(age);
}
agenumber();



function greet2(){                
    fullname='sanjay 123';
    console.log(fullname);
    console.log(age);        //Error because age not declared globally
}
greet2();


