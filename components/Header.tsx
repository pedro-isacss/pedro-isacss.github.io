import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src="./icons/logo.svg" alt="Pedro Isac logo" />
      </a>
      <div>
        <h1>Pedro Isac</h1>
        <span>Front-end developer | Designer</span>
        <div className={styles.social}>
          <a href="https://www.instagram.com/ss.pedroisac/" target="__blank">
            <img src="./icons/instagram.svg" alt="Pedro Isac instagram" />
          </a>
          <a href="https://github.com/pedro-isacss" target="__blank">
            <img src="./icons/github.svg" alt="Pedro Isac github" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ss.pedroisac@gmail.com"
            target="__blank"
          >
            <img src="./icons/gmail.svg" alt="Pedro Isac gmail" />
          </a>
        </div>
      </div>
    </header>
  );
}
