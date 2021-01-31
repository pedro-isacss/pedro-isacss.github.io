import styles from "../styles/nav.module.css";

function Nav() {
  return (
    <div className={styles.container}>
      <button className={styles.active}>Projects</button>
      <button>Articles</button>
      <button>Tools</button>
    </div>
  );
}

export default Nav;
