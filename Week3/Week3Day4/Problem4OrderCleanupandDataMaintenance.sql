USE EcommAppDb
CREATE TABLE archived_orders
(
    order_id INT,
    customer_id INT,
    order_status TINYINT,
    order_date DATE,
    required_date DATE,
    shipped_date DATE,
    store_id INT,
    staff_id INT
);

INSERT INTO archived_orders
SELECT order_id, customer_id, order_status, order_date,required_date, shipped_date, store_id, staff_id
FROM orders
WHERE order_status = 3
AND order_date < DATEADD(YEAR,-1,GETDATE());

DELETE FROM orders
WHERE order_status = 3
AND order_date < DATEADD(YEAR,-1,GETDATE());

SELECT customer_id
FROM customers
WHERE customer_id IN
(
    SELECT customer_id
    FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) =
    SUM(CASE WHEN order_status = 4 THEN 1 ELSE 0 END)
);

SELECT order_id,order_date,shipped_date,
    DATEDIFF(DAY, order_date, shipped_date) AS processing_delay_days
FROM orders;

SELECT order_id,order_date,required_date,shipped_date,
    CASE
        WHEN shipped_date > required_date THEN 'Delayed'
        ELSE 'On Time'
    END AS delivery_status
FROM orders;