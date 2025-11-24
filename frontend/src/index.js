import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Homepage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import PageNotFound from "./landing_page/PageNotFound";

// import { Login, Signup as AuthSignup, Home } from "./pages";
import Login from "./pages/Login";
import AuthSignup from "./pages/Signup";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ScrollToTop /> 

        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/product" element={<ProductPage/>} />
            <Route path="/pricing" element={<PricingPage/>} />
            <Route path="/support" element={<SupportPage/>} />
            <Route path="*" element={<PageNotFound/>} />

            {/* Auth Routes */}
            <Route path="/auth/signup" element={<AuthSignup />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/dashboard" element={<Home />} />

        </Routes>
        <Footer />
    </BrowserRouter>
);
