// Week 2 Day 3
// EVENS AND ODDS!
 
// Create a function that accepts an array of numbers. 
//Every time that array
// has 3 odd values in a row, print "That's odd!" Every time the array has 3 even values
// in a row, print "Even more so!"
 
// Only print the messages when it's 3 in a row. If there are 5 consecutive odd
// values, for example, it should only print the message one time. If there are 7 consecutive
// even values, it should print the message two times.
 


// EXAMPLES:
// ------------------------------------

//[2,9,3,7,4,0] -> output: "That's odd";
// [1,3,5,8,8,8]-> output: "That's odd";
// [1,3,2,5,8,8,8]-> output: "even more so";






function evensAndOdds(nums){
    let evens = 0;
    let odds = 0;
    for(let i=0; i<nums.length; i++){
        //each time i see a number, i asked myself "is it odd or even?". If it is odd we will do something and if it is even we will do something else
        if(nums[i]%2 === 1){ //if the current number is odd
            odds++;
            evens = 0;
        }else{ //else if its even
            evens++;
            odds = 0;
        }

        if(odds == 3){
            console.log("That's odd")
            return "That's odd";
        }
        if(evens == 3){
            console.log("Even more so")
            return "Even more so";
        }
        
    }
}

//nums.length=7
//i= 0, 1, 2, 3, 4, 5, 6
//evens: 0->1->0->1->2->3
//odds: 0->1->2->0->1->0

evensAndOdds([1,3,2,5,8,8,8])
evensAndOdds([1,3,5,8,8,8])
evensAndOdds([2,9,3,7,4,0])
