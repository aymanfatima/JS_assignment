//--------------------------------CHAPTER 01(ALERT)-----------------------------------------
//Task 01 
alert('WELCOME WEBSITE USERS')

//TASK O2
alert('Error!please enter a valid user password')

//TASK 03
alert('Welcome to JS land \n Happy coding!')

//TASK 04
alert('Welcome to JS land')
alert('Happy coding! \nprevent this page from creating additional dialogues')

//TASK 05
alert('hello! I can run my JS code on Browser Console')

//TASK 07 
//done in html file, attached with it.

//------------------------------CHAPTER 02(VARIABLES FOR STRING)--------------------------
//Task 01 
var username;

//TASK 02
var myName;
myName = "Ayman Fatima";

//TASK 03
var message = 'HELLO WORLD';
alert(message);

//TASK 04
var student = 'John Doe';
var age = 15;
var certified = 'Certified Mobile Application Development';
alert (student);
alert(age + " " + 'years old');
alert(certified);

//TASK 05
alert('PIZZA\n PIZZ\n PIZ\n PI\n P');

//TASK 06
var email = "aymenzehra50@gmail.com";
alert('my email is' + "  " + email);

//TASK 07
var book = "A smarter way to learn javascript";
alert('I am trying to learn from book' + " " + book)

 //TASK 08
document.write("Yah! I can write Html content in javascript");

//TASK 09
var var1 = ('▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬');
alert(var1);

//-------------------------------CHAPTER 03(VARIABLE FOR NUMBERS)----------------------------
//Task 01 
var age = 15;
alert('I am' + " " + age + " " + 'years old');

//TASK 02
var visit;
visit = 15;
alert('you have visited this site' + " " + visit + " " + 'times');

//TASK 03
var birthYear;
birthYear = 1998;
alert('My birth year is' + " " + birthYear + ' \nData type of my declared variable is number')

//TASK 04
var visitors_name = prompt("What's your Name?");
var product_title = prompt('Mention your product title');
var quantity = prompt("Your Product Quantity");
document.write(visitors_name + " " + 'ordered' + " " + quantity + " " + product_title + " " + 'from XYZ CLOTING STORE');

//-----------------CHAPTER 04(VARIABLE NAMES: LEGAL AND ILLEGAL)----------------------------------
//Task 01 
var var01, var02, var03;

//TASK 02
//legal variable declaration
var var01;
var $var;
var var0235678920;
var aBn;
var _var2;

//illegal variable declaration 
// var %var ;
// var 2var ;
// var ?var ;
// var 001;
// var &var ;

//TASK 03

document.write(' <h3>Rules For naming JS variables</h3> <br/> Variables names can only contain, number, $ and _. <br/> Variable must begin with a letter, $ or _ For example $name, _name and name <br/> Variables names are case sensitive <br/> Variable names should not be JS keywords.');


//---------------------------------CHAPTER 05(MATH EXPRESSION)--------------------------------------------------
//Task 01 
var a = 3;
var b = 5;
var c;
c = a + b;
document.write('<br/> Sum of 3 and 5 is' + " " + c);

//TASK 02
//subtraction
var a = 3;
var b = 5;
var c;
c = a - b;
document.write('<br/> Subtraction of 3 and 5 is' + " " + c);
//multiplication
var a = 3;
var b = 5;
var c;
c = a * b;
document.write(' <br/> Multiplication of 3 and 5 is' + " " + c);
//division
var a = 3;
var b = 5;
var c;
c = a / b;
document.write(' <br/> Division of 3 and 5 is' + " " + c);
//Modulus
var a = 3;
var b = 5;
var c;
c = a % b;
document.write('<br/> Modulous of 3 and 5 is' + " " + c);

//TASK 03
var a;
document.write('<br/> Value after Variable declaration is undefined');
a = 5;
document.write('<br/> Variable value' + " " + a);
a++;
document.write('<br/> Varaible after decreamnet' + " " + a);
a = a + 7;
document.write('<br/> Value after adding 7 is' + " " + a);
a = a - 1;
document.write('<br/> value after decereament become' + " " + a);
a = a % 3;
document.write('<br/> The remainder is' + " " + a);

//TASK 04
var ticket_price = 600;
var total = 600 * 5;
document.write('Total Cost to buy 5 tickets to a movie is' + " " + total);

//TASK 05
document.write('table of 2');
var a;
for (a = 1; a <= 10; a++) {
    document.write(' <br/> 2 x' + " " + a + " " + '=' + " " + a * 2);
}

//TASK 06
var F = 70;
var C = 25;
var centigrade = (F - 32) * 5 / 9;
var fahrenhiet = (C * 9 / 5) + 32;
document.write('<br/> 25 Degree Centigrade is' + " " + centigrade);
document.write('<br/> 70 Degree Fahrenhiet is' + " " + fahrenhiet);

//TASK 07
document.write('<h1>Shopping cart </h1> <br/>');
var item1 = 650;
document.write(' <br/> Price of item 1 is ' + " " + item1);
var item1_quantity = 3;
document.write(' <br/> Quantity of item 1 is ' + " " + item1_quantity);
var total1 = "";
total1 = item1 * item1_quantity;
var item2 = 100;
document.write(' <br/> Price of item 2 is ' + " " + item2);
var item2_quantity = 7;
document.write(' <br/> Quantity of item 2 is ' + " " + item2_quantity);
var total2 = "";
total2 = item2 * item2_quantity;
var main = "";
main = total1 + total2 + ship;
var ship = 100;
document.write(' <br/> Shpping charges' + " " + ship);
document.write('  <br/> Total cost of your order is' + "" + main);

//TASK 08
var marks = 804;
var tot = 980;
var percentage = " ";
percentage = 804 / 980 * 100;
document.write('<h1> Mark Sheet </h1>')
document.write(' <br/> Total Marks' + " " + tot);
document.write(' <br/> Marks Obtainced' + " " + marks);
document.write(' <br/> Percentage' + " " + percentage + "" + '%');

//TASK 09
var dol = 10;
var sr = 25;
var dol_pak = "";
var sr_pak = "";
dol_pak = 10 * 104.80;
sr_pak = 25 * 28;
var tota = "";
tota = dol_pak + sr_pak;
document.write('<br/> <h1> Currency in PKR </h1>');
document.write('<br/>Total Currency in PKR:' + " " + tota);

//TASK 10
var number = 2 + 5 * 10 / 2;

//TASK 11
document.write('<br/>  <h1>Age Calculator</h1>');
var year = 2016;
var born_year = 1992;
var age = "";
age = year - born_year;
document.write('<br/> Recent Year: ' + " " + year);
document.write('<br/> Birth Year: ' + " " + born_year);
document.write('<br/> Your age is:' + " " + age);

//TASK 12
document.write('<h1> Geometrizer </h1>');
var radius = 20;
document.write('<br/> Radius of a Circle:' + "" + radius);
var pi = 3.142;
var circum = "";
circum = 2 * radius * pi;
document.write('<br/> the Circumference is:' + " " + circum);
var area = "";
area = pi * radius * radius;
document.write(' <br/> THe area is :' + " " + area);

//TASK 13
document.write('<h1> The Lifetime Supply Calculator </h1>');
var snack = "Chocolate Chip";
document.write('<br/> Favourite Snacks:' + " " + snack);
var C_age = 15;
document.write('<br/> Your Current age:' + " " + C_age);
var M_age = 65;
document.write('<br/> Estimated Maximum age:' + " " + M_age);
var amount_snack = 3;
document.write('<br/> Amount of snacks per day:' + " " + amount_snack);
document.write(' <br/> you will need 150' + " " + snack + " " + ' to last you until the ripe old age' + " " + C_age);


//-----------------------------------CHAPTER 06-09(MATH EXPTRESSIONS)----------------------------------
//Task 01 
var a = 10;
document.write('<br/> Results:');
document.write('<br/> the value of a is:' + " " + a);
++a;
document.write('<br/> the value of ++a is:' + " " + a);
document.write('<br/> /now the value of a is' + " " + a);
var z = "";
z = a++;
document.write('<br/> the value of a++ is:' + " " + z);
document.write('<br/> /now the value of a is' + " " + a);
var za = "";
za = --a;
document.write('<br/> the value of --a is:' + " " + za);
document.write('<br/> /now the value of a is' + " " + a);
var zaa = "";
zaa = a--;
document.write('<br/> the value of a-- is:' + " " + zaa);
document.write('<br/> /now the value of a is' + " " + a);

//TASK 02
document.write(' <br/> a is: 2');
document.write('<br/> b is: 1');
document.write(' <br/> Result at first stage is: 1');
document.write(' <br/> Result at first stage is: 1-0= 1');
document.write(' <br/> Result at first stage is: 1-0+1 = 2');
document.write(' <br/> Final stage is: 3');


//TASK 03
var name = prompt("Enter your name: ");
alert("Welcome" + " " + name);

//TASK 04
//missing in pdf

//TASK 05
var x = +prompt("Enter Number: ");
if (x > 0) {
    for (var xa = 1; xa <= 10; xa++) {
        document.write(' <br/>' + x + "" + 'x' + " " + xa + " " + '=' + " " + x * xa);
    }
}
else if (x === 0) {
    for (var xa = 1; xa <= 10; xa++) {
        document.write(' <br/>' + 5 + "" + 'x' + " " + xa + " " + '=' + " " + 5 * xa);
    }
}

//TASK 06
var subject1 = prompt ('enter subject');
var subject2 = prompt ('enter subject');
var subject3 = prompt ('enter subject');

var total_marks = 100;

var obtained1 = +prompt ('Enter number');
var obtained2 = +prompt ('Enter number');
var obtained3 = +prompt ('Enter number');

var percentage1= obtained1/total_marks*100;
var percentage2= obtained2/total_marks*100;
var percentage3= obtained3/total_marks*100;

var totalsubjects= obtained1 + obtained2 + obtained3;
var totaltotal = total_marks *3;
var percentagetotal= percentage1 + percentage2 + percentage3;

document.write('<br/>'+ 'English'
 + "    " +
'Total Marks' + "    " + 
'Obtained Marks' + "    " + 'Percenatge'); 
document.write('<br/>' +subject1 + "           " + total_marks + "         " + obtained1 + "           " + percentage1 + "%");
document.write('<br/>' +subject2 + "           " + total_marks + "          " + obtained2 + "           " + percentage2+ "%");
document.write('<br/>' +subject3 + "           " + total_marks + "          " + obtained3 + "           " + percentage3+ "%");
document.write('<br/>' + "         "  + totaltotal+ "       " + totalsubjects + "      " + percentagetotal + "%");


//-----------------------------------CHAPTER 09--> 11(USER INPUT AND CONDITIONAL STATEMENT)----------------------------------
//Task 01 
var kar = prompt('Enter City Name :');
if (kar === 'karachi') {
    document.write('Welcome to the city of Light');
}

//TASK 02
var gender = prompt('Enter your Gender');
if (gender == 'female') {
    document.write('Good Morning Maam');
}
else if (gender == 'male') {
    document.write('Good Morning sir');
}

//TASK 03
var traffic = prompt ('Enter color name');
if (traffic === 'red')
{
    alert('Must stop');
}
else if ( traffic === 'green')
{
    alert('move now!');
}
else if (traffic === 'yellow')
{
    alert('Ready to move');
}


//TASK 04
var petrol = +prompt('enter remaining fuel?');
if (petrol < 0.25) {
    document.write('Please refill the fuel in your car');
}

//TASK 05
document.write('<br/> Alert displayed there');

document.write('<br/> given condition for variable a is true');
document.write('<br/> condition 2 is true');
document.write('<br/> condition 4 is true');
document.write('<br/> The cost equals');
document.write('<br/> True');
document.write('<br/> car is smaller than cat');

//TASK 06
var enter_marks = +prompt ('Enter Marks');
var percentage_of_marks = "";
percentage_of_marks=    enter_marks/total_of_marks* 100;
var total_of_marks = 100;
if (percentage_of_marks >= 80 )
{
    document.write ('your grade is A-one');
    document.write ('<br/> your Remarks is Excellent');
}
else if (percentage_of_marks >= 70 )
{
    document.write ('your grade is A');
    document.write ('<br/> your Remarks is Good');
}
else if (percentage_of_marks >= 60 )
{
    document.write ('your grade is B');
    document.write ('<br/> your Remarks is You need to improve');
}
else if (percentage_of_marks < 60 )
{
    document.write ('your grade is F');
    document.write ('<br/> your Remarks is Sorry');
}
//TASK 07
var guess = 6;
var answer = +prompt('guess the number');
if (answer === guess) {
    alert('Bingo');
}
else if (answer == 7) {
    alert('Close enough to the correct answer”');
}

//TASK 08
var divisible = +prompt('Enter the Number');
if (divisible % 3 === 0) {
    alert('Yes! this number is divisible by 3');
}
else if (divisible % 3 === 1) {
    alert('No! this is not divisible by 3');
}

//TASK 09
var divi = +prompt('Enter the Number');
if (divi % 2 === 0) {
    alert('Yes! this is an Even number');
}
else if (divi % 2 === 1) {
    alert('No! this is an Odd Number');
}

//TASK 10
var T = +prompt('Enter temperature');
if (T > 40) {
    alert('It is too hot outside');
}
else if (T > 30) {
    alert('“The Weather today is Normal');
}
else if (T > 20) {
    alert('“Today’s Weather is cool');
}
else if (T > 10) {
    alert('! Today’s weather is so Cool');
}

//TASK 11
var one = +prompt('Enter Number one');
var operator = prompt('Enter Operator');
var second = +prompt('Enter Number Second');
if (operator == '+') {
    alert(one + second);
}
else if (operator == '-') {
    alert(one - second);
}
else if (operator == '*') {
    alert(one * second);
}
else if (operator == '/') {
    alert(one / second);
}
else if (operator == '%') {
    alert(one % second);
}


//-------------------CHAPTER 12-13(IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS )----------------------------------
//Task 01 
var chs = ("Enter any character:");
if (chs >= 65 && chs <= 90)
{
    alert("Character is a capital letter");
}
else if (chs >= 97 && chs <= 122)
{
    alert("Character is a small letter");
}
else if (chs >= 48 && chs <= 57)
{
    alert("Character is a digit");
}

//TASK 02
var sl1 = +prompt ('Enter Number');
var sl2 = +prompt ('Enter Number');
if( sl1 > sl2)
{
    alert(sl1 + ' '+ 'is the largest number');
}
else if( sl2 > sl1)
{
    alert(sl2 + ' '+ 'is the largest number');
}

//TASK 03
var integer = +prompt('Enter Number');
if (integer > 0)
{
    alert('this is Positive Number');
}
else if (integer === 0)
{
    alert('this is Zero Number');
}
else if (integer < 0)
{
    alert('this is Negative Number');
}

//TASK 04
var vowel = prompt ('Enter?');
if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o'|| vowel == 'u')
{
    alert('True');
}
else if (vowel != 'a' || vowel != 'e' || vowel != 'i' || vowel != 'o'|| vowel != 'u')
{
    alert('False');
}

//TASK 05
var pass1 = '1234ayman'
var password = prompt ('Enter Password');
if ( password === '1234ayman')
{
    alert('“Correct! The password you entered matches the original password”. ');
}
else if ( password != '1234ayman')
{
    alert('Incorrect password');
}

//TASK 06
var greeting;
var hour = 13; 
if (hour < 18) 
{ 
    greeting = "Good day"; 
} 
else 
{
    greeting = "Good evening"; 
}

//----------=--------------------------------CHAPTER 14-16(ARRAY)---------------------------------------------
//TASK 02
var arrayA = []
var arrayB = new Array()

//TASK 03
var string1=['stringOne', 'stringTwo', 'stringThree', 'StringFour', 'StringFive'];

//TASK 04
var numb = [1,2,3,4,5,6,7,8,9,10];

//TASK 05
var boolean = [0,1];

//TASK 06
var mixVariable = [1, 'one', 2, 'two', 3, 'three', '$'];

//TASK 07
var education = ['SSC', 'HSC', 'BSC', 'BS', 'BCOM', 'MS','M.PHIL', 'pHD'];
document.write('<h1> Qualification </h1>');
for (var i = 0; i<education.length; i++)
{
    document.write('<br/>' , education[i]);
}

//TASK 08
var studentss = ['Michael', 'John', 'Tony'];
var markss = [320,230,480];
var totalss = 500;
for (var jk = 0; jk<3; jk++)
{
    document.write('<br/> The score of' + " " + studentss[jk] + ' ' + 'is' + " " + markss[jk] + "" + 
    'The percentage is' + " " + markss[jk]/totalss*100 + " " + '%');
}

//TASK 09
var color = ['red', 'violet'];
//A
color.unshift(prompt('Enter your color'));
document.write('<br/>' ,color);
//B
color.push(prompt('Enter your color'));
document.write('<br/>' ,color);
//C
color.unshift(prompt('Enter your color'));
color.unshift(prompt('Enter your color'));
document.write('<br/>' ,color);
//D
color.shift();
document.write('<br/>' ,color);
//E
color.pop();
document.write('<br/>' ,color);
//F
var col = prompt ("enter color");
var position = +prompt ('enter position');
color.splice(position,1,col);
document.write('<br/>' ,color);
//G
var position = +prompt ('enter position');
var valuetobedelete = +prompt ('enter position');
color.splice(position,valuetobedelete);
document.write('<br/>' ,color);

//TASK 10
var asc = [320, 230, 480, 120];
var sorted= asc.sort();
document.write(sorted);

//TASK 11
var city = ['Karachi', 'Lahore', 'Islamad', 'Quetta', 'Peshawar'];
var selected = city.slice(2,4);
document.write(selected);

//TASK 12
var cat = ['this', 'is', 'my', 'cat'];
var joining = cat.join();
document.write(joining);

//TASK 13
var fifo = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = fifo.shift();
document.write('<br/> OUT:');
document.write('<br/>', pop1);

//TASK 14
var lifo = ['Keyboard', 'Mouse', 'Printer', 'Monitor'];
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);
var pop1 = lifo.pop();
document.write('<br/> OUT:');
document.write('<br/>', pop1);

//------------------------------------------CHAPTER 17-20(ARRAYS AND LOOP)---------------------------------------------
//Task 01 
var multiarray1  = [ [],[]];

//TASK 02
var multiarray2 = [ 
[0,1,2,3],
[1,0,1,2],
[2,1,0,1]
];

//TASK 03
for (var i = 1; i<=10; i++)
{
    document.write('<br/>' + i);
}

//TASK 04
var x = +prompt("Enter a Number to show its multiplication table: ");
var len = +prompt("Enter the lenght for multiplication table: ");
if (x > 0) {
    for (var xa = 1; xa <= len; xa++) {
        document.write(' <br/>' + x + "" + 'x' + " " + xa + " " + '=' + " " + x * xa);
    }
}

//TASK 05
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'] ;
for ( var fruit= 0; fruit < fruits.length; fruit ++)
{
document.write('<br/> Element at index' + fruit + 'is' + fruits[fruit]);
}

//TASK 06
document.write('<br/> <h3> Counting: </h3>');
var counting;
for (counting = 1 ; counting <=15 ; counting++)
{
    document.write( counting + ',');
}
document.write('<br/> <h3> Reverse Counting: </h3>');
for (counting = 15 ; counting >=1 ; counting++)
{
    document.write( counting + ',');
}
document.write('<br/> <h3> Even: </h3>');
for (counting = 0 ; counting <=20 ; counting+2)
{
    document.write(counting + ',');
}
document.write('<br/> <h3> Odd: </h3>');
for (counting = 1 ; counting <=19 ; counting+1)
{
    document.write( counting + ',');
}
document.write('<br/> <h3> Series: </h3>');
for (counting = 2 ; counting <=20 ; counting+2)
{
    document.write(counting + 'K');
}
//TASK 07
var user = prompt ('Welcome to ABC bakery, what do you want to order sir/ maam');
var Arrr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var bakery;
for (bakery= 0; bakery< Arrr.length; bakery ++) 
{
if ( Arrr[bakery]=== user )
{
    alert(user +" " +  'available at index' + " " + bakery + 'in our bakery');
} 
else
{
    alert('we are sorry!' + " " + user + " " + 'is not available in our bakery');
}
}

//TASK 08
var array =[24, 53, 78, 91, 12];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];}}
console.log(largest);

//TASK 09
const arr=[24, 53, 78, 91, 12];
const min = Math.min(...arr)
console.log(min)

//TASK 10
for ( var i=5; i<=100; i=i+5)
{
    document.write(i + " ");
}


//-----------------------------------CHAPTER 21-25 (STRING METHODS)----------------------------------
//TASK 01
var firstname = prompt("Enter your first name");
var lastname = prompt("Enter your last name");
var fullname = firstname + " " + lastname;
alert("Welcome here!" + " " + fullname)



//TASK 02
var favouritephone = prompt("Write your favourite phone");
document.write("<br/> <h3> Task 02: Lenght of the favourite mobile </h3>")
document.write("My Favourite Phone is:" + " " + favouritephone);
document.write("<br/> Lenght of string: " + " " + favouritephone.length)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 03
var pakistani = "Pakistani";
document.write("<br/> <h3>Task 03: Index of N</h3>")
document.write("String:" + " " + pakistani);
document.write("<br/> Index of 'n':" + " " + pakistani.indexOf('n'))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 04
var HelloWorld = "Hello World";
document.write("<br/> <h3> Task 04: Index of Last L </h3>")
document.write("String:" + " " + HelloWorld);
document.write("<br/> Last ndex of 'L':" + " " + HelloWorld.lastIndexOf('l'))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 05
var pakistani = "Pakistani";
document.write("<br/> <h3> Task 05: Character at 3 </h3>")
document.write("String:" + " " + pakistani);
document.write("<br/> String at index 3:" + " " + pakistani.charAt(3))
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 06
var firstnames = prompt("Enter your first name");
var lastnames = prompt("Enter your last name");
var fullnames = firstnames.concat(lastnames);
alert("Welcome here!" + " " + fullnames)



//TASK 07 
var Hyderabad = "Hyderabad";
var replace = Hyderabad.replace("Hyder", "Islam");
document.write("<br/> <h3> Replacemnet in city </h3>")
document.write("City:" + " " + Hyderabad);
document.write("<br/> After replacement:" + " " + replace)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 08
var message = "Ali and Sami are best friends. They play cricket and football together"
var replacemessage = message.replace(/and/g, "&");
document.write("<br/> <h3> Replacement of and with & </h3>")
document.write(replacemessage);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 09 
var numtostring = 472;
var numtostring1 = numtostring.toString();
var string = typeof numtostring1;
document.write("<br/> <h3> showing Number and string type </h3>")
document.write("Value:" + " " + numtostring)
document.write("<br/> Type:" + " " + string)
var numtostring2 = Number("472");
var num = typeof numtostring2;
document.write("<br/> Value:" + " " + numtostring)
document.write("<br/> type:" + " " + num)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 10  
var peanut = "peanut";
var peanutuppercase = peanut.toUpperCase();
document.write("<br/> <h3> To Upper case conversion </h3>")
document.write("User Input:" + " " + peanut)
document.write("<br/> Upper Case: " + " " + peanutuppercase)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 11
var js = "javascript";
var jsslice1 = js.slice(0, 1);
var jsslice2 = js.slice(1);
jsslice1 = jsslice1.toUpperCase();
jsslice2 = jsslice2.toLowerCase();
var slicecombine = jsslice1 + jsslice2;
document.write("<br/> <h3> To Title Case Conversion </h3>")
document.write("User Input:" + " " + js)
document.write("<br/> Title Case: " + " " + slicecombine)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 12
var decimal = 35.36;
var newnumber = parseInt(decimal.toString().replace(".", ""));
document.write("<br/> <h3> Removal of decimal </h3>")
document.write("\Value: " + " " + decimal)
document.write("<br/> Result:" + " " + newnumber)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




// TASK 13 
var usernamevalid = prompt("enter name");
var lengthofthename = usernamevalid.length;
for (var i = 1; i < usernamevalid.length; i++) {
    if (usernamevalid.slice(i, i + 1) == '!' || usernamevalid.slice(i, i + 1) == '.' || usernamevalid.slice(i, i + 1) == "," || usernamevalid.slice(i, i + 1) == "@") {
        alert("Enter a valid user name");
    }
}




// TASK 14
var user = prompt('Welcome to ABC bakery, what do you want to order sir/ maam');
var user = user.toLowerCase();
var Arrr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var bakery;
for (bakery = 0; bakery < Arrr.length; bakery++) {
    if (Arrr[bakery] === user) {
        alert(user + "  " + 'available at index' + "  " + bakery + 'in our bakery');
        break;
    }
    if (bakery == Arrr.length - 1) {
        alert('we are sorry!' + "  " + user + "  " + 'is not available in our bakery');
        break;
    }
}



// TASK 15
// var password = prompt("Enter Password")
// var passw=  /^[A-Za-z]\w{6,14}$/;
// document.write("<br/> Entered Password:" + " " + password);
// if(password == passw) 
// { 
// document.write('<br/> You have entered the right password')
// }
// else if (password != passw)
// { 
// document.write(" <br/> Password can not begin with a number please enter a valid password")
// }
// document.write("<br/>");




// TASK 16
var uok = 'University Of Karachi';
var ar = uok.split("");
document.write(ar);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




//TASK 17
var Userinput = " Pakistan";
document.write("<br/>User input:" + " " + Userinput);
var totallenghtofword = "";
totallenghtofword = Userinput.length - 1;
var letteratlast = "";
letteratlast = Userinput.charAt(totallenghtofword);
document.write("<br/> <h3> Last character finding </h3>")
document.write("Last Character of input:" + " " + letteratlast);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 18
var temp = "the quick brown fox jumps over the lazy dog";
var count = (temp.match(/the/g) || []).length;
document.write("<br/> <h3> Replacemnet of the with The </h3>")
document.write("Text:" + " " + temp)
document.write("<br/> there are" + " " + count + " " + "occurence(S) of word 'the'");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//--------------------------------------CHAPTER 26-30 (MATH METHODS)----------------------------------
//TASK 01
var convertnumber = 3.45214;
var roundoff = Math.round(convertnumber)
document.write("<br/> <h3> Conversion into float and ceil </h3>")
document.write("Number:" + " " + convertnumber);
document.write("<br/> Number:" + " " + roundoff);
var floor = Math.floor(convertnumber)
var ceil = Math.ceil(convertnumber)
document.write("<br/> Floor Value:" + " " + floor);
document.write("<br/> Ceil Value:" + " " + ceil);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 02
var negnumbers = +prompt("Enter Number in Positive Float, It will be converted by the method in negative")
var negnumber = -Math.abs(negnumbers);
var roundoff = Math.round(negnumber)
document.write("<br/> <h3> Number in Positive Float, It will be converted by the method in negative</h3>")
document.write("Number:" + " " + negnumber);
document.write("<br/> Number:" + " " + roundoff);
var floor = Math.floor(negnumber)
var ceil = Math.ceil(negnumber)
document.write("<br/> Floor Value:" + " " + floor);
document.write("<br/> Ceil Value:" + " " + ceil);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 03
var absnumber = +prompt("Enter Negative Number")
var abs = Math.abs(absnumber);
document.write("<br/> <h3> Abstraction of Number </h3>");
document.write("the Absolute value of" + " " + absnumber + " " + "is" + " " + abs);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 04
var dice = Math.random() * 6;
var dice2 = Math.floor(dice);

var dice1 = Math.random() * 6;
var dice3 = Math.floor(dice);

document.write("<br/> <h3>Random number</h3>")
document.write("Random dice value:" + " " + dice2)
document.write("<br/> Random dice value:" + " " + dice3)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 05
var floorvalue = Math.floor(Math.random() * 2);
if (floorvalue === 1) {
    document.write("<br/> <h3>Heads and tails</h3>")
    document.write(floorvalue)
    document.write("<br/> Random coin value: Head")
}
else if (floorvalue === 2) {
    document.write("<br/> <h3> Heads and tails </h3>")
    document.write(floorvalue)
    document.write("<br/> Random coin value: Tail")
}
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 06
var floorvaluetill100 = Math.floor(Math.random() * 100);
document.write("<br/> <h3>random number from 1 -100 </h3>")
document.write("Random Number Between 1 and 100:" + " " + floorvaluetill100)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 07
var weight = prompt(" Enter your Weight in kilograms ")
var converted = parseInt(weight);
document.write("<br/> <h3> Weight in kilograms </h3>")
document.write("The weight of user is:" + " " + converted + " " + "Kilograms")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 08
var secret = 6
var ask_user = +prompt("Enter you Number between 1 to 10");
if (secret === ask_user) {
    alert("Congratulation!!!");
}
else {
    alert("Try Again!!!")
}


//--------------------------------------CHAPTER 31-34 (DATA METHODS)----------------------------------
//TASK 01
var currentdate = new Date();
document.write("<br/> <h3>Cuurent date</h3>")
document.write(currentdate);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


// //TASK 02
var currentm = new Date();
var currentmonth = currentm.getMonth();
document.write("<br/> <h3> Cuurent Month </h3>")
document.write("\Current Month" + " " + currentmonth);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


//TASK 03
var day = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"]
var currentday = new Date();
var currentdays = currentday.getDay();
alert("Today is " + "" + day[currentdays]);



//TASK 04
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday"]
var currentdays = new Date();
var currentdayss = currentdays.getDay();
if (days[currentdayss] == "Sunday" || days[currentdayss] == "Saturday") {
    document.write("<br/> <h3> Funday calculations </h3>")
    document.write("It's a Fun Day")
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}



//TASK 05
var currentmonthdate = new Date();
if (currentmonthdate <= 15) {
    document.write("<br/> <h3> identify the days last fifteen or first fifteen </h3>")
    document.write("First fifteen Days of the Month");
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}
else if (currentmonthdate > 15) {
    document.write("<br/> <h3> Identify the days, Last fifteen or first fifteen </h3>")
    document.write("<br/> Last fifteen Days of the Month");
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}



//TASK 06
var d = new Date();
document.write("<br/> Current Date:" + " " + d);
var millisecond = d.getTime();
var milli = millisecond / 1000;
document.write("<br/> <h3>Time elapsed</h3>")
document.write("Elapsed Milliseconds since january 1, 1970: " + " " + milli)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
var minutes = d.getTime();
var minute = minutes / (1000 * 60);
document.write("Elapsed Milliseconds since january 1, 1970: " + " " + minute)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 07
var time = new Date();
var times = time.getHours();
alert(times)
if (time > 12) {
    alert("It's PM")
}
else if (time <= 12) {
    alert("It's AM")
}



//TASk 08
var my_date = new Date("December 31, 2020")
document.write("<br/> <h3> Time of 31 decemeber 2020 </h3>")
document.write("Later Date" + " " + my_date)


//TASK 09
var daytoday = new Date()
var dayfrom1970toyet = daytoday.getTime();
dayfrom1970toyet = dayfrom1970toyet / (1000 * 60 * 60 * 24)
var floattime1 = Math.floor(dayfrom1970toyet)
document.write("<br/> <h3>Time calculation </h3>")
document.write("<br/>" + floattime1)

var dayramzan = new Date("June 18, 2015");
var dayfrom1970tillramazan = dayramzan.getTime();
dayfrom1970tillramazan = dayfrom1970tillramazan / (1000 * 60 * 60 * 24)
var floattime2 = Math.floor(dayfrom1970tillramazan)
document.write("<br/>" + floattime2)

var total = floattime1 - floattime2;
document.write("<br/>" + " " + total + " " + "days have passed since 1st ramzan 2015")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


//TASK 10
var daydecember = new Date("December 1, 2015")
var dayfrom1970tobeg = daydecember.getTime();
dayfrom1970tobeg = dayfrom1970tobeg / (1000)
var floattimebeg = Math.floor(dayfrom1970tobeg)


var dayend = new Date("December 5, 2015");
var dayfrom1970tillend = dayend.getTime();
dayfrom1970tillend = dayfrom1970tillend / (1000)
var floattimeend = Math.floor(dayfrom1970tillend)
document.write("<br/> On REFERENCE: " + dayend)

var totaldecemeber = floattimeend - floattimebeg;
document.write("<br/>" + " " + totaldecemeber + " " + "SECONDS have passed since the beginig of 2015")
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 11
var d = new Date();
d.setHours(d.getHours() + 1);
document.write("<br/> One hour ago, It was " + " " + d)

//TASK 12
var years100 = new Date();
years100.setFullYear(years100.getFullYear() - 100);
document.write("<br/>100 years back " + " " + years100)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");




//TASK 13
var bithdate = prompt("enter your age")
document.write("your age is:" + " " + bithdate)
var dateage = new Date();
dateage.setFullYear(dateage.getFullYear() - bithdate);
document.write("<br/>Your birth year is" + " " + dateage)
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");



//TASK 14
document.write("<br/> K-ELECTRIC BILL")
var customername = "ABC Customer";
var month = "Feburay";
var numberofunits = 410;
var chargesperunit = 16
var net = numberofunits * chargesperunit;
var latepayment = 350;
var gross = net + latepayment;
document.write("<br/> Customer Name:" + " " + customername)
document.write("<br/> Month:" + " " + month)
document.write("<br/> Number of units" + " " + numberofunits)
document.write("<br/> Charges" + " " + chargesperunit)
document.write("<br/> Net Amount payable (within Due Date)" + " " + net)
document.write("<br/> Late PAyment surcharge:" + " " + latepayment)
document.write("<br/>Gross Amount Payable (after Due Date)" + " " + gross)




//-------------------------------------------CHAPTER 35-38 (Function)----------------------------------
//TASK 01
function dataandtime() {
    var timeanddate1 = new Date();
    document.write("<br/>" + " " + timeanddate1)
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");

} dataandtime();



//TASK 02
function greet() {
    var firstname = prompt("Enter first Name")
    var lastname = prompt("Enter Last Name")
    alert("Hello" + " " + firstname + " " + lastname)

} greet();




//TASK 03
function add(add1, add2, add3) {
    add1 = +prompt("Enter Number one");
    add2 = +prompt("Enter Number two");
    add3 = add1 + add2;
    return add3;
} alert(add());





//TASK 04
function operator(num1, num2, oper) {
    num1 = +prompt("Enter Number one");
    num2 = +prompt("Enter Number two");
    oper = prompt("Enter any operator")
    if (oper === '+') {
        return num1 + num2;
    }
    else if (oper === '-') {
        return num1 - num2;
    }
    else if (oper === '*') {
        return num1 * num2;
    }
    else if (oper === '/') {
        return num1 / num2;
    }
} alert(operator());




//TASK 05
function square(number1 = 2, number2 = 4) {
    number1 = number1 * number1;
    number2 = number2 * number2;
    alert("square of number 1 is" + "" + number1)
    alert("square of number 2 is" + "" + number2)
}
square();



//TASK 06
function factorial() {
    var b = 1;
    var n = prompt("Enter a number");
    for (var i = n; i >= 1; i--) {
        b = b * i;
    }
    alert("factorial of the number is" + " " + b);
}
factorial();



//TASK 07
function counting(lastnumber, firstnumber) {
    firstnumber = +prompt("Enter First Number")
    lastnumber = +prompt("Enter Last Number")
    for (var i = firstnumber; i <= lastnumber; i++) {
        document.write(i);
    }
    document.write("<br/>");
    document.write("<br/>");
    document.write("<br/>");
}
counting();




//TASK 08
function hypotaneous(base, Perpendicular, hypotaneous) {
    base = + prompt("Enter Base value");
    Perpendicular = + prompt("Enter Perpendicular value");
    base1 = base * base;
    Perpendicular1 = Perpendicular * Perpendicular;
    var hypotaneous = base1 + Perpendicular1;
    alert("the hypotaneous value is" + " " + hypotaneous);
}
hypotaneous();



//TASK 09
function area(width = 10, height = 2) {
    var area = width * height;
    alert("The Area is" + area);
}
area();



//TASK 10
function palindrom() {
    var name = prompt("Enter any Word for checking Palindrom");
    var check = "";
    for (var i = name.length - 1; i >= 0; i--) {
        check += name[i];
    }
    if (check === name) {
        alert("This is the Palindrom")
    }
    else if (check != name) {
        alert("This is not the Palindrom")
    }
}
palindrom();



//TASK 11
function titleCaseinstring(stringline) {
    stringline = prompt("Enter line for title case")
    var splitString = stringline.toLowerCase().split(' ');
    for (var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(' ');

}
document.write(titleCaseinstring());



//TASK 12
function longword(string) {
    string = prompt("Enter string")
    var array = string.match(/\w[a-z]{0,}/gi);
    var res = array[0];

    for (var x = 1; x < array.length; x++) {
        if (res.length < array[x].length) {
            res = array[x];
        }
    }
    alert("the longest word is:" + " " + res);
}
longword();


//TASK 13
function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}
alert("the charachter found in string is" + char_count('variablexyz', 'x'));


//TASK 14
function calcCircumferenc(radiusofcircle) {
    var pi;
    var circumference = 2 * pi * radiusofcircle;
    alert("The Circumference is" + " " + circumference);
}
function calcArea(radiusofcircle) {
    var pi;
    radiusofcircle = radiusofcircle * 2;
    var area = pi * radiusofcircle;
    alert("The Area is " + " " + area);
}
calcCircumferenc();
calcArea();


//------------------------CHAPTER : 38 - 42 ----------------------
//----------FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS-------------
// TASK 01
function powerab(a, b) {
    a = + prompt('Enter number1 for power');
    b = + prompt('Enter number2 for power');
    power = Math.pow(a, b);
    document.write('Power of' + " " + a + " " + 'raised to ' + " " + b + " " + 'is:')
    document.write(power);
}
powerab();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');



// TASK 02
function yearscount() {
    var years = +prompt('Enter any year, we will let you if that one is leap year or not?');
    if (years % 4 == 0) {
        document.write(years + " " + 'is the Leap year')
    }
    else if (years % 4 == 1) {
        document.write(years + " " + 'is not the Leap year')
    }
}
yearscount();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');



// TASK 03
var a, b, c, S, part1, part2, part3, totalarea;
function area() {
    a = + prompt('Enter number1 for area');
    b = + prompt('Enter number2 for area');
    c = + prompt('Enter number3 for area');
    S = a + b + c;
    S = S / 2;
}
function area1() {
    area();
    part1 = S - a;
    part2 = S - b;
    part3 = S - c;
    totalarea = part1 * part2 * part3 * S;
    document.write(" <br/>total area of triangle is:" + " " + totalarea)
}
area1();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');



// TASK 04
var subject1 = + prompt('Enter marks1');
var subject2 = + prompt('Enter marks2');
var subject3 = + prompt('Enter marks3');
var subject;
var averagesubject;
var percentages;
function average() {
    subject = subject1 + subject2 + subject3;
    averagesubject = subject / 3;
    document.write('Average of these three subjects are:' + " " + averagesubject)
}
function percentage() {
    percentages = subject / 300 * 100;
    document.write('<br/>Percentage of these three subjects are:' + " " + percentages)
}

function mainfunction() {
    average();
    percentage();
}
mainfunction();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');


// TASK 05
function indexstring() {
    var stringindex = prompt('Enter string for getting index of number')
    var numberforindex = prompt('enter Alphabet for getting index')
    var numberindex = stringindex.indexOf(numberforindex)
    document.write('the index of' + " " + numberforindex + " " + 'in' + " " + stringindex + " " + 'is' + " " + numberindex);
}
indexstring();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');


// TASK 06
var string = "hey there my name is this, and i'm doing this";
var vowel = ["a", "e", "i", "o", "u"];
function name() {
    var i;
    for (i = 0; i < vowel.length; i++) {
        var secondLoop = string.length;
        for (j = 0; j < secondLoop; j++) {
            if (vowel[i] == string.charAt(j)) {
                string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
                j--;
                secondLoop--;
            }
        }
    }
}
name();
document.write('<br/>' + string);
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');



//TASK 07
// TASK 08
var distance1 = +prompt('Enter distance');
var metersresult, incheresult, cmresult, feetresult;
function distance() {
    meters();
    feet();
    cm();
    inches();
}
distance();
function meters() {
    metersresult = distance1 * 1000
    document.write('Distance in mters is:' + " " + metersresult)
}
function inches() {
    incheresult = distance1 * 3280
    document.write('<br/>Distance in inches is:' + " " + incheresult)
}
function cm() {
    cmresult = distance1 * 100000
    document.write('<br/>Distance in cm is:' + " " + cmresult)
}
function feet() {
    feetresult = distance1 * 39370.1
    document.write('<br/>Distance in feet is:' + " " + feetresult)
}
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');



// TASK 09
function overtime() {
    var working_hours = +prompt('enter working hours')
    if (working_hours > 40) {
        over_time = working_hours - 40;
        over_time_pay = over_time * 12.00;
        document.write('<br/>pay will be' + " " + over_time_pay)
    }
}
overtime();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');


// TASK 10
function cash() {
    var cashes = +prompt('enter cash to withdraw')

    var hundred ="";
    hundred = cashes / 100 ;
    hundred = Math.floor(hundred);
    document.write('<br/>notes of Rs. 100 are:' + " " + hundred)

    var fifty = "";
    fifty = (cashes % 100) / 50
    fifty = Math.floor(fifty);
    document.write(' <br/>notes of Rs. 50 are:' + " " + fifty)

    var ten ="";
    ten= (((cashes % 100) % 50) / 10)
    ten = Math.floor(ten);
    document.write(' <br/>notes of Rs. 10 are:' + " " + ten)

    var last = "";
    last = (((cashes % 100) % 50) % 10)
    last = Math.floor(last);
    document.write(' <br/> notes are:' + " " + last)
}
cash();
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');


// <!-- ------------------CHAPTER : 43 - 48 -------------------- -->
//     <!-- ------------------EVENTS-------------------------- -->
//     <!-- //TASK 03-->
var id01 = document.getElementById("index01")
var id02 = document.getElementById("index02")
var id03 = document.getElementById("index03")
var id04 = document.getElementById("index04")

var id11 = document.getElementById("index11")
var id12 = document.getElementById("index12")
var id13 = document.getElementById("index13")
var id14 = document.getElementById("index14")

var id21 = document.getElementById("index21")
var id22 = document.getElementById("index22")
var id23 = document.getElementById("index23")
var id24 = document.getElementById("index24")

var id31 = document.getElementById("index31")
var id32 = document.getElementById("index32")
var id33 = document.getElementById("index33")
var id34 = document.getElementById("index34")

function editfunction1() {
    id01 = id01.value
    id02 = id02.value
    id03 = id03.value
    id04 = id04.value
}

function deletefunction0() {
    index01 = "";
    index02 = "";
    index03 = "";
    index04 = "";

    id01.innerHTML = index01;
    id02.innerHTML = index02;
    id03.innerHTML = index03;
    id04.innerHTML = index04;
}

function deletefunction1() {
    index11 = "";
    index12 = "";
    index13 = "";
    index14 = "";

    id11.innerHTML = index11;
    id12.innerHTML = index12;
    id13.innerHTML = index13;
    id14.innerHTML = index14;
}

function deletefunction2() {
    index21 = "";
    index22 = "";
    index23 = "";
    index24 = "";

    id21.innerHTML = index21;
    id22.innerHTML = index22;
    id23.innerHTML = index23;
    id24.innerHTML = index24;
}


function deletefunction3() {
    index31 = "";
    index32 = "";
    index33 = "";
    index34 = "";

    id31.innerHTML = index31;
    id32.innerHTML = index32;
    id33.innerHTML = index33;
    id34.innerHTML = index34;
}


// <!-- ------------------CHAPTER : 43 - 48 -------------------- -->
// <!-- ------------------EVENTS-------------------------- -->
// <!-- //TASK 04-->
function image() {
    document.write("<img src='phonemobile2.jpg' alt='alt tag'>");
}

function image2() {
    document.write("<img src='phonemobile3.jpg' alt='alt tag'>");
}


// <!-- ------------------CHAPTER : 43 - 48 -------------------- -->
// <!-- ------------------EVENTS-------------------------- -->
// <!-- //TASK 05-->

var clicks = 0;
clicks += 1
function onClick() {
    ;
    document.getElementById("clicks").innerHTML = clicks;
};

var clicksnegative = 0;
function onClicknegative() {
    clicksnegative -= 1;
    document.getElementById("clicksnegative").innerHTML = clicksnegative;
};


// <!-- ------------------CHAPTER : 49 - 52 -------------------- -->
//     <!-- ------------------EVENTS-------------------------- -->
//     <!-- TASK 01-->
var NAME, ADDRESS, CONTACTNUMBER, COURSE;
function buttonform() {
    var NAME1 = document.getElementById('NAME');
    var ADDRESS1 = document.getElementById('ADDRESS');
    var CONTACTNUMBER1 = document.getElementById('CONTACTNUMBER');
    var COURSE1 = document.getElementById('COURSE');

    document.write("<br/> Name: " + " " + NAME1.value);
    document.write("<br/> Address: " + " " + ADDRESS1.value);
    document.write("<br/> Contact number: " + " " + CONTACTNUMBER1.value);
    document.write("<br/> COURSE: " + " " + COURSE1.value);

}



// <!-- ------------------CHAPTER : 49 - 52 -------------------- -->
//     <!-- ------------------EVENTS-------------------------- -->
//     <!-- TASK 02-->
var text2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis aperiam possimus debitis. Ut libero voluptate veritatis, odit neque nesciunt vel earum provident magni quae deserunt nulla rem,voluptas commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis aperiam possimus debitis. Ut libero voluptate veritatis, odit neque nesciunt vel earum provident magni quae deserunt nulla rem, voluptas commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis aperiam possimus debitis. Ut libero voluptate veritatis, odit neque nesciunt vel earum provident magni quae deserunt nulla rem, voluptas commodi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis aperiam possimus debitis. Ut libero voluptate veritatis, odit neque nesciunt vel earum provident magni quae deserunt nulla rem, voluptas commodi'
function readmore() {
    var text = document.getElementById('paragraph')
    text.innerHTML = text2
}

