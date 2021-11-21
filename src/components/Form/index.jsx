import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";

import * as yup from "yup";
import api from "../../../services/api";

const Form = ({ setUser }) => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "Apenas letras")
      .max(18, "Máximo de 18 caracteres")
      .required("Nome obrigatório"),
    fullname: yup.string().required("Sobrenome obrigatório"),
    email: yup.string().required("Email obrigatório").email("E-mail inválido"),
    confirmEmail: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("email")], "Emails não coincidem"),
    cellphone: yup.string().required("Telefone obrigatório"),
    address: yup.string().required("Endereço obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
    termsOfUse: yup
      .boolean()
      .oneOf([true], "Você precisa aceitar os termos para continuar")
      .required("Você precisa aceitar os termos para continuar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    const request = {
      username: `${data.username}`,
      password: `${data.password}`,
      email: `${data.email}`,
    };

    console.log(request);
    api
      .post("/users/", request)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso");
        reset();
        setUser(response.data);
        history.push("/login");
      })
      .catch((err) => {
        toast.error("Email duplicado, tente com outro email");
      });
  };

  return (
    <div className="container">
      <h3>Kenziebook</h3>
      <button
        className="button-position2"
        onClick={() => history.push("/login")}
      >
        Login
      </button>
      <button className="button-position1" onClick={() => history.push("/")}>
        Home
      </button>
      <div className="effect">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h4>Cadastro</h4>
          <input placeholder="Usuário" {...register("username")} />
          <div className="errors">{errors.username?.message}</div>
          <input placeholder="Nome completo" {...register("fullname")} />
          <div className="errors">{errors.fullname?.message}</div>
          <input placeholder="Telefone" {...register("cellphone")} />
          <div className="errors">{errors.cellphone?.message}</div>
          <input placeholder="Endereço" {...register("address")} />
          <div className="errors">{errors.address?.message}</div>
          <input placeholder="E-mail" {...register("email")} />
          <div className="errors">{errors.email?.message}</div>
          <input
            placeholder="Confirme seu e-mail"
            {...register("confirmEmail")}
          />
          <div className="errors">{errors.confirmEmail?.message}</div>
          <div className="passwordContainer">
            <input
              className="password"
              placeholder="Senha"
              {...register("password")}
            />

            <input
              className="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
          </div>
          <div className="errors">{errors.password?.message}</div>
          <div className="errors"> {errors.confirmPassword?.message}</div>
          <div className="checkbox">
            {" "}
            <input
              type="checkbox"
              className="check"
              placeholder="Eu aceito os termos de uso da aplicação"
              {...register("termsOfUse")}
              required
            />
            <div className="terms">
              {errors.termsOfUse?.message}
              Eu aceito os termos de uso da aplicação
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
