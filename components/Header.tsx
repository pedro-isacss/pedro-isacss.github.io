import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.about}>
        <a href="#" className={styles.logo}>
          <img src="./icons/logo.svg" alt="Pedro Isac logo" />
        </a>
        <div>
          <h1>Pedro Isac</h1>
          <span>Front-end developer | Designer</span>
        </div>
      </div>
      <div className={styles.social}>
        <a href="#">
          <img src="./icons/github.svg" alt="Pedro Isac github" />
          GitHub
        </a>
      </div>
      <div className={styles.social}>
        <a href="#">
          <img src="./icons/instagram.svg" alt="Pedro Isac instagram" />
          Instagram
        </a>
      </div>
      <div className={styles.social}>
        <a href="#">
          <img src="./icons/contact.svg" alt="Pedro Isac contact" />
          Contact me
        </a>
      </div>
    </header>
  );
}
