import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const json = await response.json();

  const paths = json.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  const jsonData = await response.json();

  return {
    props: {
      user: jsonData,
    },
  };
};

const UserDetails = ({ user }) => {
  console.log("user--", user);
  return (
    <div className="cardContainer">
      <h2>UserDetails</h2>
      <div className="card">
        <div>
          <label>Id :</label>
          <span>{user.id}</span>
        </div>
        <div>
          <label>Name :</label>
          <span>{user.name}</span>
        </div>
        <div>
          <label>Email :</label>
          <span>{user.email}</span>
        </div>
        <div>
          <label>Phone Number :</label>
          <span>{user.phone}</span>
        </div>
        <div>
          <label>Website :</label>
          <span>{user.website}</span>
        </div>
        <div>
          <label>Company name :</label>
          <span>{user.company.name}</span>
        </div>
        <div>
          <label>City :</label>
          <span>{user.address.city}</span>
        </div>
        <div>
          <label>Zipcode :</label>
          <span>{user.address.zipcode}</span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
