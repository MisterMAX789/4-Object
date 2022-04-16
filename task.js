

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let serj = new Student("Сергей", "мужской", 22)
let sophie = new Student("София", "женский", 20)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function ( ...args) {
  if (this.marks === undefined) {
    this.marks = [];
    args.map(el => this.marks.push(el));
  } else {
    args.map(el => this.marks.push(el));
  }
};

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((sum, current) => sum + current)  
  this.mediumAriphetic = sum / this.marks.length
  return this.mediumAriphetic
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
serj.setSubject ("География")                   
serj.addMark(2);
serj.addMark(3);
serj.addMarks(4,3,3,2,3,3,2);
serj.getAverage();
serj.exclude("удволетворительно");

sophie.setSubject ("Химия")
sophie.addMark(5);
sophie.addMark(4);
sophie.addMarks(5,4,5,5,5,5,5);
sophie.getAverage();
sophie.exclude("отлично");

console.log(serj);
console.log(sophie);