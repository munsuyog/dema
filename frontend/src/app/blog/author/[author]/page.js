import BlogCards from '@/components/blog/blog-cards/blog-cards';
import NewsletterSection from '@/components/blog/newsletter/newsletter';
import RecentBlogs from '@/components/blog/recent-blogs/recent-blogs';
import TryDemaCard from '@/components/blog/try-dema-card/try-dema-card';
import Footer from '@/components/common/footer/footer';
import Navbar from '@/components/common/navbar/navbar';
import React from 'react'

const AuthorPage = ({params}) => {
    const author = params.author;
  return (
    <>
        <Navbar />
        <BlogCards author={author} />
        <RecentBlogs />
        <TryDemaCard />
        <NewsletterSection />
        <Footer />
    </>
  )
}

export default AuthorPage