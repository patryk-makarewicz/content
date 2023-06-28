import { useEffect, useState } from 'react';

const getWindowWidth = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
