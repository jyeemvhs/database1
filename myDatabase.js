
const Student = require('./Student');

let myDatabase = function() {
	this.students = [];
}

let studentIndex = 0;

myDatabase.prototype.displayStudents = function() {
	for (let i=0;i<this.students.length;i++) {
		console.log(this.students[i]);
	}
}

myDatabase.prototype.postStudent = function(student) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && this.students[i].ident == student.ident) {
      return false;
    }
  }
	this.students[studentIndex++] = new Student(student.ident,student.name);
	return true;
}

myDatabase.prototype.getStudent = function(ident) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && ident == this.students[i].ident)
		{
      return(new Student(this.students[i].ident,this.students[i].name));
		}
  }
	return null;
}

myDatabase.prototype.putStudent = function(student) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && this.students[i].ident == student.ident) {
      this.students[i] = new Student(student.ident,student.name);
      return true;
    }
  }
  return false;
}

myDatabase.prototype.deleteStudent = function(ident) {
  for (let i=0;i<this.students.length;i++) {
    if (this.students[i] && ident == this.students[i].ident) {
			  let tempPtr = this.students[i];
        this.students[i] = undefined;
				return tempPtr;
    }
  }
	return null;
}

module.exports = myDatabase;
