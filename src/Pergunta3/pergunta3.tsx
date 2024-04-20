import "./pergunta3.css";
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
        <h4>3. O que podemos incorporar em um testamento digital?</h4>
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
            <p> Um registro abrangente dos bens físicos e tangíveis. </p>
          </div>
        </div>
        <div className="quadrado2">
          <div className="LetraB">
            <h1>B</h1>
          </div>
          <div className="textoB">
            <p>
              {" "}
              Uma declaração legal que determina o destino dos bens digitais
              após o falecimento, incluindo a nomeação de guardiões para
              gerenciar contas em redes sociais, e a possibilidade de deixar
              mensagens finais compartilhadas online para amigos e familiares.
            </p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>Todas as opções estão corretas. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pergunta3;
