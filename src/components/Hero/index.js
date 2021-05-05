import styles from './hero.module.scss';

export function Hero(){
    return (
        <div className={styles.heroContainer}>
            <p className="head-hello">Hello, my name is</p>
            <p className="head-name">Rafael Amorim</p>
            <p className="head-description">
          I am a Computer Science student that wants to become a software
          developer.
            </p>
            <button className="btn"><a href="#portfolio">See my Work</a>
        </button>
        </div>
    )        
}