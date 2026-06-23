import { useEffect, useState } from "react";
import styles from "../App.module.css";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchCatFacts() {
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");

        if (!response.ok) {
          throw new Error("Something went wrong while fetching cat facts.");
        }

        const data = await response.json();
        setFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCatFacts();
  }, []);

  return (
    <section className={styles.card}>
      <h2>Cat Facts</h2>

      {loading && <p>Loading cat facts...</p>}

      {error && <p className={styles.error}>{error}</p>}

      {!loading && !error && (
        <ul className={styles.list}>
          {facts.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CatFacts;
