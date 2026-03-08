SELECT 
    st.store_name,
    p.product_name,
    SUM(oi.quantity) AS total_quantity_sold,
    SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_revenue
FROM(SELECT o.store_id, oi.product_id
        FROM orders o
        JOIN order_items oi
        ON o.order_id = oi.order_id
        INTERSECT
        SELECT store_id, product_id
        FROM stocks
        WHERE quantity = 0
) AS sold_out_products
JOIN orders o ON sold_out_products.store_id = o.store_id
JOIN order_items oi ON o.order_id = oi.order_id 
AND sold_out_products.product_id = oi.product_id
JOIN stores st ON o.store_id = st.store_id
JOIN products p ON oi.product_id = p.product_id
GROUP BY st.store_name,p.product_name;