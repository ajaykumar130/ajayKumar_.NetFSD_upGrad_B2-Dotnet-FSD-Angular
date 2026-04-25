"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrade = getGrade;
exports.getTopper = getTopper;
function getGrade(marks) {
    if (marks >= 75)
        return "A";
    if (marks >= 60)
        return "B";
    if (marks >= 50)
        return "C";
    if (marks >= 40)
        return "D";
    return "F";
}
function getTopper(students) {
    return students.reduce((topper, current) => current.marks > topper.marks ? current : topper);
}
