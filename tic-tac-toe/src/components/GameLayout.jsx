import Square from './Square';
import styles from './GameLayout.module.css';

const GameLayout = () => {
  return (
    <div className={styles.gameLayout}>
      <div>{Array(3).fill(<Square />)}</div>
      <div>{Array(3).fill(<Square />)}</div>
      <div>{Array(3).fill(<Square />)}</div>
    </div>
  );
};

export default GameLayout;
