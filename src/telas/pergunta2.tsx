import Pergunta from "../componentes/Pergunta/Index";

const Pergunta2 = () => {
  return (
    <Pergunta
      pergunta={"bolinha é uma fofinha"}
      letraA="Gestão e preservação dos dados online após a morte"
      letraB="Processo de criação de um legado físico."
      letraC="Herança de bens físicos após a morte."
      gabarito="A"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta2;
