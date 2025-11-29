import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Homepage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import PageNotFound from "./landing_page/PageNotFound";

// import { Login, Signup as AuthSignup, Home } from "./";
import Login from "./landing_page/Login"
import AuthSignup from "./landing_page/Signup";
import Home from "./landing_page/Home";
import "./landing_page/pages.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ScrollToTop /> 

        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/pricing" element={<PricingPage/>} />
            <Route path="/support" element={<SupportPage/>} />

            {/* Auth Routes */}
            <Route path="/signup" element={<AuthSignup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />

            <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
);
