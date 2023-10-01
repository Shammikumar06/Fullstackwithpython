const student=new Object();
student.name="Jagan";
student.percentage='85';
student.greet = function (){
    return "Hello world";
};
console.log(student.greet());

const student={
    name1 : "Jana",
    percentage : "78",
    greet : function(){
        return this.name1+ ", Hello world";
    }
}
console.log(student.greet());
