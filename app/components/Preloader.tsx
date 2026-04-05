'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div id="preloader">
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
