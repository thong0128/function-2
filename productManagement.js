let myProducts = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple iPhone 6S", "Xiaomi Mi 5s Plus", "Aplle iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"]
let tableID = document.getElementById("producttable");
function productDisplay (arr) {
    let productsTable = "<tr><th>Product Name</th><th></th><th></th></tr>"
    for (let i = 0; i < arr.length; i++) {
        productsTable += `<tr>
            <td> ${arr[i]} </td>
            <td><button id = 'eddit${i}' onclick="editProduct(${i})">Edit</button></td>
            <td><button id = 'delete${i}' onclick="deleteProduct(${i})">Delete</button></td>
        </tr>`;
    }
    return productsTable;
}
function editProduct(index) {
    myProducts[index] = prompt("Nhập tên sản phẩm");
    tableID.innerHTML = productDisplay(myProducts);
}
function deleteProduct(index) {
    myProducts.splice(index, 1);
    tableID.innerHTML = productDisplay(myProducts);
}
function addProduct() {
    let newProduct = document.getElementById("newProduct").value;
    newProduct === ""?alert("Vui lòng nhập vào sản phẩm"):myProducts.push(newProduct);
    document.getElementById("newProduct").value = '';
    document.getElementById("newProduct").focus();
    tableID.innerHTML = productDisplay(myProducts);
}
tableID.innerHTML = productDisplay(myProducts);