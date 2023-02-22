import Link from "next/link";
import React from "react";
import styles from "./pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.PageNotFound}>
      <h2>Page Not Found</h2>
      <br />
      <p>
        Redirect to <Link href={"/"}>Home</Link> Page
      </p>
    </div>
  );
};

export default PageNotFound;
