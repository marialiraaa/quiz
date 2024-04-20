import "./BemVindo.css";
import LogoQuiz from "../assets/img/logo.png";
import Som from "../assets/img/som.png";
import { Link } from "react-router-dom";

const bem_vindo = () => {
  return (
    <>
      <div className="menu">
        <div className="left"></div>
        <div className="center">
          <img src={LogoQuiz} alt="" height="99" width="434" />
        </div>

        <div className="right">
          <div className="BotoesTopo">
            <button>Ranking</button>
            <button>
              <img src={Som} alt="" height="23" width="23" />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="quadrado">
        <p>
          Bem-vindo(a) ao <b>Quiz de legado.</b>
        </p>
        <p className="ordenado">
          Você sabia que nossos dados digitais continuam a existir além da sua
          vida?{" "}
          <p>
            {" "}
            <u>
              Se por acaso não souber a resposta, sintasse à vontade para
              escolher a opção que lhe pareça mais plausível.
            </u>{" "}
          </p>
        </p>
        <p className="ordenado">
          {" "}
          Lembre-se, este quiz tem como objetivo destacar a importância dos
          dados digitais após a morte e promover uma reflexão sobre o legado que
          deixamos para trás. <p>Boa sorte!</p>{" "}
        </p>
      </div>

      <div className="BotoesBaixo">
        <button className="Btntamanho">Tutorial</button>
        <Link to="/registro">
          <button className="Btntamanho">Avançar</button>
        </Link>
      </div>
    </>
  );
};

export default bem_vindo;
