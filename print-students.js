const STUDENTLIST = require('./students');

function printStudentInfo(){
    STUDENTLIST.forEach(student => {
        console.log(`Name: ${student.name}, GPA: ${student.gpa}, ID: ${student.id}`);
    });
}

printStudentInfo();