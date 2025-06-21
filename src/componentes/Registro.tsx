import "./Registro.css";
import React, { useState } from "react";
import LogoQuiz from "../assets/img/legacyQuizBlack.png";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/img/fluent--arrow-left-12-filled.svg?react";

const Registro = () => {
  const [nome, setNome] = useState<string>("");
  const navigate = useNavigate();
  const irParaRegistro = () => {
    navigate("/registro");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Nome cadastrado:", nome);
  };

  return (
    <div className="conteudo">
      <div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 40,
            width: 150,
          }}
          onClick={() => navigate("/")}
        >
          <ArrowLeft width={20} height={20} style={{ marginRight: 10 }} />
          <p>Voltar</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          width: 614.38,
          height: 300,
          alignSelf: "center",
          padding: 20,
          alignItems: "center",
          borderRadius: 20,
          paddingTop: 60,
        }}
      >
        <img src={LogoQuiz} alt="" height="74" width="349" />
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            id="nomeInput"
            value={nome}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />

          <button className="Jogar" onClick={() => navigate("/perguntas")}>
            Jogar
          </button>
        </form>
      </div>
      <div className="texto">
        <p className="texto">Escolha seu nickname e inicie o quiz.</p>
      </div>
    </div>
  );
};

export default Registro;
