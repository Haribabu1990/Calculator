// //alert( "You are connected");
// //var output = document.getElementById("value");

// function display(val){
// document.getElemementById("output").value += val;
// }
// function evaluate(){
//     let x= document.getElementById("output").value;
//     let y = eval(x);
//     document.getElementById("value").value = y;
// }
// function erase(){
//     document.getElementById("output").value ="";
// }

const userInput = document.getElementById("output");
var expression ="";

function display(num){
    expression += num;
    userInput.value= expression;
}

function erase(){
    expression = '';
    userInput.value =expression;
}
function equal(){
    userInput.value = eval(expression);
    expression ="";
}