import BlogCards from '../../../components/blog/BlogCards/BlogCards';
import NewsletterSection from '../../../components/blog/NewsletterComponent/NewsletterComponent';
import RecentBlogs from '../../../components/blog/RecentBlogs/RecentBlogs';
import TryDemaCard from '../../../components/blog/TryDemaCard/TryDemaCard';
import Footer from '../../../components/common/FooterComponent/FooterComponent';
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