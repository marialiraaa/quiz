import "./Registro.css";
import React, { useState } from "react";
import logopreta from "../assets/img/LogoPreta.png";
import { Link } from "react-router-dom";

const Registro = () => {
  const [nome, setNome] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Nome cadastrado:", nome);
  };

  return (
    <div className="conteudo">
      <Link to="/">
        <button className="Voltar">Voltar</button>
      </Link>
      <div className="quadrado">
        <img src={logopreta} alt="" height="74" width="404" />
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            id="nomeInput"
            value={nome}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
          <Link to="pergunta1">
            <button className="Jogar">Jogar</button>
          </Link>
        </form>
      </div>
      <div className="texto">
        <p className="texto">Escolha seu nickname e inicie o quiz.</p>
      </div>
    </div>
  );
};

export default Registro;
