"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_service_1 = require("./student.service");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const students = [
    { id: 1, name: "ajay", marks: 85 },
    { id: 2, name: "kumar", marks: 72 },
    { id: 3, name: "ravi", marks: 39 }
];
console.log("Formatted Names:");
students.forEach(s => {
    console.log((0, utils_1.formatName)(s.name));
});
console.log("\nGrades:");
students.forEach(s => {
    console.log(`${(0, utils_1.formatName)(s.name)}: ${(0, student_service_1.getGrade)(s.marks)}`);
});
console.log("\nAverage Marks:");
console.log((0, utils_1.calculateAverage)(students));
console.log("\nTopper:");
console.log((0, student_service_1.getTopper)(students));
console.log("\nPass Marks:");
console.log(constants_1.PASS_MARKS);
