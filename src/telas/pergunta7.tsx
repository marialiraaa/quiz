import Pergunta from "../componentes/Pergunta/Index";

const Pergunta7 = () => {
  return (
    <Pergunta
      pergunta={
        "7. Gloria Maria, a primeira repórter negra de destaque da TV brasileira, morreu em 2023. Com relação ao seu legado digital, assinale a alternativa incorreta."
      }
      letraA="Os familiares de Glória Maria encarregaram profissionais especializados em gestão de herança digital para lidar com suas contas e perfis online, garantindo uma transição suave e respeitosa."
      letraB="Glória Maria deixou instruções claras para que todas as suas contas e perfis digitais fossem excluídos imediatamente após sua morte, como parte de sua vontade."
      letraC="A  família de Glória Maria decidiu deixar suas contas digitais ativas, permitindo que seus seguidores continuassem a interagir com seu legado online."
      gabarito="B"
      imgSource={"../assets/img/heranca.png"}
    />
  );
};

export default Pergunta7;
