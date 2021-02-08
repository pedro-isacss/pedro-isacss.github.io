import { useContext, useState, useRef } from "react";
import GlobalStates from "../contex";
import styles from "../styles/header.module.css";
import { CgWorkAlt } from "react-icons/cg";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BiPlay, BiSkipNext, BiPause } from "react-icons/bi";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineLinkedin,
} from "react-icons/ai";

function Header() {
  const [playing, setPlaying] = useState(false);
  const [music, setMusic] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { setHeaderHidden, headerHidden } = useContext(GlobalStates);
  if (headerHidden === false) {
    return (
      <div className={styles.container}>
        {/* INFOS */}
        <div className={styles.infos}>
          <img src="./images/logo.svg" alt="Pedro Isac logo" />
          <div>
            <h1>Pedro Isac</h1>
            <span>Front-end developer and Web designer</span>
          </div>
        </div>
        {/* LINKS */}
        <div className={styles.links}>
          <a
            href="https://www.fiverr.com/sspedroisac"
            target="__blank"
            className={styles.mainlink}
          >
            <CgWorkAlt
              size={16}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            Services
          </a>
          <a href="https://github.com/pedro-isacss" target="__blank">
            <FiGithub
              size={16}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            GitHub
          </a>
          <a href="https://www.instagram.com/ss.pedroisac/" target="__blank">
            <FiInstagram
              size={16}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/pedro-isacss/" target="__blank">
            <AiOutlineLinkedin
              size={18}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            LinkedIn
          </a>
        </div>
        {/* MAIL */}
        <span className={styles.mail}>
          Do you need something? send me an email:{" "}
          <a href="mailto:ss.pedroisac@gmail.com">ss.pedroisac@gmail.com</a>
        </span>
        {/* MUSIC CONTROLLERS */}
        <div className={styles.musiccontrollers}>
          <audio ref={audioRef} src={`./music/music0${music}.mp3`}></audio>
          {playing ? (
            <button
              onClick={() => {
                setPlaying(false);
                audioRef.current?.pause();
              }}
            >
              <BiPause size={24} color="var(--white)" />
            </button>
          ) : (
            <button
              onClick={() => {
                setPlaying(true);
                audioRef.current?.play();
              }}
            >
              <BiPlay size={24} color="var(--white)" />
            </button>
          )}

          <button
            onClick={() => {
              music === 3 ? setMusic(1) : setMusic(music + 1);
              audioRef.current?.play();
            }}
          >
            <BiSkipNext size={24} color="var(--white)" />
          </button>
        </div>
        {/* CLOSE BTN */}
        <button
          className={styles.closebtn}
          onClick={() => {
            setHeaderHidden({ headerHidden: true, setHeaderHidden });
          }}
        >
          <AiOutlineLeft size={16} color="var(--blue)" />
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.containerhidden}>
        <button
          className={styles.openbtn}
          onClick={() => {
            setHeaderHidden({ headerHidden: false, setHeaderHidden });
          }}
        >
          <AiOutlineRight size={16} color="var(--blue)" />
        </button>
        <img src="./images/logo.svg" />
        <a href="https://www.fiverr.com/sspedroisac" target="__blank">
          <CgWorkAlt size={24} color="var(--white)" />
        </a>
        <a href="https://github.com/pedro-isacss" target="__blank">
          <FiGithub size={24} color="var(--white)" />
        </a>
        <a href="https://www.instagram.com/ss.pedroisac/" target="__blank">
          <FiInstagram size={24} color="var(--white)" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-isacss/" target="__blank">
          <AiOutlineLinkedin size={24} color="var(--white)" />
        </a>
        <div>
          <audio ref={audioRef} src={`./music/music0${music}.mp3`}></audio>
          {playing ? (
            <button
              onClick={() => {
                setPlaying(false);
                audioRef.current?.pause();
              }}
            >
              <BiPause size={24} color="var(--white)" />
            </button>
          ) : (
            <button
              onClick={() => {
                setPlaying(true);
                audioRef.current?.play();
              }}
            >
              <BiPlay size={24} color="var(--white)" />
            </button>
          )}
          <button
            onClick={() => {
              music === 3 ? setMusic(1) : setMusic(music + 1);
              audioRef.current?.play();
            }}
          >
            <BiSkipNext size={24} color="var(--white)" />
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
