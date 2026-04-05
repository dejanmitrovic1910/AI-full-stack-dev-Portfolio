'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div className="copyrights">
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 15px' }}>
          <p>All Rights Reserved. &copy; 2024 <a href="#">Dejan Mitrovic</a></p>
        </div>
      </div>

      <button
        className={`scroll-top-btn${visible ? ' visible' : ''}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        &#8679;
      </button>
    </>
  );
}
