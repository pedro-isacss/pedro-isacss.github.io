import { useContext } from "react";
import GlobalStates from "../contex";
import styles from "../styles/pages.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Projects from "../components/Projects";

export default function Home() {
  const { headerHidden } = useContext(GlobalStates);
  return (
    <div className={styles.container}>
      <div className={headerHidden ? styles.headerhidden : styles.header}>
        <Header />
      </div>
      <div className={headerHidden ? styles.content : styles.displaynone}>
        <Nav active="projects" />
        <Projects />
      </div>
    </div>
  );
}
