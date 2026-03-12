using System;


namespace FunctionsDemo
{
    internal class RecursivePowerCalculator
    {
        public int CalculatePower(int baseNum, int exponent)
        {
            if (exponent == 0)
                return 1;
            return baseNum * CalculatePower(baseNum, exponent - 1);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Enter base:");
            int baseNum = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter exponent:");
            int exponent = Convert.ToInt32(Console.ReadLine());
            RecursivePowerCalculator obj = new RecursivePowerCalculator();

            int result = obj.CalculatePower(baseNum, exponent);

            Console.WriteLine("Result = " + result);
        }
    }
}
