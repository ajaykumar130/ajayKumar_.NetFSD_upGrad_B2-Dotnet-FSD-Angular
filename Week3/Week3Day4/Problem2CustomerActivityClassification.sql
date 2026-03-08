USE EcommAppDb

SELECT c.customer_id,c.first_name + ' ' + c.last_name AS full_name,o.total_order_value,
    CASE 
        WHEN o.total_order_value > 10000 THEN 'Premium'
        WHEN o.total_order_value BETWEEN 5000 AND 10000 THEN 'Regular'
        ELSE 'Basic'
    END AS customer_type
FROM customers c
JOIN (SELECT o.customer_id,SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_order_value
        FROM orders o
        JOIN order_items oi
        ON o.order_id = oi.order_id
        GROUP BY o.customer_id
     ) o
ON c.customer_id = o.customer_id
UNION
SELECT 
    c.customer_id,
    c.first_name + ' ' + c.last_name AS full_name,
    0 AS total_order_value,
    'No Orders' AS customer_type
FROM customers c
WHERE c.customer_id NOT IN
(SELECT customer_id 
    FROM orders
    WHERE customer_id IS NOT NULL
);