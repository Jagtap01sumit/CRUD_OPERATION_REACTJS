//totalrevenue
import React, { useContext } from "react";
import { ObjContext } from "../../context/objContext";
import Navbar from "../Navbar/Navbar";

function TotalRevenue() {
    const {obj, setObj, getTop5Sales, calculateTotalRevenue} = useContext(ObjContext)
    console.log(obj);
    const totalRevenue = calculateTotalRevenue();
  return (
    <div>
      <Navbar />
      <h2 className="text-center mt-3">Today's Total Revenue: {totalRevenue}</h2>
    </div>
  );
}

export default TotalRevenue;

