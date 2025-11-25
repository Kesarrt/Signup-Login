function processProducts(products) {
  const productNames = products.map(function (product) {
    return product.name;
  });

  products.forEach(function (product) {
    if (product.price > 50) {
      console.log(product.name + " is above $50");
    } else {
      console.log(product.name + " is below $50");
    }
  });

  return productNames;
}

const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 }
];

processProducts(items);
