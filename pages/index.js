import Head from "next/head";
import styles from "../styles/pages/Index.module.css";
import Svg from "../public/icons/logo.js";
import { BsViewList } from "react-icons/bs";
import { FiInstagram, FiGithub } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/pedro-isacss/projects/master/projects.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setProjects(res);
      });
  }, []);
  return (
    <div className={styles.container}>
      {/* === HEADER === */}
      <header>
        <Svg />
        <div>
          <h1>Pedro Isac</h1>
          <p>Front-end developer and Web designer</p>
        </div>
      </header>
      {/* === LINKS === */}
      <section className={styles.links}>
        <a href="https://www.fiverr.com/sspedroisac" target="__blank">
          <div>
            <BsViewList size={24} color="var(--white)" />
          </div>
          <span>Services</span>
        </a>
        <a href="https://www.instagram.com/ss.pedroisac/" target="__blank">
          <div>
            <FiInstagram size={24} color="var(--white)" />
          </div>
          <span>Instagram</span>
        </a>
        <a href="https://github.com/pedro-isacss" target="__blank">
          <div>
            <FiGithub size={24} color="var(--white)" />
          </div>
          <span>GitHub</span>
        </a>
      </section>
      {/* === PROJECTS === */}
      <section className={styles.projects}>
        {projects.map((project) => {
          return (
            <a href={project.link} target="__blank" key={project.img}>
              <img src={project.img} />
            </a>
          );
        })}
      </section>
    </div>
  );
}
