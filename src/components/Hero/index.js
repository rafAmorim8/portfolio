import { useRef, useEffect } from 'react';
import styles from './hero.module.scss';
import { gsap, Power3 } from 'gsap';

export function Hero() {
    let content = useRef(null);

    let tl = new gsap.timeline({ delay: 0.5 });

    useEffect(() => {
        //Content vars
        let headlineFirst = content.children[0];
        let headlineSecond = headlineFirst.nextSibling;
        let headlineThird = headlineSecond.nextSibling;
        let heroButton = headlineThird.nextSibling;

        gsap.to(content, 0, { css: { visibility: 'visible' } });

        //Content animation
        tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
            y: 25,
            opacity: 0,
            ease: Power3.easeOut,
        }, .1)
            .from(heroButton, 1, { y: 25, opacity: 0, ease: Power3.easeOut }, 0.5)
    }, [tl])

    return (
        <section className={styles.heroContainer} ref={el => content = el}>
            <div className={styles.heroHello}>
                <p className={styles.heroHelloInner}>Hello, my name is Rafael</p>
            </div>
            <div className={styles.heroInfo}>
                <p className={styles.heroInfoInner}>I build stuff for the web.</p>
            </div>
            <div className={styles.heroDescription}>
                <p className={styles.heroDescriptionInner}>
                    I am a recent graduate developer who loves to work with full stack applications. I am currently looking for my first job as a developer.
                </p>
            </div>
            <a className={styles.heroButton} href="#portfolio">See my work</a>
        </section>
    )
}