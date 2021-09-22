import { useEffect, useRef } from 'react';

import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Data from '../../projectsInfo.json';

import { ProjectCard } from '../ProjectCard';

import styles from './projects.module.scss';


export function Projects() {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "bottom bottom",
      },
      y: 30,
      duration: 1.2,
      opacity: 0,
      ease: Power3.easeOut
    });
  }, []);
  return (
    <section className={styles.projectsContainer}>
      <h1 ref={ref}>Projects</h1>
      <div className={styles.projectsWrapper}>
        {Data.map(project => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              url={project.url}
              gitRepo={project.gitRepo}
              imageName={project.imageName}
            />
          )
        })}
      </div>
    </section>
  );
}