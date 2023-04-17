//Write a function that takes in a string and returns it when reversed
//let food = “eating”
function mfunction(food){
  return food.split("").reverse().join("")
}
let food= "eating"
console.log(mfunction(food));
//Write a function that takes in the following array and consoles the target if it is found else
//null
//let num = [2,8,0,23,5,45,76]
//Target = 23

function divideArr(arr){
    if (arr.length <= 1){
return arr;
    }
       let middle = Math.floor(arr.length/2);
       let left = arr.slice(0,middle);
       let right = arr.slice(middle);
       console.log({left});
       console.log([right]);
return sortedArr(divideArr(left), divideArr(right));
}

function sortedArr(num){
       let emptyArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            emptyArr.push(left.shift()) ;      
        }
else{
    emptyArr.push(right.shift());
}
    }
    return [...emptyArr,...left,...right];
}


function p(num,target){
   let left=0;
    let right=num.length-1

    while(left<=right){
    let middle= Math.floor((left+right)/2)

    if(num[middle]===target){
    return middle
}
     else if(num[middle]>target){
     middle -1
}
     else{
     middle +1
}}
     return null;
}
let num =[2,8,0,23,5,45,76];
target =23;
console.log(sortedArr(num))
console.log(p(num,target))

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
year=2000;
function checkLeap(year){
  for(let year=2000; year<=2023; year++)  
  if(year %4 ==0){
        console.log(year + ` is a leap year`)
    }
    else{
        console.log(year + ` is not a leap year`)
    }
}
checkLeap(year)
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for (let i=0; i<=100; i++){
    if(i%3 ==0 && i%5 ==0){
        console.log(i + " is FizzBuzz");
    }
    else if(i%3 ==0){
        console.log(i+ " is Fizz");
    }
    else if(i%5==0){
        console.log(i+ " is Buzz");
    }
    else{
        console.log(i)
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

function change(arrays){
    x=[];
    for(num of arrays){
        x.push(parseInt(num))
    }
    return x
    }
 let nums = ["10", "24", "45", "56","67"];
 console.log(change(arrays))
