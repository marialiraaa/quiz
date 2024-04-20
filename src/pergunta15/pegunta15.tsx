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
          15. Como os herdeiros ou representantes legais podem exercer os
          direitos em relação aos dados póstumos de acordo com a Lei Geral de
          Proteção de Dados (LGPD)?
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
              Os herdeiros ou representantes legais não têm direitos sobre os
              dados póstumos, pois a LGPD não se aplica a pessoas falecidas.{" "}
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
              Os herdeiros ou representantes legais só podem acessar os dados
              póstumos com permissão explícita do provedor de serviços online.
            </p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>
              Os herdeiros ou representantes legais podem solicitar o acesso,
              correção ou exclusão dos dados póstumos, desde que sigam os
              procedimentos estabelecidos na lei.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pergunta3;
