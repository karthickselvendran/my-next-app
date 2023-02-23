import Head from "next/head";
import React from "react";
import styles from "./container.module.css";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next Bolg</title>
      </Head>
      {children}
    </div>
  );
};

export default Container;
