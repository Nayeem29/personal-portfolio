import React, { useEffect, useState } from 'react';

const ScrollTop = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false);
      }
    })
  }, [])
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div>
      {
        scrollToTop && (
          <button style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px'
          }}
            onClick={scrollUp}
          >
            <i className='fa fa-arrow-up'></i>
          </button>
        )
      }
    </div>
  );
};

export default ScrollTop;