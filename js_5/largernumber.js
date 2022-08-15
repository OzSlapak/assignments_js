/*Write a JavaScript program that takes two integers from a user and displays the larger*/

const numx = Number(prompt ("Please enter a number you like"));
const numy = Number(prompt ("Please enter another number you dont like"));
if (numx > numy) {
    console.log("the greater number is "+ numx);
}else if (numx < numy){
    console.log("the greater number is "+ numy);
}else{
    console.error("I SAID A NUMBER!");
}