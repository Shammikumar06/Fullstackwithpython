// Filter Method

const numbers=[1,2,3,4,5]
const even=numbers.filter((item)=>item%2==0);
console.log(even);


const students=[
    {name:"Sanjay", age:24},
    {name:"ram",age:18},
    {name:"Jana",age:17},
    {name:"Karthi",age:20},
];
const filterstudents=students.filter((stud,index)=>{
    return stud.age<=18;
});
console.log(filterstudents);

//Reduce Method

// const marks=[{ subject:"English",mars:75},
// {subject:"Maths",marks:68},
// {subject:"Science",marks:70},
// ];
// function sumAllmarjs(totalmarks,subj){
//     return totalmarks+subj.marks;
// }
// const result=marks.reduce(sumAllmarjs,0);
// console.log(result);


const cartoon=[
    "Schinchan",
    "Doreman",
    "Spiderman",
    "Batman",
    "ChotaBHeem",
];
const result=cartoon.reduce(function(obj,cartoon){
    if(!obj[cartoon]){
        obj[cartoon]=1;
    }else{
        obj[cartoon]++;
    }
    return obj;
},{});
console.log(result);