// Week 2 Day 4
// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
 
// Ex: Given array [1,4,"food","hello",true,"food"] 
// Output:
// yummy
// yummy
// ---------------------------
// Ex: Given array [2,true,5,"hello",8,"four"]
// Output:
// I'm hungry



/*
1. look through the array at each and every element
    2. if the current element is the word "food" then we will print "yummy"
    3. If by the time we finished looking at every element, and if we have not foudn the word food at all, we will print "im hungry"
*/



function hungerGames(arrayInput){
    let foodFound = false; //have a variable to keep track of if we have found food or not. Initially it is false, but when we loop through our array and if at any point we find the word "food", we will toggle this variable to true.


    //use a for loop to traverse through/ iterate/ go through the array and look at each and every element at each index
    for(let i=0; i< arrayInput.length; i++){

        //the current element is represented by: arrayInput[i]. See if the current element is equal to the word food. 
        if(arrayInput[i] == "food"){
            //if the current element is the word food, we will console.log "yummy"  
            console.log("yummy");

            //we will also tell the computer that we found food so that the computer that remember that
            foodFound= true;
        }
    }
    
    //by the time we are done looking through the whole array, if we have found food, the variable foundFood will be true. If we have not found food, the variable foundFood will be false. If foundFood is false, log "im hungry"
    if(foodFound == false){
        console.log("I'm hungry");
    }

}

hungerGames([1,4,"food","hello",true,"food"]);

// hungerGames([2,true,5,"hello",8,"four"]);



