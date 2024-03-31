
import React from 'react'
import './blog-details.css'
import Image from 'next/image'
import Markdown from 'react-markdown'

const BlogDetails = ({blog}) => {
  return (
    <section id='blog-details'>
        <div className='blog-details-title-section'>
            <h2>{blog.data[0].attributes.title}</h2>
            <p dangerouslySetInnerHTML={{__html: blog.data[0].attributes.summary}}></p>
        </div>
        <div className='blog-details-author'>
            <Image src={`http://154.53.59.178:30002${blog.data[0].attributes.author.avatar.data.attributes.url}`} width={60} height={60} alt='avatar' className='blog-details-avatar-image' />
            <div>
                <h4 className='blog-details-author-name'>{blog.data[0].attributes.author.name}</h4>
            </div>
        </div>
        <div className='blog-details-featured-image-wrapper'>
            <Image src={`http://154.53.59.178:30002${blog.data[0].attributes.featuredImage.data.attributes.url}`} width={864} height={486} alt='avatar' className='blog-details-featured-image' />
        </div>
        <div className='blog-details-body'>
            <Markdown>{blog.data[0].attributes.body}</Markdown>
        </div>
    </section>
  )
}

export default BlogDetails