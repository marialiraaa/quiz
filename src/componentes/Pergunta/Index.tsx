import React, { useState, useEffect } from "react";
import "./styles.css";
import Telas from "../../telas/pergunta1";
import relogio from "../../assets/img/relogio1.png";
import img1 from "../../assets/img/heranca.png";
import QuizOptionButton from "../buttons/QuizOptionButton";
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
            <img src={imgSource} alt="" height={259} width={419} />
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

      {/* Criei um novo componente chamado QuizOptionButton, que é botão das alternativas*/}
      <div className="alternativas">
        <QuizOptionButton
          labelIcon="A"
          text={letraA}
          onClick={() => selecionarResposta("A")}
          isDisable={respostaSelecionada ? "A" !== gabarito : false}
        />

        <QuizOptionButton
          labelIcon="B"
          text={letraB}
          onClick={() => selecionarResposta("B")}
          isDisable={respostaSelecionada ? "B" !== gabarito : false}
        />

        <QuizOptionButton
          labelIcon="C"
          text={letraC}
          onClick={() => selecionarResposta("C")}
          isDisable={respostaSelecionada ? "C" !== gabarito : false}
        />
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
