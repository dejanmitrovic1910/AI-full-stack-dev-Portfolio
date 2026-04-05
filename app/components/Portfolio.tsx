"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "ai" | "mobile" | "frontend" | "backend";

const projects = [
  {
    id: 1,
    img: "/images/portfolio/1_Game_APP.png",
    w: 414,
    h: 705,
    title: "Game App (Android_IOS)",
    desc: "iOS+Android app that allows people to manage their video game backlog and/or wish list and share a view of them with their friends.",
    cats: ["mobile", "frontend"] as Category[],
  },
  {
    id: 2,
    img: "/images/portfolio/2_dating_app.png",
    w: 1080,
    h: 1025,
    title: "Dating App",
    desc: "",
    cats: ["mobile", "backend", "frontend"] as Category[],
  },
  {
    id: 13,
    img: "/images/portfolio/13.AI_Dating_Mobile_Web.jpg",
    w: 808,
    h: 632,
    title: "AI Dating — Mobile & Web",
    desc: "AI-powered matchmaking platform with smart compatibility scoring, NLP conversation starters, and cross-platform (iOS, Android, Web) delivery.",
    cats: ["ai", "mobile", "frontend"] as Category[],
  },
  {
    id: 14,
    img: "/images/portfolio/14.AI_Nutrition_&_Calorie_Tracking_App.png",
    w: 805,
    h: 632,
    title: "AI Nutrition & Calorie Tracker",
    desc: "LLM-driven nutrition coach that analyses meals from photos, tracks macros, and delivers personalised dietary recommendations in real time.",
    cats: ["ai", "mobile"] as Category[],
  },
  {
    id: 15,
    img: "/images/portfolio/15.AI_Video_generator.png",
    w: 1536,
    h: 1024,
    title: "AI Video Generator",
    desc: "Full-stack AI video generation platform using diffusion models and LLM script generation — from prompt to polished video in minutes.",
    cats: ["ai", "frontend", "backend"] as Category[],
  },
  {
    id: 16,
    img: "/images/portfolio/16.Ecommerce_fashion_app.png",
    w: 1536,
    h: 1024,
    title: "AI Fashion Ecommerce App",
    desc: "AI-powered fashion ecommerce with virtual try-on, personalised style recommendations, and a scalable Next.js + Node.js backend.",
    cats: ["ai", "frontend", "mobile"] as Category[],
  },
  {
    id: 17,
    img: "/images/portfolio/17.Smart_AI_Plant%20_Identifier%20.png",
    w: 1055,
    h: 680,
    title: "Smart AI Plant Identifier",
    desc: "On-device ML app that identifies plants from photos, diagnoses diseases, and provides care guides — built with Swift and CoreML.",
    cats: ["ai", "mobile"] as Category[],
  },
  {
    id: 3,
    img: "/images/portfolio/3_oohhsito.jpg",
    w: 1080,
    h: 913,
    title: "Online food order - Zomoto, Uber-Eat",
    desc: "Online Food Order:-Clone:-Zomoto, Uber-Eat, Food-Hunter, Swiggy, Takeaway",
    cats: ["mobile", "backend"] as Category[],
  },
  {
    id: 4,
    img: "/images/portfolio/4_ecommerce_app.png",
    w: 1080,
    h: 755,
    title: "Ecommerce App",
    desc: "",
    cats: ["frontend", "mobile"] as Category[],
  },
  {
    id: 5,
    img: "/images/portfolio/5_music_app.png",
    w: 1080,
    h: 755,
    title: "Music App",
    desc: "",
    cats: ["mobile", "backend"] as Category[],
  },
  {
    id: 6,
    img: "/images/portfolio/6_demand_home_service_application.jpg",
    w: 1080,
    h: 826,
    title: "On-Demand Home Service Application",
    desc: "Handyman Android and IOS",
    cats: ["backend", "mobile"] as Category[],
  },
  {
    id: 7,
    img: "/images/portfolio/7_ecommerce_service_app-4.png",
    w: 1080,
    h: 810,
    title: "Ecommerce, Auction, Classified apps",
    desc: "",
    cats: ["backend", "mobile"] as Category[],
  },
  {
    id: 8,
    img: "/images/portfolio/8_jonnyonit.jpg",
    w: 696,
    h: 644,
    title: "On Demand-Home Service App",
    desc: "",
    cats: ["backend", "mobile"] as Category[],
  },
  {
    id: 9,
    img: "/images/portfolio/9_quiz.png",
    w: 1080,
    h: 1888,
    title: "Quiz App",
    desc: "",
    cats: ["mobile", "backend", "frontend"] as Category[],
  },
  {
    id: 10,
    img: "/images/portfolio/10_food_ordering.jpg",
    w: 1080,
    h: 826,
    title: "Food Ordering Application",
    desc: "",
    cats: ["mobile", "backend", "frontend"] as Category[],
  },
  {
    id: 11,
    img: "/images/portfolio/11_ecommerce_app_design.png",
    w: 1080,
    h: 810,
    title: "Ecommerce App Design",
    desc: "",
    cats: ["mobile", "backend", "frontend"] as Category[],
  },
  {
    id: 12,
    img: "/images/portfolio/12_parking_app.png",
    w: 1080,
    h: 583,
    title: "Parking App Design & Development",
    desc: "",
    cats: ["backend", "mobile"] as Category[],
  },
];

const filters: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "AI Projects", value: "ai" },
  { label: "Mobile Development", value: "mobile" },
  { label: "Frontend Development", value: "frontend" },
  { label: "Backend Development", value: "backend" },
];

const GAP = 30;

function calcPositions(
  items: typeof projects,
  containerWidth: number,
  cols: number,
) {
  if (containerWidth <= 0)
    return {
      positions: [] as { x: number; y: number; width: number }[],
      totalHeight: 0,
    };
  const colWidth = (containerWidth - GAP * (cols - 1)) / cols;
  const colHeights = Array(cols).fill(0);
  const positions: { x: number; y: number; width: number }[] = [];

  items.forEach((item) => {
    const imgHeight = Math.round((item.h / item.w) * colWidth);
    const col = colHeights.indexOf(Math.min(...colHeights));
    positions.push({
      x: col * (colWidth + GAP),
      y: colHeights[col],
      width: colWidth,
    });
    colHeights[col] += imgHeight + GAP;
  });

  return { positions, totalHeight: Math.max(...colHeights) };
}

export default function Portfolio() {
  const [active, setActive] = useState<Category>("all");
  const [containerWidth, setContainerWidth] = useState(0);
  const [lightbox, setLightbox] = useState<{
    img: string;
    title: string;
    w: number;
    h: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slider state
  const [sliderOffset, setSliderOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const sliderViewRef = useRef<HTMLDivElement>(null);
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startOffset: number } | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  // Lightbox key handler + body lock
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

  // Masonry container resize observer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.offsetWidth);
    const ro = new ResizeObserver((entries) =>
      setContainerWidth(entries[0].contentRect.width),
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Measure slider max offset
  const measureSlider = useCallback(() => {
    const view = sliderViewRef.current;
    const track = sliderTrackRef.current;
    if (!view || !track) return;
    const max = Math.max(0, track.scrollWidth - view.clientWidth);
    setMaxOffset(max);
    setSliderOffset((o) => Math.min(o, max));
  }, []);

  useEffect(() => {
    measureSlider();
    window.addEventListener("resize", measureSlider);
    return () => window.removeEventListener("resize", measureSlider);
  }, [measureSlider, containerWidth]);

  const clamp = useCallback(
    (val: number, max: number) => Math.max(0, Math.min(val, max)),
    [],
  );

  // Drag handlers
  const onDragStart = (clientX: number) => {
    dragRef.current = { startX: clientX, startOffset: sliderOffset };
  };
  const onDragMove = (clientX: number) => {
    if (!dragRef.current) return;
    const diff = dragRef.current.startX - clientX;
    setSliderOffset(clamp(dragRef.current.startOffset + diff, maxOffset));
  };
  const onDragEnd = () => {
    dragRef.current = null;
  };

  const cols = containerWidth < 576 ? 1 : containerWidth < 992 ? 2 : 3;
  const visible = projects.filter(
    (p) => active === "all" || p.cats.includes(active),
  );
  const { positions, totalHeight } = calcPositions(
    visible,
    containerWidth,
    cols,
  );

  return (
    <div id="portfolio" className="section lb">
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 15px" }}>
        <div className="section-title" style={{ textAlign: "center" }}>
          <h3>My recent works</h3>
        </div>

        {/* Category carousel */}
        <div className="gallery-menu">
          {/* Prev arrow — before All */}
          <button
            className="cat-nav-btn"
            onClick={() => setSliderOffset((o) => clamp(o - 160, maxOffset))}
            disabled={sliderOffset <= 0}
            aria-label="Previous categories"
          >
            &#8249;
          </button>

          {/* Fixed "All" button — never scrolls */}
          <button
            className={`filter-btn${active === "all" ? " active" : ""}`}
            onClick={() => setActive("all")}
          >
            All
          </button>

          {/* Scrollable viewport */}
          <div ref={sliderViewRef} className="cat-slider-view">
            <div
              ref={sliderTrackRef}
              className="cat-slider-track"
              style={{ transform: `translateX(${-sliderOffset}px)` }}
              onMouseDown={(e) => onDragStart(e.clientX)}
              onMouseMove={(e) => {
                if (dragRef.current) onDragMove(e.clientX);
              }}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
              onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => {
                if (dragRef.current) onDragMove(e.touches[0].clientX);
              }}
              onTouchEnd={onDragEnd}
            >
              {filters.slice(1).map((f) => (
                <button
                  key={f.value}
                  className={`filter-btn${active === f.value ? " active" : ""}`}
                  onClick={() => setActive(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            className="cat-nav-btn"
            onClick={() => setSliderOffset((o) => clamp(o + 160, maxOffset))}
            disabled={maxOffset === 0 || sliderOffset >= maxOffset}
            aria-label="Next categories"
          >
            &#8250;
          </button>
        </div>

        {/* Masonry grid with position animation */}
        <div
          ref={containerRef}
          style={{ position: "relative", height: totalHeight, minHeight: 100 }}
        >
          <AnimatePresence>
            {containerWidth > 0 &&
              visible.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    x: positions[i]?.x ?? 0,
                    y: positions[i]?.y ?? 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
                  style={{
                    position: "absolute",
                    width: positions[i]?.width ?? "auto",
                  }}
                >
                  <div className="gallery-single">
                    <Image
                      src={p.img}
                      alt={p.title}
                      width={p.w}
                      height={p.h}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                    <div className="text-hover">
                      <h3>{p.title}</h3>
                      {p.desc && <h4>{p.desc}</h4>}
                    </div>
                    <div className="img-overlay">
                      <button
                        onClick={() =>
                          setLightbox({
                            img: p.img,
                            title: p.title,
                            w: p.w,
                            h: p.h,
                          })
                        }
                        className="hoverbutton"
                        aria-label={`View ${p.title}`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: 22, height: 22 }}
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.88)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
            >
              <Image
                src={lightbox.img}
                alt={lightbox.title}
                width={lightbox.w}
                height={lightbox.h}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                  width: "auto",
                  height: "auto",
                  display: "block",
                }}
                priority
              />
              <button
                onClick={closeLightbox}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#faad3b",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: 20,
                  lineHeight: 1,
                }}
              >
                &#215;
              </button>
              {lightbox.title && (
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    padding: "8px 14px",
                    fontSize: 14,
                  }}
                >
                  {lightbox.title}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
