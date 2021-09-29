import { useEffect, useRef } from 'react';

import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from './about.module.scss';


export function About() {
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
      stagger: 0.1,
      ease: Power3.easeOut
    });
  }, []);

  return (
    <section className={styles.aboutContainer} id="about" ref={ref}>
      <h1>About Me</h1>
      <p>
        Hi! I am Rafael, a developer that lives in Vancouver, who loves building stuff for the web.<br /><br />
        I recently graduated from a 2-year Diploma in Computer Studies at <a className="animatedLink" href="http://www.langara.ca">Langara
          College</a>. During the course I developed
        some websites and web apps to apply the concepts
        I've learnt in class.<br /><br />
        I am currently looking for a junior developer position to gain more practical experience by building well developed
        apps
        while working with other developers. <br /><br />
        Below are some of the languages and tools that I have worked with:
      </p>
      <ul className="technologies">
        <li>HTML &amp; CSS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Git</li>
        <li>React</li>
        <li>Java (begginer)</li>
        <li>Node.js</li>
        <li>PHP</li>
        <li>mongoDB</li>
      </ul>
      <a className={styles.aboutButton} href="/resume.pdf"
        rel="noopener noreferrer">Resume</a>
    </section>
  );
}