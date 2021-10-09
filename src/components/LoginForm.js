import { Formik } from "formik";
import React from "react";
import "../styles/form.scss"
import api from "../services/api";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const history = useHistory();
    return (
        <Formik
        initialValues={{ email: "", senha: ""}}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "*Campo Obrigatório";
          }
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "*E-mail Inválido";
          }
          if (!values.senha) {
            errors.senha = "*Campo Obrigatório";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          if (!values.email & !values.senha)
            alert("Preencha os campos");
          else {
            try {
              let email = values.email;
              let senha = values.senha;
              const data = { email, senha };
              const response = await api.post("login", data);
              if (response.status === 200) {
                localStorage.setItem("id", response.data.id);
                history.push("/");
              }
              else {
                alert("Erro ao logar");
              }
              } catch (error) {
                
              }
            setSubmitting(false);
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label htmlFor="email">{ errors.email }</label>
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.senha}
            />
            <label htmlFor="email">{ errors.senha }</label>
            <button
              type="submit"
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </form>
        )}
      </Formik>
    );
}