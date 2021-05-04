import Head from 'next/head';
import { useState, useEffect } from 'react';


import style from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <Head>
        <title>Raff :: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
