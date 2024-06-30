/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    for (let j = 0; j < product.availableSizes.length; j++) {
      if (product.availableSizes[j] === size) {
        result.push(product);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  return !(products.length < 4);
}

function checkForSizeByName(products, name, size) {
  if (!products) return products;
  let foundProduct = null;
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (product.name === name) {
      foundProduct = product;
    }
  }

  if (!foundProduct) return false;

  return foundProduct.availableSizes.includes(size);

}


module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
