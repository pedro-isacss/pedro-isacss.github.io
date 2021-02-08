import { useContext, useState, useRef } from "react";
import GlobalStates from "../contex";
import styles from "../styles/pages.module.css";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
  const { headerHidden } = useContext(GlobalStates);
  const [music, setMusic] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <div className={styles.container}>
      <audio ref={audioRef} src={`./music/music0${music}.mp3`}></audio>
      <div className={headerHidden ? styles.headerhidden : styles.header}>
        <Header audio={audioRef} music={music} setMusic={setMusic} />
      </div>
      <div className={headerHidden ? styles.content : styles.displaynone}>
        <Projects />
      </div>
    </div>
  );
}
