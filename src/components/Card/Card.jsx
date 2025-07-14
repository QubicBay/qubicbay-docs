import React from 'react';

import styles from './Card.module.css';

const Card = ({ imageUrl }) => {
  return (
    
      <div className={styles.card}>
        <img className={styles.cardImage} src={imageUrl}/>
      </div>
  );
};

export default Card;