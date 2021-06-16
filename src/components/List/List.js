import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';

class List extends React.Component {
  render() {
    return (
   
        <section className ={styles.component}>
        <h2 className={styles.subtitle}>Just do it</h2>
        <Hero/>
        </section>
   
    );
  }
}

export default List;
