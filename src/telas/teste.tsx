import React, { useState } from "react";
import Pergunta from "../componentes/Pergunta/Index"; // Certifique-se de que o caminho está correto
import relogio from "../../assets/img/relogio1.png";
import imgPergunta1 from "../assets/img/heranca.png";

type Resposta = "A" | "B" | "C";

type PerguntaProps = {
  pergunta: string;
  letraA: string;
  letraB: string;
  letraC: string;
  gabarito: Resposta;
  imgSource: string;
};

const perguntas: PerguntaProps[] = [
  {
    pergunta: "1. O que significa o termo Legado Digital?",
    letraA: "Transmissão de bens físicos após a morte.",
    letraB:
      "Todo o patrimônio gerado e acumulado por um usuário de plataformas digitais ao longo de sua vida. ",
    letraC:
      "Documento legal que especifica a transferência de ativos digitais.",
    gabarito: "B",
    imgSource: imgPergunta1,
  },
  {
    pergunta: "2. Qual é a capital da França?",
    letraA: "Berlim",
    letraB: "Madrid",
    letraC: "Paris",
    gabarito: "C",
    imgSource: "../../assets/img/paris.png",
  },
  {
    pergunta: "3. O que podemos incorporar em um testamento digital?",
    letraA: "Um registro abrangente dos bens físicos e tangíveis.",
    letraB:
      "Uma declaração legal que determina o destino dos bens digitais após o falecimento, incluindo a nomeação de guardiões para gerenciar contas em redes sociais, e a possibilidade de deixar mensagens finais compartilhadas online para amigos e familiares.",
    letraC: "Todas as opções estão corretas.",
    gabarito: "B",
    imgSource: "../../assets/img/heranca.png",
  },
  // Adicione mais perguntas conforme necessário
];

const Quiz = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);

  const avancarPergunta = () => {
    if (indicePergunta < perguntas.length - 1) {
      setIndicePergunta(indicePergunta + 1);
    }
  };

  const retornarPergunta = () => {
    if (indicePergunta > 0) {
      setIndicePergunta(indicePergunta - 1);
    }
  };

  return (
    <div>
      <Pergunta {...perguntas[indicePergunta]} />
      <div>
        {indicePergunta > 0 && (
          <button className="retornar" onClick={retornarPergunta}>
            Retornar
          </button>
        )}
        {indicePergunta < perguntas.length - 1 && (
          <button className="avancar" onClick={avancarPergunta}>
            Avançar
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
