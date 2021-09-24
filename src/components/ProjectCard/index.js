import { useRef, useEffect } from 'react';
import Image from 'next/image';

import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import GithubIcon from '../GithubIcon';
import LinkIcon from '../LinkIcon';

import styles from './projectCard.module.scss';

export function ProjectCard({ id, name, imageName, description, technologies, url, gitRepo }) {
  const card = useRef(null);
  const cardImage = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(card.current, {
      scrollTrigger: {
        trigger: card.current,
        start: "30% bottom",
      },
      y: 40,
      duration: 0.8,
      opacity: 0,
      ease: Power3.easeOut
    });

    gsap.from(cardImage.current, {
      scrollTrigger: {
        trigger: card.current,
        start: "bottom bottom",
      },
      y: 40,
      duration: 0.8,
      delay: 0.001,
      opacity: 0,
      ease: Power3.easeOut
    });
  }, []);

  return (
    <div
      className={styles.projectCardContainer}
      ref={card}
    >
      <div className={styles.projectInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul className={styles.technologies}>{technologies.map(tech => {
          return (
            <li>{tech}</li>
          )
        })}</ul>
        <div className={styles.links}>
          <a href={`${gitRepo}`}><GithubIcon /></a>
          <a href={`${url}`}><LinkIcon /></a>
        </div>
      </div>
      <div className={styles.projectImageWrapper} ref={cardImage}>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <Image className={styles.projectImage} src={imageName} priority="true" placeholder="blur" alt="Project 1" layout="fill" object-fit="cover" />
        </a>
      </div>
    </div >
  )
}