import "./pergunta5.css";
import p4 from "../assets/img/img3.png";
import RespostaC from "../perguntas/RespostaC"; // novo
import respostaE from "../perguntas/respostaE"; // novo

const pergunta3 = () => {
  // novo
  /*const [respostaCorreta, setRespostaCorreta] = useState(false);

  const verificarResposta = (opcaoSelecionada: string) => {
    // Defina o tipo de opcaoSelecionada como string
    if (opcaoSelecionada === "B") {
      setRespostaCorreta(true);
    } else {
      setRespostaCorreta(false);
    }
  }; // novo*/

  return (
    <div className="borda">
      <div className="quadrado">
        <h4>
          6. Steve Jobs, ex-diretor executivo da Apple, morreu em 2011. Como a
          herança digital dele foi administrada por seus familiares?{" "}
        </h4>
      </div>
      <div className="center">
        <img src={p4} alt="" height="259" width="419" />
      </div>
      <div className="alternativa">
        <div className="quadrado1">
          <div className="LetraA">
            <h1>A</h1>
          </div>
          <div className="textoA">
            <p>
              {" "}
              A família de Steve Jobs preservou sua memória e continuou a
              prosperar com base nos projetos e visão que Jobs deixou para trás,
              gerenciando ativamente seus ativos digitais.{" "}
            </p>
          </div>
        </div>
        <div className="quadrado2">
          <div className="LetraB">
            <h1>B</h1>
          </div>
          <div className="textoB">
            <p>
              {" "}
              Encerramento imediato de todas as atividades digitais relacionadas
              a Steve Jobs, protegendo sua privacidade póstuma.
            </p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>
              Todos os dados digitais foram deixados sem administração,
              resultando em uma preservação natural e espontânea de sua herança
              digital.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pergunta3;
