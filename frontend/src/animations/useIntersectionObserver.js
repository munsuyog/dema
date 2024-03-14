import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
    const targetRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef.current) {
                const targetElement = targetRef.current;
                if (isElementInViewport(targetElement)) {
                    targetElement.classList.add('active');
                    targetElement.classList.remove('inactive');
                    callback(targetElement);
                } else {
                    targetElement.classList.add('inactive');
                    targetElement.classList.remove('active');
                }
            }
        };

        // Initial check on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);

    return targetRef;
};

// Helper function to check if an element is in the viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

export default useIntersectionObserver;
