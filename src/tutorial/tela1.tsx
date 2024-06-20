import ModalComponent from "../componentes/modal/index";

const Modal = () => {
  return (
    <ModalComponent
      texto1="Ajuste o som conforme desejado."
      texto2="Ao iniciar o Quiz, terá 30 segundos para responder cada pergunta."
      texto3="Caso não responda dentro do intervalo de 30 segundos, a navegação avançará, sem acúmulo de pontos."
    />
  );
};

export default Modal;
