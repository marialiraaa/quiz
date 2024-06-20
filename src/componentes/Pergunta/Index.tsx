import React, { useState, useEffect } from "react";
import "./styles.css";
import Telas from "../../telas/pergunta1";
import relogio from "../../assets/img/relogio1.png";
import img1 from "../../assets/img/heranca.png";
type Resposta = "A" | "B" | "C";

type Props = {
  pergunta: string;
  letraA: string;
  letraB: string;
  letraC: string;
  gabarito: Resposta;
  imgSource: string;
};

function Pergunta({
  pergunta,
  letraA,
  letraB,
  letraC,
  gabarito,
  imgSource,
}: Props) {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<
    boolean | Resposta | null
  >(null);
  const [resposta, setResposta] = useState<boolean | null>(null);
  const [tempoRestante, setTempoRestante] = useState(30);
  const [perguntasCorretas, setPerguntasCorretas] = useState(0);

  const selecionarResposta = (resposta: Resposta) => {
    setRespostaSelecionada(resposta);
    const correta = resposta === gabarito;
    setResposta(correta);
    if (correta) {
      setPerguntasCorretas((prevCorretas) => prevCorretas + 1);
    }
  };

  /* useEffect(() => {
    const timer = setInterval(() => {
      if (tempoRestante > 0 && !respostaSelecionada) {
        setTempoRestante((prevTempo) => prevTempo - 1);
      } else if (tempoRestante === 0 && !respostaSelecionada) {
        setRespostaSelecionada(gabarito);
        setResposta(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [tempoRestante, respostaSelecionada, gabarito]);*/

  return (
    <div className="borda">
      <div className="quadrado">
        <h4>{pergunta}</h4>
      </div>
      {
        !respostaSelecionada ? (
          <div className="imgCentro">
            <img src={imgSource} alt="" height="259" width="419" />
          </div>
        ) : resposta ? (
          <div>
            <h3 className="respostaC">Boa, Resposta Correta!</h3>
          </div>
        ) : (
          <div>
            <h3 className="respostaE">Ops, Resposta Incorreta!</h3>
          </div>
        ) /*: (<div>
          <h3 className="EsgotouT">Resposta Incorreta!</h3>
        </div>)*/
      }
      {respostaSelecionada && (
        <div className="circuloPontuacao">{perguntasCorretas}</div>
      )}
      <div className="imgRelogio">
        <p className="temporizador">{tempoRestante}</p>
        <img src={relogio} alt="" width="135" height="179" />
      </div>
      <div className="alternativa">
        <button
          disabled={respostaSelecionada ? true : false}
          className="quadrado1"
          onClick={() => selecionarResposta("A")}
        >
          <div
            className={
              respostaSelecionada
                ? respostaSelecionada === "A"
                  ? "opcao"
                  : "buttonDisable"
                : "opcao"
            }
          >
            <h1>A</h1>
          </div>
          <div className="textoOpcao">
            <p>{letraA}</p>
          </div>
        </button>
      </div>

      <div className="alternativa">
        <button
          disabled={respostaSelecionada ? true : false}
          className="quadrado1"
          onClick={() => selecionarResposta("B")}
        >
          <div
            className={
              respostaSelecionada
                ? respostaSelecionada === "B"
                  ? "opcao"
                  : "buttonDisable"
                : "opcao"
            }
          >
            <h1>B</h1>
          </div>
          <div className="textoOpcao">
            <p>{letraB}</p>
          </div>{" "}
        </button>
      </div>

      <div className="alternativa">
        <button
          disabled={respostaSelecionada ? true : false}
          className="quadrado1"
          onClick={() => selecionarResposta("C")}
        >
          <div
            className={
              respostaSelecionada
                ? respostaSelecionada === "C"
                  ? "opcao"
                  : "buttonDisable"
                : "opcao"
            }
          >
            <h1>C</h1>
          </div>
          <div className="textoOpcao">
            <p>{letraC}</p>
          </div>
        </button>
      </div>

      {respostaSelecionada && (
        <div>
          <button className="retornar">Retornar</button>{" "}
          <button className="avançar">Proximo</button>
        </div>
      )}
    </div>
  );
}

export default Pergunta;
