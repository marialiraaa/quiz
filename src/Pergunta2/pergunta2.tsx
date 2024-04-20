import "./pergunta2.css";
import React, { useState } from "react";
import p2 from "../assets/img/heranca.png";
import RespostaC from "../perguntas/RespostaC"; // novo
import respostaE from "../perguntas/respostaE"; // novo

type Resposta = "A" | "B" | "C"; // Definindo o tipo Resposta como "A", "B" ou "C"

const Pergunta2 = () => {
  const [respostaSelecionada, setRespostaSelecionada] =
    useState<Resposta | null>(null); // Definindo o tipo do estado respostaSelecionada

  const selecionarResposta = (resposta: Resposta) => {
    // Definindo o tipo do parâmetro resposta
    setRespostaSelecionada(resposta);
  };

  return (
    <div className="borda">
      <div className="quadrado">
        <h4>1. O que significa o termo "Herança Digital"?</h4>
      </div>
      <div className="center">
        <img src={p2} alt="" height="259" width="419" />
      </div>

      <div className="alternativa">
        <button className="quadrado1" onClick={() => selecionarResposta("A")}>
          <div className="LetraA">
            <h1>A</h1>
          </div>
          <div className="textoA">
            <p>Gestão e preservação dos dados online após a morte.</p>
          </div>
        </button>

        <button className="quadrado2" onClick={() => selecionarResposta("B")}>
          <div className="LetraB">
            <h1>B</h1>
          </div>
          <div className="textoB">
            <p>Processo de criação de um legado físico.</p>
          </div>
        </button>

        <div className="quadrado3">
          <button className="bt3">
            <div className="LetraC">
              <h1>C</h1>
            </div>
            <div className="TextoC">
              <p>Herança de bens físicos após a morte.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pergunta2;
