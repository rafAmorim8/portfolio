import Head from 'next/head';

import {Hero} from '../components/Hero';

import style from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <Head>
        <title>Raff :: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}
