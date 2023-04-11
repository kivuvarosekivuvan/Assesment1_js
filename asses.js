//Write a function that takes in a string and returns it when reversed
//let food = “eating”
let food= "eating"
function mfunction(food){
    for(let f of food){
        console.log(f);
    }
}
mfunction(food);
console.log(food.reversed());
//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
let num =[2,8,0,23,5,45,76];
target =23;

function(num,target){
    left=0;
    right=num.length-1
}


//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
//  var rangex="2000..2023"
//  for(let i=0; i<rangex.length; i++){
//     if
// }





//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

var range="0..100";
for (let i=0; i<range.length; i++){
    if(i%3 ==0 && i%5 ==0){
        console.log("FizzBuzz");
    }
    else if(i%3 ==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
}

//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
//let numArray = [12,87,45,75,23,64,73]
let numArray = [12,87,45,75,23,64,73];
let all=numArray.map(function(num){
    return num*4});
console.log({all});

//Write a function that takes in an array of strings and returns an array with every element
//turned into a number
//let nums = [“10”,”24”,”45”,”56”,”67”]

let nums = ["10", "24", "45", "56","67"];
let z =[];
function mfun(){
for(let i of nums){
   z.push(...i);
return z
}
}
console.log(z);
mfun();

