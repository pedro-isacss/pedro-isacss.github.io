import { useContext } from "react";
import GlobalStates from "../contex";
import styles from "../styles/header.module.css";
import { CgWorkAlt } from "react-icons/cg";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { BiPlay, BiSkipNext } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Header() {
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
          <a href="#" target="__blank" className={styles.mainlink}>
            <CgWorkAlt
              size={16}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            Services
          </a>
          <a href="#" target="__blank">
            <FiGithub
              size={16}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            GitHub
          </a>
          <a href="#" target="__blank">
            <FiInstagram
              size={16}
              color="var(--white)"
              style={{ marginRight: 8 }}
            />
            Instagram
          </a>
        </div>
        {/* MAIL */}
        <span className={styles.mail}>
          Do you need something? send me an email:{" "}
          <a href="#">ss.pedroisac@gmail.com</a>
        </span>
        {/* MUSIC CONTROLLERS */}
        <div className={styles.musiccontrollers}>
          <button>
            <BiPlay size={24} color="var(--white)" />
          </button>
          <button>
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
        <img src="./images/logo.svg" />
        <a href="#" target="__blank">
          <CgWorkAlt size={24} color="var(--white)" />
        </a>
        <a href="#" target="__blank">
          <FiGithub size={24} color="var(--white)" />
        </a>
        <a href="#" target="__blank">
          <FiInstagram size={24} color="var(--white)" />
        </a>
        <div>
          <button>
            <BiPlay size={24} color="var(--white)" />
          </button>
          <button>
            <BiSkipNext size={24} color="var(--white)" />
          </button>
        </div>
        <button
          className={styles.openbtn}
          onClick={() => {
            setHeaderHidden({ headerHidden: false, setHeaderHidden });
          }}
        >
          <AiOutlineRight size={16} color="var(--blue)" />
        </button>
      </div>
    );
  }
}

export default Header;
