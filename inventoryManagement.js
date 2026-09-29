// Write your code here
let products = ["Laptop","Phone","Headphones","Monitor"]
function logFirstProduct(){
  console.log(products[0]);
}
function addProduct(name){
  products.push(name)
}
function updateProductName(position,newName){
  products[position]= newName;

}

function removeLastProduct(){
  products.splice(3,1)
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
