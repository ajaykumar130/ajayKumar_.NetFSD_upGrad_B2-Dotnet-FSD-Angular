using System;


namespace FunctionsDemo
{
    internal class EcommerceOrderCalculator
    {
        public void CalculateFinalAmount(double price, int quantity, double discountPercent = 0, double shippingCharge = 50)
        {
            double subtotal = price * quantity;
            double discountAmount = subtotal * discountPercent / 100;
            double finalAmount = subtotal - discountAmount + shippingCharge;

            Console.WriteLine("Subtotal = " + subtotal);
            Console.WriteLine("Discount Applied = " + discountAmount);
            Console.WriteLine("Shipping Charge = " + shippingCharge);
            Console.WriteLine("Final Amount = " + finalAmount);
        }

        static void Main()
        {
            Console.WriteLine("Enter product price:");
            double price = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Enter quantity:");
            int quantity = Convert.ToInt32(Console.ReadLine());

            EcommerceOrderCalculator obj = new EcommerceOrderCalculator();

            Console.WriteLine("\nOrder with default discount and shipping:");
            obj.CalculateFinalAmount(price, quantity);
            Console.WriteLine("\nOrder with discount only:");
            obj.CalculateFinalAmount(price, quantity, 10);
            Console.WriteLine("\nOrder with discount and custom shipping:");
            obj.CalculateFinalAmount(price, quantity, 10, 100);
        }
    }
}
