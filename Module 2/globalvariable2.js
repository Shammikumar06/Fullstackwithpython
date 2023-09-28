function num1(number1){
    const result=number1*2;
    function num2(){
        return result*3;
    }
    const resp=num2();
    console.log(resp);
}
num1(10);