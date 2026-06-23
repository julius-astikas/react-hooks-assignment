import CookieClicker from "./components/CookieClicker";
import CatFacts from "./components/CatFacts";
import Users from "./components/Users";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.app}>
      <h1>React Oppgave 2</h1>
      <p className={styles.intro}>useState() og useEffect()</p>

      <div className={styles.layout}>
        <CookieClicker />
        <CatFacts />
        <Users />
      </div>
    </main>
  );
}

export default App;
