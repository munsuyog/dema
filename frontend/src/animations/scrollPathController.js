import { useRef, useEffect } from 'react';

class ScrollPathController {
    constructor(scrollContainer) {
        this.scrollContainer = scrollContainer;

        this.path = scrollContainer.querySelector('.scrollPath');
        this.offset = this.path.getAttribute('offset') ?? 0;

        this.elements = scrollContainer.querySelectorAll('[fadeOnScroll]');
        this.pathLength = this.initializePath();

        // Bind methods
        this.scrollContainerCallback = this.scrollContainerCallback.bind(this);
        this.updatePathOnScroll = this.updatePathOnScroll.bind(this);

        // Setup Intersection Observer for scroll container
        this.scrollObserver = new IntersectionObserver(
            this.scrollContainerCallback,
            { root: null, rootMargin: '-9%', threshold: [0.01] }
        );

        this.scrollObserver.observe(this.scrollContainer.parentNode);
    }

    initializePath() {
        let path = this.path;
        let dashArray = !path.hasAttribute('pathLength')
            ? (function () {
                path.setAttribute(
                    'pathLength',
                    Math.ceil(path.getTotalLength())
                );
                return Math.ceil(path.getTotalLength());
            })()
            : path.getAttribute('pathLength');

        path.style.strokeDasharray = dashArray;
        path.style.strokeDashoffset = dashArray;

        this.elements.forEach((element) => {
            element.style.opacity = 0;
            element.classList.add('opacityTransition');
        });
        return path.getAttribute('pathLength');
    }

    calculateDynamicHeight() {
        if (!this.path) {
            console.error("Path element not found. Skipping dynamic height calculation.");
            return;
        }
    
        this.svgHeight = this.path.getBoundingClientRect().height;
        if (this.svgHeight >= window.innerHeight) {
            this.scrollContainer.parentNode.style.height =
                this.svgHeight * 3 + 'px';
        } else {
            const dynamicHeight = this.svgHeight * 3;
            this.scrollContainer.parentNode.style.height = dynamicHeight + 'px';
        }
    }
    

    scrollContainerCallback(entries) {
        entries.forEach((entry) => {
            this.calculateDynamicHeight();
            this.scrollContainer.classList.toggle(
                'active',
                entry.isIntersecting
            );
        });
    }

    updatePathOnScroll() {
        if (this.scrollContainer.classList.contains('active')) {
            let scrollPercentage =
                (this.scrollContainer.scrollTop - this.scrollContainer.parentNode.offsetTop) /
                (this.scrollContainer.parentNode.scrollHeight -
                    window.innerHeight);

            // Ensure scrollPercentage is within the valid range [0, 1]
            let scrollPos = Math.max(0, Math.min(1, scrollPercentage));

            if (scrollPercentage < 1.5 && scrollPercentage > -0.01) {
                let drawLength = this.pathLength * scrollPercentage * 1;
                this.path.style.strokeDashoffset = this.pathLength - drawLength;
            }

            if (
                scrollPos >
                parseFloat(this.path.getAttribute('stay')) + parseFloat(this.offset)
            ) {
                let position =
                    (Math.ceil(scrollPos * 100) -
                        parseFloat(this.path.getAttribute('stay')) * 100) *
                    -1 *
                    parseFloat(this.path.getAttribute('speed'));

                this.scrollContainer.style.top =
                    position + parseFloat(this.offset) * 100 + '%';
            } else {
                this.scrollContainer.style.top = parseFloat(this.offset) * 100 + '%';
            }

            // Implement additional logic for fading in elements based on scroll path length
            // fade in Element
            this.elements.forEach((element) => {
                if (
                    parseFloat(element.getAttribute('threshhold')) <
                    scrollPercentage * 0.75
                ) {
                    element.style.opacity = 1;
                } else {
                    element.style.opacity = 0;
                }
            });
        }

        // Add other methods and logic as needed
    }
}

const useScrollPathController = (scrollContainerRef) => {
    useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;
  
      const controller = new ScrollPathController(scrollContainer);
  
      const updatePathOnScroll = () => {
        controller.updatePathOnScroll();
      };
  
      // Use scroll event listener on the scrollContainer
      scrollContainer.addEventListener('scroll', updatePathOnScroll);
      window.addEventListener('resize', controller.calculateDynamicHeight);
  
      return () => {
        // Remove event listeners when component unmounts
        scrollContainer.removeEventListener('scroll', updatePathOnScroll);
        window.removeEventListener('resize', controller.calculateDynamicHeight);
        controller.scrollObserver.disconnect();
      };
    }, [scrollContainerRef]);
  };
  

export default useScrollPathController;
