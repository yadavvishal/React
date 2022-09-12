import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get("https://assessment.api.vweb.app/users");
      setUserData(response.data);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <h1 id="user_title" style={{ textAlign: "center" }}>
        User Details
      </h1>
      <div
        className="user__details mt-5"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((data) => {
              return (
                <tr key={data["user_id"]}>
                  <th scope="row">{data["user_id"]}</th>
                  <td>{data["name"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Users };