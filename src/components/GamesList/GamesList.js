import React from 'react';
import H2 from '../H2/H2';
import H3 from '../H3/H3';
import Button from '../Button/Button';
import gameFrame from '../../images/game-frame.svg';
import styles from './GameList.module.css';

function GamesList() {
  return (
    <div className={styles.mainWrapper}>
      <H2 text="PLAYTHEM Games" />
      <p className={styles.text}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident
      </p>
      <ul className={styles.ul}>
        <li>
          <img src={gameFrame} alt="gameFrame" className={styles.frame} />
          <H3 text="PLAYTHEM Games" />
          <Button text="Preview game" highlight width="184" />
        </li>
        <li>
          <img src={gameFrame} alt="gameFrame" className={styles.frame} />
          <H3 text="PLAYTHEM Games" />
          <Button text="Preview game" width="184" />
        </li>
        <li>
          <img src={gameFrame} alt="gameFrame" className={styles.frame} />
          <H3 text="PLAYTHEM Games" />
          <Button text="Preview game" width="184" />
        </li>
        <li>
          <img src={gameFrame} alt="gameFrame" className={styles.frame} />
          <H3 text="PLAYTHEM Games" />
          <Button text="Preview game" width="184" />
        </li>
      </ul>
    </div>
  );
}

export default GamesList;
