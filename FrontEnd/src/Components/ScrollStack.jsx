import React, { useLayoutEffect, useRef, useCallback } from "react";
import Lenis from "@studio-freight/lenis"; // make sure to install: npm i @studio-freight/lenis

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div
    className={`scroll-stack-card relative w-full h-80 my-8 p-12 rounded-[40px] shadow-[0_0_30px_rgba(0,0,0,0.1)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const lastProgressRef = useRef(new Map());
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const cacheCardOffsets = useCallback(() => {
    const containerHeight = window.innerHeight;
    cardsRef.current.forEach((card) => {
      const cardTop = getElementOffset(card);
      card._triggerStart = cardTop - parsePercentage(stackPosition, containerHeight);
      card._triggerEnd = cardTop - parsePercentage(scaleEndPosition, containerHeight);
    });
  }, [getElementOffset, parsePercentage, stackPosition, scaleEndPosition]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length) return;
    const { scrollTop } = getScrollData();

    cardsRef.current.forEach((card, i) => {
      if (!card._triggerStart || !card._triggerEnd) return;

      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - card._triggerStart) / (card._triggerEnd - card._triggerStart))
      );

      const lastProgress = lastProgressRef.current.get(card) || 0;
      if (Math.abs(progress - lastProgress) < 0.01) return; // skip small changes

      const targetScale = baseScale + (cardsRef.current.length - i - 1) * itemScale;
      const scale = targetScale + (1 - targetScale) * (1 - progress);
      const rotation = rotationAmount ? i * rotationAmount * Math.sin(progress * Math.PI / 2) : 0;
      const translateY = progress > 0 ? itemStackDistance * i * progress + itemDistance * progress : 0;

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      card.style.transform = transform;
      card.style.zIndex = cardsRef.current.length - i;

      if (blurAmount > 0) {
        const blurValue = Math.min(blurAmount * progress * i, blurAmount);
        card.style.filter = blurValue > 0 ? `blur(${blurValue}px)` : "none";
      }

      lastProgressRef.current.set(card, progress);
    });
  }, [baseScale, itemDistance, itemScale, itemStackDistance, rotationAmount, blurAmount, getScrollData]);

  const setupLenis = useCallback(() => {
    const options = {
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      smoothWheel: true,
      touchMultiplier: 2.5,
      infinite: false,
      wheelMultiplier: 0.8,
      lerp: 0.08,
      syncTouch: true,
      syncTouchLerp: 0.1,
    };

    const wrapper = useWindowScroll ? window : scrollerRef.current;
    const content = useWindowScroll ? document.documentElement : scrollerRef.current.querySelector(".scroll-stack-inner");

    const lenis = new Lenis({ wrapper, content, ...options });
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      updateCardTransforms();
      rafRef.current = requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [updateCardTransforms, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = useWindowScroll
      ? Array.from(document.querySelectorAll(".scroll-stack-card"))
      : Array.from(scroller.querySelectorAll(".scroll-stack-card"));

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
    });

    cacheCardOffsets();
    setupLenis();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      cardsRef.current = [];
      lastProgressRef.current.clear();
    };
  }, [cacheCardOffsets, itemDistance, setupLenis, useWindowScroll]);

  const containerStyles = useWindowScroll
    ? { overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }
    : { overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", scrollBehavior: "smooth" };

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim();

  return (
    <div
      className={containerClassName}
      ref={scrollerRef}
      style={{
        ...containerStyles,
        perspective: "1000px",
        perspectiveOrigin: "center top",
      }}
    >
      <div className="scroll-stack-inner pt-[20vh] px-4 md:px-20 pb-[50vh] min-h-screen">
        {children}
        <div className="scroll-stack-end w-full h-[50vh]" />
      </div>
    </div>
  );
};

export default ScrollStack;
