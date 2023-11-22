import logo from './logo.svg';
import './App.css';
import styles from "./App.module.css";
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <div className={styles.app}>
      <h1>Hnaif</h1>
      <SearchBar/>
    </div>
  );
}

export default App;
