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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/learn" Component={Learn} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/blog" Component={Blog} />
        <Route path="/blog/:slug" Component={BlogDetailPage} />
        <Route path="/blog/author/:author" Component={AuthorPage} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
