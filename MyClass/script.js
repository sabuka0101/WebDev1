<<<<<<< HEAD
const students = {
  firstName: "Nika",
  lastName: "Gelashvili",
  grades: [70, 50, 34],
  getAverage(sum) {
    for (let i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  },
  isPassing() {
    if (students.getAverage() > 50) {
      return `${students.firstName} is passing`;
    } else {
      return `${students.firstName} isn't passing`;
    }
  },
};

console.log(students.getAverage(0));
console.log(students.isPassing());
=======
const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "coral";
  paragraphs[i].style.border = "solid black 3px";
  paragraphs[i].style.background = "cyan";
  paragraphs[i].style.marginTop = "200px";
  paragraphs[i].innerHTML = "Hello World!";
}
>>>>>>> 841236d759f5b1b743ced7c98b6ce589848ba045
