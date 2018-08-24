class Student {
    constructor(gpa, credits) {
        this.gpa = gpa;
        this.credits = credits;
    }
    get level() {
        if (this.credits > 90) {
            return "Senior";
        } else if (this.credits >= 61 && this.credits <= 90) {
            return "Junior";
        } else if (this.credits >= 31 && this.credits <= 60) {
            return "Sophomore";
        } else if (this.credits <= 30) {
            return "Freshman";
        }
    }

    // Inside the major() setter method, set the student's major to a backing property "major". If the student's level is Junior or Senior, the value of the backing property should be equal to the parameter passed to the setter method. If the student is only a Freshman or Sophomore, set the "major" backing property equal to 'None'.

    set major(major) {
        if (this.level === "Senior" || this.level === "Junior") {
            this._major = major;
        } else {
            this._major = 'none';
        }
    }

    stringGPA() {
        return this.gpa.toString();
    }
}

const student = new Student(3.9, 30);
console.log(student.level);
student.major = 5;
console.log(student._major);