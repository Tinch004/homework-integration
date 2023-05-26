import React, { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
import rickAndMortyImage from "./rick-and-morty.jpg";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(validation({ ...userData, [event.target.name]: event.target.value }));
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Iniciar sesión</h1>
      <img src={rickAndMortyImage} alt="Rick and Morty" className={styles.image} />
      <form>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
        {errors.e1 && <p className={styles.error}>{errors.e1}</p>}
        {errors.e2 && <p className={styles.error}>{errors.e2}</p>}
        {errors.e3 && <p className={styles.error}>{errors.e3}</p>}
        <br />
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
          placeholder="Contraseña"
          className={styles.input}
        />
        {errors.p1 && <p className={styles.error}>{errors.p1}</p>}
        {errors.p2 && <p className={styles.error}>{errors.p2}</p>}
        <br />
        <button onClick={handleSubmit} type="submit" className={styles.submitButton}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Forms;