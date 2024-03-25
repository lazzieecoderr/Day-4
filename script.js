/*
! XMLHTTPREQUEST
! step 1:- create a XHR object
var request = new XMLHttpRequest();
! STEP 2:- Openning a connection to server
request.open("GET", "https://restcountries.com/v3.1/all", true);
! Step 3:- Initiating a bridge to server / sending request
request.send();
! step 4:- server response
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  //console.log(result);
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].flags.svg);
  }
};
*/

//!without function
/*var a = 10;
var b = 20;
var c = a+b;
console.log(c);
*/
//!function example without return
/*function add(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}
function mul(a,b){
    console.log(a*b);
}
function div(a,b){
    console.log(a/b);
}
function arith(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}
add(50,100)
sub(100,50)
mul(50,50)
div(100,50)
arith(20,10)
*/
//! function using return
/*function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
console.log(add(50, 100));
console.log(sub(100, 50));
console.log(mul(50, 50));
console.log(div(100, 50));
*/

//!Print odd numbers in an array [1,2,3,4,5,6,7,8,9,10]
//!using normal function
/*var result =[]
function odd(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
*/

//! using annoymous function
/*var result =[]
var a=function (arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
*/
//!using IIFE function
/*
var result = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    }
  }
  console.log(result);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
*/
//!using arrow function
var result =[];
 var odd=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result.push(arr[i])
    }
  }
  return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));