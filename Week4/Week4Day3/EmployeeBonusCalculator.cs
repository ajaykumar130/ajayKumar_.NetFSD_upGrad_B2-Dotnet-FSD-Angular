using System;


namespace Demo
{
    internal class EmployeeBonusCalculator
    {
        static void Main()
        {
            Console.Write("Enter Name: ");
            string name = Console.ReadLine();
            Console.Write("Enter Salary: ");
            double salary = Convert.ToDouble(Console.ReadLine());
            Console.Write("Enter Experience: ");
            int experience = Convert.ToInt32(Console.ReadLine());
            double bonusPercent;
            if (experience < 2)
                bonusPercent = 0.05;
            else if (experience <= 5)
                bonusPercent = 0.10;
            else
                bonusPercent = 0.15;

            double bonus = salary * bonusPercent;
            double finalSalary = salary + bonus;

            Console.WriteLine("\nEmployee: " + name);
            Console.WriteLine("Bonus: " + bonus);
            Console.WriteLine("Final Salary: " + finalSalary);
        }
    }
}
