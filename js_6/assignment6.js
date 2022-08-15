const num1 = Number(prompt("please enter the first number"));
const num2 = Number(prompt('please enter the second number"));
const num3 = Number(prompt("please enter the third number"));

if (num1 >= num2 && num1 >= num3){
    console.log("the largest number is "+num1);
    }else if (num2 >= num1 && num2 >= num3);{
    console.log(“the largest number is "+num2);
    }else if (num3 >= num1 && num3>=num2);{
    console.log("the largest number is " +num3);
    }else {
    console.error(“I SAID A NUMBER!“);
    }
