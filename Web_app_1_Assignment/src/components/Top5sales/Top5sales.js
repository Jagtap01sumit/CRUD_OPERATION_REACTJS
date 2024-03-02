import React, { useContext, useEffect } from "react";
import { ObjContext } from "../../context/objContext";
import Navbar from "../Navbar/Navbar";

function Top5sales() {
  const { obj, setObj, getTop5Sales } = useContext(ObjContext);
  console.log(obj);

  const myfunction = async () => {
    try {
      const response = await fetch("http://localhost:8000/getData", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "res");

      if (Array.isArray(data)) {
        setObj(data);
      } else {
        console.error("Fetched data is not an array:", data);
      }
    } catch (e) {
      console.error("Error fetching data:", e);
    }
  };

  useEffect(() => {
    myfunction();
  }, [setObj]);

  useEffect(() => {
    console.log(obj, "obj");
  }, [obj]);
  return (
    <div>
      <Navbar />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sales id:</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sale Amount</th>
          </tr>
        </thead>
        <tbody>
          {getTop5Sales().map((sale, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>SI{index + 1}</td>
              <td>{sale.productName}</td>
              <td>{sale.quantity}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Top5sales;
