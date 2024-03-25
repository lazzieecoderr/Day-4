//! XMLHTTPREQUEST
//! step 1:- create a XHR object
var request = new XMLHttpRequest();

//! STEP 2:- Openning a connection to server

request.open("GET","https://restcountries.com/v3.1/all",true)

//! Step 3:- Initiating a bridge to server / sending request  

request.send();

//! step 4:- server response

request.onload = function() {

var data = request.response;
//console.log(data);
var result = JSON.parse(data)
//console.log(result);
for(var i=0;i<result.length;i++){
    
    console.log(result[i].flags.svg)
}
}

