import { useEffect, useState } from "react";

import api from "../.././../services/api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users/?format=json").then((response) => setUsers(response.data));
  }, []);

  return (
    <>
      <h4>Listagem de usuários</h4>
      {users.map((user) => (
        <>
          <li> {user.id} </li>
          <li> {user.username} </li>
          <li> {user.email} </li>
        </>
      ))}
    </>
  );
};

export default Users;
