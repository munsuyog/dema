import React, { useEffect, useState } from 'react'
import './blog-details.css'
import Markdown from 'react-markdown'
import { getBlogBySlug } from '../../../utils/strapi-cms'
import { randomBlogVectors } from '../../../constants/VectorSVGs'

const BlogDetails = ({slug}) => {
    const [blog, setBlog] = useState(null);
    const [randomSVGs, setRandomSVGs] = useState([]);

    useEffect(() => {
        const generateRandomSVGs = () => {
            const randomSVGList = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * randomBlogVectors.length);
                randomSVGList.push(randomBlogVectors[randomIndex]);
            }
            setRandomSVGs(randomSVGList);
        };
        generateRandomSVGs();
    }, []);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blog = await getBlogBySlug(slug);
                setBlog(blog);
                console.log(blog)
            }
            catch(err) {
                console.error(err)
            }
        }
        fetchBlog()
    },[]);


    if(blog) {
        const tags = blog.data[0].attributes.tags.split(",")

        return (
            <section id='blog-details'>
                <div className='blog-details-title-section'>
                    <h2>{blog.data[0].attributes.title}</h2>
                    <p dangerouslySetInnerHTML={{__html: blog.data[0].attributes.summary}}></p>
                </div>
                <a href={`/blog/author/${blog.data[0].attributes.author.name}`} className='blog-details-author'>
                    <img src={`http://154.53.59.178:30002${blog.data[0].attributes.author.avatar.data.attributes.url}`} width={60} height={60} alt='avatar' className='blog-details-avatar-image' />
                    <div>
                        <h4 className='blog-details-author-name'>{blog.data[0].attributes.author.name}</h4>
                        <p className='blog-details-author-date'>{(new Date(blog.data[0].attributes.updatedAt)).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}</p>
                    </div>
                </a>
                <div className='blog-details-featured-image-wrapper'>
                    <img src={`http://154.53.59.178:30002${blog.data[0].attributes.featuredImage.data.attributes.url}`} width={864} height={486} alt='avatar' className='blog-details-featured-image' />
                </div>
                <div className='blog-details-body'>
                    <Markdown>{blog.data[0].attributes.body}</Markdown>
                </div>
                <div className='blog-card-tags-wrapper'>
        {
            tags && (tags.map((tag, index) => (
                <div key={index} className='blog-card-tag'>
                    {tag}
                </div>
            )))
        }
        </div>
                <div className='blog-details-random-svgs'>
                {randomSVGs.map((svg, index) => (
                        <span style={{position: 'absolute', left: `${Math.random() * 15}%`, top: `${Math.random() * 100}%`}} key={index} dangerouslySetInnerHTML={{ __html: svg }} />
                    ))}
                {randomSVGs.map((svg, index) => (
                        <span style={{position: 'absolute', right: `${Math.random() * 15}%`, top: `${Math.random() * 100}%`}} key={index} dangerouslySetInnerHTML={{ __html: svg }} />
                    ))}
                </div>
            </section>
          )
    }
}

export default BlogDetails