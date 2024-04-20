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
          7. Gloria Maria, a primeira repórter negra de destaque da TV
          brasileira, morreu em 2023. Com relação ao seu legado digital,
          assinale a alternativa incorreta.{" "}
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
              Os familiares de Glória Maria encarregaram profissionais
              especializados em gestão de herança digital para lidar com suas
              contas e perfis online, garantindo uma transição suave e
              respeitosa{" "}
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
              Glória Maria deixou instruções claras para que todas as suas
              contas e perfis digitais fossem excluídos imediatamente após sua
              morte, como parte de sua vontade.
            </p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>
              A  família de Glória Maria decidiu deixar suas contas digitais
              ativas, permitindo que seus seguidores continuassem a interagir
              com seu legado online.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pergunta3;
