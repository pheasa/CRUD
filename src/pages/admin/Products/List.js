import { useEffect, useState } from "react";

export default function ListProducts() {
  const [products, setProducts] = useState([]);
  function getProducts() {
    fetch("http://localhost:3004/products?_sort=id&_order=desc")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        alert("Unable to get the data.");
      });
  }
  useEffect(getProducts, []);
  return (
    <div className="container my-4">
      <div className="bd-example">
        <button type="button" className="btn btn-primary">
          Create
        </button>
      </div>
      <table border="1" cellSpacing="0" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.description}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Description</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
