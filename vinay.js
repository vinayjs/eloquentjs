/* let ten = 10;
console.log(ten*ten);

let mood= "light";
console.log(mood);


let cars = "AUDI"
cars = 1 + "AUDI"
console.log(cars)


var myself = "Vinay";
const greeting = "Hi";
console.log(greeting + myself);


let x = 40;
console.log("The value of x is",x);



console.log(Math.max(4,8));



let theNumber = 5;
console.log("the number you picked is the square root of " + theNumber*theNumber);

if(1 + 1 == 2);
console.log(true);

let number =0;
while(number<=12){
console.log(number);
number = number + 2;
}
console.log(number);

let result = 1;
let counter = 0;
while (counter<10){
    result = result * 2;
    counter = counter +1;
}
console.log(result);

for(let car = 0;car<=12;car=+2){
    console.log(car);
}
console.log();

for(let bike= 20; ;bike = bike +1){
    if(bike % 7 ==0){
        console.log(bike);
        break;
    }

}


for(let plane = 1;plane<=20;plane+=2){
    console.log(plane);
}

console.log();


const square = function(x){
    console.log(x*x) ;
}
console.log(square(12));
*/
let ten = 10;
console.log(ten*ten);

let mood= "light";
console.log(mood);

const firstName = "vinay";
firstNameLength = firstName.length;
console.log (firstNameLength);

const lastName = "chandran";
fisrtLetterlastName = lastName[0];
console.log(fisrtLetterlastName);

function wordBlanks( myNoun, myAdjective,myVerb,myAdverb){
    var result =""
    result+= "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "to the store";
    return result;
}
console.log(wordBlanks("dog","big","ran","quickly"));

var ourArray = ["vinay", 1 ];
var nestedArray = [["pran", 1],["paru",2]];

var myArray =[25,56,65,75,80];
myArray[0]= 89;
thirdElementmyArray= myArray[0]
console.log(thirdElementmyArray);


var myNestedArray = [[9,5,1],[1,5,2],[4,5,6]];
var myData= myNestedArray[0][1];
console.log(myData);

var pushArray = [["pran", 1],["paru",2]];
pushArray.push(["ben",6]);
console.log(pushArray);

var popArray = [["pran", 1],["paru",2]];
var removedFrompopArray = popArray.pop();
console.log(popArray);

var myFriendsList = ["nithin","adarsh", "subu" , "uma" ,"ebby"];
var shiftFunction = myFriendsList.shift();
console.log(myFriendsList);

function myName(){
    console.log("hi vinay");
}
myName();



function ourFunctionwithArgs(a,b){
    console.log(a-b);
}

ourFunctionwithArgs(5,3);

function trueOrFalse(wasThatTrue){
    if(wasThatTrue){
        return "Yes it's true"
    }
    return "No that was false"
}
console.log(trueOrFalse(true));

function myFriend(isHeLoyal){
    if(isHeLoyal){
        return "TRUE FRIEND";
    }
    return "DANGER";
}
console.log (myFriend());

function testEqual(val){
    if(val== 5){
        return "true";
    }
    return "false";
}
console.log(testEqual(8));
console.log(testEqual(5));

function carsCount(val){
    if(val>=10){
        return "ture";
    }
    return "false";
}

console.log(carsCount(12));








