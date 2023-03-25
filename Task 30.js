var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (!found) {
            if (found != arr[i]) {
                document.write("TRUE");
                break;
            }
        } else {
            document.write("SET foun")
            found = arr[i];
        }
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (found && found != arr[i]) {
            document.write("true");
            break;
        }
        found = arr[i];
    }
}

var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5]

var found = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1 || arr[i] == 2) {
        if (found && found != arr[i]) {
            document.write("true");
            break;
        }
        found = arr[i];
    }
}

var needToFound = [1, 2, 200, 300, 5]
var arr = [2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 2, 1, 3, 5, 8, 5, 2, 10, 5, 200, 300]

for (var i = 0; i < needToFound.length; i++) {
    var index = arr.indexOf(needToFound[i]);
    if (index != -1) {
        needToFound.splice(i, 1);
        i--;
    }
}
if (!needToFound.length) {
    document.write("Found All")
} else {
    document.write("Not Found these numbers : " + needToFound.join(",,"));
}