import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <Nav />
        <Projects />
      </div>
    </div>
  );
}
