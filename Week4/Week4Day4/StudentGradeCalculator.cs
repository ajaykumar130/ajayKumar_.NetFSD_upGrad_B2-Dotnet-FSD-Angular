using System;


namespace FunctionsDemo
{
    internal class StudentGradeCalculator
    {
        public double CalculateAverage(int m1, int m2, int m3)
        {
            return (m1 + m2 + m3) / 3.0;
        }

        static void Main()
        {
            Console.WriteLine("Enter three marks:");
            int m1 = Convert.ToInt32(Console.ReadLine());
            int m2 = Convert.ToInt32(Console.ReadLine());
            int m3 = Convert.ToInt32(Console.ReadLine());

            StudentGradeCalculator s = new StudentGradeCalculator();

            double avg = s.CalculateAverage(m1, m2, m3);
            string grade;
            if (avg >= 80)
                grade = "A";
            else if (avg >= 60)
                grade = "B";
            else if (avg >= 50)
                grade = "C";
            else
                grade = "D";

            Console.WriteLine("Average = " + avg + ", Grade = " + grade);
        }
    }
}
