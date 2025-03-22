import React, { useState, useEffect } from 'react';
import './RecentBlogs.css';
import RecentBlogsCard from './Card/Card';
import { getBlogs } from '../../../utils/strapi-cms';

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setMobile] = useState(false);

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
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getBlogs();
        setBlogs(blogs);
      }
      catch(error) {
        console.error(error);
      }
    }
    fetchBlogs();
  },[])

  const blogsPerPage = 3;

  // Logic to calculate the index of the first and last blog on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = (blogs && blogs.data) ? blogs.data.slice(indexOfFirstBlog, indexOfLastBlog) : [];



  // Logic to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = blogs && blogs.data ? Math.ceil(blogs.data.length / blogsPerPage) : 0;

  return (
    <section id='recent-blogs'>
      <div className='recent-blogs section-padding fixed-width'>
      <h2 className='recent-blogs-title'>
        Recent <span> Blog
          <svg width="124" height="75" viewBox="0 0 124 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M67.2302 60.4383C60.8776 61.4793 54.1452 61.9132 47.6905 61.7541C40.5923 61.5792 32.8321 61.4397 25.9099 59.8424C10.3554 56.2532 2.05812 41.748 3.83578 27.2898C5.37833 14.7438 21.3862 7.95801 32.835 5.40657C44.7826 2.74393 57.5948 2.92419 69.68 4.68906C80.3852 6.25241 91.0425 8.64692 101.195 12.2824C106.516 14.1875 112.623 16.6193 116.704 20.6031C126.518 30.1817 113.798 43.5426 106.267 49.6983C97.3291 57.0033 86.3337 62.1114 75.3767 66.126C67.8636 68.8788 60.2229 70.1108 52.2098 70.5757C47.1533 70.8691 41.6555 71.7325 36.9349 69.8886" stroke="#3830C9" strokeWidth="6" strokeLinecap="round"/>
          </svg>
        </span>
      </h2>
      <div className='recent-blogs-cards-wrapper'>
        {currentBlogs.map((blog, index) => (
          <RecentBlogsCard key={index} blog={blog} />
        ))}
      </div>
      {/* Pagination */}
      <div className="pagination">
        <button disabled={currentPage === 1} className="pagination-previous" onClick={() => paginate(currentPage - 1)}>
          {isMobile ? (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.50001 12.0228C9.49944 11.9284 9.51835 11.8349 9.55565 11.7475C9.59296 11.6601 9.64792 11.5807 9.7174 11.5137L14.2151 7.2109C14.3562 7.07586 14.5477 7 14.7473 7C14.9469 7 15.1384 7.07586 15.2795 7.2109C15.4207 7.34594 15.5 7.52909 15.5 7.72006C15.5 7.91103 15.4207 8.09418 15.2795 8.22922L11.3066 12.0228L15.272 15.8164C15.3949 15.9536 15.459 16.1301 15.4517 16.3106C15.4445 16.491 15.3662 16.6622 15.2327 16.79C15.0992 16.9177 14.9203 16.9925 14.7316 16.9995C14.543 17.0064 14.3585 16.945 14.2151 16.8276L9.7174 12.5248C9.57891 12.3912 9.50084 12.2109 9.50001 12.0228Z" fill="#726E83"/>
            </svg>
          ) : "Previous"}
        </button>
        <div className="pagination-number-wrapper">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? "pagination-number active" : "pagination-number"}
              onClick={() => paginate(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button disabled={currentPage === totalPages} onClick={() => paginate(currentPage + 1)} className="pagination-next">
          {isMobile ? (
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 11.9772C15.5006 12.0716 15.4816 12.1651 15.4443 12.2525C15.407 12.3399 15.3521 12.4193 15.2826 12.4863L10.7849 16.7891C10.6438 16.9241 10.4523 17 10.2527 17C10.0531 17 9.86161 16.9241 9.72046 16.7891C9.5793 16.6541 9.5 16.4709 9.5 16.2799C9.5 16.089 9.5793 15.9058 9.72046 15.7708L13.6934 11.9772L9.72795 8.18359C9.60514 8.0464 9.54097 7.86993 9.54826 7.68945C9.55555 7.50896 9.63376 7.33776 9.76726 7.21004C9.90076 7.08233 10.0797 7.00751 10.2684 7.00054C10.457 6.99356 10.6415 7.05495 10.7849 7.17244L15.2826 11.4752C15.4211 11.6088 15.4992 11.7891 15.5 11.9772Z" fill="white"/>
            </svg>
          ) : "Next"}
        </button>
      </div>
      </div>
    </section>
  );
};

export default RecentBlogs;
