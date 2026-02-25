const products = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

const calculateTotal = (products) => {
    return products.reduce((total, product) => {return total + (product.price * product.quantity);}, 0);
};

const invoiceLines = products.map(product => {return `${product.name} - ${product.price} x ${product.quantity} = 
    ${product.price * product.quantity}`;}).join("\n");

const totalAmount = calculateTotal(products);

console.log(`----- Invoice -----${invoiceLines}-------------------Total Amount: ${totalAmount}`);