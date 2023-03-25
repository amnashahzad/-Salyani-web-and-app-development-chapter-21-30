var a = +prompt("Enter your value");
document.write(a + 1);
var a = prompt("Enter your value");
document.write(parseInt(a) + 1);
var a = prompt("Enter your value");
document.write(+a + 1);
var arr = [1, 2, 3, 5, 8, 5, 2, 10, 5]

var found = 0;
for (var i = 0; i < arr.length; i++) {
    document.write("arr[i] == 5", arr[i], 5)
    if (arr[i] == 5) {
        found++;
    }
}
document.write(found)
var arr = [1, 2, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        found = true;
        break;
    }
}
document.write(found)
var a = Date.now();
for (var i = 0; i < 100; i++) {
    document.write(i);
}
document.write(Date.now() - a)