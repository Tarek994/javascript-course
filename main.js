// 1 -     how to add a new element with js:

/*
 document.write("<h2>hello </h2>");
 document.querySelector("h2").style.color = "red";
 document.querySelector("h2").style.fontSize = "50px";
*/

///////////////////////////////////////////////////

// 2 - Where to put the code :
// best practice:  we have to put the script in the final the bode tag to make the browser read correctly the commands and apply the changes

// OR we have to set  onload command to make sure the commands are work after load the page:
/* 
 window.onload = function (){
     document.querySelector("h2").style.color = "red"
 }
*/

// 3 - Out put to screen
/*
 window.alert("hello from the code camp");
 document.write("hello page");
 document.createElement("")
 console.log("hello world")
 */

 /*
    4 - console: is from web API : application programming interface.
    console.log("log");
    console.error("Error");
    console.table(["osama","ahmed","tarek"]);

    styling from the console:
    console.log("hello from js %cfile", "color:red; font-size:30px ");

    - if we want to style some text in the console log we just have to add the style next to the text,
    - if want customize the style for a word in the text we just add this symbol before the word : %c

 */

/*
 What Is ECMAScript :
 Ecma International is an industry association dedicated to the standardization of information and communication systems.
*/