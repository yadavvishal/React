import axios from "axios";
import { useState, useEffect } from "react";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const orderDataResponse = await axios.get(
        "https://assessment.api.vweb.app/orders"
      );
      const userDataResponse = await axios.get(
        "https://assessment.api.vweb.app/users"
      );
      const productDataResponse = await axios.get(
        "https://assessment.api.vweb.app/products"
      );

      setOrderData(orderDataResponse.data);
      setUserData(userDataResponse.data);
      setProductData(productDataResponse.data);
    };

    fetchOrderData();
  }, []);

  return (
    <>
      <div
        className="user__order"
        style={{ maxWidth: "900px", margin: "10px auto" }}
      >
        <h1>User's Order</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>User's Name</th>
              <th>Product's Name</th>
              <th>Quantity</th>
              <th>Order's Date</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((data) => {
              const userName = userData.find((item) => {
                return item["user_id"] === data["user_id"];
              });
              const productName = productData.find((item) => {
                return item["product_id"] === data["product_id"];
              });
              const date = new Date(parseInt(data["order_date"]));

              return (
                <tr key={data["order_id"]}>
                  <th>{data["order_id"]}</th>
                  <td>{userName["name"]}</td>
                  <td>{productName["name"]}</td>
                  <td>{data["quantity"]}</td>
                  <td>{date.toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Orders };