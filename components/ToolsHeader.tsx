import styles from "../styles/toolsheader.module.css";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

interface Props {
  title: string;
}

function ToolsHeader(props: Props) {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <Link href="/">
        <a>
          <BiArrowBack size={24} color="var(--black)" />
        </a>
      </Link>
    </div>
  );
}

export default ToolsHeader;
