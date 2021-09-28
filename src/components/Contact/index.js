import { useEffect, useRef } from 'react';

import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from './contact.module.scss';

export function Contact() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "30% bottom",
      },
      y: 30,
      duration: 2,
      opacity: 0,
      ease: Power3.easeOut
    });
  }, []);

  return (
    <section className={styles.contactContainer} id="contact" ref={ref}>
      <h1>Contact Me</h1>
      <p>I am currently looking for a new job opportunity. Feel free to contact me and I will answer you as fast as I can.</p>
      <a className={styles.contactButton} href="mailto:raffcode@gmail.com?cc=rafael_amorim30@hotmail.com?subject=Contact from portfolio website">Email me</a>
    </section>
  );
}