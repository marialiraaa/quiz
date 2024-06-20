import Pergunta from "../componentes/Pergunta/Index";

const Pergunta6 = () => {
  return (
    <Pergunta
      pergunta={
        "6. Steve Jobs, ex-diretor executivo da Apple, morreu em 2011. Como a herança digital dele foi administrada por seus familiares?"
      }
      letraA="A família de Steve Jobs preservou sua memória e continuou a prosperar com base nos projetos e visão que Jobs deixou para trás, gerenciando ativamente seus ativos digitais."
      letraB="Encerramento imediato de todas as atividades digitais relacionadas a Steve Jobs, protegendo sua privacidade póstuma."
      letraC="Todos os dados digitais foram deixados sem administração, resultando em uma preservação natural e espontânea de sua herança digital."
      gabarito="A"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta6;
