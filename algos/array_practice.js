//Data structure-> something that allows us to store different data types into one thing

//Data types-> String, integers, float (decimals), boolean (true/false)


//Array is a data structure we can use to group some data together into one variable

let students = ["Elijah", "Kenia", "Dan", "Timothy", "Brandon", "David", "Steve", "Patrick"]; //each thing in the array is referred to as "element" or "item"
//indexes           0        1       2       3          4         5        6         7


// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]);


//this for loop loops through all the students in teh students array and prints each student-> each element/item in the array
// for(let i = 0; i<students.length; i++){
    //     console.log(students[i]);
    // }
    
    
//the modulo operator-> modulo operator helps you to find the remainder of dividing two numbers
let favoriteNumbers = [0, 3, 8, 11, 23, 32, 77];
//indexes-->           0, 1, 2,  3, 4,  5,  6

// 4/2 -> 2; -> remainder is 0 
//5/2 --> remainder is 1

// for(let i = 0; i< favoriteNumbers.length; i++){
    
//     //IF the current element (favoriteNumbers[i]) is divisible by 2 evenly then it is even and we will print it. If it is odd, we will not print it.
//     if(favoriteNumbers[i] % 2 == 1){
//         console.log(favoriteNumbers[i])
//     }
// }




let randomNums = [10,4,2,0,11,8,2,30];
let randomNums2 = [1,15,2,10,110,8,2,3];


//HOW MANY NUMBERS IN RANDOMNUMS ARE GREATER THAN ITS SECOND NUMBER?

//Identify the second number -> it is 4 (its at index 1 in the array)
//looked at the array from left to right all the way to the end of the array-> we look at each element
//for each element we compared it to the second number to see if the current element is greater than the second number. If it is, we increased our count by 1
//answer is there are 3 numbers greater than the second number in the array


function valsGreaterThan2nd(nums){
    let count = 0;
    let secondNum = nums[1];
    for(let i = 0; i<nums.length; i++){
        if(nums[i] > secondNum){
            count++
        }
    }
    console.log(count)
}


valsGreaterThan2nd(randomNums2)
valsGreaterThan2nd(randomNums)





















