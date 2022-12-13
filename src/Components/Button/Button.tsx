import React from 'react';

import styles from './Button.module.scss';

const Button = () => {

  const onClick = () => {
    alert('Clicked')
  };

  return (
    <button className={styles.button} onClick={onClick}>qwe</button>
  );
};

export default Button;