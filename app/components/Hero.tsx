'use client';

import { useEffect, useState } from 'react';

const HIRE_ME_URL = 'https://www.freelancer.com/u/DeMit19';

const slides = [
  {
    bg: '/uploads/banner-02.png',
    text: 'I architect intelligent full-stack systems — from LLM-powered APIs and real-time backends to polished web interfaces — delivering production-grade solutions that scale to millions of users.',
  },
  {
    bg: '/uploads/banner-03.png',
    text: 'With 8+ years shipping native iOS & Android apps and deep expertise in AI integration, I build cross-platform experiences that combine native performance with the power of modern machine learning.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="hero-slider">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        >
          <div className="hero-content">
            <div style={{ maxWidth: 1140, width: '100%', margin: '0 auto', padding: '0 15px' }}>
              <div style={{ maxWidth: '66.666%' }}>
                <h1 className="big">Senior AI Full-Stack &amp; Mobile Developer</h1>
                <p style={{ marginBottom: 36 }}>{slide.text}</p>

                {/* CTA buttons — placed below text, where the eye lands after reading */}
                <div className="hero-cta-row">
                  <a
                    href={HIRE_ME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-cta-primary"
                  >
                    Hire Me
                  </a>
                  <a
                    href="#portfolio"
                    onClick={scrollToPortfolio}
                    className="hero-cta-secondary"
                  >
                    View My Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button className="slider-arrow prev" onClick={prev} aria-label="Previous slide">&#8249;</button>
      <button className="slider-arrow next" onClick={next} aria-label="Next slide">&#8250;</button>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
