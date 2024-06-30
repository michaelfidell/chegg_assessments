function getOrderSummary({orderId = 0, products = [], customer: {firstName, lastName} = {}} = {}) {
    const totalPriceInCents = products.reduce((total, product) => total + product.priceInCents, 0);
    const totalPrice = (totalPriceInCents / 100).toFixed(2);
    return `Order ID: ${orderId}, Customer: ${firstName} ${lastName}, Total Price: $${totalPrice}`;
}

console.log(getOrderSummary({}));