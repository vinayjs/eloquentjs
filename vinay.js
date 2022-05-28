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

function hosueCount(val){
    if(val>10){
        return "rich";
    }else {return "poor"};
}
console.log(hosueCount(12));


function ordersReceived(val){
    if(val<100){
        return "average sale";
    }else if (val>100 && val<200){
        return "good sale";
    }else {return "jackpot"};
}
console.log(ordersReceived(50));
console.log(ordersReceived(200));
console.log(ordersReceived(140));


function numberTask(val){
    if(val<5){
    return "tiny";}
    else if(val<10 && val >=5){
        return "small";
    }else if (val<15 && val >=10){
        return "medium";
    }else if (val<20 && val>=15){
        return "large";
    }else return "huge";
}

console.log(numberTask(25));
console.log(numberTask(12));
console.log(numberTask(8));
console.log(numberTask(3));

function caseInswitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer ="alpha";
        break;
        case 2:
            answer= "beta";
        break;
        case 3:
            answer= "gamma";
        break;
        case 4:
            answer= "beta";
    }
    return answer;
}
console.log(caseInswitch(1));
console.log(caseInswitch(2));
console.log(caseInswitch(4));

function switchOfStuff(val){
    var answer = "";
    switch (val){
        case "a" :
            answer = "apple";
        break;
        case "b":
            answer = "ball";
        break;
        case "c" :
            answer = "cat";
        break;
        default:
            answer = "tiger";
            break;
    }
    return answer;
}
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));

function scoolRanks(val){
    answer = "";
    switch (val){
        case "Sarvodaya":
            answer = 1;
        break;
        case  "St Thomas":
            answer = 2;
        break;
        case "Manacaud":
            answer = 3;
        break;
        case "holy angels":
            answer = 4;
        break;

    }
    return answer;
}

console.log(scoolRanks("Sarvodaya"));

var myDog = {
    "name": "happy coder",
    "legs" : 4,
    "tails": 1,
    "friends" : ["pinky"],

};

myDog.name = "roby";
delete myDog.tails;


console.log(myDog);
 

function switchOfStuff(val){
    var answer = "";
    var lookup = {
        "a" : "apple",
        "b": "ball",
        "c" : "cat",
        "d": "tiger",
    };
    answer = lookup[val];
    return answer;
};
console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));


var myStorage = {
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat": "crumbs"
        },

        "outside":{
            "trunk":"jack"

        }

    }
};
var gloveBoxContent = myStorage.car.outside.trunk;

console.log(gloveBoxContent);

var myArray= [];
var i = 0;
while(i<5){
    myArray.push(i);
    i++;
}

console.log(myArray);


var ourArray = [];
for(var i =0;i<5; i++){
    ourArray.push(i);
}
console.log(ourArray);

var iArray =[];
for (i=0;i<10; i+=2){
iArray.push(i);
}

console.log(iArray);






