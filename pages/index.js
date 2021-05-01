import Head from 'next/head';
import { useState, useEffect } from 'react';
import Loader from '../src/components/Loader';

import style from '../src/styles/home.module.scss';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2600);
  }, []);

  return (
    <div className={style.homeContainer}>
      <Head>
        <title>Raff Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isLoading ? <Loader /> : <h1>Porfolio</h1>
      }
    </div>
  )
}
