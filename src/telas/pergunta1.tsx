import Pergunta from "../componentes/Pergunta/Index";

const Pergunta1 = () => {
  return (
    <Pergunta
      pergunta="1. O que significa o termo Legado Digital?"
      letraA="Transmissão de bens físicos após a morte."
      letraB="Todo o patrimônio gerado e acumulado por um usuário de plataformas digitais ao longo de sua vida."
      letraC="Documento legal que especifica a transferência de ativos digitais."
      gabarito="B"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta1;
