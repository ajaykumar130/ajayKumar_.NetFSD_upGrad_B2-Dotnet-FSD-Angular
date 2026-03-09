USE EcommAppDb

CREATE PROCEDURE sp_TotalSalesPerStore
AS
BEGIN
SELECT s.store_id,s.store_name,
    SUM(oi.quantity * oi.list_price * (1 - ISNULL(oi.discount,0))) AS total_sales
FROM stores s
JOIN orders o
     ON s.store_id = o.store_id
JOIN order_items oi
     ON o.order_id = oi.order_id
GROUP BY s.store_id, s.store_name
ORDER BY total_sales DESC;
END;

EXEC sp_TotalSalesPerStore;


--------------------------------------------------------
CREATE PROCEDURE sp_GetOrdersByDateRange
    @StartDate DATE,
    @EndDate DATE
AS
BEGIN
SELECT order_id,customer_id,order_status,order_date,required_date,shipped_date,store_id,staff_id
FROM orders
WHERE order_date BETWEEN @StartDate AND @EndDate
ORDER BY order_date;
END;

EXEC sp_GetOrdersByDateRange '2017-01-01','2017-12-31';

-------------------------------------------------------

CREATE FUNCTION fn_CalculateDiscountPrice
(
    @price DECIMAL(10,2),
    @discount DECIMAL(4,2)
)
RETURNS DECIMAL(10,2)
AS
BEGIN
RETURN (@price * (1 - ISNULL(@discount,0)));
END;

SELECT product_id,list_price,discount,
dbo.fn_CalculateDiscountPrice(list_price,discount) AS final_price
FROM order_items;

------------------------------------------------------

CREATE FUNCTION fn_Top5SellingProducts()
RETURNS TABLE
AS
RETURN
(
SELECT TOP 5
       p.product_id,
       p.product_name,
       SUM(oi.quantity) AS total_sold
FROM products p
JOIN order_items oi
     ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name
ORDER BY total_sold DESC
);

SELECT * FROM dbo.fn_Top5SellingProducts();
