import styles from './App.module.css';
import AppHeader from './components/AppHeader';
import GameLayout from './components/GameLayout';

function App() {
  return (
    <div className={styles.mainContainer}>
      <AppHeader />
      <GameLayout />
    </div>
  );
}

export default App;
