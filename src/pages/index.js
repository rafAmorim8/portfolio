import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Loader } from '../components/Loader';

import style from '../styles/home.module.scss';

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
        <title>Raff :: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isLoading ? <Loader /> : <h1>Porfolio</h1>
      }
    </div>
  )
}
