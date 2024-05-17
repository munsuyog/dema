import BlogCards from '../../components/blog/blog-cards/blog-cards'
import BlogTitleSection from '../../components/blog/blog-title/blog-title'
import NewsletterSection from '../../components/blog/newsletter/newsletter'
import RecentBlogs from '../../components/blog/recent-blogs/recent-blogs'
import TryDemaCard from '../../components/blog/try-dema-card/try-dema-card'
import Footer from '../../components/common/footer/footer'
import Navbar from '../../components/common/Navbar/Navbar'
import { DeviceProvider } from '../../contexts/DeviceContext'
import React from 'react'

const Blog = () => {
  return (
    <DeviceProvider>
    <Navbar />
    <BlogTitleSection />
      <BlogCards />
      <RecentBlogs />
    <TryDemaCard />
    <NewsletterSection />
    <Footer />
    </DeviceProvider>
  )
}

export default Blog