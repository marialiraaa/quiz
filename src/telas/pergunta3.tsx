import Pergunta from "../componentes/Pergunta/Index";

const Pergunta3 = () => {
  return (
    <Pergunta
      pergunta={"3. O que podemos incorporar em um testamento digital?"}
      letraA="Um registro abrangente dos bens físicos e tangíveis."
      letraB="Uma declaração legal que determina o destino dos bens digitais após o falecimento, incluindo a nomeação de guardiões para gerenciar contas em redes sociais, e a possibilidade de deixar mensagens finais compartilhadas online para amigos e familiares."
      letraC="Todas as opções estão corretas."
      gabarito="B"
      imgSource={".../../../src/assets/img/heranca.png"}
    />
  );
};

export default Pergunta3;
