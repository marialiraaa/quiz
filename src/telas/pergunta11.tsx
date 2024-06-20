import Pergunta from "../componentes/Pergunta/Index";

const Pergunta11 = () => {
  return (
    <Pergunta
      pergunta={
        "11. Qual opção do Gmail permite que você destine bens ou exclua dados permanentemente?"
      }
      letraA="Configurações de conta."
      letraB="Recursos de privacidade."
      letraC="Gerenciamento de e-mails."
      gabarito="C"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta11;
