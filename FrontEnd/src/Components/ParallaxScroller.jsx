import React from "react";
import "./ParallaxStyles.css"; // Import the CSS layer here

const sections = Array.from({ length: 12 }, (_, i) => ({
  id: `section${i + 1}`,
  imgUrl: `https://unsplash.it/1920/1920/?v=${i + 1}`,
  title: `Parallax ${i + 1}`
}));

const ParallaxScroller = () => {
  return (
    <div className="snap-y absolute inset-0 overflow-y-scroll scroll-smooth sepia-20 contrast-[1.15] [font-family:Halisa_VF] tracking-tighter [--parallax:parallax_linear]">
      {sections.map(({ id, imgUrl, title }) => (
        <div
          key={id}
          className={`w-full h-screen relative overflow-hidden [view-timeline-name:--${id}] [view-timeline-axis:block] snap-end grid place-content-center`}
        >
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover -z-10 absolute animate-[var(--parallax)] [animation-timeline:--${id}] [animation-range:entry_exit]"
          />
          <h2 className="text-[10vw] text-white mix-blend-exclusion">
            {title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ParallaxScroller;
  