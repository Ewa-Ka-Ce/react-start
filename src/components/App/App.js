import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
        <main className ={styles.component}>
          <h1 className={styles.title}>Done is better than perfect</h1>
          <h2 className={styles.subtitle}>Let's get it done</h2>
          <List title={['Things to do ', <sup>soon!</sup>]}
          imageSource='images/space.png'
          children={<p>I'm planning on doing all these things sooner, rather than later!</p>}
          >
          </List>
        </main>
    )
  }
}

export default App;
