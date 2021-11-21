import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import api from "../../../services/api";

const Login = ({ setAuthentication , setUser }) => {

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  })

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (user) => {
    console.log( user );
    const request = {
    "username": `${user.username}`,
    "password": `${user.password}`,
    "email": `${user.email}`
  }
    api
        .get("/users/", request )
        .then((res) => {
          console.log(res);
          window.localStorage.clear();
          window.localStorage.setItem("authToken", res.data.token);
          setAuthentication(true);
          toast.success(`Bem vindo ${user.username} !`);
          setUser(user)
          history.push("/profile");
        })
        .catch((err) => {
        console.log(err)
        toast.error("Login inválido");
      });
  };

  return (
    <>
      <h3>Kenziebook</h3>
      <button className="button-position1" onClick={() => history.push("/")}>
        Home
      </button>

      <div className="container">
      <div className="effect">
        <div className="inputLogin">
          <h4>Conecte-se</h4>
          <form className="form2" onSubmit={handleSubmit(handleForm)}>
          <input placeholder="Usuário" {...register("username")} />
          <div className="errors">{errors.username?.message}</div>
          <input placeholder="Senha" type="password" {...register("password")} />
          <div className="errors">{errors.password?.message}</div>
          <button type="submit">Login</button>
          </form>
        </div>
        <h6>Não possui uma conta? </h6>
        <button className="cadastrologin" onClick={() => history.push("/signup")}>
        Cadastro
      </button>
      </div>
      </div>
    </>
  );
};

export default Login;
