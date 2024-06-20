import Pergunta from "../componentes/Pergunta/Index";

const Pergunta4 = () => {
  return (
    <Pergunta
      pergunta={"4. Sobre o legado digital, ele é:"}
      letraA="Um conjunto de bens e ativos digitais, como fotos, e-mail e vídeos, acumulados por usuários em dispositivos e/ou na Internet, repassados para terceiros após o falecimento do proprietário"
      letraB="Algo que deve ser deixado para os especialistas lidarem, não para o público se preocupar."
      letraC="Um conjunto de bens físicos"
      gabarito="A"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta4;
