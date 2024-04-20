import "./RespostaC.css";
import p1 from "../assets/img/img1.png";

export const RepostaC = () => {
  return (
    <div className="borda">
      <div className="quadrado">
        <h4>1. O que significa o termo "Legado Digital"?</h4>
      </div>
      <div className="coloracao">
        {" "}
        <b>Boa! Resposta correta.</b>{" "}
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
      <div className="evolucao">
        <img src={p1} alt="" height="94" width="959" />
      </div>
      <div className="BotoesBaixo">
        <button>Retornar</button>
        <button>Avançar</button>
      </div>
    </div>
  );
};

export default RepostaC;
