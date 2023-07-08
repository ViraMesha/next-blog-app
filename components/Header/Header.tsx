import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/blog" className={styles.link}>
        Blog
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
    </header>
  );
}

export { Header };
