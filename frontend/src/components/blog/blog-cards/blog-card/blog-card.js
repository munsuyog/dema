import React from 'react';
import './blog-card.css';
import Image from 'next/image';

const BlogCard = ({ blog }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const date = new Date(blog.attributes.updatedAt);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const tags = blog.attributes.tags.split(",")

  return (
    <a href={`/blog/${blog.attributes.slug}`} className='blog-card'>
      <div className='blog-card-title-wrapper'>
        <h3>{blog.attributes.title}</h3>
        <p>{`${month} ${day}, ${year}`}</p>
      </div>
      <div className='blog-card-summary-wrapper'>
        <Image src={`http://154.53.59.178:30002${blog.attributes.featuredImage.data.attributes.url}`} width={848} height={485} alt='blog-card-image' className='blog-card-image' />
        <p dangerouslySetInnerHTML={{__html: blog.attributes.summary}}></p>
        {
            tags && (tags.map((tag, index) => (
                <div key={index} className='blog-card-tag'>
                    {tag}
                </div>
            )))
        }
      </div>
    </a>
  );
};

export default BlogCard;
