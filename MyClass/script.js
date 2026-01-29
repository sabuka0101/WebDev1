let num = prompt("Enter The Number");

while (num !== 20) {
    num = prompt("try again")
    if (num < 20) {
        alert("higher")
    } else if (num > 20) {
        alert("lower")
    }
}