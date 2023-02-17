import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className={styles.container}>Next js Project </h1>
      <Link href="/contact">Go to contact</Link>
    </>
  );
}
