import { useState } from "react";
import styles from "../App.module.css";

function CookieClicker() {
  const [points, setPoints] = useState(0);

  function handleClick() {
    setPoints(points + 1);
  }

  return (
    <section className={styles.card}>
      <h2>CookieClicker</h2>
      <p>Trykk på kjeksen for å få poeng.</p>

      <button className={styles.cookieButton} onClick={handleClick}>
        <img
          src={`${import.meta.env.BASE_URL}cookie.png`}
          alt="Image of a cookie"
        />
      </button>

      <p className={styles.points}>Poeng: {points}</p>
    </section>
  );
}

export default CookieClicker;
