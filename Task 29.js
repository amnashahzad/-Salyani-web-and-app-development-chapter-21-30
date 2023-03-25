var arr = [1, 2, 3, 5, 8, 5, 2, 10, 5]
var found = false;
var found2 = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        found = true;
    }
    if (arr[i] == 2) {
        found2 = true;
    }
    if (found == true && found2 == true) {
        document.write("true");
        break;
    }
}
var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]
var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == 2) {
                found = true;
                break;
            }
        }
        break;
    }
}
if (found == true) {
    document.write("true");
}
var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]
var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        found = true;
        break;
    }
}
if (found == true) {
    document.write("true");
}