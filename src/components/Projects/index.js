import styles from './projects.module.scss';
import Data from '../../projectsInfo.json';
import { ProjectCard } from '../ProjectCard';

export function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <h1>Projects</h1>
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