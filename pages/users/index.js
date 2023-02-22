import Link from "next/link";
import styles from "./users.module.css";

export const getStaticProps = async () => {

  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  const jsonData = await response.json();

  return {
    props: {
      names: jsonData,
    },
  };
};

export default function Users({ names }) {
  console.log("names--", names);
  return (
    <div className="home">
      <h1>Users List:</h1>
      <br />
      {names?.length &&
        names.map((user) => (
          <h2 key={user.id} className={styles.list}>
            <Link href={`users/${user.id}`}>
              {user.id + " " + user.name + ", " + user.address.city}
            </Link>
          </h2>
        ))}
    </div>
  );
}
