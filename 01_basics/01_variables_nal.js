/*
3 types of variables in JS : 
    1. var
    2. let
    3. const
*/
// ==========================================
/*
01. var : old way of declaring the variable
        : scope of var : can be declared functionally/locally + global scope
*/

// Example 1 :

var x = 10;  // global variable : can be accessed anywhere
function test(){
    var y = 20   // local variable : can be accessed inside the {} (scope of the function)
    console.log(y);
}
test();
console.log(x);

// ==========================================

// Example 2 : 
var browser = "chrome";
var browser = "firefox";   // re-declaration
console.log(browser);     //firefox 
browser="edge";          // re-initialization
console.log(browser);   //edge 

/*
var : re-declaration & re-initialization can be done using 'var' keyword in JS and the latest value will be picked
*/

// ==========================================
// Example 3 :

var g;
console.log(g);   // undefined
g="hello world";
console.log(g);   // hello world

// Issues with 'var' in JS : If we declare & initialise a 'var' with any value and again re-declare and re-initialise with another value, then it will consider the latest assigned value.
// Example : 
var flag = "Hi Peter";
var t1 = 4;
if (t1>3) {
    var flag = "Hey Tom";
}
console.log(flag);   // Hey Tom

//=======================================================

// 2. let : 
// scope : within the Blocked space '{}'