import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./Checkout";

const App = () => {
  const theme = {
    colors: {
      heading: "#1d1d1f",
      text: "#6e6e73",
      white: "#ffffff",
      black: "#1d1d1f",
      helper: "#0071e3",

      bg: "#f5f5f7",
      pageBg: "#ffffff",
      footer_bg: "#1d1d1f",
      btn: "#0071e3",
      btnHover: "#0077ed",
      border: "rgba(0, 0, 0, 0.1)",
      hr: "#d2d2d7",
      gradient: "linear-gradient(135deg, #0071e3 0%, #42a5f5 100%)",
      shadow: "0 2px 12px rgba(0,0,0,0.08)",
      shadowSupport: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
      shadowCard: "0 4px 24px rgba(0,0,0,0.08)",
      accent: "#0071e3",
      success: "#30d158",
      warning: "#ff9f0a",
      danger: "#ff375f",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;