import Head from "next/head";
import styles from "../styles/pages/Index.module.css";
import Svg from "../public/icons/logo.js";
import { BsViewList } from "react-icons/bs";
import { FiInstagram, FiGithub, FiLinkedin, FiSearch } from "react-icons/fi";
import { RiStore2Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";

export default function Home({ projects }) {
  const [isSearching, setIsSearching] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("projects");

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
            <BsViewList size={24} color="var(--lightLight)" />
          </div>
          <span>Services</span>
        </a>
        <a href="https://gumroad.com/sspedroisac" target="__blank">
          <div>
            <RiStore2Line size={24} color="var(--lightLight)" />
          </div>
          <span>Store</span>
        </a>
        <a href="https://www.instagram.com/ss.pedroisac/" target="__blank">
          <div>
            <FiInstagram size={24} color="var(--lightLight)" />
          </div>
          <span>Instagram</span>
        </a>
        <a href="https://github.com/pedro-isacss" target="__blank">
          <div>
            <FiGithub size={24} color="var(--lightLight)" />
          </div>
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/pedro-isacss/" target="__blank">
          <div>
            <FiLinkedin size={24} color="var(--lightLight)" />
          </div>
          <span>LinkedIn</span>
        </a>
      </section>
      <hr
        style={{
          width: "100%",
          border: "0.5px solid var(--light)",
          maxWidth: "744px",
          margin: "52px 0 12px",
        }}
      />
      {/* === TAB === */}
      <section className={styles.tab}>
        <div>
          <button
            className={
              isSearching
                ? styles.hide
                : selectedTab === "tools"
                ? styles.selectedTab
                : ""
            }
            onClick={() => setSelectedTab("tools")}
          >
            Tools
          </button>
          <button
            className={
              isSearching
                ? styles.hide
                : selectedTab === "projects"
                ? styles.selectedTab
                : ""
            }
            onClick={() => setSelectedTab("projects")}
          >
            Projects
          </button>
        </div>
        <input
          className={isSearching ? "" : styles.hide}
          type="text"
          placeholder={`Use "-" in place of space ;)`}
          onChange={(e) => setValueSearch(e.target.value)}
          value={valueSearch}
        />
        <button
          onClick={() => {
            setIsSearching(!isSearching);
            setValueSearch("");
          }}
          className={styles.toggleSearch}
        >
          {isSearching ? (
            <RiCloseLine size={24} color="var(--primary)" />
          ) : (
            <FiSearch size={24} color="var(--primary)" />
          )}
        </button>
      </section>
      {/* === GALLERY === */}
      {/* Projects */}
      <section className={styles.gallery}>
        {selectedTab === "projects" ? (
          <>
            {(valueSearch === ""
              ? projects
              : projects.filter(
                  (item) =>
                    item.link
                      .replace("-", " ")
                      .indexOf(valueSearch.toLowerCase()) !== -1
                )
            ).map((gallery) => {
              return (
                <a href={gallery.link} target="__blank" key={gallery.img}>
                  <img src={gallery.img} />
                </a>
              );
            })}
          </>
        ) : null}
      </section>
      {/* Tools */}
      <section className={styles.gallery}>
        {selectedTab === "tools" ? <>{/* TOOLS */}</> : null}
      </section>
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = await fetch(
    "https://raw.githubusercontent.com/pedro-isacss/projects/master/projects.json"
  )
    .then((response) => response.json())
    .then((res) => res);
  return {
    props: {
      projects: projects,
    },
    revalidate: 60 * 60 * 8,
  };
};
