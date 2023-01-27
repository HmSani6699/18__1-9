//Practice Problem 1
var fruits = ['Apple', 'Banana', 'Orang'];
var bananas = fruits.indexOf('Banana');
// console.log(bananas);

// console.log(fruits);
fruits[1] = 'Mango';
// console.log(fruits)


// Practice Problem 2

var totalMark = 85;
if (totalMark)

    // Practice Problem 3
    var number1 = 13;
var number2 = 69;
var number3 = 45;

if (number1 >= number2 && number1 >= number3) {
    console.log(number1)
}
else if (number2 >= number1 && number2 >= number3) {
    // console.log(number2)
}
else {
    // console.log(number3)
}

var num1 = 3;
var num2 = 2;
var num3 = 3;
if (num1 == num2 || num1 == num3) {
    // console.log('your grate')
}
else {
    console.log('tomader mell sarajino hobe na')
}



var roll_1 = 20;
var roll_2 = 40;
var roll_3 = 10;
var roll_4 = 60;
if (roll_1 >= roll_2 && roll_1 >= roll_3 && roll_1 >= roll_4) {
    console.log(roll_1);
}
else if (roll_2 >= roll_1 && roll_2 >= roll_3 && roll_2 >= roll_4) {
    console.log(roll_2)
}
else if (roll_3 >= roll_1 && roll_3 >= roll_2 && roll_3 >= roll_4) {
    console.log(roll_3)
}
else {
    // console.log(roll_4)
}



///////========================///////

//practice problem 1

var fruits = ['Apple', 'Banana', 'Orange'];

// chack your index to Banana
var banana = fruits.indexOf('Banana');

//update your element To in Banana
fruits[1] = "Mango"

//remove item
fruits.pop()

//set item
fruits.push('Watermelon')
// console.log(fruits)


//problem number 2

var sani = 66;
var babu = 95;
var apu = 56;
var abit = 40;

var score = 39;

if (score >= 80) {
    console.log('80 or above A grade')
}
else if (score >= 60) {
    console.log('60 or above B grade')
}
else if (score >= 50) {
    console.log('50 or above C grade')
}
else if (score >= 40) {
    console.log('40 or above D grade')
}
else {
    console.log('39 or less => F grade')
}