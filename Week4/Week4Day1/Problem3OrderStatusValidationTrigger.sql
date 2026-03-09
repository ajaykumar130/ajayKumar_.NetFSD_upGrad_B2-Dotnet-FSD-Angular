CREATE TRIGGER trg_ValidateOrderCompletion
ON orders
AFTER UPDATE
AS
BEGIN
BEGIN TRY
    IF EXISTS (
        SELECT 1
        FROM inserted
        WHERE order_status = 4
        AND shipped_date IS NULL
    )
    BEGIN
        THROW 50001, 'Order cannot be marked as Completed without shipped_date', 1;
        ROLLBACK TRANSACTION;
        RETURN;
    END
END TRY

BEGIN CATCH
    PRINT 'Error occurred while updating order status.';
    ROLLBACK TRANSACTION;
END CATCH

END;