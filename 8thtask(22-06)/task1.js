// Task 1: Student Information System

let student = {

    rollNo : 101,
    name : "Rahul",
    course : "BCA",
    marks : 80

};

//1. Display all student details.
console.log(student);

// 2. Update the marks.
student.marks = 90;

// 3. Add a new property `grade`.
student.grade = "A";

// 4. Delete the `course` property.
delete student.course;

//5. Print all properties using a `for...in` loop.
for(let key in student){
    console.log(key , ":" , student[key]);
}