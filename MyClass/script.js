<<<<<<< HEAD
const company = {
    frontend: {
        John: 1200,
        Mary: 1500
    },
    backend: {
        Peter: 1800,
        Anna: 2000
    },
    design: {
        Lucy: 1300
    }
};

function analyzeCompany() {
    let salary = 0;

    for (department in company) {
        for (employee in company[department]) {
            salary += company[department][employee];
        }
    }
}
analyzeCompany();
=======
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
>>>>>>> 68e844a4e68d9943586a86cbb04f013972527817
