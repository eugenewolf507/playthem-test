import React from 'react';
import styles from './Button.module.css';

function Button({
  text,
  highlight = false,
  type = 'button',
  height = 51,
  width = 215,
}) {
  const wrpStyles = [styles.btnWrapper];
  const btnStyles = [styles.button];
  if (highlight) {
    wrpStyles.push(styles.shadow);
    btnStyles.push(styles.highlight);
  }
  return (
    <div className={wrpStyles.join(' ')}>
      <button
        type={type}
        style={{ height: +height, width: +width }}
        className={btnStyles.join(' ')}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
