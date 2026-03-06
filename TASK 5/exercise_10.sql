USE classicmodels;

UPDATE orders
SET status = 'Cancelled',
    shippedDate = CURDATE(),
    comments = 'Order cancelled by management'
WHERE customerNumber IN (
    SELECT customerNumber
    FROM customers
    WHERE salesRepEmployeeNumber = (
        SELECT salesRepEmployeeNumber
        FROM customers
        WHERE contactFirstName = 'Elizabeth'
        AND contactLastName = 'Lincoln'
    )
);
