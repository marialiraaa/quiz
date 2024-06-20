import Pergunta from "../componentes/Pergunta/Index";

const Pergunta15 = () => {
  return (
    <Pergunta
      pergunta={
        "15. Como os herdeiros ou representantes legais podem exercer os direitos em relação aos dados póstumos de acordo com a Lei Geral de Proteção de Dados (LGPD)?"
      }
      letraA="Os herdeiros ou representantes legais não têm direitos sobre os dados póstumos, pois a LGPD não se aplica a pessoas falecidas."
      letraB="Os herdeiros ou representantes legais só podem acessar os dados póstumos com permissão explícita do provedor de serviços online."
      letraC="Os herdeiros ou representantes legais podem solicitar o acesso, correção ou exclusão dos dados póstumos, desde que sigam os procedimentos estabelecidos na lei."
      gabarito="C"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta15;
