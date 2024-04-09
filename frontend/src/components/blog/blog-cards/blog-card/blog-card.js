import React from 'react';
import './blog-card.css';
import Image from 'next/image';

const BlogCard = ({ blog, setCategory }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const randomSvg = [
    `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 0L13.454 3.57226L16.8443 1.31726L16.9144 5.38841L20.9643 4.96726L19.1344 8.60465L22.9162 10.1138L19.6055 12.4842L22.2527 15.578L18.2197 16.1382L19.1259 20.1079L15.2945 18.7297L14.2521 22.6658L11.5 19.665L8.74787 22.6658L7.70554 18.7297L3.87409 20.1079L4.78034 16.1382L0.747313 15.578L3.39453 12.4842L0.083848 10.1138L3.86559 8.60465L2.03569 4.96726L6.0856 5.38841L6.15568 1.31726L9.54599 3.57226L11.5 0Z" fill="#E5DD00"/>
    </svg>
    `,
    `<svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1024 26.9799L43.5209 20.2382L33.6539 50.8195L12.1024 26.9799Z" fill="#DCD3FF"/>
    <path d="M1.00008 22.4118L32.4643 15.6288L22.5929 46.2971L1.00008 22.4118Z" stroke="#DCD3FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
    `<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42.5732 10.209L54.9034 45.8843L17.8196 38.781L42.5732 10.209ZM52.6171 44.0228L41.9257 13.0891L20.5278 37.8408L52.6171 44.0228Z" fill="#22E393"/>
    <path d="M37.6767 31.8229L45.1619 23.3368L52.5322 14.8906L56.1658 25.4038L59.8389 36.0313L48.835 33.9643L37.6767 31.8229Z" fill="#3830C9"/>
    </svg>
    `,
    `<svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.3323 16.6178C24.8941 16.3676 24.4457 16.163 23.995 16C24.4457 15.837 24.8941 15.6324 25.3323 15.3822C28.4233 13.6152 29.8369 10.3099 28.4903 8C27.1437 5.69012 23.5467 5.2507 20.4565 7.01767C20.0183 7.26788 19.6152 7.55054 19.2479 7.85558C19.3306 7.38759 19.3758 6.90105 19.3758 6.39985C19.3758 2.86514 17.1925 0 14.5 0C11.8075 0 9.62421 2.86514 9.62421 6.39985C9.62421 6.90105 9.66944 7.38759 9.75209 7.85558C9.38483 7.55054 8.98169 7.26788 8.54347 7.01767C5.45332 5.2507 1.85632 5.69012 0.509688 8C-0.836943 10.3099 0.577527 13.6144 3.66768 15.3822C4.10591 15.6324 4.55426 15.837 5.00496 16C4.55426 16.163 4.10591 16.3676 3.66768 16.6178C0.576747 18.3848 -0.836943 21.6901 0.509688 24C1.85632 26.3099 5.45332 26.7493 8.54347 24.9823C8.98169 24.7321 9.38483 24.4495 9.75209 24.1444C9.66944 24.6124 9.62421 25.0989 9.62421 25.6002C9.62421 29.1349 11.8075 32 14.5 32C17.1925 32 19.3758 29.1349 19.3758 25.6002C19.3758 25.0989 19.3306 24.6124 19.2479 24.1444C19.6152 24.4495 20.0183 24.7313 20.4565 24.9823C23.5475 26.7493 27.1445 26.3099 28.4903 24C29.8369 21.6894 28.4233 18.3848 25.3323 16.6178Z" fill="#DCD3FF"/>
    </svg>
    `
  ]

  const date = new Date(blog.attributes.updatedAt);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const tags = blog.attributes.tags.split(",")
  const highlightWord = (text, word) => {
    if (!word) {
      return text;
    } else {
      const words = word.split(';').map(w => w.trim());
      let highlightedText = text;
      words.forEach(w => {
        highlightedText = highlightedText.replace(
          new RegExp(
            `(${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})([?.!,;:"]?)`,
            "gi"
          ),
          `<span class="highlighted">$1$2</span>`
        );
      });
      return highlightedText;
    }
  };
  const randomIndex = Math.floor(Math.random() * randomSvg.length);
  const randomSvgElement = randomSvg[randomIndex];
  return (
    <div className='blog-card'>
      <a href={`/blog/${blog.attributes.slug}`} className='blog-card-title-wrapper'>
      <h3 className='title-blue'>
        <span dangerouslySetInnerHTML={{__html: highlightWord(blog.attributes.title, blog.attributes.highlightWord)}}></span>
        <span className='blog-card-title-svg' dangerouslySetInnerHTML={{__html: randomSvgElement}}></span>
      </h3>

        <p>{`${month} ${day}, ${year}`}</p>
      </a>
      <div className='blog-card-summary-wrapper'>
        <a href={`/blog/${blog.attributes.slug}`}>
        <img src={`http://154.53.59.178:30002${blog.attributes.featuredImage.data.attributes.url}`} width={848} height={485} alt='blog-card-image' className='blog-card-image' />
        <p dangerouslySetInnerHTML={{__html: blog.attributes.summary}}></p>
        </a>
        <div className='blog-card-tags-wrapper'>
        {
            tags && (tags.map((tag, index) => (
                <div key={index} className='blog-card-tag' onClick={() => setCategory(tag)}>
                    {tag}
                </div>
            )))
        }
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
