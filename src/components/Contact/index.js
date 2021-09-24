import styles from './contact.module.scss';

export function Contact() {
  return (
    <section className={styles.contactContainer} id="contact">
      <h1>Contact Me</h1>
      <p>I am currently looking for a new job opportunity. Feel free to contact me and I will answer you as fast as I can.</p>
      <a className={styles.contactButton} href="http://www.google.com">Email me</a>
    </section>
  );
}