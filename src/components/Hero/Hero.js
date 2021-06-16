import React from 'react';
import styles from './Hero.scss';


const Hero = () => (
        <header className ={styles.component}>
          <h2 className={styles.title}>Do it now</h2>
          <img classNames={styles.images} src="images/space.png"/>
        </header>
    );


export default Hero;
