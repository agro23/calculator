
var getInput = function (message){
	var value = prompt(message);
	return value;
}

var convertGallonsToLiters = function (gal){
	// 1 gallon = 3.785411784 liters
	var gallons = parseFloat(gal);
	var liters = gallons * 3.785411784;
	alert("That is " + liters.toString() + " liters.");
}
convertGallonsToLiters(getInput("How many gallons to convert to liters?"));

/*
What unit are you converting from:

1-teaspoons
2-tablespoons
3-ounces
4-fluid ounces
5-cups
6-pints
7-quarts
8-gallons

What unit are you converting to:

1-teaspoons
2-tablespoons
3-ounces
4-fluid ounces
5-cups
6-pints
7-quarts
8-gallons


Volume:

ounces to grams  -- n * 28.35
pounds to grams above * 16
tblspn to milliliters -- n * 14.786765
tablespoon is 0.3333 teaspoons
teaspoons to milliliters -- n * 0.20288
teaspoons to fluid ounce -- n * 0.166667
cup to milliliters --  n * 236.5882
pint is two cups
quart is two pints
gallon 8 pints

milliliters to liters

*/

/* MAIN
var number1 = parseInt(getInput("What is your first number?"));
var number2 = parseInt(getInput("What is your second number?"));
var result = add(number1, number2);
alert("Your result is: \n"+ result);

/*var add = function(number1, number2) {
  return number1 + number2;
};
*/
/*var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

/*
var greet = function (name) {
	alert("Hello " + name + "!");
}

var subtractNumbers = function(){
	firstNum = getInput("What is your first number");
  secondNum = getInput("What is your second number");
  newNum = subtract(parseInt(firstNum), parseInt(secondNum));
  alert("Your result is: "+ newNum);
}

var multiplyNumbers = function(){
	firstNum = getInput("What is your first number");
  secondNum = getInput("What is your second number");
  newNum = multiply(parseInt(firstNum), parseInt(secondNum));
  alert("Your result is: "+ newNum);
}

var threeTimes = function(){
	firstNum = getInput("What is your first number");
  secondNum = getInput("What is your second number");
  thirdNum = getInput("What is your third number");
  newNum = multiply(parseInt(firstNum), parseInt(secondNum));
  newNewNum = multiply(newNum, parseInt(thirdNum));
  alert("Your result is: "+ newNewNum);
}

var divideNumbers = function(){
	firstNum = getInput("What is your first number");
  secondNum = getInput("What is your second number");
  newNum = divide(parseInt(firstNum), parseInt(secondNum));
  alert("Your result is: "+ newNum);
}

var remainder = function(){
	firstNum = getInput("What is your first number");
  secondNum = getInput("What is your second number");
  newNum = modulo(parseInt(firstNum), parseInt(secondNum));
  alert("Your result is: "+ newNum);
}

var combine= function(string1, string2){
	msg="Your name is: " + string1;
  msg=msg + "\nYour favorite food is: " + string2;
	return(msg);
}

// MAIN
/*greet(getInput("What is your name?"));
subtractNumbers();
multiplyNumbers();
threeTimes();
divideNumbers();
remainder();


var newName = getInput("Please enter your name:");
var favFood = getInput("Please enter your favorite food:");
alert(combine(newName, favFood));
*/
