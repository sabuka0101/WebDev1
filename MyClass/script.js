let num = prompt("Enter The Number");

while (num != 20) {
    if (num < 20) {
        alert("higher")
    } else if (num > 20) {
        alert("lower")
    }
    num = prompt("Try again")
}
alert("You've guessed the number")