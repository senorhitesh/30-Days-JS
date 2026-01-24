class GradeManager {
    constructor() {
        this.students = [];
        this.nextId = 0;
    }

    addStudent(name, score, grade) {
        let student = {
            id: this.nextId,     // ✅ Add ID
            name: name,          // ✅ Lowercase
            score: score,        // ✅ Lowercase  
            grade: grade         // ✅ Lowercase
        }
        this.students.push(student);
        this.nextId++;
    }
    getTotalStudents() {
        return this.nextId
    }

    getAverageScore() {
        let sum = 0;
        for (let student of this.students) {
            sum += student.score;

        }
        return sum / this.students.length
    }

    getTopStudent() {
        let HiigestGrade = this.students[0];
        for (let grade of this.students) {
            if (grade.grade > HiigestGrade.grade) {
                HiigestGrade = grade;
            }
            return HiigestGrade
        }
    }

    getReport() {
        return `
              === CLASS STATISTICS ===
              Total Students: ${this.getTotalStudents()}
              Average Score: ${this.getAverageScore()}
              Top Student: ${this.getTopStudent().name} (${this.getTopStudent().score})
    `;
    }
}

let manager = new GradeManager();
manager.addStudent("Rahul", 85, "A");
manager.addStudent("Priya", 90, "A");
manager.addStudent("Amit", 75, "B");

console.log(manager.getReport());

