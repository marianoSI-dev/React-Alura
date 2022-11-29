import React from "react";
import Input from "../Input/Input";
import './Form.css'

const Form = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Cargo" placeholder="Digite seu cargo" />
        <Input label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
