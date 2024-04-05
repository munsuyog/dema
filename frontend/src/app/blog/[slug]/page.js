import BlogDetails from '@/components/blog/blog-details/blog-details'
import NewsletterSection from '@/components/blog/newsletter/newsletter'
import RecentBlogs from '@/components/blog/recent-blogs/recent-blogs'
import TryDemaCard from '@/components/blog/try-dema-card/try-dema-card'
import Footer from '@/components/common/footer/footer'
import Navbar from '@/components/common/navbar/navbar'
import { getBlogBySlug, getBlogs } from '@/utils/strapi-cms'
import React from 'react'

export async function generateStaticParams() {
  const posts = await getBlogs();
 
  return posts.data.map((post) => ({
    slug: post.attributes.slug,
  }))
}

const BlogDetailPage = async ({params}) => {
  const slug = params.slug;
  return (
    <>
    <Navbar />
    {slug && <BlogDetails slug={slug} />}
    <RecentBlogs />
    <TryDemaCard />
    <NewsletterSection />
    <Footer />
    </>
  )
}

export default BlogDetailPage