import { Student } from "./student.model";
import { getGrade, getTopper } from "./student.service";
import { formatName, calculateAverage } from "./utils";
import { PASS_MARKS } from "./constants";

const students: Student[] = [
    { id: 1, name: "ajay", marks: 85 },
    { id: 2, name: "kumar", marks: 72 },
    { id: 3, name: "ravi", marks: 39 }
];

console.log("Formatted Names:");
students.forEach(s => {
    console.log(formatName(s.name));
});

console.log("\nGrades:");
students.forEach(s => {
    console.log(`${formatName(s.name)}: ${getGrade(s.marks)}`);
});

console.log("\nAverage Marks:");
console.log(calculateAverage(students));

console.log("\nTopper:");
console.log(getTopper(students));

console.log("\nPass Marks:");
console.log(PASS_MARKS);