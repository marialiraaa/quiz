import "./pergunta1.css";
import p1 from "../assets/img/pergunta1.png";
import RespostaC from "../perguntas/RespostaC"; // novo
import respostaE from "../perguntas/respostaE"; // novo

const Pergunta1 = () => {
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
        <h4>1. O que significa o termo "Legado Digital"?</h4>
      </div>
      <div className="center">
        <img src={p1} alt="" height="259" width="419" />
      </div>
      <div className="alternativa">
        <div className="quadrado1">
          <div className="LetraA">
            <h1>A</h1>
          </div>
          <div className="textoA">
            <p> Transmissão de bens físicos após a morte. </p>
          </div>
        </div>
        <div className="quadrado2">
          <div className="LetraB">
            <h1>B</h1>
          </div>
          <div className="textoB">
            <p>
              Todo o patrimônio gerado e acumulado por um usuário de plataformas
              digitais ao longo de sua vida.
            </p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>
              Documento legal que especifica a transferência de ativos digitais.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pergunta1;
