var fruits=['Mango','Apple',"kiwi",'Orange'];
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);


const axis=[22.2,2,45,6.8,90,1,10];
axis.sort(function(a,b){
    //console.log(a,b,a-b);
    return b-a;     // return a-b = sorting in ascending order ; return b-a= sorting in reverse order

});
console.log(axis);

// concat array
const num1=[1,2,3,4];
const num2=[5,6,7,8];
console.log(num1.concat(num2));