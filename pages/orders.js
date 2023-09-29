import Layout from "@/components/Layout";
import { prettyDate } from "@/lib/date";
import axios from "axios";
import React, { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);
  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <td>Date</td>
            <td>Recipient</td>
            <td>Products</td>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 &&
            orders.map((order) => (
              <tr key={order._id}>
                <td>{prettyDate(order.createdAt)}</td>
                <td>
                  <span className="tableSpan">Name : </span>
                  {order.name} <br />
                  <span className="tableSpan">Email : </span> {order.email}
                  <br />
                  <span className="tableSpan">City & Address : </span>{" "}
                  {order.city}
                  {order.streetAddress} <br />
                  <span className="tableSpan">PostalCode : </span>{" "}
                  {order.postalCode} <br />
                  <span className="tableSpan">Country : </span> {order.country}
                  <br />
                </td>
                <td>
                  {order.line_items.map((l) => (
                    <>
                      
                     {l.price_data?.product_data.name} x {l.quantity}{" item"} <br /> 
                      
                    </>
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrdersPage;
