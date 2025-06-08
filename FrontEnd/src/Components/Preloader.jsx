import React, { useEffect, useRef } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef();
  const lettersRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        preloaderRef.current.style.display = 'none';
      }
    });

    tl.fromTo(
      lettersRef.current,
      {
        y: 60,
        rotate: -180,
        opacity: 0
      },
      {
        y: 0,
        rotate: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'back.out(1.7)',
        stagger: 0.15
      }
    )
    .to(preloaderRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 1,
      ease: 'power2.inOut'
    });
  }, []);

  const setLetterRef = (el, idx) => {
    lettersRef.current[idx] = el;
  };

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="radial-bg" />
      <div className="goran-logo">
        {'G'.split('').map((char, i) => (
          <span key={i} ref={el => setLetterRef(el, i)}>{char}</span>
        ))}
        <span ref={el => setLetterRef(el, 1)}>o</span>
        <span ref={el => setLetterRef(el, 2)}>R</span>
        <span ref={el => setLetterRef(el, 3)}>a</span>
        <span ref={el => setLetterRef(el, 4)}>n</span>
      </div>
    </div>
  );
};

export default Preloader;

