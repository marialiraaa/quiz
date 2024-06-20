import Pergunta from "../componentes/Pergunta/Index";

const Pergunta10 = () => {
  return (
    <Pergunta
      pergunta={
        "10. O TikTok é conhecido por seu conteúdo de vídeos curtos. Como o legado digital é preservado nessa plataforma?"
      }
      letraA="Vídeos podem ser mantidos como tributos póstumos."
      letraB="Todos os vídeos são automaticamente removidos."
      letraC="Não há recursos para legado digital no TikTok, sendo assim, não há nenhuma pena para o uso indevido dos vídeos."
      gabarito="A"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta10;
