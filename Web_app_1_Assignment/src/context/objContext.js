// used context api for calculating top5sales and total revenue
import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ObjContext = createContext();

const ObjProvider = ({ children }) => {
  const [obj, setObj] = useState([]);

  // to calculate top 5 sales
  const getTop5Sales = () =>
    obj
      .sort((a, b) => {
        if (a.amount > b.amount) return -1;
        if (a.amount < b.amount) return 1;
        return 0;
      })
      .slice(0, 5);
  // to calculate todays total revenue
  const calculateTotalRevenue = () =>
    obj
      .reduce((total, product) => total + product.quantity * product.amount, 0)
      .toFixed(2);

  return (
    <ObjContext.Provider
      value={{ obj, setObj, getTop5Sales, calculateTotalRevenue }}
    >
      {children}
    </ObjContext.Provider>
  );
};

export { ObjContext, ObjProvider };
