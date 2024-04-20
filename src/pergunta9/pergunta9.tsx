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
          9. Qual das seguintes afirmações sobre os recursos de legado digital
          do Facebook está correta?{" "}
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
              O Facebook não possui recursos para gerenciamento póstumo de
              contas de usuário.{" "}
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
              O Facebook oferece a opção de cadastrar herdeiros para
              gerenciamento póstumo, mas não permite transformar o perfil em um
              memorial digital.
            </p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>
              O Facebook permite que os usuários escolham um contato de legado
              para gerenciar sua conta após a morte; e além disso, oferece a
              opção de transformar o perfil em um memorial digital ou há a
              possibilidade de exclusão do perfil após o falecimento.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pergunta3;
