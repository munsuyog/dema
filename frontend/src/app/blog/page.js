import BlogCards from '@/components/blog/blog-cards/blog-cards'
import BlogTitleSection from '@/components/blog/blog-title/blog-title'
import NewsletterSection from '@/components/blog/newsletter/newsletter'
import RecentBlogs from '@/components/blog/recent-blogs/recent-blogs'
import TryDemaCard from '@/components/blog/try-dema-card/try-dema-card'
import Footer from '@/components/common/footer/footer'
import Navbar from '@/components/common/navbar/navbar'
import { getBlogs } from '@/utils/strapi-cms'
import React from 'react'

const Blog = async () => {
  const blogs = await getBlogs();
  return (
    <>
    <Navbar />
    <BlogTitleSection />
    {
      blogs && (
        <>
      <BlogCards blogs={blogs} />
      <RecentBlogs blogs={blogs} />
        </>
      )
    }
    <TryDemaCard />
    <NewsletterSection />
    <Footer />
    </>
  )
}

export default Blog