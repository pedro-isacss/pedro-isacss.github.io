import styles from "../styles/Links.module.css";

export default function Links() {
  return (
    <section className={styles.links}>
      <a href="https://www.fiverr.com/sspedroisac" target="__blank">
        <div className={styles.linkicon}>
          <img src="./icons/job.svg" alt="Hire Pedro Isac" />
        </div>
        <span>Services</span>
      </a>
      <a href="https://gumroad.com/sspedroisac" target="__blank">
        <div className={styles.linkicon}>
          <img src="./icons/store.svg" alt="Hire Pedro Isac" />
        </div>
        <span>Store</span>
      </a>
    </section>
  );
}
