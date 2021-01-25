import { useEffect, useState } from "react";
import styles from "../styles/Portfolio.module.css";

interface PortfolioItem {
  link: string;
  img: string;
}

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  useEffect(() => {
    fetch("./data/portfolio.json")
      .then((response) => response.json())
      .then((res) => {
        res = res.slice(0, 8);
        setPortfolioItems(res);
      });
  }, []);
  return (
    <section className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div>
        {portfolioItems.map((item: PortfolioItem) => {
          return (
            <a href={item.link} target="__blank">
              <img src={item.img} alt="Pedro Isac portfolio item" />
            </a>
          );
        })}
      </div>
      <a className={styles.seemore} href="#">
        See more {">>"}
      </a>
    </section>
  );
}
