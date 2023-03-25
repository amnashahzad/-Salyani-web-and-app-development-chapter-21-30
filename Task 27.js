var text = "My name is Muhammad Ali";
var findingindex = text.indexOf("are");
document.write(findingindex);

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}
document.write(text);

var a = "this is a class which is a good class";
var b = a.lastIndexOf("is");
document.write(b);

var name = "Muhammad Ali";
var firstChar = name.charAt(name.length - 1);
document.write(firstChar);

var score = .0678437;
var roundofvalue = Math.round(score);
document.write(roundofvalue);

var score = .0678437;
var roundofvalue = Math.ceil(score);
document.write(roundofvalue);


var score = 7.9678437;
var roundofvalue = Math.floor(score);
document.write(roundofvalue);



var randomValue = Math.random() * 10;
var finalWinner = Math.round(randomValue);
document.write(finalWinner);