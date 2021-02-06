import { useContext } from "react";
import GlobalStates from "../contex";
import styles from "../styles/pages.module.css";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Others() {
  const { headerHidden } = useContext(GlobalStates);
  return (
    <div className={styles.container}>
      <div className={headerHidden ? styles.headerhidden : styles.header}>
        <Header />
      </div>
      <div className={headerHidden ? styles.content : styles.displaynone}>
        <Nav active="content" />
        <span>Under development...</span>
      </div>
    </div>
  );
}
