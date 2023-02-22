export const getStaticProps = async () => {
  console.log("getStaticProps--");

  let data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => json);

  return {
    props: {
      names: data,
    },
  };
};

export default function Users({ names }) {
  console.log("names--", names);
  console.log("names--", names[0]);
  return (
    <div className="home">
      <h1>Users List:</h1>
      <br />
      {names?.length &&
        names.map((user) => (
          <h2>{user.id + " " + user.name + ", " + user.address.city}</h2>
        ))}
    </div>
  );
}
