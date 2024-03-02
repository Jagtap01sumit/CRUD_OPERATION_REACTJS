import React, { useState, useEffect } from "react";
import "./Addsales.css";
import Navbar from "../Navbar/Navbar";

function Addsales() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      productName,
      amount,
      quantity,
    };
    console.log(formData);
    try {
      const response = await fetch("http://localhost:8000/addData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("data added successful");
        setProductName("");
        setAmount("");
        setQuantity("");
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2 className="heading">ADD SALE ENTRY</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addsales;
