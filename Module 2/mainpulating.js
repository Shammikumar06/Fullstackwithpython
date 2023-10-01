const age=[{emp:'Sidd', age:24},{emp:'addi',age:23}];
const age_map=ages.map((ea:{emp:String,age:number})){
    return{
        emp_details:ea.emp+"S age is:" +ea.age;
    }
});