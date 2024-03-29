import React, { useEffect, useState } from 'react';
import './product-carousel.css';
import Image from 'next/image';
import { getProducts } from '@/utils/strapi-cms';

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [products]);

    const progressBarWidth = ((currentProductIndex + 1) / products.length) * 100 + '%';

    return (
        <div id='product-carousel'>
            {products.map((product, index) => (
                <div key={index} className={`product-container ${index === currentProductIndex ? 'show' : ''}`} style={{ display: index === currentProductIndex ? 'block' : 'none' }}>
                    <div className={`product-bought-info ${index === currentProductIndex ? 'animate' : ''}`}>
                        <div className='product-bought-info_header'>
                            <div className='header-icon'>
                                <Image src="/images/home/hero-section/favicon.svg" width={24} height={24} />
                            </div>
                            {/* <Image src="/images/home/hero-section/dema-logomark.svg" width={64} height={18} alt='logomark' /> */}
                            <span className='logomark title-dema'>d<span>e</span>ma</span>
                        </div>
                        <div className={`product-bought-info-container ${index === currentProductIndex ? 'animate' : ''}`}>
                            <p className='product-bought-info-text'>
                                <span>Someone from </span>
                                <span className='product-bought-info-text_location'><Image src="/images/home/hero-section/location.svg" width={18} height={18} />{product.attributes.location} </span>
                                <span>bought a </span>
                                <span className='product-bought-info-text_name'>{product.attributes.productName}</span>
                            </p>
                        </div>
                    </div>
                    <div className={`product-carousel-container ${index === currentProductIndex ? 'animate' : ''}`}>
                        <img src={`http://154.53.59.178:30002${product.attributes.productImage.data.attributes.url}`} width={590} height={290} className='product-image' />
                    </div>
                    <div className={`product-carousel-points-info ${index === currentProductIndex ? 'animate' : ''}`}>
                        <div className='header-icon'>
                            <Image src="/images/home/hero-section/favicon.svg" width={24} height={24} />
                        </div>
                        <div className='product-carousel-points-container'>
                            <div className='points'>{product.attributes.points} Points</div>
                            <div className='saved-points-wrapper'>
                                <span className='text-saved'>Saved </span>
                                <span>{product.attributes.savedPercent} ({product.attributes.savedPrice})</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className='product-carousel-progress'>
                <div className='carousel-progress-number active'>
                    {currentProductIndex + 1}
                </div>
                <div className='carousel-progress'>
                    <div className='carousel-current-progress' style={{ width: progressBarWidth }}></div>
                </div>
                <div className='carousel-progress-number active'>
                    {products.length}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;
