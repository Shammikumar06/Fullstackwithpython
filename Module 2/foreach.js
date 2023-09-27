var friends=['ram','jana','karthi','barath'];
friends.forEach((item,index) => {
console.log(item,index);    
});


var fname="shammikumar";                        //This is only for Array 
fname.forEach((letter,index)=>{                 //in this case it will throws an error
    console.log(letter);
});