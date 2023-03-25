var cityToCheck = prompt("Enter your city");
var cleanestCities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}


var cityToCheck = prompt("Enter your city");
var cleanestCities = ["Karachi", "Hyderabad", "Lahore", "Quetta"];
var matchFound = false;
for (var i = 0; i < 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}