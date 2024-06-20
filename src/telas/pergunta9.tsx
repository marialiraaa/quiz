import Pergunta from "../componentes/Pergunta/Index";

const Pergunta9 = () => {
  return (
    <Pergunta
      pergunta={
        "9. Qual das seguintes afirmações sobre os recursos de legado digital do Facebook está correta?"
      }
      letraA="O Facebook não possui recursos para gerenciamento póstumo de contas de usuário."
      letraB="O Facebook oferece a opção de cadastrar herdeiros para gerenciamento póstumo, mas não permite transformar o perfil em um memorial digital."
      letraC="O Facebook permite que os usuários escolham um contato de legado para gerenciar sua conta após a morte; e além disso, oferece a opção de transformar o perfil em um memorial digital ou há a possibilidade de exclusão do perfil após o falecimento."
      gabarito="C"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta9;
