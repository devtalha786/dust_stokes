import React, { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import LoadingBar from 'react-top-loading-bar';

const ScrollLoadingBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = throttle(() => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - windowHeight;
    const currentScroll = window.scrollY;

    const progress = (currentScroll / scrollHeight) * 100;
    setScrollProgress(progress);
  }, 100); // Adjust the throttle interval as needed

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return  <LoadingBar
  progress={scrollProgress}
  color="#E8D682" // Change the color to your desired color
  height={5} // Change the height to your desired height in pixels
/>;
};

export default ScrollLoadingBar;