import { useState } from 'react';
import styles from './header.module.scss';

import Lottie from 'react-lottie';
import animationData from '../../../public/menuIcon.json';

export function Header() {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: true, direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    redererSettings: {
      preserveAspectRation: 'xMidYMid slice'
    }
  }

  const toggleMenu = () => {
    console.log('click');
    const reverseAnimation = -1;
    const normalAnimation = 1;

    setAnimationState({
      isStopped: false,
      direction: animationState.direction === normalAnimation ? reverseAnimation : normalAnimation,
    });
  }

  return (
    <header className={styles.headerContainer}>
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
    </header>
  );
}