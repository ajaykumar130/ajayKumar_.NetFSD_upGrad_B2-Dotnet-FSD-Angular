import { Student } from "./student.model";

export function getGrade(marks: number): string {
    if (marks >= 75) return "A";
    if (marks >= 60) return "B";
    if (marks >= 50) return "C";
    if (marks >= 40) return "D";
    return "F";
}

export function getTopper(students: Student[]): Student {
    return students.reduce((topper, current) =>
        current.marks > topper.marks ? current : topper
    );
}