import Link from "next/link";
import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        <Link href="/">Next js</Link>
      </h1>
      <nav className={styles.nav}>
        <span className={styles.cursorPtr}>
          <Link href="/">Home</Link>
        </span>
        <span className={styles.cursorPtr}>
          <Link href="/users">Users</Link>
        </span>
        <span className={styles.cursorPtr}>
          <Link href="/signin">Sign in</Link>
        </span>
        <span className={styles.cursorPtr}>
          <Link href="/signup">Sign up</Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;
