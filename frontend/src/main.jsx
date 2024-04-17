import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./animations.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Blog from "./pages/blog/Blog.jsx";
import BlogDetailPage from "./pages/blog/BlogDetails.jsx";
import AuthorPage from "./pages/blog/author/AuthorBlogs.jsx";
import '../public/fonts/dema/bold.ttf'
import TermsOfService from "./pages/TermsOfService.jsx";
import Privacy from "./pages/Privacy.jsx";
import Pricing from "./pages/Pricing.jsx";
import Shipping from "./pages/Shipping.jsx";
import Returns from "./pages/Returns.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/learn" Component={Learn} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/blog" Component={Blog} />
        <Route path="/termsofservice" Component={TermsOfService} />
        <Route path="/pricing" Component={Pricing} />
        <Route path="/shipping" Component={Shipping} />
        <Route path="/returns" Component={Returns} />
        <Route path="/privacy" Component={Privacy} />
        <Route path="/blog/:slug" Component={BlogDetailPage} />
        <Route path="/blog/author/:author" Component={AuthorPage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
