import styles from './Square.module.css';
import { useState } from 'react';

const Square = () => {
  const [cross, setCross] = useState(true);
  const [content, setContent] = useState('');
  const buttonClick = () => {
    setCross(!cross);
    setContent(cross ? 'X' : 'O');
  };
  return (
    <div className={styles.square}>
      <button onClick={buttonClick}>{content}</button>
    </div>
  );
};

export default Square;
