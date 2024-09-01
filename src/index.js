import React from "react";
import ReactDOM from "react-dom/client";
import { Footer, NavBar } from "./components/layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ListProducts from "./pages/admin/Products/List";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route path="/products" element={<ListProducts></ListProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
