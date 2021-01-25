import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.subsection}>
          <Header />
        </div>
        <div className={`${styles.subsection} ${styles.bggradentblue}`}>
          <Portfolio />
        </div>
      </div>
    </div>
  );
}
