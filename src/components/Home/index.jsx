import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <div className="container">
      <h3>Kenziebook</h3>
      <button className="button-position1" onClick={() => history.push("/signup")}>
        Cadastro
      </button>
      <button className="button-position2" onClick={() => history.push("/login")}>
        Login
      </button>

      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eos
        necessitatibus. Saepe voluptas voluptate sint suscipit provident minima
        consectetur beatae in unde aperiam mollitia amet dolorem eius
        distinctio, natus eligendi?
      </h2>
    </div>
  );
};

export default Home;
