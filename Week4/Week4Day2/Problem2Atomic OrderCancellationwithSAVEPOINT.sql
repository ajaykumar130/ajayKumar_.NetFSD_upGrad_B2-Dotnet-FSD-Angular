BEGIN TRY
    BEGIN TRANSACTION;
    DECLARE @order_id INT = 1;   -- order to cancel
    SAVE TRANSACTION RestoreStockPoint;
    UPDATE s
    SET s.quantity = s.quantity + oi.quantity
    FROM stocks s
    JOIN orders o ON s.store_id = o.store_id
    JOIN order_items oi ON oi.order_id = o.order_id
    WHERE oi.product_id = s.product_id
    AND o.order_id = @order_id;

    UPDATE orders
    SET order_status = 3
    WHERE order_id = @order_id;

    COMMIT TRANSACTION;
    PRINT 'Order cancelled successfully and stock restored';
END TRY
BEGIN CATCH
    PRINT 'Error occurred during order cancellation';
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION RestoreStockPoint;
    PRINT ERROR_MESSAGE();

END CATCH;