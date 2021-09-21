import Image from 'next/image';

import styles from './projectCard.module.scss';
import GithubIcon from '../GithubIcon';
import LinkIcon from '../LinkIcon';

export function ProjectCard({ id, name, imageName, description, technologies, url, gitRepo }) {

  return (
    <div
      className={styles.projectCardContainer}
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
      <div className={styles.projectImageWrapper}>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          <Image className={styles.projectImage} src="/projectOneImage.jpg" alt="Project 1" layout="fill" object-fit="cover" />
        </a>
      </div>
    </div >
  )
}