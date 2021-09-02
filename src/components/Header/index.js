import { useState, useRef, useEffect } from 'react';
import styles from './header.module.scss';
import { TweenMax, Power3 } from 'gsap';

import Lottie from 'react-lottie';
import animationData from '../../../public/menuIcon.json';

export function Header() {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: true, direction: -1,
  });
  let header = useRef(null);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    redererSettings: {
      preserveAspectRation: 'xMidYMid slice'
    }
  }

  const toggleMenu = () => {
    const reverseAnimation = -1;
    const normalAnimation = 1;

    setAnimationState({
      isStopped: false,
      direction: animationState.direction === normalAnimation ? reverseAnimation : normalAnimation,
    });
  }

  useEffect(() => {
    TweenMax.to(header, 0, { css: { visibility: 'visible' } });

    TweenMax.from(header, 1, { y: 10, opacity: 0, ease: Power3.easeOut });
  }, []);

  return (
    <header className={styles.headerContainer} ref={el => header = el}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>Raff</a>
        <button className={styles.menuButton} type="button" onClick={toggleMenu}>
          <div className={styles.animation}>
            <Lottie
              options={defaultOptions}
              height={50}
              width={50}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          </div>
        </button>
      </nav>
      <ul className={styles.menuDropdown}>
        <li><a href="#home" onclick="uncheck()">Home</a></li>
        <li><a href="#about" onclick="uncheck()">About</a></li>
        <li><a href="#portfolio" onclick="uncheck()">Portfolio</a></li>
        <li><a href="#contact" onclick="uncheck()">Contact</a></li>
      </ul>
    </header>
  );
}