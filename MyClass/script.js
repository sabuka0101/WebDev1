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
