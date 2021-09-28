import { useState, useRef, useEffect } from 'react';
import styles from './header.module.scss';
import { gsap, Power3 } from 'gsap';

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

    document.getElementById("menu").classList.toggle("active");
  }

  useEffect(() => {
    gsap.to(header, 0, { css: { visibility: 'visible' } });

    gsap.from(header, 1, { y: 10, opacity: 0, ease: Power3.easeOut });
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
        <ul className={styles.navList} id="menu">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}