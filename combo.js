/* This Code is my first project of 2016
in this code i ask the user for three numbers from 1-10.
these number are what the user guesses as the combination

* Copyright 2016, Natalie Walker



*/

// Start Code to Write Game title on Canvas
window.onload = function() {
    var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d');
    c.fillStyle = "#144a61";
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.font = "30px Courier";
    c.fillStyle = "#f17c22";
    c.fillText("Combo-Breaker", 20,20);

};
//End code for writing game title on canvas


// Start game Code
//function game() {
    //var ctx = document.getElementById('canvas').getContext('2d');
/* alert("Are you Ready?");
var number1 = prompt("Give me a number, between 0 and 10");
var number2 = prompt("Can I have another?");
var number3 = prompt("One more please.");

var leftDigit =Math.floor(Math.random()*10+1);
var middleDigit = Math.floor(Math.random()*10+1);
var rightDigit = Math.floor(Math.random()*10+1);

parseInt(number1);
parseInt(number2);
parseInt(number3);



if (number1 == leftDigit) {
	document.write("You got the first nubmer!");
    }
    else {
    document.write(leftDigit + " . ");
    }

 if (number2 == middleDigit) {
	document.write("You got the second nubmer!");
    }
    else {
    document.write(middleDigit + " . ");
    }

    if (number3 == rightDigit) {
	document.write("You got the last nubmer!");
    }
    else {
    document.write(rightDigit + " . ");
} //end if statements
}; //end of game function
*/

//document.write(number1 + " . " + number2 + " . " + number3);
//document.write(leftDigit + " . " + middleDigit + " . "   + rightDigit);

/* Notes

* I could use an array to hold the combinations
        -one for the user and on for the computer
    - then compare the arrays to see if ther number is correct

* I could have a square display the numbers (one square/number)

* I could add some annimation too



 */
