import { useState } from 'react';
import style from '../../styles/loader.module.scss';

import Lottie from 'react-lottie';
import animationData from '../../../public/loader.json';

export default function Loader() {
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  });

  const defaultOoptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    redererSettings: {
      preserveAspectRation: 'xMidYMid slice'
    }
  }

  return (
    <div className={style.loaderContainer}>
      <Lottie
        options={defaultOoptions}
        height={150}
        width={150}
        isStopped={animationState.isStopped}
        isPause={animationState.isPaused}
      />
    </div>
  );
}