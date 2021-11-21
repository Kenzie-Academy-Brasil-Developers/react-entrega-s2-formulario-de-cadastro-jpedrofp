import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../.././../services/api";

const Profile = ({ user: {username, password} }) => {
    const [userID, setUserID] = useState({});
  const history = useHistory();
  const id = useParams();
    useEffect(() => {
    api.get(`/users/${id}/  `).then((response) => setUserID(response.data));
  }, []);

  return (
    <>
      <h3>Kenziebook</h3>
      <button className="button-position1" onClick={() => history.push("/")}>
        Sair
      </button>
      <div className="info">
      <h6>Seu usuário: {username}</h6>
      <h6>Sua senha: {password}</h6>
      </div>

      {userID.email} 
    </>
  );
};

export default Profile;
