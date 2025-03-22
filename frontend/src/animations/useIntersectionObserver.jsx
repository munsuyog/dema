import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, { once = false, ...options } = {}) => {
    const targetRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    entry.target.classList.remove('inactive');
                    callback(entry.target);
                    
                    // If once is true, disconnect the observer after the first intersection
                    if (once) {
                        observer.disconnect();
                    }
                } else {
                    entry.target.classList.add('inactive');
                    entry.target.classList.remove('active');
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [callback, once, options]);

    return targetRef;
};

export default useIntersectionObserver;
