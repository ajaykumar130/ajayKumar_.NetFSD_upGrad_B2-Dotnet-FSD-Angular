using System;


namespace BasicDemo
{
    internal class StudentGradeEvaluator
    {
        static void Main()
        {
            Console.Write("Enter Name: ");
            string name = Console.ReadLine();
            Console.Write("Enter Marks: ");
            int marks = Convert.ToInt32(Console.ReadLine());

            if (marks < 0 || marks > 100)
            {
                Console.WriteLine("Invalid marks. Marks should be between 0 and 100.");
            }
            else
            {
                if (marks >= 90)
                    Console.WriteLine("Student: " + name + "\nGrade: A");
                else if (marks >= 75)
                    Console.WriteLine("Student: " + name + "\nGrade: B");
                else if (marks >= 60)
                    Console.WriteLine("Student: " + name + "\nGrade: C");
                else if (marks >= 40)
                    Console.WriteLine("Student: " + name + "\nGrade: D");
                else
                    Console.WriteLine("Student: " + name + "\nGrade: Fail");
            }
        }
    }
}
