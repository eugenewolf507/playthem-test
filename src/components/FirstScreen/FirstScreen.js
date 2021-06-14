import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import H1 from '../H1/H1';
import styles from './FirstScreen.module.css';

function FirstScreen() {
  return (
    <div className={styles.background}>
      <div className={styles.mainWrapper}>
        <header className={styles.header}>
          <img src={logo} alt="Playthem logo" className={styles.logo} />
          <div className={styles.navigation}>
            <Navigation />
          </div>
        </header>
        <H1 text="Some start text" />
        <p className={styles.text}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident
        </p>
        <div className={styles.btnWrapper}>
          <Button text="get Started now" highlight />
          <Button text="Watch video" />
        </div>
      </div>
    </div>
  );
}

export default FirstScreen;
