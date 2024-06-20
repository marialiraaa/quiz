import ModalComponent from "../componentes/modal/index";

const Modal = () => {
  return (
    <ModalComponent
      texto1="Menos tempo nas respostas resultará em mais pontos."
      texto2="Ao responder cada pergunta, você receberá um feedback indicando se acertou ou errou a questão."
      texto3="Após responder cada questão, você terá a opção de retornar ao início do jogo. Se não conseguir completar o jogo, você não estará no pódio."
    />
  );
};

export default Modal;
