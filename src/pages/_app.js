import { useState, useEffect } from 'react';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';

import { Loader } from '../components/Loader';


function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2600);
  }, []);

  return (
    <div className={styles.wrapper}>
      {
        isLoading ? <Loader /> :
          <main>
            <Component {...pageProps} />
          </main>
      }
    </div>
  )
}

export default MyApp
