import { useState } from "react";
import { mockData } from "../data/mockData";
import styles from "../App.module.css";

function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username.trim() === "" || email.trim() === "") {
      return;
    }

    const newUser = {
      username: username,
      email: email,
    };

    setUsers([...users, newUser]);
    setUsername("");
    setEmail("");
  }

  return (
    <section className={styles.card}>
      <h2>Users</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Add user</button>
      </form>

      <ul className={styles.userList}>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.username}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
