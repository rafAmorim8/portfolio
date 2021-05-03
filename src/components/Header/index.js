import { useState } from 'react';
import styles from './header.module.scss';

import Lottie from 'react-lottie';
import animationData from '../../../public/menuIcon.json';

export function Header() {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: true
  });

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    redererSettings: {
      preserveAspectRation: 'xMidYMid slice'
    }
  }

  const toggleMenu = () => {
    setAnimationState(() => {
      !isPaused;
      !isStopped;
    });
  }

  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>Raff</a>
        <button className={styles.menuIcon} type="button">
          <Lottie
            className={styles.hamburguerIcon}
            options={defaultOptions}
            height={70}
            width={70}
            isStopped={animationState.isStopped}
            isPause={animationState.isPaused}
            onClick={toggleMenu}
          />
        </button>
      </nav>
    </header>
  );
}