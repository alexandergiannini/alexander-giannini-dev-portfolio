// Carousel.jsx
import { useRef, useState, useEffect } from "react";

export default function Carousel({ slides = [], height = 280 }) {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);
  const startRef = useRef(null); // for drag

  const clamp = (i) => Math.max(0, Math.min(i, slides.length - 1));

  const go = (i) => setIdx((cur) => clamp(typeof i === "number" ? i : cur + i));
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  // keyboard support (left/right)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  // touch/drag
  const onPointerDown = (e) => {
    startRef.current = { x: e.clientX ?? e.touches?.[0]?.clientX, moved: false };
  };
  const onPointerMove = (e) => {
    if (!startRef.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX;
    if (Math.abs(x - startRef.current.x) > 8) startRef.current.moved = true;
  };
  const onPointerUp = (e) => {
    if (!startRef.current) return;
    const x = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const delta = x - startRef.current.x;
    if (Math.abs(delta) > 40) (delta < 0 ? next() : prev());
    startRef.current = null;
  };

  return (
    <div className="carousel" style={{ "--h": `${height}px` }}>
      <button className="nav prev" onClick={prev} aria-label="Previous slide" disabled={idx === 0}>
        ‹
      </button>

      <div
        className="viewport"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onTouchStart={onPointerDown}
        onTouchMove={onPointerMove}
        onTouchEnd={onPointerUp}
      >
        <div
          ref={trackRef}
          className="track"
          style={{ transform: `translateX(${-idx * 100}%)` }}
        >
          {slides.map((s, i) => (
            <figure className="slide" key={s.title ?? i}>
              {/* Main click goes to live project */}
              <a
                className="shot"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.title} (opens in new tab)`}
              >
                <img src={s.img} alt={s.title} loading="lazy" />
              </a>

              {/* Overlay GitHub button (separate link, no nesting) */}
              {s.github && (
                <a
                  className="github-badge"
                  href={s.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open GitHub repository in new tab"
                  title="View source on GitHub"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              )}

              <figcaption className="caption">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <button className="nav next" onClick={next} aria-label="Next slide" disabled={idx === slides.length - 1}>
        ›
      </button>

      {/* Dots */}
      <div className="dots" role="tablist" aria-label="Carousel Pagination">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            className={`dot ${i === idx ? "active" : ""}`}
            aria-selected={i === idx}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
