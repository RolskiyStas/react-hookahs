import { useEffect, useState } from "react";
import axios from "axios";

import Card from "components/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://63089e9746372013f5821856.mockapi.io/orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Error while requesting orders");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="content">
      <div className="content__header">
        <h1 className="content__title">My orders</h1>
      </div>
      <div className="content__items">
        {(isLoading ? [...Array(4)] : orders).map((elem, index) => (
          <Card key={index} loading={isLoading} {...elem} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
