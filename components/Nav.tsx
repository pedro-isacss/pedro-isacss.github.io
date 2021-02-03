import Link from "next/link";
import styles from "../styles/nav.module.css";

interface Props {
  active: string;
}

function Nav(props: Props) {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={props.active === "projects" ? styles.active : ""}>
          Projects
        </a>
      </Link>
      <Link href="/others">
        <a className={props.active === "others" ? styles.active : ""}>Others</a>
      </Link>
      <Link href="/tools">
        <a className={props.active === "tools" ? styles.active : ""}>Tools</a>
      </Link>
    </div>
  );
}

export default Nav;
