// let username = prompt("Enter Your Name:")
// let age = prompt("Enter Your Age:")
// let isCaptain = prompt("Are you captain? true/false")

// const player = {
//     username,
//     age,
//     isCaptain
// }
// if (isCaptain === "true"){
//  alert(`This player is captain!. Name: ${username} and Age: ${age}`)
// } else if(isCaptain === "false"){
//     alert(`This is regular player. Name: ${username} and Age: ${age}`)
// }else{
//     alert(`Enter properties right`)
// }

// let game = {
//     teamA: 0,
//     teamB: 0
// }
// function addGoal(teamName){
// if(teamName === "A"){
//     game.teamA++;
// }else if(teamName === "b"){
//     game.teamB++;
// }
// console.log(game);
// }

// addGoal("A")
// addGoal("B")

let students = [
  { name: "Nika", score: 80 },
  { name: "Luka", score: 55 },
  { name: "Ana", score: 92 },
];

for (i = 0; i < students.length; i++) {
  if (students[i].score >= 60) {
    console.log(`${students[i].name} passed`);
  } else {
    console.log(`${students[i].name} failed`);
  }
}
