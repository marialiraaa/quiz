import "./BemVindo.css";
import LogoQuiz from "../assets/img/legacyQuizLogo.png";
import Som from "../assets/img/som.png";
import ArrowRight from "../assets/img/fluent--arrow-right-12-filled.svg?react";
import { useNavigate } from "react-router-dom";

const bem_vindo = () => {
  const navigate = useNavigate();
  const irParaRegistro = () => {
    navigate("/registro");
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          right: 40,
          marginTop: 60,
        }}
      >
        <button style={{ backgroundColor: "transparent" }}>
          <img src={Som} alt="" height="23" width="23" />
        </button>
      </div>

      <div className="Logo">
        <img src={LogoQuiz} alt="" height="99" width="434" />
      </div>

      <div className="container">
        <div className="triangleWelcomeBox"></div>
        <div className="welcomeBox">
          <p style={{ textAlign: "center" }}>Bem-vindo(a) ao Legacy Quiz.</p>
          <p className="ordenado">
            Você sabia que nossos dados digitais continuam a existir além da sua
            vida?{" "}
            <p>
              {" "}
              Se por acaso não souber a resposta, sintasse à vontade para
              escolher a opção que lhe pareça mais plausível.{" "}
            </p>
          </p>
          <p className="ordenado">
            {" "}
            Lembre-se, este quiz tem como objetivo destacar a importância dos
            dados digitais após a morte e promover uma reflexão sobre o legado
            que deixamos para trás.
          </p>
          <p className="ordenado">
            {" "}
            Responda e descubra seu nível de conhecimento: de iniciante a mestre
            dos dados!. <p>Boa sorte!</p>{" "}
          </p>
        </div>
      </div>

      <div className="BotoesBaixo">
        <button className="Btntamanho">Tutorial</button>
        <button
          className="Btntamanho"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={irParaRegistro}
        >
          <p>Avançar</p>
          <ArrowRight width={20} height={20} style={{ marginLeft: 5 }} />
        </button>
      </div>
    </>
  );
};

export default bem_vindo;
