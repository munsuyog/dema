import BlogCards from '../../components/blog/BlogCards/BlogCards'
import BlogTitleSection from '../../components/blog/BlogTitle/BlogTitle'
import NewsletterSection from '../../components/blog/NewsletterComponent/NewsletterComponent'
import RecentBlogs from '../../components/blog/RecentBlogs/RecentBlogs'
import TryDemaCard from '../../components/blog/TryDemaCard/TryDemaCard'
import Footer from '../../components/common/FooterComponent/FooterComponent'
import Navbar from '../../components/common/NavbarComponent/NavbarComponent'
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