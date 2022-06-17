//print 1 to 255

function print1To255(){
    for(let i = 1; i<=255; i++){
        console.log(i);
    }
}

// print1To255();

//print odds 1 to 255

function printOdds1To255(){
    for(let i = 1; i<=255; i++){
        //we only want to print i if it is an odd number
        if(i%2 == 1){
            console.log(i);
        }
    }
}

// printOdds1To255();


// print ints and sum 0-255-> Print integers from 0 to 255, and with each integer print the sum so far

function printIntsSum0To255(){
    let totalSum = 0
    for(let i = 0; i<=255; i++){
        totalSum = totalSum+i
        console.log(i, totalSum);
    }
}

// printIntsSum0To255();

let array1 = [3,6,9,12,13,14,15,23]
//            0 1 2  3  4  5  6  7
let array2 = [2,-5,6,8,1]

function iterateArray(arr){
    for(let i = 0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

// iterateArray(array1)

function findAndPrintMax(arr){
    let max = arr[0];

    //we will go through the array and for each element, we will ask if this element is greater than out max. 
    for(let i = 0; i<arr.length; i++){
        // arr[i] represents the current element. 
        //if the current element is greater than our max then we will update the max to be the current element;
        if(arr[i]>max){
            max= arr[i]
        }
    }
    console.log(max);
}

// findAndPrintMax(array1);


let arr3 = [10,20,30,40];

function getAndPrintAverage(arr){
    //to get the average, you find the total sum and divide it by the number of items in the array
    let size = arr.length;
    let totalSum = 0;
    for(let i = 0; i<arr.length; i++){
        totalSum += arr[i] //add the current element to the total sum
    }
    console.log(totalSum/size)
}

// getAndPrintAverage(arr3);



//array with odds-> Create an array with all the odd integers between 1 and 255 (inclusive).


// [1,3,5,7,...]
//1. create an empty array to put numbers inside of
//2. generate odd numbers from 1 - 255. Put that number into the array

function arrayWithOdds(){
    let result = [];
    for(let i = 1; i<=255; i+=2){
        result.push(i)
    }
    console.log(result);
    return result;
}

// arrayWithOdds();

let arr4 = [2,5,8,10]

function squareValues(arr){
    for(let i = 0; i<arr.length; i++){
        // console.log(Math.pow(arr[i],2));
        // console.log(arr[i]**2);
        // console.log(arr[i]*arr[i]);
        let squaredValue = arr[i]**2;
        arr[i] = squaredValue; //update the value of the array at the index i to be the squared value
    }

    console.log(arr);
    return arr;
}

// squareValues([2,5,8,10])
//[5,8,10,0]

//[3,6,9,12]
//we will look through the array at each index
//we will identify the what the value to the right is (the value in the next index)
//we will put that that value in the current index
//[6,9,12,0]

function shiftArrayValues(arr){
    for(let i = 0; i<arr.length; i++){
        let valueTotheRight = arr[i+1]
        //if the value to the right is undefined, then we will use 0
        if(valueTotheRight == undefined){
            arr[i] = 0;
        }else{
            arr[i] = valueTotheRight;
        }
    }

    console.log(arr)
}

shiftArrayValues([3,6,9,12]);

//[6,9,12,0];





