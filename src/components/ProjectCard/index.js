import styles from './projectCard.module.scss';

// import projOneImage from '../../Images/projectOneImage.jpg';
// import projTwoImage from '../../Images/projectTwoImage.jpg';
// import projThreeImage from '../../Images/projectThreeImage.jpg';

export function ProjectCard({ id, name, description, technologies, url, gitRepo }) {
  return (
    <div
      className={styles.projectCardContainer}
      style={{
        backgroundImage: `url('../../Images/projectOneImage.jpg')`,
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{technologies.map(tech => {
        return (
          <span>{tech}</span>
        )
      })}</p>
      <div className={styles.links}>
        <a href={`${gitRepo}`}>Git Repo</a>
        <a href={`${url}`}>Visit Site</a>
      </div>
    </div >
  )
}