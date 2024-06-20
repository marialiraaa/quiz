import Tutorial from "../../tutorial/tela1";
// Certifique-se de importar React se não estiver importad
import "./styles.css";
import check from "../../assets/img/checklist.png";

type Props = {
  texto1: string;
  texto2: string;
  texto3: string;
};

function Modal({ texto1, texto2, texto3 }: Props) {
  return (
    <div className="quadrado">
      <div className="center">
        <img src={check} alt="" height="32.67" width="32.67" />
        <h4 className="TextOrdenado "> {texto1}</h4>
      </div>
      <div className="center">
        <img src={check} alt="" height="32.67" width="32.67" />
        <h4 className="TextOrdenado "> {texto2}</h4>
      </div>
      <div className="center">
        <img src={check} alt="" height="32.67" width="32.67" />
        <h4 className="TextOrdenado ">{texto3}</h4>
      </div>
      <div className="btnbaixo">
        <button className="fechar">Fechar X</button>
        <button className="avancar">Avançar</button>
      </div>
    </div>
  );
}

export default Modal;
