import { useContext, useState, RefObject } from "react";
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

interface Props {
  audio: RefObject<HTMLAudioElement>;
  music: number;
  setMusic: Function;
}

function Header(props: Props) {
  const { setHeaderHidden, headerHidden } = useContext(GlobalStates);
  const [playing, setPlaying] = useState(false);
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
          {playing ? (
            <button
              onClick={() => {
                setPlaying(false);
                props.audio.current?.pause();
              }}
            >
              <BiPause size={24} color="var(--white)" />
            </button>
          ) : (
            <button
              onClick={() => {
                setPlaying(true);
                props.audio.current?.play();
              }}
            >
              <BiPlay size={24} color="var(--white)" />
            </button>
          )}

          <button
            onClick={() => {
              props.music === 3
                ? props.setMusic(1)
                : props.setMusic(props.music + 1);
              props.audio.current?.play();
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
          {playing ? (
            <button
              onClick={() => {
                setPlaying(false);
                props.audio.current?.pause();
              }}
            >
              <BiPause size={24} color="var(--white)" />
            </button>
          ) : (
            <button
              onClick={() => {
                setPlaying(true);
                props.audio.current?.play();
              }}
            >
              <BiPlay size={24} color="var(--white)" />
            </button>
          )}
          <button
            onClick={() => {
              props.music === 3
                ? props.setMusic(1)
                : props.setMusic(props.music + 1);
              props.audio.current?.play();
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
