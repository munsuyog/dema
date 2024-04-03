import React from 'react'
import './recent-blogs-card.css'
import Image from 'next/image'
import Link from 'next/link'

const RecentBlogsCard = ({blog}) => {
    console.log(blog.attributes.featuredImage.data)
  return (
    <Link href={`/blog/${blog.attributes.slug}`} className='recent-blogs-card'>
        <img src={`http://154.53.59.178:30002${blog.attributes.featuredImage.data.attributes.url}`} width={355} height={172} alt='recent-blogs-card-image' className='recent-blogs-card-image' />
        <h4>{blog.attributes.title}</h4>
        <p>{blog.attributes.summary.slice(0, 100)}...</p>
    </Link>
  )
}

export default RecentBlogsCard