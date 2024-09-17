import { useRef, useEffect } from 'react';

// Windows chrome browser by default has only vertical scrolling unlike Macos chrome browser.
// So we are using a function to scroll vertically over a specific container 

const useHorizontalScroll = (scrollAmount = 10) => {
  const scrollRef = useRef();

  useEffect(() => {
    const element = scrollRef.current;
    if (element) {
      const onWheel = (event) => {
        if (event.deltaY === 0) return; // Only horizontal scroll if there's vertical scroll input
        event.preventDefault();
        element.scrollTo({
          left: element.scrollLeft + event.deltaY * scrollAmount,
          behavior: 'smooth',
        });
      };

      element.addEventListener('wheel', onWheel);
      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return scrollRef;
};

export default useHorizontalScroll;
