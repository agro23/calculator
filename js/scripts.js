var saySomething = function (whatToSay){
	alert(whatToSay);
}

var add = function(number1, number2){
	return number1+number2;
}

var subtract = function(number1, number2){
	return number1-number2;
}

var multiply = function(number1, number2){
	return number1*number2;
}

var divide = function(number1, number2){
	return number1/number2;
}

var modulo = function(number1, number2){
	return number1%number2;
}

var getInput = function (message){
	var value = prompt(message);
	return value;
}

// MAIN
var number1 = parseInt(getInput("What is your first number to add?"));
var number2 = parseInt(getInput("What is your second number to add?"));
var result = add(number1, number2);
alert("Your result is: \n"+ result);

var number1 = parseInt(getInput("What is your first number to subtract?"));
var number2 = parseInt(getInput("What is your second number to subtract?"));
var result = subtract(number1, number2);
alert("Your result is: \n"+ result);

var number1 = parseInt(getInput("What is your first number to multiply?"));
var number2 = parseInt(getInput("What is your second number to multiply?"));
var result = multiply(number1, number2);
alert("Your result is: \n"+ result);

var number1 = parseInt(getInput("What is your first number to divide?"));
var number2 = parseInt(getInput("What is your second number to divide?"));
alert("Your result is: \n"+ divide(number1, number2));
