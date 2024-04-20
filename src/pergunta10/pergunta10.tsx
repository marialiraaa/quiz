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
          10. O TikTok é conhecido por seu conteúdo de vídeos curtos. Como o
          legado digital é preservado nessa plataforma?{" "}
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
            <p> Vídeos podem ser mantidos como tributos póstumos. </p>
          </div>
        </div>
        <div className="quadrado2">
          <div className="LetraB">
            <h1>B</h1>
          </div>
          <div className="textoB">
            <p> Todos os vídeos são automaticamente removidos.</p>
          </div>
        </div>
        <div className="quadrado3">
          <div className="LetraC">
            <h1>C</h1>
          </div>
          <div className="TextoC">
            <p>
              ONão há recursos para legado digital no TikTok, sendo assim, não
              há nenhuma pena para o uso indevido dos vídeos.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pergunta3;
