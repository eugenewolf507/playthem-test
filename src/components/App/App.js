// import './App.css';
import styles from './App.module.css';
import FirstScreen from '../FirstScreen/FirstScreen';
import LogosStack from '../LogosStack/LogosStack';
import GameList from '../GamesList/GamesList';

function App() {
  return (
    <div className="App">
      <FirstScreen />
      <div className={styles.mainWrapper}>
        <LogosStack />
        <GameList />
      </div>
    </div>
  );
}

export default App;
