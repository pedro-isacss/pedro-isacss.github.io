import { useEffect, useState } from "react";
import styles from "../styles/projects.module.css";

interface Project {
  img: string;
  link: string;
}

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./data/portfolio.json")
      .then((response) => response.json())
      .then((res) => {
        setProjects(res);
      });
  }, []);
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <span>Some projects that I have already developed.</span>
      <div className={styles.projects}>
        {projects.map((project: Project) => {
          return (
            <a href={project.link} target="__blank" key={project.img}>
              <img src={project.img} alt="Pedro Isac portfolio item" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
