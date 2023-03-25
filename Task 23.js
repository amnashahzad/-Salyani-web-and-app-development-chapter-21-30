var x = prompt("Enter your Percentage", "Your Percentage");
if (x <= 100 && x >= 90) {
    alert("A+");
}
else if (x < 90 && x >= 80) {
    alert("A");
}
else if (x < 80 && x >= 70) {
    alert("B");
}
else if (x < 70 && x >= 60) {
    alert("C");
}
else if (x < 60 && x >= 50) {
    alert("D");
}
else if (x < 50 && x >= 40) {
    alert("E");
}
else {
    alert("F");
}
