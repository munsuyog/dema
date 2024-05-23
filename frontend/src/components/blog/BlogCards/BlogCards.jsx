import React, { useState, useEffect } from "react";
import "./BlogCards.css";
import BlogCard from "./BlogCard/BlogCard";
import { getBlogs, getBlogsByAuthor } from "../../../utils/strapi-cms";
import { useParams, useSearchParams } from "react-router-dom";

const BlogCards = ({author}) => {
  const [blogs, setBlogs] = useState({});
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [isMobile, setMobile] = useState(false);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  useEffect(() => {
    if(filter) {
      setSelectedFilter(filter)
    }
  },[filter])

  useEffect(() => {
    const handleResize = () => {
      // Pause animation if screen width is less than 768px
      if (visualViewport.width < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    // Initial call to set animation state
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        if(author) {
          const blogs = await getBlogsByAuthor(author);
          setBlogs(blogs)
        }
        else {
          const blogs = await getBlogs();
          setBlogs(blogs);
        }
      }
      catch(error) {
        console.error(error);
      }
    }
    fetchBlogs();
  },[])
  const itemsPerPage = 5; // Number of blogs per page

  const handlePageChange = (pageNumber, event) => {
    event.preventDefault();
    // Prevent out-of-bounds page changes
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const filters = [
    "All",
    "Sellers",
    "Shoppers",
    "Community",
    "Partnership",
    "Developer",
    "Points",
  ];

  const totalPages = Math.ceil((blogs && blogs.data ? blogs.data.length : 0) / itemsPerPage);

  const filteredBlogs = (blogs && blogs.data)
    ? selectedFilter === "All"
      ? blogs.data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : blogs.data.filter((blog) => blog.attributes.tags.includes(selectedFilter)).slice(
          (currentPage - 1) * itemsPerPage,
          currentPage * itemsPerPage
        )
    : [];
  

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <section id="blog-cards" className="section-padding fixed-width">
      <div className="filter-buttons">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={
              selectedFilter === filter
                ? "blog-filter-btn active"
                : "blog-filter-btn"
            }
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      {filteredBlogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} setCategory={setSelectedFilter} />
      ))}
      <div className="pagination">
        <button disabled={currentPage === 1} className="pagination-previous" onClick={(e) => handlePageChange((currentPage - 1), e)}>
        {isMobile ? (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.50001 12.0228C9.49944 11.9284 9.51835 11.8349 9.55565 11.7475C9.59296 11.6601 9.64792 11.5807 9.7174 11.5137L14.2151 7.2109C14.3562 7.07586 14.5477 7 14.7473 7C14.9469 7 15.1384 7.07586 15.2795 7.2109C15.4207 7.34594 15.5 7.52909 15.5 7.72006C15.5 7.91103 15.4207 8.09418 15.2795 8.22922L11.3066 12.0228L15.272 15.8164C15.3949 15.9536 15.459 16.1301 15.4517 16.3106C15.4445 16.491 15.3662 16.6622 15.2327 16.79C15.0992 16.9177 14.9203 16.9925 14.7316 16.9995C14.543 17.0064 14.3585 16.945 14.2151 16.8276L9.7174 12.5248C9.57891 12.3912 9.50084 12.2109 9.50001 12.0228Z" fill="#726E83"/>
</svg>
) : "Previous"}
        </button>
        <div className="pagination-number-wrapper">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? "pagination-number active" : "pagination-number"}
            onClick={(e) => handlePageChange((i + 1), e)}
          >
            {i + 1}
          </button>
        ))}
        </div>
        <button disabled={currentPage === totalPages} onClick={(e) => handlePageChange((currentPage + 1), e)} className="pagination-next">
          {isMobile ? (<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 11.9772C15.5006 12.0716 15.4816 12.1651 15.4443 12.2525C15.407 12.3399 15.3521 12.4193 15.2826 12.4863L10.7849 16.7891C10.6438 16.9241 10.4523 17 10.2527 17C10.0531 17 9.86161 16.9241 9.72046 16.7891C9.5793 16.6541 9.5 16.4709 9.5 16.2799C9.5 16.089 9.5793 15.9058 9.72046 15.7708L13.6934 11.9772L9.72795 8.18359C9.60514 8.0464 9.54097 7.86993 9.54826 7.68945C9.55555 7.50896 9.63376 7.33776 9.76726 7.21004C9.90076 7.08233 10.0797 7.00751 10.2684 7.00054C10.457 6.99356 10.6415 7.05495 10.7849 7.17244L15.2826 11.4752C15.4211 11.6088 15.4992 11.7891 15.5 11.9772Z" fill="white"/>
</svg>
) : "Next"}
        </button>
        </div>
    </section>
  );
};

export default BlogCards;
