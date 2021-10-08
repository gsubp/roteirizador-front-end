import { Formik } from "formik";
import React from "react";
import "../styles/form.scss";
import api from "../services/api";
import {useHistory} from "react-router-dom"

export default function RegisterForm() {
  const history = useHistory();
    return (
        <Formik
        initialValues={{ nome: "", email: "", senha: "", reSenha: ""}}
        validate={(values) => {
            const errors = {};

            if (!values.nome) {
                errors.nome = "*Campo Obrigatório";
            }
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
            if (values.senha !== values.reSenha) {
               errors.reSenha = "*As senhas não são iguais" 
            }
              
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
            if (!values.email & !values.senha)
            alert("Preencha os campos");
            else {
                let nome = values.nome;
                let email = values.email;
                let senha = values.senha;
                try {
                  const data = { nome, email, senha };
                  const response = await api.post("users", data);
                  if (response.status == 200) {
                    alert("Cadastro Realizado com Sucesso!");
                    history.push("/login")
                    
                  }

                    console.log(response)
                } catch (error) {
                    alert(error);
                    
                } 
            }
            setSubmitting(false);
            }
        }
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
              name="nome"
              placeholder="Nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nome}
            />
            <label htmlFor="email">{ errors.nome }</label>
            <input
              type="email"
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
            <input
              type="password"
              name="reSenha"
              placeholder="Digite novamente sua senha"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reSenha}
            />
            <label htmlFor="email">{ errors.reSenha }</label>
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