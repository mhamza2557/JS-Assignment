// Muhammad Hamza Anees
// WM7685

// chapter1

// 1
alert('greet your website visitor')

// 2
document.write('Error! Please enter a valid password.')

// 3
alert('Welcome to JS Land...\nHappy Coding!')

// 4
alert('Welcome to JS Land...')
alert('Happy Coding!')

// 5
alert('Hello... I can run JS through web browser\'s console')

// 6
alert('Alert in index.html')

// 7
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>JS Assignment</title>
//     <script src="app.js"></script>
// </head>

// <body>
//     <script src="app.js"></script>
//     <h1>Heading</h1>
//     <script src="app.js"></script>
//     <h1>Heading</h1>
//     <script src="app.js"></script>
// </body>

// </html>

// chapter2

// 1
var username;

// 2
let myName = 'Muhammad Hamza Anees'

// 3
let message = 'Hello World'
alert(message)

// 4
var name = 'Muhammad Hamza Anees'
var age = '20 years old'
var course = 'Web and Mobile Development'
alert(name, age, course)
alert(age)
alert(course)

// 5
var pizza = 'PIZZA\nPIZZ\nPIZ\nPI\nP'
alert(pizza)

// 6
let email = 'mhamza2551@gmail.com'
alert('My email address is ' + email)

// 7
let book = 'A smarter way to learn JavaScript'
alert('i am trying to learn fron the Book ' + book)

// 8
document.write('Yah! I can write HTML content through JavaScript')

// 9
var design = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬'
alert(design)

// chapter3
// 1
let age = 20
alert('i am ' + age + ' years old')

// 2
var visit = 3
alert('You have visited this site ' + visit + ' times')

// 3
let birthYear = 1996
document.write('My birth year is ' + birthYear + '<br>Date type of my declared variable is number')

// 4
let visitorName = 'Hamza'
let productTitle = 'Shirt'
var quantity = 5
alert(visitorName + ' ordered ' + quantity + ' ' + productTitle + '(s) on MH Clothing Store')

// chapter4
// 1
var a, b, c;

// 2
var $_a, _b, _123, abc_xyz, abc_123;
// var abc xyz, 123abc, abc 'sxyz, abc-123, %_aa;

// 3
document.write('<h1>Rules for naming JS variables</h1><br><p>Variable names can only contain numbers, $ and _ . For example $my_1stVariable<br>Variables must begin with a letter, $ or _ . For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS</p>')

// chapter5
// 1
first_number = 3;
second_number = 5;
result = first_number + second_number;
document.write('Sum of ' + first_number + ' and ' + second_number + ' is ' + result)

// 2
first_number = 6;
second_number = 5;
result = first_number - second_number;
document.write('Sub of ' + first_number + ' and ' + second_number + ' is ' + result)

first_number = 3;
second_number = 5;
result = first_number * second_number;
document.write('Multiple of ' + first_number + ' and ' + second_number + ' is ' + result)

first_number = 15;
second_number = 5;
result = first_number / second_number;
document.write('Divide of ' + first_number + ' and ' + second_number + ' is ' + result)

first_number = 15;
second_number = 5;
result = first_number % second_number;
document.write('Reminder of ' + first_number + ' and ' + second_number + ' is ' + result)


// 3
var a;
document.write('Value after variable declaration is: ')
document.write(a)

a = 6;
document.write('<br><br>Initial value ')
document.write(a)

a++;
document.write('<br><br>Value after increment ')
document.write(a)

a = a + 7;
document.write('<br><br>Value after addition')
document.write(a)

a--;
document.write('<br><br>Value after decrement')
document.write(a)

a = a % 3;
document.write('<br><br>Show the remainder after dividing the variable’s value by 3: ')
document.write(a)

// 4
var ticker = 600;
var numbersOfTicket = 5;
document.write('Total cost to buy ' + numbersOfTicket + ' tickets to a movie is ' + ticker * numbersOfTicket + 'PKR')

// 5
document.write('Table of 4<br>')
for (let i = 1; i <= 10; i++) {
    document.write('4x' + i + '=' + i * 4 + '<br>')
}

// 6
var fehrenheit = 77;
var convertCelsius = (fehrenheit - 32) * 5 / 9;
document.write(convertCelsius + '°C is ' + fehrenheit + '°F<br>')

var celsius = 21.11111111111111;
var convertFehrenheit = (celsius * 9 / 5) + 32;
document.write(convertFehrenheit + '°F is ' + celsius + '°C')

// 7
var price1 = 650;
var price2 = 100;
var shippingCharges = 100;
var q1 = 3;
var q2 = 7;
var totalCost = (price1 * q1) + (price2 * q2) + shippingCharges
document.write('<h1>Shopping Cart</h1><br>')
document.write('Price of item 1 is ' + price1 + '<br>Quentity of item 1 is ' + q1 + '<br>Price of item 2 is ' + price2 + '<br>Quentity of item 2 is ' + q2 + '<br>Shipping Charges ' + shippingCharges + '<br><br>Total cost of your order is ' + totalCost)

// 8
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write('<h1>Marks Sheet</h1><br>')
document.write('Total marks: ' + totalMarks + '<br>')
document.write('Marks obtained: ' + obtainedMarks + '<br>')
document.write('Percetage: ' + percentage)

// 9
singleExpression = (104.80 * 10) + (28 * 25);
document.write('<h1>Currency in PKR</h1><br>Total Currency in PKR: ' + singleExpression)

// 10
var b = 5 * 10 / 2;
document.write('Arithmetic Operation: ' + b)

// 11
var currentYear = 2020;
var birthYear = 2000;
var age = currentYear - birthYear;

document.write('<h1>Age Calculator</h1><br>')
document.write('Current Year: ' + currentYear + '<br>')
document.write('Birth Year: ' + birthYear + '<br>')
document.write('Your Age: ' + age)

// 12
let pi = 3.142;
var radius = 20;
var circumferenceOfACircle = 2 * pi * radius;
var area = pi * radius * radius;

document.write('<h1>The Geometrizer</h1><br>')
document.write('Radius of a circle: ' + radius + '<br>')
document.write('The circumference is: ' + circumferenceOfACircle + '<br>')
document.write('The area is: ' + area)

// 13
var snack = 'choclate chip'
var age = 15;
var maxAge = 65;
var day = 3;
var calculate = (maxAge - age) * day;

document.write('<h1>The Lifetime Supply Calculator</h1><br>')
document.write('Favourite Snack: ' + snack + '<br>')
document.write('Current Age: ' + age + '<br>')
document.write('Estimated Maximum Age: ' + maxAge + '<br>')
document.write('Amount of snacks per day:' + day + '<br>')
document.write('You will need ' + calculate + ' chocolate chip to last you until the rip old age of ' + maxAge)

// chapter6-9
// 1
var a = 10;

document.write('Result:<br>')
document.write('The value of a is:' + a + '<br>')
document.write('.................................<br><br>')

document.write('The value of ++a is: ' + ++a + '<br>')
document.write('Now the value of a is: ' + a + '<br><br>')

document.write('The value of a++ is: ' + a++ + '<br>')
document.write('Now the value of a is: ' + a + '<br><br>')

document.write('The value of --a is: ' + --a + '<br>')
document.write('Now the value of a is: ' + a + '<br><br>')

document.write('The value of a-- is: ' + a-- + '<br>')
document.write('Now the value of a is: ' + a)

// 2
var a = 2;
var b = 1;

document.write('a: ' + a + '<br>')
document.write('b: ' + b + '<br>')

result = --a - --b + ++b + b--;
document.write('result: ' + result + '<br>')

document.write('--a value is 1<br>')
document.write('--a - --b value is 1<br>')
document.write('--a - --b + ++b value is 2<br>')
document.write('--a - --b + ++b + b-- value is 3<br>')

// 3
var name = prompt('What is your name')
alert('Name is ' + name)

4

// 5
var tableNumber = prompt('Enter table number to print')

if (Number(tableNumber)) {
    for (let i = 1; i <= 10; i++) {
        document.write(tableNumber + 'x' + i + '=' + tableNumber * i + '<br>');
    }
} else {
    for (let i = 1; i <= 10; i++) {
        document.write(5 + 'x' + i + '=' + 5 * i + '<br>');
    }
}

// 6
var s1 = 'English';
var s2 = 'Urdu';
var s3 = 'Math';
var totalMarks = 100;
var totalMarksSub = 100 * 3;
var oM1 = prompt('Enter Obtained Mask');
var oM2 = prompt('Enter Obtained Mask');
var oM3 = prompt('Enter Obtained Mask');
var totalObtainedMarks = Number(oM1) + Number(oM2) + Number(oM3);
var p1 = Math.trunc((oM1 / totalMarks) * 100);
var p2 = Math.trunc((oM2 / totalMarks) * 100);
var p3 = Math.trunc((oM3 / totalMarks) * 100);
var totalPercetage = (p1 + p2 + p3) / 3;

document.write('<table>')
document.write('<tr><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>')
document.write('<tr><td>' + s1 + '</td><td>' + totalMarks + '</td><td>' + oM1 + '</td><td>' + p1 + '%</td></tr>')
document.write('<tr><td>' + s2 + '</td><td>' + totalMarks + '</td><td>' + oM2 + '</td><td>' + p2 + '%</td></tr>')
document.write('<tr><td>' + s3 + '</td><td>' + totalMarks + '</td><td>' + oM3 + '</td><td>' + p3 + '%</td></tr>')
document.write('<tr><th colspan="2">' + totalMarksSub + '</th><th>' + totalObtainedMarks + '</th><th>' + totalPercetage + '%</th></tr>')
document.write('</table>')

// 7

// chapter9-11

// 1
var city = prompt('Enter city name')
if (city == 'Karachi') {
    document.write('Welcome to city of lights')
}

// 2
var gender = prompt('Enter your gender')
if (gender == 'Male') {
    document.write('Good Morning Sir')
} else if (gender == 'Female') {
    document.write('Good Morning Ma’am')
}

// 3
var signal = prompt('Enter signal color')
if (signal == 'Red') {
    document.write('Must stop')
} else if (signal == 'Yellow') {
    document.write('Ready to move')
} else if (signal == 'Green') {
    document.write('Move now')
}

// 4
var fuel = prompt('Enter fuel in liters')
if (fuel < 0.25) {
    document.write('Please refill the fuel in your car')
}

// 5
// a.given condition
// for variable a is true
// b.given condition
// for variable b is true
// c.condition 2 is true, condition 4 is true
// d.The cost equals
// e.True
// f.car is smaller than cat

// 6
var s1 = prompt('Enter first subject marks')
var s2 = prompt('Enter second subject marks')
var s3 = prompt('Enter third subject marks')
var totalMarks = 300;
var totalObtaiedMarks = Number(s1) + Number(s2) + Number(s3);
var percentage = Math.trunc((totalObtaiedMarks / totalMarks) * 100);

document.write('<h1>Marks Sheet</h1><br>')
document.write('Total Marks: ' + totalMarks + '<br>')
document.write('Marks obtained: ' + totalObtaiedMarks + '<br>')
document.write('Percentage: ' + percentage + '%<br>')

if (percentage >= 80) {
    document.write('Grade: A-one<br>')
    document.write('Remarks: Excellent')
} else if (percentage >= 70) {
    document.write('Grade: A<br>')
    document.write('Remarks: Good')
} else if (percentage >= 60) {
    document.write('Grade: B<br>')
    document.write('Remarks: You need to improve')
} else if (percentage < 60) {
    document.write('Grade: Fail<br>')
    document.write('Remarks: Sorry')
}

// 7
var secretNumber = 4;
var guess = prompt('Guess the number')

if (secretNumber === Number(guess)) {
    document.write('Bingo! Correct answer')
} else if (++secretNumber === Number((guess))) {
    document.write('Close enough to the correct answer')
}

// 8
var number = prompt('Enter any number')
if (Number(number) % 3 == 0) {
    document.write('number is divisible by 3')
}

// 9
var number = prompt('Enter any number')
if (Number(number) % 2 == 0) {
    document.write('Even')
} else {
    document.write('Odd')
}

// 10
var temperature = prompt('Enter temperature')

if (Number(temperature) > 40) {
    document.write('It is too hot outside')
} else if (Number(temperature) > 30) {
    document.write('The Weather today is Normal')
} else if (Number(temperature) > 20) {
    document.write('Today’s Weather is cool')
} else if (Number(temperature) > 10) {
    document.write('OMG! Today’s weather is so Cool')
}

// 11

var firstNumber = prompt('Enter first number')
var secondNumber = prompt('Enter second number')
var operator = prompt('Enter operator')

if (operator == '+') {
    var caluclate = firstNumber + secondNumber;
    document.write('Addition: ' + caluclate)
} else if (operator == '-') {
    var caluclate = firstNumber - secondNumber;
    document.write('Subtraction: ' + caluclate)
} else if (operator == '*') {
    var caluclate = firstNumber * secondNumber;
    document.write('Multilpy: ' + caluclate)
} else if (operator == '/') {
    var caluclate = firstNumber / secondNumber;
    document.write('Divide: ' + caluclate)
} else if (operator == '%') {
    var caluclate = firstNumber % secondNumber;
    document.write('Remainder: ' + caluclate)
}

// chapter12-13

// 1
var checkCharacter = prompt('Enter character')
if (checkCharacter.charCodeAt(0) >= 65 && checkCharacter.charCodeAt(0) <= 90) {
    document.write('UpperCase')
} else if (checkCharacter.charCodeAt(0) >= 97 || checkCharacter.charCodeAt(0) <= 122) {
    document.write('LowerCase')
}

// 2
var firstNumber = prompt('Enter first number')
var secondNumber = prompt('Enter second number')

if (Number(firstNumber) > Number(secondNumber)) {
    document.write('First Number is greater than second number')
} else if (Number(firstNumber) < Number(secondNumber)) {
    document.write('Second Number is greater than first number')
} else if (Number(firstNumber) == Number(secondNumber)) {
    document.write('First Number is equal to second number')
}

// 3
var number = prompt('Enter number')

if (Number(number) == 0) {
    document.write('Zero')
} else if (Number(number) > 0) {
    document.write('Positive')
} else if (Number(number) < 0) {
    document.write('Negative')
}

// 4
var char = prompt('Enter character')

if (char.charCodeAt(0) == 65 || char.charCodeAt(0) == 69 || char.charCodeAt(0) == 73 || char.charCodeAt(0) == 79 || char.charCodeAt(0) == 85 || char.charCodeAt(0) == 97 || char.charCodeAt(0) == 101 || char.charCodeAt(0) == 105 || char.charCodeAt(0) == 111 || char.charCodeAt(0) == 117) {
    document.write('True')
} else {
    document.write('False')
}

// 5
var correctPassword = 'abcd'
var askPassword = prompt('Enter Password')

if (correctPassword == askPassword) {
    document.write('Correct! The password you entered matches the original password ')
} else if (askPassword === '') {
    document.write('Please enter your password')
} else if (correctPassword != askPassword) {
    document.write('Incorrect password')
}

// 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

// 7
var time = prompt('Enter Time in 24 Hours Format')

if (time == '0100') {
    document.write('1 AM')
} else if (time == '0200') {
    document.write('2 AM')
} else if (time == '0300') {
    document.write('3 AM')
} else if (time == '0400') {
    document.write('4 AM')
} else if (time == '0500') {
    document.write('5 AM')
} else if (time == '0600') {
    document.write('6 AM')
} else if (time == '0700') {
    document.write('7 AM')
} else if (time == '0800') {
    document.write('8 AM')
} else if (time == '0900') {
    document.write('9 AM')
} else if (time == '1000') {
    document.write('10 AM')
} else if (time == '1100') {
    document.write('11 AM')
} else if (time == '1200') {
    document.write('12 PM')
} else if (time == '1300') {
    document.write('1 PM')
} else if (time == '1400') {
    document.write('2 PM')
} else if (time == '1500') {
    document.write('3 PM')
} else if (time == '1600') {
    document.write('4 PM')
} else if (time == '1700') {
    document.write('5 PM')
} else if (time == '1800') {
    document.write('6 PM')
} else if (time == '1900') {
    document.write('7 PM')
} else if (time == '2000') {
    document.write('8 PM')
} else if (time == '2100') {
    document.write('9 PM')
} else if (time == '2200') {
    document.write('10 PM')
} else if (time == '2300') {
    document.write('11 PM')
} else if (time == '0000') {
    document.write('12 AM')
}

// chapter14-16

// 1
var a = [];

// 2
var b = new Array();

// 3
var c = ['a', 'b', 'c'];

// 4
var d = [1, 44, 66, 44];

// 5
var e = [true, false, true]

// 6
var f = [true, 'a', 133, 2.33, 'abc']

// 7
var g = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

document.write('<h1>Qualification</h1><h1>')
for (let i = 0; i < g.length; i++) {
    document.write((i + 1) + ') ' + g[i] + '<br>')
}
document.write('</h1>')

// 8
var studentName = ['Michael', 'John', 'Tony'];
var obtainedMarks = [320, 230, 480];
totalMarks = 500;

document.write('<h3>')
for (let i = 0; i < studentName.length; i++) {
    document.write('Score of ' + studentName[i] + ' is ' + obtainedMarks[i] + '. Percentage: ' + Math.trunc((obtainedMarks[i] / totalMarks) * 100) + '%<br>')

}
document.write('</h3>')

// 9
var colorName = [];
document.write(colorName + '<br>')

var user = prompt('Enter color name')
colorName.unshift(user)
document.write(colorName + '<br>')

var user = prompt('Enter color name')
colorName.push(user)
document.write(colorName + '<br>')

var user = prompt('Enter color name')
colorName.unshift(user)
document.write(colorName + '<br>')

var user = prompt('Enter color name')
colorName.unshift(user)
document.write(colorName + '<br>')

colorName.shift()
document.write(colorName + '<br>')

colorName.pop()
document.write(colorName + '<br>')

var user = prompt('Enter color name')
var index = prompt('Enter index')
colorName.splice(Number(index), 0, user)
document.write(colorName + '<br>')

var delStart = prompt('Start delete color')
var delEnd = prompt('End delete color')
colorName.splice(Number(delStart), Number(delEnd))
document.write(colorName + '<br>')

// 10
var a = [320, 230, 480, 120]
document.write('Before sort:' + a)
a.sort()
document.write('<br>After sort:' + a)

// 11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
var selectedCities = cities.slice(2, 4);
document.write('Cities list:<br>' + cities)
document.write('<br><br>Selected cities list:<br>' + selectedCities)

// 12
var arr = ['This', 'is', 'my', 'cat'];
document.write('<h1>Array:<br>' + arr + '</h1>')
document.write('<h1>String:<br>' + arr.join(' ') + '</h1>')

// 13
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];

document.write('<h3>Devies:<br>' + devices + '<br>')
for (let i = 0; i < 4; i++) {
    document.write('<br>Out:<br>' + devices.shift())
}
document.write('</h3>')

// 14
var devices = ['keyboard', 'mouse', 'printer', 'monitor'];

document.write('<h3>Devies:<br>' + devices + '<br>')
for (let i = 0; i < 4; i++) {
    document.write('<br>Out:<br>' + devices.pop())
}
document.write('</h3>')

// 15
var manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

document.write('<select>')
for (let i = 0; i < manufacturers.length; i++) {
    document.write('<option>' + manufacturers[i] + '</option>')
}
document.write('</select>')

// chapter17-20

// 1
var a = [
    [],
    []
];

// 2
var b = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
document.write('<h1>')
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= 3; j++) {
        document.write(b[i][j] + ' ')
    }
    document.write('<br>')
}
document.write('</h1>')

// 3
document.write('<h1>')
for (let i = 0; i < 10; i++) {
    document.write((i + 1) + '<br>')
}
document.write('</h1>')

// 4
var table = prompt('Enter a number to show its multiplication table')
var tableLength = prompt('Enter length multiplication table')

document.write('Multiplication table of ' + table + '<br>')
document.write('Length ' + tableLength + '<br><br>')
for (let i = 1; i <= tableLength; i++) {
    document.write(table + ' x ' + i + ' = ' + table * i + '<br>')
}

// 5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
document.write('<h1>')
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
}
document.write('</h1>')

document.write('<h1>')
for (let i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>')
}
document.write('</h1>')

6
document.write('<h1>Counting: ')
count = 15
for (let i = 0; i < count - 1; i++) {
    document.write((i + 1) + ', ')
}
document.write('</h1>')

document.write('<h1>Reverse Counting: ')
let i;
count = 15
for (i = count; i > 0; i--) {
    if (i == 1) {
        break
    }
    document.write(i + ', ')
}
document.write('</h1>')

document.write('<h1>Even: ')
count = 15
for (let i = 0; i < count - 1; i++) {
    if (i % 2 == 0) {
        document.write(i + ', ')
    }
}
document.write('</h1>')

document.write('<h1>Odd: ')
count = 15
for (let i = 0; i < count - 1; i++) {
    if (i % 2 != 0) {
        document.write(i + ', ')
    }
}
document.write('</h1>')

document.write('<h1>Series: ')
count = 15
for (let i = 0; i <= count - 1; i++) {
    if (i != 0) {
        document.write((i * 2) + 'k, ')
    }
}
document.write('</h1>')

// 7
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var search = prompt('Welcome to ABC Bakery. What do you want to order sir/ma\'am')

if (a.indexOf(search) == -1) {
    document.write('We are sorry.' + search + ' is <b>not available</b> in our bakery')
} else {
    document.write(search + ' is <b>available</b> at index ' + a.indexOf(search) + ' in our bakery')
}

// 8
var a = [24, 53, 78, 91, 12];
var largest = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i]
    }
}
document.write('<h1>Arrat items:' + a + '<br>')
document.write('The largest number is ' + largest + '</h1>')

// 9
var a = [24, 53, 78, 91, 12];
var smallest = a[0];
for (let i = 0; i < a.length; i++) {
    if (a[i] < smallest) {
        smallest = a[i]
    }
}
document.write('<h1>Arrat items:' + a + '<br>')
document.write('The smallest number is ' + smallest + '</h1>')

// 10
for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0)
        document.write(i + ', ')
}