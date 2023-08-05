import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import "./App.css";
import Store from "./pages/Store";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Reset from "./pages/Reset";
import SingleBlog from "./pages/SingleBlog";
import ShippingPolicy from "./pages/ShippingPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import SingleProduct from "./pages/SingleProduct";
import Card from "./pages/Card";
import Checkout from "./pages/Checkout";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Card />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset" element={<Reset />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-policy" element={<TermAndConditions />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
