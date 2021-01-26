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
        <a
          href="https://www.fiverr.com/sspedroisac?up_rollout=true"
          target="__blank"
        >
          <img src="./icons/job.svg" alt="Pedro Isac services" />
          Services
        </a>
      </div>
      <div className={styles.social}>
        <a href="https://github.com/pedro-isacss" target="__blank">
          <img src="./icons/github.svg" alt="Pedro Isac github" />
          GitHub
        </a>
      </div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/ss.pedroisac/" target="__blank">
          <img src="./icons/instagram.svg" alt="Pedro Isac instagram" />
          Instagram
        </a>
      </div>
      <div className={styles.social}>
        <a href="https://forms.gle/16ZbvdTHnnY7EVZZA" target="__blank">
          <img src="./icons/contact.svg" alt="Pedro Isac contact" />
          Contact me
        </a>
      </div>
    </header>
  );
}
