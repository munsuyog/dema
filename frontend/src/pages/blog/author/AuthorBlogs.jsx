import BlogCards from '../../../components/blog/blog-cards/blog-cards';
import NewsletterSection from '../../../components/blog/newsletter/newsletter';
import RecentBlogs from '../../../components/blog/recent-blogs/recent-blogs';
import TryDemaCard from '../../../components/blog/try-dema-card/try-dema-card';
import Footer from '../../../components/common/footer/footer';
import Navbar from '../../../components/common/NavbarComponent/NavbarComponent';
import { DeviceProvider } from '../../../contexts/DeviceContext';
import React from 'react'
import {useParams} from 'react-router-dom'

const AuthorPage = ({params}) => {
    const {author} = useParams();
  return (
    <DeviceProvider>
        <Navbar />
        <BlogCards author={author} />
        <RecentBlogs />
        <TryDemaCard />
        <NewsletterSection />
        <Footer />
    </DeviceProvider>
  )
}

export default AuthorPage