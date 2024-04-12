import React, { useEffect, useState } from "react";
import "./blog-details.css";
import Markdown from "react-markdown";
import { getBlogBySlug, updateClaps } from "../../../utils/strapi-cms";
import { randomBlogVectors } from "../../../constants/VectorSVGs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BlogDetails = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [randomSVGs, setRandomSVGs] = useState([]);
  const [clapped, setClapped] = useState(false);

  useEffect(() => {
    const generateRandomSVGs = () => {
      const randomSVGList = [];
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(
          Math.random() * randomBlogVectors.length
        );
        randomSVGList.push(randomBlogVectors[randomIndex]);
      }
      setRandomSVGs(randomSVGList);
    };
    generateRandomSVGs();
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await getBlogBySlug(slug);
        setBlog(blog);
        console.log(blog);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, []);

  const updateBlogClaps = async () => {
    if (clapped) {
      // User has already clapped, decrement the claps
      const updatedClaps = Math.max(parseInt(blog.data[0].attributes.Reactions?.claps || 0, 10) - 1, 0);
      await updateClaps(blog.data[0].id, updatedClaps);
    } else {
      // User is clapping for the first time, increment the claps
      const updatedClaps = (parseInt(blog.data[0].attributes.Reactions?.claps || 0, 10) + 1);
      console.log(updatedClaps)
      await updateClaps(blog.data[0].id, updatedClaps);
    }
    setClapped(!clapped); // Toggle clapped state
  };
  

  if (blog) {
    const tags = blog.data[0].attributes.tags.split(",");

    return (
      <section id="blog-details">
        <div className="blog-details-title-section">
          <h2>{blog.data[0].attributes.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: blog.data[0].attributes.summary,
            }}
          ></p>
        </div>
        <a
          href={`/blog/author/${blog.data[0].attributes.author.name}`}
          className="blog-details-author"
        >
          <img
            src={`http://154.53.59.178:30002${blog.data[0].attributes.author.avatar.data.attributes.url}`}
            width={60}
            height={60}
            alt="avatar"
            className="blog-details-avatar-image"
          />
          <div>
            <h4 className="blog-details-author-name">
              {blog.data[0].attributes.author.name}
            </h4>
            <p className="blog-details-author-date">
              {new Date(blog.data[0].attributes.updatedAt).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </p>
          </div>
        </a>
        <div className="blog-details-featured-image-wrapper">
          <img
            src={`http://154.53.59.178:30002${blog.data[0].attributes.featuredImage.data.attributes.url}`}
            width={864}
            height={486}
            alt="avatar"
            className="blog-details-featured-image"
          />
        </div>
        <div className="blog-details-body">
          <Markdown>{blog.data[0].attributes.body}</Markdown>
        </div>
        <div className="blog-card-tags-wrapper">
          {tags &&
            tags.map((tag, index) => (
              <a href={`/blog?filter=${tag}`} key={index} className="blog-card-tag">
                {tag}
              </a>
            ))}
        </div>
        <div className="blog-details-reactions-wrapper">
          <div className="blog-details-reactions-claps" onClick={updateBlogClaps}>
            <svg width="35" height="35" viewBox="0 0 24 24" aria-label="clap" className="clap">  
              <path fill={clapped ? "black" : "grey"}
                d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"
              ></path>
            </svg>
            <p className="claps-text" style={{fontWeight: clapped ? 600 : 400}}>{clapped ? (blog.data[0].attributes.Reactions?.claps ? parseInt(blog.data[0].attributes.Reactions?.claps)+1 : 1) : blog.data[0].attributes.Reactions?.claps}</p>
          </div>
        </div>
        <div className="blog-details-random-svgs">
          {randomSVGs.map((svg, index) => (
            <span
              style={{
                position: "absolute",
                left: `${Math.random() * 15}%`,
                top: `${Math.random() * 100}%`,
              }}
              key={index}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ))}
          {randomSVGs.map((svg, index) => (
            <span
              style={{
                position: "absolute",
                right: `${Math.random() * 15}%`,
                top: `${Math.random() * 100}%`,
              }}
              key={index}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ))}
        </div>
      </section>
    );
  }
};

export default BlogDetails;
