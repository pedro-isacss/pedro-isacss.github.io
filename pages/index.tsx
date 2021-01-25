import styles from "../styles/index.module.css";
import Header from "../components/Header";
import Links from "../components/Links";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.index}>
      <Header />
      <Links />
      <hr className="divisor" />
      <Portfolio />
      <Footer />
    </div>
  );
}
