using System;


namespace FunctionsDemo
{
    internal class SimpleCalculator
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
        public int Subtract(int a, int b)
        {
            return a - b;
        }

        static void Main()
        {
            int a, b;
            Console.WriteLine("Enter first number:");
            a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter second number:");
            b = Convert.ToInt32(Console.ReadLine());

            SimpleCalculator calc = new SimpleCalculator();

            int addition = calc.Add(a, b);
            int subtraction = calc.Subtract(a, b);
            Console.WriteLine("Addition = " + addition);
            Console.WriteLine("Subtraction = " + subtraction);
        }
    }
}
