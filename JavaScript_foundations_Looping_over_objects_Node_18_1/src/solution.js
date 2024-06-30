/*
  Write each function according to the instructions.
  
  When a function's parameters reference `cart`, it references an object that looks like the one that follows.
  {
    "Gold Round Sunglasses": { quantity: 1, priceInCents: 1000 },
    "Pink Bucket Hat": { quantity: 2, priceInCents: 1260 }
  }
*/

function calculateCartTotal(cart) {
  let price = 0;
  for (let item in cart) {
    let quantity = cart[item].quantity;
    let totalPrice = quantity * cart[item].priceInCents;
    price += totalPrice;
  }
  return price;
}

function printCartInventory(cart) {
  let inventory = []
  for (let item in cart) {
    const { quantity } = cart[item];
    inventory.push(`${quantity}x${item}`);
  }
  return inventory.join("\n");
}

module.exports = {
  calculateCartTotal,
  printCartInventory,
};
