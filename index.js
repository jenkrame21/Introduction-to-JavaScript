/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

//declare a variable
//use if else statement
//true if age is greater than 18
const votingAge = 19;

if(votingAge > 18){
  console.log("true");
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)


 var a = 15;
 var b = 30;

 if (a === 10) {
    console.log("True!");
 } else {
    console.log("False!");
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// NOTES
//Declare a variable "1999"
//Write a console to equal 1999
var num = "1999";

console.log(num);



//Task d: Write a function to multiply a*b 

function Multiply(a, b){
     var a = 2
     var b = 3
    console.log(a * b)
}





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age){
    return Math.pow(age,7);
}

console.log(dogYears(25));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
// NOTES 
//Takes weight in pounds
//Age in years (puppy in decimal; dog as integers)
//Returns the number of pounds of raw food to feed in a day

let age = 1
let weight = 15

function feedTheDog(age, weight){
    if(age >= 1 && weight <= 5){
        return weight * 0.05;
    } else if (weight <= 10){
        return weight * 0.04;
    } else if (weight <= 15){
        return weight * 0.3;
    } else (weight >= 15)
        return weight * 0.2;
    }
 feedTheDog(1, 15);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// NOTES
//function is mentioned
//return you won or lost
//use math.random to determine random handSymbols
//equate choice to a number (integer)
    //****Rules of the Game***//
        //scissors vs. rock = lost
        //scissors vs. paper = win
        //scissors vs. scissors = draw
        //rock vs. scissors = win
        //rock vs. paper = lost
        //rock vs. rock = draw
        //paper vs. scissors = lost
        //paper vs. rock = win
        //paper vs. paper = draw

const rock = "r";
const paper = "p";
const scissors = "s";
var random = Math.floor(Math.random() * 60) + 1;

function handSymbol(rock, paper, scissors){
    if(rock === r){
        return "draw";
    } else if (rock === p){
        return "lost";
    } else if (rock === s){
        return "win";
    } else if (paper === p){
        return "draw";
    } else if (paper === s){
        return "lost";
    } else if (paper === r){
        return "win";
    } else if (scissors === s){
        return "draw";
    } else if (scissors === r){
        return "lost"
    } else if (scissors === p){
        return "win"
    }
}
console.log(random)


  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


// NOTES
//make 1.60934 kilometers = 1 mile

// let kilometers = 1.60934

// function miles(kilometers){
//     Multiply(miles * 1.60934)
// }

// console.log(3 * kilometers)

var kilometers = parseInt(prompt("Please enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " Miles");





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
var feet = parseInt(prompt("Please enter number of feet that you would like to convert:"));
var cm = feet * 30.48;
console.log(cm + " Centimeters");



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(){
    var bottles;
    var bottlesLeft;
    for (i = 99; i >= 1; i--){
        if (i == 1){
            bottles = "bottle";
            bottlesLeft = "No bottles of soda on the wall";
        } else {
            bottles = "bottles";
            bottlesLeft = i -1 + "bottles of soda on the wall";
        } console.log(1+ " " + bottles + " of soda on the wall,");
        console.log("Take one down, pass it around,");
        console.log(bottlesLeft);
    }
}

console.log(annoyingSong());


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
// NOTES
//that takes = function

// switch (x) {
//     case x >= 90;
//     let grade = "A";
//     return grade

//     case x >= 80;
//     x = "B";

//     break;
//     case x >= 70;
//     x = "C"
//     break;
//     case x >= 60;
//     x = "D"
//     break;
//     case x >= 50;
//     x = "F"
// }
// console.log(72);

// function grades(number) {
//     if(numer >= 90){
//         //do something
//     }
// }

// grades(100)

/* Caveman vs Spaceman
    1. Plan english(native language too!)
    2. Try to solve the problem in your own words
    3. Start coding! Don't over think it or over optimize it at this point
    4. Once it's working, look at some optimizations (in a few weeks!)
*/  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object


