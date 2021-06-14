import React from 'react';
import styles from './H3.module.css';

function H3({ text }) {
  return <h3 className={styles.h3}>{text}</h3>;
}

export default H3;
