import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Addsales from "./components/AddSales/Addsales";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ObjContext, { ObjProvider } from "./context/objContext";
import { useState } from "react";
import Top5sales from "./components/Top5sales/Top5sales";
import TotalRevenue from "./components/Totalrevenue/Totalrevenue";


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <ObjProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Addsales />} />
            <Route path="/top5sales" element={<Top5sales />} />
            <Route path="/totalrevenue" element={<TotalRevenue />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </ObjProvider>
    </>
  );
}

export default App;
