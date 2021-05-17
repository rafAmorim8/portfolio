import styles from './hero.module.scss';

export function Hero() {
    return (
        <div className={styles.heroContainer}>
            <p className={styles.heroHello}>Hello, my name is Rafael</p>
            <p className={styles.heroInfo}>I build stuff for the web.</p>
            <p className={styles.heroDescription}>
                I am a recent graduate developer who loves to work with full stack applications.
            </p>
            <button className={styles.heroButton}><a href="#portfolio">see my work</a>
            </button>
        </div>
    )
}