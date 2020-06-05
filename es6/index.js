"use strict";

console.log("Hi");

// Timer
const obj1 = {
    id: 5,
    counter: function counter(){
        setTimeout(function(){
            console.log(this.id);
        }.bind(this), 1000)
    }
}


const obj2 = {
    id: 6,
    counter: function counter(){
        setTimeout(() => {
            console.log(this.id);
        }, 1000)
    }
}

obj1.counter();
obj2.counter();

// Let vs VAR
function getValue(condition){

    const blue = 1;
    if(condition){
        blue = "blue";
        console.log(blue);
        return "value";
    }else{
        console.log(blue);
        return null;
    }

}

function getFive(){
    return 5;
}
function add(first, second = 5){
    return first+second;
}

// Function declaration
let sum2 = function(num1, num2){
    return num1 + num2;
};
// Arrow function
let sum3 = (num1, num2) => num1 + num2;
let sum4 = (num1, num2) => {
    return num1 + num2;
}

//console.log(sum2(2,6));
//console.log(sum3(2,6));
//console.log(sum4(2,6));

//getValue(false);
