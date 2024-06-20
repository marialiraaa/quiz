import Pergunta from "../componentes/Pergunta/Index";

const Pergunta14 = () => {
  return (
    <Pergunta
      pergunta={
        "14. Como a Lei Geral de Proteção de Dados (LGPD) se aplica aos dados pessoais de uma pessoa falecida?"
      }
      letraA="A LGPD não se aplica aos dados de pessoas falecidas."
      letraB="A LGPD exclui especificamente os dados de pessoas falecidas de sua aplicação."
      letraC="A LGPD continua a proteger os dados pessoais de uma pessoa mesmo após sua morte, garantindo que sejam tratados de acordo com os princípios estabelecidos na lei."
      gabarito="C"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta14;
