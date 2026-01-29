const age = prompt("Enter your Age");
const parent = prompt("Are you with adult? (yes/no)");
const ticket = prompt("Do you have the ticket? (yes/no)");
const time = prompt("Are you late? (yes/no)");

if (age >= 18 && ticket === "yes" && time === "no") {
    alert("You can watch the movie")
} else if (age >= 13 && parent === "yes" && ticket === "yes") {
    alert("You can watch the movie")
} else if (time === "yes" && ticket === "no") {
    alert("You can't watch the movie")
} else {
    alert("You can't watch the movie")
}