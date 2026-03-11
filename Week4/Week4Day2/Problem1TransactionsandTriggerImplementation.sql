USE EcommAppDb

CREATE TRIGGER trg_UpdateStockAfterOrder2
ON order_items
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    IF EXISTS (
        SELECT 1
        FROM inserted i
        JOIN orders o ON i.order_id = o.order_id
        JOIN stocks s ON s.product_id = i.product_id AND s.store_id = o.store_id
        WHERE s.quantity < i.quantity
    )
    BEGIN
        RAISERROR ('Insufficient stock for one or more products.',16,1);
        ROLLBACK TRANSACTION;
        RETURN;
    END

    UPDATE s
    SET s.quantity = s.quantity - i.quantity
    FROM stocks s
    JOIN inserted i ON s.product_id = i.product_id
    JOIN orders o ON i.order_id = o.order_id AND s.store_id = o.store_id;
END;
------------------------------------------------------

BEGIN TRY
    BEGIN TRANSACTION;
    DECLARE @order_id INT;

    INSERT INTO orders (customer_id, order_status, order_date, required_date, store_id, staff_id) VALUES
    (1, 1, GETDATE(), DATEADD(day,5,GETDATE()), 1, 1);

    SET @order_id = SCOPE_IDENTITY();

    INSERT INTO order_items(order_id, item_id, product_id, quantity, list_price, discount) VALUES
    (@order_id, 1, 1, 2, 379.99, 0),
    (@order_id, 2, 2, 1, 749.99, 0);

    COMMIT TRANSACTION;
    PRINT 'Order placed successfully';

END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Transaction failed. Order rolled back.';
    PRINT ERROR_MESSAGE();
END CATCH;