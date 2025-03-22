import BlogDetails from '../../components/blog/BlogDetails/BlogDetails'
import NewsletterSection from '../../components/blog/NewsletterComponent/NewsletterComponent'
import RecentBlogs from '../../components/blog/RecentBlogs/RecentBlogs'
import TryDemaCard from '../../components/blog/TryDemaCard/TryDemaCard'
import Footer from '../../components/common/FooterComponent/FooterComponent'
import Navbar from '../../components/common/NavbarComponent/NavbarComponent'
import { DeviceProvider } from '../../contexts/DeviceContext'
import { getBlogBySlug, getBlogs } from '../../utils/strapi-cms'
import React from 'react'
import {useParams} from 'react-router-dom'

const BlogDetailPage = () => {
  const {slug} = useParams();
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