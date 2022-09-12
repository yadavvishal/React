import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const fetchProductData = async () => {
      const response = await axios.get(
        "https://assessment.api.vweb.app/products"
      );
      setProductData(response.data);
    };
    fetchProductData();
    console.log(productData);
  }, []);
  return (
    <>
      <h1 id="product_title">User Details</h1>
      <div
        className="product__details mt-5"
        style={{ maxWidth: "700px", margin: "0 auto" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product's Name</th>
              <th>Stock</th>
              <th>Selling Price</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((data) => {
              return (
                <tr key={data["product_id"]}>
                  <th scope="row">{data["product_id"]}</th>
                  <td>{data["name"]}</td>
                  <td>{data["stock"]}</td>
                  <td>{data["selling_price"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Products };