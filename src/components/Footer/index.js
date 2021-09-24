import GithubIcon from '../GithubIcon';
import LinkedinIcon from '../LinkedinIcon';
import CodepenIcon from '../CodepenIcon';

import styles from './footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialLinks}>
        <a href="https://github.com/rafAmorim8"><GithubIcon /></a>
        <a href="https://www.linkedin.com/in/rafael-manacero-amorim/"><LinkedinIcon /></a>
        <a className={styles.codepenIcon} href="https://codepen.io/RafAmorim"><CodepenIcon /></a>
      </div>
      <a className={styles.sourceCodeLink} href="https://github.com/rafAmorim8/portfolio">Developed by Rafael Amorim</a>
    </footer>
  );
}