import BlogDetails from '@/components/blog/blog-details/blog-details'
import NewsletterSection from '@/components/blog/newsletter/newsletter'
import RecentBlogs from '@/components/blog/recent-blogs/recent-blogs'
import TryDemaCard from '@/components/blog/try-dema-card/try-dema-card'
import Footer from '@/components/common/footer/footer'
import Navbar from '@/components/common/navbar/navbar'
import { DeviceProvider } from '@/utils/DeviceContext'
import { getBlogBySlug, getBlogs } from '@/utils/strapi-cms'
import React from 'react'

const BlogDetailPage = async ({params}) => {
  const slug = params.slug;
  return (
    <DeviceProvider>
    <Navbar />
    {slug && <BlogDetails slug={slug} />}
    <RecentBlogs />
    <TryDemaCard />
    <NewsletterSection />
    <Footer />
    </DeviceProvider>
  )
}

export default BlogDetailPage