var x=11;
try{
   const resp= x.toPrecision(5);
   console.log(resp);
}catch(Error){
    throw "Error:While setting precision to x";
}


var x=5;
var y=10;
try{
    x=z+1*2;
    console.log(x);
}catch(Error){
   // throw Error.name;                               // in catch and finally we can give console
    console.log(Error.name);
}finally{
    console.log("Failed to convert");
}




