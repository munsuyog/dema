import BlogDetails from '@/components/blog/blog-details/blog-details'
import NewsletterSection from '@/components/blog/newsletter/newsletter'
import RecentBlogs from '@/components/blog/recent-blogs/recent-blogs'
import TryDemaCard from '@/components/blog/try-dema-card/try-dema-card'
import Footer from '@/components/common/footer/footer'
import Navbar from '@/components/common/navbar/navbar'
import { getBlogBySlug, getBlogs } from '@/utils/strapi-cms'
import React from 'react'


const BlogDetailPage = async ({params}) => {
  console.log(params.slug)
  const blogs = await getBlogs();
  const blog = await getBlogBySlug(params.slug)
  return (
    <>
    <Navbar />
    {blog && <BlogDetails blog={blog} />}
    {blogs && <RecentBlogs blogs={blogs} />}
    <TryDemaCard />
    <NewsletterSection />
    <Footer />
    </>
  )
}

export default BlogDetailPage