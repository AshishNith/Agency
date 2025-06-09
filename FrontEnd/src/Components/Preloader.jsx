import React, { useEffect, useRef, useState } from 'react';
import './Preloader.css';
import gsap from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef();
  const lettersRef = useRef([]);
  const circleRef = useRef();
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setShowCircle(true); // Show circle after text animates
        setTimeout(() => {
          preloaderRef.current.style.display = 'none';
        }, 1800); // wait a bit after circle appears
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
    );
  }, []);

  const setLetterRef = (el, idx) => {
    lettersRef.current[idx] = el;
  };

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="radial-bg" />
      <div className={`goran-wrapper ${showCircle ? 'with-glow' : ''}`} ref={circleRef}>
        <div className="goran-logo">
          {'GoRan'.split('').map((char, i) => (
            <span key={i} ref={el => setLetterRef(el, i)}>{char}</span>
          ))}
        </div>
        {showCircle && <div className="glow-circle" />}
      </div>
    </div>
  );
};

export default Preloader;