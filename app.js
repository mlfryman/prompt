var prompt = require('sync-prompt').prompt;
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var fullName = first + ' ' + last;
console.log('Your full name is', fullName,'! I hope you already knew that. \n\n');

var color = prompt('What is your favorite color? ' );
console.log('Your favorite color is' +  color + '.' + ' \n\n');

var dAge = prompt("What is your dog's age? ");
console.log(typeof dAge);
dAge = parseInt(dAge);
console.log(typeof dAge);

var dAgeH = (dAge * 7);

console.log('Your dog is',dAge,'years old.');
console.log('In human years, your dog is roughly',dAgeH, 'years old. \n\n');


var age = prompt('What is your age? ');
age = parseInt(age);

if(age >= 21){
  console.log('Cheers! You can drink. \n\n');
}else{
  console.log('No booze for you! You CANNOT drink. \n\n');
}


// MLF attempt w/ Adam's help.

var scale = prompt('What scale are you using?  \u00B0F or \u00B0C? ');
scale = scale.toUpperCase();

var temp = prompt('What is the temperature? ');
temp = parseInt(temp);

if(scale === 'F'){
  var convertC = (5/9) * (temp-32)
  console.log(temp + '\u00B0F in' + convertC + '\u00B0C \n\n');
} else if (scale  === 'C') {
  var convertF = ((9/5)*temp)+32;
  console.log(temp + '\u00B0C in' + convertF + ' \u00B0F \n\n');
} else {
  console.log('Try again. \n\n');
}


// Chyld's example.

var scale = prompt('What scale are you using (\u00B0F or \u00B0C)? \n');
var temp = prompt('What is the temperature? \n');
temp = parseInt(temp);

var converted;
var alt;

if(scale === 'f') {
  converted = (temp - 32) * (5/9);
  alt = 'c';
}else {
  converted = (temp + 9/5) + 32;
  alt = 'f';
}

console.log(temp + scale + ' --> ' + converted + alt + '\n\n');

// BMI Calculator.

var height = prompt('What is your height (inches)? ');
height = parseInt(height);
var mass = prompt('What is your weight (pounds)? ');
mass = parseInt(mass);

var bmi = (mass/(Math.pow (height, 2))) * 703;

console.log('Height: ' + height + ' in.');
console.log('Weight: ' + mass + ' lbs.');
console.log('Your BMI is: ' + bmi.toFixed(1) + '\n\n');









