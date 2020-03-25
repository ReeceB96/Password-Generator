var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYX";
var numbers = "1234567890";
var char = "!@#$%^&*";
var randPass = "";

function password() {

    var passLegnth = parseInt(prompt("How long would you like your password to be? (8-20)"));
    var userChoice = "";

    if (passLegnth > 7 && passLegnth < 21) {
        alert("You want " + passLegnth + " characters");
    } else if(Number.isNaN(passLegnth)) {
        alert("Thats not an option.");
        password();
    } else {
        alert("Try again!");
        password();
    }

    var special = confirm("Use Special Characters?");

    if(special === true) {
        userChoice += char;
    } else {
        console.log("No Characters");
    }

    var upperCase = confirm("Use Upper Case Letters?");

    if(upperCase === true) {
        userChoice += upper;
    } else {
        console.log("No Upper Case");
    }

    var lowerCase = confirm("use Lower Case Letters?");

    if(lowerCase === true) {
        userChoice += lower; 
    } else {
        console.log("No Lower Case");
    }

    var nums = confirm("Use Numbers?");

    if(nums === true) {
        userChoice += numbers; 
    } else {
        console.log("No Numbers");
    }

    if(nums === false && lowerCase === false && upperCase === false && special === false) {
        alert("Ya gotta pick something!");
        password();
    }
    for (var i = 0; i < passLegnth; i++) {
        var random = userChoice[Math.floor(Math.random() * userChoice.length)];
        randPass += random;
        console.log(randPass);
    }
    document.getElementById("newPass").innerHTML = randPass;

    
}