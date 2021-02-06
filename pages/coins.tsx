import { useContext } from "react";
import GlobalStates from "../contex";
import styles from "../styles/pages.module.css";
import Header from "../components/Header";
import ToolsHeader from "../components/ToolsHeader";
import ToolCoins from "../components/ToolCoins";

function Coins() {
  const { headerHidden } = useContext(GlobalStates);
  return (
    <div className={styles.container}>
      <div className={headerHidden ? styles.headerhidden : styles.header}>
        <Header />
      </div>
      <div className={headerHidden ? styles.content : styles.displaynone}>
        <ToolsHeader title="Coins" />
        <ToolCoins />
      </div>
    </div>
  );
}

export default Coins;
