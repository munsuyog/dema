import React, { useEffect, useState } from 'react';
import './items-section.css';

const ItemsSection = () => {
    const [itemIndex, setItemIndex] = useState(0); // State to track the current item index
    const [itemText, setItemText] = useState(null); // State to track the current item text

    const items = [
        "Electronics",
        "Home & Kitchen",
        "Beauty & Personal Care",
        "Books",
        "Toys & Games",
        ">100M Items"
    ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Increment the index and wrap around if it exceeds the array length
            setItemIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000);

        // Clear the timeout to avoid memory leaks
        return () => clearTimeout(timeoutId);
    }, [itemIndex, items.length]); // Trigger effect when itemIndex or items.length changes

    useEffect(() => {
        // Set the itemText to the current item when itemIndex changes
        setItemText(items[itemIndex]);

        // Clear the itemText after 2 seconds to trigger the animation again
        const textTimeoutId = setTimeout(() => {
            setItemText(null);
        }, 2000);

        return () => clearTimeout(textTimeoutId);
    }, [itemIndex, items]);

    return (
        <section id='items-section'>
            <div className='items-section section-padding fixed-width'>
                <div className='items-wrapper'>
                    <img src="/images/home/items-section/heart.svg" width={567} height={524} className='heart-image' />
                    <img src="/images/home/items-section/flower01.svg" width={42} height={42} className='flower-1' />
                    <img src="/images/home/items-section/flower02.svg" width={40} height={40} className='flower-2' />
                    <div className='items-image-wrapper'>
                        <video src="/images/home/items-section/items-section.mp4" autoPlay muted loop playsInline preload height={485} className='items-image'></video>
                    </div>
                    <div>
                        <div className='items-insights'>
                            <span className={itemText ? 'fade-in' : ''} style={{fontSize: itemIndex == items.length - 1 ? 48 : 28}} key={itemIndex}>{itemText}</span> {/* Apply fade-in class when itemText is not null */}
                            <div className='top-line'></div>
                            <div className='bottom-line'></div>
                            <div className='circle-top-left'></div>
                            <div className='circle-top-right'></div>
                            <div className='circle-bottom-left'></div>
                            <div className='circle-bottom-right'></div>
                            <img src="/images/home/items-section/vector01.svg" width={26} height={30} className='vector' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemsSection;
